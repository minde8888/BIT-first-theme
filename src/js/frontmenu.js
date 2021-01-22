"use strict";

import Api from './api'

class FrontMenu {

    constructor(target) {

        this.target = target;
        this.DOM = null;
        this.renderSideMenu();
        this.init();
    }

    async init() {
        const DOM = document.querySelector(this.target);
        if (DOM) {
            const api = 'frontmenu_create';
            let axios = new Api;
            let HTML = await axios.getDAta(api);
            DOM.innerHTML = HTML;
        }
    }

    renderSideMenu() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector('.navMenu');
        // console.log(hiden);
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("hiden");
        })

    }
}

export default FrontMenu;