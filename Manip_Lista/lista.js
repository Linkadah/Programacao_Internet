const namelist = ["Aline", "Otavio", "Camila", "Nareba", "Jean", "Julio", "Julio Rodalo", "Rany" ,"TI"]

const listE1 = document.getElementById("list");
const searchField = document.getElementById("searchField");
searchField.addEventListener("input", inputHandler);

this.fillList();

function fillList(list = namelist) {
    listE1.innerHTML = "";
    for(let i=0; i < list.length; i++) {
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listE1.appendChild(listItems);
    }
}

function inputHandler() {
    const filteredList = namelist.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord)
    });
    fillList(filteredList);
}