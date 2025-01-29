//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Inicio do Projeto

    let amigos = [];
   

    // Função que adiciona os nomes através de um input
function adicionarAmigo (){

     let listaAmigo = document.querySelector('input').value.trim(); //Adiciona os nomes pelo input

     if (listaAmigo === ('')){
        alert('Por favor, insira um nome!'); // Aviso ao deixar em branco o campo
        return;

     }

     if (amigos.includes(listaAmigo)) {
        alert('Este nome já foi adicionado!'); // Alerta se o nome for duplicado
        document.querySelector('input').value = ''; // Limpa o campo
        return;
     }
        amigos.push(listaAmigo); // Adiciona os nomes na Array
        document.querySelector('input').value = ''; // Limpa o campo após a inserção de um nome

     listaNomes();


    }
    //Função que cria uma lista na página com os nomes descritos na Array
function listaNomes() {
        let lista = document.querySelector('#listaAmigos'); // Campo onde a lista é inserida 
    lista.innerHTML = ''; // Garantia de que não haja nomes duplicados

    // loop em for que percorre toda a Array e cria lista para os nomes
    for (let i = 0; i < amigos.length; i++) {
        let novoItem = document.createElement('li');
        novoItem.textContent = amigos[i]; 
        lista.appendChild(novoItem); 
    }
}
// Função que sorteia o nome e que o apresenta após o click no botão "sortear amigo"
function sortearAmigo () {

    if (amigos.length === 0) { //Caso não houver nomes na lista, apresenta alerta. 
    alert ('Não há nomes para sortear!')
    
        return;
    }
   
    let nomeSorteado = parseInt(Math.floor(Math.random() *amigos.length)); // percorre a Array e sorteia um índice aleatório
    let resultadoSorteio = document.querySelector('#resultado'); 
    resultadoSorteio.textContent = (`O amigo secreto sorteado é ${amigos[nomeSorteado]}`); // apresenta o resultado na página. 

       
   
     


}
    


        
     
    
    
     
    

