// Execute the code when the window has finished loading
(function(){
    'use strict';
    console.log('reading js');
    
    // Slider functionality
    const sliderContent = document.querySelector('.a');
    const sliderWidth = sliderContent.offsetWidth;
    const cloned = sliderContent.cloneNode(true);
    cloned.className = "b";
    document.querySelector('.slider').appendChild(cloned);
    let root = document.querySelector(':root');
    const endLeftPos = `-${sliderWidth}px`;    
    root.style.setProperty('--sliderwidth', endLeftPos);
    console.log(getComputedStyle(root).getPropertyValue('--sliderwidth'));
    document.querySelector('.slider').classList.add("animate");

    // Pause slider animation on mouseover
    document.querySelector('.slider').addEventListener('mouseover', function(){
        document.querySelector('.animate').style.animationPlayState = 'paused';
        document.querySelector('.img').style = 'hover';
    });

     // Resume slider animation on mouseout
    document.querySelector('.slider').addEventListener('mouseout', function(){
        document.querySelector('.animate').style.animationPlayState = 'running';
    });

    // Overlay functionality
    const openBtns = document.querySelectorAll('.open');
    const closeBtns = document.querySelectorAll('.close');

    // Add event listeners to open buttons
    for (const eachBtn of openBtns) {
        eachBtn.addEventListener('click', function (event) {
            event.preventDefault();
            const thisBtn = event.target.id;
            document.getElementById(`ol-${thisBtn}`).className = 'overlay showing';
        });
    }

    // Add event listeners to close buttons
    for (const eachBtn of closeBtns) {
        eachBtn.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('.showing').className = 'overlay hidden';
        });
    }

    // Add event listener for the Escape key to close overlay
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.querySelector('.showing').className = 'overlay hidden';
        }
    });

})();

    // slide code for rose overlay
    var roseslideIndex = 1;
    roseshowDivs(roseslideIndex);

    function roseplusDivs(n) {
    roseshowDivs(roseslideIndex += n);
    }

    function roseshowDivs(n) {
    var i;
    var x = document.getElementsByClassName("roseSlides");
    if (n > x.length) {roseslideIndex = 1}
    if (n < 1) {roseslideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[roseslideIndex-1].style.display = "block";
    }

    // slide code for sunflower overlay
    var sunslideIndex = 1;
    sunshowDivs(sunslideIndex);

    function sunplusDivs(n) {
    sunshowDivs(sunslideIndex += n);
    }

    function sunshowDivs(n) {
    var i;
    var x = document.getElementsByClassName("sunSlides");
    if (n > x.length) {sunslideIndex = 1}
    if (n < 1) {sunslideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[sunslideIndex-1].style.display = "block";
    }

    // slide code for bouquet overlay
    var bouqslideIndex = 1;
    bouqshowDivs(bouqslideIndex);

    function bouqplusDivs(n) {
    bouqshowDivs(bouqslideIndex += n);
    }

    function bouqshowDivs(n) {
    var i;
    var x = document.getElementsByClassName("bouqSlides");
    if (n > x.length) {bouqslideIndex = 1}
    if (n < 1) {bouqslideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[bouqslideIndex-1].style.display = "block";
    }

    // slide code for orchid overlay
    var orcslideIndex = 1;
    orcshowDivs(orcslideIndex);

    function orcplusDivs(n) {
    orcshowDivs(orcslideIndex += n);
    }

    function orcshowDivs(n) {
    var i;
    var x = document.getElementsByClassName("orcSlides");
    if (n > x.length) {orcslideIndex = 1}
    if (n < 1) {orcslideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[orcslideIndex-1].style.display = "block";
    }

    // slide code for Starry night overlay
    var starslideIndex = 1;
    starshowDivs(starslideIndex);

    function starplusDivs(n) {
    starshowDivs(starslideIndex += n);
    }

    function starshowDivs(n) {
    var i;
    var x = document.getElementsByClassName("starSlides");
    if (n > x.length) {starslideIndex = 1}
    if (n < 1) {starslideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[starslideIndex-1].style.display = "block";
    }