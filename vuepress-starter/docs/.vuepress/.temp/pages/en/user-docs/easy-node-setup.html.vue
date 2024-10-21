<template><div><h1 id="easy-node-setup-guide" tabindex="-1"><a class="header-anchor" href="#easy-node-setup-guide"><span>Easy Node Setup Guide</span></a></h1>
<h2 id="important-notice" tabindex="-1"><a class="header-anchor" href="#important-notice"><span>Important Notice</span></a></h2>
<p><strong>Download and install Pocketnet Team software only from official sources!</strong></p>
<p>Official page on GitHub: <a href="https://github.com/pocketnetteam" target="_blank" rel="noopener noreferrer">https://github.com/pocketnetteam</a></p>
<h2 id="download-links" tabindex="-1"><a class="header-anchor" href="#download-links"><span>Download Links</span></a></h2>
<p>Bastyon / Brighteon client application for personal computers (with Easy Node installation capability):</p>
<ul>
<li>GitHub: <a href="https://github.com/pocketnetteam/pocketnet.gui/releases" target="_blank" rel="noopener noreferrer">https://github.com/pocketnetteam/pocketnet.gui/releases</a></li>
</ul>
<p>Download options:</p>
<ul>
<li>For Windows: BastyonSetup.exe</li>
<li>For Linux: BastyonSetup.deb</li>
</ul>
<blockquote>
<p><strong>Important Notes:</strong></p>
<ul>
<li>The node has its own wallet and is not connected to the account</li>
<li><strong>Do not deposit Pocketcoin into your node wallet until you have fully configured your node and backed up your node wallet!</strong></li>
</ul>
</blockquote>
<h2 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements"><span>System Requirements</span></a></h2>
<h1 id="bastyon-node-system-requirements-guide" tabindex="-1"><a class="header-anchor" href="#bastyon-node-system-requirements-guide"><span>Bastyon Node System Requirements Guide</span></a></h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<p>This guide outlines the system requirements for a Bastyon node that will function as a public node to service the Bastyon front end, including wallet and coin staking capabilities.</p>
<blockquote>
<p><strong>Important Note:</strong> Node requirements are subject to change as the network grows.</p>
</blockquote>
<!--If you are editing System requirements section, please update other instances of System Requierements, mentioned in other parts of the documentation-->
<h2 id="system-requirements-1" tabindex="-1"><a class="header-anchor" href="#system-requirements-1"><span>System Requirements</span></a></h2>
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
<h2 id="installation-process" tabindex="-1"><a class="header-anchor" href="#installation-process"><span>Installation Process</span></a></h2>
<ol>
<li>Install the Bastyon/Brighteon client (recommended in the default path).</li>
<li>Launch the client and create a new Bastyon account or log into an existing one.</li>
<li>To install and launch Easy Node, go to your account menu in the top right corner of the Bastyon / Brighteon home page.</li>
</ol>
<p><img src="@source/en/user-docs/bastyon-homepage-header.png" alt="Bastyon homepage header"></p>
<ol start="4">
<li>Go to the menu (Management) - (Node).</li>
</ol>
<p><img src="@source/en/user-docs/easy-node-management.png" alt="Easy Node management"></p>
<ol start="5">
<li>Specify the directory for blockchain files storage (must be on an SSD, path in English only).</li>
<li>Click &quot;Default Directory&quot; to set the path, then &quot;Download and install node&quot;.</li>
<li>The download of the database checkpoint and its further unzipping will begin.</li>
</ol>
<p><img src="@source/en/user-docs/easy-node-installing.png" alt="Easy Node installing"></p>
<ol start="8">
<li>The process of checking the database and starting synchronization with the network will begin.</li>
</ol>
<p><img src="@source/en/user-docs/easy-node-bastyon-node.png" alt="Easy Node Bastyon node"></p>
<blockquote>
<p><strong>Pay attention to the height:</strong> First number = blocks on your node / Second number = blocks on the network</p>
</blockquote>
<p><img src="@source/en/user-docs/easy-node-bastyon-data-sync.png" alt="Easy Node Bastyon data sync"></p>
<ol start="9">
<li>Wait for full network synchronization (indicated by matching blockchain heights).</li>
</ol>
<p><img src="@source/en/user-docs/easy-node-bastyon-data-sync-complete.png" alt="Easy Node Bastyon data sync complete"></p>
<h2 id="using-easy-node" tabindex="-1"><a class="header-anchor" href="#using-easy-node"><span>Using Easy Node</span></a></h2>
<p>After installation and synchronization, the Easy Node window will display:</p>
<p><img src="@source/en/user-docs/easy-node-ready-running.png" alt="Easy Node ready and running"></p>
<h3 id="synchronization" tabindex="-1"><a class="header-anchor" href="#synchronization"><span>Synchronization</span></a></h3>
<ul>
<li>Status: active (Node is running)</li>
<li>Version: [installed node version]</li>
<li>Chain: main</li>
<li>Height: [current block in the network]</li>
<li>Block hash: [hash sum of the current block]</li>
</ul>
<h3 id="wallet" tabindex="-1"><a class="header-anchor" href="#wallet"><span>Wallet</span></a></h3>
<ul>
<li>Status: [Node status and staking status]</li>
<li>Control options:
<ul>
<li>Deposit (Add Pocketcoin to node's wallet)</li>
<li>Transfer (Send Pocketcoin from node wallet)</li>
<li>Export wallet (Archive copy of wallet's private key)</li>
<li>Import wallet (Restore wallet using private key)</li>
</ul>
</li>
</ul>
<h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h3>
<ul>
<li>Enabled: Turn node on/off</li>
<li>Data path: Working directory of the node</li>
<li>Node update: Available update version</li>
</ul>
<blockquote>
<p><strong>Note:</strong> After turning off the node, it becomes possible to delete the node and the working directory. <strong>Attention!</strong> Do not delete the node if you do not have an archived copy of the node's wallet.</p>
</blockquote>
<h2 id="important-wallet-management" tabindex="-1"><a class="header-anchor" href="#important-wallet-management"><span>Important Wallet Management</span></a></h2>
<p><strong>Before depositing Pocketcoin:</strong></p>
<ol>
<li>Export the wallet's private key and save it securely.</li>
<li>Make a copy of the Wallet.dat file:
<ul>
<li>Turn off the node (Enabled - no)</li>
<li>Locate Wallet.dat in the node's working directory</li>
<li>Copy to multiple safe storage locations</li>
</ul>
</li>
</ol>
<blockquote>
<p><strong>Note:</strong> Copy the wallet file only to a switched off node, otherwise it may be copied with an error.
One backup of Wallet.dat and private key is sufficient (No need to make new backup copies after each transaction).</p>
</blockquote>
<h3 id="depositing-pocketcoin" tabindex="-1"><a class="header-anchor" href="#depositing-pocketcoin"><span>Depositing Pocketcoin</span></a></h3>
<ol>
<li>Click &quot;Deposit&quot;</li>
<li>Use the displayed public address</li>
</ol>
<blockquote>
<p><strong>Note:</strong> A new public address is generated each time for privacy, but old addresses remain valid.</p>
</blockquote>
<h3 id="transferring-pocketcoin" tabindex="-1"><a class="header-anchor" href="#transferring-pocketcoin"><span>Transferring Pocketcoin</span></a></h3>
<ol>
<li>Click &quot;Transfer&quot;</li>
<li>Provide transfer address, amount, and commission payer</li>
<li>Click &quot;Send&quot;</li>
</ol>
</div></template>


