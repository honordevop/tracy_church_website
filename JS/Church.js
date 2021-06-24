const slideIndex = 1;
showSlides(slideIndex);

function currentSlides(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    const i = 0; 
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName ("dot")
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1){
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length;i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length;i++){
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className +="active";
}







// const dots = [
//     {
//         imagePrev:"",
//         prev:"."

//     },
//     {
//         imageNext:"",
//         next:"."  
//     },
// ]
// const 
// const Prev = document.querySelector(".dot")
// const Next = document.querySelector(".dot")

// for (let i = 0; i < dots.length;i++){
//     const Prev = document.createElement("img")
//     logo.src = testimonials[i].logo
//     clientslogo.appendChild(logo)
//     logo.classList.add("img")
//     clientNames.classList.add("clients")

//     logo.addEventListener("click",function carousel(){
//         testimony.innerHTML = testimonials[i].testimony
//         clientNames.innerHTML = testimonials[i].clientName
//     })
// }


   
//     let counter= 0
//     let variable = setInterval(carousel,7000)
//     function carousel(){
//     let imageLogo= testimonials.length[counter];
//     testimony.innerHTML = testimonials[counter].testimony;
//     clientNames.innerHTML = testimonials[counter].clientName;
//     counter++;
//       if(counter===testimonials.length){
//           counter=0
//       }

//    }