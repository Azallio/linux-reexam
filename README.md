# linux-reexam

## Описание

Мини-приложение на Node.js с настроенным CI/CD-процессом через GitHub Actions. Проект демонстрирует автоматическую проверку стиля кода, форматирования и запуск тестов при каждом пуше.

## Структура проекта

| Файл                       | Назначение                                                   |
| -------------------------- | ------------------------------------------------------------ |
| `main.js`                  | Консольное приложение (вывод информации)                     |
| `app.js`                   | Основная программа — вызывает функцию сложения из `utils.js` |
| `utils.js`                 | Утилиты — функция `addNumbers(a, b)`                         |
| `utils.test.js`            | Тесты для `addNumbers` (Jest)                                |
| `package.json`             | Зависимости и npm-скрипты                                    |
| `.eslintrc.json`           | Конфигурация линтера ESLint                                  |
| `.github/workflows/ci.yml` | CI/CD workflow для GitHub Actions                            |

## CI/CD Pipeline

Workflow запускается при `push` в ветки `main` и `development`, а также при `pull_request` в `main`.

### Этапы pipeline:

1. **Checkout code** — клонирование репозитория
2. **Set up Node.js** — установка Node.js 20
3. **Run script** — запуск `main.js`
4. **Install dependencies** — `npm ci`
5. **Run app** — запуск `app.js`
6. **Run linter (ESLint)** — проверка стиля кода
7. **Run formatter check (Prettier)** — проверка форматирования
8. **Run tests (Jest)** — запуск unit-тестов
9. **Send Telegram notification** — отправка статуса сборки в Telegram-бот

## Используемые инструменты

- **ESLint** — линтер для выявления ошибок и проверки стиля
- **Prettier** — проверка единообразного форматирования кода
- **Jest** — фреймворк для запуска тестов

## Запуск локально

```bash
npm install
node app.js
npm run lint
npm run format:check
npm test
```

## Настройка Telegram-уведомлений

1. Создайте бота через [@BotFather](https://t.me/BotFather) и скопируйте токен
2. Узнайте `chat_id` через `https://api.telegram.org/bot<TOKEN>/getUpdates`
3. Добавьте секреты в GitHub → Settings → Secrets and variables → Actions:
   - `TELEGRAM_BOT_TOKEN` — токен бота
   - `TELEGRAM_CHAT_ID` — ID чата
