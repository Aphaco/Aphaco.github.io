var typed=new Typed('#info',{
    strings:['Front End Developer','Back End Developer','Web Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
 })
 ScrollReveal({ 
    reset: true,
    distance: "70px",
    duration: 2500,
    delay:400
});
ScrollReveal().reveal('p', { delay: 500 , origin:"leftt"});
ScrollReveal().reveal('#about-head', { delay: 600 , origin:"bottom"});
ScrollReveal().reveal('.about-image', { delay: 600 , origin:"right"});
ScrollReveal().reveal('.skills-row', { delay: 600 , origin:"right"});
ScrollReveal().reveal('.progress', { delay: 1000 , origin:"bottom"});
ScrollReveal().reveal('#mee', { delay: 1000 , origin:"bottom"});
ScrollReveal().reveal('#home', { delay: 1000 , origin:"bottom"});


document.querySelector('a').addEventListener('click', function(e) {
   
    e.preventDefault();
  
    const target = this.getAttribute('#about');
   
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  });


  document.querySelector('a').addEventListener('click', function(e) {
   
    e.preventDefault();

    const target = this.getAttribute('#contact-page');
   
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  });