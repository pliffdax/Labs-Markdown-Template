## 3.1: Тема, Мета, Місце розташування сайту, звіту

**Тема:** «Верстка веб-сторінки засобами CSS і Flexbox.»

**Мета:** Набути навичок створення гнучких макетів сторінок із використанням технології Flexbox, виконати структурну верстку компонентів сайту, реалізувати головну сторінку, навігацію, hero-секцію, категорії, каталог, футер тощо.

#### Посилання на виконані завдання

* Репозиторій власного веб-застосунку (GitHub):
 [посилання](https://github.com/pliffdax/IO-35_appWEB-StepanovOleksandr-FIOT-2025) 
* Власний веб-застосунок (Жива сторінка):
 [посилання](https://pliffdax.github.io/IO-35_appWEB-StepanovOleksandr-FIOT-2025/) 
* Репозиторій звітного HTML-документа (GitHub): 
 [посилання](https://github.com/pliffdax/IO-35_appRECORD-StepanovOleksandr-FIOT-2025) 
* Звітний HTML-документ (Жива сторінка): 
 [посилання](https://pliffdax.github.io/IO-35_appRECORD-StepanovOleksandr-FIOT-2025/) 
* Репозиторій самостійної роботи №1 (GitHub): 
 [посилання](https://github.com/pliffdax/IO-35_INDEPENDENT-StepanovOleksandr-FIOT-2025) 
* Самостійна робота №1 (Жива сторінка): 
 [посилання](https://pliffdax.github.io/IO-35_INDEPENDENT-StepanovOleksandr-FIOT-2025/) 

## Способи підключення стилів

 Існують кілька способів підключення таблиць стилів CSS до HTML-сторінки. Найпоширенішими є:
 **зовнішні стилі**, **таблиці стилів документу (внутрішні стилі)**
 та **вбудовані (inline-стилі)**.
 

#### 1. Зовнішні стилі

 Застосовуються за допомогою елемента `<link>`, який розміщують усередині елемента
 `<head>`:
 

```
<head>
  ...
  <link rel="stylesheet" type="text/css" href="css/style.css">
  ...
</head>

```

 Коли браузер зустрічає цей тег у HTML-документі, він завантажує вказаний CSS-файл і застосовує стилі,
 що містяться в ньому. Такий підхід зручний тим, що спільні стилі для декількох сторінок можна винести
 в окремий файл і підключати його у кожному документі за допомогою тега `<link>`,
 не дублюючи CSS-код.
 

#### 2. Таблиці стилів документу (внутрішні стилі)

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
 

#### 3. Вбудовані (inline) стилі

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
 

#### Підключення стилів у моїй роботі

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
 

## Семантична структура сторінки

 Для побудови каркаса використано семантичні елементи HTML5:
 `<header>`, `<main>`, `<section>`, `<footer>`.
 Це підвищує доступність і зрозумілість розмітки для пошукових систем та assistive-технологій.
 

```
<header class="site-header">...</header>

<main>
  <section id="hero">...</section>
  <section id="categories">...</section>
  <section id="catalog">...</section>
</main>

<footer id="contacts">...</footer>

```

![Семантична структура сторінки Flower Design](/assets/labs/lab-3/structure.png)
Рис. 1 — Семантична структура HTML-документа із секціями `<header>`, `<main>` та `<footer>`.

 Кожен розділ групує логічно споріднений контент (hero, категорії, каталог, контакти),
 що спрощує підтримку та адаптивну верстку.
 

#### Шапка та навігація: Flexbox і бургер-меню

 Верхня панель реалізована на Flexbox: логотип та кнопка бургера вирівнюються по краях,
 а навігація на мобільних розкривається під шапкою. Кнопка керує атрибутом
 `aria-expanded` та станом `data-state` у навігації.
 

#### HTML

```
<header class="site-header">
  <div class="container">
    <a class="logo" href="index.html">
      <img src="assets/images/logo.png" alt="Flower Design logo">
    </a>

    <button class="burger" aria-label="Меню" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>

    <nav class="main-nav" aria-label="Головна навігація" data-state="closed">
      <ul>
        <li><a href="index.html" aria-current="page">Каталог</a></li>
        <li><a href="about.html">Про нас</a></li>
        <li><a href="#custom">Збери букет</a></li>
        <li><a href="#contacts">Контакти</a></li>
      </ul>
    </nav>
  </div>
</header>

```

#### CSS (фрагмент)

```
@media (max-width: 900px) {
  .site-header { position: sticky; top: 0; z-index: 100; }
  .site-header .container {
    display: flex; align-items: center; justify-content: space-between;
    padding: 8px 16px; min-height: 64px; position: relative;
  }
  .burger { display: inline-flex; position: relative; inline-size: 40px; block-size: 40px; margin-left: auto; }
  .burger span { position: absolute; inset-inline: 8px; block-size: 2px; background: currentColor; }
  .main-nav {
    position: absolute; left: 0; right: 0; top: 100%;
    background: #0b1020; border-top: 1px solid #1f2a44;
    transform: translateY(-120%); transition: transform .3s ease, opacity .2s ease;
    opacity: 0; pointer-events: none; z-index: 105;
  }
  .main-nav[data-state="open"] { transform: translateY(0); opacity: 1; pointer-events: auto; }
}

```

#### JavaScript (логіка перемикання)

```
(function(){
  const btn = document.querySelector('.burger');
  const nav = document.querySelector('.main-nav');
  if(!btn || !nav) return;

  function toggle(){
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.dataset.state = open ? 'closed' : 'open';
    document.body.style.overflow = (!open && matchMedia('(max-width:900px)').matches) ? 'hidden' : '';
  }
  btn.addEventListener('click', toggle);
  nav.addEventListener('click', e => {
    if(e.target.closest('a')) { btn.setAttribute('aria-expanded','false'); nav.dataset.state='closed'; document.body.style.overflow=''; }
  });
  addEventListener('resize', () => {
    if (matchMedia('(min-width:901px)').matches) { document.body.style.overflow=''; nav.dataset.state='closed'; btn.setAttribute('aria-expanded','false'); }
  });
})();

```

![Шапка сайту на десктопі](/assets/labs/lab-3/header-desktop.png)
Рис. 2 — Вигляд шапки сайту та горизонтальної навігації на десктопі.

![Бургер-меню на мобільному](/assets/labs/lab-3/header-mobile.png)
Рис. 3 — Розкрите бургер-меню на мобільному пристрої.

 На мобільних пристроях меню розкривається плавно під шапкою, блокує прокручування фону
 та закривається по кліку на пункт навігації. На десктопі відображається звичайна горизонтальна
 навігація без бургера.
 

#### Hero-секція: компоновка на Flexbox

 Головний блок сторінки (#hero) реалізовано як гнучку секцію з двома підблоками:
 зображення та текст. На десктопі вони розташовані поруч, а на мобільних — вертикально,
 причому зображення відображається зверху, а текст — під ним.
 

#### HTML

```
<section id="hero">
  <div class="hero-text">
    <h2>Букет із кущових троянд "Довгоочікуване щастя"</h2>
    <p>Ніжний та витончений шик у букеті з троянд — гарний вибір для коханої людини</p>
  </div>
  <div class="hero-image">
    <img src="assets/images/bouquet-desktop.jpg" alt="Букет із троянд">
  </div>
</section>

```

#### CSS (фрагмент)

```
#hero{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:60px 0}
#hero .hero-text{max-width:520px}
#hero .hero-image img{display:block;width:100%;height:auto}

@media (max-width:900px){
  #hero{flex-direction:column;align-items:center;justify-content:flex-start;text-align:center;padding:20px 16px 40px}
  #hero .hero-image{order:-1;display:flex;justify-content:center;align-items:flex-start;max-width:420px;width:100%}
  #hero .hero-text{margin-top:20px;padding:0 8px}
}

```

 Завдяки Flexbox макет легко адаптується під різні екрани без дублювання розмітки.
 

#### Блок «Категорії»: картки з кнопками

 Для категорій використано прості картки з фоновим зображенням та кнопкою дії.
 На мобільних пристроях кнопка залишається всередині зображення, прижата до нижнього краю.
 

#### HTML

```
<section id="categories">
  <div class="category">
    <img src="assets/images/bouquets.png" alt="Букети">
    <a class="btn" href="#">Букети</a>
  </div>
  <div class="category">
    <img src="assets/images/natural_flowers.png" alt="Живі квіти">
    <a class="btn" href="#">Живі квіти</a>
  </div>
  <div class="category">
    <img src="assets/images/own_bouquet.png" alt="Створи свій букет">
    <a class="btn" href="#">Свій букет</a>
  </div>
</section>

```

#### CSS (фрагмент)

```
#categories{text-align:center;padding:60px 0;background:#fff}
.category{display:inline-block;width:25%;margin:0 1.5%;position:relative;border-radius:8px;overflow:hidden}
.category img{display:block;width:100%;height:auto}
.category .btn{position:absolute;left:50%;bottom:28px;transform:translateX(-50%);width:160px;padding:12px 0;font-weight:600;color:#fff;background:var(--header-bg);border-radius:6px}

@media (max-width:900px){
  .category{display:block;width:90%;margin:0 auto 24px}
  .category .btn{bottom:16px;width:140px;padding:10px 0;font-size:.95rem}
}

```

![Блок категорій на десктопі](/assets/labs/lab-3/categories-desktop.png)
Рис. 4 — Категорії з кнопками на десктопній версії сайту.

![Категорії на мобільному](/assets/labs/lab-3/categories-mobile.png)
Рис. 5 — Категорії на мобільній версії (картки по одній у стовпчик).

 Кнопки залишаються читабельними на будь-якій ширині, а картки стають вертикальними на мобільних.
 

#### Каталог: адаптивна сітка (CSS Grid)

 Для каталогу застосовано CSS Grid із обмеженням максимум у три колонки на широких екранах.
 На середніх ширинах сітка автоматично переходить у дві колонки, а на мобільних — в одну.
 

#### HTML

```
<section id="catalog">
  <h2>Каталог</h2>
  <div class="catalog-grid">
    <div class="catalog-item">
      <img src="assets/images/bouquet_cart1.png" alt="Ніжна свіжість">
      <h3>Ніжна свіжість</h3>
      <div class="catalog-meta">
        <p class="desc">Троянди та лілії</p>
        <p class="price">445 грн</p>
      </div>
    </div>
    <!-- інші картки -->
  </div>
</section>

```

#### CSS (фрагмент)

```
.catalog-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr); /* максимум 3 в ряд */
  gap:28px;
  width:90%;
  max-width:1200px;
  margin:0 auto;
}
@media (max-width:1200px){
  .catalog-grid{grid-template-columns:repeat(auto-fit,minmax(260px,1fr));}
}
@media (max-width:900px){
  .catalog-grid{grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;}
}
.catalog-item img{display:block;width:100%;height:220px;object-fit:cover}
.catalog-meta{display:flex;justify-content:space-between;align-items:baseline;margin:6px 16px 16px}
.catalog-meta .price{white-space:nowrap}

```

![Каталог букетів](/assets/labs/lab-3/catalog-grid.png)
Рис. 6 — Сітка каталогу з трьома колонками на широких екранах.

 Завдяки `minmax()` і `auto-fit` сітка лишається стабільною без «дір» та
 зберігає однакову ширину карток.
 

#### Футер: колонки та адаптація

 Нижній колонтитул складається з логотипа та трьох колонок із контактами/посиланнями.
 На мобільних колонки лишаються в один ряд, але текст усередині вирівнюється ліворуч, а логотип — знизу по центру.
 

#### HTML

```
<footer id="contacts">
  <div class="footer-container">
    <div class="footer-left">
      <div class="logo"><img src="assets/images/logo.png" alt="Flower Design logo"></div>
      <p>Copyright © 2025</p>
    </div>
    <div class="footer-right">
      <div class="footer-column">...</div>
      <div class="footer-column">...</div>
      <div class="footer-column">...</div>
    </div>
  </div>
</footer>

```

#### CSS (фрагмент)

```
#contacts{background:var(--header-bg);color:#fff;padding:40px 80px 36px}
.footer-container{display:flex;justify-content:space-between;align-items:flex-start}
.footer-left{display:flex;flex-direction:column;width:25%}
.footer-right{display:flex;justify-content:space-between;width:65%}

@media (max-width:900px){
  #contacts{padding:24px 16px 20px}
  .footer-container{flex-direction:column;gap:24px}
  .footer-right{order:1;display:flex;justify-content:space-around;align-items:flex-start;flex-wrap:wrap;gap:16px}
  .footer-column{width:30%;text-align:left}
  .footer-left{order:2;align-items:center;width:100%}
  .footer-left .logo img{height:56px;margin:8px auto 0;display:block}
}

```

![Футер на десктопі](/assets/labs/lab-3/footer-desktop.png)
Рис. 7 — Футер з логотипом та трьома колонками посилань на десктопі.

![Футер на мобільному](/assets/labs/lab-3/footer-mobile.png)
Рис. 8 — Адаптивний футер на мобільному (логотип по центру, текст ліворуч).

 Така розкладка зручна для читання на мобільних і зберігає структуру на десктопах.
 

## Результати роботи

 Головна сторінка сайту «Flower Design» зверстана семантично, підтримує адаптивність:
 бургер-меню на мобільних, вертикальний hero-блок, картки категорій з кнопками,
 каталог на CSS Grid із обмеженням до трьох колонок та адаптивний футер.
 Інтерфейс коректно відображається в діапазоні від мобільних пристроїв до десктопів.
 

## 3.2: Тема, Мета, Місце розташування сайту, звіту

**Тема:** «Адаптивна верстка. Використання медіа-запитів CSS3.»

**Мета:** Освоїти прийоми адаптації веб-інтерфейсу під різні пристрої (desktop, tablet, mobile), створити бургер-меню, адаптивну сітку контенту, коректно реалізувати поведінку елементів при зміні розміру екрана.

## Метатег viewport і базові брейкпоінти

 Для коректного масштабування сторінки на мобільних пристроях використано метатег
 `viewport`. Адаптацію виконано через медіа-запити з основним брейкпоінтом
 **900px** (mobile-first підхід для ключових компонентів).
 

#### Фрагмент HTML

```
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ...
</head>
```

#### Базові медіа-запити

```
@media (max-width: 900px){ /* мобільна адаптація */ }
@media (min-width: 901px){ /* поведінка для десктопів */ }
```

![Перевірка медіа-запитів у DevTools](/assets/labs/lab-3/devtools-breakpoints.png)
Рис. 1 — Перевірка роботи медіа-запитів у інструментах розробника.

 Вибір 900px зумовлений тим, що на цьому порозі зручно перемикати розкладку навігації,
 hero-секції, карток категорій, каталогу та футера.
 

## Адаптивне Бургер-меню

 На мобільних екранах навігація ховається під шапкою та розкривається кнопкою «бургер».
 Стан меню контролюється атрибутами `aria-expanded` (кнопка) та
 `data-state` (контейнер навігації), що покращує доступність.
 

#### CSS (мобільний фрагмент)

```
@media (max-width: 900px){
  .site-header{ position: sticky; top:0; z-index:100; }
  .site-header .container{
    position:relative; display:flex; align-items:center; justify-content:space-between;
    padding:8px 16px; min-height:64px;
  }
  .burger{ display:inline-flex; position:relative; inline-size:40px; block-size:40px; }
  .main-nav{
    position:absolute; left:0; right:0; top:100%;
    background:#0b1020; border-top:1px solid #1f2a44;
    transform:translateY(-120%); opacity:0; pointer-events:none;
    transition:transform .3s ease, opacity .2s ease; z-index:105;
  }
  .main-nav[data-state="open"]{ transform:translateY(0); opacity:1; pointer-events:auto; }
}
```

#### JS (перемикач)

```
(function(){
  const btn=document.querySelector('.burger'); const nav=document.querySelector('.main-nav');
  if(!btn||!nav) return;
  const toggle=()=>{ const open=btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.dataset.state=open?'closed':'open';
    document.body.style.overflow=(!open && matchMedia('(max-width:900px)').matches)?'hidden':'';
  };
  btn.addEventListener('click', toggle);
  nav.addEventListener('click', e=>{ if(e.target.closest('a')){ btn.setAttribute('aria-expanded','false'); nav.dataset.state='closed'; document.body.style.overflow=''; }});
  addEventListener('resize', ()=>{ if(matchMedia('(min-width:901px)').matches){ document.body.style.overflow=''; nav.dataset.state='closed'; btn.setAttribute('aria-expanded','false'); }});
})();
```

![Відкрите бургер-меню](/assets/labs/lab-3/burger-open.png)
Рис. 2 — Відкрите бургер-меню з чотирма пунктами навігації.

 При відкритому меню фон блокується від прокрутки, при переході на десктоп скрол повертається.
 

## Адаптивність для мобільної версії сайту

 Вносимо зміни для покращення відображення ключових блоків сайту на смартфонах, забезпечуючи зручність взаємодії користувачів. Адаптуємо хедер, категорії, каталог і футер під мобільні екрани.
 

#### Hero: мобільне перевпорядкування та підстановка зображень

 На мобільних зображення hero відображається зверху, текст — нижче. Для підстановки відповідного
 зображення (desktop або mobile) замість елемента `<picture>` використано
 JavaScript-скрипт, який змінює джерело зображення в залежності від ширини екрана.
 

#### HTML (базова структура)

```
<section id="hero">
  <div class="hero-text">...</div>
  <div class="hero-image">
    <img src="assets/images/bouquet-desktop.png" alt="Букет із троянд">
  </div>
</section>

```

#### JS (динамічна підстановка зображення)

```
document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('#hero .hero-image img');

  function updateHeroImage() {
    if (window.innerWidth <= 900) {
      img.src = 'assets/images/bouquet-mobile.png';
    } else {
      img.src = 'assets/images/bouquet-desktop.png';
    }
  }

  updateHeroImage();
  window.addEventListener('resize', updateHeroImage);
});

```

#### CSS (мобільна компоновка)

```
@media (max-width:900px){
  #hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 16px 40px;
    text-align: center;
  }

  #hero .hero-image {
    order: -1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 420px;
    width: 100%;
  }

  #hero .hero-image img {
    display: block;
    width: 100%;
    height: auto;
  }
}
```

![Hero після адаптації](/assets/labs/lab-3/hero-mobile-new.png)
Рис. 3 — Hero-секція після адаптації: при ширині ≤900px автоматично підставляється мобільне зображення.

 Такий підхід через JavaScript дозволяє динамічно оновлювати зображення під час зміни ширини вікна,
 забезпечуючи коректні пропорції без складних CSS-трансформацій і збереження оптимальної якості
 зображення для кожного пристрою.
 

#### Категорії: кнопка всередині зображення на мобільних

 У мобільній версії кнопка дії залишається всередині картки та прижата до нижнього краю зображення.
 

#### CSS (мобільний фрагмент)

```
@media (max-width:900px){
  .category{ display:block; width:90%; margin:0 auto 24px; position:relative; overflow:hidden; border-radius:8px; }
  .category img{ display:block; width:100%; height:auto; }
  .category .btn{
    position:absolute; left:50%; bottom:16px; transform:translateX(-50%);
    width:140px; padding:10px 0; font-size:.95rem; border-radius:6px; background:var(--header-bg); color:#fff;
  }
}
```

![Кнопка всередині картки](/assets/labs/lab-3/categories-btn-mobile.png)
Рис. 4 — Кнопка «Свій букет» розміщена всередині зображення на мобільній версії.

 Так користувач одразу бачить дію, не скролюючи нижче зображення.
 

#### Каталог: обмеження максимум 3 колонки + автоадаптація

 На великих екранах кількість колонок обмежено трьома. Далі сітка автоматично переходить
 у дві та одну колонку на вужчих екранах.
 

#### CSS

```
.catalog-grid{
  display:grid; grid-template-columns:repeat(3,1fr);
  gap:28px; width:90%; max-width:1200px; margin:0 auto;
}
@media (max-width:1200px){
  .catalog-grid{ grid-template-columns:repeat(auto-fit, minmax(260px,1fr)); }
}
@media (max-width:900px){
  .catalog-grid{ grid-template-columns:repeat(auto-fit, minmax(220px,1fr)); gap:20px; }
}
.catalog-meta .price{ white-space:nowrap; } /* 450 грн — завжди в один рядок */
```

 Використання `minmax()` та `auto-fit` прибирає «дірки» в сітці та зберігає читабельність.
 

#### Футер: три колонки в ряд, текст ліворуч; логотип знизу по центру

 На мобільних три інформаційні колонки лишаються в одному ряду (з перенесенням при браку місця),
 текст усередині вирівняний по лівому краю; логотип і копірайт знаходяться нижче по центру.
 

#### CSS (мобільний фрагмент)

```
@media (max-width:900px){
  #contacts{ padding:24px 12px 20px; }
  .footer-container{ display:flex; flex-direction:column; gap:24px; }
  .footer-right{
    order:1; display:flex; justify-content:space-around; align-items:flex-start;
    flex-wrap:wrap; gap:16px; width:100%;
  }
  .footer-column{ width:30%; text-align:left; } /* текст ліворуч */
  .footer-left{
    order:2; align-items:center; justify-content:center; width:100%; text-align:center;
  }
  .footer-left .logo img{ height:56px; margin:8px auto 0; display:block; }
}
```

![Каталог на мобільному](/assets/labs/lab-3/catalog-mobile.png)
Рис. 5 — Каталог у мобільній версії: одна картка в ряду.

 Така схема зберігає швидкість сприйняття (ліве вирівнювання тексту) й брендинг внизу.
 

## Тестування в інструментах розробника

 Перевірку виконано в режимі «Responsive Design» (Zen Browser / DevTools): змінювався розмір вікна,
 емулювалися популярні пристрої (iPhone/Pixel), перевірено відкриття/закриття бургер-меню,
 перестроювання hero/категорій/каталогу, поведінка футера та відсутність горизонтального скролу.
 

#### Чек-лист

* Меню розкривається під шапкою; блокування фону працює.
* Hero: зображення зверху, текст знизу; відступи коректні.
* Категорії: кнопка всередині зображення, читабельність збережена.
* Каталог: 3→2→1 колонки; ціна не переноситься (nowrap або &nbsp;).
* Футер: три колонки в ряд, текст ліворуч; логотип внизу по центру.

## Висновки

 У процесі виконання 3.1 частини лабораторної роботи я опанував верстку на Flexbox та CSS Grid, навчився будувати адаптивні компоненти інтерфейсу з медіа-запитами. Реалізував семантичну структуру сторінки, мобільне бургер-меню та гнучкі сітки для контенту. Отриманий результат є зручним для підтримки і коректно масштабується на різних пристроях.
 

 У процесі виконання 3.2 частини лабораторної роботи я опанував практичні прийоми адаптивної верстки: медіа-запити, мобільну навігацію з підтримкою доступності, гнучкі сітки контенту та адаптивні зображення. Забезпечив коректну роботу інтерфейсу на різних пристроях, оптимізувала розкладку без зайвих перевантажень CSS. Отриманий результат повністю відповідає вимогам.
