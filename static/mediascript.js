window.addEventListener('DOMContentLoaded', () => {
  var menu = document.getElementById('menu');
  var a = document.getElementsByClassName('a');
  // console.log('mediascript running')

  function funcv550m(v550m) {
    if (v550m.matches) { // If media query matches
      
      menu.classList.add('fa-bars')
      // toggling show/hide by clicking menu 
      menu.addEventListener('click', () => {
        if (menu.classList.contains('off')) {
          for (var i = 0; i < a.length; i++) {
            a[i].style.display = "flex";
            menu.style.transform = "rotate(90deg)";
            // console.log(menu.style.transform = "rotate(90deg)")
            menu.style.color = "blue"
          }
          menu.classList.remove('off')
          menu.classList.add('on')
          // console.log('first')
        } else if (menu.classList.contains('on')) {
          // var navbar = document.getElementById('navbar');
          for (var i = 0; i < a.length; i++) {
            a[i].style.display = "none";
            menu.style.transform = "rotate(0deg)"
            menu.style.color = "black"
          }
          // console.log('second')
          menu.classList.remove('on')
          menu.classList.add('off')
        }
      })
      // toggling show /hide by clicking element
      document.querySelectorAll('.a').forEach(element => {
        element.addEventListener('click', () => {
          setTimeout(() => {
            console.log('click')
            for (var i = 0; i < a.length; i++) {
              a[i].style.display = "none";
              menu.style.transform = "rotate(0deg)"
              menu.style.color = "black"
            }
            console.log('now')
          }, 600)
        })
      })
    } else {
      menu.classList.remove('fa-bars')
    }
  }

  var v550m = window.matchMedia("(max-width: 550px)")
  funcv550m(v550m) // Call listener function at run time
  v550m.addListener(funcv550m)

})