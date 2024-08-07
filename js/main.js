const toggleNav = document.querySelector(".toggleNav")
toggleNav.addEventListener('click',()=>{
    const nav = document.querySelector("nav")
    nav.classList.toggle('close')
})