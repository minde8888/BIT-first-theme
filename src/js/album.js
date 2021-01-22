"use strict";

import Pagination from './pagination';

class Album extends Pagination{

    constructor(target) {
        super();
        this.api = "album-create-admin";
        this.target = target;
        this.pages = 5;
        this.changes;
        this.watch = document.querySelector(".albumImages");
        this.init();
    }

    async init() {
        const DOM = document.querySelector(this.target);
        console.log(DOM);
        if (DOM) {
            this.hashChange();
            this.paging();
        }
    }
}

export default Album;