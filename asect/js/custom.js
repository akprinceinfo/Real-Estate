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







// responsive icone 
const responsive_nav = document.querySelector(".responsive-nav");
const responsive_icone_add = document.querySelector(".responsive-icone i");
const responsive_nav_hide = document.querySelector(".responsive-nav-hide i");

responsive_icone_add.addEventListener("click",()=>{
  responsive_nav.classList.toggle("responsive-nav-toggle")
});


responsive_nav_hide.addEventListener("click",()=>{
const isopen = responsive_nav.classList.toggle("responsive-nav-toggle");
});

// header_serch_icon.addEventListener("click",()=>{
//     const isopen = header_serch.classList.toggle("displayNone");
//      header_serch_icon.classList = isopen ? 'fa-solid fa-magnifying-glass' : 'ph ph-x';
//  });


