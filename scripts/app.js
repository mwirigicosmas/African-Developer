// hide preloder when site fully loads
// window event lisetner
eventListeners();
function eventListeners(){
    const ui = new UI();
    // window load
window.addEventListener('load', function(){
    ui.hidepreloader();
});
// nav btn
document.querySelector('.navBtn').addEventListener('click',function(){
    ui.shownav();
});
// control the video
document.querySelector('.video__switch').addEventListener('click',function(){
    ui.videocontrols();
});  
}
//  CONSTRUCTOR FUNCTION START
function UI(){
}
// hide preloader
UI.prototype.hidepreloader = function(){
    document.querySelector('.preloader').style.display="none";
}
// show nav bar
UI.prototype.shownav = function(){
    document.querySelector('.nav').classList.toggle('nav__show');
}
// play or pause video
UI.prototype.videocontrols = function(){
    let btn = document.querySelector('.video__switch-btn');
    if(!btn.classList.contains('btnSlide')){
        btn.classList.add('btnSlide');
        document.querySelector('.video__item').pause();
    }else{
        btn.classList.remove('btnSlide')
        document.querySelector('.video__item').play()
    } 
}
// END OF CONSTRUCTOR FUNCTION



