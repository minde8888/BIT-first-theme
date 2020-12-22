<div class="sm-3-4  al">
    <div class="sm-3-4 cl">
        <div class="eventsHome">
            <div class="boxEvent-1">
                <div class="todayEvent">
                    ŠIANDIENOS ĮVYKIAI:
                </div>
                <div class="todaysEvents">
                </div>
            </div>
            <div class="boxEvent-2">
                <div class="nearestEvent">
                    ARTIMIAUSI ĮVYKIAI:
                </div>
                <div class="nearestEvents">
                </div>
            </div>
        </div>
    </div>
    <div class="sm-5-8 dl">
        <?= $news; ?>
    </div>
</div>
<div class="sm-1 imgBlock">
    <img class="imgHome" src="http://localhost/wordpress/wp-content/uploads/2020/11/kava.jpg" alt="kava">
    <div class="homeImgContainer">
        <div class="welcome">
            Welcome to the Rally Template
        </div>
        <div class="title">
            to get started, watch these short videos
        </div>
        <div class="title">
            on squarespace basics and read the
        </div>
        <div class="title">
            template guide.
        </div>
        <div class="filosofyBtn">
            reade more
        </div>
    </div>
    </img>
</div>
<div class="sm-3-4 wd">
    <div class="idea-container" id="startIdeaFront">
        <div class="idea">
            <label>
                IDĖJOS
            </label>
            <a href="http://localhost/wordpress/idejos/">Pamatyti visas idėjas</a>
        </div>
        <div class="cont">
            <div class="backdrop">
                <div class="highlights">
                </div>
            </div>
            <textarea maxlength="200" placeholder="Įrašykite savo idėjas ar pastebėjimus" name="idea" id="textArea">
            </textarea>
        </div><span class="textCount" id="count"></span>
        <button id="sendIdea">
            Siusti
        </button>
        <div class="wrapper" id="box">
        </div>
    </div>
</div>
<div class="sm-3-4 wd">
    <div class="gallery-container" id="startIdeaFront">
        <div class="idea">
            <label>
                GALERIJA
            </label>
            <a href="http://localhost/wordpress/galerija/">Pamatyti visą galeriją</a>
        </div>
        <div class="idea-container">
            <?= $album;?>
        </div>
    </div>
</div>