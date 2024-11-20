function teste() {
    testando.innerHTML = 'oi'
    document.body.scrollTop = 0; 
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
   }