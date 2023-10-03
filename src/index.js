$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      // scroll-up button show/hide script
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

  // slide-up script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  // typing text animation script
  // var typed = new Typed(".typing", {
  //     strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
  //     typeSpeed: 100,
  //     backSpeed: 60,
  //     loop: true
  // });

  var typed = new Typed(".typing-2", {
      strings: ["Full Stack Web Developer",
      "NodeJs Backend Developer",
      "Coder"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  // owl carousel script
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000:{
              items: 3,
              nav: false
          }
      }
  });
});

  // Function to send the email
  function sendMail(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    const serviceID = "service_a1t9fvd";
    const templateID = "template_4t9q0tb";

    emailjs.send(serviceID, templateID, params)
        .then(function (response) {
            console.log("Email sent:", response);
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset(); 
        })
        .catch(function (error) {
            console.log("Error sending email:", error);
            alert("Error sending message. Please try again later.");
        });
}

// Add an event listener to the form
document.getElementById("contact-form").addEventListener("submit", sendMail);

// function sendMail(e){
//     e.preventDefault()
//     var params = {
//         name:document.getElementById("name").value,
//         email:document.getElementById("email").value,
//         subject:document.getElementById("subject").value,
//         message:document.getElementById("message").value
//     }
//     const serviceID = "service_a1t9fvd"
//     const templateID = "template_4t9q0tb"
    
//     emailjs
//     .send(serviceID,templateID,params)
//     .then((res)=>{
//         document.getElementById("name").value="",
//         document.getElementById("email").value="",
//         document.getElementById("subject").value="",
//         document.getElementById("message").value=""
//         console.log(res)
//         alert("message gya")
//     })
//     .catch((err) => console.log(err))
// }
