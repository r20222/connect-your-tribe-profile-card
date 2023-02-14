const buttonYes = document.querySelector('.btn-yes');
const buttonNo = document.querySelector('.btn-no');
let button = document.querySelector('.balloon-button');
const astronautMobile = document.querySelector('.astronaut-mobile');
let talkBalloon = document.querySelector('.talk-balloon');
const land = document.querySelector('.land');

const moon = document.querySelector('.moon');
const saturn = document.querySelector('.saturn');
const mars = document.querySelector('.mars');
const telescope = document.querySelector('.telescope');




// Let op!! Ik denk dat de elementen die je niet altijd ziet in een if statement moet zetten.

let balloonText = document.querySelector('.talk-balloon h1');

if(buttonYes){
 buttonYes.addEventListener('click', nextText);
}

if(buttonNo){
   buttonNo.addEventListener('click', noText);
}

function nextText(){
    balloonText.innerHTML = 'Gezellig! Ik zal je eerst vertellen hoe mijn sterrenkijker werkt.';
    buttonYes.innerHTML = 'Leuk!';
    buttonNo.remove();

    // tweede klik
    buttonYes.addEventListener('click', nextText2);
    function nextText2(){
        balloonText.innerHTML = 'Druk zometeen op een hemellichaam dat je van dichtbij zou willen zien, daarna kan je het bestuderen.'
        balloonText.style.fontSize = 1.5 + 'rem';
        buttonYes.innerHTML = 'Aan de slag!';
        button.style.width = 150 + 'px';
        buttonYes.addEventListener('click', removeObjects);
        function removeObjects(){
            astronautMobile.remove();
            buttonYes.remove();
            balloonText.remove();
            talkBalloon.remove();
            

            // de planeten etc. verschijnen
            moon.style.display = 'inline-block';
            saturn.style.display = 'inline-block';
            mars.style.display = 'inline-block';
            telescope.style.display = 'inline-block';
        }
    }
    
}

function noText(){
    buttonNo.remove();
    balloonText.innerHTML = 'Ik bel zo mijn vrienden van Mars om je te komen opbeamen,hahaha!'
    buttonYes.innerHTML = 'Dat wil ik!';
    button.style.width = 150 + 'px';
}




// moon click

const moonSvg = document.querySelector('.moon svg')
const moonText = document.querySelector('.moon-text')

moon.addEventListener('click', zoomMoon);

function zoomMoon(){

    moonSvg.classList.toggle('zoom-moon');
    telescopeGroup.classList.toggle('telescope-rotate-moon')
    saturn.classList.toggle('blur')
    mars.classList.toggle('blur')
    telescope.classList.toggle('blur')
    moonText.classList.toggle('opacity')
    land.classList.toggle('blur')

}

// telescope movement on moon click

const telescopeGroup = document.querySelector('.telescope-group');


// saturn click
const saturnSvg = document.querySelector('.saturn svg')
const saturnText = document. querySelector('.saturn-text')

saturn.addEventListener('click', zoomSaturn)

function zoomSaturn(){

    saturnSvg.classList.toggle('saturn-zoom')
    telescopeGroup.classList.toggle('telescope-rotate-saturn')
    moon.classList.toggle('blur')
    mars.classList.toggle('blur')
    telescope.classList.toggle('blur')
    saturnText.classList.toggle('opacity')
    land.classList.toggle('blur')
}


// Mars click

const marsSvg = document.querySelector('.mars svg')
const marsTextLink = document.querySelector('.mars-text-link')
const marsText = document.querySelector('.mars-text')

mars.addEventListener('click', zoomMars)

function zoomMars(){

    marsSvg.classList.toggle('mars-zoom')
    moon.classList.toggle('blur')
    saturn.classList.toggle('blur')
    telescope.classList.toggle('blur')
    marsText.classList.toggle('opacity')
    telescopeGroup.classList.toggle('telescope-rotate-mars')
    land.classList.toggle('blur')
}

































// oude visitekaart
// oude visitekaart


// probeersel met on click

// const clicks = document.querySelectorAll('.click');

// clicks.forEach(function(klik) {
//     klik.addEventListener('click', ()=> {
//     klik.classList.toggle('flip-around');
//   });
// });