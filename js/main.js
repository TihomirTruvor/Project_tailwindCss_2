function burgerMenu () {
    const mobileMenu = document.querySelector('#mobile_menu');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', ()=> {
        burger.classList.toggle('active')
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
    })
}
burgerMenu();

/*darkMode*/
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const modeBtn = document.querySelector('#darkMode');

  modeBtn.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('dark')

    if (document.querySelector('html').classList.contains('dark')) {
        localStorage.theme = 'dark'
    } else {
        localStorage.theme = 'light'
    }
  })