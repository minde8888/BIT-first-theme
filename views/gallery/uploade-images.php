<h1>
    Sukurti nauja nuorauku albuma
</h1>
<div class="form__group">
    <input type="text" class="form__input" id="albumName" placeholder="Iveskite albumo pavadinima" required="" />
    <!--   <label for="name" class="form__label">Sukurti nauja albuma</label> -->
    <!--   <select class="select-css">
    <option>Pasirinkti norima albuma</option>
    <option>Apples</option>
    <option>Bananas</option>
    <option>Grapes</option>
    <option>Oranges</option>
</select> -->
</div>
<div class="galleryContainer" id="loadeGallery">
    <output class="gallerGrid" id='result' />
    <div id="message">
        <div class="wrapper">
            <div class="file-upload">
                <label for="files"><span>&#43;</span></label>
                <input class="galleryImage" type="file" id='files' name="img[]" accept="image/*" multiple>
            </div>
        </div>
        <div class="galleryUploade">
            <div class="svg-wrapper">
                <svg height="60" width="150">
                    <rect id="shape" height="60" width="150" />
                    <div id="text">
                        <input class="uplodeBtn" type="button" id="submitImg" value='Siusti'><span class="spot"></span>
                    </div>
                </svg>
            </div>
        </div>
    </div>
</div>
<div class="EventBoxHidden" id="actionBox">
    <div class="deleteImd">
        Trinti
    </div>
</div>
<div class="EventBoxHidden2" id="actionBox2">
    <div class="tagImg ">
        <label>
            Tag:
        </label>
        <input type="text" class="altInput" name="altImage" value="">
    </div>
    <ul>
        <li>
            <label for="c1"> Naudoti kaip virselio nuotrauka</label>
            <input id="c1" type="checkbox">
        </li>
    </ul>
</div>