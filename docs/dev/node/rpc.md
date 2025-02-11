# RPC

## Mini Applications

### TX Specification

**OP_RETURN code**
```
6d696e69617070 ()
```

**Required payload elements:**
```json
{
  "s1": "address",
  "s2": "root tx hash",
  "p": {
    "s1": {
      "n": "App Name", // Indexed for fulltext search
      "d": "App Description", // Indexed for fulltext search
      "s": "app.com", // Indexed for fulltext search
      "t": [ "tag1", "tag2", "tag3" ], // Indexed for filtering
      ...
    },
    "s2": "id"
  }
}
```

### `/getapps`

Retrieving the list of mini applications.

**Request Parameters**
```json
{
    "page": number,     // page number (optional)
    "limit": number,    // number of records per page (optional)
    "tags": string[],   // array of tags for filtering (optional)
    "search": string,   // search string (optional)
    "address": string,  // owner's address (optional)
    "id": string       // application identifier (optional)
}
```

**Example Call**
```sh
curl --location 'http://127.0.0.1:38081/rpc/public/' \
    --header 'Content-Type: application/json' \
    --data '{
        "method": "getapps",
        "params": [{
            "page": 0,
            "limit": 10
            "search": "game"
        }]
    }'
```

**Result**
```json
[
    {
        "hash": "a99f38f8ae48ffa3cd4c1388a9ffe0eb552c6ea5310827818ce16c13bf08395a",
        "type": 221,
        "height": 3351713,
        "blockHash": "759355491592f8ae4bb24a4324a565b0a4b8e8ed1c3b11f04d503bdb55300a1a",
        "time": 1732016427,
        "s1": "TG69Jioc81PiwMAJtRanfZqUmRY4TUG7nt",
        "s2": "cdfa1da120bce39679c79ddb166951aa8a09cbf1bfc36475195b6cecdd7d3f59",
        "p": {
            "s1": "{\"n\":\"First app\",\"d\":\"First app description\",\"t\":[\"tag1\",\"tag2\"],\"s\":\"first.app\"}",
            "s2": "firstapp"
        }
    }
]
```

### `/getappscores`

Getting the list of scores for a specific application.

**Request Parameters**
```json
{
    "app": string,     // application transaction hash (required)
    "page": number,    // page number (optional)
    "limit": number    // number of records per page (optional)
}
```

**Example Call**
```sh
curl --location 'http://127.0.0.1:38081/rpc/public/' \
    --header 'Content-Type: application/json' \
    --data '{
        "method": "getappscores",
        "params": [{
            "app": "a99f38f8ae48ffa3cd4c1388a9ffe0eb552c6ea5310827818ce16c13bf08395a",
            "page": 0,
            "limit": 10
        }]
    }'
```


**Result**
```json
TODO
```

### `/getappcomments`

Getting a list of comments for a specific application.

**Request Parameters**
```json
{
    "app": string,     // application transaction hash (required)
    "page": number,    // page number (optional)
    "limit": number    // number of records per page (optional)
}
```

**Call Example**
```sh
curl --location 'http://127.0.0.1:38081/rpc/public/' \
    --header 'Content-Type: application/json' \
    --data '{
        "method": "getappcomments",
        "params": [{
            "app": "a99f38f8ae48ffa3cd4c1388a9ffe0eb552c6ea5310827818ce16c13bf08395a",
            "page": 0,
            "limit": 10
        }]
    }'
```

**Result**
```json
TODO
```

## Barteron

### TX Specification (Account)

**OP_RETURN code**
```
6272746163636f756e74
```

**Required payload elements:**
```json
{
  "p": {
    "s4": {
      // Allowed fixed account tags for barter
      "a": [
        <TAG>,
        <TAG>,
        ...
      ],
      "g": <GEOHASH>,
      "r": <RADIUS>
    }
  }
}
```

### TX Specification (Offer)

**OP_RETURN code**
```
6272746f66666572
```

**Required payload elements:**
```json
{
  "p": {
    "s1": "language",
    "s2": "caption",
    "s3": "description",
    "s4": {
      // General offer tag
      "t": <TAG>,
      // Allowed offer tags for barter
      "a": [
        <TAG>,
        <TAG>,
        ...
      ],
      "c": <CONDITION>
    },
    "s5": [
      "image_url_1",
      "image_url_2"
    ],
    "s6": "location geohash",
    "s7": <not_used>
    "i1": <price>
  }
}
```

### `/getbarteronaccounts`

Get accounts transactions

```json
> /rpc/getbarteronaccounts [ <address1>, <address2>, ... ]
{
  "result": "success",
    "data": [
      {
        "hash": "d574b6389d91c42b37cd8bc5ec257ceb803986ad38ebb83cf7fdabee34fe9af7",
        "type": 104,
        "height": 1063,
        "blockHash": "031e4da9305a5d9e8269155a9ad2586c4945bf560c89c2ee584663687a0fad4f",
        "time": 1690098322,
        "s1": "muA1gPR5JjsxZbeCj7HB2wrx4h3Ky8iHY3",
        "p": {
            "s4": "{\"t\": <TAG>, \"a\": [1, 2, 3, 4, 5], \"c\": <CONDITION>}"
        },
        "additional": {
            "regdate": 1690012312,
            "rating": 35
        }
      }
  ]
}
```

> **Note**: `rating` is an integer representing float * 10, so 35 means the user's rating is 3.5


### `/getbarteronoffersbyaddress`

Get address offers information

```json
> /rpc/getbarteronoffersbyaddress <address>
{
  "result": "success",
    "data": [
      {
        "hash": "2e3d9b2c5ee988c2462d4a9a35be6986e8124092b62adf651d0b7d7cbcd11697",
        "type": 211,
        "height": 1068,
        "blockHash": "d6893b30850b3fad44e0da7296d14e099fe6c8f3a54e26437d9a93b47bf403b4",
        "time": 1690198349,
        "s1": "n1GN91byHmHGvvKTsDp15dcQzF5cekVCPy",
        "s2": "2e3d9b2c5ee988c2462d4a9a35be6986e8124092b62adf651d0b7d7cbcd11697",
        "p": {
          "s4": "{\"t\": <TAG>, \"a\": [1, 2, 3, 4, 5], \"c\": <CONDITION>}"
        }
      }
    ]
}
```

### `/getbarteronoffersbyroottxhashes`

Get offers information

```json
> /rpc/getbarteronoffersbyroottxhashes [ <txhash1>, <txhash2>, ... ]
{
  "result": "success",
    "data": [
      {
        "hash": "2e3d9b2c5ee988c2462d4a9a35be6986e8124092b62adf651d0b7d7cbcd11697",
        "type": 211,
        "height": 1068,
        "blockHash": "d6893b30850b3fad44e0da7296d14e099fe6c8f3a54e26437d9a93b47bf403b4",
        "time": 1690198349,
        "s1": "n1GN91byHmHGvvKTsDp15dcQzF5cekVCPy",
        "s2": "2e3d9b2c5ee988c2462d4a9a35be6986e8124092b62adf651d0b7d7cbcd11697",
        "p": {
          "s4": "{\"t\": <TAG>, \"a\": [1, 2, 3, 4, 5], \"c\": <CONDITION>}"
        }
      }
    ]
}
```

### `/getbarteronfeed`

Get offers feed

```json
> /rpc/getbarteronfeed <REQUEST_JSON>

// REQUEST_JSON
{
    "lang": "en", // en, ru, etc
    "tags": [1,2,3], // Tags for filter offers
    "location": "ABC", // location like 'ABC%'
    "priceMax": 1000, // 0 for unuse
    "priceMin": 0, // 0 for unuse
    "search": "String for fulltext search in Caption and Description",
    // Pagination
    "topHeight": 100, // Top height for start pagination
    "pageStart": 0, // Number of first page
    "pageSize": 10, // Count of offers in page
    "orderBy": "height", // height | location | price
    "orderDesc": true, // true | false
}

// Result
{
  "result": "success",
    "data": [
      { offer_instance },
      { offer_instance },
      ...
    ]
}
```

### `/getbarterongroups`

Get offers groups

```json
> /rpc/getbarterongroups <REQUEST_JSON>

// REQUEST_JSON
{
    "lang": "en", // en, ru, etc
    "tags": [1,2,3], // Tags for filter offers
    "location": "ABC", // location like 'ABC%'
    "locationGroup": 1, // location "radius" for grouping offers
    "priceMax": 1000, // 0 for unuse
    "priceMin": 0, // 0 for unuse
    "search": "String for fulltext search in Caption and Description",
}

// Result for request:
// location: [ "ucfv" ]
// locationGroup: 7
{
  "result": "success",
    "data": [
      {
        "location": "ucfv058",
        "count": 3
      },
      {
        "location": "ucfv059",
        "count": 12
      },
      ...
    ]
}
```

### `/getbarterondeals` 

Get potential offer deals
```json
> /rpc/getbarterondeals <REQUEST_JSON>

// REQUEST_JSON
{
    "addresses": ["ADDRESS1", "ADDRESS2"], // Filter potential offers with these account addresses
    "excludeAddresses": ["ADDRESS3", "ADDRESS4"], // Filter potential offers by excluding offers with these addresses
    "location": "v3g9s%", // An SQLite3 language expression to be used with `LIKE` operator when comparing locations
    "priceMax": 1000, // Maximal offer price
    "priceMin": 10, // Minimal offer price
    "search": "%some text%", // Fulltext search in offer's title and description
    "mytags": [1,3,4], // Filter potential offers by the tags they are exchangeable for
    "theirTags": [5,6,7], // Filter potential offers by their tags
    // Pagination
    "topHeight": 100, // Top height for start pagination
    "pageStart": 0, // Number of first page
    "pageSize": 10, // Count of offers in page
    "orderBy": "height", // height | location | price
    "orderDesc": true, // true | false
}

// Result
{
  "result": "success",
    "data": [
      { offer_instance },
      { offer_instance },
      ...
    ]
}
```

> **Note**: `location` and `search` are regular expressions in the following format: The percent sign ("%") matches any sequence of zero or more characters in the string. The underscore ("_") matches any single character in the string. Any other character matches itself or its equivalent in lower/upper case (case-insensitive matching)

### `/getbarteroncomplexdeals`

Get potential complex deals (3-side search)

```json
> /rpc/getbarteroncomplexdeals <REQUEST_JSON>

// REQUEST_JSON
{
    "myTag": 10,
    "theirTags": [1,2,3],
    "location": "ABC%",
    "excludeAddresses": ["ADDRESS1", "ADDRESS2"]
}

// Result
{
  "result": "success",
  "data": [
    {
      "target": { offer_instance },
      "intermediates": [
        { offer_instance },
        { offer_instance },
        ...
      ]
    },
    {
      "target": ...
    },
    ...
  ]
}
```

> **Note**: `location` and `excludeAddresses` are used to filter both target and intermediate offers

Here's the complete Markdown snippet:

```markdown
### `/getbarteronoffersdetails`

Get offer details

```json
> /rpc/getbarteronoffersdetails <REQUEST_JSON>

// REQUEST_JSON
{
  "offerIds": ["offerId1", "offerId2"], // Offer ids to get details for
  "includeAccounts": true,
  "includeScores": true,
  "includeComments": true,
  "includeCommentScores": true
}

// Result
{
  "result": "success",
    "data": {
      "offerScores": [
        { score_tx },
        { score_tx },
        ...
      ],
      "comments": [
        { comment_tx },
        { comment_tx },
        ...
      ],
      "commentScores": [
        { comment_score_tx },
        { comment_score_tx },
        ...
      ],
      "accounts": [
        { account_tx_with_additional_info },
        { account_tx_with_additional_info },
        ...
      ]
    }
}
```

> **Note**: `account_tx_with_additional_info` has the same format as in the getbarteronaccounts request

> **Note**: If `includeSmth` is not specified in the request, then `smth` will not be in the json response at all.

> **Note**: `score_tx`, `comment_tx`, `comment_score_tx`, and `account_tx_with_additional_info` are just raw transactions, and the relationships between them and offers should be built on the client side.


## Moderation System

### TX Specification (Flag)

Reports allow users to flag content as objectionable (post or comment and author). Reports can be sent by users with the "Shark" badge (see API).

The numeric value `REASON` is used to distinguish between complaints:

1. Pornography
2. Pedophilia - any even remotely suggestive images/videos/texts with children or adolescents
3. Direct threat of violence
4. Illegal narcotics - any positive or promotion of illegal narcotics
5. Copyrighted content (with clear proof from the owner)

**OP_RETURN code**
```
6d6f64466c6167
```

**Payload structure**
```json
{
    "s2": "<CONTENT_TX_HASH>",
    "s3": "<ADDRESS_HASH>",
    "i1": "<REASON>"
}
```

### TX Specification (Vote)

The moderator's vote, which has two values `0|1` indicating whether the moderator agrees with the complaints or not. Any vote may initiate a jury verdict.

- The verdict is positive if the vote satisfies the condition that it is the Nth positive vote `[main:8, test:3, reg:2]`.
- A negative verdict is issued along with the first negative vote of any moderator.
- After a verdict (positive or negative) is passed, all votes are ignored.
- A jury without a verdict is indefinite.

**OP_RETURN code**
```
6d6f64566f7465
```

**Payload structure**
```json
{
    "s2": "<JURY_ID>",
    "i1": "<VERDICT>"
}
```

`JURY_ID` - hash of the flag transaction that initiated the jury
`VERDICT` - numeric value `0|1`

### Jury

The jury is not a transaction, it is a record in the database and contains the following fields:

- `juryid` - Hash of the Flag that initiates the creation of the jury.
- `accountid` - Address of the account, the author of the content.
- `reason` - Numerical code of the reason for the complaint.

Together with the jury's entry, the moderators are selected:

- To filter the list of moderators, the transaction hash of the `FLAG_HASH` flag that initiated the creation of the jury is used.
- The hash of the moderator account registration transaction `ACCOUNT_HASH` is used as moderator sorting.
- To decide the jury's question, TM accounts `[main:80, test:6 reg:4]` are selected
- For an even distribution of moderators, accounts are selected according to the following conditions:
  * Selected TM/2 accounts where `ACCOUNT_HASH < FLAG_HASH`
  * Selected TM/2 accounts where `ACCOUNT_HASH > FLAG_HASH`

Any flag can initiate the creation of a "jury". If the jury is initiated, all subsequent flags are ignored. To create a jury, the following rules are taken into account:

- The account in question is not in an active ban
- Number of flags with the same `REASON`, `CONTENT_TX_HASH` and `ADDRESS_HASH` must be:
  a. First category (`<3 likers`) - `5 flags`
  b. Second category (`<20 likers`) - `10 flags`
  c. Third category (`<40 liker`) - `15 flags`
  d. Fourth category (`40+ liker`) - `20 flags`
- Search depth for similar flags `FLAG_HEIGHT > (CURRENT_HEIGHT - 43200)`

Number of moderator votes required to close the jury:

- For a positive verdict:
  a. First category (`<3 likers`) - `1 vote`
  b. Second category (`<20 likers`) - `2 votes`
  c. Third category (`<40 liker`) - `4 votes`
  d. Fourth category (`40+ liker`) - `8 votes`
- For a negative verdict, 1 vote against from any moderator is sufficient

### Ban Account

An account ban, like a jury, is not a transaction. It is a record in the database and contains the following fields:

- Link to the voice initiating the blocking.
- Link to the account, the author of the content.
- Height of the end of blocking. The blocking period is determined based on the rules:
  * First lock - 43200 blocks
  * Second lock - 129600 blocks
  * Third lock - 51840000 blocks

An account blocked by a node is not allowed to create Social transactions, but can create monetary transactions without restrictions.

Other accounts have the right to perform actions with a blocked account (put ratings, comments, etc.).


### `/getuserstate`

The `getuserstate` method returns, among other things, a `badges` object with a list of "badges" available to the user:

```json
> /rpc/getuserstate <address>

{
    "result": "success",
    "data": {
        ...
        "badges": [
            "shark",
            "moderator",
            "developer"
        ],
        ...
    }
}
```

### `/getalljury`

List of all juries

```json
> /rpc/getalljury <REQUEST_JSON>

// REQUEST_JSON
{
    "topHeight": number,  // Starting height for pagination
    "pageStart": number,  // Starting page number
    "pageSize": number,   // Page size
    "orderBy": string,    // Sort field (Height)
    "desc": boolean      // Sort direction (true for descending)
}

// Result
{
    "result": "success",
    "data": [
      {
        "id": "HASH",
        "address": "Address of profile",
        "reason": "REASON numeric value",
        "verdict": "Verdict - 0 or 1"
      },
      ...
    ]
}
```


### `/getjuryassigned`

List of assigned jury for the moderator

```json
> /rpc/getjuryassigned <address> <verdict - 0|1> <topHeight> <pageStart> <pageSize> <orderBy> <desc>

{
  "result": "success",
  "data": [
    {
      "hash": "9f6cb0d0cd57d6227f38d70840eae89971bf44c74e4082914f9fd641dc573e52",
      "txid": "e32rr0d0cd57d6227f38d70840eae89971bf44c74e4082914f9fd641dc573e52",
      "id": 32,
      "address": "mzaEy5FGymhhk8bZd2NbeZiecW8ZLtVceb",
      ...
      "versions": [
          {
              "h": 1054,
              "hs": "e32rr0d0cd57d6227f38d70840eae89971bf44c74e4082914f9fd641dc573e52"
          }
      ],
      "jury": {
        "juryid": "5435230506fcb1951fd0e7384fb7cad5659a154856dd10258a8d77f243507f07",
        "height": 1064,
        "reason": 1
      }
    },
    ...
  ]
}
```

Here `versions` is a list of transaction hashes of the edited versions of the content.

### `/getjurymoderators`

List of moderators assigned in the specified jury

```json
> /rpc/getjurymoderators <juryid>

{
    "result": "success",
    "data": [
      "Address of profile",
      "Address of profile",
      ...
    ]
}
```

### `/getbans`

List of bans for specific address

```json
> /rpc/getbans <address>

{
  "result": "success",
    "data": [
      {
        "juryId": "HASH",
        "contentId": "HASH",
        "reason": 1,
        "ending": 2500000
      },
      {
        "juryId": "HASH",
        "contentId": "HASH",
        "reason": 2,
        "ending": 2600000
      },
      ...
    ]
}
```

### `/getcontent`

Get specific version of content

```json
> /rpc/getcontent ["HASH", "HASH", ...] <address> <LAST - 0|1>

{
  "result": "success",
    "data": [
      ...
    ]
}
```

### WS Notifies

#### Notify about new jury assigned to moderator

```json
{
    "mesType": "jurymoderate",
    "addr": "TG69Jioc81PiwMAJtRanfZqUmRY4TUG7nt",
    "msg": "event", 
    "txid": "0080c9a54b94b7e0602486e41c18a8f54bf3ed4b29508dbef58c20021fd5852d",
    "time": 1706521030,
    "juryHash": "aeb2e47fb6dec5ebcb91299627e3f87ab37d60997f8a17c16972a4660e3de696",
    "contentHash": "cb4866f11e1ba2087364600fcd0c316373639e18223da63ddd9b6115e2313088",
    "contentRootHash": "cb4866f11e1ba2087364600fcd0c316373639e18223da63ddd9b6115e2313088",
    "contentType": "200",
    "reason": "2"
}
```

#### Notify about new jury assigned to author of content

```json
{
    "mesType": "juryassigned",
    "addr": "TG69Jioc81PiwMAJtRanfZqUmRY4TUG7nt",
    "msg": "event", 
    "txid": "0080c9a54b94b7e0602486e41c18a8f54bf3ed4b29508dbef58c20021fd5852d",
    "time": 1706521030,
    "juryHash": "aeb2e47fb6dec5ebcb91299627e3f87ab37d60997f8a17c16972a4660e3de696",
    "contentHash": "cb4866f11e1ba2087364600fcd0c316373639e18223da63ddd9b6115e2313088",
    "contentRootHash": "cb4866f11e1ba2087364600fcd0c316373639e18223da63ddd9b6115e2313088",
    "contentType": "200",
    "reason": "2"
}
```

#### Notify about new ban for account

```json
{
  "mesType": "juryverdict",
  "addr": "TLAvSHoNbeECY9S6Z7WBMyDT64WWHLm8d7",
  "msg": "event",
  "txid": "84858578a2ec42069dc4a0eb752c2d16229e52f65f1ccfd6de3bc77899eef71f",
  "time": 1706522294,
  "juryHash": "aeb2e47fb6dec5ebcb91299627e3f87ab37d60997f8a17c16972a4660e3de696",
  "contentHash": "9a3f634be04c6ac190d01ca376711190925b819314c8dfa0753533a87ef87dea",
  "contentRootHash": "9a3f634be04c6ac190d01ca376711190925b819314c8dfa0753533a87ef87dea",
  "contentType": "200",
  "reason": "1"
}
```

## Account

### `getaccountversions`

Getting account version history.

**Request Parameters**
```json
{
    "address": string,     // account address (required)
    "topHeight": number,   // maximum block height (optional, defaults to current chain height)
    "pageStart": number,   // page start (optional, defaults to 0)
    "pageSize": number     // page size (optional, defaults to 10)
}
```

**Example Call**
```sh
curl --location 'http://127.0.0.1:38081/rpc/public/' \
    --header 'Content-Type: application/json' \
    --data '{
        "method": "getaccountversions",
        "params": {
            "address": "PKxgE9KkPLMHHtqGbh5kPWkgKA5UoXQ6Zx",
            "topHeight": 1000000,
            "pageStart": 0,
            "pageSize": 5
        }
    }'
```

**Result**
```json
[
    {
        "first": 1,           // first version flag
        "last": 1,           // last version flag
        "deleted": 0,        // deletion flag
        "height": 123456,    // block height
        "txHash": "abc123...", // transaction hash
        "p": {               // profile parameters
            "s1": "string1", // string parameter 1
            "s2": "string2", // string parameter 2
            "s3": "string3", // string parameter 3
            "s4": "string4", // string parameter 4
            "s5": "string5", // string parameter 5
            "s6": "string6", // string parameter 6
            "s7": "string7", // string parameter 7
            "i1": 123        // numeric parameter 1
        }
    }
]
```

## Transactions

### `getfromtotransactions`

Getting transactions between two addresses.

**Request Parameters**
```json
{
    "from": string,    // sender address (required)
    "to": string,      // recipient address (required) 
    "depth": number    // search depth in blocks (optional, defaults to 43200 - one month)
}
```

**Example Call**
```sh
curl --location 'http://127.0.0.1:38081/rpc/public/' \
    --header 'Content-Type: application/json' \
    --data '{
        "method": "getfromtotransactions",
        "params": {
            "from": "PKxgE9KkPLMHHtqGbh5kPWkgKA5UoXQ6Zx",
            "to": "PKxhF8NkQLNJKtqHbh7kPWkgKA5UoXQ7Zy",
            "depth": 10000
        }
    }'
```

**Result**
```json
[
    {
        "hash": "abc123...",     // transaction hash
        "type": 1,      // transaction type
        "height": 123456,        // block height
        "amount": 1000000,        // transfer amount in satoshi
        "time": 1234567890        // UNIX timestamp
    }
]
```

### `getlastblocks`

Получение информации о последних блоках сети.

**Параметры запроса**
```json
{
    "count": number,      // количество блоков (опционально, по умолчанию 10, максимум 100)
    "last_height": number, // высота последнего блока (опционально, по умолчанию текущая высота цепи)
    "verbosity": boolean  // подробный вывод с информацией о типах транзакций (опционально, по умолчанию false)
}
```

**Пример вызова**
```sh
curl --location 'http://127.0.0.1:38081/rpc/public/' \
    --header 'Content-Type: application/json' \
    --data '{
        "method": "getlastblocks",
        "params": {
            "count": 5,
            "last_height": 123456,
            "verbosity": true
        }
    }'
```