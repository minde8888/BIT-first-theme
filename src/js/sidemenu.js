// "use strict";

// import Api from './api'

// class SideMenu {

//     constructor(target) {

//         this.target = target;
//         console.log(target)
//         this.DOM = null;
//         // this.path = "/wordpress/wp-content/plugins/BIT_first/api/?route=";
//         // this.uri = document.location.origin;
//        this.renderSideMenu();
//         // this.init();
//     }

//     async init() {
//         const DOM = document.querySelector(this.target);
//         if (DOM) {
//             const api = 'frontmenu_create';
//             let axios = new Api;
//             let HTML = await axios.getDAta(api);
//             DOM.innerHTML = HTML;
//         }
//     }

//     renderSideMenu(){
//         let hamburger = document.querySelector('.hamburger');
//         console.log(hamburger);
//     }
// }

// export default SideMenu;