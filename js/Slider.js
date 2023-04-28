class Slider{
    /*
    Properties:
        className: The CSS class name used to identify the slider container elements (Child Elements).
        prevButtonId: The ID of the HTML button element used to go to the previous slide.
        nextButtonId: The ID of the HTML button element used to go to the next slide.
        slides: A collection of HTML elements that represent the slides in the slider.
        counter: A counter variable used to keep track of the current slide.

    Methods:
        setUp(): A method that sets up the slider by positioning the slides and adding event listeners to the previous and next buttons.
        showPrevSlide(): A method that displays the previous slide in the slider.
        showNextSlide(): A method that displays the next slide in the slider.
        addEventListenerOnButtons(): A method that adds event listeners to the previous and next buttons to handle slide navigation.
        slideImages(): A method that animates the slider by moving the slides to the left or right based on the current slide counter.
    */    
    constructor(className,prevButtonId,nextButtonId){
        console.log('Here')
        this.className = className;
        this.prevButtonId = prevButtonId;
        this.nextButtonId = nextButtonId;
        this.setUp();
    }
    
    setUp(){
        this.slides = document.querySelectorAll(`.${this.className}`)
        this.counter = 0;
        this.slides.forEach(
            (slide,index)=>{
                slide.style.left = `${index*100}%`;
        });
        this.addEventListenerOnButtons();
    }
    showPrevSlide(){
        if (this.counter>=1){
            this.counter--;
            this.slideImages();
        }
    }
    showNextSlide(){
        if(this.counter<this.slides.length-1){
            this.counter++;
            this.slideImages();
        }
    }

    addEventListenerOnButtons(){
        const prevButton = document.getElementById(this.prevButtonId);
        const nextButton = document.getElementById(this.nextButtonId);
        prevButton.addEventListener('click',()=>{
            this.showPrevSlide();
        })
        nextButton.addEventListener('click',()=>{
            this.showNextSlide();

        })
    }

    slideImages (){
        this.slides.forEach(
            (slide)=>{
                slide.style.transform=`translateX(-${this.counter*100}%)`;
            }
        )
    }
}