"use strict";

import axios from 'axios';
class Api {
    constructor() {
        this.apiPath = WPURLS.apiUrl;
        this.html = null;
     
    }
    
    delete(api, id) {
        axios
            .post(
                this.apiPath +
                api + id,
                {
                    deleteId: id,
                }
            )
            .catch(function (error) {
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
                console.log("Data from the server is not available !!!");
            });
    }
    async getDAta(api) {
        try {
            let response = await axios.post(this.apiPath + api,)
            if (response.status == 200 && response.statusText == "OK") {
                return response.data.html;
            }
        } catch (e) {
            console.error(e);
            console.log("Data from the server is not available !!!");
        }
    }

    saveContent(api, id, content) {
        axios
            .post(
                this.apiPath + api,
                {
                    id: id,
                    content: content,
                }
            )
            .catch(function (error) {
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
                console.log("Data from the server is not available !!!");
            });
    }

    formDataApi(obj, images = null) {

        let formData = new FormData();
        if (obj.api) {

            for (var key in obj) {
                formData.append(key, obj[key])
            }
            if (images != null) {
                for (let i = 0; i < images.length; i++) {
                    formData.append('image[' + i + ']', images[i])
                }
            }

            console.log(Object.fromEntries(formData))
            axios.post(this.apiPath + obj.api, formData, {}).then(function (response) { }).catch(function (error) {
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
        } else {
            throw 'can not find API';
        }
    }

    async getPostData(obj) {
        if (obj.api) {
            try {
                let formData = new FormData();
                for (var key in obj) {
                    formData.append(key, obj[key])
                }
                console.log(Object.fromEntries(formData))
                let response = await axios.post(this.apiPath + obj.api, formData, {});
                if (response.status == 200 && response.statusText == "OK") {
                    return await response.data.html;
                }
            } catch (e) {
                console.error(e);
                console.log("Data from the server is not available !!!");
            }
        } else {
            throw 'can not find API';
        }
    }

    static getApiPath(){
        return this.apiPath;
    }
}
export default Api;



