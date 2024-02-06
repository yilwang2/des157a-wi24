(function(){
    'use strict';
    console.log('reading js');

    const myStory = document.querySelector('#madlib');
    const myForm = document.querySelector('form');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const animal = document.querySelector('#animal').value;
        const building = document.querySelector('#building').value;
        const fruit = document.querySelector('#fruit').value;
        const adjective = document.querySelector('#adjective').value;
        const emotion = document.querySelector('#emotion').value;
        const noun = document.querySelector('#noun').value;

        let myText;

        if(animal == ''){
            myText = "Please give me an animal";
            document.querySelector('#animal').focus();
        }
        else if(building == ''){
            myText = "Please give me a type of building";
            document.querySelector('#building').focus();
        }
        else if(fruit == ''){
            myText = "Please give me a fruit";
            document.querySelector('#fruit').focus();
        }
        else if(adjective == ''){
            myText = "Please give me an adjective";
            document.querySelector('#adjective').focus();
        }
        else if(emotion == ''){
            myText = "Please give me an emotion";
            document.querySelector('#emotion').focus();
        }
        else if(noun == ''){
            myText = "Please give me a noun";
            document.querySelector('#noun').focus();
        }
        else {
            myText = `On a cloudy morning, there was an ${animal} looking for food in a ${building}. As it walked, it found a ${fruit}, which it took home. It tasted it and realized that it turned out to be an ${adjective} fruit, and it was so ${emotion} that it turned the fruit into a ${noun}.`;
            document.querySelector('#animal').value = '';
            document.querySelector('#building').value = '';
            document.querySelector('#fruit').value = '';
            document.querySelector('#adjective').value = '';
            document.querySelector('#emotion').value = '';
            document.querySelector('#noun').value = '';
        }
        myStory.innerHTML = myText;
    

    document.querySelector('#send-it').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = 'showing';
    });

    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape') {
            document.getElementById('overlay').className = 'hidden';
        }
    });
});

})();