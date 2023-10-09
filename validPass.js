var senha = prompt("Digite uma senha:");
Validar(senha);

function Validar(sen){
    var countM = false;
    var countNum = false;
    
    if (sen.length < 8) {
        console.log("Não contém 8 caracteres ou mais");
    } 
    
    else {
        console.log("Contém 8 caracteres ou mais");
    }
    
    for (var i = 0; i < sen.length; i++) {
        if (/[A-Z]/.test(sen[i])) {
            countM = true;
        }
        
        if (!isNaN(sen[i])) {
            countNum = true;
        }
    }
    
    if (countM) {
        console.log("Tem ao menos uma letra maiúscula");
    } 
    
    else {
        console.log("Não tem nenhuma letra maiúscula");
    }
    
    if (countNum) {
        console.log("Tem ao menos um número");
    }
    
    else {
        console.log("Não tem nenhum número");
    }

}