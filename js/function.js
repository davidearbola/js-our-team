// function stampa(oggetto) {
// 	let elemento = document.createElement(`p`);
// 	elemento.innerHTML = `${oggetto.nome}, ${oggetto.ruolo}, ${oggetto.immagine}`;
// 	document.getElementById(`prova`).append(elemento);
// }

// funzione che stampa in pagina una serie di elementi stilizzati in css per creare le card dei membri del team
function stampa(oggetto) {
	let elemento = document.createElement(`div`);
	elemento.classList.add("col-lg", "col-md", "col-sm");
	elemento.innerHTML = `
    <div class="box">
    <div class="w-40">
        <img src="./img/${oggetto.immagine}" alt="">
    </div>
    <div class="w-60">
        <h3>${oggetto.nome}</h3>
        <p>${oggetto.ruolo}</p>
    </div>
    </div>
    `;
	document.getElementById(`team`).append(elemento);
}
