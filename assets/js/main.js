(function () {
  "use strict";
  var cfg = window.SHOHYO_CONFIG || {};
  var root = document.documentElement.getAttribute("data-root") || "";

  function all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function resolve(url) { return /^(https?:|mailto:|#)/.test(url) ? url : root + url; }

  /* ---- 設定の反映 ---- */
  all("[data-cfg]").forEach(function (el) {
    var v = cfg[el.getAttribute("data-cfg")];
    if (v) { el.textContent = v; }
  });

  var boothReady = !!(cfg.boothReady && cfg.boothUrl);
  all("[data-booth]").forEach(function (a) {
    if (boothReady) {
      a.href = cfg.boothUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = a.getAttribute("data-label") || "製品版を購入(BOOTH)";
      a.classList.remove("is-disabled");
      a.removeAttribute("aria-disabled");
    }
  });
  all("[data-booth-note]").forEach(function (el) { if (boothReady) { el.hidden = true; } });

  var trialReady = !!(cfg.trialUrl && cfg.trialIsPlaceholder === false);
  all("[data-trial]").forEach(function (a) {
    if (trialReady) {
      a.href = resolve(cfg.trialUrl);
      a.textContent = a.getAttribute("data-label") || "体験版をダウンロード";
      a.classList.remove("is-disabled");
      a.removeAttribute("aria-disabled");
    }
  });
  all("[data-trial-note]").forEach(function (el) { if (trialReady) { el.hidden = true; } });


  /* ---- モバイルメニュー ---- */
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---- スクリーンショット拡大 ---- */
  var box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-label", "画面の拡大表示");
  var big = null;
  document.body.appendChild(box);
  function close() { box.classList.remove("open"); }
  box.addEventListener("click", close);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { close(); } });
  all(".shot button").forEach(function (b) {
    b.addEventListener("click", function () {
      var img = b.querySelector("img");
      if (!big) { big = document.createElement("img"); box.appendChild(big); }
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      box.classList.add("open");
    });
  });
})();
