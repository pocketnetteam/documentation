# BastyonSdk Reference

## Содержание
- [Установка](#установка)
- [Основы работы](#основы-работы)
  - [Инициализация](#инициализация)
  - [События](#события)
- [API Reference](#api-reference)
  - [Основные методы](#основные-методы)
  - [Методы get](#методы-get)
  - [Методы permissions](#методы-permissions)
  - [Методы open](#методы-open)
  - [Методы barteron](#методы-barteron)
  - [Методы images](#методы-images)
  - [Методы chat](#методы-chat)
  - [Методы helpers](#методы-helpers)

## Установка

### Подключение через CDN

```html
<script src="https://bastyon.com/js/lib/apps/sdk.js"></script>
```

## Основы работы

### Инициализация

```javascript
const sdk = new BastyonSdk();

// Инициализация SDK
await sdk.init();

// Сообщаем платформе о готовности
sdk.emit('loaded');
```

### События

BastyonSdk поддерживает систему событий для взаимодействия с платформой.

| Событие | Описание |
|---------|----------|
| block | Изменения в блокчейне |
| state | Изменение состояния приложения |
| action | Действия пользователя |
| balance | Обновления баланса |
| locale | Изменение локали |
| theme | Изменение темы |
| changestate | Изменение состояния |

## API Reference

### Основные методы

#### init()

Инициализирует SDK.

**Возвращает:**
```typescript
Promise<{
  id: string;           // ID приложения
  name: string;         // Название
  version: string;      // Версия
  theme: string;        // Тема
  margintop: number;    // Отступ сверху
  production: boolean;  // Режим
  project: object;      // Конфигурация
}>
```

#### emit(event, data?)

Отправляет событие в приложение.

**Параметры:**
- `event: string` - Название события
- `data?: object` - Данные события (опционально)

```javascript
sdk.emit('changestate', { value: 'newState', replace: true });
```

#### on(event, callback)

Подписывается на событие.

**Параметры:**
- `event: string` - Название события
- `callback: (data: any) => void` - Обработчик

```javascript
sdk.on('balance', (balance) => {
  console.log('Новый баланс:', balance);
});
```

#### off(event, callback)

Отписывается от события.

**Параметры:**
- `event: string` - Название события
- `callback: Function` - Обработчик для удаления

### Методы get

#### get.account()

> Требует разрешение: `account`

Получает информацию об аккаунте.

**Возвращает:**
```typescript
Promise<{
  address: string;    // Адрес
  signature: string;  // Подпись
  status?: string;    // Статус
}>
```

#### get.balance()

> Требует разрешение: `account`

Получает баланс пользователя.

**Возвращает:** `Promise<number>`

#### get.zaddress()

> Требует разрешение: `zaddress`

Получает Z-адрес пользователя.

**Возвращает:** `Promise<string>`

#### get.geolocation()

> Требует разрешение: `geolocation`

Получает координаты.

**Возвращает:**
```typescript
Promise<{
  latitude: number;   // Широта
  longitude: number;  // Долгота
}>
```

### Методы permissions

#### permissions.check({ permission })

Проверяет наличие разрешения.

**Параметры:**
- `permission: string` - Название разрешения

**Возвращает:** `Promise<boolean>`

#### permissions.request(permissions)

Запрашивает разрешения.

**Параметры:**
- `permissions: string[]` - Массив разрешений

**Возвращает:** `Promise<void>`

### Методы open

#### open.post(txid)

Открывает пост.

**Параметры:**
- `txid: string` - ID поста

#### open.donation(receiver)

> Требует разрешения: `payment`, `account`

Открывает форму доната.

**Параметры:**
- `receiver: string` - Адрес получателя

### Методы barteron

#### barteron.account(data)

> Требует разрешение: `account`

Управляет аккаунтом Barteron.

**Параметры:**
- `data: object` - Данные аккаунта

#### barteron.offer(data)

> Требует разрешение: `account`

Создает предложение.

**Параметры:**
- `data: object` - Данные предложения

#### barteron.removeOffer(data)

> Требует разрешение: `account`

Удаляет предложение.

**Параметры:**
- `data: object` - Данные для удаления

### Методы images

#### images.upload(data)

Загружает изображение.

**Параметры:**
- `data: { image: string }` - Изображение в base64

**Возвращает:** `Promise<string>` - URL загруженного изображения

### Методы chat

#### chat.getOrCreateRoom(params)

> Требует разрешение: `chat`

Создает или получает комнату чата.

**Параметры:**
```typescript
{
  users: string[];      // ID пользователей
  parameters?: object;  // Дополнительные параметры
}
```

#### chat.send(params)

> Требует разрешение: `chat`

Отправляет сообщение.

**Параметры:**
```typescript
{
  roomid: string;     // ID комнаты
  content: {          // Содержимое
    text: string;     // Текст сообщения
    [key: string]: any; // Дополнительные данные
  }
}
```

#### chat.openRoom(roomid)

> Требует разрешение: `chat`

Открывает комнату чата.

**Параметры:**
- `roomid: string` - ID комнаты

### Методы helpers

#### helpers.alert(message)

> Требует разрешение: `messaging`

Показывает уведомление.

**Параметры:**
- `message: string` - Текст уведомления

#### helpers.opensettings()

Открывает настройки приложения.

#### helpers.registration()

Открывает форму регистрации.

#### helpers.userstate()

Получает состояние пользователя.

**Возвращает:** `Promise<object>`

#### helpers.share(data)

Делится контентом.

**Параметры:**
```typescript
{
  path: string;       // Путь
  sharing: {          // Параметры шаринга
    title: string;    // Заголовок
    [key: string]: any; // Дополнительные параметры
  }
}
```

## Типы данных

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

## Обработка ошибок

SDK использует Promise для асинхронных операций. Все ошибки следует обрабатывать через `.catch()`:

```javascript
sdk.get.account()
  .then(account => {
    // Обработка успешного результата
  })
  .catch(error => {
    // Обработка ошибки
    console.error('Ошибка:', error.message);
  });
```

## Лучшие практики

1. **Инициализация:**
   ```javascript
   async function initializeApp() {
     try {
       const sdk = new BastyonSdk();
       await sdk.init();
       sdk.emit('loaded');
     } catch (error) {
       console.error('Ошибка инициализации:', error);
     }
   }
   ```

2. **Проверка разрешений:**
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

3. **Обработка событий:**
   ```javascript
   function setupEventListeners() {
     sdk.on('balance', handleBalanceChange);
     sdk.on('theme', handleThemeChange);
     
     // Очистка при размонтировании
     return () => {
       sdk.off('balance', handleBalanceChange);
       sdk.off('theme', handleThemeChange);
     };
   }
   ```

---

## Дополнительные ресурсы

- [Полная документация](https://docs.bastyon.com/sdk)
- [Примеры приложений](https://github.com/bastyon/examples)
- [API Reference](https://api.bastyon.com)