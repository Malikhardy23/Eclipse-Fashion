// MOBILE NAVBAR //

const mobileMenu = document.getElementById("mobileMenu");
const closeBars = document.getElementById('closeBars');
const closeButton = document.getElementById('closeBtn');
const menuBtn = document.getElementById("menuBars");
const brandsProducts = document.getElementById("brandsProducts");
const bottomSection = document.querySelector('.bottomSection');


console.log(mobileMenu)
console.log(menuBtn)
console.log(closeBars)


const openMenu = (e) => {
    if(e.target === closeBars){
        mobileMenu.classList.add('active');
        brandsProducts.style.display = 'grid';
        bottomSection.style.display = 'grid';
        bottomSection.style.textAlign = 'grid';
    }
}

const closeMenu = (e) => {
    if(e.target === menuBtn){
        mobileMenu.classList.remove('active');
        brandsProducts.style.display = 'none';
        bottomSection.style.display = 'none';
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