class SlideCounter{
    constructor(){
        this.currentSlideNumber = 0;
        this.totalSlide = 4;
    }

    inc(){
        this.currentSlideNumber = (this.currentSlideNumber+1)%this.totalSlide;
    }
}


function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve, time));
}

var slideShowTime = 2000;
var fadeTime = 2000;
function showSlide(slide){
    sleep(fadeTime*2 + slideShowTime).then(()=>{
        slide.style.display = "block";
        slide.className="slider current";
    });
}

function closeSlide(slide){
    sleep(fadeTime + slideShowTime).then(()=>{
        slide.style.display="block"
        slide.className="slider";
        sleep(fadeTime).then(()=>{
            slide.style.display="none";
        });
    })
}

var counter = new SlideCounter();
timer = null;
function changeSlideAutomatically(intervel){
    var allSlidesDom = document.querySelectorAll(".slider");
    var firstSlideDom = allSlidesDom[counter.currentSlideNumber];

    var currentSlideDom = allSlidesDom[counter.currentSlideNumber];
    closeSlide(currentSlideDom);
    counter.inc();

    var nextSlideDom = allSlidesDom[counter.currentSlideNumber];
    showSlide(nextSlideDom);

    timer = setInterval(()=>{
        var currentSlideDom = allSlidesDom[counter.currentSlideNumber];
        closeSlide(currentSlideDom);
        counter.inc();

        var nextSlideDom = allSlidesDom[counter.currentSlideNumber];
        showSlide(nextSlideDom);

    }, fadeTime*2 + slideShowTime); 
}


changeSlideAutomatically();