The plan for Developer's Guide
AI Prompts:
I am trying to design a documentation strategy for Bastyon. I am a volunteer there who wants to help the project to move forward.
The project is called Bastyon. It's a decentralized social platform with a messenger. It also wants to build an API set around building miniapps on Bastyon. Its source code is located at https://github.com/pocketnetteam
The documentation is needed for app usage and developer documentation.
What I need help with a vision for documentation, roadmap and concrete documentation design that adheres with the theory of information and other theoretical work around documentation design.

### Motivation

There are a number of reasons why any project needs to have a superb documentation. Here are a few to call out.
Onboarding new contributors: Clear documentation helps new developers understand the project structure, setup process, and contribution guidelines quickly.
User adoption: Well-documented projects are more likely to be used and recommended by others, as users can easily understand how to implement and use the software.
Maintenance: Good documentation makes it easier for maintainers to understand the codebase, fix bugs, and add new features, even if they didn't write the original code.
Collaboration: It facilitates better collaboration among contributors by providing a common understanding of the project's architecture and processes.
Reducing support burden: Comprehensive documentation can answer many common questions, reducing the need for direct support from maintainers.
Longevity: Projects with good documentation are more likely to survive even if key contributors leave, as knowledge is preserved and accessible.
Code quality: Writing documentation often leads to better code quality, as it forces developers to think through and explain their design decisions.
Community building: It encourages a healthy community by making the project more approachable and fostering a culture of knowledge sharing.
Credibility: Well-documented projects are often perceived as more professional and trustworthy, which can be crucial for open-source adoption in enterprise environments.

### Vision for Bastyon Documentation

The vision for Bastyon's documentation is to create a clear, accessible, and comprehensive resource that empowers users to effectively utilize the platform and enables developers to build innovative applications on top of it. The documentation will serve as a central knowledge hub, promoting adoption, fostering community engagement, and supporting the project's growth.

### Documentation Design Principles

While they are not meant to be prescriptive, design principles can help to identify Bastyon's approach on execution strategy.

1. Modularity: Organize content into logical, self-contained modules for easy navigation and updating.
2. Progressive Disclosure: Present information in layers, from basic to advanced, allowing users to dive deeper as needed.
3. Consistency: Maintain consistent terminology, formatting, and structure throughout the documentation.
4. Accessibility: Ensure documentation is accessible to users with diverse needs and backgrounds.
5. Searchability: Implement robust search functionality with relevant metadata and tagging.
6. Versioning: Clearly indicate documentation versions and maintain archives of previous versions.
7. Interactive Elements: Incorporate interactive examples, code snippets, and tutorials where appropriate.
8. Visual Aids: Use diagrams, flowcharts, and screenshots to illustrate complex concepts.
9. Maintainability: A person shouldn't need to know markdown or a github to file an issue on the documentation.
10. Shared Responsibility: It's everyone's responsibility to make sure the documentation is updated when there are functional or API changes to the project. 

### Requirements

As it was called out in the Motivation section up above, there are three different personas that are tangential to project's documentation, each having their own set of jobs to be done.
- New Developer
	- As a new developer who is looking to contribute to the mission of Bastyon, I can easily find developer documentation so I can start building Bastyon in no time.
	- As a new developer who is looking to contribute to the mission of Bastyon, I can easily find a way to reach out to the code owners, so I can start building Bastyon in no time.
	- As a new developer I can easily file documentation issues that I find with Bastyon documentation, so I don't waste too much time on it.
- Current Bastyon Developer
	- As a current Bastyon developer, I can maintain a high level of documentation, so the project is more approachable and fostering a culture of knowledge sharing 
	- As a current Bastyon developer, I can easily file documentation issues that I find with Bastyon documentation, so I don't waste too much time on it.
- User
	- As a new user I can use the documentation to easily get on-boarded with Bastyon, so my experience is smooth and pleasant
	- As a user I can easily file documentation issues that I find with Bastyon documentation, so I feel like I am contributing to the project without needing to learn the hoops of learning the markdown language or the inner-workings of github.
	- As a new user I can use the documentation to easily get on-boarded with essential how-to channels on Bastyon, so my experience is smooth and pleasant
- Project Enthusiast (non-developer)
	- As a professional translator who wants to contribute to Bastyon's mission, I want to be able to find the necessary resources to translate the documentation materials or project materials into another language.
- Someone who builds business out of using Bastyon
	- As a new node-runner, I can use the documentation to easily get on-boarded with Bastyon, so my experience is smooth and pleasant
	- As a new Author, I can use the documentation to easily get on-boarded with Bastyon, so my experience is smooth and pleasant onboarding..

As such there are a few functional requirements to be fullfiled by Bastyon's documentation.

1. Use a docs-as-code approach: Treat documentation like code, using version control and collaborative tools.
2. Implement automated testing: Use tools to check for broken links, formatting issues, and consistency.
3. Create a feedback loop: Incorporate user feedback mechanisms directly into the documentation.
4. Create translation mechanisms: Create flows to track and implement translations into different languages
5. Leverage community contributions: Establish clear guidelines for community members to contribute to documentation.
6. Integrate with the product: Embed relevant documentation within the Bastyon platform itself for easy access.
7. Implement analytics: Use analytics to track documentation usage and identify areas for improvement, assuming we can do this without doxing Bastyon users.
Given that the documentation already exists, we are not starting from zero but continuing it with making the changes as needed. Below is the proposed documentation structure that takes into account what Bastyon already has.
#### Documentation Structure
1. Getting Started
	- Platform overview
	- Quick start guide
	- How to leave feedback on Bastyon
	- FAQs
2. Community and Support
	- Community guidelines
	- Support channels
	- Feature requests and bug reporting
3. Contribution Guide
	- How to contribute to Bastyon
	- Code of conduct
	- Development workflow
4. User Guide
	- Account setup and management
	- Using the social platform features
	- Messenger functionality
	- Authorship on Bastyon
	- Tutorials and How Tos
	- Troubleshooting
5. Architecture and Design
	- System architecture
	- Decentralization and blockchain integration
	- Security features
6. Developer Documentation
	- API reference
	- SDK documentation
	- MiniApps development guide
	- Best practices and examples
	- Tutorials
### Documentation Roadmap
Documentation is not the goal in itself but rather a perpetual process of refinement  of what is being communicated to project participants or users. Nevertheless, there is a sequence of the execution that we can follow to build robust processes. 

- [ ] Assessment and Planning
	- [ ] Audit existing documentation
	- [ ] Identify key stakeholders and their needs
		- [ ] Create documentation channel and invite the stakeholders
	- [ ] Communicate to key stakeholders the expectations and the proposed changes
	- [ ] Get an agreement from stakeholders
	- [ ] Define documentation goals and metrics
- [ ] Infrastructure Setup
	- [ ] Choose a new documentation platform (e.g., GitBook, ReadTheDocs, MediaWiki, etc ) that supports user feedback, or use the existing one.
	- [ ] Choose other tooling (We need something for translation, dead links scanner, etc)
	- [ ] Set up version control integration with feedback.
	- [ ] Establish a contribution workflow
	- [ ] Implement, "you make the change, you document the update" principle for developer community.
- [ ] Content Creation
	- [ ] Develop a style guide
	- [ ] Create templates for different document types
	- [ ] Begin writing/updating core documentation sections
- [ ] Review and Iteration
	- [ ] Implement peer review process
	- [ ] Gather user feedback
	- [ ] Continuously improve and update content
- [ ] Launch and Promotion
	- [ ] Promote documentation through various channels
- [ ] Maintenance and Expansion
	- [ ] Regular content audits and updates. Can we use some sort of tooling to identify dead links, etc?
	- [ ] Expand documentation based on user needs and platform growth
	- [ ] Create online groups for discussions related to documentation
	- [ ] Train community contributors


By following this documentation strategy, Bastyon can create a robust, user-friendly, and comprehensive resource that supports both users and developers. This approach will help drive adoption, reduce support overhead, and foster a thriving ecosystem around the platform.

### References
#### Existing Documentation Solutions
https://app.archbee.com/signin 

https://www.mediawiki.org 

https://github.com/readthedocs/readthedocs.org/tree/2f48c81e9ce162bbd34229e897db84044b00fe31 




