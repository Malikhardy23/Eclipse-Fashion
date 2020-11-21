// MOBILE NAVBAR //

const mobileMenu = document.getElementById("mobileMenu");
const closeBars = document.getElementById('closeBars');
const closeButton = document.getElementById('closeBtn');
const menuBtn = document.getElementById("menuBars");
const menProducts = document.querySelector('.menMidSection')
const bottomSection = document.getElementById('btmSection');

console.log(mobileMenu)
console.log(menuBtn)
console.log(closeBars)

const openMenu = (e) => {
    if(e.target === closeBars){
        mobileMenu.classList.add('active');  
    }
    menProducts.style.display = 'flex';
    bottomSection.style.display = 'grid';
    bottomSection.style.textAlign = 'center';
}

const closeMenu = (e) => {
    if(e.target === menuBtn){
        mobileMenu.classList.remove('active');
    }
    menProducts.style.display = 'none';
    bottomSection.style.display = 'none';
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