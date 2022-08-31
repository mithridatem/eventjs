//récupération de la liste déroulante
const liste= document.querySelector('#liste');
//tableau associatif
const tab = { 1 : 'afficher', 2: 'ajouter', 3: 'modifier', 4:'supprimer',5: 'administrer' };
//création de la liste déroulante depuis le tableau associatif
for (let i in tab) {
    let option = document.createElement("option");
    //ajout de la valeur index (id) => tableau associatif
    option.setAttribute("value", i);
    //ajout de la valeur textcontent => tableau associatif
    option.textContent = tab[i];
    //ajout d'un enfant option
    liste.appendChild(option);
}
//écouteur événement récupération de l'élément sélectionné
liste.addEventListener('change', (e) => {
    const result = document.querySelector('#result');
    //récupération de la value de l'option sélectionnée (id)
    const value = e.target.value
    //affichage console récupération de toutes les propriétés de l'élèment
    console.log(e);
    //affichage console récupération du contenu text (depuis la liste déroulante)
    console.log(e.target[e.target.value].text);
    //affichage dans la div de l'id sélectionné
    result.textContent=value; 
});
