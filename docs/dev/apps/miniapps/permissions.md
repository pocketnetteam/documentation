# Bastyon Mini-Apps Permissions

## Table of Contents
- [Overview](#overview)
- [List of Permissions](#list-of-permissions)
- [Usage in Manifest](#usage-in-manifest)

## Overview

Mini-apps in Bastyon require explicit permission declarations to perform certain functions. Each permission grants access to specific platform functionality.

## List of Permissions

| Permission | Description | Usage |
|------------|-------------|--------|
| `account` | Access to account information | Get account address, public data, and balance |
| `sign` | Digital data signing | Sign data with user's unique signature |
| `payment` | Payment processing | Execute PKOIN transactions |
| `messaging` | System messages | Display informational messages to user |
| `mobilecamera` | Camera access | Access mobile gallery for photo uploads |
| `zaddress` | Wallet address access | Get one of user's wallet addresses |
| `externallink` | External links | Open links outside the platform |
| `authFetch` | Authorized requests | Execute signed requests for authentication |
| `geolocation` | Geolocation | Get user location data |
| `chat` | Chat functions | Interact with chats (send messages, manage rooms) |

## Usage in Manifest

Permissions are specified in the `permissions` field of the mini-app manifest:

```json
{
  "id": "example.app",
  "name": "Example App",
  "permissions": [
    "account",
    "payment",
    "messaging"
  ]
}
```

> **Important:** Only request permissions that are actually necessary for your mini-app's functionality.

### Usage Examples

#### Basic Mini-App
```json
{
  "permissions": [
    "account",
    "messaging"
  ]
}
```

#### Payment Mini-App
```json
{
  "permissions": [
    "account",
    "payment",
    "sign",
    "zaddress"
  ]
}
```

#### Chat Mini-App
```json
{
  "permissions": [
    "account",
    "chat",
    "messaging",
    "mobilecamera"
  ]
}
```

## Security

- Users always see the list of requested permissions during installation
- Each permission can be revoked in mini-app settings
- New permissions require confirmation when updating the mini-app

---

For additional information, refer to the [main documentation](./README.md).