    
    
    
    var menuitem = document.querySelectorAll('.item_menu')

    function selectlink(){
    menuitem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativou')

}


    menuitem.forEach((item)=>
    item.addEventListener('click',selectlink)
    )   



    var btmenu = document.getElementById('bt_menu')
    var menuside = document.querySelector('.manu-lateral')

    btmenu.addEventListener('click', function(){
        menuside.classList.toggle('expandir') 
        
        
        
    })

    
    /*bt_masc.addEventListener("click", function() {
       ;
        

        if(section_masc.style.display ==="none"){
            section_masc.style.display = "block";
        } else {
            section_masc.style.display ="none"
        }
    

    var bt_masc = document.getElementById('pag_masc')
        bt_masc.addEventListener("click", () => {
            var section_masc = document.getElementById('section_masc');
            section_masc.classList.toggle("hide");

            
            


        })

    var bt_fem = document.getElementById('pag_fem') 
        bt_fem.addEventListener("click",function () {
            var section_fem = document.getElementById('section_fem')
            section_fem.classList.toggle("hide");     
        })         
    
    var bt_aces = document.getElementById('pag_aces')   
        bt_aces.addEventListener("click", function() {
            var section_aces = document.getElementById('section_aces');
            section_aces.classList.toggle("hide");

        })

   
    var bt_skt = document.getElementById('pag_skt')
        bt_skt.addEventListener("click", function(){
            var section_skt = document.getElementById('section_skt')
            section_skt.classList.toggle("hide")
        
        })
*/
    /*function abrir_guia(a){
        let Localguia = document.getElementById('section_geral')
        let pag = new XMLHttpRequest()

        pag.onreadystatechange = () => {
            if(pag.readyState == 4 && pag.status ==200){
                Localguia.innerHTML = pag.response
            }
        }
        pag.open(`GET`, `./${a}.html`)
        pag.send()

    }*/


    var section_masc = document.getElementById('section_masc');
    var section_fem = document.getElementById('section_fem');
    var section_aces = document.getElementById('section_aces')
    var section_skt = document.getElementById('section_skt');

  function abrir_masc(){

    if( section_fem.classList.contains('hide')) {;
    } else {
        section_fem.classList.add("hide");
    }

    if( section_aces.classList.contains('hide')) {;
    } else {
        section_aces.classList.add("hide");
    }

    if( section_skt.classList.contains('hide')) {;
    } else {
        section_skt.classList.add("hide");
    }
    section_masc.classList.toggle("hide");  
  }   

function abrir_fem(){
    
    if( section_aces.classList.contains('hide')) {;
    } else {
        section_aces.classList.add("hide");
    }

    if( section_masc.classList.contains('hide')) {;
    } else {
        section_masc.classList.add("hide");
    }

    if( section_skt.classList.contains('hide')) {;
    } else {
        section_skt.classList.add("hide");
    }
    section_fem.classList.toggle("hide");  
  }   



function abrir_aces(){
    if( section_masc.classList.contains('hide')) {;
    } else {
        section_masc.classList.add("hide");
    }

    if( section_fem.classList.contains('hide')) {;
    } else {
        section_fem.classList.add("hide");
    }

    if( section_skt.classList.contains('hide')) {;
    } else {
        section_skt.classList.add("hide");
    }
    section_aces.classList.toggle("hide");  
  }  


function abrir_skt(){
    if( section_masc.classList.contains('hide')) {;
    } else {
        section_masc.classList.add("hide");
    }

    if( section_fem.classList.contains('hide')) {;
    } else {
        section_fem.classList.add("hide");
    }

    if( section_aces.classList.contains('hide')) {;
    } else {
        section_aces.classList.add("hide");
    }
    section_skt.classList.toggle("hide");  
  }  

    function block(){
        Swal.fire({
            icon: 'error',
            title: 'Poxa Cara',
            text: 'esse item foi removido',
          })
    }


    function abrir_item1(){
        window.location.href = "/produtos_gerais/masc/Item1/index_masc.html"
    }

    function abrir_item2(){
        window.location.href = "/produtos_gerais/masc/item2/index.html"}

        function abrir_item3(){
        window.location.href = "/produtos_gerais/masc/item3/index.html"}
           






























