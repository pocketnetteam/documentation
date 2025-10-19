# Node Network Configuration

This guide describes the process of setting up Pocketnet node integration with various anonymous and secure networks: I2P, Tor, and Yggdrasil. Using these networks allows you to provide additional anonymity and security for your node's connections.

## Integration with I2P

I2P (Invisible Internet Project) is an anonymous overlay network that provides secure and private data transmission.

### Installing the i2pd Package on Debian 11 (bullseye)

#### Downloading the Package

Download the package from the official website: [https://github.com/PurpleI2P/i2pd/releases](https://github.com/PurpleI2P/i2pd/releases)

For example, for Debian use the file: `i2pd_2.58.0-1bullseye1_amd64.deb`

#### Installation

Run the installation command:

```bash
sudo dpkg -i i2pd_2.58.0-1bullseye1_amd64.deb
```

#### Configuring Bandwidth

Set the bandwidth (P – 2048 KB/sec) in the `/etc/i2pd/i2pd.conf` file:

```ini
bandwidth = P
```

#### Starting the Service

Run the start command:

```bash
sudo systemctl start i2pd
```

Check the startup status:

```bash
sudo systemctl status i2pd
```

### Docker Configuration for I2P

Add the following option to the `docker-compose.yml` file:

```yaml
version: '3.7'

services:
  pocketnet.core:
    # ... other settings ...
    network_mode: host
    # ... other settings ...
```

### Pocketcoind Integration with I2P

#### Configuration Setup

Add the following settings to the `~/.pocketcoin/pocketcoin.conf` file:

```ini
i2pacceptincoming=1
i2psam=127.0.0.1:7656
#debug=i2p
```

**Parameters:**
- `i2pacceptincoming=1` — enables incoming connections via I2P
- `i2psam=127.0.0.1:7656` — I2P SAM bridge address and port
- `#debug=i2p` — debug option (uncomment if needed)

#### Verifying Integration Status

After restarting the node, run the command:

```bash
pocketcoin-cli getnetworkinfo
```

The command should display the use of an I2P network address in the `localaddresses` section:

```json
{
  "localaddresses": [
    {
      "address": "xtr5opke44ckuim7id4aprjg2afi73uuf7ctjx2cc4hwp6k7gevq.b32.i2p",
      "port": 37070,
      "score": 4
    }
  ],
  "warnings": ""
}
```

An address with the `.b32.i2p` domain confirms successful integration with the I2P network.

---

## Integration with Tor

Tor is a decentralized network that provides anonymity through multi-layered encryption and routing through multiple nodes.

### Installing the Tor Package (Debian)

#### Package Installation

Run the installation commands:

```bash
sudo apt install tor
sudo apt install tor-geoipdb
```

#### Configuring the Control Port

Add (uncomment) the control port activation in the `/etc/tor/torrc` file:

```ini
ControlPort 9051
```

#### Configuring Access Permissions

Add the `debian-tor` group to the current user (e.g., `poc`):

```bash
sudo usermod -aG debian-tor poc
```

Add write permissions to the Tor working directory (to the socket) for the `debian-tor` group:

```bash
chgrp debian-tor /run/tor
chmod g+w /run/tor/
```

#### Starting the Service

Run the start command:

```bash
sudo systemctl start tor
```

Check the startup status:

```bash
sudo systemctl status tor
```

### Configuring docker-compose.yml for Tor

#### Determining the debian-tor Group GID

Find out the GID of the `debian-tor` group:

```bash
getent group debian-tor
```

Example output:
```
debian-tor:x:115:
```

In this case, `115` is the GID of the `debian-tor` group, which must be added to the docker-compose.yml settings.

#### Docker Configuration Setup

Add the following options to the `docker-compose.yml` configuration file:

```yaml
version: '3.7'

services:
  pocketnet.core:
    # ... other settings ...
    pid: host
    network_mode: host
    user: 1000:115  # uid and gid under which the container will run
    # ... other settings ...
```

**Important:** 
- `1000` — the UID of the current user
- `115` – the GID of the `debian-tor` group (use the value from your system)

### Pocketcoind Integration with Tor

#### Configuration Setup

Add the following settings to the `~/.pocketcoin/pocketcoin.conf` file:

```ini
listenonion=1
torcontrol=127.0.0.1:9051
debug=tor
#onlynet=onion
```

**Parameters:**
- `listenonion=1` — enables listening for incoming connections via Tor
- `torcontrol=127.0.0.1:9051` — Tor control interface address and port
- `debug=tor` — enables debug logs for Tor
- `#onlynet=onion` — use Tor network only (uncomment if needed)

#### Verifying Integration Status

After restarting the node, run the command:

```bash
pocketcoin-cli getnetworkinfo
```

The command should display the use of a Tor network address in the `localaddresses` section:

```json
{
  "localaddresses": [
    {
      "address": "krzwep4uj4apbm3l2fu2zzrhjqhautmkvcuvwhclhgqlbtxd4tkoogyd.onion",
      "port": 37070,
      "score": 4
    }
  ],
  "warnings": ""
}
```

An address with the `.onion` domain confirms successful integration with the Tor network.

### Configuring logrotate for Node Logs

#### Creating the Configuration

Create a file `/etc/logrotate.d/pocketcoin` with the following content (specify the actual path to `debug.log` and `pocketcoind.pid`):

```
/mnt/pocketcoin/debug.log {
    rotate 20
    size 10M
    missingok
    compress
    postrotate
        kill -HUP `cat /mnt/pocketcoin/pocketcoind.pid` >/dev/null 2>&1
    endscript
}
```

**Parameters:**
- `rotate 20` — keep 20 rotated files
- `size 10M` — rotate when size reaches 10 MB
- `missingok` — don't error if the file is missing
- `compress` — compress old logs

#### Restarting the Service

Restart logrotate:

```bash
sudo systemctl restart logrotate
```

---

## Integration with Yggdrasil

Yggdrasil is a fully end-to-end encrypted IPv6 network that provides private and secure communication between nodes.

### Configuring ufw Firewall Rules

#### Preparation

It is necessary to restrict server access via IPv6 from the Yggdrasil network. Make sure the `/etc/default/ufw` configuration file contains the line:

```ini
IPV6=yes
```

#### Basic Setup

Allow SSH access and activate ufw:

```bash
sudo ufw app update 'OpenSSH'
sudo ufw allow 'OpenSSH'
sudo ufw enable
```

#### Creating a Profile for Pocketcoin

Create a profile for the pocketcoind application in the file `/etc/ufw/applications.d/ufw-pocketcoin-testnet`:

```ini
[Pocketcoin Testnet]
title=Pocketcoin Testnet
description=Pocketcoin Testnet
ports=6067,6667,36060,39091,39092,39991,13131/tcp
```

Activate the profile:

```bash
sudo ufw app update "Pocketcoin Testnet"
sudo ufw allow "Pocketcoin Testnet"
```

#### Checking the Status

```bash
sudo ufw status verbose
```

### Installing the Yggdrasil Package on Debian

#### Downloading the Package

Download the package from the official website: [https://github.com/yggdrasil-network/yggdrasil-go/releases/latest](https://github.com/yggdrasil-network/yggdrasil-go/releases/latest)

For example, for Debian use the file: `yggdrasil-0.5.12-amd64.deb`

#### Installation

Run the installation command:

```bash
sudo dpkg -i yggdrasil-0.5.12-amd64.deb
```

### Selecting Nodes to Connect

On the website [https://publicpeers.neilalexander.dev/](https://publicpeers.neilalexander.dev/) you need to select several Yggdrasil node addresses from your country or nearby with high uptime (close to 100%).

**Example Nodes:**

For Germany:
- `tcp://ygg.mkg20001.io:80`

For Russia:
- `tcp://yggdrasil.su:62486`

#### Configuration Setup

Add the selected nodes to the `/etc/yggdrasil/yggdrasil.conf` configuration file:

```yaml
Peers: [
  tcp://yggdrasil.su:62486
  tcp://ygg.mkg20001.io:80
]
```

### Starting the Service

#### Service Startup

Run the start command:

```bash
sudo systemctl start yggdrasil
```

Check the startup status:

```bash
sudo systemctl status yggdrasil
```

#### Checking the Network Interface

After startup, a `tun0` network interface should appear with an IPv6 address with the `200::/7` prefix.

Check with the command:

```bash
ip a show dev tun0
```

Example output:

```
3: tun0: <POINTOPOINT,MULTICAST,NOARP,UP,LOWER_UP> mtu 65535 qdisc pfifo_fast state UNKNOWN group default qlen 500
    link/none 
    inet6 200:5c4e:a1b4:873d:bd3f:5127:29a4:8b31/7 scope global 
       valid_lft forever preferred_lft forever
    inet6 fe80::9b9e:4fbb:50e8:d2c4/64 scope link stable-privacy 
       valid_lft forever preferred_lft forever
```

#### Checking Node Connection

```bash
sudo yggdrasilctl getpeers
```

Example output:

```
               URI               	State	Dir	              IP Address              	 Uptime  	 RTT  	 RX  	 TX 	Pr	Cost	Last Error 
tcp://yggdrasil.su:62486         	Up   	Out	218:71e5:78e4:8989:b71:db7f:7bf1:f1e1 	96h38m35s	1.15ms	26.5MB	51.8MB 	2B/s	98B/s	0 	1   	-
tcp://ygg.mkg20001.io:80         	Up   	Out	201:5bff:fc61:a4d7:e753:a40f:bdf7:8135	96h38m32s	5.93ms	1.4MB 	715.2KB	-   	-    	0 	5   	-
```

### Docker Configuration for Yggdrasil

Add the following option to the `docker-compose.yml` file:

```yaml
version: '3.7'

services:
  pocketnet.core:
    # ... other settings ...
    network_mode: host
    # ... other settings ...
```

### Verifying pocketcoind Operation via Yggdrasil Network

#### Restarting the Node

It is necessary to restart pocketcoind after installing and starting Yggdrasil.

#### Verifying Integration Status

Run the command:

```bash
pocketcoin-cli getnetworkinfo
```

The command should display the use of a Yggdrasil network address (tun0) in the `localaddresses` section:

```json
{
  "localaddresses": [
    {
      "address": "200:5c4e:a1b4:873d:bd3f:5127:29a4:8b31",
      "port": 36060,
      "score": 116
    }
  ]
}
```

An address with the `200::/7` prefix confirms successful integration with the Yggdrasil network.

---

## Additional Resources

### I2P
- [I2P Documentation](https://i2pd.readthedocs.io/)
- [Purple I2P on GitHub](https://github.com/PurpleI2P/i2pd)

### Tor
- [Tor Project Documentation](https://www.torproject.org/docs/)
- [Tor on Debian Wiki](https://wiki.debian.org/TorProject)

### Yggdrasil
- [Yggdrasil Documentation](https://yggdrasil-network.github.io/)
- [Yggdrasil on GitHub](https://github.com/yggdrasil-network/yggdrasil-go)
- [Public Yggdrasil Peers](https://publicpeers.neilalexander.dev/)

