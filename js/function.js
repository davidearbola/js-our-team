function stampa(oggetto) {
	let elemento = document.createElement(`p`);
	elemento.innerHTML = `${oggetto.nome}, ${oggetto.ruolo}, ${oggetto.immagine}`;
	document.getElementById(`prova`).append(elemento);
}
