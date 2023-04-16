document.addEventListener('click',function(e){
  // Hamburger menu
  if(e.target.classList.contains('hamburger-toggle')){
    e.target.children[0].classList.toggle('active');
  }
}) ;

// header serch icone 

const header_serch_icon = document.querySelector(".header-serch-icone i");
const header_serch = document.querySelector(".header-serch");

header_serch_icon.addEventListener("click",()=>{
    const isopen = header_serch.classList.toggle("displayNone");
     header_serch_icon.classList = isopen ? 'fa-solid fa-magnifying-glass' : 'ph ph-x';
 });


// this is card design 
const shopping_cart_icon = document.querySelector(".shopping-cart-icon a");
const card_icon = document.querySelector(".card-icon i");
const card_design = document.querySelector(".card-design");

shopping_cart_icon.addEventListener("click",()=>{
  card_design.classList.add("card-design-hide");
});
card_icon.addEventListener("click",()=>{
  card_design.classList.remove("card-design-hide");
});



// header_serch_icon.addEventListener('click',()=>{
  
//   const isOpen = header_serch_icon.classList.toggle("displaayNone");

// })
 


//  toggle.addEventListener("click", () => {

//      const isopen = nav_section.classList.toggle("active");

//      toggle.classList = isopen ? 'ph ph-x' : 'ph ph-equals';

//  });
