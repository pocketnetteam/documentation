# Get Started

# Bastyon Pocketnet Proxy API Documentation

## Overview
The Bastyon Pocketnet Proxy API provides developers with tools to build and integrate applications within the Bastyon ecosystem. This guide explains how to use our RPC methods safely and efficiently with TypeScript support.

The setup instructions assume you have a front-end that will invoke back-end controllers, defined below.

The high-level diagram of a generic app looks something like the below:

<div style="text-align: center;">
    <img src="../assets/images/mini-app-flow.png" alt="mini-app-flow">
</div>

## Setup and Initialization

Until the proxy API is available via npm, we recommend using our template project: [Bastyon Mini-App Express.js Template][template-link].

The following instructions assume you have installed the /lib folder containing the pocketnet-proxy-api SDK.

What this means: You'll need to clone our template repository first, as it contains all necessary files and configurations to get started quickly.

[template-link]: https://github.com/DaniilKimlb/bastyon-miniapp-expressjs-template

```typescript
import express from 'express';
import type { Request, Response } from 'express';
import { PocketNetProxyApi } from '../lib';
import type { 
  GetNodeInfoParams,
  GetUserProfileParams,
  SearchParams 
} from '../lib/rpc.types';

const app = express();
```

## API Instance Management
What this means: We use a singleton pattern to manage a single instance of the API throughout your application. This approach is more efficient and prevents multiple unnecessary connections.

```typescript
// lib/index.ts
import PocketNetProxyApi from './pocketnet-proxy-api';

let pocketNetProxyInstance: PocketNetProxyApi | null = null;

export async function getPocketNetProxyInstance(): Promise<PocketNetProxyApi> {
  if (!pocketNetProxyInstance) {
    pocketNetProxyInstance = await PocketNetProxyApi.create();
  }
  return pocketNetProxyInstance;
}

export { PocketNetProxyApi };
```

## Route Handlers
What this means: These are the endpoints your application will expose to handle different types of requests. Each handler is responsible for a specific function like getting node information or user profiles.

### Get Node Information
What this means: This endpoint fetches current status and information about a Bastyon network node, useful for monitoring and diagnostics.

```typescript
// controllers/node.controller.ts
import type { Request, Response } from 'express';
import { getPocketNetProxyInstance } from '../lib';

/**
 * GET /nodeinfo
 * 
 * Retrieves node information from the Bastyon network.
 * Uses the getnodeinfo RPC method to fetch current node status.
 *
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {Promise<void>} JSON response with node information
 *
 * @example
 * // Route registration
 * app.get('/nodeinfo', getNodeInfo);
 *
 * // Success Response
 * {
 *   "message": "Node information retrieved successfully",
 *   "data": {
 *     // Node information object
 *   }
 * }
 */
export async function getNodeInfo(
  req: Request, 
  res: Response
): Promise<void> {
  try {
    const api = await getPocketNetProxyInstance();
    const result = await api.rpc.getnodeinfo();

    res.status(200).json({
      message: 'Node information retrieved successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve node information',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
```

### Get User Profile
What this means: This endpoint retrieves information about a specific user using their blockchain address. It's commonly used for displaying user details and verification.

```typescript
// controllers/user.controller.ts
import type { Request, Response } from 'express';
import { getPocketNetProxyInstance } from '../lib';
import type { GetUserProfileParams } from '../lib/rpc.types';

/**
 * GET /user/:address
 * 
 * Retrieves user profile information for a given address.
 *
 * @param {Request} req - Express request object with address parameter
 * @param {Response} res - Express response object
 * @returns {Promise<void>} JSON response with user profile
 *
 * @example
 * // Route registration
 * app.get('/user/:address', getUserProfile);
 *
 * // Success Response
 * {
 *   "message": "User profile retrieved successfully",
 *   "data": {
 *     // User profile object
 *   }
 * }
 */
export async function getUserProfile(
  req: Request, 
  res: Response
): Promise<void> {
  try {
    const { address } = req.params;
    const api = await getPocketNetProxyInstance();
    
    const result = await api.rpc.getuserprofile({
      address,
      shortForm: "basic"
    } satisfies GetUserProfileParams);

    res.status(200).json({
      message: 'User profile retrieved successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve user profile',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
```

### Search Content
What this means: This endpoint allows users to search through content on the platform with support for pagination to handle large result sets efficiently.

```typescript
// controllers/search.controller.ts
import type { Request, Response } from 'express';
import { getPocketNetProxyInstance } from '../lib';
import type { SearchParams } from '../lib/rpc.types';

/**
 * GET /search
 * 
 * Searches for content with pagination support.
 * 
 * @param {Request} req - Express request object with query parameters
 * @param {Response} res - Express response object
 * @returns {Promise<void>} JSON response with search results
 *
 * @example
 * // Route registration
 * app.get('/search', searchContent);
 *
 * // Request
 * GET /search?keyword=blockchain&page=1&pageSize=20
 *
 * // Success Response
 * {
 *   "message": "Search completed successfully",
 *   "data": {
 *     "results": [],
 *     "total": 0
 *   }
 * }
 */
export async function searchContent(
  req: Request, 
  res: Response
): Promise<void> {
  try {
    const { 
      keyword, 
      page = '0', 
      pageSize = '20' 
    } = req.query;

    const api = await getPocketNetProxyInstance();
    
    const result = await api.rpc.search({
      keyword: String(keyword),
      type: "content",
      pageStart: Number(page),
      pageSize: Number(pageSize)
    } satisfies SearchParams);

    res.status(200).json({
      message: 'Search completed successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      message: 'Search operation failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
```

### Controller Exports
What this means: This file centralizes all your route handlers (controllers) in one place for better organization and maintainability.

```typescript
// controllers/index.ts
export * from './node.controller';
export * from './user.controller';
export * from './search.controller';
```

### Route Registration
What this means: This is where you define which URLs trigger which handlers in your application. It maps URLs to their corresponding functions.

```typescript
// routes/index.ts
import express from 'express';
import { 
  getNodeInfo, 
  getUserProfile,
  searchContent 
} from '../controllers';

const router = express.Router();

router.get('/nodeinfo', getNodeInfo);
router.get('/user/:address', getUserProfile);
router.get('/search', searchContent);

export default router;
```

### Error Handler Middleware
What this means: This middleware catches and processes any errors that occur during request handling, ensuring a consistent error response format.

```typescript
// middleware/error.middleware.ts
import type { Request, Response, NextFunction } from 'express';

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error('API Error:', error);

  res.status(500).json({
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : 'Unknown error'
  });
}
```

## App Configuration
What this means: This is the main setup of your Express.js application where you configure middleware, routes, and error handling.

```typescript
// app.ts
import express from 'express';
import routes from './routes';
import { errorHandler } from './middleware';

const app = express();

app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);

export default app;
```

## Best Practices
These guidelines will help you build more reliable and maintainable applications:

1. TypeScript Usage: Leverage TypeScript's type system for safer code
2. Parameter Validation: Use the `satisfies` operator to ensure correct parameter types
3. Error Handling: Implement comprehensive error catching and reporting
4. Service Organization: Group related functionality into service classes
5. Data Management: Use pagination for large datasets
6. Performance: Implement caching where appropriate
7. Code Structure: Keep your code organized and well-documented

## Type Safety Benefits
Using TypeScript provides several advantages:

- Find errors during development instead of runtime
- Get better code completion in your IDE
- Make your code easier to understand and maintain
- Ensure consistent data structures
- Improve development speed with better tooling support