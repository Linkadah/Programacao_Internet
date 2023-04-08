const nameList = ["Carla_S2", "Nome1", "Nome2"]

const botaofiltrar = document.getElementById("filt");
const botaoadiciona = document.getElementById("add");
const botaoremove = document.getElementById("remove");
const msg = document.getElementById("mensagem");
const listE1 = document.getElementById("list");
const searchField = document.getElementById("searchField");


this.fillList();

function fillList(list = nameList) {
    listE1.innerHTML = "";
    for(let i = 0; i < list.length; i++) {
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listE1.appendChild(listItems);
    }
    msg.innerHTML = "Para aparecer todos os nomes deixe a caixa 'Pesquise:' em branco e clique em Filtrar";
}

function inputHandler() {
    
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord);
    })

    fillList(filteredList);
}

botaofiltrar.addEventListener("click", inputHandler);


function add() {
    nome = searchField.value.toLowerCase(); //valor da caixa "Pesquise:"
    if (nome != ""){ //se tiver algo escrito
        nameList.push(nome) //add o nome na lista
        msg.innerHTML = "Nome adicionado :)" //msg de confirmação
    }
    else { //se n tiver nd escrito
        msg.innerHTML = "Insira algo na caixa de pesquisa :/" //msg de confirmação
    }
}

botaoadiciona.addEventListener("click", add); 


function remove(){
    nome = searchField.value.toLowerCase(); //pega o nome da caixa "Pesquise:"

    var index = nameList.indexOf(nome); // index == o nome q colocaram na lista

    if (index > -1){ //se o nome estiver no index / se tiver na lista
        nameList.splice(index, 1); //tira o nome
        msg.innerHTML = "Nome removido " + nome + " :)"; //msg de confirmação
    }
    else{ //se o nome n existir na var index / na lista
        msg.innerHTML = "Tente novamente, não encontramos esse nome " + nome + " :/"; //msg de confirmação
    }
}

botaoremove.addEventListener("click", remove);