"use strict";

class LightBox {
    constructor(target) {
        this.target = target;
        this.DOM = null;
        this.ontach();
    }
    ontach() {
        const DOM = document.getElementById(this.target);

        if (DOM) {
            const image = document.querySelectorAll(".imageBox");

            image.forEach(el => {
                el.addEventListener('touchstart', function (e) {
                    if (!e.target.className) {
                        e.target.className = "lightbox"
                    }
                })
                el.addEventListener('touchend', e => {
                    if (e.target.className == "lightbox") {
                        e.target.classList.remove("lightbox")
                    }
                })
            });
        }
    }
}

export default LightBox;