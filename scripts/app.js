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
// submit form
document.querySelector('.fill-form').addEventListener('submit',function(event){
event.preventDefault();
const name = document.querySelector('.input-name').value;
const lastName = document.querySelector('.input-lastname').value;
const email = document.querySelector('.input-email').value;

let value = ui.checkEmpty(name, lastName, email);

if(value){
    let customer = new Customer(name,lastName,email);
    console.log(customer);
    ui.addCustomer(customer);
    ui.showFeedback('successful ','success');
    ui.clearFields();


}else{
    ui.showFeedback('some form values are empty', 'error');
}
});

// display modal
const links = document.querySelectorAll('.work-item__icon');
console.log(links);
links.forEach(function(item){
    item.addEventListener('click',function(event){
        ui.showModal(event);
    });
});

// hide modal
document.querySelector('.work-modal__close').addEventListener('click',function(){
    ui.closeModal();
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
UI.prototype.checkEmpty = function(name,lastName,email){
    let result;
    if(name === '' || lastName === '' || email === ''){
        result = false;
    }else{
        result = true;
    }
    return result;
}
UI.prototype.showFeedback = function(text, type){
    const feedback = document.querySelector('.fill-form__feedback');
    if(type === 'success'){
        feedback.classList.add('success');
        feedback.innerText = text;
        this.removeAlert('success');
}else if(type === 'error'){
        feedback.classList.add('error');
        feedback.innerText = text;
        this.removeAlert('error');
    }
}
// Remove Alert
UI.prototype.removeAlert = function(type){
    setTimeout(function () {
        document.querySelector('.fill-form__feedback').classList.remove(type);   
    }, 3000);

}

// object constructor to add customer
UI.prototype.addCustomer = function(customer){
    const images = [1,2,3,4,5];
    let random = Math.floor(Math.random()*images.length);
    const div = document.createElement('div');
    div.classList.add('person');
    div.innerHTML =  `
    <img src="img/${random}.jpg" alt="" class="person__thumbnail">
                        <h4 class="person__name">${customer.name}</h4>
                        <h4 class="person__lastname">${customer.lastName}</h4>
    `
    document.querySelector('.testimonial-card__list').appendChild(div);
}
// clear fields 
UI.prototype.clearFields = function(){
    document.querySelector('.input-name').value = '';
    document.querySelector('.input-lastname').value = '';
    document.querySelector('.input-email').value = '';
}

// display modal
UI.prototype.showModal = function(event){
    event.preventDefault();
    if(event.target.parentElement.classList.contains('work-item__icon')){
        let id = event.target.parentElement.dataset.id;
        
        const modal = document.querySelector('.work-modal');
        const modalItem= document.querySelector('.work-modal__item');

        modal.classList.add('work-modal__show');
        modalItem.style.backgroundImage = `url(img/${id}.jpg)`;
    };
}
// hide modal
UI.prototype.closeModal = function(){
    document.querySelector('.work-modal').classList.remove('work-modal__show');
}


// object constructor function for form customer
function Customer(name,lastName,email){
    this.name = name;
    this.lastName = lastName;
    this.email = email;
}

// END OF CONSTRUCTOR FUNCTION



