const ham = document.querySelector('#btn-ham');
const header = document.querySelector('.header');
const overlay = document.querySelector('#overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

ham.addEventListener('click', function()
{
    console.log('ham clicked');
    body.classList.remove('noscroll');
    if(header.classList.contains('ham_open'))
    {
        header.classList.remove('ham_open');
        fadeElems.forEach(function (element) {
            element.classList.remove('fadein');
            element.classList.add('fadeout');
        });
        
        
       // overlay.classList.remove('overlay');
        
    }
    else//open ham
    {
        body.classList.add('noscroll');
        header.classList.add('ham_open');
        fadeElems.forEach(function(element){
        element.classList.remove('fadeout');
        element.classList.add('fadein');
        });
        
        
        //overlay.classList.add('overlay');
    }
});