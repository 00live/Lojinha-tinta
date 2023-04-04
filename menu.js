    
    
    
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

    
    


    var section_aces = document.getElementById('section_aces')
    var bt_aces = document.getElementById('pag_aces')

    var secrion_skt = document.getElementById('section_skt')
    var bt_skt = document.getElementById('pag_skt')

    /*bt_masc.addEventListener("click", function() {
       ;
        

        if(section_masc.style.display ==="none"){
            section_masc.style.display = "block";
        } else {
            section_masc.style.display ="none"
        }
    */

    var bt_masc = document.getElementById('pag_masc')
       
        bt_masc.addEventListener("click", function(){
            var section_masc = document.getElementById('section_masc');
           
            section_fem.remove();
            section_aces.remove();  
            secrion_skt.remove(); 


            section_masc.classList.toggle("hide");        
        
        
        })

    



   
    var bt_fem = document.getElementById('pag_fem')
        bt_fem.addEventListener("click", function(){
            var section_fem = document.getElementById('section_fem')   
            




            section_masc.classList.toggle("hide")
        
        })


































  