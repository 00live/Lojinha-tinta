var radio = document.querySelector('.manual_bt')
var cont = 1

document.getElementById('rd1').checked = true

    function proxImg (){
       cont++ 
       
       if(cont>4){
       cont = 1}

       document.getElementById('rd'+cont).checked = true

    }



    setInterval(() => {
        proxImg ()
    }, 4000)

  
      var radio1 =  document.getElementById('rd1');
      var radio2 = document.getElementById('rd2');
      var radio3 = document.getElementById('rd3');
      var radio4 = document.getElementById('rd4');
        var slideBox = document.getElementsByClassName("slide-box")

        function mudarP2 (slideBox){
            slideBox.style.marginLeft = "-280px" 
        }
    
     
    radio1.addEventListener("change", function(){
        primeiro.style.marginLeft= "0px"; 
    })    

    radio2.addEventListener("change", function(){
        primeiro.style.marginLeft= "-500px"; 
    })
    var primeiro = document.getElementById("primeiro")

    radio3.addEventListener("change", function(){
        primeiro.style.marginLeft= "-1000px"; 
    })

    radio4.addEventListener("change", function(){
        primeiro.style.marginLeft= "-1500px"; 
    })

























