
window.addEventListener('DOMContentLoaded', () => {
    const hammerButton = document.getElementById('hammer-button')
    const icon = document.getElementsByClassName('fa-solid')[0]
    const header = document.getElementById('header')
    const navItem = document.getElementsByClassName('nav-item');
    window.addEventListener('scroll', () => {
       
        const name = document.getElementsByClassName('name')[0]

        let currentScrollPixel = window.scrollY;
        console.log('This is the current scroll pixel:', currentScrollPixel);
        if (currentScrollPixel > 20) {
            header.style.backgroundColor = 'white';
            header.style.zIndex='10px'
            name.style.color='#7c6fb1'
            icon.style.color='#7c6fb1'
            for (let i = 0; i < navItem.length; i++) {
                navItem[i].style.color='#7b838a'
            }
            
        } else {
            header.style.backgroundColor = 'transparent';
             name.style.color='white';
             icon.style.color='white'
             for (let i = 0; i < navItem.length; i++) {
                navItem[i].style.color='white'
            }
        }
    });
  
   
    hammerButton.addEventListener('click', () => {
        for (let i = 0; i < navItem.length; i++) {
            navItem[i].classList.toggle('snow-nav-items')
        }
    })

})

