document.addEventListener('click',function(e){
  // Hamburger menu
  if(e.target.classList.contains('hamburger-toggle')){
    e.target.children[0].classList.toggle('active');
  }
}) ;

// header serch icone 

const header_serch_icon = document.querySelector(".header-serch-icone a i");
const header_serch = document.querySelector(".header-serch");

header_serch_icon.addEventListener("click",()=>{
    const isopen = header_serch.classList.toggle("displayNone");
     header_serch_icon.classList = isopen ? 'fa-solid fa-magnifying-glass' : 'ph ph-x';
 });

// header_serch_icon.addEventListener('click',()=>{
  
//   const isOpen = header_serch_icon.classList.toggle("displaayNone");

// })
 


//  toggle.addEventListener("click", () => {

//      const isopen = nav_section.classList.toggle("active");

//      toggle.classList = isopen ? 'ph ph-x' : 'ph ph-equals';

//  });
