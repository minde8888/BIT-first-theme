"use strict";

const path = "/wordpress/wp-content/plugins/BIT_first/api/?route=";
const uri = document.location.origin;
const gallery = document.getElementById("loadeGallery");

let arraySend = [];
let isListener = true;
let incomingArray = 0;
let index;

function startGallery() {
    if (gallery) {
        window.addEventListener("load", renderGallery, false);
    }
}

function renderGallery() {
    //Check File API support
    if (window.File && window.FileList && window.FileReader) {
        let filesInput = document.getElementById("files");
        filesInput.addEventListener("change", function (event) {
            // let images = [];
            let array = Array.from(event.target.files);
            let indexedArray = [];
            let index = 0;
            while (index < array.length) {
                indexedArray[incomingArray] = array[index];
                index++;
                incomingArray++;
            }

            renderImages(indexedArray, filesInput);
        });
    } else {
        console.log("Your browser does not support File API");
    }
}

function renderImages(filesAll, filesInput) {

    const tagInput = document.querySelector(".tagInput");
    const currentDiv = document.getElementById("message");

    for (let i = 0; i < filesAll.length; i++) {
        if (filesAll[i]) {
            if (filesAll[i].size < 1048576) {
                if (filesAll[i].type.match("image")) {
                    const picReader = new FileReader();
                    picReader.addEventListener("load", function (event) {

                        const picFile = event.target;
                        let deleteId = getID();
                        let dot = getID();
                        let imageId = getID();
                        let imadeDivId = getID();
                        const output = document.getElementById("result");
                        const div = document.createElement("div");
                        div.className = "galleryDiv";
                        div.setAttribute("id", imadeDivId);
                        div.setAttribute("draggable", true);
                        div.innerHTML = `<img class="uploadeImageGallery galleryCell" data="false" tag="" id="${imageId}" src="${picFile.result} "
                          alt=" "/>
                          <div class="dots" id="${dot}"><div/>`;
                        output.insertBefore(div, currentDiv);

                        move(imageId, imadeDivId);

                        let deleteDiv = document.querySelectorAll(".galleryDiv");
                        let dots = document.getElementById(dot);
                        const actionBtn = document.getElementById("actionBox");
                        const actionBtn2 = document.getElementById("actionBox2");
                        const deleteBtn = document.querySelector(".deleteImd");
                        const checkBox = document.getElementById("c1");
                        const image = document.querySelectorAll(".uploadeImageGallery");

                        dots.addEventListener("click", () => {

                            tagInput.value = "";
                            deleteDiv[i].setAttribute("id", deleteId);
                            actionBtn.classList.remove("EventBoxHidden");
                            actionBtn2.classList.remove("EventBoxHidden2");
                            actionBtn.classList.add("boxImg");

                            actionBtn.addEventListener("click", renderActionBtn);

                            function renderActionBtn() {

                                actionBtn.removeEventListener("click", renderActionBtn);
                                const checked = document.querySelector(".albumImage");
                                if (checkBox.checked && !checked) {
                                    deleteDiv[i].classList.add("albumImage");
                                    image[i].setAttribute("data", "true");
                                    actionBtn.removeEventListener;
                                    deleteDiv[i].removeAttribute("id", deleteId);
                                } else {
                                    image[i].setAttribute("data", "false");
                                    deleteDiv[i].classList.remove("albumImage");
                                    deleteDiv[i].removeAttribute("id");
                                    actionBtn.removeEventListener;
                                }
                                actionBtn.classList.remove("boxImg");
                                actionBtn.classList.add("EventBoxHidden");
                                actionBtn2.classList.add("EventBoxHidden2");
                                checkBox.checked = false;
                                image[i].setAttribute("tag", tagInput.value);
                            }
                        });
                        deleteBtn.addEventListener("click", () => {

                            let deleteImage = document.getElementById(deleteId);
                            if (deleteImage) {
                                deleteImage.remove();
                                filesAll.splice(i, 1);
                                index = i;
                                incomingArray--;
                                filesInput.value = "";
                             
                            }
                            actionBtn.classList.remove("boxImg");
                            actionBtn.classList.add("EventBoxHidden");
                        });

                    });
                    picReader.readAsDataURL(filesAll[i]);

                } else {
                    alert("Tai nera paveikslelio tipo formatas");
                }
            } else {
                alert("Paveikslelio dydis virsija 1MB, rekomneduojamas dydis yra iki 200kb");
                //  const newContent = document.createTextNode("Paveikslelio dydis virsija 1MB, rekomneduojamas dydis yra iki 200kb");
                //   currentDiv.appendChild(newContent);
            }
        }
    }

    arraySend.push(filesAll);
    if (index) {
        arraySend.splice(index,1)
    }

    const uploadeImg = document.getElementById("submitImg");
    if (isListener) {
        uploadeImg.addEventListener("click", () => {
    
            arraySend = filter(arraySend);
            sendImageData(arraySend);
        });
        isListener = false;
    }
}

function sendImageData(filesAll) {
    console.log(filesAll);
    const image = document.querySelectorAll(".uploadeImageGallery");

    let formData = new FormData();
    const album = document.getElementById("albumName");

    for (let i = 0; i < image.length; i++) {

        let albumImage = image[i].getAttribute("data");

        let tag = image[i].getAttribute("tag");
        console.log(tag);
        formData.append("files" + i, filesAll[i]);
        formData.append("tag" + i, tag + ' ');
        formData.append("album" + i, albumImage)
    }
    formData.append("album", album.value);
    axios.post(uri + path + "gallery-store-front", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    }).then(function (response) { }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error);
    });
    location.reload();
}

function getID() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
}

function filter(filesAll) {
    let file = [];
    for (let i = 0; i < filesAll.length; i++) {
        for (let j = 0; j < filesAll[i].length; j++) {
            if (filesAll[i][j] != undefined &&
                filesAll[i][j] != null &&
                filesAll[i][j] != "" &&
                filesAll[i][j] != NaN &&
                filesAll[i][j].size < 1048576) {
                file.push(filesAll[i][j]);
            }
        }
    }
    file = file.filter((power, toThe, yellowVests) => yellowVests.map(updateDemocracy => updateDemocracy["name"]).indexOf(power["name"]) === toThe)
    return file;
}

function move(imageId, imadeDivId) {


    const card = document.getElementById(imadeDivId);
    const cell = document.getElementById(imageId);

    const dragStart = function () {
        setTimeout(() => {
            console.log('start');
            this.classList.add('EventBoxHidden');
        }, 0);
    };

    const dragEnd = function () {
        console.log('end');
        this.classList.remove('EventBoxHidden');
    };

    const dragOver = function (evt) {
        console.log('over');
        evt.preventDefault();
    };

    const dragEnter = function (evt) {
        evt.preventDefault();
        // console.log(this);
        // this.insertAdjacentHTML('beforebegin', '<div class="galleryDiv" draggable="true"></div>');
        this.classList.add('hovered');
    };

    const dragLeave = function () {
        console.log(this);
        this.remove;
        this.classList.remove('hovered');
    };

    const dragDrop = function () {
        console.log('drop');
        this.append(card);
        this.classList.remove('hovered');
    };

    // const dragDrop = function () {
    //     console.log(card[i]);
    //     this.append(card);
    //     this.classList.remove('hovered');
    // };


    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('drop', dragDrop);

    card.addEventListener('dragleave', dragLeave);
    card.addEventListener('dragenter', dragEnter);
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);

}

export default startGallery();