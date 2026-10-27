(function () {
  "use strict";

  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ===== ВАШИ ДАННЫЕ ===== */
  var PROFILE = { telegram: "assalameu", tiktok: "assalameu" };

  /* ===== ВАШИ ПРОЕКТЫ: добавляйте блок сюда =====
     status "live" — готов: большой кейс с ноутбуком, телефоном и деталями
     status "soon" — в работе: строка в списке «В работе»
     Обязательные поля для "live": title, type, url, host, desktop, mobile.
     Остальное (color, palette, fonts, details и т. д.) можно не заполнять. */
  var PROJECTS = [
    {
      title: "SEDOY",
      type: "Барбершоп в Омске. Сайт со своей админкой, записью через YClients и собственным доменом",
      status: "live",
      badge: "Реальный заказ · запущен в октябре 2026",
      url: "https://barbershop-sedoy.ru/",
      host: "barbershop-sedoy.ru",
      desktop: "images/sedoy-full.jpg",
      mobile: "images/sedoy-mobile.jpg",
      color: "#0a0a0b",
      glow: "#d6e8ff",
      task: "Перенести на сайт атмосферу зала: чёрные стены, LED-рамки на потолке, неоновую вывеску. Довести клиента до онлайн-записи к нужному мастеру. Владелица должна сама менять цены, фото, отзывы и акции.",
      did: "Первый экран: потолок из LED-рамок в перспективе и вывеска шрифтом их логотипа, которая загорается при загрузке. Калькулятор по мастерам: выбранные услуги сразу открываются в записи YClients. Мастера, акции, абонементы, настоящие отзывы с Яндекса, 2ГИС и YClients, приложение для iPhone и Android с QR-кодом. Своя админка на PHP с резервными копиями. Cookie-баннер и политика конфиденциальности по 152-ФЗ.",
      result: "Сайт запущен на barbershop-sedoy.ru, домен и хостинг оформлены на владельца. От первого демо до запуска 4 дня и 4 раунда правок. Сайт меняют сами, без программиста.",
      quote: {
        text: "Админка понятная: цены, фото, отзывы и акции меняем сами, без программиста. Даниил внимательно относится ко всем пожеланиям, быстро вносит правки. С ним было приятно иметь дело. Рекомендую!",
        who: "Екатерина, барбершоп SEDOY"
      },
      palette: [["Стена", "#0a0a0b"], ["LED-свет", "#eef5ff"], ["Серебро", "#c9ccd2"], ["Дерево", "#9a6a45"]],
      fonts: ["Oswald", "Manrope"],
      tags: ["HTML", "CSS", "JavaScript", "PHP", "YClients", "Адаптив", "152-ФЗ"],
      details: [
        ["images/sd-hero.jpg", "Первый экран", "Потолок из LED-рамок, как в их зале. При загрузке рамки загораются по очереди, следом вспыхивает неоновая вывеска."],
        ["images/sd-about.jpg", "О нас", "Фото настоящего зала приближается при прокрутке, как будто заходишь внутрь."],
        ["images/sd-calc.jpg", "Калькулятор и запись", "Выбираете мастера и услуги, чек считает сумму. Кнопка открывает YClients с уже выбранными мастером и услугами."],
        ["images/sd-masters.jpg", "Мастера", "Чёрно-белые портреты оживают в цвете, у каждого рейтинг и кнопка записи именно к нему."],
        ["images/sd-promo.jpg", "Акции", "Скидка именинникам и кэшбэк показаны наглядно, тексты акций меняются в админке."],
        ["images/sd-app.jpg", "Приложение", "QR-код переключается между iPhone и Android, рядом список того, что умеет приложение."],
        ["images/sd-admin.jpg", "Админка", "Цены, мастера, фото, акции, отзывы и контакты меняются без программиста. Пароль, защита от подбора, 30 резервных копий."]
      ]
    },
    {
      title: "Сибирская служба Деда Мороза",
      type: "Дед Мороз и Снегурочка на дом в Омске. Сайт с календарём цен, своей админкой и доменом",
      status: "live",
      badge: "Реальный заказ · запущен в октябре 2026",
      url: "https://ded-moroz55.ru/",
      host: "ded-moroz55.ru",
      desktop: "images/dedmoroz-full.jpg",
      mobile: "images/dedmoroz-mobile.jpg",
      color: "#1c0b3f",
      glow: "#86d1ff",
      task: "Служба работает с 2006 года, но клиенты знали её только по группе ВК. Нужен сайт, где родители сразу видят цены на каждый день праздников и звонят, а владелица сама меняет цены, фото и отзывы к новому сезону.",
      did: "Новогодний первый экран со снегом и фото их Снегурочки. Календарь цен с 25 декабря по 2 января: дни недели проставляются сами, 31 декабря разбито по времени, нажатие на дату показывает цену и кнопку звонка. Отсчёт до Нового года и год сезона меняются сами. Карусель «Только наши герои» с подписями, программа праздника, советы родителям, настоящие отзывы из ВК. Своя админка на PHP с резервными копиями.",
      result: "Сайт запущен на ded-moroz55.ru с SSL, хостинг оформлен на владелицу. Сайт не собирает данные посетителей: без форм, cookie и сторонних счётчиков. Цены и тексты к новому сезону меняют сами.",
      quote: {
        text: "Получился красивый, современный и удобный сайт, на котором всё понятно и легко найти. Отдельно понравилось, что можно самостоятельно менять тексты, фотографии и другую информацию.",
        who: "Анастасия, Сибирская служба Деда Мороза"
      },
      palette: [["Ночь", "#1c0b3f"], ["Фиолет", "#5a34c6"], ["Лёд", "#86d1ff"], ["Золото", "#ecd08a"]],
      fonts: ["Playfair Display", "Onest"],
      tags: ["HTML", "CSS", "JavaScript", "PHP", "Адаптив", "Календарь цен"],
      details: [
        ["images/dm-hero.jpg", "Первый экран", "Снегурочка у ёлки, падающий снег и цены сезона прямо на первом экране — на телефоне видны без прокрутки."],
        ["images/dm-prices.jpg", "Календарь цен", "Каждый день праздников с днём недели и ценой. Нажали на дату — открывается цена и кнопка «Позвонить»."],
        ["images/dm-about.jpg", "О службе", "Преимущества с иконками вокруг арки с фото Снегурочки, внизу — телефон для заказа."],
        ["images/dm-photos.jpg", "Только наши герои", "Карусель фото их актёров по кругу, под каждым снимком своя подпись, фото открывается крупно."],
        ["images/dm-program.jpg", "30 минут сказки", "Программа праздника по шагам и советы родителям, чтобы ребёнок поверил в чудо."],
        ["images/dm-reviews.jpg", "Отзывы", "Настоящие отзывы родителей из группы ВК, слово в слово."],
        ["images/dm-admin.jpg", "Админка", "Цены по датам, фото, отзывы, вопросы и контакты меняются без программиста. Резервные копии перед каждым сохранением."]
      ]
    },
    {
      title: "North Shear",
      type: "Барбершоп в Омске. Лендинг с прайсом-калькулятором и записью",
      status: "live",
      url: "https://danielsque18.github.io/north-sh/",
      host: "danielsque18.github.io/north-sh",
      local: "../north-barber/index.html",      // когда портфолио открыто с компьютера как файл
      desktop: "images/north-shear-full.jpg",   // длинный скриншот всей страницы
      mobile: "images/north-shear-mobile.jpg",  // длинный скриншот мобильной версии
      color: "#16120f",                         // фон сцены, цвет проекта
      glow: "#c9a063",
      task: "Показать барбершоп так, чтобы захотелось прийти, и помочь быстро выбрать услугу и записаться.",
      did: "Дизайн с нуля в тёплой палитре интерьера, прайс-калькулятор, горизонтальный рассказ о визите, мастера, галерея работ, форма записи.",
      result: "Готовый адаптивный сайт, опубликован в интернете. Выбранные в прайсе услуги сами переносятся в форму записи.",
      palette: [["Кожа", "#16120f"], ["Латунь", "#c9a063"], ["Кость", "#ece5d8"]],
      fonts: ["Alumni Sans", "Onest"],
      tags: ["HTML", "CSS", "JavaScript", "Адаптив", "Анимации"],
      details: [
        ["images/ns-hero.jpg", "Первый экран", "Название разрезается по диагонали, как ножницами, и собирается при загрузке."],
        ["images/ns-price.jpg", "Прайс-калькулятор", "Отмечаете услуги, и сайт считает стоимость и время визита. Несовместимые услуги гаснут."],
        ["images/ns-ritual.jpg", "Визит в пять шагов", "При прокрутке страницы шаги едут горизонтально, как раскадровка."],
        ["images/ns-team.jpg", "Мастера", "Чёрно-белые портреты оживают в цвете при наведении."],
        ["images/ns-works.jpg", "Работы", "Мозаика из фото, каждое открывается крупно."],
        ["images/ns-booking.jpg", "Запись", "Форма с выбором услуг и дня, рядом контакты на фоне кресла."]
      ]
    },
    {
      title: "Lucido",
      type: "Детейлинг-ателье в Омске. Премиальный сайт с плавной прокруткой и лампой осмотра",
      status: "live",
      url: "https://danielsque18.github.io/detailing/",
      host: "danielsque18.github.io/detailing",
      local: "../detailing/index.html",
      desktop: "images/lucido-full.jpg",
      mobile: "images/lucido-mobile.jpg",
      color: "#16120e",
      glow: "#b5121b",
      task: "Показать ателье дорого и спокойно, как каталог автомобильного бренда, и довести посетителя до записи на бесплатный осмотр.",
      did: "Заставка, плавная прокрутка, услуги стопкой карточек, лампа осмотра, которая высвечивает лак под курсором, горизонтальная галерея, пакеты с пересчётом цены под кузов, форма записи.",
      result: "Готовый адаптивный сайт. Цена и состав пакетов видны до звонка, а лампа объясняет, за что клиент платит.",
      palette: [["Кость", "#f2eee6"], ["Эспрессо", "#16120e"], ["Россо", "#b5121b"]],
      fonts: ["Prata", "Manrope"],
      tags: ["HTML", "CSS", "JavaScript", "GSAP", "Lenis", "Адаптив"],
      details: [
        ["images/lc-hero.jpg", "Первый экран", "После заставки буквы названия поднимаются по одной, фото медленно приближается."],
        ["images/lc-manifest.jpg", "Манифест", "Текст проявляется слово за словом по мере прокрутки."],
        ["images/lc-services.jpg", "Услуги", "Карточки ложатся друг на друга стопкой, предыдущая отходит в тень."],
        ["images/lc-light.jpg", "Лампа осмотра", "Курсор работает как инспекционная лампа и высвечивает лак на тёмном крыле."],
        ["images/lc-gallery.jpg", "Галерея", "Вертикальная прокрутка превращается в горизонтальную ленту автомобилей."],
        ["images/lc-prices.jpg", "Стоимость", "Переключатель кузова пересчитывает цены всех пакетов."]
      ]
    },
    {
      title: "Квеври",
      type: "Грузинский ресторан в Омске. Видео, WebGL и живая подача вечера",
      status: "live",
      url: "https://danielsque18.github.io/restaurant-/",
      host: "danielsque18.github.io/restaurant-",
      local: "../restaurant/index.html",
      desktop: "images/kvevri-full.jpg",
      mobile: "images/kvevri-mobile.jpg",
      color: "#0c0806",
      glow: "#a3162b",
      task: "Передать атмосферу грузинского вечера ещё до визита: вино, огонь, застолье и танцы, и довести гостя до брони стола.",
      did: "Заставка, где вино наполняет грузинское слово, видео и угольки в первом экране, окно в ночной Тбилиси, которое раскрывается при прокрутке, меню с «жидким» переходом между блюдами на WebGL, слово «Огонь» с видео пламени внутри букв, сцена танцев, бронь с выбором даты и гостей.",
      result: "Готовый адаптивный сайт. Посетитель видит меню, цены и атмосферу вечера и бронирует стол в одной форме.",
      palette: [["Ночь", "#0c0806"], ["Свеча", "#d9a35b"], ["Саперави", "#7a0f22"], ["Крем", "#f1e4cc"]],
      fonts: ["Forum", "Noto Serif Georgian", "Golos Text"],
      tags: ["HTML", "CSS", "JavaScript", "WebGL", "GSAP", "Видео"],
      details: [
        ["images/kv-hero.jpg", "Первый экран", "Вино льётся в бокал, над ним поднимаются угольки, название собирается по буквам."],
        ["images/kv-portal.jpg", "Окно в Тбилиси", "Арка с ночным городом раскрывается на весь экран, пока страница прокручивается."],
        ["images/kv-menu.jpg", "Меню", "Фото блюд перетекают друг в друга через «жидкий» эффект на WebGL."],
        ["images/kv-fire.jpg", "Огонь", "Видео пламени видно только сквозь буквы огромного слова."],
        ["images/kv-friday.jpg", "Пятница", "Кадры с танцами раскрываются по очереди, как в комиксе."],
        ["images/kv-footer.jpg", "Гаумарджос", "Финал с грузинской вязью в цветах свечи и вина."]
      ]
    }
  ];

  /* ===== ОТЗЫВЫ: добавляйте блок сюда (пока пусто) =====
     Пример: { name: "Имя клиента", role: "Барбершоп North Shear", text: "Текст отзыва" } */
  var REVIEWS = [
    {
      name: "Анастасия",
      role: "Сибирская служба Деда Мороза, Омск",
      url: "https://ded-moroz55.ru/",
      host: "ded-moroz55.ru",
      lead: "Учёл все наши пожелания и помог сделать именно то, что мы хотели. Работой остались довольны, смело рекомендую!",
      text: "Даниил разработал сайт для нашей «Сибирской службы Деда Мороза». Учёл все наши пожелания, внимательно относился к правкам и помог сделать именно то, что мы хотели. Получился красивый, современный и удобный сайт, на котором всё понятно и легко найти. Отдельно понравилось, что можно самостоятельно менять тексты, фотографии и другую информацию. Даниил всегда был на связи, всё объяснял и помогал с возникающими вопросами. Работой остались довольны, смело рекомендую!"
    },
    {
      name: "Екатерина",
      role: "барбершоп SEDOY, Омск",
      url: "https://barbershop-sedoy.ru/",
      host: "barbershop-sedoy.ru",
      lead: "Даниил смог перенести стиль нашего барбершопа на сайт. С ним было приятно иметь дело. Рекомендую!",
      text: "Обратились к Даниилу за созданием сайта для барбершопа SEDOY. Даниил смог перенести стиль нашего барбершопа на сайт: интерьер, вывеску, которая загорается на первом экране, цветовая гамма. На сайте удобный интерфейс, калькулятор цен, интеграция с YClients, что позволяет клиенту записываться онлайн, ссылки для скачивания мобильного приложения на ios и android, контакты и другая необходимая информация.\nАдминка понятная: цены, фото, отзывы и акции меняем сами, без программиста. Даниил внимательно относится ко всем пожеланиям, быстро вносит правки, помогает с доменом и хостингом, всё оформлено на нас. Сайт был готов уже через пару дней. С ним было приятно иметь дело. Рекомендую!\nДаниил, спасибо за сотрудничество!"
    }
  ];

  /* ===== Дальше код трогать не нужно ===== */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function img(src, alt, lazy) {
    var i = el("img");
    i.src = src; i.alt = alt || "";
    if (lazy !== false) i.loading = "lazy";
    i.decoding = "async";
    return i;
  }

  document.querySelectorAll("[data-tg]").forEach(function (a) { a.href = "https://t.me/" + PROFILE.telegram; a.target = "_blank"; a.rel = "noopener"; });
  document.querySelectorAll("[data-tt]").forEach(function (a) { a.href = "https://www.tiktok.com/@" + PROFILE.tiktok; a.target = "_blank"; a.rel = "noopener"; });

  // адрес сайта: на компьютере (file://) открываем локальную копию, в интернете — опубликованную
  function siteUrl(p) { return location.protocol === "file:" && p.local ? p.local : p.url; }

  /* ---------- Кейсы ---------- */
  var cases = document.getElementById("cases");
  var queue = document.getElementById("queue");
  var shows = [];
  var liveCount = 0;

  PROJECTS.forEach(function (p) {
    if (p.status !== "live") {
      var li = el("li");
      li.appendChild(el("span", "queue__word", p.title));
      var info = el("div", "queue__info");
      info.appendChild(el("strong", "", p.type));
      info.appendChild(el("span", "", p.note || ""));
      li.appendChild(info);
      queue.appendChild(li);
      return;
    }
    liveCount++;
    var c = el("article", "case");

    var head = el("header", "case__head");
    head.appendChild(el("span", "case__index", String(liveCount).padStart(2, "0")));
    head.appendChild(el("h3", "case__name", p.title));
    var typeBox = el("div", "case__type");
    if (p.badge) {
      var badge = el("span", "case__badge");
      badge.appendChild(el("i"));
      badge.appendChild(document.createTextNode(p.badge));
      typeBox.appendChild(badge);
    }
    typeBox.appendChild(el("p", "", p.type));
    head.appendChild(typeBox);
    c.appendChild(head);

    // сцена: ноутбук + телефон
    var stage = el("div", "stage");
    if (p.light) stage.classList.add("stage--light");
    if (p.color) stage.style.setProperty("--stage", p.color);
    if (p.glow) stage.style.setProperty("--stage-accent", p.glow);
    stage.appendChild(el("div", "stage__glow"));

    var browser = el("div", "browser");
    var bar = el("div", "browser__bar");
    bar.appendChild(el("i")); bar.appendChild(el("i")); bar.appendChild(el("i"));
    bar.appendChild(el("span", "", p.host));
    var bview = el("div", "browser__view");
    var bimg = img(p.desktop, "Сайт " + p.title + " на компьютере");
    bview.appendChild(bimg);
    browser.appendChild(bar); browser.appendChild(bview);
    stage.appendChild(browser);

    var phone = null, pview = null, pimg = null;
    if (p.mobile) {
      phone = el("div", "phone");
      pview = el("div", "phone__view");
      pimg = img(p.mobile, "Сайт " + p.title + " на телефоне");
      pview.appendChild(pimg);
      phone.appendChild(pview);
      stage.appendChild(phone);
    }

    var actions = el("div", "stage__actions");
    var tryBtn = el("button", "btn btn--light", "Открыть прямо здесь");
    tryBtn.type = "button";
    tryBtn.addEventListener("click", function () { openLive(p); });
    var open = el("a", "btn btn--line", "Открыть сайт");
    open.href = siteUrl(p); open.target = "_blank"; open.rel = "noopener";
    actions.appendChild(tryBtn); actions.appendChild(open);
    stage.appendChild(actions);
    c.appendChild(stage);

    // задача, решение, результат + палитра и шрифты
    var body = el("div", "case__body");
    var facts = el("dl", "facts");
    [["Задача", p.task], ["Что сделал", p.did], ["Результат", p.result]].forEach(function (x) {
      if (!x[1]) return;
      var d = el("div");
      d.appendChild(el("dt", "", x[0]));
      d.appendChild(el("dd", "", x[1]));
      facts.appendChild(d);
    });
    var main = el("div", "case__main");
    main.appendChild(facts);
    if (p.quote) {
      var q = el("blockquote", "case__quote");
      q.appendChild(el("p", "", "«" + p.quote.text + "»"));
      var qa = el("a", "", p.quote.who + " · полный отзыв ↓");
      qa.href = "#reviews";
      q.appendChild(qa);
      main.appendChild(q);
    }
    body.appendChild(main);

    var kit = el("div", "kit");
    if (p.palette) {
      var pw = el("div");
      pw.appendChild(el("h4", "", "Палитра"));
      var sw = el("div", "swatches");
      p.palette.forEach(function (s) {
        var item = el("span", "swatch");
        var dot = el("i"); dot.style.background = s[1];
        item.appendChild(dot);
        item.appendChild(document.createTextNode(s[0] + " " + s[1]));
        sw.appendChild(item);
      });
      pw.appendChild(sw); kit.appendChild(pw);
    }
    if (p.fonts) {
      var fw = el("div");
      fw.appendChild(el("h4", "", "Шрифты"));
      var fl = el("div", "fonts");
      p.fonts.forEach(function (f) { fl.appendChild(el("span", "", f)); });
      fw.appendChild(fl); kit.appendChild(fw);
    }
    if (p.tags) {
      var tw = el("div");
      tw.appendChild(el("h4", "", "Технологии"));
      var chips = el("div", "chips");
      p.tags.forEach(function (t) { chips.appendChild(el("span", "", t)); });
      tw.appendChild(chips); kit.appendChild(tw);
    }
    body.appendChild(kit);
    c.appendChild(body);

    // лента деталей
    if (p.details && p.details.length) {
      var det = el("div", "details");
      var dh = el("div", "details__head");
      dh.appendChild(el("h4", "", "Детали"));
      dh.appendChild(el("p", "", fine ? "Листайте ленту мышью" : "Листайте ленту пальцем"));
      det.appendChild(dh);
      var track = el("div", "details__track");
      p.details.forEach(function (d) {
        var f = el("figure", "shot");
        var box = el("div", "shot__img");
        box.appendChild(img(d[0], d[1]));
        f.appendChild(box);
        var cap = el("figcaption");
        cap.appendChild(el("strong", "", d[1]));
        cap.appendChild(document.createTextNode(d[2]));
        f.appendChild(cap);
        track.appendChild(f);
      });
      det.appendChild(track);
      c.appendChild(det);
      dragScroll(track);
    }

    cases.appendChild(c);
    shows.push({ card: c, stage: stage, browser: browser, bview: bview, bimg: bimg, phone: phone, pview: pview, pimg: pimg });
  });

  // блок «В работе» нужен, только если в нём что-то есть
  if (!queue.children.length) queue.closest(".queue").hidden = true;

  /* насколько прокручивать длинные скриншоты внутри экранов */
  function setShift() {
    shows.forEach(function (s) {
      s.card.style.setProperty("--shift-b", Math.max(s.bimg.offsetHeight - s.bview.offsetHeight, 0) + "px");
      if (s.pimg) s.card.style.setProperty("--shift-p", Math.max(s.pimg.offsetHeight - s.pview.offsetHeight, 0) + "px");
    });
  }
  shows.forEach(function (s) {
    s.bimg.addEventListener("load", setShift);
    if (s.pimg) s.pimg.addEventListener("load", setShift);

    if (fine) {
      // мышь: сайт листается при наведении, сцена слегка наклоняется
      s.stage.addEventListener("mouseenter", function () { s.card.classList.add("is-scrolling"); });
      s.stage.addEventListener("mouseleave", function () {
        s.card.classList.remove("is-scrolling");
        s.browser.style.transform = "";
        if (s.phone) s.phone.style.transform = "";
      });
      if (!calm) {
        s.stage.addEventListener("mousemove", function (e) {
          var r = s.stage.getBoundingClientRect();
          var x = (e.clientX - r.left) / r.width - 0.5;
          var y = (e.clientY - r.top) / r.height - 0.5;
          s.browser.style.transform = "perspective(1400px) rotateY(" + (x * 4).toFixed(2) + "deg) rotateX(" + (-y * 3).toFixed(2) + "deg)";
          if (s.phone) s.phone.style.transform = "translate3d(" + (x * -18).toFixed(1) + "px," + (y * -14).toFixed(1) + "px,0)";
        });
      }
    } else if ("IntersectionObserver" in window && !calm) {
      // телефон: сайт листается сам, когда кейс на экране
      new IntersectionObserver(function (en) {
        en.forEach(function (e) { s.card.classList.toggle("is-scrolling", e.isIntersecting); });
      }, { threshold: 0.5 }).observe(s.stage);
    }
  });
  window.addEventListener("resize", setShift);
  setShift();

  /* перетаскивание ленты деталей мышью */
  function dragScroll(track) {
    if (!fine) return;
    var down = false, moved = false, x0 = 0, s0 = 0;
    track.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse") return;
      down = true; moved = false; x0 = e.clientX; s0 = track.scrollLeft;
    });
    window.addEventListener("pointermove", function (e) {
      if (!down) return;
      var dx = e.clientX - x0;
      if (Math.abs(dx) > 4) { moved = true; track.classList.add("is-drag"); }
      track.scrollLeft = s0 - dx;
    });
    window.addEventListener("pointerup", function () { down = false; track.classList.remove("is-drag"); });
    track.addEventListener("click", function (e) { if (moved) e.preventDefault(); }, true);
  }

  /* ---------- Сайт прямо на странице ---------- */
  var live = document.getElementById("live");
  var liveFrame = document.getElementById("liveFrame");
  function openLive(p) {
    document.getElementById("liveHost").textContent = p.host;
    document.getElementById("liveOpen").href = siteUrl(p);
    liveFrame.src = siteUrl(p);
    live.showModal();
    document.body.style.overflow = "hidden";
  }
  function closeLive() { live.close(); }
  live.addEventListener("close", function () { liveFrame.src = "about:blank"; document.body.style.overflow = ""; });
  document.getElementById("liveClose").addEventListener("click", closeLive);

  /* ---------- Отзывы ---------- */
  var reviewList = document.getElementById("reviewList");
  REVIEWS.forEach(function (r) {
    var item = el("blockquote", "review");
    var mark = el("span", "review__mark", "“");
    mark.setAttribute("aria-hidden", "true");
    item.appendChild(mark);
    var body = el("div", "review__body");
    if (r.lead) body.appendChild(el("p", "review__text", "«" + r.lead + "»"));
    r.text.split("\n").forEach(function (t) { body.appendChild(el("p", r.lead ? "review__p" : "review__text", t)); });
    item.appendChild(body);
    var who = el("p", "review__who");
    var name = el("span");
    name.appendChild(el("strong", "", r.name));
    if (r.role) name.appendChild(document.createTextNode(", " + r.role));
    who.appendChild(name);
    if (r.url) {
      var link = el("a", "review__link", r.host || r.url);
      link.href = r.url; link.target = "_blank"; link.rel = "noopener";
      who.appendChild(link);
    }
    item.appendChild(who);
    reviewList.appendChild(item);
  });
  // когда отзывы есть, блок под ними зовёт стать следующим клиентом
  if (REVIEWS.length) document.querySelector("#reviewEmpty p").textContent = "Следующим может быть ваш сайт.";

  /* ---------- Буквы имени в первом экране ---------- */
  document.querySelectorAll(".hero__title .line > span").forEach(function (s) {
    var t = s.textContent;
    s.textContent = "";
    Array.prototype.forEach.call(t, function (ch, i) {
      var c = el("span", "ch", ch);
      c.style.setProperty("--i", i);
      s.appendChild(c);
    });
  });

  /* ---------- Заставка: счётчик, кадры работ, шторки (один раз за визит) ---------- */
  var loader = document.getElementById("loader");
  var count = document.getElementById("loaderCount");
  var frame = document.getElementById("loaderFrame");
  function ready() { document.documentElement.classList.add("is-ready"); }

  var seen = false;
  try { seen = !!sessionStorage.getItem("seen"); } catch (e) {}
  if (calm || seen) {
    loader.remove();
    ready();
  } else {
    try { sessionStorage.setItem("seen", "1"); } catch (e) {}
    // кадры для заставки: детали работ и фото автора
    var frames = [];
    PROJECTS.forEach(function (p) { (p.details || []).forEach(function (d) { frames.push(d[0]); }); });
    frames.push("images/danil-hero.jpg");
    var imgs = frames.map(function (src) { var i = img(src, "", false); frame.appendChild(i); return i; });

    var DURATION = 2600;
    var t0 = 0;
    var lastIdx = -1;
    var started = false;
    function start() {
      if (started) return;
      started = true;
      t0 = performance.now();
      requestAnimationFrame(tick);
    }
    if (imgs[0].complete) start(); else imgs[0].addEventListener("load", start);
    setTimeout(start, 600);
    function tick(now) {
      var p = Math.min((now - t0) / DURATION, 1);
      var eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      count.textContent = Math.round(eased * 100);
      var idx = Math.min(Math.floor(eased * imgs.length), imgs.length - 1);
      if (idx !== lastIdx) {
        if (imgs[lastIdx]) imgs[lastIdx].classList.remove("is-on");
        imgs[idx].classList.add("is-on");
        lastIdx = idx;
      }
      if (p < 1) { requestAnimationFrame(tick); return; }
      setTimeout(function () {
        loader.classList.add("is-done");
        ready();
        setTimeout(function () { loader.remove(); }, 1400);
      }, 250);
    }
  }

  /* ---------- Заголовки: слова выезжают при появлении ---------- */
  var heads = document.querySelectorAll("h2:not(.visually-hidden)");
  var ho = ("IntersectionObserver" in window && !calm) ? new IntersectionObserver(function (en) {
    en.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("is-in"); ho.unobserve(e.target); }
    });
  }, { threshold: 0.3 }) : null;
  heads.forEach(function (h) {
    var text = h.textContent.trim();
    h.setAttribute("aria-label", text);
    h.textContent = "";
    text.split(/\s+/).forEach(function (w, i) {
      var box = el("span", "w");
      box.setAttribute("aria-hidden", "true");
      var inner = el("span", "", w);
      inner.style.setProperty("--i", i);
      box.appendChild(inner);
      h.appendChild(box);
      h.appendChild(document.createTextNode(" "));
    });
    if (ho) ho.observe(h); else h.classList.add("is-in");
  });

  /* ---------- Имя в первом экране: буквы у курсора «надуваются» ---------- */
  var heroEl = document.getElementById("hero");
  var chars = Array.prototype.slice.call(document.querySelectorAll(".hero__title .ch"));
  if (fine && !calm && heroEl && chars.length) {
    var hx = -9999, hy = -9999, weights = chars.map(function () { return 400; }), heroLoop = false;
    function pump() {
      var still = true;
      chars.forEach(function (c, i) {
        var r = c.getBoundingClientRect();
        var d = Math.hypot(r.left + r.width / 2 - hx, r.top + r.height / 2 - hy);
        var k = Math.max(0, 1 - d / 320);
        var goal = 400 + 500 * k * k;
        weights[i] += (goal - weights[i]) * 0.16;
        if (Math.abs(goal - weights[i]) > 0.5) still = false;
        c.style.setProperty("--w", weights[i].toFixed(0));
      });
      heroLoop = !still;
      if (heroLoop) requestAnimationFrame(pump);
    }
    function kick() { if (!heroLoop) { heroLoop = true; requestAnimationFrame(pump); } }
    heroEl.addEventListener("mousemove", function (e) { hx = e.clientX; hy = e.clientY; kick(); });
    heroEl.addEventListener("mouseleave", function () { hx = hy = -9999; kick(); });
  }

  /* ---------- «Обо мне»: слова проявляются при прокрутке ---------- */
  var lead = document.querySelector(".about__lead");
  var leadWords = [];
  if (lead && !calm) {
    var words = lead.textContent.trim().split(/\s+/);
    lead.textContent = "";
    lead.classList.add("reveal");
    words.forEach(function (w) {
      var sp = el("span", "rw", w);
      lead.appendChild(sp); lead.appendChild(document.createTextNode(" "));
      leadWords.push(sp);
    });
  }

  /* ---------- «Обсудим ваш проект»: контур заливается по мере прокрутки ---------- */
  var contactBig = document.querySelector(".contact__big");

  var fxBusy = false;
  function paintFx() {
    fxBusy = false;
    var vh = window.innerHeight;
    if (leadWords.length) {
      var r = lead.getBoundingClientRect();
      var p = (vh * 0.85 - r.top) / (r.height + vh * 0.3);
      var n = Math.round(Math.min(Math.max(p, 0), 1) * leadWords.length);
      leadWords.forEach(function (w, i) { if (w.classList.contains("is-on") !== i < n) w.classList.toggle("is-on", i < n); });
    }
    if (contactBig && !calm) {
      var c = contactBig.getBoundingClientRect();
      var q = Math.min(Math.max((vh * 0.95 - c.top) / (c.height + vh * 0.25), 0), 1) * 2;
      contactBig.style.setProperty("--fill1", (Math.min(q, 1) * 100).toFixed(1) + "%");
      contactBig.style.setProperty("--fill2", (Math.min(Math.max(q - 1, 0), 1) * 100).toFixed(1) + "%");
    }
  }
  window.addEventListener("scroll", function () {
    if (!fxBusy) { fxBusy = true; requestAnimationFrame(paintFx); }
  }, { passive: true });
  window.addEventListener("resize", paintFx);
  paintFx();

  /* ---------- «Как я работаю»: свет идёт по линии сверху вниз ----------
     точка света — 60% высоты экрана; пройденные шаги остаются гореть */
  var track = document.getElementById("track");
  var trackFill = document.getElementById("trackFill");
  var trackSteps = track ? Array.prototype.slice.call(track.querySelectorAll(".steps li")) : [];
  var trackBusy = false;
  function paintTrack() {
    trackBusy = false;
    var r = track.getBoundingClientRect();
    var y = window.innerHeight * 0.6 - r.top;
    trackFill.style.setProperty("--p", Math.min(Math.max(y / r.height, 0), 1).toFixed(4));
    trackSteps.forEach(function (li) {
      var on = li.offsetTop + 14 <= y;
      if (li.classList.contains("is-on") !== on) li.classList.toggle("is-on", on);
    });
  }
  if (track) {
    track.classList.add("is-live");
    window.addEventListener("scroll", function () {
      if (!trackBusy) { trackBusy = true; requestAnimationFrame(paintTrack); }
    }, { passive: true });
    window.addEventListener("resize", paintTrack);
    paintTrack();
  }

  /* ---------- Прокрутка: полоса прогресса и параллакс фото ---------- */
  var bar = document.getElementById("progress");
  var heroPhoto = document.querySelector(".hero__photo");
  var ticking = false;
  var top = document.getElementById("top");
  var prevY = window.scrollY;
  function onScroll() {
    // шапка прячется при прокрутке вниз и возвращается при прокрутке вверх
    var y = window.scrollY;
    if (Math.abs(y - prevY) > 6) {
      top.classList.toggle("is-hidden", y > prevY && y > window.innerHeight * 0.6);
      prevY = y;
    }
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
    if (!calm && window.scrollY < window.innerHeight * 1.2) {
      heroPhoto.style.transform = "translate3d(0," + (window.scrollY * 0.15).toFixed(1) + "px,0)";
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ---------- Бегущая строка: ускоряется при прокрутке ---------- */
  var tickerTrack = document.getElementById("ticker");
  if (tickerTrack && !calm) {
    var group = tickerTrack.firstElementChild;
    tickerTrack.appendChild(group.cloneNode(true));
    var x = 0, boost = 0, lastY = window.scrollY;
    window.addEventListener("scroll", function () {
      boost = Math.min(Math.abs(window.scrollY - lastY) * 0.15, 14);
      lastY = window.scrollY;
    }, { passive: true });
    (function loop() {
      x -= 0.6 + boost;
      boost *= 0.92;
      var w = group.offsetWidth;
      if (w && -x >= w) x += w;
      tickerTrack.style.transform = "translate3d(" + x + "px,0,0)";
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- «Магнитные» кнопки (только мышь) ---------- */
  if (fine && !calm) {
    document.querySelectorAll(".btn, .pill").forEach(function (b) {
      b.addEventListener("mousemove", function (e) {
        var r = b.getBoundingClientRect();
        b.style.transform = "translate(" + ((e.clientX - r.left - r.width / 2) * 0.2) + "px," + ((e.clientY - r.top - r.height / 2) * 0.3) + "px)";
      });
      b.addEventListener("mouseleave", function () { b.style.transform = ""; });
    });
  }
})();
