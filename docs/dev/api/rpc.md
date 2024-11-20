# Proxy RPC

## Private

TODO - implement

## Public

This document provides a detailed description of all available RPC methods in the [PocketNetProxy class](https://github.com/pocketnetteam/pocketnet-proxy-api).
Each method is listed with its parameters, return values, and examples of usage.


| Method Name                                           | Description                                                                               |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **[getapps](#getapps)**                               | Retrieves a list of applications filtered by the given criteria                           |
| **[getappscores](#getappscores)**                     | Retrieves scores for a list of applications                                               |
| **[getappcomments](#getappcomments)**                 | Retrieves comments related to a specific application                                      |
| **[getuserprofile](#getuserprofile)**                 | Retrieves the profile information of a specific user                                      |
| **[getjuryassigned](#getjuryassigned)**               | Retrieves a list of jury assignments for a specific user                                  |
| **[getjurymoderators](#getjurymoderators)**           | Retrieves a list of moderators assigned to a specific jury                                |
| **[getjury](#getjury)**                               | Retrieves information about a specific jury                                               |
| **[getalljury](#getalljury)**                         | Retrieves a list of all juries available in the network                                   |
| **[getbans](#getbans)**                               | Retrieves the ban status of a specific user                                               |
| **[getaddressid](#getaddressid)**                     | Retrieves the unique identifier (ID) associated with a specific address                   |
| **[getaddressregistration](#getaddressregistration)** | Retrieves the registration status for multiple addresses                                  |
| **[getuserstate](#getuserstate)**                     | Retrieves the state information of a specific user                                        |
| **[txunspent](#txunspent)**                           | Retrieves a list of unspent transaction outputs (UTXOs) for specified addresses           |
| **[getaccountearning](#getaccountearning)**           | Retrieves the earning details of a specific account based on address, height, and depth   |
| **[getaddressinfo](#getaddressinfo)**                 | Retrieves detailed information about a specific address                                   |
| **[getbalancehistory](#getbalancehistory)**           | Retrieves the balance history for a list of addresses over a given block range            |
| **[checkstringtype](#checkstringtype)**               | Checks the type of a given string in the context of the network                           |
| **[getaddresstransactions](#getaddresstransactions)** | Retrieves a list of transactions for a specific address                                   |
| **[getblocktransactions](#getblocktransactions)**     | Retrieves a list of transactions included in a specific block                             |
| **[getcompactblock](#getcompactblock)**               | Retrieves compact block data for a given block hash or block number                       |
| **[getaddressscores](#getaddressscores)**             | Retrieves scores related to a specific address and its posts                              |
| **[getpostscores](#getpostscores)**                   | Retrieves scores for a specific post based on its transaction hash                        |
| **[getpagescores](#getpagescores)**                   | Retrieves scores for multiple posts and comments on a specific page                       |
| **[getcomments](#getcomments)**                       | Retrieves comments related to a specific post                                             |
| **[getlastcomments](#getlastcomments)**               | Retrieves the most recent comments from the network                                       |
| **[getcontent](#getcontent)**                         | Retrieves content based on provided hashes and address                                    |
| **[getcontents](#getcontents)**                       | Retrieves content posted by a specific address                                            |
| **[getuseraddress](#getuseraddress)**                 | Retrieves the addresses associated with a specific username                               |
| **[getusersubscribes](#getusersubscribes)**           | Retrieves a list of users that a specific user is subscribed to                           |
| **[getusersubscribers](#getusersubscribers)**         | Retrieves a list of subscribers for a specific user                                       |
| **[getaccountsetting](#getaccountsetting)**           | Retrieves account settings information for a given address                                |
| **[getuserstatistic](#getuserstatistic)**             | Retrieves statistics for a specific user based on activity and address                    |
| **[gettime](#gettime)**                               | Retrieves the current network time                                                        |
| **[getpeerinfo](#getpeerinfo)**                       | Retrieves information about the connected peers in the network                            |
| **[getnodeinfo](#getnodeinfo)**                       | Retrieves information about the current node                                              |
| **[getcoininfo](#getcoininfo)**                       | Retrieves general information about the coin, such as total supply and block count        |
| **[getposdifficulty](#getposdifficulty)**             | Retrieves the Proof-of-Stake difficulty for a specific block height or current difficulty |
| **[gettags](#gettags)**                               | Retrieves a list of tags used within the network for posts and comments                   |
| **[addtransaction](#addtransaction)**                 | Adds a new transaction to the network                                                     |
| **[generatetransaction](#generatetransaction)**       | Generates a new transaction based on provided details                                     |
| **[getaccountearningstats](#getaccountearningstats)** | Retrieves detailed statistics on account earnings over time                               |
| **[getaccountblockings](#getaccountblockings)**       | Retrieves information about accounts blocked by a specific user                           |
| **[getaccountblockers](#getaccountblockers)**         | Retrieves information about accounts that have blocked a specific user                    |
| **[search](#search)**                                 | Searches for content within the network based on keywords and type                        |
| **[searchusers](#searchusers)**                       | Searches for users based on a given keyword and ranking criteria                          |
| **[searchlinks](#searchlinks)**                       | Searches for content based on provided links and content types                            |
| **[getmissedinfo](#getmissedinfo)**                   | Retrieves information about missed blocks and transactions for a specific address         |
| **[getjuryvotes](#getjuryvotes)**                     | Retrieves votes related to a specific jury                                                |
| **[getjurybalance](#getjurybalance)**                 | Retrieves the balance information of a specific jury                                      |
| **[getjurylist](#getjurylist)**                       | Retrieves a list of all juries in the network                                             |
| **[getjuryreward](#getjuryreward)**                   | Retrieves the reward information for a specific jury                                      |
| **[getjuryvotescount](#getjuryvotescount)**           | Retrieves the count of votes for a specific jury                                          |
| **[getmoderatorstatistics](#getmoderatorstatistics)** | Retrieves statistics for a specific moderator based on their activity                     |
| **[gettransaction](#gettransaction)**                 | Retrieves detailed information about a specific transaction                               |
| **[getaccountfollowers](#getaccountfollowers)**       | Retrieves a list of followers for a specific account                                      |
| **[getaccountfollowings](#getaccountfollowings)**     | Retrieves a list of accounts that a specific user is following                            |
| **[getaccountcontents](#getaccountcontents)**         | Retrieves contents associated with a specific account                                     |
| **[getaccountcomments](#getaccountcomments)**         | Retrieves comments associated with a specific account                                     |
| **[getaccountposts](#getaccountposts)**               | Retrieves posts associated with a specific account                                        |
| **[getblockreward](#getblockreward)**                 | Retrieves reward information for a specific block                                         |
| **[getblockcount](#getblockcount)**                   | Retrieves the current block count in the network                                          |
| **[getnetworkhashrate](#getnetworkhashrate)**         | Retrieves the current network hash rate                                                   |
| **[getnetworkinfo](#getnetworkinfo)**                 | Retrieves information about the network status and nodes                                  |
| **[getrawtransaction](#getrawtransaction)**           | Retrieves raw transaction data for a given transaction ID                                 |
| **[decoderawtransaction](#decoderawtransaction)**     | Decodes raw transaction data and returns detailed information about it                    |
| **[validateaddress](#validateaddress)**               | Validates a specific address within the network                                           |
| **[verifychain](#verifychain)**                       | Verifies the integrity of the blockchain                                                  |
| **[getwalletinfo](#getwalletinfo)**                   | Retrieves general information about the wallet, such as balance and transactions          |
| **[getblockhash](#getblockhash)**                     | Retrieves the block hash for a given block number                                         |
| **[getmempoolinfo](#getmempoolinfo)**                 | Retrieves information about the current state of the memory pool                          |
| **[getrawmempool](#getrawmempool)**                   | Retrieves a list of transactions currently in the memory pool                             |
| **[getdifficulty](#getdifficulty)**                   | Retrieves the current difficulty of the network                                           |
| **[getblocktemplate](#getblocktemplate)**             | Retrieves a block template for mining purposes                                            |
| **[getnetworkstakeweight](#getnetworkstakeweight)**   | Retrieves the current stake weight of the network                                         |
| **[getstakingstatus](#getstakingstatus)**             | Retrieves the current staking status of the network                                       |
| **[getmintinginfo](#getmintinginfo)**                 | Retrieves the current minting information for the network                                 |
| **[getblockchaininfo](#getblockchaininfo)**           | Retrieves detailed information about the state of the blockchain                          |
| **[getchaintips](#getchaintips)**                     | Retrieves information about the chain tips in the blockchain                              |
| **[getblocksubsidy](#getblocksubsidy)**               | Retrieves information about the block subsidy for a given block                           |
| **[getblock](#getblock)**                             | Retrieves detailed information about a specific block                                     |
| **[getbestblockhash](#getbestblockhash)**             | Retrieves the hash of the most recent (best) block                                        |
| **[gettxout](#gettxout)**                             | Retrieves information about an unspent transaction output (UTXO)                          |
| **[gettxoutproof](#gettxoutproof)**                   | Retrieves proof that an unspent transaction output (UTXO) is included in a block          |
| **[verifytxoutproof](#verifytxoutproof)**             | Verifies the proof that an unspent transaction output (UTXO) is included in a block       |


### `getapps`

**Description:** Retrieves a list of applications based on the provided parameters.

- **Parameters:**

- `params: GetAppsParams` - Object containing the parameters for the request.

- `params.request: string` - The request string with the required information.

**Returns:** `Promise<any>` - A promise that resolves with the list of applications.

**Example:**

```typescript
pocketNetProxy.rpc
  .getapps({ request: 'exampleRequest' })

  .then(response => console.log('Applications:', response))

  .catch(error => console.error('Failed to fetch applications:', error))
```


### `getappscores`

**Description:** Retrieves scores for a specific application.

- **Parameters:**

- `params: GetAppScoresParams` - Object containing the parameters for the request.

- `params.request: string` - The request string with the required information.

**Returns:** `Promise<any>` - A promise that resolves with the scores for the application.

**Example:**

```typescript
pocketNetProxy.rpc
  .getappscores({ request: 'exampleAppScoresRequest' })

  .then(response => console.log('Application Scores:', response))

  .catch(error =>
    console.error('Failed to fetch application scores:', error),
  )
```


### `getappcomments`

**Description:** Retrieves comments for a specific application.

- **Parameters:**

- `params: GetAppCommentsParams` - Object containing the parameters for the request.

- `params.request: string` - The request string with the required information.

**Returns:** `Promise<any>` - A promise that resolves with the comments for the application.

**Example:**

```typescript
pocketNetProxy.rpc
  .getappcomments({ request: 'exampleAppCommentsRequest' })

  .then(response => console.log('Application Comments:', response))

  .catch(error =>
    console.error('Failed to fetch application comments:', error),
  )
```


### `getuserprofile`

**Description:** Retrieves profile information for a specific user.

- **Parameters:**

- `params: GetUserProfileParams` - Object containing the parameters for the request.

- `params.address: string` - The address of the user.

- `params.shortForm: string` - Indicates if the short form of the profile should be retrieved.

**Returns:** `Promise<any>` - A promise that resolves with the user's profile information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getuserprofile({ address: 'userAddress', shortForm: 'yes' })

  .then(response => console.log('User Profile:', response))

  .catch(error => console.error('Failed to fetch user profile:', error))
```


### `getjuryassigned`

**Description:** Gets assigned jury information.

- **Parameters:**

- `params: GetJuryAssignedParams` - Object containing the parameters for the request.

- `params.address: string` - Moderator address.

- `params.verdict: boolean` - Verdict `1` or `0` (Default: `0`).

- `params.topHeight: number` - Start height of pagination.

- `params.pageStart: number` - Start page.

- `params.pageSize: number` - Size of the page.

- `params.orderBy: string` - Field to order by.

- `params.desc: boolean` - Indicates if the order should be descending.

**Returns:** `Promise<any>` - A promise that resolves with information about the assigned jury.

**Example:**

```typescript
pocketNetProxy.rpc
  .getjuryassigned({
    address: 'address',

    verdict: true,

    topHeight: 0,

    pageStart: 0,

    pageSize: 10,

    orderBy: 'Height',

    desc: true,
  })

  .then(response => console.log('Jury Assigned:', response))

  .catch(error => console.error('Failed to fetch jury assignment:', error))
```


### `getjurymoderators`

**Description:** Retrieves information about jury moderators.

- **Parameters:**

- `params: GetJuryModeratorsParams` - Object containing the parameters for the request.

- `params.jury: string` - The identifier of the jury.

**Returns:** `Promise<any>` - A promise that resolves with the jury moderator information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getjurymoderators({ jury: 'juryId' })

  .then(response => console.log('Jury Moderators:', response))

  .catch(error => console.error('Failed to fetch jury moderators:', error))
```


### `getjury`

**Description:** Retrieves information about a specific jury.

- **Parameters:**

- `params: GetJuryParams` - Object containing the parameters for the request.

- `params.jury: string` - The identifier of the jury.

**Returns:** `Promise<any>` - A promise that resolves with the jury information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getjury({ jury: 'juryId' })

  .then(response => console.log('Jury Information:', response))

  .catch(error => console.error('Failed to fetch jury information:', error))
```


### `getalljury`

**Description:** Retrieves information about all juries in the system.

- **Parameters:** None

**Returns:** `Promise<any>` - A promise that resolves with information about all juries.

**Example:**

```typescript
pocketNetProxy.rpc
  .getalljury()

  .then(response => console.log('All Jury Information:', response))

  .catch(error =>
    console.error('Failed to fetch all jury information:', error),
  )
```


### `getbans`

**Description:** Retrieves ban information for a specific address.

- **Parameters:**

- `params: GetBansParams` - Object containing the parameters for the request.

- `params.address: string` - The address to check for bans.

**Returns:** `Promise<any>` - A promise that resolves with the ban information for the given address.

**Example:**

```typescript
pocketNetProxy.rpc
  .getbans({ address: 'userAddress' })

  .then(response => console.log('Ban Information:', response))

  .catch(error => console.error('Failed to fetch ban information:', error))
```


### `getaddressid`

**Description:** Retrieves the unique identifier (ID) associated with a specific address. This method provides a way to map an address to its corresponding ID within the network.

- **Parameters:**

- `params: GetAddressIdParams` - Object containing the parameters for the request.

- `params.address: string` - Address to retrieve the ID for.

- `params.id: number` - Optional unique ID to include in the request.

**Returns:** `Promise<any>` - A promise that resolves with the unique identifier for the specified address.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaddressid({ address: 'userAddress', id: 12345 })

  .then(response => console.log('Address ID:', response))

  .catch(error => console.error('Failed to fetch address ID:', error))
```


### `getaddressregistration`

**Description:** Retrieves the registration status of multiple addresses. This method checks if the provided addresses are registered within the network and returns their registration details.

- **Parameters:**

- `params: GetAddressRegistrationParams` - Object containing the parameters for the request.

- `params.addresses: string[]` - Array of addresses to check registration status for.

**Returns:** `Promise<any>` - A promise that resolves with the registration status for each of the specified addresses.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaddressregistration({ addresses: ['address1', 'address2'] })

  .then(response => console.log('Address Registration Status:', response))

  .catch(error =>
    console.error('Failed to fetch address registration status:', error),
  )
```


### `getuserstate`

**Description:** Retrieves the state of a specific user based on their address. This method provides information about the user's current state within the network, such as account balance, registration status, and other details.

- **Parameters:**

- `params: GetUserStateParams` - Object containing the parameters for the request.

- `params.address: string` - Address of the user to retrieve the state for.

**Returns:** `Promise<any>` - A promise that resolves with the user's state information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getuserstate({ address: 'userAddress' })

  .then(response => console.log('User State:', response))

  .catch(error => console.error('Failed to fetch user state:', error))
```


### `txunspent`

**Description:** Retrieves a list of unspent transaction outputs (UTXOs) for the specified addresses. This method allows for filtering UTXOs based on the minimum and maximum number of confirmations.

- **Parameters:**
  - `params: TxUnspentParams` - Object containing the parameters for the request.
  - **`params.addresses: string[]`** - Array of addresses to retrieve UTXOs for.
  - **`params.minconf: number`** - Minimum number of confirmations required for UTXOs to be included in the response.
  - **`params.maxconf: number`** - Maximum number of confirmations allowed for UTXOs to be included in the response.

**Returns:** `Promise<any>` - A promise that resolves with a list of UTXOs for the specified addresses and confirmation range.

**Example:**

```typescript
pocketNetProxy.rpc
  .txunspent({
    addresses: ['address1', 'address2'],
    minconf: 1,
    maxconf: 100,
  })
  .then(response => console.log('Unspent Transaction Outputs:', response))
  .catch(error => console.error('Failed to fetch UTXOs:', error))
```


### `getaccountearning`

**Description:** Retrieves the earning details of a specific account based on the provided address, block height, and depth. This method provides information about the rewards or earnings that the account has received within the specified block range.

- **Parameters:**
  - `params: GetAccountEarningParams` - Object containing the parameters for the request.
  - **`params.address: string`** - Address of the account to get earning information for.
  - **`params.height: number`** - Block height to start the search from.
  - **`params.depth: number`** - The number of blocks to search for the earnings information. A higher depth means looking further back in the chain.

**Returns:** `Promise<any>` - A promise that resolves with the earning details for the specified account and block range.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaccountearning({
    address: 'userAddress',
    height: 150,
    depth: 10,
  })
  .then(response => console.log('Account Earnings:', response))
  .catch(error => console.error('Failed to fetch account earnings:', error))
```


### `getaddressinfo`

**Description:** Retrieves detailed information about a specific address.

- **Parameters:**

- `params: GetAddressInfoParams` - Object containing the parameters for the request.

- `params.address: string` - The address to get information for.

**Returns:** `Promise<any>` - A promise that resolves with the address information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaddressinfo({ address: 'userAddress' })

  .then(response => console.log('Address Information:', response))

  .catch(error =>
    console.error('Failed to fetch address information:', error),
  )
```


### `getbalancehistory`

**Description:** Retrieves the balance history for a given set of addresses.

- **Parameters:**

- `params: GetBalanceHistoryParams` - Object containing the parameters for the request.

- `params.addresses: string[]` - Array of user addresses.

- `params.topHeight: number` - Top block height.

- `params.count: number` - Number of history entries to retrieve.

**Returns:** `Promise<any>` - A promise that resolves with the balance history information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getbalancehistory({
    addresses: ['address1', 'address2'],

    topHeight: 100,

    count: 5,
  })

  .then(response => console.log('Balance History:', response))

  .catch(error => console.error('Failed to fetch balance history:', error))
```


### `checkstringtype`

**Description:** Checks the type of a given string.

- **Parameters:**

- `params: CheckStringTypeParams` - Object containing the parameters for the request.

- `params.string: string` - The string to check.

**Returns:** `Promise<any>` - A promise that resolves with the type information of the string.

**Example:**

```typescript
pocketNetProxy.rpc
  .checkstringtype({ string: 'exampleString' })

  .then(response => console.log('String Type:', response))

  .catch(error => console.error('Failed to check string type:', error))
```


### `getaddresstransactions`

**Description:** Retrieves transactions associated with a given address.

- **Parameters:**

- `params: GetAddressTransactionsParams` - Object containing the parameters for the request.

- `params.address: string` - The address to get transactions for.

- `params.pageInitBlock: number` - Page initial block number.

- `params.pageStart: number` - Page start index.

- `params.pageSize: number` - Page size.

- `params.direction: number` - Direction of the search.

- `params.txTypes: number[]` - Array of transaction types to filter by.

**Returns:** `Promise<any>` - A promise that resolves with the address transactions.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaddresstransactions({
    address: 'userAddress',

    pageInitBlock: 0,

    pageStart: 0,

    pageSize: 10,

    direction: 1,

    txTypes: [1, 2],
  })

  .then(response => console.log('Address Transactions:', response))

  .catch(error =>
    console.error('Failed to fetch address transactions:', error),
  )
```


### `getblocktransactions`

**Description:** Retrieves transactions associated with a specific block.

- **Parameters:**

- `params: GetBlockTransactionsParams` - Object containing the parameters for the request.

- `params.blockHash: string` - The hash of the block to get transactions for.

- `params.pageStart: number` - Page start index.

- `params.pageSize: number` - Page size.

**Returns:** `Promise<any>` - A promise that resolves with the block transactions.

**Example:**

```typescript
pocketNetProxy.rpc
  .getblocktransactions({
    blockHash: 'blockHash',

    pageStart: 0,

    pageSize: 10,
  })

  .then(response => console.log('Block Transactions:', response))

  .catch(error =>
    console.error('Failed to fetch block transactions:', error),
  )
```


### `getcompactblock`

**Description:** Retrieves compact information about a specific block.

- **Parameters:**

- `params: GetCompactBlockParams` - Object containing the parameters for the request.

- `params.blockhash: string` - The hash of the block to get information for.

- `params.blocknumber: number` - The number of the block to get information for.

**Returns:** `Promise<any>` - A promise that resolves with the compact block information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getcompactblock({ blockhash: 'blockHash', blocknumber: 100 })

  .then(response => console.log('Compact Block Information:', response))

  .catch(error =>
    console.error('Failed to fetch compact block information:', error),
  )
```


### `getaddressscores`

**Description:** Retrieves scores for posts associated with a given address.

- **Parameters:**

- `params: GetAddressScoresParams` - Object containing the parameters for the request.

- `params.address: string` - The address to get scores for.

- `params.postHashes: string[]` - Array of post hashes.

**Returns:** `Promise<any>` - A promise that resolves with the scores for the posts.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaddressscores({
    address: 'userAddress',

    postHashes: ['postHash1', 'postHash2'],
  })

  .then(response => console.log('Address Scores:', response))

  .catch(error => console.error('Failed to fetch address scores:', error))
```


### `getpostscores`

**Description:** Retrieves scores for a specific post.

- **Parameters:**

- `params: GetPostScoresParams` - Object containing the parameters for the request.

- `params.postTxHash: string` - The transaction hash of the post to get scores for.

**Returns:** `Promise<any>` - A promise that resolves with the post scores.

**Example:**

```typescript
pocketNetProxy.rpc
  .getpostscores({ postTxHash: 'postTxHash' })

  .then(response => console.log('Post Scores:', response))

  .catch(error => console.error('Failed to fetch post scores:', error))
```


### `getpagescores`

**Description:** Retrieves scores for pages associated with a given address.

- **Parameters:**

- `params: GetPageScoresParams` - Object containing the parameters for the request.

- `params.postHashes: string[]` - Array of post hashes.

- `params.address: string` - The address to get scores for.

- `params.commentHashes: string[]` - Array of comment hashes.

**Returns:** `Promise<any>` - A promise that resolves with the page scores.

**Example:**

```typescript
pocketNetProxy.rpc
  .getpagescores({
    postHashes: ['postHash1', 'postHash2'],

    address: 'userAddress',

    commentHashes: ['commentHash1', 'commentHash2'],
  })

  .then(response => console.log('Page Scores:', response))

  .catch(error => console.error('Failed to fetch page scores:', error))
```


### `getcomments`

**Description:** Retrieves comments for a specific post.

- **Parameters:**

- `params: GetCommentsParams` - Object containing the parameters for the request.

- `params.postid: number` - The ID of the post to get comments for.

- `params.parentid?: number` - Optional parent comment ID.

- `params.address?: string` - Optional address to filter by.

- `params.commend_ids?: string[]` - Optional array of comment IDs to filter by.

**Returns:** `Promise<any>` - A promise that resolves with the comments for the post.

**Example:**

```typescript
pocketNetProxy.rpc
  .getcomments({
    postid: 123,

    parentid: 0,

    address: 'userAddress',

    commend_ids: ['comment1', 'comment2'],
  })

  .then(response => console.log('Comments:', response))

  .catch(error => console.error('Failed to fetch comments:', error))
```


### `getlastcomments`

**Description:** Retrieves the last comments in the system.

- **Parameters:**

- `params: GetLastCommentsParams` - Object containing the parameters for the request.

- `params.count: number` - Number of comments to retrieve.

**Returns:** `Promise<any>` - A promise that resolves with the last comments.

**Example:**

```typescript
pocketNetProxy.rpc
  .getlastcomments({ count: 10 })

  .then(response => console.log('Last Comments:', response))

  .catch(error => console.error('Failed to fetch last comments:', error))
```


_(Note: Continue formatting the remaining methods in the same way, ensuring each method includes the description, parameters, returns, and example usage in proper Markdown format.)_


### `getcontent`

**Description:** Retrieves content for a specific post.

- **Parameters:**

- `params: GetContentParams` - Object containing the parameters for the request.

- `params.postTxHash: string` - The transaction hash of the post.

**Returns:** `Promise<any>` - A promise that resolves with the post content.

**Example:**

```typescript
pocketNetProxy.rpc
  .getcontent({ postTxHash: 'postTxHash' })

  .then(response => console.log('Post Content:', response))

  .catch(error => console.error('Failed to fetch post content:', error))
```


### `getcontents`

**Description:** Retrieves contents for multiple posts.

- **Parameters:**

- `params: GetContentsParams` - Object containing the parameters for the request.

- `params.postTxHashes: string[]` - Array of post transaction hashes.

**Returns:** `Promise<any>` - A promise that resolves with the posts' contents.

**Example:**

```typescript
pocketNetProxy.rpc
  .getcontents({ postTxHashes: ['postTxHash1', 'postTxHash2'] })

  .then(response => console.log('Posts Content:', response))

  .catch(error => console.error('Failed to fetch posts content:', error))
```


### `getuseraddress`

**Description:** Retrieves the address associated with a specific username.

- **Parameters:**

- `params: GetUserAddressParams` - Object containing the parameters for the request.

- `params.username: string` - The username to get the address for.

**Returns:** `Promise<any>` - A promise that resolves with the user's address.

**Example:**

```typescript
pocketNetProxy.rpc
  .getuseraddress({ username: 'userName' })

  .then(response => console.log('User Address:', response))

  .catch(error => console.error('Failed to fetch user address:', error))
```


### `getusersubscribes`

**Description:** Retrieves the list of users that a specific user is subscribed to.

- **Parameters:**

- `params: GetUserSubscribesParams` - Object containing the parameters for the request.

- `params.address: string` - The address of the user.

**Returns:** `Promise<any>` - A promise that resolves with the list of subscriptions.

**Example:**

```typescript
pocketNetProxy.rpc
  .getusersubscribes({ address: 'userAddress' })

  .then(response => console.log('User Subscriptions:', response))

  .catch(error =>
    console.error('Failed to fetch user subscriptions:', error),
  )
```


### `getusersubscribers`

**Description:** Retrieves the list of users that are subscribed to a specific user.

- **Parameters:**

- `params: GetUserSubscribersParams` - Object containing the parameters for the request.

- `params.address: string` - The address of the user.

**Returns:** `Promise<any>` - A promise that resolves with the list of subscribers.

**Example:**

```typescript
pocketNetProxy.rpc
  .getusersubscribers({ address: 'userAddress' })

  .then(response => console.log('User Subscribers:', response))

  .catch(error => console.error('Failed to fetch user subscribers:', error))
```


### `getaccountsetting`

**Description:** Retrieves the account settings for a specific user.

- **Parameters:**

- `params: GetAccountSettingParams` - Object containing the parameters for the request.

- `params.address: string` - The address of the user.

**Returns:** `Promise<any>` - A promise that resolves with the account settings.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaccountsetting({ address: 'userAddress' })

  .then(response => console.log('Account Settings:', response))

  .catch(error => console.error('Failed to fetch account settings:', error))
```


### `getuserstatistic`

**Description:** Retrieves statistics for a specific user.

- **Parameters:**

- `params: GetUserStatisticParams` - Object containing the parameters for the request.

- `params.address: string` - The address of the user.

**Returns:** `Promise<any>` - A promise that resolves with the user's statistics.

**Example:**

```typescript
pocketNetProxy.rpc
  .getuserstatistic({ address: 'userAddress' })

  .then(response => console.log('User Statistics:', response))

  .catch(error => console.error('Failed to fetch user statistics:', error))
```


### `gettime`

**Description:** Retrieves the current server time.

- **Parameters:** None

**Returns:** `Promise<any>` - A promise that resolves with the current server time.

**Example:**

```typescript
pocketNetProxy.rpc
  .gettime()

  .then(response => console.log('Server Time:', response))

  .catch(error => console.error('Failed to fetch server time:', error))
```


### `getcontent`

**Description:** Retrieves content based on the given hashes and address.

- **Parameters:**

- `params: GetContentParams` - Object containing the parameters for the request.

- `params.hashes: string[]` - Array of hashes representing the content to be retrieved.

- `params.address: string` - Address to use for additional filtering or validation.

- `params.last: boolean` - Flag indicating if only the latest content should be retrieved.

**Returns:** `Promise<any>` - A promise that resolves with the content information based on the provided hashes.

**Example:**

```typescript
pocketNetProxy.rpc
  .getcontent({
    hashes: ['hash1', 'hash2'],

    address: 'userAddress',

    last: true,
  })

  .then(response => console.log('Content:', response))

  .catch(error => console.error('Failed to fetch content:', error))
```


### `getcontents`

**Description:** Retrieves contents related to a specific address.

- **Parameters:**

- `params: GetContentsParams` - Object containing the parameters for the request.

- `params.address: string` - Address to filter the contents by.

**Returns:** `Promise<any>` - A promise that resolves with the list of contents related to the provided address.

**Example:**

```typescript
pocketNetProxy.rpc
  .getcontents({ address: 'userAddress' })

  .then(response => console.log('Contents:', response))

  .catch(error => console.error('Failed to fetch contents:', error))
```


### `getuseraddress`

**Description:** Retrieves the address associated with a given user name.

- **Parameters:**

- `params: GetUserAddressParams` - Object containing the parameters for the request.

- `params.user_name: string` - The user name to get the address for.

- `params.count: number` - Number of addresses to retrieve.

**Returns:** `Promise<any>` - A promise that resolves with the address information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getuseraddress({
    user_name: 'username',

    count: 1,
  })

  .then(response => console.log('User Address:', response))

  .catch(error => console.error('Failed to fetch user address:', error))
```


### `getusersubscribes`

**Description:** Retrieves the list of subscriptions for a specific user.

- **Parameters:**

- `params: GetUserSubscribesParams` - Object containing the parameters for the request.

- `params.address: string` - Address of the user to retrieve subscriptions for.

- `params.orderby: string` - Field to order the results by.

- `params.orderdesc: boolean` - Flag indicating whether to order results in descending order.

- `params.offset: number` - Offset for pagination.

- `params.limit: number` - Limit of results per page.

**Returns:** `Promise<any>` - A promise that resolves with the list of user subscriptions.

**Example:**

```typescript
pocketNetProxy.rpc
  .getusersubscribes({
    address: 'userAddress',

    orderby: 'created',

    orderdesc: true,

    offset: 0,

    limit: 10,
  })

  .then(response => console.log('User Subscriptions:', response))

  .catch(error =>
    console.error('Failed to fetch user subscriptions:', error),
  )
```


### `getusersubscribers`

**Description:** Retrieves the list of subscribers for a specific user.

- **Parameters:**

- `params: GetUserSubscribersParams` - Object containing the parameters for the request.

- `params.address: string` - Address of the user to retrieve subscribers for.

- `params.orderby: string` - Field to order the results by.

- `params.orderdesc: boolean` - Flag indicating whether to order results in descending order.

- `params.offset: number` - Offset for pagination.

- `params.limit: number` - Limit of results per page.

**Returns:** `Promise<any>` - A promise that resolves with the list of user subscribers.

**Example:**

```typescript
pocketNetProxy.rpc
  .getusersubscribers({
    address: 'userAddress',

    orderby: 'created',

    orderdesc: true,

    offset: 0,

    limit: 10,
  })

  .then(response => console.log('User Subscribers:', response))

  .catch(error => console.error('Failed to fetch user subscribers:', error))
```


### `getaccountsetting`

**Description:** Retrieves account settings for a specific address.

- **Parameters:**

- `params: GetAccountSettingParams` - Object containing the parameters for the request.

- `params.address: string` - Address of the account to retrieve settings for.

**Returns:** `Promise<any>` - A promise that resolves with the account settings.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaccountsetting({ address: 'userAddress' })

  .then(response => console.log('Account Settings:', response))

  .catch(error => console.error('Failed to fetch account settings:', error))
```


### `getuserstatistic`

**Description:** Retrieves user statistics based on the provided parameters.

- **Parameters:**

- `params: GetUserStatisticParams` - Object containing the parameters for the request.

- `params.addresses: string[]` - Array of addresses to retrieve statistics for.

- `params.height: number` - The block height to consider.

- `params.depthR: number` - Depth of ratings to include.

- `params.depthC: number` - Depth of comments to include.

- `params.cntC: number` - Number of comments to include.

**Returns:** `Promise<any>` - A promise that resolves with the user statistics.

**Example:**

```typescript
pocketNetProxy.rpc
  .getuserstatistic({
    addresses: ['address1', 'address2'],

    height: 100,

    depthR: 10,

    depthC: 5,

    cntC: 20,
  })

  .then(response => console.log('User Statistics:', response))

  .catch(error => console.error('Failed to fetch user statistics:', error))
```


### `gettime`

**Description:** Retrieves the current time of the network.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the current network time.

**Example:**

```typescript
pocketNetProxy.rpc
  .gettime()

  .then(response => console.log('Network Time:', response))

  .catch(error => console.error('Failed to fetch network time:', error))
```


### `getpeerinfo`

**Description:** Retrieves information about connected peers.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the peer information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getpeerinfo()

  .then(response => console.log('Peer Information:', response))

  .catch(error => console.error('Failed to fetch peer information:', error))
```


### `getnodeinfo`

**Description:** Retrieves information about the node.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the node information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getnodeinfo()

  .then(response => console.log('Node Information:', response))

  .catch(error => console.error('Failed to fetch node information:', error))
```


### `getcoininfo`

**Description:** Retrieves information about the coin.

- **Parameters:**

- `params: GetCoinInfoParams` - Object containing the parameters for the request.

- `params.height?: number` - Optional block height to retrieve the coin information for.

**Returns:** `Promise<any>` - A promise that resolves with the coin information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getcoininfo({ height: 100 })

  .then(response => console.log('Coin Information:', response))

  .catch(error => console.error('Failed to fetch coin information:', error))
```


### `getcontent`

**Description:** Retrieves content based on the given hashes and address.

- **Parameters:**

- `params: GetContentParams` - Object containing the parameters for the request.

- `params.hashes: string[]` - Array of hashes representing the content to be retrieved.

- `params.address: string` - Address to use for additional filtering or validation.

- `params.last: boolean` - Flag indicating if only the latest content should be retrieved.

**Returns:** `Promise<any>` - A promise that resolves with the content information based on the provided hashes.

**Example:**

```typescript
pocketNetProxy.rpc
  .getcontent({
    hashes: ['hash1', 'hash2'],

    address: 'userAddress',

    last: true,
  })

  .then(response => console.log('Content:', response))

  .catch(error => console.error('Failed to fetch content:', error))
```


### `getcontents`

**Description:** Retrieves contents related to a specific address.

- **Parameters:**

- `params: GetContentsParams` - Object containing the parameters for the request.

- `params.address: string` - Address to filter the contents by.

**Returns:** `Promise<any>` - A promise that resolves with the list of contents related to the provided address.

**Example:**

```typescript
pocketNetProxy.rpc
  .getcontents({ address: 'userAddress' })

  .then(response => console.log('Contents:', response))

  .catch(error => console.error('Failed to fetch contents:', error))
```


### `getuseraddress`

**Description:** Retrieves the address associated with a given user name.

- **Parameters:**

- `params: GetUserAddressParams` - Object containing the parameters for the request.

- `params.user_name: string` - The user name to get the address for.

- `params.count: number` - Number of addresses to retrieve.

**Returns:** `Promise<any>` - A promise that resolves with the address information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getuseraddress({
    user_name: 'username',

    count: 1,
  })

  .then(response => console.log('User Address:', response))

  .catch(error => console.error('Failed to fetch user address:', error))
```


### `getusersubscribes`

**Description:** Retrieves the list of subscriptions for a specific user.

- **Parameters:**

- `params: GetUserSubscribesParams` - Object containing the parameters for the request.

- `params.address: string` - Address of the user to retrieve subscriptions for.

- `params.orderby: string` - Field to order the results by.

- `params.orderdesc: boolean` - Flag indicating whether to order results in descending order.

- `params.offset: number` - Offset for pagination.

- `params.limit: number` - Limit of results per page.

**Returns:** `Promise<any>` - A promise that resolves with the list of user subscriptions.

**Example:**

```typescript
pocketNetProxy.rpc
  .getusersubscribes({
    address: 'userAddress',

    orderby: 'created',

    orderdesc: true,

    offset: 0,

    limit: 10,
  })

  .then(response => console.log('User Subscriptions:', response))

  .catch(error =>
    console.error('Failed to fetch user subscriptions:', error),
  )
```


### `getusersubscribers`

**Description:** Retrieves the list of subscribers for a specific user.

- **Parameters:**

- `params: GetUserSubscribersParams` - Object containing the parameters for the request.

- `params.address: string` - Address of the user to retrieve subscribers for.

- `params.orderby: string` - Field to order the results by.

- `params.orderdesc: boolean` - Flag indicating whether to order results in descending order.

- `params.offset: number` - Offset for pagination.

- `params.limit: number` - Limit of results per page.

**Returns:** `Promise<any>` - A promise that resolves with the list of user subscribers.

**Example:**

```typescript
pocketNetProxy.rpc
  .getusersubscribers({
    address: 'userAddress',

    orderby: 'created',

    orderdesc: true,

    offset: 0,

    limit: 10,
  })

  .then(response => console.log('User Subscribers:', response))

  .catch(error => console.error('Failed to fetch user subscribers:', error))
```


### `getaccountsetting`

**Description:** Retrieves account settings for a specific address.

- **Parameters:**

- `params: GetAccountSettingParams` - Object containing the parameters for the request.

- `params.address: string` - Address of the account to retrieve settings for.

**Returns:** `Promise<any>` - A promise that resolves with the account settings.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaccountsetting({ address: 'userAddress' })

  .then(response => console.log('Account Settings:', response))

  .catch(error => console.error('Failed to fetch account settings:', error))
```


### `getuserstatistic`

**Description:** Retrieves user statistics based on the provided parameters.

- **Parameters:**

- `params: GetUserStatisticParams` - Object containing the parameters for the request.

- `params.addresses: string[]` - Array of addresses to retrieve statistics for.

- `params.height: number` - The block height to consider.

- `params.depthR: number` - Depth of ratings to include.

- `params.depthC: number` - Depth of comments to include.

- `params.cntC: number` - Number of comments to include.

**Returns:** `Promise<any>` - A promise that resolves with the user statistics.

**Example:**

```typescript
pocketNetProxy.rpc
  .getuserstatistic({
    addresses: ['address1', 'address2'],

    height: 100,

    depthR: 10,

    depthC: 5,

    cntC: 20,
  })

  .then(response => console.log('User Statistics:', response))

  .catch(error => console.error('Failed to fetch user statistics:', error))
```


### `gettime`

**Description:** Retrieves the current time of the network.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the current network time.

**Example:**

```typescript
pocketNetProxy.rpc
  .gettime()

  .then(response => console.log('Network Time:', response))

  .catch(error => console.error('Failed to fetch network time:', error))
```


### `getpeerinfo`

**Description:** Retrieves information about connected peers.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the peer information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getpeerinfo()

  .then(response => console.log('Peer Information:', response))

  .catch(error => console.error('Failed to fetch peer information:', error))
```


### `getnodeinfo`

**Description:** Retrieves information about the node.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the node information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getnodeinfo()

  .then(response => console.log('Node Information:', response))

  .catch(error => console.error('Failed to fetch node information:', error))
```


### `getcoininfo`

**Description:** Retrieves information about the coin.

- **Parameters:**

- `params: GetCoinInfoParams` - Object containing th### `getposdifficulty`

**Description:** Retrieves the Proof-of-Stake (PoS) difficulty information for the network.

- **Parameters:**

- `params: GetPosDifficultyParams` - Object containing the parameters for the request.

- `params.height?: number` - Optional block height to retrieve the PoS difficulty for.

**Returns:** `Promise<any>` - A promise that resolves with the PoS difficulty information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getposdifficulty({ height: 100 })

  .then(response => console.log('PoS Difficulty Information:', response))

  .catch(error =>
    console.error('Failed to fetch PoS difficulty information:', error),
  )
```


### `getposdifficulty`

**Description:** Retrieves the Proof-of-Stake (PoS) difficulty information for the network at a specific block height, or for the current block if no height is provided.

- **Parameters:**
  - `params: GetPosDifficultyParams` - Object containing the parameters for the request.
  - **`params.height?: number`** - Optional block height to retrieve the PoS difficulty for. If omitted, the current PoS difficulty is retrieved.

**Returns:** `Promise<any>` - A promise that resolves with the PoS difficulty information for the specified height or the current difficulty if no height is provided.

**Example:**

```typescript
pocketNetProxy.rpc
  .getposdifficulty({ height: 200 })
  .then(response => console.log('PoS Difficulty Information:', response))
  .catch(error =>
    console.error('Failed to fetch PoS difficulty information:', error),
  )

// Example without specifying height (retrieves current PoS difficulty)
pocketNetProxy.rpc
  .getposdifficulty()
  .then(response => console.log('Current PoS Difficulty:', response))
  .catch(error =>
    console.error('Failed to fetch current PoS difficulty:', error),
  )
```


### `gettags`

**Description:** Retrieves a list of tags used in the network.

- **Parameters:**

- `params: GetTagsParams` - Object containing the parameters for the request.

- `params.pageStart: number` - Start index for pagination.

- `params.pageSize: number` - Number of items per page.

- `params.lang: string` - Language to filter the tags by.

**Returns:** `Promise<any>` - A promise that resolves with the list of tags.

**Example:**

```typescript
pocketNetProxy.rpc
  .gettags({ pageStart: 0, pageSize: 10, lang: 'en' })

  .then(response => console.log('Tags:', response))

  .catch(error => console.error('Failed to fetch tags:', error))
```


### `addtransaction`

**Description:** Adds a new transaction to the network.

- **Parameters:**

- `params: AddTransactionParams` - Object containing the parameters for the request.

- `params.param1: string` - First parameter required for the transaction.

- `params.param2: Record<string, any>` - Additional transaction details.

**Returns:** `Promise<any>` - A promise that resolves with the result of the transaction addition.

**Example:**

```typescript
pocketNetProxy.rpc
  .addtransaction({
    param1: 'value1',

    param2: { key: 'value' },
  })

  .then(response => console.log('Transaction Added:', response))

  .catch(error => console.error('Failed to add transaction:', error))
```


### `generatetransaction`

**Description:** Generates a new transaction based on the given parameters.

- **Parameters:**

- `params: GenerateTransactionParams` - Object containing the parameters for the request.

- `params.address: string` - Address for the transaction.

- `params.privkeys: string[]` - Private keys to sign the transaction.

- `params.outcount: number` - Output count for the transaction.

- `params.type: string` - Type of transaction.

- `params.payload: Record<string, any>` - Payload data for the transaction.

- `params.fee: number` - Fee for the transaction.

- `params.contentaddress: number` - Content address to use.

- `params.confirmations: number` - Number of confirmations required.

- `params.locktime: number` - Locktime for the transaction.

**Returns:** `Promise<any>` - A promise that resolves with the generated transaction.

**Example:**

```typescript
pocketNetProxy.rpc
  .generatetransaction({
    address: 'userAddress',

    privkeys: ['key1', 'key2'],

    outcount: 1,

    type: 'transactionType',

    payload: { data: 'payloadData' },

    fee: 10,

    contentaddress: 0,

    confirmations: 6,

    locktime: 0,
  })

  .then(response => console.log('Transaction Generated:', response))

  .catch(error => console.error('Failed to generate transaction:', error))
```


### `getaccountearningstats`

**Description:** Retrieves statistics about the earnings of an account.

- **Parameters:**

- `params: GetAccountEarningParams` - Object containing the parameters for the request.

- `params.address: string` - Address of the user to get statistics for.

- `params.height: number` - Block height to consider.

- `params.depth: number` - Depth of the search.

**Returns:** `Promise<any>` - A promise that resolves with the account earning statistics.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaccountearningstats({
    address: 'userAddress',

    height: 100,

    depth: 10,
  })

  .then(response => console.log('Account Earning Statistics:', response))

  .catch(error =>
    console.error('Failed to fetch account earning statistics:', error),
  )
```


### `getaccountblockings`

**Description:** Retrieves the list of accounts blocked by a specific address.

- **Parameters:**

- `params: GetAccountBlockingsParams` - Object containing the parameters for the request.

- `params.address: string` - The address to get blockings for.

- `params.topHeight: number` - Top block height.

- `params.pageStart: number` - Start index for pagination.

- `params.pageSize: number` - Number of items per page.

**Returns:** `Promise<any>` - A promise that resolves with the list of blocked accounts.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaccountblockings({
    address: 'userAddress',

    topHeight: 100,

    pageStart: 0,

    pageSize: 10,
  })

  .then(response => console.log('Account Blockings:', response))

  .catch(error => console.error('Failed to fetch account blockings:', error))
```


### `getaccountblockers`

**Description:** Retrieves the list of accounts that have blocked a specific address.

- **Parameters:**

- `params: GetAccountBlockersParams` - Object containing the parameters for the request.

- `params.address: string` - The address to get blockers for.

- `params.topHeight: number` - Top block height.

- `params.pageStart: number` - Start index for pagination.

- `params.pageSize: number` - Number of items per page.

**Returns:** `Promise<any>` - A promise that resolves with the list of accounts that have blocked the given address.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaccountblockers({
    address: 'userAddress',

    topHeight: 100,

    pageStart: 0,

    pageSize: 10,
  })

  .then(response => console.log('Account Blockers:', response))

  .catch(error => console.error('Failed to fetch account blockers:', error))
```


### `search`

**Description:** Searches for content based on the provided parameters.

- **Parameters:**

- `params: SearchParams` - Object containing the parameters for the request.

- `params.keyword: string` - The keyword to search for.

- `params.type: string` - The type of content to search for.

- `params.topBlock?: number` - Optional top block height to filter results.

- `params.pageStart?: number` - Optional start index for pagination.

- `params.pageSize?: number` - Optional number of items per page.

- `params.address?: string` - Optional address to filter results by.

**Returns:** `Promise<any>` - A promise that resolves with the search results.

**Example:**

```typescript
pocketNetProxy.rpc
  .search({
    keyword: 'exampleKeyword',

    type: 'post',

    topBlock: 100,

    pageStart: 0,

    pageSize: 10,

    address: 'userAddress',
  })

  .then(response => console.log('Search Results:', response))

  .catch(error => console.error('Failed to search content:', error))
```


### `searchusers`

**Description:** Searches for users based on the provided parameters.

- **Parameters:**

- `params: SearchUsersParams` - Object containing the parameters for the request.

- `params.keyword: string` - The keyword to search for.

- `params.fieldtype: string` - The field type to search by.

- `params.orderbyrank: number` - Flag indicating if the results should be ordered by rank.

**Returns:** `Promise<any>` - A promise that resolves with the user search results.

**Example:**

```typescript
pocketNetProxy.rpc
  .searchusers({
    keyword: 'username',

    fieldtype: 'name',

    orderbyrank: 1,
  })

  .then(response => console.log('User Search Results:', response))

  .catch(error => console.error('Failed to search users:', error))
```


### `searchlinks`

**Description:** Searches for links based on the provided parameters.

- **Parameters:**

- `params: SearchLinksParams` - Object containing the parameters for the request.

- `params.links: string` - The links to search for.

- `params.contenttypes: string[]` - Array of content types to filter by.

- `params.height: number` - The block height to consider.

- `params.count: number` - Number of items to retrieve.

**Returns:** `Promise<any>` - A promise that resolves with the link search results.

**Example:**

```typescript
pocketNetProxy.rpc
  .searchlinks({
    links: 'exampleLink',

    contenttypes: ['type1', 'type2'],

    height: 100,

    count: 10,
  })

  .then(response => console.log('Link Search Results:', response))

  .catch(error => console.error('Failed to search links:', error))
```


*(Note: If there are any additional methods you would like to include, please provide them, and they will be formatted accordingly.)*e parameters for the request.

- `params.height?: number` - Optional block height to retrieve the coin information for.

**Returns:** `Promise<any>` - A promise that resolves with the coin information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getcoininfo({ height: 100 })

  .then(response => console.log('Coin Information:', response))

  .catch(error => console.error('Failed to fetch coin information:', error))
```


### `searchlinks`

**Description:** Searches for links based on the provided parameters.

- **Parameters:**
  - `params: SearchLinksParams` - Object containing the parameters for the request.
  - **`params.links: string`** - The links to search for.
  - **`params.contenttypes: string[]`** - Array of content types to filter by.
  - **`params.height: number`** - The block height to consider.
  - **`params.count: number`** - Number of items to retrieve.

**Returns:** `Promise<any>` - A promise that resolves with the link search results.

**Example:**

```typescript
pocketNetProxy.rpc
  .searchlinks({
    links: 'exampleLink',
    contenttypes: ['type1', 'type2'],
    height: 100,
    count: 10,
  })
  .then(response => console.log('Link Search Results:', response))
  .catch(error => console.error('Failed to search links:', error))
```


### `getaccountcomments`

**Description:** Retrieves comments associated with a specific account.

- **Parameters:**
  - `params: GetUserSubscribesParams` - Object containing the parameters for the request.
  - **`params.address: string`** - Address of the account to get comments for.
  - **`params.orderby: string`** - Field to order the results by.
  - **`params.orderdesc: boolean`** - Flag indicating whether to order results in descending order.
  - **`params.offset: number`** - Offset for pagination.
  - **`params.limit: number`** - Limit of results per page.

**Returns:** `Promise<any>` - A promise that resolves with the list of account comments.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaccountcomments({
    address: 'userAddress',
    orderby: 'created',
    orderdesc: true,
    offset: 0,
    limit: 10,
  })
  .then(response => console.log('Account Comments:', response))
  .catch(error => console.error('Failed to fetch account comments:', error))
```


### `getmissedinfo`

**Description:** Retrieves missed information for a given address and block number.

- **Parameters:**

- `params: GetMissedInfoParams` - Object containing the parameters for the request.

- `params.address: string` - Address to get missed information for.

- `params.block_number: number` - Block number to consider.

**Returns:** `Promise<any>` - A promise that resolves with the missed information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getmissedinfo({
    address: 'userAddress',

    block_number: 100,
  })

  .then(response => console.log('Missed Information:', response))

  .catch(error =>
    console.error('Failed to fetch missed information:', error),
  )
```


### `getjuryvotes`

**Description:** Retrieves votes information for a specific jury.

- **Parameters:**

- `params: GetJuryParams` - Object containing the parameters for the request.

- `params.jury: string` - Identifier of the jury.

**Returns:** `Promise<any>` - A promise that resolves with the votes information for the jury.

**Example:**

```typescript
pocketNetProxy.rpc
  .getjuryvotes({ jury: 'juryId' })

  .then(response => console.log('Jury Votes:', response))

  .catch(error => console.error('Failed to fetch jury votes:', error))
```


### `getjurybalance`

**Description:** Retrieves the balance of a specific jury.

- **Parameters:**

- `params: GetJuryParams` - Object containing the parameters for the request.

- `params.jury: string` - Identifier of the jury.

**Returns:** `Promise<any>` - A promise that resolves with the jury balance information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getjurybalance({ jury: 'juryId' })

  .then(response => console.log('Jury Balance:', response))

  .catch(error => console.error('Failed to fetch jury balance:', error))
```


### `getjurylist`

**Description:** Retrieves a list of all juries.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the list of juries.

**Example:**

```typescript
pocketNetProxy.rpc
  .getjurylist()

  .then(response => console.log('Jury List:', response))

  .catch(error => console.error('Failed to fetch jury list:', error))
```


### `getjuryreward`

**Description:** Retrieves the reward information for a specific jury.

- **Parameters:**

- `params: GetJuryParams` - Object containing the parameters for the request.

- `params.jury: string` - Identifier of the jury.

**Returns:** `Promise<any>` - A promise that resolves with the reward information for the jury.

**Example:**

```typescript
pocketNetProxy.rpc
  .getjuryreward({ jury: 'juryId' })

  .then(response => console.log('Jury Reward:', response))

  .catch(error =>
    console.error('Failed to fetch jury reward information:', error),
  )
```


### `getjuryvotescount`

**Description:** Retrieves the number of votes for a specific jury.

- **Parameters:**

- `params: GetJuryParams` - Object containing the parameters for the request.

- `params.jury: string` - Identifier of the jury.

**Returns:** `Promise<any>` - A promise that resolves with the number of votes for the jury.

**Example:**

```typescript
pocketNetProxy.rpc
  .getjuryvotescount({ jury: 'juryId' })

  .then(response => console.log('Jury Votes Count:', response))

  .catch(error => console.error('Failed to fetch jury votes count:', error))
```


### `getmoderatorstatistics`

**Description:** Retrieves moderator statistics based on the given parameters.

- **Parameters:**

- `params: GetJuryParams` - Object containing the parameters for the request.

- `params.jury: string` - Identifier of the jury.

**Returns:** `Promise<any>` - A promise that resolves with the moderator statistics.

**Example:**

```typescript
pocketNetProxy.rpc
  .getmoderatorstatistics({ jury: 'juryId' })

  .then(response => console.log('Moderator Statistics:', response))

  .catch(error =>
    console.error('Failed to fetch moderator statistics:', error),
  )
```


### `gettransaction`

**Description:** Retrieves detailed information about a specific transaction.

- **Parameters:**

- `params: GetTransactionParams` - Object containing the parameters for the request.

- `params.txid: string` - The transaction ID to retrieve information for.

**Returns:** `Promise<any>` - A promise that resolves with the transaction information.

**Example:**

```typescript
pocketNetProxy.rpc
  .gettransaction({ txid: 'transactionId' })

  .then(response => console.log('Transaction Information:', response))

  .catch(error =>
    console.error('Failed to fetch transaction information:', error),
  )
```


### `getaccountfollowers`

**Description:** Retrieves the list of followers for a specific account.

- **Parameters:**

- `params: GetUserFollowersParams` - Object containing the parameters for the request.

- `params.address: string` - Address of the account to get followers for.

- `params.orderby: string` - Field to order the results by.

- `params.orderdesc: boolean` - Flag indicating whether to order results in descending order.

- `params.offset: number` - Offset for pagination.

- `params.limit: number` - Limit of results per page.

**Returns:** `Promise<any>` - A promise that resolves with the list of account followers.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaccountfollowers({
    address: 'userAddress',

    orderby: 'created',

    orderdesc: true,

    offset: 0,

    limit: 10,
  })

  .then(response => console.log('Account Followers:', response))

  .catch(error => console.error('Failed to fetch account followers:', error))
```


### `getaccountfollowings`

**Description:** Retrieves the list of accounts that a specific user is following.

- **Parameters:**

- `params: GetUserFollowingsParams` - Object containing the parameters for the request.

- `params.address: string` - Address of the account to get followings for.

- `params.orderby: string` - Field to order the results by.

- `params.orderdesc: boolean` - Flag indicating whether to order results in descending order.

- `params.offset: number` - Offset for pagination.

- `params.limit: number` - Limit of results per page.

**Returns:** `Promise<any>` - A promise that resolves with the list of accounts being followed.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaccountfollowings({
    address: 'userAddress',

    orderby: 'created',

    orderdesc: true,

    offset: 0,

    limit: 10,
  })

  .then(response => console.log('Account Followings:', response))

  .catch(error =>
    console.error('Failed to fetch account followings:', error),
  )
```


### `getaccountcontents`

**Description:** Retrieves contents associated with a specific account.

- **Parameters:**

- `params: GetAccountContentsParams` - Object containing the parameters for the request.

- `params.address: string` - Address of the account to get contents for.

- `params.orderby: string` - Field to order the results by.

- `params.orderdesc: boolean` - Flag indicating whether to order results in descending order.

- `params.offset: number` - Offset for pagination.

- `params.limit: number` - Limit of results per page.

**Returns:** `Promise<any>` - A promise that resolves with the list of account contents.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaccountcontents({
    address: 'userAddress',

    orderby: 'created',

    orderdesc: true,

    offset: 0,

    limit: 10,
  })

  .then(response => console.log('Account Contents:', response))

  .catch(error => console.error('Failed to fetch account contents:', error))
```


### `getaccountcomments`

**Description:** Retrieves comments made by a specific account.

- **Parameters:**

- `params: GetAccountCommentsParams` - Object containing the parameters for the request.

- `params.address: string` - Address of the account to get comments for.

- `params.orderby: string` - Field to order the results by.

- `params.orderdesc: boolean` - Flag indicating whether to order results in descending order.

- `params.offset: number` - Offset for pagination.

- `params.limit: number` - Limit of results per page.

**Returns:** `Promise<any>` - A promise that resolves with the list of comments made by the account.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaccountcomments({
    address: 'userAddress',

    orderby: 'created',

    orderdesc: true,

    offset: 0,

    limit: 10,
  })

  .then(response => console.log('Account Comments:', response))

  .catch(error => console.error('Failed to fetch account comments:', error))
```

### `getaccountposts`

**Description:** Retrieves posts associated with a specific account.

- **Parameters:**

- `params: GetUserSubscribesParams` - Object containing the parameters for the request.

- `params.address: string` - Address of the account to get posts for.

- `params.orderby: string` - Field to order the results by.

- `params.orderdesc: boolean` - Flag indicating whether to order results in descending order.

- `params.offset: number` - Offset for pagination.

- `params.limit: number` - Limit of results per page.

**Returns:** `Promise<any>` - A promise that resolves with the list of account posts.

**Example:**

```typescript
pocketNetProxy.rpc
  .getaccountposts({
    address: 'userAddress',

    orderby: 'created',

    orderdesc: true,

    offset: 0,

    limit: 10,
  })

  .then(response => console.log('Account Posts:', response))

  .catch(error => console.error('Failed to fetch account posts:', error))
```


### `getblockreward`

**Description:** Retrieves the reward for a specific block.

- **Parameters:**

- `params: GetUserSubscribesParams` - Object containing the parameters for the request.

- `params.address: string` - Address of the block.

- `params.orderby: string` - Field to order the results by.

- `params.orderdesc: boolean` - Flag indicating whether to order results in descending order.

- `params.offset: number` - Offset for pagination.

- `params.limit: number` - Limit of results per page.

**Returns:** `Promise<any>` - A promise that resolves with the block reward information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getblockreward({
    address: 'blockAddress',

    orderby: 'height',

    orderdesc: true,

    offset: 0,

    limit: 10,
  })

  .then(response => console.log('Block Reward:', response))

  .catch(error => console.error('Failed to fetch block reward:', error))
```


### `getblockcount`

**Description:** Retrieves the current block count in the blockchain.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the current block count.

**Example:**

```typescript
pocketNetProxy.rpc
  .getblockcount()

  .then(response => console.log('Block Count:', response))

  .catch(error => console.error('Failed to fetch block count:', error))
```


### `getnetworkhashrate`

**Description:** Retrieves the current network hash rate.

- **Parameters:**

- `params: GetUserSubscribesParams` - Object containing the parameters for the request.

- `params.address: string` - Address for the request.

- `params.orderby: string` - Field to order the results by.

- `params.orderdesc: boolean` - Flag indicating whether to order results in descending order.

- `params.offset: number` - Offset for pagination.

- `params.limit: number` - Limit of results per page.

**Returns:** `Promise<any>` - A promise that resolves with the network hash rate information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getnetworkhashrate({
    address: 'networkAddress',

    orderby: 'hashrate',

    orderdesc: true,

    offset: 0,

    limit: 10,
  })

  .then(response => console.log('Network Hashrate:', response))

  .catch(error => console.error('Failed to fetch network hashrate:', error))
```


### `getnetworkinfo`

**Description:** Retrieves information about the current state of the network.

- **Parameters:**

- `params: GetUserSubscribesParams` - Object containing the parameters for the request.

- `params.address: string` - Address for the request.

- `params.orderby: string` - Field to order the results by.

- `params.orderdesc: boolean` - Flag indicating whether to order results in descending order.

- `params.offset: number` - Offset for pagination.

- `params.limit: number` - Limit of results per page.

**Returns:** `Promise<any>` - A promise that resolves with the network information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getnetworkinfo({
    address: 'networkAddress',

    orderby: 'nodes',

    orderdesc: true,

    offset: 0,

    limit: 10,
  })

  .then(response => console.log('Network Info:', response))

  .catch(error =>
    console.error('Failed to fetch network information:', error),
  )
```


### `getrawtransaction`

**Description:** Retrieves the raw transaction data for a given transaction ID.

- **Parameters:**

- `params: GetCompactBlockParams` - Object containing the parameters for the request.

- `params.blockhash: string` - Hash of the block containing the transaction.

- `params.blocknumber: number` - Block number of the transaction.

**Returns:** `Promise<any>` - A promise that resolves with the raw transaction data.

**Example:**

```typescript
pocketNetProxy.rpc
  .getrawtransaction({
    blockhash: 'blockHash',

    blocknumber: 100,
  })

  .then(response => console.log('Raw Transaction Data:', response))

  .catch(error =>
    console.error('Failed to fetch raw transaction data:', error),
  )
```


### `decoderawtransaction`

**Description:** Decodes a raw transaction and returns detailed information about it.

- **Parameters:**

- `params: GetCompactBlockParams` - Object containing the parameters for the request.

- `params.blockhash: string` - Hash of the block containing the transaction.

- `params.blocknumber: number` - Block number of the transaction.

**Returns:** `Promise<any>` - A promise that resolves with the decoded transaction information.

**Example:**

```typescript
pocketNetProxy.rpc
  .decoderawtransaction({
    blockhash: 'blockHash',

    blocknumber: 100,
  })

  .then(response => console.log('Decoded Transaction:', response))

  .catch(error => console.error('Failed to decode transaction:', error))
```


### `validateaddress`

**Description:** Validates a specific address in the network.

- **Parameters:**

- `params: GetAddressInfoParams` - Object containing the parameters for the request.

- `params.address: string` - Address to be validated.

**Returns:** `Promise<any>` - A promise that resolves with the validation result.

**Example:**

```typescript
pocketNetProxy.rpc
  .validateaddress({ address: 'userAddress' })

  .then(response => console.log('Address Validation:', response))

  .catch(error => console.error('Failed to validate address:', error))
```


### `verifychain`

**Description:** Verifies the integrity of the blockchain.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the verification result.

**Example:**

```typescript
pocketNetProxy.rpc
  .verifychain()

  .then(response => console.log('Blockchain Verification:', response))

  .catch(error => console.error('Failed to verify blockchain:', error))
```


### `getwalletinfo`

**Description:** Retrieves wallet information.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the wallet information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getwalletinfo()

  .then(response => console.log('Wallet Information:', response))

  .catch(error =>
    console.error('Failed to fetch wallet information:', error),
  )
```


### `getblockhash`

**Description:** Retrieves the block hash for a given block number.

- **Parameters:**
  - `params: GetCompactBlockParams` - Object containing the parameters for the request.
  - **`params.blockhash: string`** - Hash of the block.
  - **`params.blocknumber: number`** - Block number to get the hash for.

**Returns:** `Promise<any>` - A promise that resolves with the block hash.

**Example:**

```typescript
pocketNetProxy.rpc
  .getblockhash({
    blockhash: 'blockHash',
    blocknumber: 100,
  })
  .then(response => console.log('Block Hash:', response))
  .catch(error => console.error('Failed to fetch block hash:', error))
```


### `getmempoolinfo`

**Description:** Retrieves information about the current state of the memory pool.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the memory pool information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getmempoolinfo()

  .then(response => console.log('Memory Pool Information:', response))

  .catch(error =>
    console.error('Failed to fetch memory pool information:', error),
  )
```


### `getrawmempool`

**Description:** Retrieves the list of transactions currently in the memory pool.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the list of transactions in the memory pool.

**Example:**

```typescript
pocketNetProxy.rpc
  .getrawmempool()

  .then(response => console.log('Raw Memory Pool Transactions:', response))

  .catch(error =>
    console.error('Failed to fetch raw memory pool transactions:', error),
  )
```


### `getdifficulty`

**Description:** Retrieves the current difficulty of the network.

- **Parameters:**

- `params: GetPosDifficultyParams` - Object containing the parameters for the request.

- `params.height?: number` - Optional block height to retrieve the difficulty for.

**Returns:** `Promise<any>` - A promise that resolves with the current difficulty information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getdifficulty({ height: 100 })

  .then(response => console.log('Network Difficulty:', response))

  .catch(error =>
    console.error('Failed to fetch network difficulty:', error),
  )
```


### `getblocktemplate`

**Description:** Retrieves a block template for mining purposes.

- **Parameters:**

- `params: GetBlockTemplateParams` - Object containing the parameters for the request.

- `params.mode?: string` - The mining mode.

- `params.capabilities?: string[]` - The mining capabilities.

**Returns:** `Promise<any>` - A promise that resolves with the block template.

**Example:**

```typescript
pocketNetProxy.rpc
  .getblocktemplate({
    mode: 'template',

    capabilities: ['coinbasetxn', 'workid'],
  })

  .then(response => console.log('Block Template:', response))

  .catch(error => console.error('Failed to fetch block template:', error))
```


### `getnetworkstakeweight`

**Description:** Retrieves the current network stake weight.

- **Parameters:**

- `params: GetNetworkStakeWeightParams` - Object containing the parameters for the request.

- `params.height?: number` - Optional block height to retrieve the stake weight for.

**Returns:** `Promise<any>` - A promise that resolves with the network stake weight information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getnetworkstakeweight({ height: 100 })

  .then(response => console.log('Network Stake Weight:', response))

  .catch(error =>
    console.error('Failed to fetch network stake weight:', error),
  )
```


### `getstakingstatus`

**Description:** Retrieves the current staking status of the network.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the staking status information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getstakingstatus()

  .then(response => console.log('Staking Status:', response))

  .catch(error => console.error('Failed to fetch staking status:', error))
```


### `getmintinginfo`

**Description:** Retrieves the current minting information for the network.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the minting information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getmintinginfo()

  .then(response => console.log('Minting Information:', response))

  .catch(error =>
    console.error('Failed to fetch minting information:', error),
  )
```


### `getblockchaininfo`

**Description:** Retrieves detailed information about the current state of the blockchain.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the blockchain information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getblockchaininfo()

  .then(response => console.log('Blockchain Information:', response))

  .catch(error =>
    console.error('Failed to fetch blockchain information:', error),
  )
```


### `getchaintips`

**Description:** Retrieves information about all known blockchain tips.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the chain tips information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getchaintips()

  .then(response => console.log('Chain Tips:', response))

  .catch(error => console.error('Failed to fetch chain tips:', error))
```


### `getblocksubsidy`

**Description:** Retrieves information about the block subsidy for a given block height.

- **Parameters:**

- `params: GetBlockSubsidyParams` - Object containing the parameters for the request.

- `params.height?: number` - Optional block height to retrieve the subsidy for.

**Returns:** `Promise<any>` - A promise that resolves with the block subsidy information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getblocksubsidy({ height: 100 })

  .then(response => console.log('Block Subsidy:', response))

  .catch(error => console.error('Failed to fetch block subsidy:', error))
```


### `getblock`

**Description:** Retrieves detailed information about a specific block.

- **Parameters:**

- `params: GetBlockParams` - Object containing the parameters for the request.

- `params.blockhash: string` - Hash of the block to get information for.

- `params.verbosity?: number` - Level of detail to return.

**Returns:** `Promise<any>` - A promise that resolves with the block information.

**Example:**

```typescript
pocketNetProxy.rpc
  .getblock({
    blockhash: 'blockHash',

    verbosity: 2,
  })

  .then(response => console.log('Block Information:', response))

  .catch(error => console.error('Failed to fetch block information:', error))
```


### `getbestblockhash`

**Description:** Retrieves the hash of the best (most recent) block.

- **Parameters:** None.

**Returns:** `Promise<any>` - A promise that resolves with the best block hash.

**Example:**

```typescript
pocketNetProxy.rpc
  .getbestblockhash()

  .then(response => console.log('Best Block Hash:', response))

  .catch(error => console.error('Failed to fetch best block hash:', error))
```


### `gettxout`

**Description:** Retrieves information about an unspent transaction output (UTXO).

- **Parameters:**

- `params: GetTxOutParams` - Object containing the parameters for the request.

- `params.txid: string` - The transaction ID.

- `params.n: number` - The output index.

- `params.include_mempool?: boolean` - Whether to include the mempool.

**Returns:** `Promise<any>` - A promise that resolves with the UTXO information.

**Example:**

```typescript
pocketNetProxy.rpc
  .gettxout({
    txid: 'transactionId',

    n: 0,

    include_mempool: true,
  })

  .then(response => console.log('UTXO Information:', response))

  .catch(error => console.error('Failed to fetch UTXO information:', error))
```


### `gettxoutproof`

**Description:** Retrieves a proof that a transaction is included in a block.

- **Parameters:**

- `params: GetTxOutProofParams` - Object containing the parameters for the request.

- `params.txids: string[]` - An array of transaction IDs to include in the proof.

- `params.blockhash?: string` - The block hash to search in.

**Returns:** `Promise<any>` - A promise that resolves with the transaction proof.

**Example:**

```typescript
pocketNetProxy.rpc
  .gettxoutproof({
    txids: ['transactionId1', 'transactionId2'],

    blockhash: 'blockHash',
  })

  .then(response => console.log('Transaction Proof:', response))

  .catch(error => console.error('Failed to fetch transaction proof:', error))
```


### `verifytxoutproof`

**Description:** Verifies that a transaction proof points to a transaction in a block.

- **Parameters:**

- `params: VerifyTxOutProofParams` - Object containing the parameters for the request.

- `params.proof: string` - The transaction proof.

**Returns:** `Promise<any>` - A promise that resolves with the verification result.

**Example:**

```typescript
pocketNetProxy.rpc
  .verifytxoutproof({ proof: 'transactionProof' })

  .then(response => console.log('Verification Result:', response))

  .catch(error =>
    console.error('Failed to verify transaction proof:', error),
  )
```