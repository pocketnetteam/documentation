# Начало работы

Добро пожаловать в документацию по проекту Pocketnet Core. Этот документ предназначен для ознакомления с работой над кодом узла блокчейна для сети Pocketnet. Pocketnet Core в основном написан на C++ и является форком Bitcoin, что определяет наличие множества параллелей с ним.

## Что такое сеть Pocketnet?

Pocketnet представляет собой одноранговую сеть, которая поддерживает работу блокчейна с возможностью хранения открытых данных внутри блокчейна для создания отказоустойчивого хранилища. Узлы в сети Pocketnet называются Pocketnet Core и являются своего рода точками входа в сеть. Каждый узел хранит полную копию данных и выполняет функции базы данных, валидатора и веб-сервера. Основное назначение такой сети — хранение данных, защищенных стандартными механизмами шифрования, применяемыми в блокчейне Биткоин для защиты транзакций. Данные в сети не шифруются на уровне узла, но подписаны ключом автора и защищены от подделки.

В качестве альтернатив, решающих аналогичные задачи, можно привести следующие проекты:
- [BitTorrent](https://www.bittorrent.com/)
- [IPFS](https://ipfs.tech/)
- [FileCoin](https://filecoin.io/)

Каждый из этих проектов имеет свои преимущества и недостатки, Pocketnet отличается следующими особенностями:
- Сеть Pocketnet обладает механизмами хранения небольших объемов данных, защищенных шифрованием, что гарантирует пользователю их подлинность.
- Узлы Pocketnet оснащены встроенным RPC веб-сервером, который позволяет работать с данными так, как если бы они хранились на классическом веб-сервере.
- Узлы Pocketnet не требуют авторизации для доступа к данным, необходим только приватный ключ — привет интернету web3.
- Транзакции в сети делятся на "денежные", плата за которые определяется динамически в зависимости от размера, и "социальные", плата за которые фиксирована и составляет 1 минимальную единицу койна (1 сатоши), что позволяет строить разнообразные приложения, не требуя существенной платы за использование.


## Исходный код

Pocketnet базируется на коде [Bitcoin](https://github.com/bitcoin/bitcoin), поэтому большая часть механизмов и логики Биткоин применяется и в Pocketnet. Более подробно о структуре проекта и исходном коде описано в разделе [Исходный Код](source.md)

## Сборка и настройка окружение

Разнообразные варианты компиляции, процессы выпуска релизов, а также инструкции по настройке IDE, описаны в разделе [Building](building.md).

## Использование

Загрузка, запуск и работа с узлами PocketnetCore подробно описаны в разделе [Usage](usage.md).