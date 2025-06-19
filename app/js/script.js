const ham = document.querySelector('#btn-ham');
const header = document.querySelector('.header');
const overlay = document.querySelector('#overlay');

ham.addEventListener('click', function()
{
    console.log('ham clicked');
    if(header.classList.contains('ham_open'))
    {
        overlay.classList.remove('fadein');
        header.classList.remove('ham_open');
        overlay.classList.remove('overlay');
        overlay.classList.add('fadeout');
    }
    else
    {
        overlay.classList.remove('fadeout');
        overlay.classList.add('fadein');
        header.classList.add('ham_open');
        overlay.classList.add('overlay');
    }
});