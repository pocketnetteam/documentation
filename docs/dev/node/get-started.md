# Getting Started

Welcome to the documentation for the Pocketnet Core project. This document is intended to familiarize you with the blockchain node code for the Pocketnet network. Pocketnet Core is primarily written in C++ and is a fork of Bitcoin, which means there are many parallels with it.

## What is the Pocketnet Network?

Pocketnet is a peer-to-peer network that supports blockchain operations with the ability to store open data within the blockchain to create a fault-tolerant storage. Nodes in the Pocketnet network are called Pocketnet Core and serve as entry points to the network. Each node stores a full copy of the data and functions as a database, validator, and web server. The main purpose of such a network is to store data protected by standard encryption mechanisms used in the Bitcoin blockchain to secure transactions. Data in the network is not encrypted at the node level but is signed with the author's key and protected from tampering.

Alternative projects that solve similar tasks include:
- [BitTorrent](https://www.bittorrent.com/)
- [IPFS](https://ipfs.tech/)
- [FileCoin](https://filecoin.io/)

Each of these projects has its advantages and disadvantages, and Pocketnet is distinguished by the following features:
- The Pocketnet network has mechanisms for storing small amounts of data protected by encryption, ensuring their authenticity for the user.
- Pocketnet nodes are equipped with a built-in RPC web server, allowing data to be accessed as if it were stored on a classic web server.
- Pocketnet nodes do not require authorization to access data; only a private key is needed — welcome to the web3 internet.
- Transactions in the network are divided into "monetary," for which the fee is determined dynamically based on size, and "social," for which the fee is fixed at 1 minimum coin unit (1 satoshi), allowing for the creation of various applications without requiring significant usage fees.

## Source Code

Pocketnet is based on the [Bitcoin](https://github.com/bitcoin/bitcoin) code, so most of the mechanisms and logic of Bitcoin are applied in Pocketnet. More details about the project structure and source code are described in the [Source Code](source.md) section.

## Building and Environment Setup

Various compilation options, release processes, and IDE setup instructions are described in the [Building](building.md) section.

## Usage

Loading, launching, and working with PocketnetCore nodes are detailed in the [Usage](usage.md) section.