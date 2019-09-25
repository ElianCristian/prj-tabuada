function Exibir() {
    let num = document.getElementById('num')
    let numero = Number(num.value)
    let resultado = document.getElementById('tab')
    if (num.value == '') {
        window.alert('Preencha o campo Número')
    }
    else{
        let i = 1
        resultado.innerHTML = '' // para que a tabuada calculada anteriormente nao seja mais exibida
        while (i <= 10) {
            let item = document.createElement('option') // crindo elementos dinamicamente
            item.text = `${numero} x ${i} = ${numero*i}` // parte de dentro do option
            resultado.appendChild(item) // adicionar o elemento filho
            i++
        }
    }
}