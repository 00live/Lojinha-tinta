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


    let btCheck = document.getElementById('bt_comprar')

   btCheck.addEventListener('click', () =>{
   var p = document.getElementById('P').checked;
   var m = document.getElementById('M').checked;
   var g = document.getElementById('G').checked;
   var gg = document.getElementById('GG').checked;
    
   
   let checkbox1 = document.getElementById('P')
   let checkbox2 = document.getElementById('M')
   let checkbox3 = document.getElementById('G')
   let checkbox4 = document.getElementById('GG')
        
   let checkList = document.querySelectorAll('.check')
  





    if(p && m == true ){
        alert("Só é possivel selecionar apenas um tamanho")
        }
        else if (p && g == true){
            alert("Só é possivel selecionar apenas um tamanho")
    }    else if (p && gg ==true){
        alert("Só é possivel selecionar apenas um tamanho")
    }   else if (m && g ==true){
        alert("Só é possivel selecionar apenas um tamanho")
    }   else if (m & gg ==true){
        alert("Só é possivel selecionar apenas um tamanho")
    }   else if (g && gg == true){
        alert("Só é possivel selecionar apenas um tamanho")}   
    
    


})

 function abrirFrete(){
        var divFrete = document.getElementById("abertura_frete")

        divFrete.classList.toggle('esconder')

        /*if(divFrete.classList.contains('esconder')){;}
        else
        { divFrete.classList.add('esconder') }*/

}
















