# Usage

## Overview

All nodes of the network have an identical database, which allows clients to communicate with any node without fear of inconsistency. The client can switch between nodes "inside the session", can use the API to increase performance or for additional verification of the "honesty" of the node. The same API method can be called on two or more nodes to make sure that the data is consistent and correct.

From the client side, the node network can be represented as a single cloud with a standardized API. Here are a few paradigms that should be provided by each node in such a cloud:

- The node must provide access to the cloud with at least one entry point, providing a minimal API for working with data.
- The node must have a minimum set of public service API (getnodeinfo, getpeerinfo).
- The node must have database validation mechanisms - for example, the sum of all ratings or a hash of data.

### Public access

The node must provide access to the API in the following ways:

- HTTP via port `38081`
- WS TCP via port `38082`
- WS UDP via port `38083`
- WS TCP via a dynamic port determined by the STUN method using peers with externally accessible interfaces 1-3
- WS UDP via a dynamic port determined by the STUN method using peers with externally accessible interfaces 1-3

### STUN Ports

To implement access to a node via NAT, the node must launch a UDP or TCP socket to determine its external IP address (`STUN-Address`) and port (`STUN-Port`), which may differ due to the use of NAT routing.

To implement this mechanism, the node must run one `STUN-Server` socket and `N STUN-Client` sockets, one for each connected peer.

`STUN-Server` socket acts as a STUN server and helps other nodes determine their external IP and port.

`STUN-Client` sockets are used to determine the node’s external IP address and "reserve" the port in the NAT routing table.

Thus, each node, in addition to the local IP address and static open ports, can receive an external IP address and a set of ports for external connections. As long as the node maintains a connection to the peer, the port remains open and in most cases the NAT will skip incoming connection requests from clients.

Nodes should ensure the exchange of information about known STUN data between nodes and clients:

- API methods `getnodeinfo` and `getpeerinfo` should return `STUN` data

- Nodes must receive and send their `STUN` data to known peers

- Nodes must save `STUN` data of peers who requested data via `STUN-Server`

More information about Port Hole Punching: [](https://bford.info/pub/net/p2pnat/index.html)
