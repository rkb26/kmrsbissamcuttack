const menu=document.querySelector(".menu"),nav=document.querySelector(".nav");if(menu)menu.onclick=()=>nav.classList.toggle("open");
const dots=[...document.querySelectorAll(".dot")];let slide=0;
const hero=document.querySelector(".hero");const titles=[
["KALINGA MODEL RESIDENTIAL SCHOOL","Learning. Living.<br><span>Growing together.</span>","Official information portal of KMRS Bissamcuttack, Rayagada — academics, residential life, admissions, notices and school information."],
["EDUCATION WITH OPPORTUNITY","A place to learn.<br><span>A place to belong.</span>","A residential learning environment where academic growth, participation and community living come together."],
["KMRS BISSAMCUTTACK","Knowledge today.<br><span>Confidence for tomorrow.</span>","Explore school information, academic resources, admissions, campus facilities and official notices."]
];
const label=document.querySelector(".hero-label"),h1=document.querySelector(".hero h1"),p=document.querySelector(".hero p");
function go(n){slide=(n+3)%3;label.textContent=titles[slide][0];h1.innerHTML=titles[slide][1];p.textContent=titles[slide][2];dots.forEach((d,i)=>d.classList.toggle("active",i===slide))}
document.querySelectorAll(".hero-control").forEach(b=>b.onclick=()=>go(slide+Number(b.dataset.slide)));
dots.forEach((d,i)=>d.onclick=()=>go(i));setInterval(()=>go(slide+1),7000);
