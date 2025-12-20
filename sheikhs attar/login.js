const container = document.querySelector('.container');
const registerbtn = document.querySelector('.register-bnt');
const Loginbnt = document.querySelector('.Login-bnt');

registerbtn.addEventListener('click', () => { 
     container.classList.add('active');
});

Loginbnt.addEventListener('click', () => { 
     container.classList.remove('active');
});