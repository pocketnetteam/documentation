# Bastyon SDK Reference

## Table of Contents
- [Installation](#installation)
- [Getting Started](#getting-started)
  - [Initialization](#initialization)
  - [Events](#events)
- [API Reference](#api-reference)
  - [Core Methods](#core-methods)
  - [Get Methods](#get-methods)
  - [Permission Methods](#permission-methods)
  - [Open Methods](#open-methods)
  - [Barteron Methods](#barteron-methods)
  - [Image Methods](#image-methods)
  - [Chat Methods](#chat-methods)
  - [Helper Methods](#helper-methods)

## Installation

### CDN Integration

```html
<script src="https://bastyon.com/js/lib/apps/sdk.js"></script>
```

## Getting Started

### Initialization

```javascript
const sdk = new BastyonSdk();

// Initialize SDK
await sdk.init();

// Notify platform about readiness
sdk.emit('loaded');
```

### Events

BastyonSdk supports an event system for platform interaction.

| Event | Description |
|---------|------------|
| block | Blockchain changes |
| state | Application state changes |
| action | User actions |
| balance | Balance updates |
| locale | Locale changes |
| theme | Theme changes |
| changestate | State changes |

## API Reference

### Core Methods

#### init()

Initializes the SDK.

**Returns:**
```typescript
Promise<{
  id: string;           // Application ID
  name: string;         // Name
  version: string;      // Version
  theme: string;        // Theme
  margintop: number;    // Top margin
  production: boolean;  // Mode
  project: object;      // Configuration
}>
```

#### emit(event, data?)

Sends an event to the application.

**Parameters:**
- `event: string` - Event name
- `data?: object` - Event data (optional)

```javascript
sdk.emit('changestate', { value: 'newState', replace: true });
```

#### on(event, callback)

Subscribes to an event.

**Parameters:**
- `event: string` - Event name
- `callback: (data: any) => void` - Handler

```javascript
sdk.on('balance', (balance) => {
  console.log('New balance:', balance);
});
```

#### off(event, callback)

Unsubscribes from an event.

**Parameters:**
- `event: string` - Event name
- `callback: Function` - Handler to remove

### Get Methods

#### get.account()

> Requires permission: `account`

Gets account information.

**Returns:**
```typescript
Promise<{
  address: string;    // Address
  signature: string;  // Signature
  status?: string;    // Status
}>
```

#### get.balance()

> Requires permission: `account`

Gets user's balance.

**Returns:** `Promise<number>`

#### get.zaddress()

> Requires permission: `zaddress`

Gets user's Z-address.

**Returns:** `Promise<string>`

#### get.geolocation()

> Requires permission: `geolocation`

Gets coordinates.

**Returns:**
```typescript
Promise<{
  latitude: number;   // Latitude
  longitude: number;  // Longitude
}>
```

### Permission Methods

#### permissions.check({ permission })

Checks for permission.

**Parameters:**
- `permission: string` - Permission name

**Returns:** `Promise<boolean>`

#### permissions.request(permissions)

Requests permissions.

**Parameters:**
- `permissions: string[]` - Array of permissions

**Returns:** `Promise<void>`

### Open Methods

#### open.post(txid)

Opens a post.

**Parameters:**
- `txid: string` - Post ID

#### open.donation(receiver)

> Requires permissions: `payment`, `account`

Opens donation form.

**Parameters:**
- `receiver: string` - Recipient address

### Barteron Methods

#### barteron.account(data)

> Requires permission: `account`

Manages Barteron account.

**Parameters:**
- `data: object` - Account data

#### barteron.offer(data)

> Requires permission: `account`

Creates an offer.

**Parameters:**
- `data: object` - Offer data

#### barteron.removeOffer(data)

> Requires permission: `account`

Removes an offer.

**Parameters:**
- `data: object` - Removal data

### Image Methods

#### images.upload(data)

Uploads an image.

**Parameters:**
- `data: { image: string }` - Base64 image

**Returns:** `Promise<string>` - URL of uploaded image

### Chat Methods

#### chat.getOrCreateRoom(params)

> Requires permission: `chat`

Creates or gets a chat room.

**Parameters:**
```typescript
{
  users: string[];      // User IDs
  parameters?: object;  // Additional parameters
}
```

#### chat.send(params)

> Requires permission: `chat`

Sends a message.

**Parameters:**
```typescript
{
  roomid: string;     // Room ID
  content: {          // Content
    text: string;     // Message text
    [key: string]: any; // Additional data
  }
}
```

#### chat.openRoom(roomid)

> Requires permission: `chat`

Opens a chat room.

**Parameters:**
- `roomid: string` - Room ID

### Helper Methods

#### helpers.alert(message)

> Requires permission: `messaging`

Shows a notification.

**Parameters:**
- `message: string` - Notification text

#### helpers.opensettings()

Opens application settings.

#### helpers.registration()

Opens registration form.

#### helpers.userstate()

Gets user state.

**Returns:** `Promise<object>`

#### helpers.share(data)

Shares content.

**Parameters:**
```typescript
{
  path: string;       // Path
  sharing: {          // Sharing parameters
    title: string;    // Title
    [key: string]: any; // Additional parameters
  }
}
```

## Data Types

### ApplicationInfo
```typescript
interface ApplicationInfo {
  id: string;
  name: string;
  version: string;
  theme: string;
  margintop: number;
  production: boolean;
  project: ProjectConfig;
}
```

### AccountInfo
```typescript
interface AccountInfo {
  address: string;
  signature: string;
  status?: string;
}
```

### ChatRoom
```typescript
interface ChatRoom {
  id: string;
  users: string[];
  lastMessage?: {
    content: any;
    timestamp: number;
  };
}
```

## Error Handling

The SDK uses Promises for asynchronous operations. Handle all errors through `.catch()`:

```javascript
sdk.get.account()
  .then(account => {
    // Handle successful result
  })
  .catch(error => {
    // Handle error
    console.error('Error:', error.message);
  });
```

## Best Practices

1. **Initialization:**
   ```javascript
   async function initializeApp() {
     try {
       const sdk = new BastyonSdk();
       await sdk.init();
       sdk.emit('loaded');
     } catch (error) {
       console.error('Initialization error:', error);
     }
   }
   ```

2. **Permission Checking:**
   ```javascript
   async function checkAndRequestPermissions() {
     const required = ['account', 'payment'];
     
     for (const permission of required) {
       const granted = await sdk.permissions.check({ permission });
       if (!granted) {
         await sdk.permissions.request([permission]);
       }
     }
   }
   ```

3. **Event Handling:**
   ```javascript
   function setupEventListeners() {
     sdk.on('balance', handleBalanceChange);
     sdk.on('theme', handleThemeChange);
     
     // Cleanup when unmounting
     return () => {
       sdk.off('balance', handleBalanceChange);
       sdk.off('theme', handleThemeChange);
     };
   }
   ```

---

## Additional Resources

- [Complete Documentation](https://docs.bastyon.com/sdk)
- [Application Examples](https://github.com/bastyon/examples)
- [API Reference](https://api.bastyon.com)