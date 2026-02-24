## Тема, Мета, Місце розташування сайту, звіту

Тема: «WEB-сховище. Web Storage API. Асинхронність. Проміси. Пагінація.»

Мета: Придбати практичні навички роботи з локальним веб-сховищем
    ( localStorage ), реалізації асинхронних операцій за допомогою промісів,
    роботи з зовнішнім HTTP API, пагінації та використання сторонніх бібліотек
    для таймера та модальних вікон.

- Репозиторій власного веб-застосунку (GitHub): [посилання](https://github.com/pliffdax/IO-35_appWEB-StepanovOleksandr-FIOT-2025)
- Власний веб-застосунок (Жива сторінка): [посилання](https://pliffdax.github.io/IO-35_appWEB-StepanovOleksandr-FIOT-2025/)
- Репозиторій звітного HTML-документа (GitHub): [посилання](https://github.com/pliffdax/IO-35_appRECORD-StepanovOleksandr-FIOT-2025)
- Звітний HTML-документ (Жива сторінка): [посилання](https://pliffdax.github.io/IO-35_appRECORD-StepanovOleksandr-FIOT-2025/)

## Завдання №1. Кошик та пагінація

У першому завданні лабораторної роботи №7 було реалізовано сторінку cart.html з інтерактивним кошиком товарів та пагінацією.
    Список товарів розбивається на сторінки фіксованого розміру, а користувач
    може додавати позиції до кошика, змінювати їх кількість та очищувати кошик.

Для відображення каталогу використано грід-розмітку, а для керування станом
    кошика – окремий об’єкт у JavaScript, де ключем виступає ідентифікатор товару,
    а значенням – структура з посиланням на товар та його кількістю.

![Інтерфейс кошика з переліком товарів та панеллю пагінації](/assets/labs/lab-6/lab7-task1-cart-ui.jpg)

Рисунок 1
Інтерфейс кошика з переліком товарів та панеллю пагінації.

```
const PAGE_SIZE = 6;
let currentPage = 1;

const cart = {}; // ключ – id товару, значення – { product, quantity }

function renderProducts() {
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const pageItems = products.slice(startIndex, endIndex);

  productsListEl.innerHTML = pageItems
    .map((product) => `
      <article class="product-card">
        <h3 class="product-card__title">${product.name}</h3>
        <p class="product-card__price">${product.price} ₴</p>
        <div class="product-card__actions">
          <span class="product-card__badge">ID: ${product.id}</span>
          <button class="btn btn--primary" data-add-id="${product.id}">
            Додати в кошик
          </button>
        </div>
      </article>
    `)
    .join("");
}
```

![Панель кошика з переліком доданих товарів, їх кількістю та загальною сумою](/assets/labs/lab-6/lab7-task1-cart-details.jpg)

Рисунок 2
Панель кошика з переліком доданих товарів, їх кількістю та загальною сумою.

## Завдання №2. Галерея зображень та форма зворотного звʼязку

Друге завдання складається з двох частин: реалізації галереї зображень
    з модальним вікном та створення форми зворотного звʼязку, стан якої
    зберігається у localStorage .

### Частина 1. Галерея зображень з використанням basicLightbox

На сторінці index.html створено список з класом gallery , який наповнюється елементами динамічно на основі
    масиву об’єктів images . Кожен елемент містить превʼю-зображення
    та посилання на оригінал. При кліку на зображенні відкривається модальне
    вікно, реалізоване за допомогою бібліотеки basicLightbox .

![Галерея зображень із сіткою карток на головній сторінці](/assets/labs/lab-6/lab7-task2-gallery-ui.jpg)

Рисунок 3
Галерея зображень із сіткою карток на головній сторінці.

```
const galleryEl = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `)
    .join("");
}

galleryEl.innerHTML = createGalleryMarkup(images);

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  const img = event.target;
  if (img.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `<img src="${img.dataset.source}" alt="${img.alt}" />`
  );
  instance.show();
});
```

### Частина 2. Форма зворотного звʼязку та Web Storage API

На сторінці 2-form.html реалізовано форму з полями email та message . За допомогою події input відстежуються всі зміни у полях форми, оновлюється
    об’єкт formData та збережений стан форми у localStorage під ключем "feedback-form-state" . При завантаженні сторінки вміст
    сховища зчитується, а форма автоматично заповнюється останніми даними.

![Форма зворотного звʼязку з полями email та повідомлення](/assets/labs/lab-6/lab7-task2-form-ui.jpg)

Рисунок 4
Форма зворотного звʼязку з полями email та повідомлення.

```
const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

const formData = {
  email: "",
  message: ""
};

form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  if (!(name in formData)) return;

  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;

  const parsed = JSON.parse(saved);
  formData.email = parsed.email || "";
  formData.message = parsed.message || "";

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
});
```

## Завдання №3. Таймер зворотного відліку

У третьому завданні реалізовано таймер зворотного відліку на сторінці 1-timer.html . Користувач обирає дату та час у майбутньому
    за допомогою віджета flatpickr , після чого може запустити
    відлік. Якщо вибрано дату в минулому, користувач отримує повідомлення
    з помилкою через бібліотеку iziToast .

Після натискання кнопки Start інтерфейс переходить у режим
    зворотного відліку: інпут стає недоступним, а кожну секунду оновлюються
    значення днів, годин, хвилин та секунд до досягнення нуля.

![Таймер зворотного відліку з полем вибору дати та блоками часу](/assets/labs/lab-6/lab7-task3-timer-ui.jpg)

Рисунок 5
Таймер зворотного відліку з полем вибору дати та блоками часу.

```
flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = selectedDates[0];
    if (!date || date <= new Date()) {
      iziToast.error({
        title: "Помилка",
        message: "Please choose a date in the future",
        position: "topRight"
      });
      startBtn.disabled = true;
      return;
    }
    selectedDate = date;
    startBtn.disabled = false;
  }
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
```

## Завдання №4. Генератор промісів

Четверте завдання передбачає створення форми на сторінці 2-snackbar.html , яка генерує проміс із заданою затримкою.
    Користувач вводить значення затримки у мілісекундах та обирає бажаний
    результат промісу (fulfilled або rejected). Після сабміту форми створюється
    проміс, який через setTimeout виконується або відхиляється.

Результат роботи промісу виводиться через сповіщення iziToast у вигляді повідомлень: Fulfilled promise in N ms або Rejected promise in N ms , де N — введена затримка.

![Форма для створення промісу з полем затримки та перемикачами стану](/assets/labs/lab-6/lab7-task4-promises-ui.jpg)

Рисунок 6
Форма для створення промісу з полем затримки та перемикачами стану.

```
function createDelayedPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  createDelayedPromise(delay, state)
    .then((ms) => {
      iziToast.success({
        title: "✅ Success",
        message: `Fulfilled promise in ${ms}ms`,
        position: "topRight"
      });
    })
    .catch((ms) => {
      iziToast.error({
        title: "❌ Error",
        message: `Rejected promise in ${ms}ms`,
        position: "topRight"
      });
    });
});
```

## Завдання №5. Пошук зображень через Pixabay API

У пʼятому завданні реалізовано повноцінну сторінку пошуку зображень 3-search.html , яка звертається до стороннього сервісу Pixabay API . Користувач вводить ключове слово, після чого
    відправляється HTTP-запит із параметрами пошуку (тип зображення, орієнтація,
    безпечний пошук, кількість результатів на сторінку).

Результати відображаються у вигляді карток із превʼю-зображеннями та
    додатковою статистикою (лайки, перегляди, коментарі, завантаження).
    Кожна картка містить посилання на велике зображення, для перегляду якого
    використано бібліотеку SimpleLightbox . Під час виконання
    запиту відображається індикатор завантаження, а у випадку відсутності
    результатів або помилки показуються відповідні сповіщення через iziToast .

![Сторінка пошуку зображень з полем введення, результатами та статистикою](/assets/labs/lab-6/lab7-task5-search-ui.jpg)

Рисунок 7
Сторінка пошуку зображень з полем введення, результатами та статистикою.

```
const API_KEY = "YOUR_PIXABAY_API_KEY";
const BASE_URL = "https://pixabay.com/api/";

function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    per_page: 40
  });

  return fetch(`${BASE_URL}?${params.toString()}`).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = queryInput.value.trim();
  if (!query) {
    iziToast.warning({
      title: "Увага",
      message: "Введіть, будь ласка, ключове слово для пошуку",
      position: "topRight"
    });
    return;
  }

  showLoader();
  clearGallery();

  fetchImages(query)
    .then((data) => {
      if (!data.hits.length) {
        iziToast.info({
          title: "Результати",
          message:
            "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight"
        });
        return;
      }

      gallery.innerHTML = createGalleryMarkup(data.hits);
      lightbox ? lightbox.refresh() : (lightbox = new SimpleLightbox(".search-gallery a"));
    })
    .catch((error) => {
      iziToast.error({
        title: "Помилка",
        message: "Сталася помилка під час завантаження зображень",
        position: "topRight"
      });
      console.error(error);
    })
    .finally(() => hideLoader());
});
```

## Висновки

У ході виконання лабораторної роботи №7 було закріплено практичні навички
    роботи з Web Storage API, асинхронними запитами та промісами, а також
    інтеграції сторонніх бібліотек у веб-застосунок. Було реалізовано кошик
    із пагінацією, галерею зображень з модальним переглядом, форму збереження
    стану у localStorage , таймер зворотного відліку та генератор
    промісів із керованим результатом.

Окрему увагу було приділено роботі з зовнішнім HTTP API (Pixabay), обробці
    можливих помилок та відображенню проміжних станів інтерфейсу (завантаження,
    відсутність результатів, успішні/помилкові операції). Отримані результати
    демонструють розуміння принципів збереження даних у браузері, побудови
    асинхронних сценаріїв та використання бібліотек для створення сучасних,
    інтерактивних веб-застосунків.
