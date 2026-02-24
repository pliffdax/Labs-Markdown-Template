## Тема, мета, місце розташування сайту та звіту

**Тема:** «Веб-орієнтований застосунок магазину квітів “Flower Design”.»

**Мета:** зробити зручний і простий у використанні інтернет-магазин квітів “Flower Design”, який дозволяє користувачам легко переглядати каталог букетів, швидко оформлювати замовлення та бронювати квіти. Сайт має забезпечити приємний інтерфейс, показати асортимент із фото та описами, а також спростити процес вибору й покупки.

### Посилання на виконані завдання

- Репозиторій власного веб-застосунку (GitHub): [посилання](https://github.com/pliffdax/IO-35_appWEB-StepanovOleksandr-FIOT-2025)
- Власний веб-застосунок (Жива сторінка): [посилання](https://pliffdax.github.io/IO-35_appWEB-StepanovOleksandr-FIOT-2025/)
- Репозиторій звітного HTML-документа (GitHub): [посилання](https://github.com/pliffdax/IO-35_appRECORD-StepanovOleksandr-FIOT-2025)
- Звітний HTML-документ (Жива сторінка): [посилання](https://pliffdax.github.io/IO-35_appRECORD-StepanovOleksandr-FIOT-2025/)
- Репозиторій самостійної роботи №1 (GitHub): [посилання](https://github.com/pliffdax/IO-35_INDEPENDENT-StepanovOleksandr-FIOT-2025)
- Самостійна робота №1 (Жива сторінка): [посилання](https://pliffdax.github.io/IO-35_INDEPENDENT-StepanovOleksandr-FIOT-2025/)

---

## Опис предметного середовища та бізнес-логіки

**Предметна галузь:** інтернет-магазин квітів “Flower Design”. Сайт надає каталог букетів і кімнатних рослин, інформацію про компанію, контактні дані та можливість оформити замовлення онлайн.

### Структура веб-застосунку

- **Головна сторінка** — вітальний блок і коротка інформація.
- **Каталог** — перелік букетів/товарів з назвою, зображенням, ціною й описом.
- **Про нас** — відомості про компанію та послуги.
- **Відгуки** — перегляд і додавання відгуків.
- **Контакти** — адреса, графік роботи, телефони/пошта.

### Сценарій взаємодії (бізнес-логіка)

1. Користувач відкриває сайт і переходить у **Каталог**.
2. Ознайомлюється з букетами та обирає потрібний товар.
3. Заповнює форму замовлення (ПІБ, телефон, дата/адреса доставки, примітки).
4. Магазин отримує замовлення та підтверджує його (наприклад, телефоном).
5. Кур’єр доставляє букет у зазначений час.
6. Після отримання користувач може залишити відгук на сайті.

### Функціональні вимоги

- Відображення каталогу товарів з цінами, фото та описами.
- Перегляд детальної інформації про букет.
- Форма оформлення замовлення.
- Форма додавання відгуку.
- Розділи «Про нас» і «Контакти» доступні з головної навігації.
- Адаптивна верстка для ПК і мобільних пристроїв.

### Нефункціональні вимоги

- Простий, інтуїтивний інтерфейс.
- Час завантаження сторінки — орієнтовно до 3 секунд.
- Коректна передача даних із форм.
- Підтримка сучасних браузерів (Chrome, Firefox, Edge, Safari).
- Використання якісних зображень товарів.

### Стек технологій

- **HTML5** — семантична розмітка сторінок і контент-блоків.
- **CSS3** — стилізація, сітка/флекс-верстка, адаптивність (media queries).
- **JavaScript (Vanilla)** — навігація, генерація оглавлення, плавний скрол, взаємодія з формами.
- **Git + GitHub** — контроль версій.
- **GitHub Pages** — публікація статичного звіту/сайту.
- **Assets** — зображення товарів та іконки (каталоги зі статичними файлами).

---

## Структура документа

Нижче наведено узагальнену структуру HTML для двох сторінок проєкту — **index.html** (Головна) та **about.html** (Про нас). Це спрощені DOM-скелети без стилів і скриптів, які демонструють розміщення основних блоків: `header` з логотипом і навігацією, `main` із ключовими секціями, а також `footer` з контактами.

### 1) Структура сторінки `index.html` (Головна)

```html
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flower Design — Головна</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- ШАПКА -->
  <header>
    <div class="logo">
      <img src="assets/images/logo.png" alt="Flower Design logo">
    </div>
    <nav>
      <ul>
        <li><a href="index.html">Каталог</a></li>
        <li><a href="about.html">Про нас</a></li>
        <li><a href="#custom">Збери букет</a></li>
        <li><a href="#contacts">Контакти</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- HERO БЛОК -->
    <section id="hero">
      <div class="hero-text">
        <h2>Букет із кущових троянд "Довгоочікуване щастя"</h2>
        <p>Ніжний та витончений шик у букеті з троянд — гарний вибір для коханої людини</p>
      </div>
      <div class="hero-image">
        <img src="assets/images/bouquet 1.png" alt="Букет із троянд">
      </div>
    </section>

    <!-- КАТЕГОРІЇ -->
    <section id="categories">
      <div class="category">
        <img src="assets/images/bouquets.png" alt="Букети">
        <p>Букети</p>
      </div>
      <div class="category">
        <img src="assets/images/natural_flowers.png" alt="Живі квіти">
        <p>Живі квіти</p>
      </div>
      <div class="category">
        <img src="assets/images/own_bouquet.png" alt="Створи свій букет">
        <p>"Свій" букет</p>
      </div>
    </section>

    <!-- ПРО НАС -->
    <section id="about-preview">
      <h2>Про нас</h2>
      <div class="about-container">
        <div class="about-text">
          <p>
            Яких квітів тут лише немає! І садові, і польові, і кімнатні у глиняних горщиках.
            Тут представлена велика колекція кімнатних рослин: кактуси, фікуси, фіалки та багато інших.
          </p>
        </div>
        <div class="about-image">
          <img src="assets/images/women.png" alt="Наша команда">
        </div>
      </div>
    </section>

    <!-- КАТАЛОГ (ТАБЛИЦЯ) -->
    <section id="catalog">
      <h2>Каталог</h2>
      <table>
        <thead>
          <tr>
            <th>Фото</th>
            <th>Назва</th>
            <th>Опис</th>
            <th>Ціна, грн</th>
          </tr>
        </thead>
        <tbody>
          <!-- рядки каталогу -->
        </tbody>
      </table>
    </section>

    <!-- ВІДГУКИ -->
    <section id="feedback">
      <h2>Відгуки</h2>
      <!-- список відгуків + форма -->
    </section>
  </main>

  <!-- ФУТЕР -->
  <footer id="contacts">
    <!-- контакти + інформаційні блоки -->
  </footer>
</body>
</html>
```

### 2) Структура сторінки `about.html` (Про нас)

```html
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Про проект — Flower Design</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>Про проект Flower Design</h1>
    <nav>
      <a href="index.html">Головна</a>
      <a href="#logic">Бізнес-логіка</a>
      <a href="#requirements">Вимоги</a>
    </nav>
  </header>

  <main>
    <section id="domain">
      <h2>Предметна область</h2>
      <p>Flower Design — це онлайн-магазин квітів, який дозволяє користувачам зручно переглядати каталог букетів та рослин,
      робити замовлення онлайн та отримувати доставку в короткі терміни.</p>
    </section>

    <section id="logic">
      <h2>Бізнес-логіка (сценарій)</h2>
      <ol>
        <li>Користувач відкриває сайт.</li>
        <li>Переглядає каталог квітів та рослин.</li>
        <li>Вибирає потрібний букет.</li>
        <li>Заповнює форму замовлення.</li>
        <li>Отримує підтвердження замовлення від менеджера.</li>
        <li>Кур’єр доставляє замовлення клієнту у вказаний час.</li>
        <li>Користувач залишає відгук про якість обслуговування.</li>
      </ol>
    </section>

    <section id="requirements">
      <h2>Функціональні вимоги</h2>
      <ul>
        <li>Перегляд каталогу з описами та цінами.</li>
        <li>Відображення сторінки деталей товару.</li>
        <li>Форма для оформлення замовлення.</li>
        <li>Можливість залишити відгук.</li>
        <li>Розділи "Про нас" та "Контакти".</li>
      </ul>
    </section>
  </main>

  <footer>
    <p>© 2025 Flower Design</p>
  </footer>
</body>
</html>
```

---

## Приклади реалізації елементів (код + результат)

### HTML-код таблиці каталогу

Нижче наведено приклад семантичної таблиці каталогу букетів із заголовком, групами колонок і підсумком.

```html
<table class="catalog-table">
  <caption>Каталог букетів Flower Design</caption>

  <colgroup>
    <col style="width: 120px;" />   <!-- Фото -->
    <col style="width: 22%;" />     <!-- Назва -->
    <col />                         <!-- Опис -->
    <col style="width: 120px;" />   <!-- Ціна -->
  </colgroup>

  <thead>
    <tr>
      <th scope="col">Фото</th>
      <th scope="col">Назва</th>
      <th scope="col">Опис</th>
      <th scope="col">Ціна, грн</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <img src="assets/images/bouquet_cart1 1.png" alt="Ніжна свіжість — троянди та лілії" />
      </td>
      <td>Ніжна свіжість</td>
      <td>Троянди та лілії</td>
      <td>445</td>
    </tr>
    <tr>
      <td>
        <img src="assets/images/bouquet_cart2 1.png" alt="Сорбет — хризантеми та троянди" />
      </td>
      <td>Сорбет</td>
      <td>Хризантеми та троянди</td>
      <td>450</td>
    </tr>
    <tr>
      <td>
        <img src="assets/images/bouquet_cart3 1.png" alt="Yellow Song — соняшники та солідаго" />
      </td>
      <td>Yellow Song</td>
      <td>Соняшники та солідаго</td>
      <td>455</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="4">Ціни орієнтовні та можуть відрізнятися залежно від наявності.</td>
    </tr>
  </tfoot>
</table>
```

Результат відображення таблиці:

![Таблиця каталогу](/assets/labs/lab-1/table.jpg)

---

### HTML-код зображень

#### Зображення №1 (Hero)

```html
<div class="hero-image">
  <img src="assets/images/bouquet 1.png" alt="Букет із троянд">
</div>
```

Зовнішній вигляд (скріншот):

![Hero-зображення](/assets/labs/lab-1/img1.png)

---

#### Зображення №2 (Категорія)

```html
<section id="categories">
  <div class="category">
    <img src="assets/images/bouquets.png" alt="Букети">
    <p>Букети</p>
  </div>
</section>
```

Зовнішній вигляд (скріншот):

![Блок категорії](/assets/labs/lab-1/img2.png)

---

#### Зображення №3 (Про нас)

```html
<section id="about-preview">
  <div class="about-image">
    <img src="assets/images/women.png" alt="Наша команда">
  </div>
</section>
```

Зовнішній вигляд (скріншот):

![Блок «Про нас»](/assets/labs/lab-1/img3.png)

---

### HTML-код форми (Відгуки)

```html
<form class="feedback-form">
  <label>Ваше ім'я:
    <input type="text" name="name" required>
  </label>
  <label>Ваш відгук:
    <textarea name="review" required></textarea>
  </label>
  <button type="submit">Відправити</button>
</form>
```

Зовнішній вигляд (скріншот):

![Форма відгуку](/assets/labs/lab-1/form.png)

---

## Висновки

У ході оформлення звіту для “Flower Design” було вибудовано чітку структуру сторінок, застосовано семантичну HTML-розмітку та додано приклади таблиць, зображень і форми, що відтворюють реальний вміст проєкту. Створений звіт є цілісним, зрозумілим та придатним до публікації як статичний сайт.
