let footerComponent = document.getElementById("footerComponent");
const testinho = document.getElementById("testando")

footerComponent.innerHTML = `

    <link rel="stylesheet" href="./components/sidebars/footer.css" />
    
     <div class="footerDivider">
     
     <div class="" onClick=teste()>
     clique em mim
     
     </div>
   

`;


function teste() {
 testando.innerHTML = 'oi'
 document.body.scrollTop = 0; 
 document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
}

