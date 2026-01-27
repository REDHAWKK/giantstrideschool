document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       FEATHER ICONS
    =============================== */
    if (window.feather) {
        feather.replace();
    }

    /* ===============================
       AOS
    =============================== */
    if (window.AOS) {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true
        });
    }

    /* ===============================
       MOBILE MENU
    =============================== */
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    /* ===============================
       SMOOTH SCROLL
    =============================== */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", e => {
            const targetId = link.getAttribute("href");
            if (targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    /* ===============================
       FOOTER YEAR
    =============================== */
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    /* ===============================
       BACK TO TOP
    =============================== */
    const backToTop = document.createElement("button");
    backToTop.innerHTML = '<i data-feather="arrow-up"></i>';
    backToTop.className =
        "fixed bottom-8 right-8 bg-orange-500 text-white p-3 rounded-full shadow-lg hidden z-50";

    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {
        backToTop.classList.toggle("hidden", window.scrollY < 300);
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    if (window.feather) {
        feather.replace();
    }

    /* ===============================
       FAQ ACCORDION
    =============================== */
    document.querySelectorAll(".faq-question").forEach(btn => {
        btn.addEventListener("click", () => {
            const answer = btn.nextElementSibling;
            const icon = btn.querySelector("i");

            if (!answer) return;

            answer.classList.toggle("hidden");

            if (icon) {
                icon.style.transform = answer.classList.contains("hidden")
                    ? "rotate(0deg)"
                    : "rotate(180deg)";
            }
        });
    });


/* ===============================
   GALLERY FILTERS (ALWAYS RUN)
=============================== */
const gallery = document.getElementById("gallery");

if (gallery) {
    const filterButtons = document.querySelectorAll(".filter-button");
    const galleryItems = gallery.querySelectorAll(".gallery-item");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const filter = btn.dataset.filter;

            // Button UI
            filterButtons.forEach(b => {
                b.classList.toggle("bg-orange-500", b === btn);
                b.classList.toggle("text-white", b === btn);
                b.classList.toggle("bg-gray-200", b !== btn);
                b.classList.toggle("text-gray-800", b !== btn);
            });

            // Filtering
            galleryItems.forEach(item => {
                item.classList.toggle(
                    "hidden",
                    filter !== "all" && !item.classList.contains(filter)
                );
            });

            // Refresh LightGallery ONCE (correct place)
            if (window.lgInstance) {
                window.lgInstance.refresh();
            }
        });
    });
}


/* ===============================
   LIGHTGALLERY INITIALIZATION
=============================== */
if (gallery && window.lightGallery) {
    lightGallery(gallery, {
        selector: ".gallery-item",
        download: false,
        thumbnail: true
    });
}
});
const moreBtn = document.getElementById("more-btn");
const moreMenu = document.getElementById("more-menu");

if (moreBtn && moreMenu) {
  moreBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    moreMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", () => {
    moreMenu.classList.add("hidden");
  });
}
