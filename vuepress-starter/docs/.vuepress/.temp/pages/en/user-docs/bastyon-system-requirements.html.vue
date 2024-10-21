<template><div><h1 id="bastyon-node-system-requirements-guide" tabindex="-1"><a class="header-anchor" href="#bastyon-node-system-requirements-guide"><span>Bastyon Node System Requirements Guide</span></a></h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<p>This guide outlines the system requirements for a Bastyon node that will function as a public node to service the Bastyon front end, including wallet and coin staking capabilities.</p>
<blockquote>
<p><strong>Important Note:</strong> Node requirements are subject to change as the network grows.</p>
</blockquote>
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
<td>Processor</td>
<td>4 core x86-64 CPU</td>
</tr>
<tr>
<td>RAM</td>
<td>12 GB</td>
</tr>
<tr>
<td>Internet</td>
<td>- 100 Mbit - Publicly accessible IP address and ports (see Network Setup section)</td>
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
</div></template>


