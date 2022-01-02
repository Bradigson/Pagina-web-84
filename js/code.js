let name = document.querySelector('#input');
let result = document.querySelector('.result');
let btn = document.querySelector('#boton');
btn.onclick = function(e){
    e.preventDefault();
    result.innerHTML="";

    let n = name.value;
    
    for(let x =n.length - 1; x>=0; x--){
        result.innerHTML = `${n[x]}${'<br>'}${'<br>'}${result.innerHTML}`;
        
       
    }
    
    name.value = "";
    
   
}