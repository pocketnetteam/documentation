'''
Functionality:
-This python script collects statistics of source .md files in Bastyon documentation and their respective translations 
(Russian, Deutsch, French, Korean, Spanish, Italiano, Chinese, English)
-There will be a first table with stats, where each all languages starting from english will be in rows and columns, and the statistics
will be collected for each source language which is being stored in the first column, against translation languages. For 
example, in the first row and first column will be english, then russian will be in the first row but in second column, and it will show
the total translation coverage for all files that have been source files in english. The second row first, column will contain russian as a source
language and it will be used for calculating stats for other supported languages.
-There will also be a second table, tracking the translation per file stats are saved in the table where in the first column, there are source (original files), that may have been 
written in different languages, and other columns show if there is a translation for that particular file in the same directory name. The directory name is the same with exception
of non-english directories where /docs paths are prefixed with the language code. For example english source would be in docs/dev/node/building.md 
and russian tranlation would be in docs/ru/dev/node/building_ru.md 

Assumptions
- File names should be uniformed, across languages
- Naming convention should be filename_[xx].md (ex. filename_ru.md), except English. When it is english, the file name would be
filename.md
- This script is being run from the /docs directory
- We don't have any knowledge of the folder structure
- We can't definitively say what is source language that was used to write the original file. Therefore, date created is being used 
to determine the "true" source.
- Other languages have their suffix (_ru, _de, etc.)
Usage:
Run translation_track.py file in /docs directory
Wait for it to complete
Check the stats file called translation_stats.md saved in /docs directory
'''

import os
from datetime import datetime
from collections import defaultdict
import time

# Supported languages and their codes
LANGUAGES = {
    'en': 'English',
    'ru': 'Russian',
    'de': 'Deutsch',
    'fr': 'French',
    'ko': 'Korean',
    'es': 'Spanish',
    'it': 'Italiano',
    'zh': 'Chinese'
}

def get_base_filename(filename, filepath):
    """Extract base filename without language suffix and extension"""
    # Extract name without extension
    name = os.path.splitext(filename)[0]
    
    # Remove language suffix if present
    for lang_code in LANGUAGES.keys():
        if name.endswith(f'_{lang_code}'):
            name = name[:-3]  # Remove language suffix
    
    return name

def scan_translations(start_path='.'):
    """Scan directory for translations and collect statistics"""
    # Structure to store file groups and their translations
    file_groups = defaultdict(lambda: {'files': defaultdict(str), 'source_lang': None})
    
    # Walk through directory
    for root, _, files in os.walk(start_path):
        for file in files:
            if not file.lower().endswith('.md'):
                continue
                
            # Skip README.md and translation_stats.md
            if file.lower() in ['readme.md', 'translation_stats.md']:
                continue
                
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, start_path)
            base_name = get_base_filename(file, rel_path)
            
            # Determine language from filename and path
            lang = 'en'  # Default to English
            path_parts = rel_path.split(os.sep)
            
            # Check for language in path first
            for lang_code in LANGUAGES.keys():
                if lang_code in path_parts:
                    lang = lang_code
                    break
            
            # Then check filename suffix
            for lang_code in LANGUAGES.keys():
                if file.endswith(f'_{lang_code}.md'):
                    lang = lang_code
                    break
            
            # Group files by their base name
            file_groups[base_name]['files'][lang] = rel_path
            
            # Set source language based on naming convention
            if not file_groups[base_name]['source_lang']:
                file_groups[base_name]['source_lang'] = lang
            elif lang == 'en' and file_groups[base_name]['source_lang'] != 'en':
                # English files are always considered source
                file_groups[base_name]['source_lang'] = 'en'

    return file_groups

def generate_language_matrix(file_groups):
    """Generate statistics matrix for languages"""
    stats = defaultdict(lambda: defaultdict(int))
    
    for group in file_groups.values():
        source_lang = group['source_lang']
        translations = set(group['files'].keys())
        
        # Count translations for this source language
        for target_lang in LANGUAGES.keys():
            if target_lang in translations and target_lang != source_lang:
                stats[source_lang][target_lang] += 1
                
        # Count total source files
        stats[source_lang]['total'] += 1
    
    return stats

def write_stats_file(file_groups, output_file='translation_stats.md'):
    """Write statistics to markdown file"""
    stats = generate_language_matrix(file_groups)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        # Write header
        f.write(f"# Translation Statistics\n\n")
        f.write(f"Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        
        # Write language matrix first
        f.write("## Translation Coverage Matrix\n\n")
        f.write("| Source Language | " + " | ".join(LANGUAGES.values()) + " | Total Files |\n")
        f.write("|----------------|" + "|".join(["-" * len(lang) for lang in LANGUAGES.values()]) + "|--------------|\n")
        
        for source_lang, translations in stats.items():
            row = [LANGUAGES[source_lang]]
            for target_lang in LANGUAGES.keys():
                if target_lang == source_lang:
                    row.append("—")
                else:
                    count = translations[target_lang]
                    total = translations['total']
                    percentage = (count / total * 100) if total > 0 else 0
                    row.append(f"{count}/{total} ({percentage:.1f}%)")
            row.append(str(translations['total']))
            f.write("| " + " | ".join(row) + " |\n")
        
        # Write per-file statistics second
        f.write("\n## Per-File Translation Status\n\n")
        f.write("| Source File | " + " | ".join(LANGUAGES.values()) + " |\n")
        f.write("|-------------|" + "|".join(["-" * len(lang) for lang in LANGUAGES.values()]) + "|\n")
        
        for base_name, group in sorted(file_groups.items()):
            row = [f"{base_name} ({LANGUAGES[group['source_lang']]})"]
            for lang in LANGUAGES.keys():
                if lang == group['source_lang']:
                    row.append("SOURCE")
                else:
                    row.append("✓" if lang in group['files'] else "❌")
            f.write("| " + " | ".join(row) + " |\n")
        
        # Write missing translations section last
        f.write("\n## Missing Translations\n\n")
        for lang_code, lang_name in LANGUAGES.items():
            if lang_code == 'en':  # Skip English as it's the source
                continue
                
            missing_files = []
            for base_name, group in sorted(file_groups.items()):
                if group['source_lang'] == 'en' and lang_code not in group['files']:
                    # Get the source file path
                    source_path = group['files']['en']
                    missing_files.append(source_path)
            
            if missing_files:
                f.write(f"\n### Missing {lang_name} Translations ({len(missing_files)} files)\n\n")
                for file_path in missing_files:
                    expected_path = file_path.replace('dev/', f'{lang_code}/dev/').replace('.md', f'_{lang_code}.md')
                    f.write(f"- [ ] {file_path} → {expected_path}\n")
            else:
                f.write(f"\n### Missing {lang_name} Translations\n\nAll files are translated! 🎉\n")

def main():
    try:
        print("Scanning documentation for translations...")
        file_groups = scan_translations()
        print("Generating statistics...")
        write_stats_file(file_groups)
        print("Translation statistics have been saved to 'translation_stats.md'")
    except Exception as e:
        print(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    main()