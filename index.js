// MOBILE NAVBAR //

const mobileMenu = document.getElementById("mobileMenu");
const closeBars = document.getElementById('closeBars');
const closeButton = document.getElementById('closeBtn');
const menuBtn = document.getElementById("menuBars");
const mainContainer = document.querySelector('.mainContainer');



console.log(mobileMenu)
console.log(menuBtn)
console.log(closeBars)


const openMenu = (e) => {
    if(e.target === closeBars){
        mobileMenu.classList.add('active');
        mainContainer.style.display = '';

    }
}

const closeMenu = (e) => {
    if(e.target === menuBtn){
        mobileMenu.classList.remove('active');
        mainContainer.style.display = 'none';
    }
}

menuBtn.addEventListener('click', closeMenu);
closeBars.addEventListener('click', openMenu)



/* menuBtn.addEventListener('click', (e) => {
    if(e.target === menuBtn){
        mobileMenu.style.display = 'grid';
    }
})

closeBars.addEventListener('click', (e) => {
    if(e.target === closeBars){
        mobileMenu.style.display = 'none';
    }
}); */


