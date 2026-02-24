## Тема, Мета, Місце розташування сайту, звіту

Тема: «Прототипи. Класи. Об’єктна модель документа (DOM). Події. Об’єкт події. Делегування подій.»

Мета: Придбати практичні навички роботи з DOM, обробкою подій, делегуванням подій у JavaScript та реалізацією інтерактивних елементів веб-сторінки.

- Репозиторій власного веб-застосунку (GitHub): [посилання](https://github.com/pliffdax/IO-35_appWEB-StepanovOleksandr-FIOT-2025)
- Власний веб-застосунок (Жива сторінка): [посилання](https://pliffdax.github.io/IO-35_appWEB-StepanovOleksandr-FIOT-2025/)
- Репозиторій звітного HTML-документа (GitHub): [посилання](https://github.com/pliffdax/IO-35_appRECORD-StepanovOleksandr-FIOT-2025)
- Звітний HTML-документ (Жива сторінка): [посилання](https://pliffdax.github.io/IO-35_appRECORD-StepanovOleksandr-FIOT-2025/)

## Завдання №1. Реалізація варіантів 2, 4, 6

У першому завданні лабораторної роботи №6 були реалізовані три інтерактивні приклади,
    які демонструють роботу з DOM, обробкою подій та зміною стану елементів сторінки.

### Варіант 2. Кнопка SWAP ME — обмін вмістом інпутів

Створено розмітку з текстом, двома полями введення та кнопкою SWAP ME . Натискання на кнопку здійснює обмін значеннями
    між двома інпутами. Кнопку можна натискати багаторазово, а значення інпутів
    можна змінювати вручну.

<!-- ![Інтерфейс завдання 2 з двома інпутами та кнопкою SWAP ME](/assets/labs/lab-5/lab6-task2-ui.png) -->

**Рисунок 1.**
Інтерфейс завдання 2 з двома інпутами та кнопкою SWAP ME.

```js
document.addEventListener("DOMContentLoaded", () => {
  const input1 = document.getElementById("swap-input-1");
  const input2 = document.getElementById("swap-input-2");
  const btnSwap = document.getElementById("swap-btn");

  if (!input1 || !input2 || !btnSwap) return;

  btnSwap.addEventListener("click", () => {
    const temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
    console.log("Завдання 2: після обміну:", {
      first: input1.value,
      second: input2.value,
    });
  });
});
```

<!-- ![Вивід результатів обміну інпутів у консолі](/assets/labs/lab-5/lab6-task2-console.png) -->

**Рисунок 2.**
Вивід результатів обміну інпутів у консолі.

### Варіант 4. Зміна розміру квадрата кнопками

Для варіанта 4 було реалізовано блок-квадрат та дві кнопки: «Зменшити» та «Збільшити» .
    Кожне натискання на відповідну кнопку зменшує або збільшує розміри квадрата
    на 15 пікселів, що демонструє зміну inline-стилів елемента через JavaScript.

<!-- ![Квадрат з кнопками для збільшення та зменшення](/assets/labs/lab-5/lab6-task4-ui.png) -->

**Рисунок 3.**
Квадрат з кнопками для збільшення та зменшення.

```js
document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("resizable-box");
  const btnDecrease = document.getElementById("btn-decrease");
  const btnIncrease = document.getElementById("btn-increase");

  if (!box || !btnDecrease || !btnIncrease) return;

  const STEP = 15;

  function getSize() {
    const width = box.offsetWidth;
    const height = box.offsetHeight;
    return { width, height };
  }

  btnDecrease.addEventListener("click", () => {
    const { width, height } = getSize();
    const newWidth = Math.max(15, width - STEP);
    const newHeight = Math.max(15, height - STEP);
    box.style.width = newWidth + "px";
    box.style.height = newHeight + "px";
  });

  btnIncrease.addEventListener("click", () => {
    const { width, height } = getSize();
    box.style.width = width + STEP + "px";
    box.style.height = height + STEP + "px";
  });
});
```

### Варіант 6. Подвоєння значень елементів списку

У варіанті 6 реалізовано кнопу «Подвоїти» , яка збільшує
    значення кожного елемента маркированого списку у два рази. При повторному
    натисканні всі значення знову множаться на 2, що показує можливість
    багаторазової зміни DOM-контенту.

<!-- ![Список чисел та кнопка Подвоїти](/assets/labs/lab-5/lab6-task6-ui.png) -->

**Рисунок 4.**
Список чисел та кнопка Подвоїти.

```js
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("numbers-list");
  const btnDouble = document.getElementById("btn-double");

  if (!list || !btnDouble) return;

  btnDouble.addEventListener("click", () => {
    const items = list.querySelectorAll("li");
    items.forEach((li) => {
      const value = Number(li.textContent.trim());
      if (!Number.isNaN(value)) {
        li.textContent = String(value * 2);
      }
    });
  });
});
```

## Завдання №2. Реалізація варіантів 7, 8, 9, 10

У другому завданні були реалізовані приклади роботи з DOM-деревом, формами,
    подіями та динамічним створенням елементів. Логіка кожного варіанта
    винесена в окремі JavaScript-файли.

### Варіант 7. Підрахунок категорій та елементів списку

Для списку категорій ul#categories реалізовано скрипт, який:

- рахує та виводить в консоль кількість категорій ( li.item );
- для кожної категорії виводить її назву та кількість вкладених елементів.

```js
document.addEventListener("DOMContentLoaded", () => {
  const categoriesList = document.getElementById("categories");
  if (!categoriesList) return;

  const items = categoriesList.querySelectorAll(".item");
  console.log("Завдання 7:");
  console.log("Number of categories:", items.length);

  items.forEach((item) => {
    const titleElement = item.querySelector("h2");
    const innerItems = item.querySelectorAll("ul li");
    const title = titleElement ? titleElement.textContent.trim() : "(без назви)";
    console.log("Category:", title);
    console.log("Elements:", innerItems.length);
  });
});
```

<!-- ![Вивід інформації про категорії у консолі](/assets/labs/lab-5/lab6-task7-console.png) -->

**Рисунок 5.**
Вивід інформації про категорії у консолі.

### Варіант 8. Обробка форми логіна

У варіанті 8 реалізовано обробку форми логіна без перезавантаження сторінки.
    Якщо хоча б одне поле порожнє, користувач бачить попередження All form fields must be filled in . Якщо всі поля заповнено,
    їх значення збираються в об’єкт, виводяться в консоль, а форма очищується.

<!-- ![Форма логіна: поля Email та Password](/assets/labs/lab-5/lab6-task8-ui.png) -->

**Рисунок 6.**
Форма логіна: поля Email та Password.

```js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { elements } = form;
    const emailInput = elements.namedItem("email");
    const passwordInput = elements.namedItem("password");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("All form fields must be filled in");
      return;
    }

    const data = { email, password };
    console.log("Завдання 8: об'єкт даних форми:", data);

    form.reset();
  });
});
```

### Варіант 9. Зміна кольору фону сторінки

Кнопка Change color змінює колір фону елемента `<body>` на випадковий hex-колір та відображає значення
    цього кольору в елементі `<span class="color">`.

<!-- ![Віджет зміни кольору з кнопкою Change color](/assets/labs/lab-5/lab6-task9-ui.png) -->

**Рисунок 7.**
Віджет зміни кольору з кнопкою Change color.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".change-color");
  const spanColor = document.querySelector(".color");

  if (!button || !spanColor) return;

  button.addEventListener("click", () => {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    spanColor.textContent = newColor;
    console.log("Завдання 9: новий колір фону:", newColor);
  });
});
```

### Варіант 10. Створення та очищення колекції блоків

У варіанті 10 реалізовано динамічне створення колекції кольорових блоків.
    Користувач вводить кількість елементів у поле input і натискає
    кнопку Create . Після цього генеруються div -блоки:
    перший розміром 30×30px, кожний наступний більший на 10px. Колір кожного блока
    випадковий. Кнопка Destroy очищає контейнер.

<!-- ![Колекція кольорових div-блоків та панель керування](/assets/labs/lab-5/lab6-task10-ui.png) -->

**Рисунок 8.**
Колекція кольорових div-блоків та панель керування.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("boxes-amount");
  const btnCreate = document.querySelector("[data-create]");
  const btnDestroy = document.querySelector("[data-destroy]");
  const boxesContainer = document.getElementById("boxes");

  if (!input || !btnCreate || !btnDestroy || !boxesContainer) return;

  function createBoxes(amount) {
    const baseSize = 30;
    const fragments = document.createDocumentFragment();

    for (let i = 0; i < amount; i += 1) {
      const size = baseSize + i * 10;
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.borderRadius = "4px";
      box.style.border = "1px solid rgba(0, 0, 0, 0.1)";
      fragments.appendChild(box);
    }

    boxesContainer.innerHTML = "";
    boxesContainer.appendChild(fragments);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }

  btnCreate.addEventListener("click", () => {
    const value = Number(input.value);
    if (Number.isNaN(value) || value < 1 || value > 100) {
      alert("Будь ласка, введіть число від 1 до 100.");
      return;
    }
    createBoxes(value);
    input.value = "";
  });

  btnDestroy.addEventListener("click", () => {
    destroyBoxes();
  });
});
```

## Додаткове завдання. Делегування подій та модальне вікно

Додатково у власному веб-застосунку реалізовано делегування подій: список карток товарів, де клік по будь-якій картці відкриває модальне вікно з детальною інформацією про товар (назва, опис, ціна). Обробник подій навішується на батьківський елемент `<ul>`, а потрібна картка визначається через `event.target.closest(".product-card")`.

<!-- ![Список товарів та модальне вікно з описом](/assets/labs/lab-5/lab6-delegate-ui.png) -->

**Рисунок 9.**
Список товарів та модальне вікно з описом.

```js
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("product-list");
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("modal-overlay");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalPrice = document.getElementById("modal-price");
  const modalClose = document.getElementById("modal-close");

  if (!list || !modal || !overlay || !modalTitle || !modalDescription || !modalPrice || !modalClose) {
    return;
  }

  function openModal(title, description, price) {
    modalTitle.textContent = title || "";
    modalDescription.textContent = description || "";
    modalPrice.textContent = price || "";
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  list.addEventListener("click", (event) => {
    const card = event.target.closest(".product-card");
    if (!card || !list.contains(card)) {
      return;
    }

    const title = card.dataset.title || card.querySelector("h3")?.textContent || "";
    const description = card.dataset.description || "";
    const price = card.dataset.price || "";

    openModal(title, description, price);
  });

  modalClose.addEventListener("click", () => {
    closeModal();
  });

  overlay.addEventListener("click", () => {
    closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
});
```

## Висновки

У ході виконання лабораторної роботи №6 було закріплено практичні навички роботи
    з DOM, подіями та делегуванням подій у JavaScript. Було реалізовано декілька
    інтерактивних прикладів: обмін значень між інпутами, зміна розміру елементів,
    модифікація вмісту списків, обробка форм без перезавантаження сторінки, зміна
    стилів елементів та динамічне створення колекцій блоків. Окремо було розглянуто
    делегування подій, що дозволяє ефективно працювати з великою кількістю однотипних
    елементів.

Отримані результати демонструють розуміння базових підходів до побудови
    інтерактивних веб-інтерфейсів, організації коду в окремі модулі та практичного
    застосування подій, об’єктної моделі документа та засобів JavaScript для
    створення сучасних вебзастосунків.
