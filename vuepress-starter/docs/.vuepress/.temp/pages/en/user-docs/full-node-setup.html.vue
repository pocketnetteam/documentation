<template><div><h1 id="full-node-setup-guide" tabindex="-1"><a class="header-anchor" href="#full-node-setup-guide"><span>Full Node Setup Guide</span></a></h1>
<p>This guide provides instructions on how to set up a node to support the PocketNet blockchain network and the Bastyon decentralized social media app. PocketNet Core node operators are rewarded with the platform cryptocurrency, PKOIN, by participating in a process called staking, which generates new blocks on the blockchain. For more details about the PocketNet network, please refer to our whitepaper.</p>
<p>The Bastyon social media site can be accessed at <a href="https://bastyon.com" target="_blank" rel="noopener noreferrer">https://bastyon.com</a></p>
<!--If you are editing System requirements section, please update other instances of System Requierements, mentioned in other parts of the documentation-->
<h2 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements"><span>System Requirements</span></a></h2>
<h3 id="minimum-requirements" tabindex="-1"><a class="header-anchor" href="#minimum-requirements"><span>Minimum Requirements</span></a></h3>
<table>
<thead>
<tr>
<th>Component</th>
<th>Specification</th>
</tr>
</thead>
<tbody>
<tr>
<td>OS</td>
<td>Windows 7 or higher (64 bit) / Linux (Debian, Ubuntu, Mint, etc.) (64 bit)</td>
</tr>
<tr>
<td>Processor</td>
<td>2 core x86-64 CPU</td>
</tr>
<tr>
<td>RAM</td>
<td>4 GB</td>
</tr>
<tr>
<td>Internet</td>
<td>10 Mbit</td>
</tr>
<tr>
<td>Storage</td>
<td>150 GB* free SSD space for blockchain storage</td>
</tr>
</tbody>
</table>
<h3 id="recommended-requirements" tabindex="-1"><a class="header-anchor" href="#recommended-requirements"><span>Recommended Requirements</span></a></h3>
<table>
<thead>
<tr>
<th>Component</th>
<th>Specification</th>
</tr>
</thead>
<tbody>
<tr>
<td>OS</td>
<td>Windows 7 or higher (64 bit) / Linux (Debian, Ubuntu, Mint, etc.) (64 bit)</td>
</tr>
<tr>
<td>Processor</td>
<td>4 core x86-64 CPU</td>
</tr>
<tr>
<td>RAM</td>
<td>12 GB</td>
</tr>
<tr>
<td>Internet</td>
<td>- 100 Mbit <br/>- Publicly accessible IP address and ports (see Network Setup section)</td>
</tr>
<tr>
<td>Storage</td>
<td>Same as minimum requirements</td>
</tr>
</tbody>
</table>
<h2 id="additional-notes" tabindex="-1"><a class="header-anchor" href="#additional-notes"><span>Additional Notes</span></a></h2>
<ol>
<li>
<p><strong>Storage Growth:</strong></p>
<ul>
<li>Disk space consumption may increase over time due to blockchain growth.</li>
</ul>
</li>
<li>
<p><strong>Initial Synchronization:</strong></p>
<ul>
<li>Extra free space on the system disk and a large amount of RAM are required only during the first synchronization of the blockchain.</li>
</ul>
</li>
<li>
<p><strong>Low RAM Troubleshooting:</strong></p>
<ul>
<li>If you have less RAM than recommended and the program closes automatically when you first start the node, increase the size of the paging file or swap file.</li>
</ul>
</li>
</ol>
<h2 id="network-setup" tabindex="-1"><a class="header-anchor" href="#network-setup"><span>Network Setup</span></a></h2>
<p>For optimal performance as a public node, ensure:</p>
<ul>
<li>Your node has a publicly accessible IP address</li>
<li>Necessary ports are open and properly configured (refer to network configuration documentation for specific port requirements)</li>
</ul>
<h2 id="linux-setup-ubuntu-debian-mint-etc" tabindex="-1"><a class="header-anchor" href="#linux-setup-ubuntu-debian-mint-etc"><span>Linux Setup (Ubuntu, Debian, Mint, etc.)</span></a></h2>
<ol>
<li>
<p>Download the latest <code v-pre>pocketnetcore_*_linux_x64_setup.deb</code> package from the project <a href="https://github.com/pocketnetteam/pocketnet.core/releases" target="_blank" rel="noopener noreferrer">releases page</a>.</p>
</li>
<li>
<p>Install the package with root privileges. Open the terminal in the directory where you downloaded the installer and execute the command:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ <span class="token function">sudo</span> dpkg <span class="token parameter variable">-i</span> pocketnetcore_*_linux_x64_setup.deb</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>On Ubuntu and many Linux distributions, it's necessary to set the open files limit to 10000 to prevent errors. Run <code v-pre>ulimit -n</code> to view the current open file limit. Set the limit to 10000 open files with:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ <span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-n</span> <span class="token number">10000</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>After installation, start the GUI pocketcoin client from the command line:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ pocketcoin-qt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>(For running the PocketNet Core node from the command line or in headless mode, refer to the &quot;Running a Headless Node from the Command Line&quot; section later in this document.)</p>
</li>
</ol>
<p>At this point, the PocketNet Core client will start synchronizing with the network. Depending on network performance, full synchronization can take anywhere from a few days to over a week to complete. If you need to bring a node up in a short period, you can download a checkpoint by following the instructions in the <a href="#starting-node-from-a-blockchain-snapshot">Starting a Node From a Blockchain Snapshot</a> section below. However, it's recommended to allow a node to synchronize with the network on its own, as this validates the public blockchain and provides additional security and decentralization. During this time, the node unpacks the associated SQL database. You can track the unpacking process by monitoring the increase in the size of the working directory.</p>
<h2 id="windows-setup" tabindex="-1"><a class="header-anchor" href="#windows-setup"><span>Windows Setup</span></a></h2>
<ol>
<li>
<p>Download the <code v-pre>pocketnetcore_*_win_x64_setup.exe</code> installer from the GitHub <a href="https://github.com/pocketnetteam/pocketnet.core/releases" target="_blank" rel="noopener noreferrer">releases page</a>.</p>
</li>
<li>
<p>Run the installer and follow the instructions, changing the installation location if necessary.</p>
</li>
<li>
<p>Start the PocketNet Core application from the Windows Start menu. A Windows Security Alert will pop up for Windows Defender Firewall. Select &quot;Allow access&quot; to allow PocketNet Core through the Windows Defender Firewall for Private networks.</p>
<p><img src="@source/en/user-docs/windows-security-alert.png" alt="Windows Security Alert"></p>
</li>
<li>
<p>You will be prompted with a Setup Wizard:</p>
<p><img src="@source/en/user-docs/setup-wizzard.png" alt="Setup Wizard"></p>
<blockquote>
<p><strong>Important!</strong> After installing the node program and launching it for the first time, you need to specify the path to the node's working directory!</p>
</blockquote>
</li>
<li>
<p>Select &quot;Use custom data directory&quot; and specify the path to the node's working directory, then click OK.</p>
<p><img src="@source/en/user-docs/welcome-path-setup.png" alt="Welcome Path Setup"></p>
</li>
<li>
<p>The program will launch and begin indexing the database:</p>
<p><img src="@source/en/user-docs/db-indexing.png" alt="Database Indexing"></p>
</li>
<li>
<p>The PocketNet Core client will start synchronizing with the network. Depending on network performance, full synchronization can take anywhere from a few days to over a week to complete. For faster setup, you can download a checkpoint by following the instructions in the <a href="#starting-node-from-a-blockchain-snapshot">Starting a Node From a Blockchain Snapshot</a> section below. However, it's recommended to allow a node to synchronize with the network on its own, as this validates the public blockchain and provides additional security and decentralization.</p>
<p><img src="@source/en/user-docs/pocketnet-network-synchronization.png" alt="PocketNet Network Synchronization"></p>
</li>
<li>
<p>After synchronization, the main node window will launch:</p>
<p><img src="@source/en/user-docs/pocketnet-app-window.png" alt="PocketNet App Window"></p>
</li>
</ol>
<h2 id="docker-setup" tabindex="-1"><a class="header-anchor" href="#docker-setup"><span>Docker Setup</span></a></h2>
<p>Ensure that sufficient CPU, memory, and disk space are allocated to your Docker container according to the &quot;Minimum System Requirements&quot; section above. You can start your node with a single command from Docker:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\</span></span>
<span class="line">    <span class="token parameter variable">--name</span><span class="token operator">=</span>pocketnet.main <span class="token punctuation">\</span></span>
<span class="line">    <span class="token parameter variable">-p</span> <span class="token number">37070</span>:37070 <span class="token punctuation">\</span></span>
<span class="line">    <span class="token parameter variable">-p</span> <span class="token number">38081</span>:38081 <span class="token punctuation">\</span></span>
<span class="line">    <span class="token parameter variable">-p</span> <span class="token number">8087</span>:8087 <span class="token punctuation">\</span></span>
<span class="line">    <span class="token parameter variable">-v</span> /var/pocketnet/.data:/home/pocketcoin/.pocketcoin <span class="token punctuation">\</span> </span>
<span class="line">    pocketnetteam/pocketnet.core:latest</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The node can be controlled in Docker using the <code v-pre>pocketcoin-cli</code> and <code v-pre>pocketcoin-tx</code> commands:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ <span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">--format</span> <span class="token string">'{{.ID}}\t{{.Names}}\t{{.Image}}'</span></span>
<span class="line">ea7759a47250    pocketnet.main      pocketnetteam/pocketnet.core:latest</span>
<span class="line"></span>
<span class="line">$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> pocketnet.main /bin/sh</span>
<span class="line"></span>
<span class="line">$ pocketcoin-cli <span class="token parameter variable">--help</span></span>
<span class="line">$ pocketcoin-tx <span class="token parameter variable">--help</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For more information, visit: https://hub.docker.com/r/pocketnetteam/pocketnet.core</p>
<h2 id="starting-node-from-a-blockchain-snapshot" tabindex="-1"><a class="header-anchor" href="#starting-node-from-a-blockchain-snapshot"><span>Starting Node from a Blockchain Snapshot</span></a></h2>
<p>While it's recommended to allow a PocketNet Core node to sync with the blockchain on its own to maximize network security and decentralization, you can use a blockchain snapshot to bring up a node in a shorter time. The development team provides periodic archives of the blockchain, which can be downloaded from https://snapshot.pocketnet.app/latest.tgz.</p>
<blockquote>
<p><strong>Important:</strong> Back up your wallet.dat file before attempting to load the blockchain from an archive.</p>
</blockquote>
<p>Use the following Linux bash shell commands to delete the existing blockchain data on disk, download the blockchain archive, and extract it to the default location:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ <span class="token builtin class-name">cd</span> ~/.pocketcoin</span>
<span class="line">$ <span class="token function">rm</span> <span class="token parameter variable">-r</span> blocks</span>
<span class="line">$ <span class="token function">rm</span> <span class="token parameter variable">-r</span> chainstate</span>
<span class="line">$ <span class="token function">rm</span> <span class="token parameter variable">-r</span> indexes</span>
<span class="line">$ <span class="token function">rm</span> <span class="token parameter variable">-r</span> pocketdb</span>
<span class="line">$ <span class="token function">wget</span> https://snapshot.pocketnet.app/latest.tgz</span>
<span class="line">$ <span class="token function">tar</span> <span class="token parameter variable">-xzf</span> latest.tgz <span class="token parameter variable">-C</span> ./</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="running-a-headless-node-from-the-command-line" tabindex="-1"><a class="header-anchor" href="#running-a-headless-node-from-the-command-line"><span>Running a Headless Node From the Command Line</span></a></h2>
<p>To start PocketNet core in text-only mode from a command terminal, use the <code v-pre>pocketcoind</code> command. On Linux, you can launch pocketcoind as a daemon process running in the background by using the -daemon parameter:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ pocketcoind <span class="token parameter variable">-daemon</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>To see other available options with pocketcoind:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ pocketcoind -?</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>You can send commands to pocketcoind using the pocketcoin-cli program. These same commands can also be run through the pocketcoin-qt debug terminal. Here are some common and useful commands:</p>
<ul>
<li>
<p>Display list of available commands:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ pocketcoin-cli <span class="token builtin class-name">help</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Get specific help on a command:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ pocketcoin-cli <span class="token builtin class-name">help</span> <span class="token string">"command"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Gracefully shutdown the pocketcoind process:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ pocketcoin-cli stop</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Display your current balance of PKOIN:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ pocketcoin-cli getbalance</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Generate a new receive address with a descriptive &quot;label&quot;:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ pocketcoin-cli getnewaddress <span class="token string">"label"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>List previously generated or used receive addresses:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ pocketcoin-cli listreceivedbyaddress</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Send an amount of PKOIN to an address:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ pocketcoin-cli sendtoaddress <span class="token string">"address"</span> amount</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>View a report of PKOINs won through staking:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ pocketcoin-cli getstakereport</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Check if your node is currently staking:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ pocketcoin-cli getstakinginfo</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>View a list of connected peers:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ pocketcoin-cli getpeerinfo</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<p>Pocketcoin-cli has the capability to send commands to a remote node for remote management and headless node operation. This is an advanced topic beyond the scope of this guide; however, you can find necessary commands for remote operation by running <code v-pre>pocketcoin-cli --help</code>.</p>
<h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting"><span>Troubleshooting</span></a></h2>
<p>If PocketNet Core fails, the first step is to check the debug.log file in the pocketcoin directory (<code v-pre>~/.pocketcoin</code> on Linux, <code v-pre>%HOMEPATH%\appdata\roaming\pocketcoin</code> on Windows). This file often provides clues about what went wrong with the program.</p>
<p>For help with node setup, post to the Bastyon/Pocknet tag on the Bastion social media app.</p>
<p>To connect with other node operators and keep up with developments and alerts, join the Node Owners chat on Bastyon. Message SnowflakeCrusher, Vortex_v, or Malaka on Bastyon to be added to the group.</p>
<p>To report software defects and view current issues, check our <a href="https://github.com/pocketnetteam/pocketnet.core/issues" target="_blank" rel="noopener noreferrer">GitHub issues page</a>.</p>
<h2 id="contributions" tabindex="-1"><a class="header-anchor" href="#contributions"><span>Contributions</span></a></h2>
<p>We welcome contributions to our Github projects. We are looking for C/C++ and Javascript Node.js coders, as well as anyone with a willingness to learn. For more information, check out our <RouteLink to="/get-started.html">contributions'</RouteLink> documentation.</p>
</div></template>


