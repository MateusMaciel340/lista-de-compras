let listaDeItens = [];

const form = document.getElementById('form-itens');
const itensInput = document.getElementById('receber-item');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    salvarItens();
});

function salvarItens() {
    const comprasItens = itensInput.value;
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItens.toUpperCase());

    if (checarDuplicado) {
        alert('Esse item já existe!');
    } else {

        listaDeItens.push({
            valor: comprasItens
        });
    
        console.log(listaDeItens);
    }
}