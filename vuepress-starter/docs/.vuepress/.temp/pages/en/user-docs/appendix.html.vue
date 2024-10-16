<template><div><h1 id="full-node-setup-guide" tabindex="-1"><a class="header-anchor" href="#full-node-setup-guide"><span>Full Node Setup Guide</span></a></h1>
<p>This guide provides instructions on how to setup a node to support the PocketNet blockchain network and Bastyon decentralized social media app. PocketNet Core node operators are rewarded in the platform cryptocurrency, PKOIN, by participating in a process called staking, which generates new blocks on the blockchain. More detail about the PocketNet network can be found at the whitepaper here</p>
<p>The Bastyon social media site can be visited at https://bastyon.com</p>
<h2 id="supported-operating-systems" tabindex="-1"><a class="header-anchor" href="#supported-operating-systems"><span>Supported Operating Systems</span></a></h2>
<p>The below operating systems have been validated to work with PocketNet Core software by the developer and node operator community:</p>
<ul>
<li>Docker</li>
<li>Linux Debian Bullseye and Bookworm</li>
<li>Linux Mint Cinnamon</li>
<li>Linux Ubuntu 20.04 and 18.04</li>
<li>Windows 10</li>
<li>Windows 11</li>
</ul>
<h2 id="minimum-system-requirements" tabindex="-1"><a class="header-anchor" href="#minimum-system-requirements"><span>Minimum System Requirements</span></a></h2>
<p>Below are the minimum system requirements to run a PocketNet node to use as a wallet, for coin staking to earn PKOIN, and to use as a local node on your home network. A node with these requirements may need to be upgraded within the next 1 - 2 years.</p>
<p>2 core x86-64 CPU</p>
<p>4GB RAM</p>
<p>150 GB SSD Drive</p>
<p>10 Mbps internet connection</p>
<h2 id="recommended-system-requirements" tabindex="-1"><a class="header-anchor" href="#recommended-system-requirements"><span>Recommended System Requirements</span></a></h2>
<p>The below system requirements are recommended for a node which will act as a public node to service the Bastyon front end, in addition to wallet, and coin staking capabilities. The recommended requirements should provide enough headroom to support the PocketNet network for at least 2 years into the future.</p>
<p>4 core x86-64 CPU</p>
<p>16 GB RAM</p>
<p>500 GB SSD Drive</p>
<p>100 Mbps internet connection</p>
<p>publicly accessible IP address and ports (see Network Setup below)</p>
<h2 id="linux-setup-ubuntu-debian-mint-etc" tabindex="-1"><a class="header-anchor" href="#linux-setup-ubuntu-debian-mint-etc"><span>Linux Setup (Ubuntu, Debian, Mint, etc.)</span></a></h2>
<p>Download the latest <code v-pre>pocketnetcore_*_linux_x64_setup.deb</code> package from the project releases page at:</p>
<p>https://github.com/pocketnetteam/pocketnet.core/releases</p>
<p>Install package with root privilegies. To do this, open the terminal in the directory where you downloaded the installer and execute the command:</p>
<p><code v-pre>$ sudo dpkg -i pocketnetcore_*_linux_x64_setup.deb</code></p>
<p>On Ubuntu and many Linux distributions it will be necessary to set the open files limit to 10000 in order to prevent errors. Run <code v-pre>ulimit -n</code> to view the current open file limit. Run below command to set ulimit to 10000 open files:</p>
<p><code v-pre>$ ulimit -n 10000</code></p>
<p>After installation, start the GUI pocketcoin client from the command line. (If you would like to run the PocketNet Core node from the command line or in headless mode, go to the &quot;Running a Headless Node from the Command Line&quot; section later in this document.)</p>
<p><code v-pre>$ pocketcoin-qt</code></p>
<p>At this point the PocketNet Core client will start synchornizing with the network. Depending on network performance full synchronization can take anywhere from a few days to over a week to complete. If it is necessary to bring a node up in a short period of time, it is possible to download a checkpoint following the instructions in the &quot;Starting from Checkpoint&quot; section. However, it is recommended to allow a node to synchronize with the network on it’s own as this validates the public block chain and provides additional security and decentralization.</p>
<p>If it is desired to run a full node to support the Bastyon front-end app, proceed to the Network Setup section.</p>
<h2 id="windows-setup" tabindex="-1"><a class="header-anchor" href="#windows-setup"><span>Windows Setup</span></a></h2>
<p>Download the <code v-pre>pocketnetcore_*_win_x64_setup.exe</code> installer from the GitHub releases page here:</p>
<p>https://github.com/pocketnetteam/pocketnet.core/releases</p>
<p>Run the installer and follow the instructions, change the installation location if necessary.</p>
<p>Start the PocketNet Core application from the Windows Start menu. A Windows Security Alert will pop up for Windows Defender Firewall. Select &quot;Allow access&quot; to allow PocketNet Core through the Windows Defender Firewall for Private networks.</p>
<p><img src="@source/en/user-docs/windows-security-alert.png" alt="alt text"></p>
<p>At this point the PocketNet Core client will start synchornizing with the network. Depending on network performance full synchronization can take anywhere from a few days to over a week to complete. If it is necessary to bring a node up in a short period of time, it is possible to download a checkpoint following the instructions in the &quot;Starting from Checkpoint&quot; section below. However it is recommended to allow a node to synchronize with the network on it’s own as this validates the public block chain and provides additional security and decentralization.</p>
<h2 id="docker-setup" tabindex="-1"><a class="header-anchor" href="#docker-setup"><span>Docker Setup</span></a></h2>
<p>Make sure that enough CPU, memory and disk space are allocated to your Docker container according to the &quot;Minimum System Requirements&quot; section above. You can start your node with a single command from Docker.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">   $ <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\</span></span>
<span class="line">       <span class="token parameter variable">--name</span><span class="token operator">=</span>pocketnet.main <span class="token punctuation">\</span></span>
<span class="line">       <span class="token parameter variable">-p</span> <span class="token number">37070</span>:37070 <span class="token punctuation">\</span></span>
<span class="line">       <span class="token parameter variable">-p</span> <span class="token number">38081</span>:38081 <span class="token punctuation">\</span></span>
<span class="line">       <span class="token parameter variable">-p</span> <span class="token number">8087</span>:8087 <span class="token punctuation">\</span></span>
<span class="line">       <span class="token parameter variable">-v</span> /var/pocketnet/.data:/home/pocketcoin/.pocketcoin <span class="token punctuation">\</span> </span>
<span class="line">       pocketnetteam/pocketnet.core:latest</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The node can be controlled in Docker using the <code v-pre>pocketcoin-cli</code> and <code v-pre>pocketcoin-tx</code> commands demonstrated below:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ <span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">--format</span> <span class="token string">'{{.ID}}\t{{.Names}}\t{{.Image}}'</span></span>
<span class="line">ea7759a47250    pocketnet.main      pocketnetteam/pocketnet.core:latest</span>
<span class="line">$</span>
<span class="line">$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> pocketnet.main /bin/sh</span>
<span class="line">$</span>
<span class="line">$ pocketcoin-cli <span class="token parameter variable">--help</span></span>
<span class="line">$ pocketcoin-tx <span class="token parameter variable">--help</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>More information: https://hub.docker.com/r/pocketnetteam/pocketnet.core</p>
<h2 id="starting-node-from-a-blockchain-snapshot" tabindex="-1"><a class="header-anchor" href="#starting-node-from-a-blockchain-snapshot"><span>Starting Node from a Blockchain Snapshot</span></a></h2>
<p>It is recommended to allow a PocketNet Core node to sync with the blockchain on it’s own to maximize network security and decentralization. If it is desired to bring up a node in a short amount of time, the development team provides periodic archives of the block chain which can be downloaded from https://snapshot.pocketnet.app/latest.tgz. Be sure to back up your wallet.dat file before attempting loading the blockchain from archive. The Linux bash shell commands below will delete the existing blockchain data on disk, download the blockchain archive, and extract it to the default location:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ <span class="token builtin class-name">cd</span> ~/.pocketcoin</span>
<span class="line">$ <span class="token function">rm</span> <span class="token parameter variable">-r</span> blocks</span>
<span class="line">$ <span class="token function">rm</span> <span class="token parameter variable">-r</span> chainstate</span>
<span class="line">$ <span class="token function">rm</span> <span class="token parameter variable">-r</span> indexes</span>
<span class="line">$ <span class="token function">rm</span> <span class="token parameter variable">-r</span> pocketdb</span>
<span class="line">$ <span class="token function">wget</span> https://snapshot.pocketnet.app/latest.tgz</span>
<span class="line">$ <span class="token function">tar</span> <span class="token parameter variable">-xzf</span> latest.tgz <span class="token parameter variable">-C</span> ./</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="running-a-headless-node-from-the-command-line" tabindex="-1"><a class="header-anchor" href="#running-a-headless-node-from-the-command-line"><span>Running a Headless Node From the Command Line</span></a></h2>
<p>Running the pocketcoind command will start PocketNet core in text only mode from a command terminal. On Linux, it is possible to launch pocketcoind as a daemon process running in the background by using the -daemon parameter:</p>
<p><code v-pre>$ pocketcoind -daemon</code></p>
<p>To see other available options with pocketcoind:</p>
<p><code v-pre>$ pocketcoind -?</code></p>
<p>Commands can be sent to pocketcoind by using the pocketcoin-cli program. These same commands can also be run through the pocketcoin-qt debug terminal. Below are some common and useful commands.</p>
<p>Display list of available commands to send to the node:</p>
<p><code v-pre>$ pocketcoin-cli help</code></p>
<p>Get specific help on command name &quot;command&quot;:</p>
<p><code v-pre>$ pocketcoin-cli help &quot;command&quot;</code></p>
<p>Send a command to the pocketcoind process to gracefully shutdown:</p>
<p><code v-pre>$ pocketcoin-cli stop</code></p>
<p>Display your current balance of PKOIN:</p>
<p><code v-pre>$ pocketcoin-cli getbalance</code></p>
<p>Generate a new receive address to have another party send PKOIN to (such as after buying PKOIN on an exchange) with a descriptive &quot;label&quot; to identify it later on:</p>
<p><code v-pre>$ pocketcoin-cli getnewaddress &quot;label&quot;</code></p>
<p>List receive addresses which have been previously generated or used on your node:</p>
<p><code v-pre>$ pocketcoin-cli listreceivedbyaddress</code></p>
<p>Send amount of PKOIN to <code v-pre>address</code>:</p>
<p><code v-pre>$ pocketcoin-cli sendtoaddress &quot;address&quot; amount</code></p>
<p>View a report of the number of PKOINs won through staking by your node:</p>
<p><code v-pre>$ pocketcoin-cli getstakereport</code></p>
<p>View whether or not your node is currently staking:</p>
<p><code v-pre>$ pocketcoin-cli getstakinginfo</code></p>
<p>View a list of connected peers (useful to verify you are connected to the PocketNet network):</p>
<p><code v-pre>$ pocketcoin-cli getpeerinfo</code></p>
<p>Pocketcoin-cli has the capability to send commands to a remote node to enable remote managment and headless node operation. This is an advanced topic beyond the scope of this guide, however the <code v-pre>pocketcoin-cli --help</code> lists necessary commands for remote operation.</p>
<h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting"><span>Troubleshooting</span></a></h2>
<p>If PocketNet Core fails in some manner, the first step is to check the debug.log file in the pocketcoin directory (<code v-pre>~/.pocketcoin on Linux, %HOMEPATH%\appdata\roaming\pocketcoin</code> on Windows). This can oftentimes provide clues as to what went wrong with the program.</p>
<p>Post to the Bastyon/Pocknet tag on the Bastion social media app to get help with node setup.</p>
<p>Join the Node Owners chat on Bastyon to connect with other node operators and keep up with developments and alerts! Message SnowflakeCrusher, Vortex_v, or Malaka on Bastyon to be added to the group.</p>
<p>To report software defects and view current issues check our <a href="https://github.com/pocketnetteam/pocketnet.core/issues" target="_blank" rel="noopener noreferrer">GitHub issues page</a></p>
<h2 id="contributions" tabindex="-1"><a class="header-anchor" href="#contributions"><span>Contributions</span></a></h2>
<!---
todo: when we have an explicit contributions section, update the link below
--->
<p>Contribute to our Github projects. We are looking for C/C++, Javascript Node JS coders, and anyone with a willingness to learn. For more information, check out our <RouteLink to="/get-started.html">contributions'</RouteLink> documentation.</p>
</div></template>


