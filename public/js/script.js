const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');
const openLogin = document.getElementById('open-login');
const login_block = document.getElementById('login_block');
const openSignup = document.getElementById('open-signup');
const signup_block = document.getElementById('signup_block');
const closeMe = document.getElementsByClassName('close');
const popupModal = document.getElementsByClassName('popup-modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});



window.addEventListener('click', function(event){
    if(event.target === openSignup){
        signup_block.classList.add('d-f');
    }
});


window.addEventListener('click', function(event){
    if(event.target === openSignup){
        signup_block.classList.add('d-f');
    }
});

