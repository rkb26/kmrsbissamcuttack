const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
if(menuToggle){
  menuToggle.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded",open);
  });
}
document.querySelectorAll(".nav a").forEach(a=>{
  a.addEventListener("click",()=>nav.classList.remove("open"));
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
