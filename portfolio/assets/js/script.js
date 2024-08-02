// smooth scrolling by lenis
// const lenis = new Lenis()
// lenis.on('scroll', (e) => {
//   console.log(e)
// })
// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }
// requestAnimationFrame(raf)
// smooth scrolling by lenis
// mobile nav js open nnav in mobile and close nav 
const sideMenu =document.getElementById("sideMenu")
const menuOpen = document.getElementById("menu-open")
const menuClose = document.getElementById("menu-close")

let tl = gsap.timeline()
menuOpen.addEventListener("click",()=>{
  sideMenu.style.transform = 'translateX(-16rem)'
  tl.from("#sideMenu li",{
    x:150,
    opacity:0,
    duration:1,
    ease:"power2.out",
    stagger:0.3,
  })
})
menuClose.addEventListener("click",()=>{
  sideMenu.style.transform = 'translateX(0rem)'
  })

sideMenu.addEventListener("mouseleave",()=>{
  sideMenu.style.transform = 'translateX(0rem)'
})
// nav bar bg on scroll
const navBar = document.querySelector("nav")
const navLinks = document.querySelector("nav ul")


window.addEventListener("scroll",()=>{
  if(scrollY > 50){
       navBar.classList.add('bg-white','backdrop-blur-lg','shadow-sm')
  }else{
    navBar.classList.remove('bg-white','backdrop-blur-lg','shadow-sm')
    
  }
})
 window.addEventListener("scroll",()=>{

  if(scrollY > 50){
    navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50')

  }else{
    navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50')
     
  }

 })
  

  // gsap nav menu
tl.from(".logo",{
  y:-30,
  opacity:0,
  duration:1,
  ease:"power2.out",
  delay:0.5
})
tl.from(".nav-list li",{
  y:-30,
  opacity:0,
  duration:1,
  ease:"power2.out",
  delay:0.5,
  stagger:0.2
})
tl.from(".nav-contact span",{
  y:-30,
  opacity:0,
  duration:1,
  ease:"power2.out",
  delay:0.5,
  stagger:0.2
})
tl.from(".nav-contact i",{
  x:30,
  opacity:0,
  duration:1,
  ease:"power2.out",
  delay:0.5,
  stagger:0.2
})

gsap.from(".fwd",{
  opacity:0,
  duration:2,
  ease:"power2.out",
  x:500,
  delay:.5,
})
gsap.from(".fsd",{
  opacity:0,
  duration:2,
  ease:"power2.out",
  x:-500,
  delay:.5,
})


 //cursore animation
 let cursor = document.getElementById("cursor")
//  console.log(cursor);
 let body=document.querySelector("body")
 
body.addEventListener("mousemove",(mouse)=>{
  gsap.to(cursor,{
    x:mouse.x,
    y:mouse.y,
    duration:0.7,
    ease:"power2.out",
   })
  
})

// side menu animation
