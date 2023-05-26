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
    }, 3000)

  
      var radio1 =  document.getElementById('rd1');
      var radio2 = document.getElementById('rd2');
      var radio3 = document.getElementById('rd3');
      var radio4 = document.getElementById('rd4');
        var slideBox = document.getElementsByClassName("slide-box")

    
     
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
    
        
   let checkList = document.querySelectorAll('.check');
  





    if (p && m == true ){
        Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: 'Você não pode selecionar dois tamanhos',
          })
    }   else if (p && g == true){
            Swal.fire({
                icon: 'error',
                title: 'Oops',
                text: 'Você não pode selecionar dois tamanhos',
              })
    }    else if (p && gg ==true){
        Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: 'Você não pode selecionar dois tamanhos',
          })
    }   else if (m && g ==true){
        Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: 'Você não pode selecionar dois tamanhos',
          })
    }   else if (m & gg ==true){
        Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: 'Você não pode selecionar dois tamanhos',
          })
    }   else if (g && gg == true){
        Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: 'Você não pode selecionar dois tamanhos',
          })}   
    
    


})

 function abrirFrete(){
        var divFrete = document.getElementById("abertura_frete")

        divFrete.classList.toggle('esconder')

        /*if(divFrete.classList.contains('esconder')){;}
        else
        { divFrete.classList.add('esconder') }*/

}




function abrir_tam(){
    const modal = document.getElementById('jan_modal');
    
    modal.classList.add("abrir")
    modal.addEventListener('click', (e) => {
        if(e.target.id =="fechar" || e.target.id == "jan_modal"){
        modal.classList.remove('abrir')
        }
    })
 } 













