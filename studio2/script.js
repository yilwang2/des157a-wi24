// Execute the code when the window has finished loading
window.addEventListener('load', function(){
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