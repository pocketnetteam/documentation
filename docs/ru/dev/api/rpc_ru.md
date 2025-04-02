# Прокси RPC

## Приватные методы

TODO - реализовать

## Публичные методы

Этот документ содержит подробное описание всех доступных RPC методов в классе [PocketNetProxy](https://github.com/pocketnetteam/pocketnet-proxy-api).
Каждый метод перечислен вместе с его параметрами, возвращаемыми значениями и примерами использования.


# Справочник по API Bastyon Proxy

## Доступные методы

| Категория | Метод | Описание |
|----------|---------|-------------|
| **Приложения** | [GetApps](#getapps) | Получает список приложений, отфильтрованных по заданным критериям |
| | [GetAppScores](#getappscores) | Получает оценки для списка приложений |
| | [GetAppComments](#getappcomments) | Получает комментарии, связанные с конкретным приложением |
| **Пользователь и аккаунт** | [GetUserProfile](#getuserprofile) | Получает информацию о профиле конкретного пользователя |
| | [GetUserState](#getuserstate) | Получает информацию о состоянии конкретного пользователя |
| | [GetUserAddress](#getuseraddress) | Получает адреса, связанные с конкретным именем пользователя |
| | [GetUserStatistic](#getuserstatistic) | Получает статистику для конкретного пользователя на основе активности |
| | [GetUserSubscribes](#getusersubscribes) | Получает список пользователей, на которых подписан конкретный пользователь |
| | [GetUserSubscribers](#getusersubscribers) | Получает список подписчиков конкретного пользователя |
| | [GetAccountSetting](#getaccountsetting) | Получает информацию о настройках аккаунта для заданного адреса |
| | [GetAddressId](#getaddressid) | Получает уникальный идентификатор (ID), связанный с конкретным адресом |
| | [GetAddressInfo](#getaddressinfo) | Получает подробную информацию о конкретном адресе |
| | [GetAddressRegistration](#getaddressregistration) | Получает статус регистрации для нескольких адресов |
| | [GetBalanceHistory](#getbalancehistory) | Получает историю баланса для списка адресов |
| | [GetAccountEarning](#getaccountearning) | Получает детали заработка конкретного аккаунта |
| | [GetAccountEarningStats](#getaccountearningstats) | Получает подробную статистику заработка аккаунта |
| **Контент и социальное** | [GetContent](#getcontent) | Получает контент на основе предоставленных хешей и адреса |
| | [GetContents](#getcontents) | Получает контент, опубликованный конкретным адресом |
| | [GetComments](#getcomments) | Получает комментарии, связанные с конкретной публикацией |
| | [GetLastComments](#getlastcomments) | Получает самые последние комментарии из сети |
| | [GetAccountContents](#getaccountcontents) | Получает контент, связанный с конкретным аккаунтом |
| | [GetAccountComments](#getaccountcomments) | Получает комментарии, связанные с конкретным аккаунтом |
| | [GetAccountPosts](#getaccountposts) | Получает публикации, связанные с конкретным аккаунтом |
| | [GetAccountFollowers](#getaccountfollowers) | Получает список подписчиков конкретного аккаунта |
| | [GetAccountFollowings](#getaccountfollowings) | Получает список аккаунтов, за которыми следует конкретный пользователь |
| | [GetAccountBlockings](#getaccountblockings) | Получает информацию об аккаунтах, заблокированных конкретным пользователем |
| | [GetAccountBlockers](#getaccountblockers) | Получает информацию об аккаунтах, которые заблокировали конкретного пользователя |
| | [GetBans](#getbans) | Получает статус бана конкретного пользователя |
| | [GetTags](#gettags) | Получает список тегов, используемых в сети |
| **Оценки** | [GetAddressScores](#getaddressscores) | Получает оценки, связанные с конкретным адресом и публикациями |
| | [GetPostScores](#getpostscores) | Получает оценки для конкретной публикации |
| | [GetPageScores](#getpagescores) | Получает оценки для нескольких публикаций и комментариев |
| **Блокчейн** | [GetBlock](#getblock) | Получает подробную информацию о конкретном блоке |
| | [GetBlockCount](#getblockcount) | Получает текущее количество блоков в сети |
| | [GetBlockHash](#getblockhash) | Получает хеш блока для заданного номера блока |
| | [GetBlockTemplate](#getblocktemplate) | Получает шаблон блока для майнинга |
| | [GetBlockTransactions](#getblocktransactions) | Получает транзакции в конкретном блоке |
| | [GetCompactBlock](#getcompactblock) | Получает данные компактного блока |
| | [GetBlockReward](#getblockreward) | Получает информацию о награде за конкретный блок |
| | [GetBlockchainInfo](#getblockchaininfo) | Получает состояние блокчейна |
| | [GetBlockSubsidy](#getblocksubsidy) | Получает информацию о субсидии блока |
| | [GetBestBlockHash](#getbestblockhash) | Получает хеш самого последнего блока |
| | [GetChainTips](#getchaintips) | Получает информацию о вершинах цепочки |
| | [VerifyChain](#verifychain) | Проверяет целостность блокчейна |
| **Транзакции** | [GetTransaction](#gettransaction) | Получает информацию о транзакции |
| | [GetRawTransaction](#getrawtransaction) | Получает сырые данные транзакции |
| | [DecodeRawTransaction](#decoderawtransaction) | Декодирует сырые данные транзакции |
| | [GetAddressTransactions](#getaddresstransactions) | Получает транзакции для адреса |
| | [AddTransaction](#addtransaction) | Добавляет новую транзакцию |
| | [GenerateTransaction](#generatetransaction) | Генерирует новую транзакцию |
| | [TxUnspent](#txunspent) | Получает неизрасходованные выходы транзакций |
| | [GetTxOut](#gettxout) | Получает информацию об UTXO |
| | [GetTxOutProof](#gettxoutproof) | Получает доказательство UTXO |
| | [VerifyTxOutProof](#verifytxoutproof) | Проверяет доказательство UTXO |
| **Сеть и узел** | [GetNodeInfo](#getnodeinfo) | Получает информацию о текущем узле |
| | [GetPeerInfo](#getpeerinfo) | Получает информацию о подключенных пирах |
| | [GetNetworkInfo](#getnetworkinfo) | Получает информацию о состоянии сети и узлах |
| | [GetNetworkHashrate](#getnetworkhashrate) | Получает текущий хешрейт сети |
| | [GetTime](#gettime) | Получает текущее время сети |
| | [GetCoinInfo](#getcoininfo) | Получает общую информацию о монете |
| | [GetMempoolInfo](#getmempoolinfo) | Получает состояние пула памяти |
| | [GetRawMempool](#getrawmempool) | Получает транзакции в пуле памяти |
| | [GetDifficulty](#getdifficulty) | Получает текущую сложность сети |
| **Стейкинг и майнинг** | [GetPosDifficulty](#getposdifficulty) | Получает сложность Proof-of-Stake |
| | [GetNetworkStakeWeight](#getnetworkstakeweight) | Получает текущий вес стейка |
| | [GetStakingStatus](#getstakingstatus) | Получает статус стейкинга |
| | [GetMintingInfo](#getmintinginfo) | Получает информацию о майнинге |
| **Система жюри** | [GetJury](#getjury) | Получает информацию о конкретном жюри |
| | [GetAllJury](#getalljury) | Получает все жюри в сети |
| | [GetJuryAssigned](#getjuryassigned) | Получает назначения жюри |
| | [GetJuryModerators](#getjurymoderators) | Получает модераторов жюри |
| | [GetJuryVotes](#getjuryvotes) | Получает голоса жюри |
| | [GetJuryBalance](#getjurybalance) | Получает баланс жюри |
| | [GetJuryList](#getjurylist) | Получает список жюри |
| | [GetJuryReward](#getjuryreward) | Получает награды жюри |
| | [GetJuryVotesCount](#getjuryvotescount) | Получает количество голосов |
| | [GetModeratorStatistics](#getmoderatorstatistics) | Получает статистику активности модераторов |
| **Поиск и обнаружение** | [Search](#search) | Ищет контент по ключевым словам и типу |
| | [SearchUsers](#searchusers) | Ищет пользователей по критериям |
| | [SearchLinks](#searchlinks) | Ищет контент по ссылкам |
| **Кошелек и валидация** | [GetWalletInfo](#getwalletinfo) | Получает информацию о кошельке |
| | [ValidateAddress](#validateaddress) | Проверяет адрес сети |
| | [CheckStringType](#checkstringtype) | Проверяет тип строки в контексте сети |
| **Системная информация** | [GetMissedInfo](#getmissedinfo) | Получает информацию о пропущенных блоках и транзакциях |

## Категория Приложений

### GetApps
Получает список приложений, отфильтрованных по заданным критериям.

**Параметры**
```typescript
interface GetAppsParams {
    request: string;  // Строка запроса, содержащая критерии фильтрации для приложений
}
```

**Использование**
```typescript
const response = await api.rpc.getapps({
    request: "featured_apps"
} satisfies GetAppsParams);
```

### GetAppScores
Получает информацию об оценках приложений.

**Параметры**
```typescript
interface GetAppScoresParams {
    request: string;  // Строка запроса, указывающая, какие оценки приложений получить
}
```

**Использование**
```typescript
const response = await api.rpc.getappscores({
    request: "app_scores"
} satisfies GetAppScoresParams);
```

### GetAppComments
Получает комментарии, связанные с конкретным приложением.

**Параметры**
```typescript
interface GetAppCommentsParams {
    request: string;  // Строка запроса, указывающая, какие комментарии приложения получить
}
```

**Использование**
```typescript
const response = await api.rpc.getappcomments({
    request: "app_comments"
} satisfies GetAppCommentsParams);
```

## Управление пользователями и аккаунтами

### GetUserProfile
Получает подробную информацию о профиле конкретного пользователя.

**Параметры**
```typescript
interface GetUserProfileParams {
    address: string;    // Блокчейн-адрес пользователя
    shortForm: string;  // Формат ответа ("basic" или "detailed")
}
```

**Использование**
```typescript
const response = await api.rpc.getuserprofile({
    address: "user_blockchain_address",
    shortForm: "basic"
} satisfies GetUserProfileParams);
```

### GetUserState
Получает текущую информацию о состоянии конкретного пользователя.

**Параметры**
```typescript
interface GetUserStateParams {
    address: string;  // Блокчейн-адрес пользователя
}
```

**Использование**
```typescript
const response = await api.rpc.getuserstate({
    address: "user_blockchain_address"
} satisfies GetUserStateParams);
```

### GetUserAddress
Получает блокчейн-адреса, связанные с именем пользователя.

**Параметры**
```typescript
interface GetUserAddressParams {
    user_name: string;  // Имя пользователя для поиска
    count: number;      // Количество адресов для возврата
}
```

**Использование**
```typescript
const response = await api.rpc.getuseraddress({
    user_name: "username",
    count: 1
} satisfies GetUserAddressParams);
```

### GetUserStatistic
Получает статистическую информацию об активности пользователя.

**Параметры**
```typescript
interface GetUserStatisticParams {
    addresses: string[];  // Массив блокчейн-адресов
    height: number;       // Высота блока для статистики
    depthR: number;      // Глубина рейтинга для включения
    depthC: number;      // Глубина комментариев для включения
    cntC: number;        // Количество комментариев для включения
}
```

**Использование**
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
Получает уникальный идентификатор, связанный с адресом.

**Параметры**
```typescript
interface GetAddressIdParams {
    address: string;  // Блокчейн-адрес
    id: number;      // Уникальный идентификатор
}
```

**Использование**
```typescript
const response = await api.rpc.getaddressid({
    address: "blockchain_address",
    id: 123
} satisfies GetAddressIdParams);
```

### GetAddressInfo
Получает подробную информацию о конкретном адресе.

**Параметры**
```typescript
interface GetAddressInfoParams {
    address: string;  // Блокчейн-адрес
}
```

**Использование**
```typescript
const response = await api.rpc.getaddressinfo({
    address: "blockchain_address"
} satisfies GetAddressInfoParams);
```

### GetAddressRegistration
Получает статус регистрации для нескольких адресов.

**Параметры**
```typescript
interface GetAddressRegistrationParams {
    addresses: string[];  // Массив блокчейн-адресов
}
```

**Использование**
```typescript
const response = await api.rpc.getaddressregistration({
    addresses: ["address1", "address2"]
} satisfies GetAddressRegistrationParams);
```

### GetBalanceHistory
Получает историю баланса для списка адресов.

**Параметры**
```typescript
interface GetBalanceHistoryParams {
    addresses: string[];  // Массив блокчейн-адресов
    start: number;       // Начальная высота блока
    end: number;         // Конечная высота блока
}
```

**Использование**
```typescript
const response = await api.rpc.getbalancehistory({
    addresses: ["address1", "address2"],
    start: 1000,
    end: 2000
} satisfies GetBalanceHistoryParams);
```

### GetAccountEarning
Получает детали заработка конкретного аккаунта.

**Параметры**
```typescript
interface GetAccountEarningParams {
    address: string;  // Блокчейн-адрес
}
```

**Использование**
```typescript
const response = await api.rpc.getaccountearning({
    address: "blockchain_address"
} satisfies GetAccountEarningParams);
```

### GetAccountEarningStats
Получает подробную статистику заработка аккаунта.

**Параметры**
```typescript
interface GetAccountEarningStatsParams {
    address: string;  // Блокчейн-адрес
}
```

**Использование**
```typescript
const response = await api.rpc.getaccountearningstats({
    address: "blockchain_address"
} satisfies GetAccountEarningStatsParams);
```

## Контент и социальное взаимодействие

### GetContent
Получает контент на основе предоставленных хешей и адреса.

**Параметры**
```typescript
interface GetContentParams {
    hashes: string[];  // Массив хешей контента
    address: string;   // Блокчейн-адрес
}
```

**Использование**
```typescript
const response = await api.rpc.getcontent({
    hashes: ["hash1", "hash2"],
    address: "blockchain_address"
} satisfies GetContentParams);
```

### GetContents
Получает контент, опубликованный конкретным адресом.

**Параметры**
```typescript
interface GetContentsParams {
    address: string;  // Блокчейн-адрес
    count: number;    // Количество записей для возврата
}
```

**Использование**
```typescript
const response = await api.rpc.getcontents({
    address: "blockchain_address",
    count: 10
} satisfies GetContentsParams);
```

### GetComments
Получает комментарии, связанные с конкретной публикацией.

**Параметры**
```typescript
interface GetCommentsParams {
    content_hash: string;  // Хеш публикации
    count: number;        // Количество комментариев для возврата
}
```

**Использование**
```typescript
const response = await api.rpc.getcomments({
    content_hash: "content_hash",
    count: 20
} satisfies GetCommentsParams);
```

### GetLastComments
Получает самые последние комментарии из сети.

**Параметры**
```typescript
interface GetLastCommentsParams {
    count: number;  // Количество последних комментариев для возврата
}
```

**Использование**
```typescript
const response = await api.rpc.getlastcomments({
    count: 50
} satisfies GetLastCommentsParams);
```

### GetAccountContents
Получает контент, связанный с конкретным аккаунтом.

**Параметры**
```typescript
interface GetAccountContentsParams {
    address: string;  // Блокчейн-адрес
    count: number;    // Количество записей для возврата
}
```

**Использование**
```typescript
const response = await api.rpc.getaccountcontents({
    address: "blockchain_address",
    count: 10
} satisfies GetAccountContentsParams);
```

### GetAccountComments
Получает комментарии, связанные с конкретным аккаунтом.

**Параметры**
```typescript
interface GetAccountCommentsParams {
    address: string;  // Блокчейн-адрес
    count: number;    // Количество комментариев для возврата
}
```

**Использование**
```typescript
const response = await api.rpc.getaccountcomments({
    address: "blockchain_address",
    count: 20
} satisfies GetAccountCommentsParams);
```

### GetAccountPosts
Получает публикации, связанные с конкретным аккаунтом.

**Параметры**
```typescript
interface GetAccountPostsParams {
    address: string;  // Блокчейн-адрес
    count: number;    // Количество публикаций для возврата
}
```

**Использование**
```typescript
const response = await api.rpc.getaccountposts({
    address: "blockchain_address",
    count: 10
} satisfies GetAccountPostsParams);
```

### GetAccountFollowers
Получает список подписчиков конкретного аккаунта.

**Параметры**
```typescript
interface GetAccountFollowersParams {
    address: string;  // Блокчейн-адрес
    count: number;    // Количество подписчиков для возврата
}
```

**Использование**
```typescript
const response = await api.rpc.getaccountfollowers({
    address: "blockchain_address",
    count: 50
} satisfies GetAccountFollowersParams);
```

### GetAccountFollowings
Получает список аккаунтов, за которыми следует конкретный пользователь.

**Параметры**
```typescript
interface GetAccountFollowingsParams {
    address: string;  // Блокчейн-адрес
    count: number;    // Количество подписок для возврата
}
```

**Использование**
```typescript
const response = await api.rpc.getaccountfollowings({
    address: "blockchain_address",
    count: 50
} satisfies GetAccountFollowingsParams);
```

### GetAccountBlockings
Получает информацию об аккаунтах, заблокированных конкретным пользователем.

**Параметры**
```typescript
interface GetAccountBlockingsParams {
    address: string;  // Блокчейн-адрес
    count: number;    // Количество блокировок для возврата
}
```

**Использование**
```typescript
const response = await api.rpc.getaccountblockings({
    address: "blockchain_address",
    count: 50
} satisfies GetAccountBlockingsParams);
```

### GetAccountBlockers
Получает информацию об аккаунтах, которые заблокировали конкретного пользователя.

**Параметры**
```typescript
interface GetAccountBlockersParams {
    address: string;  // Блокчейн-адрес
    count: number;    // Количество блокировок для возврата
}
```

**Использование**
```typescript
const response = await api.rpc.getaccountblockers({
    address: "blockchain_address",
    count: 50
} satisfies GetAccountBlockersParams);
```

### GetBans
Получает статус бана конкретного пользователя.

**Параметры**
```typescript
interface GetBansParams {
    address: string;  // Блокчейн-адрес
}
```

**Использование**
```typescript
const response = await api.rpc.getbans({
    address: "blockchain_address"
} satisfies GetBansParams);
```

### GetTags
Получает список тегов, используемых в сети.

**Параметры**
```typescript
interface GetTagsParams {
    count: number;  // Количество тегов для возврата
}
```

**Использование**
```typescript
const response = await api.rpc.gettags({
    count: 100
} satisfies GetTagsParams);
```

## Оценки

### GetAddressScores
Получает оценки, связанные с конкретным адресом и публикациями.

**Параметры**
```typescript
interface GetAddressScoresParams {
    address: string;  // Блокчейн-адрес
    count: number;    // Количество оценок для возврата
}
```

**Использование**
```typescript
const response = await api.rpc.getaddressscores({
    address: "blockchain_address",
    count: 50
} satisfies GetAddressScoresParams);
```

### GetPostScores
Получает оценки для конкретной публикации.

**Параметры**
```typescript
interface GetPostScoresParams {
    content_hash: string;  // Хеш публикации
    count: number;        // Количество оценок для возврата
}
```

**Использование**
```typescript
const response = await api.rpc.getpostscores({
    content_hash: "content_hash",
    count: 50
} satisfies GetPostScoresParams);
```

### GetPageScores
Получает оценки для нескольких публикаций и комментариев.

**Параметры**
```typescript
interface GetPageScoresParams {
    content_hashes: string[];  // Массив хешей публикаций
    comment_hashes: string[];  // Массив хешей комментариев
    count: number;            // Количество оценок для возврата
}
```

**Использование**
```typescript
const response = await api.rpc.getpagescores({
    content_hashes: ["hash1", "hash2"],
    comment_hashes: ["comment1", "comment2"],
    count: 50
} satisfies GetPageScoresParams);
```

## Блокчейн

### GetBlock
Получает подробную информацию о конкретном блоке.

**Параметры**
```typescript
interface GetBlockParams {
    hash: string;  // Хеш блока
}
```

**Использование**
```typescript
const response = await api.rpc.getblock({
    hash: "block_hash"
} satisfies GetBlockParams);
```

### GetBlockCount
Получает текущее количество блоков в сети.

**Параметры**
```typescript
interface GetBlockCountParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getblockcount({} satisfies GetBlockCountParams);
```

### GetBlockHash
Получает хеш блока для заданного номера блока.

**Параметры**
```typescript
interface GetBlockHashParams {
    height: number;  // Высота блока
}
```

**Использование**
```typescript
const response = await api.rpc.getblockhash({
    height: 1000
} satisfies GetBlockHashParams);
```

### GetBlockTemplate
Получает шаблон блока для майнинга.

**Параметры**
```typescript
interface GetBlockTemplateParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getblocktemplate({} satisfies GetBlockTemplateParams);
```

### GetBlockTransactions
Получает транзакции в конкретном блоке.

**Параметры**
```typescript
interface GetBlockTransactionsParams {
    hash: string;  // Хеш блока
}
```

**Использование**
```typescript
const response = await api.rpc.getblocktransactions({
    hash: "block_hash"
} satisfies GetBlockTransactionsParams);
```

### GetCompactBlock
Получает данные компактного блока.

**Параметры**
```typescript
interface GetCompactBlockParams {
    hash: string;  // Хеш блока
}
```

**Использование**
```typescript
const response = await api.rpc.getcompactblock({
    hash: "block_hash"
} satisfies GetCompactBlockParams);
```

### GetBlockReward
Получает информацию о награде за конкретный блок.

**Параметры**
```typescript
interface GetBlockRewardParams {
    height: number;  // Высота блока
}
```

**Использование**
```typescript
const response = await api.rpc.getblockreward({
    height: 1000
} satisfies GetBlockRewardParams);
```

### GetBlockchainInfo
Получает состояние блокчейна.

**Параметры**
```typescript
interface GetBlockchainInfoParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getblockchaininfo({} satisfies GetBlockchainInfoParams);
```

### GetBlockSubsidy
Получает информацию о субсидии блока.

**Параметры**
```typescript
interface GetBlockSubsidyParams {
    height: number;  // Высота блока
}
```

**Использование**
```typescript
const response = await api.rpc.getblocksubsidy({
    height: 1000
} satisfies GetBlockSubsidyParams);
```

### GetBestBlockHash
Получает хеш самого последнего блока.

**Параметры**
```typescript
interface GetBestBlockHashParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getbestblockhash({} satisfies GetBestBlockHashParams);
```

### GetChainTips
Получает информацию о вершинах цепочки.

**Параметры**
```typescript
interface GetChainTipsParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getchaintips({} satisfies GetChainTipsParams);
```

### VerifyChain
Проверяет целостность блокчейна.

**Параметры**
```typescript
interface VerifyChainParams {
    check_level: number;  // Уровень проверки
    num_blocks: number;   // Количество блоков для проверки
}
```

**Использование**
```typescript
const response = await api.rpc.verifychain({
    check_level: 3,
    num_blocks: 1000
} satisfies VerifyChainParams);
```

## Транзакции

### GetTransaction
Получает информацию о транзакции.

**Параметры**
```typescript
interface GetTransactionParams {
    hash: string;  // Хеш транзакции
}
```

**Использование**
```typescript
const response = await api.rpc.gettransaction({
    hash: "transaction_hash"
} satisfies GetTransactionParams);
```

### GetRawTransaction
Получает сырые данные транзакции.

**Параметры**
```typescript
interface GetRawTransactionParams {
    hash: string;  // Хеш транзакции
}
```

**Использование**
```typescript
const response = await api.rpc.getrawtransaction({
    hash: "transaction_hash"
} satisfies GetRawTransactionParams);
```

### DecodeRawTransaction
Декодирует сырые данные транзакции.

**Параметры**
```typescript
interface DecodeRawTransactionParams {
    hex: string;  // Шестнадцатеричные данные транзакции
}
```

**Использование**
```typescript
const response = await api.rpc.decoderawtransaction({
    hex: "transaction_hex"
} satisfies DecodeRawTransactionParams);
```

### GetAddressTransactions
Получает транзакции для адреса.

**Параметры**
```typescript
interface GetAddressTransactionsParams {
    address: string;  // Блокчейн-адрес
    count: number;    // Количество транзакций для возврата
}
```

**Использование**
```typescript
const response = await api.rpc.getaddresstransactions({
    address: "blockchain_address",
    count: 50
} satisfies GetAddressTransactionsParams);
```

### AddTransaction
Добавляет новую транзакцию.

**Параметры**
```typescript
interface AddTransactionParams {
    hex: string;  // Шестнадцатеричные данные транзакции
}
```

**Использование**
```typescript
const response = await api.rpc.addtransaction({
    hex: "transaction_hex"
} satisfies AddTransactionParams);
```

### GenerateTransaction
Генерирует новую транзакцию.

**Параметры**
```typescript
interface GenerateTransactionParams {
    inputs: string[];     // Массив входов транзакции
    outputs: string[];    // Массив выходов транзакции
    fee: number;         // Комиссия транзакции
}
```

**Использование**
```typescript
const response = await api.rpc.generatetransaction({
    inputs: ["input1", "input2"],
    outputs: ["output1", "output2"],
    fee: 0.001
} satisfies GenerateTransactionParams);
```

### TxUnspent
Получает неизрасходованные выходы транзакций.

**Параметры**
```typescript
interface TxUnspentParams {
    addresses: string[];  // Массив блокчейн-адресов
}
```

**Использование**
```typescript
const response = await api.rpc.txunspent({
    addresses: ["address1", "address2"]
} satisfies TxUnspentParams);
```

### GetTxOut
Получает информацию об UTXO.

**Параметры**
```typescript
interface GetTxOutParams {
    hash: string;   // Хеш транзакции
    n: number;      // Индекс выхода
}
```

**Использование**
```typescript
const response = await api.rpc.gettxout({
    hash: "transaction_hash",
    n: 0
} satisfies GetTxOutParams);
```

### GetTxOutProof
Получает доказательство UTXO.

**Параметры**
```typescript
interface GetTxOutProofParams {
    hash: string;   // Хеш транзакции
    n: number;      // Индекс выхода
}
```

**Использование**
```typescript
const response = await api.rpc.gettxoutproof({
    hash: "transaction_hash",
    n: 0
} satisfies GetTxOutProofParams);
```

### VerifyTxOutProof
Проверяет доказательство UTXO.

**Параметры**
```typescript
interface VerifyTxOutProofParams {
    proof: string;  // Доказательство UTXO
}
```

**Использование**
```typescript
const response = await api.rpc.verifytxoutproof({
    proof: "utxo_proof"
} satisfies VerifyTxOutProofParams);
```

## Сеть и узел

### GetNodeInfo
Получает информацию о текущем узле.

**Параметры**
```typescript
interface GetNodeInfoParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getnodeinfo({} satisfies GetNodeInfoParams);
```

### GetPeerInfo
Получает информацию о подключенных пирах.

**Параметры**
```typescript
interface GetPeerInfoParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getpeerinfo({} satisfies GetPeerInfoParams);
```

### GetNetworkInfo
Получает информацию о состоянии сети и узлах.

**Параметры**
```typescript
interface GetNetworkInfoParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getnetworkinfo({} satisfies GetNetworkInfoParams);
```

### GetNetworkHashrate
Получает текущий хешрейт сети.

**Параметры**
```typescript
interface GetNetworkHashrateParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getnetworkhashrate({} satisfies GetNetworkHashrateParams);
```

### GetTime
Получает текущее время сети.

**Параметры**
```typescript
interface GetTimeParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.gettime({} satisfies GetTimeParams);
```

### GetCoinInfo
Получает общую информацию о монете.

**Параметры**
```typescript
interface GetCoinInfoParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getcoininfo({} satisfies GetCoinInfoParams);
```

### GetMempoolInfo
Получает состояние пула памяти.

**Параметры**
```typescript
interface GetMempoolInfoParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getmempoolinfo({} satisfies GetMempoolInfoParams);
```

### GetRawMempool
Получает транзакции в пуле памяти.

**Параметры**
```typescript
interface GetRawMempoolParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getrawmempool({} satisfies GetRawMempoolParams);
```

### GetDifficulty
Получает текущую сложность сети.

**Параметры**
```typescript
interface GetDifficultyParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getdifficulty({} satisfies GetDifficultyParams);
```

## Стейкинг и майнинг

### GetPosDifficulty
Получает сложность Proof-of-Stake.

**Параметры**
```typescript
interface GetPosDifficultyParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getposdifficulty({} satisfies GetPosDifficultyParams);
```

### GetNetworkStakeWeight
Получает текущий вес стейка.

**Параметры**
```typescript
interface GetNetworkStakeWeightParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getnetworkstakeweight({} satisfies GetNetworkStakeWeightParams);
```

### GetStakingStatus
Получает статус стейкинга.

**Параметры**
```typescript
interface GetStakingStatusParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getstakingstatus({} satisfies GetStakingStatusParams);
```

### GetMintingInfo
Получает информацию о майнинге.

**Параметры**
```typescript
interface GetMintingInfoParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getmintinginfo({} satisfies GetMintingInfoParams);
```

## Система жюри

### GetJury
Получает информацию о конкретном жюри.

**Параметры**
```typescript
interface GetJuryParams {
    jury_id: string;  // Идентификатор жюри
}
```

**Использование**
```typescript
const response = await api.rpc.getjury({
    jury_id: "jury_id"
} satisfies GetJuryParams);
```

### GetAllJury
Получает все жюри в сети.

**Параметры**
```typescript
interface GetAllJuryParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getalljury({} satisfies GetAllJuryParams);
```

### GetJuryAssigned
Получает назначения жюри.

**Параметры**
```typescript
interface GetJuryAssignedParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getjuryassigned({} satisfies GetJuryAssignedParams);
```

### GetJuryModerators
Получает модераторов жюри.

**Параметры**
```typescript
interface GetJuryModeratorsParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getjurymoderators({} satisfies GetJuryModeratorsParams);
```

### GetJuryVotes
Получает голоса жюри.

**Параметры**
```typescript
interface GetJuryVotesParams {
    jury_id: string;  // Идентификатор жюри
}
```

**Использование**
```typescript
const response = await api.rpc.getjuryvotes({
    jury_id: "jury_id"
} satisfies GetJuryVotesParams);
```

### GetJuryBalance
Получает баланс жюри.

**Параметры**
```typescript
interface GetJuryBalanceParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getjurybalance({} satisfies GetJuryBalanceParams);
```

### GetJuryList
Получает список жюри.

**Параметры**
```typescript
interface GetJuryListParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getjurylist({} satisfies GetJuryListParams);
```

### GetJuryReward
Получает награды жюри.

**Параметры**
```typescript
interface GetJuryRewardParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getjuryreward({} satisfies GetJuryRewardParams);
```

### GetJuryVotesCount
Получает количество голосов.

**Параметры**
```typescript
interface GetJuryVotesCountParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getjuryvotescount({} satisfies GetJuryVotesCountParams);
```

### GetModeratorStatistics
Получает статистику активности модераторов.

**Параметры**
```typescript
interface GetModeratorStatisticsParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getmoderatorstatistics({} satisfies GetModeratorStatisticsParams);
```

## Поиск и обнаружение

### Search
Ищет контент по ключевым словам и типу.

**Параметры**
```typescript
interface SearchParams {
    query: string;     // Поисковый запрос
    type: string;      // Тип контента
    count: number;     // Количество результатов
}
```

**Использование**
```typescript
const response = await api.rpc.search({
    query: "search_query",
    type: "content_type",
    count: 20
} satisfies SearchParams);
```

### SearchUsers
Ищет пользователей по критериям.

**Параметры**
```typescript
interface SearchUsersParams {
    query: string;     // Поисковый запрос
    count: number;     // Количество результатов
}
```

**Использование**
```typescript
const response = await api.rpc.searchusers({
    query: "search_query",
    count: 20
} satisfies SearchUsersParams);
```

### SearchLinks
Ищет контент по ссылкам.

**Параметры**
```typescript
interface SearchLinksParams {
    links: string[];   // Массив ссылок
    count: number;     // Количество результатов
}
```

**Использование**
```typescript
const response = await api.rpc.searchlinks({
    links: ["link1", "link2"],
    count: 20
} satisfies SearchLinksParams);
```

## Кошелек и валидация

### GetWalletInfo
Получает информацию о кошельке.

**Параметры**
```typescript
interface GetWalletInfoParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getwalletinfo({} satisfies GetWalletInfoParams);
```

### ValidateAddress
Проверяет адрес сети.

**Параметры**
```typescript
interface ValidateAddressParams {
    address: string;  // Блокчейн-адрес
}
```

**Использование**
```typescript
const response = await api.rpc.validateaddress({
    address: "blockchain_address"
} satisfies ValidateAddressParams);
```

### CheckStringType
Проверяет тип строки в контексте сети.

**Параметры**
```typescript
interface CheckStringTypeParams {
    string: string;  // Строка для проверки
}
```

**Использование**
```typescript
const response = await api.rpc.checkstringtype({
    string: "string_to_check"
} satisfies CheckStringTypeParams);
```

## Системная информация

### GetMissedInfo
Получает информацию о пропущенных блоках и транзакциях.

**Параметры**
```typescript
interface GetMissedInfoParams {
    // Нет параметров
}
```

**Использование**
```typescript
const response = await api.rpc.getmissedinfo({} satisfies GetMissedInfoParams);
```