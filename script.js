
let somaMussarela = 0
let somaCalabresa = 0
let somaBacon = 0
let somaQueijo = 0
let somaFrango = 0

let vendaMussarela = 0.00
let vendaCalabresa = 0.00
let vendaBacon = 0.00
let vendaQueijo = 0.00
let vendaFrango = 0.00

let btnVendas = document.getElementById('vendas')
let btnEstorno = document.getElementById('estorno')

btnVendas.addEventListener('click', venda, false)
btnEstorno.addEventListener('click', estorno, false)

function venda(e){
    if(document.getElementById('mussarela').checked){
        somaMussarela = somaMussarela + 1
        vendaMussarela = vendaMussarela + 25.00
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2)
    }
    else if(document.getElementById('calabresa').checked){
        somaCalabresa = somaCalabresa + 1
        vendaCalabresa = vendaCalabresa + 25.00
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2)
    }
    else if(document.getElementById('bacon').checked){
        somaBacon = somaBacon + 1
        vendaBacon = vendaBacon + 25.00
        document.getElementById('resultadoBacon').innerHTML = somaBacon
        document.getElementById('vendaBacon').innerHTML = vendaBacon.toFixed(2)
    }
    else if(document.getElementById('queijo').checked){
        somaQueijo = somaQueijo + 1
        vendaQueijo = vendaQueijo + 25.00
        document.getElementById('resultadoQueijo').innerHTML = somaQueijo
        document.getElementById('vendaQueijo').innerHTML = vendaQueijo.toFixed(2)
    }
    else if(document.getElementById('frango').checked){
        somaFrango = somaFrango + 1
        vendaFrango = vendaFrango + 25.00
        document.getElementById('resultadoFrango').innerHTML = somaFrango
        document.getElementById('vendaFrango').innerHTML = vendaFrango.toFixed(2)
    }
}

function estorno(e){
    if(document.getElementById('mussarela').checked){
        somaMussarela = somaMussarela - 1
        vendaMussarela = vendaMussarela - 25.00
        if(somaMussarela < 0){
            somaMussarela = 0
            vendaMussarela = 0.00
        }
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2)
    }
    else if(document.getElementById('calabresa').checked){
        somaCalabresa = somaCalabresa - 1
        vendaCalabresa = vendaCalabresa - 25.00
        if(somaCalabresa < 0){
            somaCalabresa = 0
            vendaCalabresa = 0.00
        }
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2)
    }
    else if(document.getElementById('bacon').checked){
        somaBacon = somaBacon - 1
        vendaBacon = vendaBacon - 25.00
        if(somaBacon < 0){
            somaBacon = 0
            vendaBacon = 0.00
        }
        document.getElementById('resultadoBacon').innerHTML = somaBacon
        document.getElementById('vendaBacon').innerHTML = vendaBacon.toFixed(2)
    }
    else if(document.getElementById('queijo').checked){
        somaQueijo = somaQueijo - 1
        vendaQueijo = vendaQueijo - 25.00
        if(somaQueijo < 0){
            somaQueijo = 0
            vendaQueijo = 0.00
        }
        document.getElementById('resultadoQueijo').innerHTML = somaQueijo
        document.getElementById('vendaQueijo').innerHTML = vendaQueijo.toFixed(2)
    }
    else if(document.getElementById('frango').checked){
        somaFrango = somaFrango - 1
        vendaFrango = vendaFrango - 25.00
        if(somaFrango < 0){
            somaFrango = 0
            vendaFrango = 0.00
        }
        document.getElementById('resultadoFrango').innerHTML = somaFrango
        document.getElementById('vendaFrango').innerHTML = vendaFrango.toFixed(2)
    }
}