# Guide to Creating Mini-Apps in Bastyon

## Table of Contents

- [Introduction](#introduction)
- [Domain Preparation](#step-1-domain-preparation)
- [Quick Start](#quick-start)
- [Mini-App Registration](#step-2-mini-app-registration)
- [Management and Search](#step-3-management-and-search)
- [Mini-App Functionality](#mini-app-functionality)

## Introduction

This documentation is intended for developers who want to quickly get started with mini-apps in the Bastyon ecosystem. Mini-apps allow integration with Bastyon platform functionality, including payments, notifications, messaging, and other features.

## Step 1: Domain Preparation

To begin, you need two files available on your domain:

1. `b_manifest.json` — Mini-app manifest file
2. `b_icon.png` — Mini-app icon

Mini-apps operate in an isolated environment and are loaded via `iframe`. Files must be accessible via proper URLs.

> **Example URL Structure:**
> ```
> https://example.com/b_manifest.json
> https://example.com/b_icon.png
> ```

### File Descriptions

#### b_icon.png
Image representing your mini-app. Recommended size: 512x512 pixels.

#### b_manifest.json
Manifest file for configuring your mini-app.

> **Example Manifest Structure:**
> ```json
> {
>   "id": "demo.pocketnet.app",
>   "name": "Demo",
>   "description": "Demo application",
>   "author": "PQ8AiCHJaTZAThr2TnpkQYDyVd1Hidq4PM",
>   "scope": "demo.bastyonapps.com",
>   "permissions": [
>     "account",
>     "notifications",
>     "messaging",
>     "payment",
>     "sign",
>     "camera",
>     "gallery"
>   ]
> }
> ```

### Manifest Fields

| Field | Description | Format | Required |
|------|-------------|---------|-----------|
| id | Unique identifier | Domain name (e.g., `app.pocketnet`) | Yes |
| name | Mini-app name | String | Yes |
| description | Mini-app description | String or localization object | Yes |
| author | Creator's address | Bastyon address | Yes |
| scope | Mini-app subdomain | HTTPS domain | Yes |
| permissions | Permission list | String array | No |

> **Description Localization Example:**
> ```json
> "description": {
>   "en": "Demo application",
>   "ru": "Демонстрационное приложение"
> }
> ```

> **Important:** Some SDK methods only work with corresponding permissions. For example, opening external links requires special permission for security.

## Quick Start

### System Requirements
- Node.js 14+
- npm or yarn
- HTTPS domain for mini-app hosting

### Development Templates

| Type | Repository | Description |
|------|------------|-------------|
| Client | [bastyon-miniapp-vue-template](https://github.com/DaniilKimlb/bastyon-miniapp-vue-template) | Vue.js template with SDK setup |
| Server | [bastyon-miniapp-expressjs-template](https://github.com/DaniilKimlb/bastyon-miniapp-expressjs-template) | Express.js API template |

Templates include preconfigured structure and all necessary dependencies for quick start.

## Step 2: Mini-App Registration

1. Go to [registration page](https://bastyon.com/devapplication)
2. Fill out the form following instructions
3. After completion, mini-app will be added in development mode and accessible at:
   ```
   https://bastyon.com/application?id=<YOUR_APP_ID>
   ```

### Publishing Mini-App

1. Access mini-app management through:
   - Automatic redirect after registration
   - [Home page](https://bastyon.com/home), entering your address in search
2. Click "Publish" for public access

## Step 3: Management and Search

### Viewing Mini-Apps List
1. Open [bastyon.com/home](https://bastyon.com/home)
2. In search, enter:
   ```
   author:<your Bastyon address>
   ```

### Managing Mini-App
Click the gear icon next to the mini-app to access management panel.

## Mini-App Functionality

### Core Features