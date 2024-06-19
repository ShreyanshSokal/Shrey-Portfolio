
let cm = document.getElementById('asdfg')
let navbar = document.getElementById('navbar')
let navdiv = document.getElementById('navdiv')
let cmbtn = document.querySelectorAll(".cmbtn")


navbar.classList.add("bg-light")
navbar.classList.add("navbar-light")

for (let i = 0; i < cmbtn.length; i++) {
  cmbtn[i].classList.add('btn-outline-dark')
}



function f(){

  if(cm.innerHTML.trim() === 'Dark Mode' ){
    cm.innerHTML= "Light Mode"
    
    for (let i = 0; i < cmbtn.length; i++) {
      cmbtn[i].classList.remove('btn-outline-dark')
    }
    for (let i = 0; i < cmbtn.length; i++) {
      cmbtn[i].classList.add('btn-outline-light')
    }


    var bodyboi = document.getElementById("bodyboi"); 

    bodyboi.classList.remove("text-bg-light");
    bodyboi.classList.add("text-bg-dark");
    
    navbar.classList.add("bg-dark")
    navbar.classList.add("navbar-dark")
  }
  else{
    cm.innerHTML= "Dark Mode"

    for (let i = 0; i < cmbtn.length; i++) {
      cmbtn[i].classList.add('btn-outline-dark')
    }
    for (let i = 0; i < cmbtn.length; i++) {
      cmbtn[i].classList.remove('btn-outline-light')
    }

    var bodyboi = document.getElementById("bodyboi"); 
    
    bodyboi.classList.remove("text-bg-dark");
    bodyboi.classList.add("text-bg-light");
    

    navbar.classList.remove("bg-dark")
    navbar.classList.remove("navbar-dark")

  }
  

}

  //Get the button
  let mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";


      // document.getElementById("anchoractive").classList.add('navbar-disabled-color');
      // if(cm.innerHTML === "Light"){
        document.getElementById("anchoractive").classList.remove('active');
      // }

      
      
    } else {
      
      mybutton.style.display = "none";
      // document.getElementById("anchoractive").classList.remove('bg-nav=');
      document.getElementById("anchoractive").classList.add('active');
      
      
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


        

// function for change heart

// const button = document.querySelector(".bttn");
//                 const iframe = document.querySelector('.fa-heart');

//                 button.addEventListener("click", () => {
//                     if (button.classList.contains("liked")) {
                        
//                         iframe.classList.remove('fa-solid');
//                         iframe.classList.add('fa-regular');
//                         button.classList.remove("liked");
                        
//                     } else {
                        
//                         iframe.classList.add('fa-solid');
//                         iframe.classList.remove('fa-regular');
//                         button.classList.add("liked");
//                 }
//                 });


// navbar.onclick = function(e){
//   alert('navbar')
// }