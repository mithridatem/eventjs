const liste = document.querySelector('#liste');
let tab = Array('afficher','ajouter', 'modifier','supprimer');

for (e of tab) {
    let option=document.createElement("option");
    option.setAttribute("value", e);
    option.setAttribute("class", 'op');
    option.textContent = e;
    liste.appendChild(option);
}


liste.addEventListener('click',()=>{
   setInterval(update, 100);
   console.log(liste.options[liste.selectedIndex].text);
})
/* function update(){
    setInterval(()=>{
        zone.textContent =liste.options[liste.selectedIndex].text;
            console.log(liste.options[liste.selectedIndex].text);
    }, 100)} */
function update(){
    zone.textContent =liste.options[liste.selectedIndex].text;
}