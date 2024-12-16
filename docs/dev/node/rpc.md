# RPC

## Mini Applications

### `getapps`

Retrieving the list of mini applications.

#### Параметры запроса
```json
{
    "page": number,     // номер страницы (опционально)
    "limit": number,    // количество записей на странице (опционально)
    "tags": string[],   // массив тегов для фильтрации (опционально)
    "search": string,   // строка поиска (опционально)
    "address": string,  // адрес владельца (опционально)
    "id": string       // идентификатор приложения (опционально)
}
```

#### Пример вызова
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

#### Результат
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

### `getappscores`

Получение списка оценок для конкретного приложения.

#### Параметры запроса
```json
{
    "app": string,     // хеш транзакции приложения (обязательно)
    "page": number,    // номер страницы (опционально)
    "limit": number    // количество записей на странице (опционально)
}
```

#### Пример вызова
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

#### Результат
```json
TODO
```

### `getappcomments`

Получение списка комментариев для конкретного приложения.

#### Параметры запроса
```json
{
    "app": string,     // хеш транзакции приложения (обязательно)
    "page": number,    // номер страницы (опционально)
    "limit": number    // количество записей на странице (опционально)
}
```

#### Пример вызова
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

#### Результат
```json
TODO
```


Вот преобразованный текст с разметкой Markdown после заголовка Barteron:

## Barteron

### Transactions Specification

#### Barteron Account

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

#### Barteron Offer Transaction Specification

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

### Barteron APIs

#### Get accounts transactions
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

> **Примечание**: `rating` это целое число, которое представляет float * 10, поэтому 35 означает, что рейтинг пользователя 3.5


#### Get address offers information
````json
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
````

#### Get offers information
````json
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
````

#### Get offers feed
````json
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
````

#### Get offers groups
````json
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

// Result for resuest:
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
````

#### Get potencial offer deals
`````json
> /rpc/getbarterondeals <REQUEST_JSON>

// REQUEST_JSON
{
    "addresses": ["ADDRESS1", "ADDRESS2"], // Filter potencial offers with these account addresses
    "excludeAddresses": ["ADDRESS3", "ADDRESS4"], // Filter potencial offers by excluding offers with these addresses
    "location": "v3g9s%", // An SQLite3 language expression to be used with `LIKE` operator when comparing locations
    "priceMax": 1000, // Maximal offer price
    "priceMin": 10, // Minimal offer price
    "search": "%some text%", // Fulltext search in offer's title and description
    "mytags": [1,3,4], // Filter potencial offers by the tags they are exchangable for
    "theirTags": [5,6,7], // Filter potencial offers by their tags
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
`````

> **Примечание**: `location` и `search` являются регулярными выражениями в следующем формате: Символ процента ("%") соответствует любой последовательности из нуля или более символов в строке. Подчеркивание ("_") соответствует любому одиночному символу в строке. Любой другой символ соответствует самому себе или его эквиваленту в нижнем/верхнем регистре (сопоставление без учета регистра)

#### Get potencial complex deals (3-side search)
`````json
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
`````

> **Примечание**: `location` и `excludeAddresses` используются для фильтрации как целевых, так и промежуточных предложений

#### Get offer details
``````json
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
``````

> **Примечание**: `account_tx_with_additional_info` имеет тот же формат, что и в запросе getbarteronaccounts

> **Примечание**: Если `includeSmth` не указан в запросе, то `smth` вообще не будет в ответе json.

> **Примечание**: `score_tx`, `comment_tx`, `comment_score_tx` и `account_tx_with_additional_info` - это просто необработанные транзакции, и связи между ними и предложениями должны быть построены на стороне клиента.
