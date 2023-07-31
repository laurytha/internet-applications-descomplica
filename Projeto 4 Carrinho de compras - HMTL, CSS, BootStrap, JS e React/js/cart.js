var valorTotal = [0,0];
var valorProduto = [49.99,29.99]
var qtd = [0,0];

//pegar um elemento pelo id para depois podermos manipular = document.getElementById()
//função pra adicionar item quando clicado em +
function adicionarItem(item){

    var quantidade = document.getElementById('quantidade'+ item); 
    var total = document.getElementById("total"+ item);
    qtd[item] +=1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra();
}

//função pra subtrair item quando clicado em -
function removerItem(item){

    if(qtd[item] >0){
        qtd[item] -=1;
        var quantidade = document.getElementById('quantidade'+ item);
        var total = document.getElementById("total"+ item);
        quantidade.innerHTML = qtd[item];
        valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
        total.innerHTML = valorTotal[item].toFixed(2);
        valorCompra();
    }
}

//atualizar o valor total da compra dos itens
function valorCompra(){

    var valorTotalCompra = document.getElementById('valorTotalCompra');
    var valor = 0;
    for(var i =0; i < valorTotal.length; i++){
        valor += valorTotal[i];
    }
    valorTotalCompra.innerHTML = valor.toFixed(2);
}

