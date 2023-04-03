    
    
    
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