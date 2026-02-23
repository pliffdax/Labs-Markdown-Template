# Labs Markdown Template (SvelteKit)

Шаблон для оформлення лабораторних / практичних робіт у Markdown з автоматичним меню (Зміст) та навігацією по роботах.

---

## 1. Швидкий старт

```bash
pnpm i
pnpm svelte-kit sync
pnpm dev --open
```

---

## 2. ВАЖЛИВО: Назва репозиторію (GitHub Pages)

Якщо ви плануєте публікацію на GitHub Pages, **назва репозиторію має значення**.

Рекомендується називати репозиторій за шаблоном:

```
Ix-xx_appRECORD-LastnameFirstname-FIOT-202x
```

Наприклад:

```
IO-35_appRECORD-StepanovOleksandr-FIOT-2026
```

або будь-яким іншим форматом, який вимагає викладач.

### Після перейменування репозиторію ОБОВʼЯЗКОВО змініть base-path

Відкрийте файл:

```
svelte.config.js
```

Знайдіть рядок:

```js
paths: {
  base: process.env.NODE_ENV === "production"
    ? "/Labs-Markdown-Template"
    : "",
},
```

І замініть:

```
"/Labs-Markdown-Template"
```

на:

```
"/ВАША-НАЗВА-РЕПОЗИТОРІЮ"
```

Наприклад:

```js
paths: {
  base: process.env.NODE_ENV === "production"
    ? "/IO-35_appRECORD-StepanovOleksandr-FIOT-2025"
    : "",
},
```

Назва повинна повністю збігатися з назвою репозиторію на GitHub.

Інакше:
- зламаються стилі
- не будуть працювати картинки
- роутинг видаватиме 404

---

## 3. Налаштування студента

Відкрийте:

```
content/site.config.json
```

Заповніть:

- report.title
- report.subjectLine
- student.fullName
- student.group
- student.gender
- student.photo
- labs[]

Slug у labs повинен збігатися з назвою markdown-файлу.

---

## 4. Додавання лабораторної

Створіть файл:

```
content/labs/lab-1.md
```

Slug у конфігу:

```json
{
  "slug": "lab-1"
}
```

---

## 5. Структура markdown-файлу

Рекомендується така структура:

```md
## Тема, Мета, Місце розташування

---

## Опис предметного середовища

---

## Хід виконання

### Крок 1

```bash
pnpm dev
```

---

## Скріншоти

![Скрін 1](/assets/labs/lab-1/screen-1.png)

---

## Висновки
```

### Рекомендовані символи структури

- `##` — основний розділ
- `###` — підрозділ
- `---` — розділювач (використовується лише для структурування файлу)
- ``` ``` — блок коду
- `**жирний текст**` — виділення

---

## 6. Додавання зображень

Складати зображення сюди:

```
static/assets/labs/lab-1/
```

Вставляти у Markdown:

```md
![Скрін 1](/assets/labs/lab-1/screen-1.png)
```

---

## 7. Деплой на GitHub Pages

1. Увімкніть GitHub Actions у Settings → Pages
2. Source → GitHub Actions
3. Пуш у main автоматично задеплоїть сайт

---

## 8. Типові помилки

- Не збігається slug і назва файлу
- Не змінено base-path після перейменування репозиторію
- Картинки лежать не в static/

---

Проєкт є звичайним SvelteKit-проєктом і може бути розгорнутий як статичний сайт.
