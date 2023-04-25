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
    }, 5000)
























