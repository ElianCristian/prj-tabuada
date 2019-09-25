function Exibir() {
    let num = document.getElementById('num')
    let numero = Number(num.value)
    let resultado = document.getElementById('res')
    resultado.innerHTML = 'Calculo <br>'
    switch (numero) {
        case 1:
            for(let i=1; i<=10; i++){
                let mult = 1 * i
                resultado.innerHTML += `1 x ${i} = ${mult}<br>`
            }
            break;
    
        default:
            break;
    }
}