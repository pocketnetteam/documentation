# Сетевая конфигурация узла

Данное руководство описывает процесс настройки интеграции ноды Pocketnet с различными анонимными и безопасными сетями: I2P, Tor и Yggdrasil. Использование этих сетей позволяет обеспечить дополнительную анонимность и безопасность соединений вашего узла.

## Интеграция с I2P

I2P (Invisible Internet Project) — это анонимная оверлейная сеть, которая обеспечивает безопасную и приватную передачу данных.

### Установка пакета i2pd в Debian 11 (bullseye)

#### Загрузка пакета

Загрузите пакет с официального сайта: [https://github.com/PurpleI2P/i2pd/releases](https://github.com/PurpleI2P/i2pd/releases)

Например, для Debian используйте файл: `i2pd_2.58.0-1bullseye1_amd64.deb`

#### Установка

Выполните команду установки:

```bash
sudo dpkg -i i2pd_2.58.0-1bullseye1_amd64.deb
```

#### Настройка полосы пропускания

Задайте полосу пропускания (P – 2048 KB/sec) в файле `/etc/i2pd/i2pd.conf`:

```ini
bandwidth = P
```

#### Запуск службы

Выполните команду запуска:

```bash
sudo systemctl start i2pd
```

Проверка статуса запуска:

```bash
sudo systemctl status i2pd
```

### Настройка Docker для I2P

В файле `docker-compose.yml` необходимо добавить следующую опцию:

```yaml
version: '3.7'

services:
  pocketnet.core:
    # ... другие настройки ...
    network_mode: host
    # ... другие настройки ...
```

### Интеграция pocketcoind с I2P

#### Настройка конфигурации

Добавьте следующие настройки в файл `~/.pocketcoin/pocketcoin.conf`:

```ini
i2pacceptincoming=1
i2psam=127.0.0.1:7656
#debug=i2p
```

**Параметры:**
- `i2pacceptincoming=1` — разрешает входящие соединения через I2P
- `i2psam=127.0.0.1:7656` — адрес и порт SAM-моста I2P
- `#debug=i2p` — опция отладки (раскомментируйте при необходимости)

#### Проверка статуса интеграции

После перезапуска ноды выполните команду:

```bash
pocketcoin-cli getnetworkinfo
```

Команда должна отобразить использование сетевого адреса I2P в разделе `localaddresses`:

```json
{
  "localaddresses": [
    {
      "address": "xtr5opke44ckuim7id4aprjg2afi73uuf7ctjx2cc4hwp6k7gevq.b32.i2p",
      "port": 37070,
      "score": 4
    }
  ],
  "warnings": ""
}
```

Адрес с доменом `.b32.i2p` подтверждает успешную интеграцию с сетью I2P.

---

## Интеграция с Tor

Tor — это децентрализованная сеть, обеспечивающая анонимность через многослойное шифрование и маршрутизацию через несколько узлов.

### Установка пакета Tor (Debian)

#### Установка пакетов

Выполните команды установки:

```bash
sudo apt install tor
sudo apt install tor-geoipdb
```

#### Настройка управляющего порта

Добавьте (раскомментируйте) активацию управляющего порта в файле `/etc/tor/torrc`:

```ini
ControlPort 9051
```

#### Настройка прав доступа

Добавьте группу `debian-tor` текущему пользователю (например, `poc`):

```bash
sudo usermod -aG debian-tor poc
```

Добавьте права на запись в рабочий каталог Tor (к сокету) для группы `debian-tor`:

```bash
chgrp debian-tor /run/tor
chmod g+w /run/tor/
```

#### Запуск службы

Выполните команду запуска:

```bash
sudo systemctl start tor
```

Проверка статуса запуска:

```bash
sudo systemctl status tor
```

### Настройка docker-compose.yml для Tor

#### Определение GID группы debian-tor

Узнайте GID группы `debian-tor`:

```bash
getent group debian-tor
```

Пример вывода:
```
debian-tor:x:115:
```

В данном случае `115` – это GID группы `debian-tor`, который необходимо добавить в настройки docker-compose.yml.

#### Настройка конфигурации Docker

Добавьте следующие опции в конфигурационный файл `docker-compose.yml`:

```yaml
version: '3.7'

services:
  pocketnet.core:
    # ... другие настройки ...
    pid: host
    network_mode: host
    user: 1000:115  # uid и gid от имени которых будет работать контейнер
    # ... другие настройки ...
```

**Важно:** 
- `1000` — это UID текущего пользователя
- `115` – это GID группы `debian-tor` (используйте значение из вашей системы)

### Интеграция pocketcoind с Tor

#### Настройка конфигурации

Добавьте следующие настройки в файл `~/.pocketcoin/pocketcoin.conf`:

```ini
listenonion=1
torcontrol=127.0.0.1:9051
debug=tor
#onlynet=onion
```

**Параметры:**
- `listenonion=1` — включает прослушивание входящих соединений через Tor
- `torcontrol=127.0.0.1:9051` — адрес и порт управляющего интерфейса Tor
- `debug=tor` — включает отладочные логи для Tor
- `#onlynet=onion` — использовать только сеть Tor (раскомментируйте при необходимости)

#### Проверка статуса интеграции

После перезапуска ноды выполните команду:

```bash
pocketcoin-cli getnetworkinfo
```

Команда должна отобразить использование сетевого адреса Tor в разделе `localaddresses`:

```json
{
  "localaddresses": [
    {
      "address": "krzwep4uj4apbm3l2fu2zzrhjqhautmkvcuvwhclhgqlbtxd4tkoogyd.onion",
      "port": 37070,
      "score": 4
    }
  ],
  "warnings": ""
}
```

Адрес с доменом `.onion` подтверждает успешную интеграцию с сетью Tor.

### Настройка logrotate для логов ноды

#### Создание конфигурации

Создайте файл `/etc/logrotate.d/pocketcoin` со следующим содержимым (укажите актуальный путь к `debug.log` и `pocketcoind.pid`):

```
/mnt/pocketcoin/debug.log {
    rotate 20
    size 10M
    missingok
    compress
    postrotate
        kill -HUP `cat /mnt/pocketcoin/pocketcoind.pid` >/dev/null 2>&1
    endscript
}
```

**Параметры:**
- `rotate 20` — хранить 20 ротированных файлов
- `size 10M` — ротация при достижении размера 10 МБ
- `missingok` — не выдавать ошибку, если файл отсутствует
- `compress` — сжимать старые логи

#### Перезапуск службы

Перезапустите logrotate:

```bash
sudo systemctl restart logrotate
```

---

## Интеграция с Yggdrasil

Yggdrasil — это полностью сквозная зашифрованная IPv6 сеть, которая обеспечивает приватную и безопасную коммуникацию между узлами.

### Настройка правил межсетевого экрана ufw

#### Подготовка

Необходимо ограничить доступ к серверу по IPv6 из сети Yggdrasil. Убедитесь, что в конфигурационном файле `/etc/default/ufw` есть строка:

```ini
IPV6=yes
```

#### Базовая настройка

Разрешите доступ по SSH и активируйте ufw:

```bash
sudo ufw app update 'OpenSSH'
sudo ufw allow 'OpenSSH'
sudo ufw enable
```

#### Создание профиля для Pocketcoin

Создайте профиль для приложения pocketcoind в файле `/etc/ufw/applications.d/ufw-pocketcoin-testnet`:

```ini
[Pocketcoin Testnet]
title=Pocketcoin Testnet
description=Pocketcoin Testnet
ports=6067,6667,36060,39091,39092,39991,13131/tcp
```

Активируйте профиль:

```bash
sudo ufw app update "Pocketcoin Testnet"
sudo ufw allow "Pocketcoin Testnet"
```

#### Проверка состояния

```bash
sudo ufw status verbose
```

### Установка пакета Yggdrasil в Debian

#### Загрузка пакета

Загрузите пакет с официального сайта: [https://github.com/yggdrasil-network/yggdrasil-go/releases/latest](https://github.com/yggdrasil-network/yggdrasil-go/releases/latest)

Например, для Debian используйте файл: `yggdrasil-0.5.12-amd64.deb`

#### Установка

Выполните команду установки:

```bash
sudo dpkg -i yggdrasil-0.5.12-amd64.deb
```

### Выбор узлов для подключения

На сайте [https://publicpeers.neilalexander.dev/](https://publicpeers.neilalexander.dev/) необходимо выбрать несколько адресов узлов Yggdrasil из своей или ближайшей страны с большим временем доступности (близким к 100%).

**Примеры узлов:**

Для Германии:
- `tcp://ygg.mkg20001.io:80`

Для России:
- `tcp://yggdrasil.su:62486`

#### Настройка конфигурации

Добавьте выбранные узлы в конфигурационный файл `/etc/yggdrasil/yggdrasil.conf`:

```yaml
Peers: [
  tcp://yggdrasil.su:62486
  tcp://ygg.mkg20001.io:80
]
```

### Запуск

#### Запуск службы

Выполните команду запуска:

```bash
sudo systemctl start yggdrasil
```

Проверка статуса запуска:

```bash
sudo systemctl status yggdrasil
```

#### Проверка сетевого интерфейса

После запуска должен появиться сетевой интерфейс `tun0` с IPv6 адресом с префиксом `200::/7`.

Проверьте командой:

```bash
ip a show dev tun0
```

Пример вывода:

```
3: tun0: <POINTOPOINT,MULTICAST,NOARP,UP,LOWER_UP> mtu 65535 qdisc pfifo_fast state UNKNOWN group default qlen 500
    link/none 
    inet6 200:5c4e:a1b4:873d:bd3f:5127:29a4:8b31/7 scope global 
       valid_lft forever preferred_lft forever
    inet6 fe80::9b9e:4fbb:50e8:d2c4/64 scope link stable-privacy 
       valid_lft forever preferred_lft forever
```

#### Проверка подключения к узлам

```bash
sudo yggdrasilctl getpeers
```

Пример вывода:

```
               URI               	State	Dir	              IP Address              	 Uptime  	 RTT  	 RX  	 TX 	Pr	Cost	Last Error 
tcp://yggdrasil.su:62486         	Up   	Out	218:71e5:78e4:8989:b71:db7f:7bf1:f1e1 	96h38m35s	1.15ms	26.5MB	51.8MB 	2B/s	98B/s	0 	1   	-
tcp://ygg.mkg20001.io:80         	Up   	Out	201:5bff:fc61:a4d7:e753:a40f:bdf7:8135	96h38m32s	5.93ms	1.4MB 	715.2KB	-   	-    	0 	5   	-
```

### Настройка Docker для Yggdrasil

В файле `docker-compose.yml` необходимо добавить следующую опцию:

```yaml
version: '3.7'

services:
  pocketnet.core:
    # ... другие настройки ...
    network_mode: host
    # ... другие настройки ...
```

### Проверка работы pocketcoind через сеть Yggdrasil

#### Перезапуск ноды

Необходимо перезапустить pocketcoind после установки и запуска Yggdrasil.

#### Проверка статуса интеграции

Выполните команду:

```bash
pocketcoin-cli getnetworkinfo
```

Команда должна отобразить использование сетевого адреса Yggdrasil (tun0) в разделе `localaddresses`:

```json
{
  "localaddresses": [
    {
      "address": "200:5c4e:a1b4:873d:bd3f:5127:29a4:8b31",
      "port": 36060,
      "score": 116
    }
  ]
}
```

Адрес с префиксом `200::/7` подтверждает успешную интеграцию с сетью Yggdrasil.

---

## Дополнительные ресурсы

### I2P
- [Документация I2P](https://i2pd.readthedocs.io/)
- [Purple I2P на GitHub](https://github.com/PurpleI2P/i2pd)

### Tor
- [Документация Tor Project](https://www.torproject.org/docs/)
- [Tor на Debian Wiki](https://wiki.debian.org/TorProject)

### Yggdrasil
- [Документация Yggdrasil](https://yggdrasil-network.github.io/)
- [Yggdrasil на GitHub](https://github.com/yggdrasil-network/yggdrasil-go)
- [Публичные узлы Yggdrasil](https://publicpeers.neilalexander.dev/)

