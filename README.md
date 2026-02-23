# Lab Markdown Template (SvelteKit)

Шаблон для оформлення лабораторних/практичних робіт у **Markdown** з автоматичним меню (Зміст) та навігацією по роботах.

## Швидкий старт

```bash
pnpm i
pnpm svelte-kit sync
pnpm dev --open
```

## Як користуватись

1) Відкрий `content/site.config.json` і заповни:
- `report.title` — заголовок (наприклад, «ЗВІТИ З ПРАКТИЧНИХ РОБІТ»)
- `report.subjectLine` — назва дисципліни
- `student.fullName`, `student.group`, `student.gender`, `student.photo`
- `labs[]` — список робіт (кнопки/слуги)

2) Для кожної роботи створи файл у `content/labs/`:
- `content/labs/<slug>.md`
- `slug` у конфігу **має збігатися** з назвою файлу без `.md`

3) Додай скріншоти (за потреби) у `static/assets/labs/<slug>/`

## Структура репозиторію

```text
.
├── content
│   ├── labs
│   │   └── lab-1.md
│   └── site.config.json
├── src
│   └── routes
│       └── lab
│           └── [slug]
│               └── +page.ts
└── static
    └── assets
        └── labs
            └── lab-1
                └── screen-1.png
```

## Приклад `site.config.json`

```json
{
  "report": {
    "title": "ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ",
    "subjectLine": "з дисципліни «... назва дисципліни ...»"
  },
  "student": {
    "fullName": "Прізвище Ім’я По батькові",
    "group": "ІО-35",
    "gender": "male",
    "photo": "/students/me.jpg"
  },
  "labs": [
    { "slug": "lab-1", "title": "Лабораторна робота №1", "button": "Лабораторна робота №1" }
  ]
}
```

## Приклад Markdown (робота)

`content/labs/lab-1.md`:

```md
## Тема, Мета, Місце розташування

**Тема:** ...
**Мета:** ...

---

## Хід виконання

```bash
pnpm dev
```

---

## Скріншоти

> Примітка: `---` у Markdown використовується як розділювач секцій.

## Додавання зображень

1) Склади файли сюди:
- `static/assets/labs/lab-1/screen-1.png`

2) Встав у Markdown так:
   ```md
   ![Скрін 1](/assets/labs/lab-1/screen-1.png)
   ```
