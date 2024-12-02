window.scrollTo({
    top: 0,
    behavior: 'smooth'
})

setTimeout( function() {
    const load = document.getElementById("preloader")
    load.classList.add('close-loading') 
}, 1400);
