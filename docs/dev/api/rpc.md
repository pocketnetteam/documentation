# Proxy RPC

## Private

TODO - implement

## Public

This document provides a detailed description of all available RPC methods in the [PocketNetProxy class](https://github.com/pocketnetteam/pocketnet-proxy-api).
Each method is listed with its parameters, return values, and examples of usage.


# Bastyon Proxy API Reference

## Available Methods

| Category | Method | Description |
|----------|---------|-------------|
| **Apps** | [GetApps](#getapps) | Retrieves a list of applications filtered by the given criteria |
| | [GetAppScores](#getappscores) | Retrieves scores for a list of applications |
| | [GetAppComments](#getappcomments) | Retrieves comments related to a specific application |
| **User & Account** | [GetUserProfile](#getuserprofile) | Retrieves the profile information of a specific user |
| | [GetUserState](#getuserstate) | Retrieves the state information of a specific user |
| | [GetUserAddress](#getuseraddress) | Retrieves the addresses associated with a specific username |
| | [GetUserStatistic](#getuserstatistic) | Retrieves statistics for a specific user based on activity |
| | [GetUserSubscribes](#getusersubscribes) | Retrieves a list of users that a specific user is subscribed to |
| | [GetUserSubscribers](#getusersubscribers) | Retrieves a list of subscribers for a specific user |
| | [GetAccountSetting](#getaccountsetting) | Retrieves account settings information for a given address |
| | [GetAddressId](#getaddressid) | Retrieves the unique identifier (ID) associated with a specific address |
| | [GetAddressInfo](#getaddressinfo) | Retrieves detailed information about a specific address |
| | [GetAddressRegistration](#getaddressregistration) | Retrieves the registration status for multiple addresses |
| | [GetBalanceHistory](#getbalancehistory) | Retrieves the balance history for a list of addresses |
| | [GetAccountEarning](#getaccountearning) | Retrieves the earning details of a specific account |
| | [GetAccountEarningStats](#getaccountearningstats) | Retrieves detailed statistics on account earnings |
| **Content & Social** | [GetContent](#getcontent) | Retrieves content based on provided hashes and address |
| | [GetContents](#getcontents) | Retrieves content posted by a specific address |
| | [GetComments](#getcomments) | Retrieves comments related to a specific post |
| | [GetLastComments](#getlastcomments) | Retrieves the most recent comments from the network |
| | [GetAccountContents](#getaccountcontents) | Retrieves contents associated with a specific account |
| | [GetAccountComments](#getaccountcomments) | Retrieves comments associated with a specific account |
| | [GetAccountPosts](#getaccountposts) | Retrieves posts associated with a specific account |
| | [GetAccountFollowers](#getaccountfollowers) | Retrieves a list of followers for a specific account |
| | [GetAccountFollowings](#getaccountfollowings) | Retrieves a list of accounts that a specific user is following |
| | [GetAccountBlockings](#getaccountblockings) | Retrieves information about accounts blocked by a specific user |
| | [GetAccountBlockers](#getaccountblockers) | Retrieves information about accounts that have blocked a specific user |
| | [GetBans](#getbans) | Retrieves the ban status of a specific user |
| | [GetTags](#gettags) | Retrieves a list of tags used within the network |
| **Scoring** | [GetAddressScores](#getaddressscores) | Retrieves scores related to a specific address and posts |
| | [GetPostScores](#getpostscores) | Retrieves scores for a specific post |
| | [GetPageScores](#getpagescores) | Retrieves scores for multiple posts and comments |
| **Blockchain** | [GetBlock](#getblock) | Retrieves detailed information about a specific block |
| | [GetBlockCount](#getblockcount) | Retrieves the current block count in the network |
| | [GetBlockHash](#getblockhash) | Retrieves the block hash for a given block number |
| | [GetBlockTemplate](#getblocktemplate) | Retrieves a block template for mining purposes |
| | [GetBlockTransactions](#getblocktransactions) | Retrieves transactions in a specific block |
| | [GetCompactBlock](#getcompactblock) | Retrieves compact block data |
| | [GetBlockReward](#getblockreward) | Retrieves reward information for a specific block |
| | [GetBlockchainInfo](#getblockchaininfo) | Retrieves state of the blockchain |
| | [GetBlockSubsidy](#getblocksubsidy) | Retrieves block subsidy information |
| | [GetBestBlockHash](#getbestblockhash) | Retrieves the most recent block hash |
| | [GetChainTips](#getchaintips) | Retrieves chain tips information |
| | [VerifyChain](#verifychain) | Verifies the integrity of the blockchain |
| **Transactions** | [GetTransaction](#gettransaction) | Retrieves transaction information |
| | [GetRawTransaction](#getrawtransaction) | Retrieves raw transaction data |
| | [DecodeRawTransaction](#decoderawtransaction) | Decodes raw transaction data |
| | [GetAddressTransactions](#getaddresstransactions) | Retrieves transactions for an address |
| | [AddTransaction](#addtransaction) | Adds a new transaction |
| | [GenerateTransaction](#generatetransaction) | Generates a new transaction |
| | [TxUnspent](#txunspent) | Retrieves unspent transaction outputs |
| | [GetTxOut](#gettxout) | Retrieves UTXO information |
| | [GetTxOutProof](#gettxoutproof) | Retrieves UTXO proof |
| | [VerifyTxOutProof](#verifytxoutproof) | Verifies UTXO proof |
| **Network & Node** | [GetNodeInfo](#getnodeinfo) | Retrieves information about the current node |
| | [GetPeerInfo](#getpeerinfo) | Retrieves information about connected peers |
| | [GetNetworkInfo](#getnetworkinfo) | Retrieves network status and nodes information |
| | [GetNetworkHashrate](#getnetworkhashrate) | Retrieves current network hash rate |
| | [GetTime](#gettime) | Retrieves current network time |
| | [GetCoinInfo](#getcoininfo) | Retrieves general coin information |
| | [GetMempoolInfo](#getmempoolinfo) | Retrieves memory pool state |
| | [GetRawMempool](#getrawmempool) | Retrieves transactions in memory pool |
| | [GetDifficulty](#getdifficulty) | Retrieves current network difficulty |
| **Staking & Mining** | [GetPosDifficulty](#getposdifficulty) | Retrieves Proof-of-Stake difficulty |
| | [GetNetworkStakeWeight](#getnetworkstakeweight) | Retrieves current stake weight |
| | [GetStakingStatus](#getstakingstatus) | Retrieves staking status |
| | [GetMintingInfo](#getmintinginfo) | Retrieves minting information |
| **Jury System** | [GetJury](#getjury) | Retrieves specific jury information |
| | [GetAllJury](#getalljury) | Retrieves all juries in network |
| | [GetJuryAssigned](#getjuryassigned) | Retrieves jury assignments |
| | [GetJuryModerators](#getjurymoderators) | Retrieves jury moderators |
| | [GetJuryVotes](#getjuryvotes) | Retrieves jury votes |
| | [GetJuryBalance](#getjurybalance) | Retrieves jury balance |
| | [GetJuryList](#getjurylist) | Retrieves jury list |
| | [GetJuryReward](#getjuryreward) | Retrieves jury rewards |
| | [GetJuryVotesCount](#getjuryvotescount) | Retrieves vote counts |
| | [GetModeratorStatistics](#getmoderatorstatistics) | Retrieves moderator activity statistics |
| **Search & Discovery** | [Search](#search) | Searches content by keywords and type |
| | [SearchUsers](#searchusers) | Searches users by criteria |
| | [SearchLinks](#searchlinks) | Searches content by links |
| **Wallet & Validation** | [GetWalletInfo](#getwalletinfo) | Retrieves wallet information |
| | [ValidateAddress](#validateaddress) | Validates network address |
| | [CheckStringType](#checkstringtype) | Checks string type in network context |
| **System Info** | [GetMissedInfo](#getmissedinfo) | Retrieves missed blocks and transactions |

## Apps Category

### GetApps
Retrieves a list of applications filtered by given criteria.

**Parameters**
```typescript
interface GetAppsParams {
    request: string;  // Request string containing filter criteria for apps
}
```

**Usage**
```typescript
const response = await api.rpc.getapps({
    request: "featured_apps"
} satisfies GetAppsParams);
```

### GetAppScores
Retrieves scoring information for applications.

**Parameters**
```typescript
interface GetAppScoresParams {
    request: string;  // Request string specifying which app scores to retrieve
}
```

**Usage**
```typescript
const response = await api.rpc.getappscores({
    request: "app_scores"
} satisfies GetAppScoresParams);
```

### GetAppComments
Retrieves comments associated with a specific application.

**Parameters**
```typescript
interface GetAppCommentsParams {
    request: string;  // Request string specifying which app comments to retrieve
}
```

**Usage**
```typescript
const response = await api.rpc.getappcomments({
    request: "app_comments"
} satisfies GetAppCommentsParams);
```

## User & Account Management

### GetUserProfile
Retrieves detailed profile information for a specific user.

**Parameters**
```typescript
interface GetUserProfileParams {
    address: string;    // Blockchain address of the user
    shortForm: string;  // Format of the response ("basic" or "detailed")
}
```

**Usage**
```typescript
const response = await api.rpc.getuserprofile({
    address: "user_blockchain_address",
    shortForm: "basic"
} satisfies GetUserProfileParams);
```

### GetUserState
Retrieves current state information for a specific user.

**Parameters**
```typescript
interface GetUserStateParams {
    address: string;  // Blockchain address of the user
}
```

**Usage**
```typescript
const response = await api.rpc.getuserstate({
    address: "user_blockchain_address"
} satisfies GetUserStateParams);
```

### GetUserAddress
Retrieves blockchain addresses associated with a username.

**Parameters**
```typescript
interface GetUserAddressParams {
    user_name: string;  // Username to look up
    count: number;      // Number of addresses to return
}
```

**Usage**
```typescript
const response = await api.rpc.getuseraddress({
    user_name: "username",
    count: 1
} satisfies GetUserAddressParams);
```

### GetUserStatistic
Retrieves statistical information about user activity.

**Parameters**
```typescript
interface GetUserStatisticParams {
    addresses: string[];  // Array of blockchain addresses
    height: number;       // Block height for statistics
    depthR: number;      // Rating depth to include
    depthC: number;      // Comments depth to include
    cntC: number;        // Number of comments to include
}
```

**Usage**
```typescript
const response = await api.rpc.getuserstatistic({
    addresses: ["address1", "address2"],
    height: 1000,
    depthR: 10,
    depthC: 10,
    cntC: 5
} satisfies GetUserStatisticParams);
```

### GetAddressId
Retrieves the unique identifier associated with an address.

**Parameters**
```typescript
interface GetAddressIdParams {
    address: string;  // Blockchain address
    id: number;      // Unique identifier
}
```

**Usage**
```typescript
const response = await api.rpc.getaddressid({
    address: "blockchain_address",
    id: 12345
} satisfies GetAddressIdParams);
```

## Content & Social Features

### GetContent

Retrieves specific content using provided hashes.

**Parameters**
```typescript
interface GetContentParams {
    hashes: string[];    // Array of content hashes to retrieve
    address: string;     // User's blockchain address
    last: boolean;       // Whether to get only the latest content
}
```

**Usage**
```typescript
const response = await api.rpc.getcontent({
    hashes: ["hash1", "hash2"],
    address: "user_address",
    last: true
} satisfies GetContentParams);
```

### GetContents
Retrieves all content for a specific address.

**Parameters**
```typescript
interface GetContentsParams {
    address: string;    // User's blockchain address
}
```

**Usage**
```typescript
const response = await api.rpc.getcontents({
    address: "user_address"
} satisfies GetContentsParams);
```

### GetComments
Retrieves comments for a specific post.

**Parameters**
```typescript
interface GetCommentsParams {
    postid: number;           // ID of the post
    parentid?: number;        // Optional parent comment ID for threaded comments
    address?: string;         // Optional: filter by commenter address
    commend_ids?: string[];   // Optional: specific comment IDs to retrieve
}
```

**Usage**
```typescript
const response = await api.rpc.getcomments({
    postid: 12345,
    parentid: 0,
    address: "commenter_address"
} satisfies GetCommentsParams);
```

### GetLastComments
Retrieves the most recent comments from the network.

**Parameters**
```typescript
interface GetLastCommentsParams {
    count: number;    // Number of recent comments to retrieve
}
```

**Usage**
```typescript
const response = await api.rpc.getlastcomments({
    count: 10
} satisfies GetLastCommentsParams);
```

### GetAccountContents

Retrieves all content associated with an account.

**Parameters**
```typescript
interface GetAccountContentsParams {
    address: string;     // Account's blockchain address
    orderby: string;     // Field to order results by
    orderdesc: boolean;  // Order direction
    offset: number;      // Pagination offset
    limit: number;       // Results per page
}
```

**Usage**
```typescript
const response = await api.rpc.getaccountcontents({
    address: "user_address",
    orderby: "date",
    orderdesc: true,
    offset: 0,
    limit: 20
} satisfies GetAccountContentsParams);
```

### GetAccountComments
Retrieves all comments made by an account.

**Parameters**
```typescript
interface GetAccountCommentsParams {
    address: string;     // Account's blockchain address
    orderby: string;     // Field to order results by
    orderdesc: boolean;  // Order direction
    offset: number;      // Pagination offset
    limit: number;       // Results per page
}
```

**Usage**
```typescript
const response = await api.rpc.getaccountcomments({
    address: "user_address",
    orderby: "date",
    orderdesc: true,
    offset: 0,
    limit: 20
} satisfies GetAccountCommentsParams);
```

### GetAccountFollowers
Retrieves list of account followers.

**Parameters**
```typescript
interface GetUserSubscribesParams {
    address: string;     // Account's blockchain address
    orderby: string;     // Field to order results by
    orderdesc: boolean;  // Order direction
    offset: number;      // Pagination offset
    limit: number;       // Results per page
}
```

**Usage**
```typescript
const response = await api.rpc.getaccountfollowers({
    address: "user_address",
    orderby: "date",
    orderdesc: true,
    offset: 0,
    limit: 20
} satisfies GetUserSubscribesParams);
```

### GetAccountFollowings
Retrieves list of accounts being followed.

**Parameters**
```typescript
interface GetUserSubscribesParams {
    address: string;     // Account's blockchain address
    orderby: string;     // Field to order results by
    orderdesc: boolean;  // Order direction
    offset: number;      // Pagination offset
    limit: number;       // Results per page
}
```

**Usage**
```typescript
const response = await api.rpc.getaccountfollowings({
    address: "user_address",
    orderby: "date",
    orderdesc: true,
    offset: 0,
    limit: 20
} satisfies GetUserSubscribesParams);
```

## Scoring Features

### GetAddressScores
Retrieves scores associated with an address.

**Parameters**
```typescript
interface GetAddressScoresParams {
    address: string;      // User's blockchain address
    postHashes: string[]; // Array of post hashes to get scores for
}
```

**Usage**
```typescript
const response = await api.rpc.getaddressscores({
    address: "user_address",
    postHashes: ["hash1", "hash2"]
} satisfies GetAddressScoresParams);
```

## Blockchain Operations

### GetBlock
Retrieves detailed information about a specific block.

**Parameters**
```typescript
interface GetCompactBlockParams {
    blockhash: string;    // Hash of the block to retrieve
    blocknumber: number;  // Block number to retrieve
}
```

**Usage**
```typescript
const response = await api.rpc.getblock({
    blockhash: "block_hash_string",
    blocknumber: 12345
} satisfies GetCompactBlockParams);
```

### GetBlockCount
Retrieves the current block count in the network.

**Parameters**
```typescript
interface GetUserSubscribesParams {
    address: string;     // Required for authentication
    orderby: string;     // Ordering field
    orderdesc: boolean;  // Order direction
    offset: number;      // Pagination offset
    limit: number;       // Results per page
}
```

**Usage**
```typescript
const response = await api.rpc.getblockcount({
    address: "user_address",
    orderby: "height",
    orderdesc: true,
    offset: 0,
    limit: 1
} satisfies GetUserSubscribesParams);
```

### GetBlockHash
Retrieves the block hash for a given block number.

**Parameters**
```typescript
interface GetCompactBlockParams {
    blockhash: string;    // Previous block hash
    blocknumber: number;  // Block number to get hash for
}
```

**Usage**
```typescript
const response = await api.rpc.getblockhash({
    blockhash: "previous_block_hash",
    blocknumber: 12345
} satisfies GetCompactBlockParams);
```

### GetBlockTemplate
Retrieves a block template for mining purposes.

**Parameters**
```typescript
interface GetCompactBlockParams {
    blockhash: string;    // Previous block hash
    blocknumber: number;  // Block number for template
}
```

**Usage**
```typescript
const response = await api.rpc.getblocktemplate({
    blockhash: "previous_block_hash",
    blocknumber: 12345
} satisfies GetCompactBlockParams);
```

### GetBlockchainInfo
Retrieves detailed information about the state of the blockchain.

**Parameters**
```typescript
interface GetPosDifficultyParams {
    height?: number;  // Optional: specific block height to query
}
```

**Usage**
```typescript
const response = await api.rpc.getblockchaininfo({
    height: 12345
} satisfies GetPosDifficultyParams);
```

## Transaction Operations

### GetTransaction
Retrieves detailed information about a specific transaction.

**Parameters**
```typescript
interface GetCompactBlockParams {
    blockhash: string;    // Block hash containing the transaction
    blocknumber: number;  // Block number containing the transaction
}
```

**Usage**
```typescript
const response = await api.rpc.gettransaction({
    blockhash: "block_hash",
    blocknumber: 12345
} satisfies GetCompactBlockParams);
```

### GetRawTransaction

Retrieves raw transaction data.

**Parameters**
```typescript
interface GetCompactBlockParams {
    blockhash: string;    // Block hash containing the transaction
    blocknumber: number;  // Block number containing the transaction
}
```

**Usage**
```typescript
const response = await api.rpc.getrawtransaction({
    blockhash: "block_hash",
    blocknumber: 12345
} satisfies GetCompactBlockParams);
```

### AddTransaction
Adds a new transaction to the network.

**Parameters**
```typescript
interface AddTransactionParams {
    param1: string;           // Transaction parameter
    param2: Record<string, any>;  // Additional transaction details
}
```

**Usage**
```typescript
const response = await api.rpc.addtransaction({
    param1: "transaction_data",
    param2: {
        // Transaction details
        type: "transfer",
        amount: 100
    }
} satisfies AddTransactionParams);
```

### GenerateTransaction
Generates a new transaction based on provided details.

**Parameters**
```typescript
interface GenerateTransactionParams {
    address: string;          // Sender's address
    privkeys: string[];      // Array of private keys
    outcount: number;        // Number of outputs
    type: string;            // Transaction type
    payload: Record<string, any>;  // Transaction payload
    fee: number;             // Transaction fee
    contentaddress: number;  // Content address
    confirmations: number;   // Required confirmations
    locktime: number;        // Transaction locktime
}
```

**Usage**
```typescript
const response = await api.rpc.generatetransaction({
    address: "sender_address",
    privkeys: ["key1", "key2"],
    outcount: 1,
    type: "transfer",
    payload: { /* transaction details */ },
    fee: 0.001,
    contentaddress: 0,
    confirmations: 6,
    locktime: 0
} satisfies GenerateTransactionParams);
```

## Network Operations

### GetNodeInfo
Retrieves information about the current node.

**Parameters**
```typescript
interface GetNodeInfoParams {
    // No parameters required
}
```

**Usage**
```typescript
const response = await api.rpc.getnodeinfo();
```

### GetPeerInfo
Retrieves information about connected peers in the network.

**Parameters**
```typescript
interface GetPeerInfoParams {
    // No parameters required
}
```

**Usage**
```typescript
const response = await api.rpc.getpeerinfo();
```

### GetNetworkInfo
Retrieves network status and node information.

**Parameters**
```typescript
interface GetUserSubscribesParams {
    address: string;     // Required for authentication
    orderby: string;     // Ordering field
    orderdesc: boolean;  // Order direction
    offset: number;      // Pagination offset
    limit: number;       // Results per page
}
```

**Usage**
```typescript
const response = await api.rpc.getnetworkinfo({
    address: "user_address",
    orderby: "status",
    orderdesc: true,
    offset: 0,
    limit: 20
} satisfies GetUserSubscribesParams);
```

### GetNetworkHashrate
Retrieves the current network hash rate.

**Parameters**
```typescript
interface GetUserSubscribesParams {
    address: string;     // Required for authentication
    orderby: string;     // Ordering field
    orderdesc: boolean;  // Order direction
    offset: number;      // Pagination offset
    limit: number;       // Results per page
}
```

**Usage**
```typescript
const response = await api.rpc.getnetworkhashrate({
    address: "user_address",
    orderby: "hashrate",
    orderdesc: true,
    offset: 0,
    limit: 1
} satisfies GetUserSubscribesParams);
```

## Jury System

### GetJury
Retrieves information about a specific jury.

**Parameters**
```typescript
interface GetJuryParams {
    jury: string;  // Jury identifier
}
```

**Usage**
```typescript
const response = await api.rpc.getjury({
    jury: "jury_id"
} satisfies GetJuryParams);
```

### GetAllJury
Retrieves information about all juries in the network.

**Parameters**
```typescript
interface GetAllJuryParams {
    // No parameters required
}
```

**Usage**
```typescript
const response = await api.rpc.getalljury();
```

### GetJuryAssigned
Retrieves jury assignments for a specific user.

**Parameters**
```typescript
interface GetJuryAssignedParams {
    address: string;     // Moderator's address
    verdict: boolean;    // Verdict filter
    topHeight: number;   // Maximum block height
    pageStart: number;   // Pagination start
    pageSize: number;    // Items per page
    orderBy: string;     // Sort field
    desc: boolean;       // Sort direction
}
```

**Usage**
```typescript
const response = await api.rpc.getjuryassigned({
    address: "moderator_address",
    verdict: true,
    topHeight: 12345,
    pageStart: 0,
    pageSize: 10,
    orderBy: "date",
    desc: true
} satisfies GetJuryAssignedParams);
```

### GetJuryModerators
Retrieves list of moderators for a specific jury.

**Parameters**
```typescript
interface GetJuryModeratorsParams {
    jury: string;  // Jury identifier
}
```

**Usage**
```typescript
const response = await api.rpc.getjurymoderators({
    jury: "jury_id"
} satisfies GetJuryModeratorsParams);
```

### GetJuryVotes
Retrieves voting information for a specific jury.

**Parameters**
```typescript
interface GetJuryParams {
    jury: string;  // Jury identifier
}
```

**Usage**
```typescript
const response = await api.rpc.getjuryvotes({
    jury: "jury_id"
} satisfies GetJuryParams);
```

## Search & Discovery

### Search

Searches for content within the network.

**Parameters**
```typescript
interface SearchParams {
    keyword: string;      // Search keyword
    type: string;        // Content type to search
    topBlock?: number;   // Optional: maximum block height
    pageStart?: number;  // Optional: pagination start
    pageSize?: number;   // Optional: items per page
    address?: string;    // Optional: address filter
}
```

**Usage**
```typescript
const response = await api.rpc.search({
    keyword: "search_term",
    type: "content",
    pageSize: 20,
    pageStart: 0
} satisfies SearchParams);
```

### SearchUsers

Searches for users based on criteria.

**Parameters**
```typescript
interface SearchUsersParams {
    keyword: string;      // Search keyword
    fieldtype: string;    // Field to search in
    orderbyrank: number;  // Ranking order
}
```

**Usage**
```typescript
const response = await api.rpc.searchusers({
    keyword: "username",
    fieldtype: "name",
    orderbyrank: 1
} satisfies SearchUsersParams);
```

### SearchLinks
Searches for content based on links.

**Parameters**
```typescript
interface SearchLinksParams {
    links: string;         // Links to search for
    contenttypes: string[];  // Content types to include
    height: number;        // Block height limit
    count: number;         // Number of results
}
```

**Usage**
```typescript
const response = await api.rpc.searchlinks({
    links: "link_pattern",
    contenttypes: ["post", "comment"],
    height: 12345,
    count: 20
} satisfies SearchLinksParams);
```
