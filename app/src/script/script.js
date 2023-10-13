
const nav_item = document.querySelectorAll('.nav_item');
for (let t = 0; t < nav_item.length; t++) {
  nav_item[t].addEventListener('click', function () {
    nav_item.forEach(f => f.classList.remove('active'));
    this.classList.add('active');
  })
  
};
const home_icon = document.querySelector('.home_icon');
const mybio = document.querySelector('.mybio');
const section_logo = document.querySelector('.section_logo')
const myscill_skills = document.querySelectorAll('.myscill_skills')
const myscill_content = document.querySelector('.myscill_content');
const myscill_span = document.querySelectorAll('.myscill_span')

window.onload = function () {
  window.addEventListener('scroll', scrollEffect);
  function scrollEffect() {
    if (window.scrollY>=100) {
      home_icon.classList.add('active');
    }
    else{
      home_icon.classList.remove('active');
    }
    if (window.scrollY>=650) {
        for (let u = 0; u < myscill_span.length; u++) {
            myscill_span[u].style.opacity = "1"
            if (u == 0) {
                myscill_span[0].style.width = "80%"
                
            }
            if (u == 1) {
                myscill_span[1].style.width = "60%"
            }
            if (u == 2) {
                myscill_span[2].style.width = "75%"
            }
            if (u == 3) {
                myscill_span[3].style.width = "70%"
            }
        }
    }
    // else{
    //     for (let u = 0; u < myscill_span.length; u++) {
    //         myscill_span[u].style.opacity = "1"
    //         if (u == 0) {
    //             myscill_span[0].style.width = "0%"
                
    //         }
    //         if (u == 1) {
    //             myscill_span[1].style.width = "0%"
    //         }
    //         if (u == 2) {
    //             myscill_span[2].style.width = "0%"
    //         }
    //         if (u == 3) {
    //             myscill_span[3].style.width = "0%"
    //         }
    //     }
    // }
    // if (condition) {
        
    // }
  }
};



const body = document.querySelector('html')
home_icon.addEventListener('click', function () {
  body.scrollBy(0, -1000000)
})
