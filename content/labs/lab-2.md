## Тема, Мета, Місце розташування сайту, звіту


**Тема:** «Каскадні таблиці стилів. Селектори, ідентифікатори. Стильове оформлення текстових елементів в HTML-документах.»


**Мета:** Набути практичних навичок роботи з каскадними таблицями стилів (CSS), опанувати різні типи селекторів — тегу, класу, ідентифікатора, атрибутні та комбіновані; навчитися оформлювати текстові елементи, таблиці, списки, фони й контури в HTML-документах. Ознайомитися з принципами каскадування та спадкування стилів.



### Посилання на виконані завдання


- Репозиторій власного веб-застосунку (GitHub): [посилання](https://github.com/pliffdax/IO-35_appWEB-StepanovOleksandr-FIOT-2025)
- Власний веб-застосунок (Жива сторінка): [посилання](https://pliffdax.github.io/IO-35_appWEB-StepanovOleksandr-FIOT-2025/)
- Репозиторій звітного HTML-документа (GitHub): [посилання](https://github.com/pliffdax/IO-35_appRECORD-StepanovOleksandr-FIOT-2025)
- Звітний HTML-документ (Жива сторінка): [посилання](https://pliffdax.github.io/IO-35_appRECORD-StepanovOleksandr-FIOT-2025/)
- Репозиторій самостійної роботи №1 (GitHub): [посилання](https://github.com/pliffdax/IO-35_INDEPENDENT-StepanovOleksandr-FIOT-2025)
- Самостійна робота №1 (Жива сторінка): [посилання](https://pliffdax.github.io/IO-35_INDEPENDENT-StepanovOleksandr-FIOT-2025/)





## Способи підключення стилів


Існують кілька способів підключення таблиць стилів CSS до HTML-сторінки. Найпоширенішими є:
 **зовнішні стилі**, **таблиці стилів документу (внутрішні стилі)**
 та **вбудовані (inline-стилі)**.



### 1. Зовнішні стилі


Застосовуються за допомогою елемента `<link>`, який розміщують усередині елемента
 `<head>`:


```
`<head>`
  ...
  <link rel="stylesheet" type="text/css" href="css/style.css">
  ...
`</head>`
```


Коли браузер зустрічає цей тег у HTML-документі, він завантажує вказаний CSS-файл і застосовує стилі,
 що містяться в ньому. Такий підхід зручний тим, що спільні стилі для декількох сторінок можна винести
 в окремий файл і підключати його у кожному документі за допомогою тега `<link>`,
 не дублюючи CSS-код.



### 2. Таблиці стилів документу (внутрішні стилі)


Такі стилі розташовуються безпосередньо в HTML-документі й застосовуються лише до нього.
 CSS-правила записуються між тегами `<style>`, зазвичай у секції
 `<head>`:


```
<style type="text/css">
  p {
    font-size: 16px;
    color: #222222;
  }
</style>
```


Тег `<style>` дозволяє швидко визначити стилі для окремої сторінки, проте при великій
 кількості стилів код стає громіздким, тому його зазвичай замінюють зовнішнім CSS-файлом.



### 3. Вбудовані (inline) стилі


Якщо потрібно задати стиль лише для одного елемента, можна скористатися атрибутом
 `style` безпосередньо в тегу HTML:


```
<p style="color: black">Абзац із літерами чорного кольору</p>

<p style="color: white; font-weight: bold">
  Абзац із кількома CSS-властивостями
</p>
```


Усередині атрибуту `style` можна вказати кілька властивостей, розділених крапкою з комою.
 Inline-стилі зручні для тестування або локальних змін, але не рекомендуються для великих проєктів.



### Підключення стилів у моїй роботі


Під час розробки власного веб-додатка **«Flower Design»** я застосував метод
 підключення стилів за допомогою тега `<link>`.
 Для цього було створено окремий файл `style.css`, у якому розміщено всі необхідні
 CSS-правила для елементів сайту. Після цього тег `<link>` було додано в секцію
 `<head>` HTML-документа, а шлях до файлу вказано в атрибуті `href`:


```
<link rel="stylesheet" href="css/styles.css">
```


Такий спосіб дозволив зберігати стилі в окремому файлі, що значно полегшило їх редагування,
 підтримку та підвищило читабельність коду всього веб-додатка.





## СЕЛЕКТОРИ


У каскадних таблицях стилів (CSS) селектори визначають, до яких елементів HTML буде застосовано певні стилі.
 У моїй роботі використано селектори тегів, класів, ідентифікаторів, а також комбіновані, атрибутні та з
 псевдокласами/псевдоелементами. Нижче наведено приклади з реального CSS цього проєкту.



### Селектори тегу


Селектори тегів застосовуються до всіх елементів певного типу. У цьому проєкті вони використовуються для
 базового оформлення сторінки.


```
body {
  margin: 0;
  font-family: "Source Code Pro", "Segoe UI", sans-serif;
}
```


Це задає системний шрифт та скидає зовнішні відступи документа.



![Базове оформлення тіла сторінки (body)](/assets/labs/lab-2/selector-tag.png)


Рис. 1 — Селектор тегу: базові стилі для `<body>`.


### Селектори класу


Класові селектори застосовуються до груп елементів, яким потрібне однакове оформлення.


```
.main-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: var(--gap);
}

.main-nav a {
  position: relative;
  display: inline-block;
  padding: 6px 0;
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}
```


Тут клас `.main-nav` керує зовнішнім виглядом списку навігації та посилань у ньому.



![Оформлення меню навігації через клас .main-nav](/assets/labs/lab-2/selector-class.png)


Рис. 2 — Селектори класу: список і посилання в головному меню.


### Селектори ідентифікаторів


Ідентифікатор використовується для унікальних секцій сторінки (hero, каталог, відгуки).


```
#hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0;
  background-color: #fff;
}

#catalog {
  padding: 0 60px 60px;
  background: #fff;
}

#feedback {
  padding: 60px 0 0;
  background: #EEF2FA;
}
```


Так швидко налаштовується макет великих блоків сторінки.



![Секції hero, catalog, feedback з оформленням через ID](/assets/labs/lab-2/selector-id.png)


Рис. 3 — Селектори ідентифікаторів: розкладка та фон секцій.


### Інші селектори



### 1. Комбіновані селектори


Комбіновані селектори звертаються до вкладених елементів та їхніх станів.


```
.category .btn {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--header-bg);
  color: #fff;
  font-weight: 600;
}

#catalog > h2 {
  margin: 0 0 24px;
  font-size: 2rem;
  font-weight: 700;
  color: #2f2b2b;
}
```


У першому прикладі селектор звертається до елемента з класом `.btn` всередині блоку
 `.category`. У другому — оформлюється заголовок, який є безпосередньою дитиною секції `#catalog`.



![Кнопка в категоріях та заголовок каталогу](/assets/labs/lab-2/selector-combined.png)


Рис. 4 — Комбіновані селектори: .category .btn та #catalog > h2.


### 2. Атрибутні селектори


Атрибутні селектори вибирають елементи за значенням атрибуту.


```
.main-nav a[aria-current="page"] {
  font-weight: 700;
}
.main-nav a[aria-current="page"]::after {
  opacity: 1;
  transform: scaleX(1);
}
```


Це підсвічує активний пункт меню без додаткових класів.



![Активний пункт меню за aria-current](/assets/labs/lab-2/selector-attr.png)


Рис. 5 — Атрибутний селектор для позначення активної сторінки.


### 3. Псевдокласи та псевдоелементи


Використовуються для станів та декоративних елементів без зміни HTML.


```
.main-nav a::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: -3px;
  height: 2px;
  background: var(--underline);
  opacity: 0;
  transform: scaleX(0.6);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.main-nav a:hover::after {
  opacity: 1;
  transform: scaleX(1);
}

.feedback-form button:hover {
  box-shadow: 0 6px 14px rgba(0,0,0,.2);
  transform: translateY(-1px);
}

.feedback-form input::placeholder,
.feedback-form textarea::placeholder {
  color: #8a8fa3;
  opacity: 1;
}
```


Підкреслення посилання при наведенні та стилізація плейсхолдерів реалізовані без додаткової розмітки.



![Hover-ефект у меню та стилізація placeholder](/assets/labs/lab-2/selector-pseudo.png)


Рис. 6 — Псевдокласи і псевдоелементи у меню та формі.


### 4. Використання змінних (custom properties)


Змінні у `:root` дозволяють централізовано керувати кольорами, відступами та тінями і перевикористовувати їх у різних місцях.


```
:root {
  --header-bg: #b9c7e6;
  --header-shadow: rgba(0, 0, 0, 0.15);
  --text: #ffffff;
  --underline: #ffffff;
  --gap: 72px;
}

.site-header {
  background: var(--header-bg);
  box-shadow: 0 4px 8px var(--header-shadow);
}
```


Шапка сайту наслідує кольори й тіні без хардкоду значень у кожному правилі.



![Шапка сайту з кольорами з :root](/assets/labs/lab-2/selector-root.png)


Рис. 7 — CSS-змінні: застосування у шапці.


### 5. Комбінація класу з тегом (на прикладі зображень)


У проєкті немає глобальних стилів для всіх `<img>`, натомість стилізуються конкретні випадки:


```
.logo img {
  display: block;
  height: 48px;
  width: auto;
}

.category img {
  display: block;
  width: 100%;
  height: auto;
}
```


Це дозволяє точно керувати відображенням логотипу та зображень у категоріях без впливу на інші картинки.



![Стилізація зображень логотипу та категорій](/assets/labs/lab-2/selector-class-tag.png)


Рис. 8 — Комбінований селектор (клас + тег): .logo img і .category img.

**Підсумок:** використано повний набір базових селекторів і їхніх комбінацій, що забезпечує охайну структуру стилів та зручну підтримку.





## CSS: Шрифти, Текст, Таблиці, Фон, Контур, Списки, CSS просунутий



### Шрифти і текст


У проєкті підключено шрифт `Source Code Pro` з Google Fonts і застосовано до тіла сторінки.
 Заголовки й описи у hero-блоці мають збільшений розмір та міжрядковий інтервал для читабельності.


```
/* HTML (у `<head>`) */
<link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&display=swap" rel="stylesheet">

/* CSS */
body {
  margin: 0;
  font-family: "Source Code Pro", "Segoe UI", sans-serif;
}

.hero-text h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #2f2b2b;
  line-height: 1.3;
  margin-bottom: 20px;
}

.hero-text p {
  font-size: 1.05rem;
  color: #5e5e5e;
  line-height: 1.6;
}
```



### Фон


Для шапки сайту використано фоновий колір і тінь з custom-properties. Секції каталогу/відгуків мають контрастний фон.


```
:root {
  --header-bg: #b9c7e6;
  --header-shadow: rgba(0, 0, 0, 0.15);
}

.site-header {
  background: var(--header-bg);
  box-shadow: 0 4px 8px var(--header-shadow);
}

#catalog { background: #fff; }
#feedback { background: #EEF2FA; }
```



### Контур/рамка та стани елементів


Поля форми мають м’які рамки і фон. Кнопка отримує тінь і невелике підняття при наведенні.


```
.feedback-form input,
.feedback-form textarea {
  width: 100%;
  border: 1px solid #d7deee;
  border-radius: 8px;
  padding: 12px 14px;
  background: rgba(185,199,230,.25);
  color: #2f2b2b;
  font: inherit;
  outline: none;
}

.feedback-form button {
  background: #FFC2C7;
  color: #fff;
  border: 0;
  border-radius: 8px;
  padding: 12px 32px;
  font-weight: 500;
  box-shadow: 0 4px 10px rgba(0,0,0,.18);
  transition: box-shadow .1s ease, transform .1s ease;
}

.feedback-form button:hover {
  box-shadow: 0 6px 14px rgba(0,0,0,.2);
  transform: translateY(-1px);
}
```



### Таблиці / Каталог


У якості сучасної альтернативи таблиці використано гнучку сітку карток товарів (flex-layout) з тінями та hover-ефектом.


```
.catalog-grid{
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
}

.catalog-item{
  flex: 1 1 calc((100% - 2 * 28px) / 3);
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow:
    0 6px 14px rgba(0,0,0,0.08),
    0 10px 20px rgba(255,105,135,0.18);
  transition: transform .15s ease, box-shadow .15s ease;
}

.catalog-item:hover{
  transform: translateY(-2px);
  box-shadow:
    0 10px 20px rgba(0,0,0,0.1),
    0 14px 26px rgba(255,105,135,0.22);
}
```



Опційно: приклад базової таблиці
```
table.demo {
  width: 100%;
  border-collapse: collapse;
}
table.demo th, table.demo td {
  border: 1px solid #e5e7ef;
  padding: 10px 12px;
  text-align: left;
}
table.demo thead th {
  background: #f6f7fc;
  font-weight: 700;
}
```




### Списки


Головне меню реалізовано як список без маркерів, вирівняний у ряд і з проміжками через CSS-змінну `--gap`.


```
.main-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: var(--gap);
}
.main-nav a {
  position: relative;
  color: var(--text);
  text-decoration: none;
}
.main-nav a::after { /* підкреслення при наведенні */
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: -3px;
  height: 2px; background: var(--underline);
  opacity: 0; transform: scaleX(0.6);
  transition: opacity .2s ease, transform .2s ease;
}
.main-nav a:hover::after { opacity: 1; transform: scaleX(1); }
```



### CSS просунутий


Використано плавні переходи, тіні, псевдоелементи для підкреслення посилань та адаптивність через media-запити.


```
/* Переходи та псевдоелементи у меню */
.main-nav a { transition: all 0.2s ease; }
.main-nav a::after {
  content: ""; position: absolute; left:0; right:0; bottom:-3px; height:2px;
  background: var(--underline); opacity:0; transform: scaleX(0.6);
  transition: opacity .2s ease, transform .2s ease;
}
.main-nav a:hover::after { opacity:1; transform: scaleX(1); }

/* Hover-ефекти на картках каталогу */
.catalog-item { transition: transform .15s ease, box-shadow .15s ease; }
.catalog-item:hover { transform: translateY(-2px); }

/* Адаптивність блоків features */
@media (max-width: 1100px){ .feature{ width: 31%; margin: 1% 1%; } }
@media (max-width: 900px){  .feature{ width: 47%; margin: 1.5% 1.5%; } }
@media (max-width: 600px){  .feature{ width: 100%; margin: 8px 0; } }
```


**Підсумок:** у проєкті застосовано єдиний шрифт, типографіку, контрастні фони, акуратні рамки і тіні,
 сучасну сітку каталогу, семантичні списки та прийоми просунутого CSS (transition, псевдоелементи, адаптивність),
 що забезпечує зручність читання і приємний візуальний досвід.





## Висновки


У ході оформлення звіту для лабораторної роботи №2 було продемонстровано практичне використання каскадних таблиць стилів (CSS) для створення структурованого та естетичного веб-дизайну. У межах проєкту «Flower Design» реалізовано всі основні способи підключення стилів, використано різні типи селекторів — тегу, класу, ідентифікатора, комбіновані, атрибутні, а також селектори з псевдокласами та псевдоелементами. Наведені приклади та скриншоти ілюструють застосування властивостей шрифтів, кольорів, фону, контурів, списків і гнучкої сітки каталогу. Звіт оформлено з використанням сучасних прийомів CSS — змінних, тіней, плавних переходів і адаптивної верстки, що забезпечує цілісність, зручність сприйняття та придатність до публікації.



