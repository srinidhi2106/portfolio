```javascript
/* ==================================================
   MOBILE MENU
================================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


/* Close menu after clicking a link */

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {

            navLinks.classList.remove("active");

        }

    });

});



/* ==================================================
   DARK / LIGHT MODE
================================================== */

const themeBtn =
    document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");


        if (
            document.body.classList.contains("dark-mode")
        ) {

            themeBtn.textContent = "☀";

            localStorage.setItem(
                "portfolioTheme",
                "dark"
            );

        } else {

            themeBtn.textContent = "☾";

            localStorage.setItem(
                "portfolioTheme",
                "light"
            );

        }

    });


    /* Load saved theme */

    const savedTheme =
        localStorage.getItem("portfolioTheme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeBtn.textContent = "☀";

    }

}



/* ==================================================
   PROFILE PHOTO
================================================== */

function showPhotoPlaceholder() {

    const image =
        document.querySelector(".photo-border img");

    const placeholder =
        document.getElementById("photoPlaceholder");


    if (image) {

        image.style.display = "none";

    }


    if (placeholder) {

        placeholder.style.display = "flex";

    }

}



/* ==================================================
   CONTACT FORM
================================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value;


            if (formMessage) {

                formMessage.textContent =
                    "Thank you, " +
                    name +
                    "! Your message has been received.";

            }


            contactForm.reset();

        }
    );

}



/* ==================================================
   CURRENT YEAR
================================================== */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* ==================================================
   SCROLL REVEAL
================================================== */

const animatedElements =
    document.querySelectorAll(
        ".skill-card, .project-card, " +
        ".about-card, .education-card, " +
        ".profile-detail"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show-card"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    animatedElements.forEach(
        function (element) {

            observer.observe(element);

        }
    );

}
```
