"use strict";

import Api from './api'

class Album {

    constructor(target) {

        this.target = target;
        this.DOM = null;
        this.init();
    
    }

    async init() {
        const DOM = document.querySelector(this.target);
        if (DOM) {
            const container = document.getElementById("albumContainer");
            const api = 'album-create-admin';
            let axios = new Api;
            let HTML = await axios.getDAta(api);
            container.innerHTML = HTML;
        }
    }
}

export default Album;