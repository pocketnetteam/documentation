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
