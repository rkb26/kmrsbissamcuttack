const menu=document.querySelector(".menu"),nav=document.querySelector(".nav");if(menu)menu.onclick=()=>nav.classList.toggle("open");
const slides=[...document.querySelectorAll(".slide")],dots=[...document.querySelectorAll(".slide-dots button")];let current=0;
function show(n){current=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle("active",i===current));dots.forEach((d,i)=>d.classList.toggle("active",i===current))}
document.querySelector(".next")?.addEventListener("click",()=>show(current+1));document.querySelector(".prev")?.addEventListener("click",()=>show(current-1));dots.forEach((d,i)=>d.onclick=()=>show(i));setInterval(()=>show(current+1),6500);
