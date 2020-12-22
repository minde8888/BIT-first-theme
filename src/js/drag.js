"use strict";

class DragAndDrop {

    move() {
        const card = document.querySelectorAll('.galleryDiv');
        const cells = document.querySelectorAll('.galleryCell');
        let counet = 0;
        for (let i = 0; i < card.length; i++) {
            counet++;
            console.log(counet);
            card[i].addEventListener('dragstart', function () {
                setTimeout(() => {
                    this.classList.add('EventBoxHidden');
                }, 0)
            });

            card[i].addEventListener('dragend', function () {
                this.classList.remove('EventBoxHidden');
            });
        }
        for (let j = 0; j < cells.length; j++) {

            cells[j].addEventListener('dragover', function (e) {
                e.preventDefault();
                // this.classList.remove('EventBoxHidden');
                // const div = document.createElement("div");
                // div.className = "galleryDiv";
                // console.log(div);
            });
            cells[j].addEventListener('dragenter', function () {

                // this.insertAdjacentHTML('beforebegin', '<div class="galleryDiv" draggable="true"></div>');

                // console.log(div);
            });
            cells[j].addEventListener('dragleave', () => {
                // console.log(this);
                // this.remove;
            });
            card[j].addEventListener('drop', function () {
                console.log(cells[j]);
                this.append(cells[j]);
            });
        }



    }
}

export default DragAndDrop;