"use strict";

import Api from './api'

class FrontMenu {

    constructor(target) {

        this.target = target;
        // this.DOM = null;
        this.init();
    }

    async init() {
        const DOM = document.querySelector(this.target);
        if (DOM) {
            console.log(DOM);
            const api = 'frontmenu_create';
            let axios = new Api;
            let HTML = await axios.getDAta(api);
            DOM.innerHTML = HTML;
        }
    }

}

export default FrontMenu;