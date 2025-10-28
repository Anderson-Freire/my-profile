const btn = document.querySelector('.hamburguer');
const nav = document.getElementById('main-nav')

btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show')
    btn.classList.toggle('open', isOpen)
    btn.setAttribute('aria-expanded', String(isOpen))
})

nav.querySelectorAll('a').forEach(a => 
    a.addEventListener( 'click', () => {
        nav.classList.remove('show'); btn.classList.remove('open'); btn.setAttribute('aria-expanded', 'false')
    } )
)