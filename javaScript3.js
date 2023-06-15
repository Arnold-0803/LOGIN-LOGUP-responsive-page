const home = document.querySelector('.navigation a');
home.style.background = 'navy';
home.style.color = 'white';
home.style.borderRadius = '3px';
home.style.padding = '0 5px';


const logOutBtn = document.querySelector('.navigation button');
// console.log(logOutBtn);
logOutBtn.addEventListener('click', function(){
    window.location.href = './log-in-page.html';
})