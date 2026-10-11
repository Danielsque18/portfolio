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
      title: "North Shear",
      type: "Барбершоп в Омске. Лендинг с прайсом-калькулятором и записью",
      status: "live",
      url: "https://danielsque18.github.io/north-shear/",
      host: "danielsque18.github.io/north-shear",
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
    { title: "Детейлинг", type: "Студия детейлинга авто", status: "soon", note: "Скоро в портфолио" },
    { title: "Кофейня",   type: "Кофе и десерты",          status: "soon", note: "Скоро в портфолио" }
  ];

  /* ===== ОТЗЫВЫ: добавляйте блок сюда (пока пусто) =====
     Пример: { name: "Имя клиента", role: "Барбершоп North Shear", text: "Текст отзыва" } */
  var REVIEWS = [];

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
    head.appendChild(el("p", "case__type", p.type));
    c.appendChild(head);

    // сцена: ноутбук + телефон
    var stage = el("div", "stage");
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
    body.appendChild(facts);

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
    item.appendChild(el("p", "review__text", r.text));
    var who = el("p", "review__who");
    who.appendChild(el("strong", "", r.name));
    if (r.role) who.appendChild(document.createTextNode(", " + r.role));
    item.appendChild(who);
    reviewList.appendChild(item);
  });
  if (REVIEWS.length) document.getElementById("reviewEmpty").hidden = true;

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
