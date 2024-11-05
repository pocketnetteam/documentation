# Mini Apps in Bastyon

## Pocketnet Transaction v2

In the new consensus system, transactions are intended to be used flexibly. This means that fields can be filled by the client in an arbitrary format, except for certain fields that are used to resolve consensus conflicts.

Top-level fields are used to implement consensus rules and will be validated at the node level. Second-level fields (the `p` object, `Payload`) can be filled in freely to implement application functionality.

For implementing non-standard logic, the `Payload` data can be used by the node to index additional tables. Data structure agreements must be described and coordinated with the application code.

### General Transaction Field Structure

```json
{
  "s1": <ADDRESS>, # Required
  "s2": <VARIANT>,
  "s3": <VARIANT>,
  "s4": <VARIANT>,
  "s5": <VARIANT>,
  "i1": <VARIANT>,
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

## Application Transaction

### OP_RETURN Code
```
6d696e69617070
```

### Required Payload Elements
```json
{
  "s1": <ADDRESS>, # Required
  "s2": <ROOT_TX_HASH>, # Required for editing
  "p": {
    "s1": "{\"n\":\"First app\",\"d\":\"First app description\",\"t\":[\"tag1\",\"tag2\"]}",
    "s2": <UNIQUE_APP_ID> # Required
  }
}
```

 `p.s1` is a JSON string with the following fields:
- `n` - Name of the app (Used for indexing the search)
- `d` - Description of the app (Used for indexing the search)
- `t` - Tags of the app (Used for filter by tags)
- ... any other fields

## API

### Get Apps

`/rpc/getapps { <arguments> }`

#### Arguments:
```json
{
  "tags": [1,2,3], // Tags for filter apps
  "search": "String for fulltext search in Name and Description",
  "topHeight": 100, // Top block height for start pagination
  "pageStart": 0, // Number of first page
  "pageSize": 10, // Count of apps in page
  "orderBy": "height", // height | rating
  "orderDesc": true, // true | false
}
```

#### Example Response:
```json
[
  {
    "hash": "a3c5f9ba693a9d399ab4a3c453dd6ee9d12e1a7ceb001d25622da2a45cb1d723",
    "type": 221,
    "height": 1051,
    "blockHash": "f1885784d513141cecdca4cde5154e382f96e19510033853384a6e42191dff49",
    "time": 1720427842,
    "s1": "mppcM1GXMoePyLnFXothKHgjtGPo7dFVhe",
    "s2": "a3c5f9ba693a9d399ab4a3c453dd6ee9d12e1a7ceb001d25622da2a45cb1d723",
    "p": {
      "s1": "{\"n\":\"First app\",\"d\":\"First app description\",\"u\":\"first_app.com\",\"e\":\"first_app@first_app.com\"}",
      "s2": "first_app"
    },
    "ad": {
      "r": 2
    }
  }
]
```

### Get App Scores

`/rpc/getappscores { <arguments> }`

#### Arguments

```json
{
  "app": "a3c5f9ba693a9d399ab4a3c453dd6ee9d12e1a7ceb001d25622da2a45cb1d723", // Application tx (root) hash
  "topHeight": 100, // Top block height for start pagination
  "pageStart": 0, // Number of first page
  "pageSize": 10, // Count of apps in page
  "orderBy": "height",
  "orderDesc": true, // true | false
}
```

#### Example Response

```json
[
  {
    "hash": "c9a0fade16e1386e7a39ea344d0ec1c371860c0b838d344883f36a2ad2f91dcf",
    "type": 300,
    "height": 1053,
    "blockHash": "c0469c4f20d8719bf6d53404d8e58805b7c6945a2bd2dc4839b402e615dd3a1a",
    "time": 1720427842,
    "s1": "mv7NYsv4DgaouV7eTUkmAXz8EP5z9AwF6Q",
    "s2": "a3c5f9ba693a9d399ab4a3c453dd6ee9d12e1a7ceb001d25622da2a45cb1d723", // App tx hash
    "i1": 5
  }
]
```

### Get App Comments

`/rpc/getappcomments { <arguments> }`

#### Arguments

```json
{
  "app": "a3c5f9ba693a9d399ab4a3c453dd6ee9d12e1a7ceb001d25622da2a45cb1d723", // Application tx (root) hash
  "topHeight": 100, // Top block height for start pagination
  "pageStart": 0, // Number of first page
  "pageSize": 10, // Count of apps in page
  "orderBy": "height",
  "orderDesc": true, // true | false
}
```

#### Example Response

```json
[
  {
    "hash": "6dd011619696548051bf266c8170522da8b7becdb87e6edebed4a9cfc9abc9f1",
    "type": 204,
    "height": 1054,
    "blockHash": "a9de4f2b5a1498085049e8e55c3f8e542878b68473db82550a34fb80b44eb311",
    "time": 1720427843,
    "s1": "mv7NYsv4DgaouV7eTUkmAXz8EP5z9AwF6Q",
    "s2": "6dd011619696548051bf266c8170522da8b7becdb87e6edebed4a9cfc9abc9f1", // Comment root tx hash
    "s3": "a3c5f9ba693a9d399ab4a3c453dd6ee9d12e1a7ceb001d25622da2a45cb1d723", // App tx hash
    "p": {
      "s1": "comment message"
    }
  }
]
