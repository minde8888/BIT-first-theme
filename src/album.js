"use strict";

import axios from 'axios';

class Album {

    constructor(target) {
        this.target = target;
        this.DOM = null;
        this.path = "/wordpress/wp-content/plugins/BIT_first/api/?route=";
        this.uri = document.location.origin;
        this.init();
console.log(window.location.pathname)
    }

    init() {
        const DOM = document.querySelector(this.target);
        if (DOM) {
            axios.post(this.uri + this.path + 'album-create-admin', {})
                .then(function(response) {

                    const test = document.querySelector(".test");
                    if (response.status == 200 && response.statusText == 'OK') {
                        const HTML = response.data.html;
                        test.innerHTML = HTML;
                    }
                }).catch(function(error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error);
                });
        }

    }
}

export default Album;