# Bastyon Barter App (Barteron)

## Pocketnet Transaction v2

In the new consensus system, transactions are intended to be used flexibly. This means that payload fields can be filled by the client in an arbitrary format, except for certain fields that are used for consensus.

Top-level fields are used to implement consensus rules and will be validated at the node level. Second-level fields (the `p` object, `Payload`) can be filled in freely to implement application functionality.

For implementing non-standard logic, the `Payload` data can be used by the node to index additional tables. Data structure agreements must be described and coordinated with the application code.

Barteron transactions have a transitional form before Transaction v2 and begin to use mechanisms of the new consensus and indexing of additional data.

### General Transaction Field Structure
```json
{
  "s1": <ADDRESS>, # Reserved
  "s2": <VARIANT>, # Reserved
  "s3": <VARIANT>, # Reserved
  "s4": <VARIANT>, # Reserved
  "s5": <VARIANT>, # Reserved
  "i1": <VARIANT>, # Reserved
  "p": {
    "s1": <CUSTOM>,
    "s2": <CUSTOM>,
    "s3": <CUSTOM>,
    "s4": <CUSTOM>,
    "s5": <CUSTOM>,
    "s6": <CUSTOM>,
    "s7": <CUSTOM>
  }
}
```

## Barteron Account

### OP_RETURN code
```
6272746163636f756e74
```

### Required payload elements:
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

## Barteron Offer

### OP_RETURN code
```
6272746f66666572
```

### Required payload elements:
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
    "s7": <not_used>,
    "i1": <price>
  }
}
```

## Barteron APIs

### Get accounts transactions
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

**Note:** `rating` is an integer that represents float * 10, so 35 means that user rating is 3.5 

### Get address offers information
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

### Get offers information
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

### Get offers feed
```json
> /rpc/getbarteronfeed <REQUEST_JSON>
{
  "result": "success",
    "data": [
      { offer_instance },
      { offer_instance },
      ...
    ]
}

<REQUEST_JSON>
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
```

### Get potential offer deals
```json
> /rpc/getbarterondeals <REQUEST_JSON>
{
  "result": "success",
    "data": [
      { offer_instance },
      { offer_instance },
      ...
    ]
}

<REQUEST_JSON>
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
```

**Note:** `location` and `search` are literally regexp in the following format: A percent symbol ("%") matches any sequence of zero or more characters in the string. An underscore ("_") matches any single character in the string. Any other character matches itself or its lower/upper case equivalent (case-insensitive matching)

### Get potential complex deals (3-side search)
```json
> /rpc/getbarteroncomplexdeals <REQUEST_JSON>
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

<REQUEST_JSON>
{
    "myTag": 10,
    "theirTags": [1,2,3],
    "location": "ABC%",
    "excludeAddresses": ["ADDRESS1", "ADDRESS2"]
}
```

**Note:** `location` and `excludeAddresses` are used to filter both target and intermediate offers

<!--
TODO pagination
-->

### Get offer details
```json
> /rpc/getbarteronoffersdetails <REQUEST_JSON>
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

<REQUEST_JSON>
{
  "offerIds": ["offerId1", "offerId2"], // Offer ids to get details for
  "includeAccounts": true,
  "includeScores": true,
  "includeComments": true,
  "includeCommentScores": true
}
```

**Note:** `account_tx_with_additional_info` has the same format as in getbarteronaccounts request

**Note:** If `includeSmth` is not specified in request then there will be no `smth` at all in response json.

**Note:** `score_tx`, `comment_tx`, `comment_score_tx` and `account_tx_with_additional_info` are just
raw transactions and relationships between them and offers should be built on client side.
