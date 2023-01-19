$(document).ready(function () {
  var e = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    ),
    t = $("#preloader");
  e
    ? t.remove()
    : (setTimeout(function () {
        t.addClass("preloaded");
      }, 800),
      setTimeout(function () {
        t.remove();
      }, 2e3)),
    $(".typed").typed({
      strings: [
        "are specialized.",
        "focus on results.",
        "are responsive.",
        "go the extra mile.",
      ],
      stringsElement: null,
      typeSpeed: 20,
      backSpeed: 3,
      backDelay: 500,
      loop: !0,
      showCursor: !0,
      cursorChar: "|",
      attr: null,
      contentType: "html",
      callback: function () {},
      preStringTyped: function () {},
      onStringTyped: function () {},
      resetCallback: function () {},
    })
}),
  (function () {
    "use strict";
    const e = (e, t = !1) => (
        (e = e.trim()),
        t ? [...document.querySelectorAll(e)] : document.querySelector(e)
      ),
      t = (t, o, i, a = !1) => {
        let l = e(o, a);
        l &&
          (a
            ? l.forEach((e) => e.addEventListener(t, i))
            : l.addEventListener(t, i));
      },
      o = (e, t) => {
        e.addEventListener("scroll", t);
      };
    let i = e("#navbar .scrollto", !0);
    const a = () => {
      let t = window.scrollY + 200;
      i.forEach((o) => {
        if (!o.hash) return;
        let i = e(o.hash);
        i &&
          (t >= i.offsetTop && t <= i.offsetTop + i.offsetHeight
            ? o.classList.add("active")
            : o.classList.remove("active"));
      });
    };
    window.addEventListener("load", a), o(document, a);
    const l = (t) => {
      let o = e(t).offsetTop;
      window.scrollTo({ top: o, behavior: "smooth" });
    };
    let s = e("#header");
    if (s) {
      const e = () => {
        window.scrollY > 100
          ? s.classList.add("header-scrolled")
          : s.classList.remove("header-scrolled");
      };
      window.addEventListener("load", e), o(document, e);
    }
    let n = e(".back-to-top");
    if (n) {
      const e = () => {
        window.scrollY > 100
          ? n.classList.add("active")
          : n.classList.remove("active");
      };
      window.addEventListener("load", e), o(document, e);
    }
    t("click", ".mobile-nav-toggle", function (t) {
      e("#navbar").classList.toggle("navbar-mobile"),
        this.classList.toggle("fa-bars"),
        this.classList.toggle("fa-times");
    }),
      t(
        "click",
        ".navbar .dropdown > a",
        function (t) {
          e("#navbar").classList.contains("navbar-mobile") &&
            (t.preventDefault(),
            this.nextElementSibling.classList.toggle("dropdown-active"));
        },
        !0
      ),
      t(
        "click",
        ".scrollto",
        function (t) {
          if (e(this.hash)) {
            t.preventDefault();
            let o = e("#navbar");
            if (o.classList.contains("navbar-mobile")) {
              o.classList.remove("navbar-mobile");
              let t = e(".mobile-nav-toggle");
              t.classList.toggle("fa-bars"), t.classList.toggle("fa-times");
            }
            l(this.hash);
          }
        },
        !0
      ),
      window.addEventListener("load", () => {
        window.location.hash &&
          e(window.location.hash) &&
          l(window.location.hash);
      });
    let r = e(".skills-content");
    r &&
      new Waypoint({
        element: r,
        offset: "80%",
        handler: function (t) {
          e(".progress .progress-bar", !0).forEach((e) => {
            e.style.width = e.getAttribute("aria-valuenow") + "%";
          });
        },
      }),
      new Swiper(".testimonials-slider", {
        speed: 600,
        loop: !0,
        autoplay: { delay: 5e3, disableOnInteraction: !1 },
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: !0,
        },
      }),
      window.addEventListener("load", () => {
        let o = e(".portfolio-container");
        if (o) {
          let i = new Isotope(o, { itemSelector: ".portfolio-item" }),
            a = e("#portfolio-flters li", !0);
          t(
            "click",
            "#portfolio-flters li",
            function (e) {
              e.preventDefault(),
                a.forEach(function (e) {
                  e.classList.remove("filter-active");
                }),
                this.classList.add("filter-active"),
                i.arrange({ filter: this.getAttribute("data-filter") });
            },
            !0
          );
        }
      });
    GLightbox({ selector: ".portfolio-lightbox" });
    new Swiper(".portfolio-details-slider", {
      speed: 400,
      loop: !0,
      autoplay: { delay: 5e3, disableOnInteraction: !1 },
      pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 },
    });
  })();
