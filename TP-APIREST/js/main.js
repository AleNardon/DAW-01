function createCardCharacter(img, name, species, status, type, gender) {
	return `
        <div class="divCharacter">
            <div class="divImg">
                <img
                    src="${img}"
                    alt=""
                />
            </div>
            <div class="infoCharacter">
                <div class="nombre"><p>${name}</p></div>
                <div class="status"><p>Status: ${status}</p></div>
                <div class="species"><p>Species: ${species}</p></div>
                <div class="type"><p>Type: ${type}</p></div>
                <div class="gender"><p>Gender: ${gender}</p></div>
            </div>
        </div>
    `;
}

async function takeAllCharacter(url) {
	url === null || url === undefined || url === ""
		? (url = "https://rickandmortyapi.com/api/character")
		: url;
	const response = await fetch(url);
	const data = await response.json();
	const characters = data.results;
	const divCharacters = document.getElementById("characters");
	divCharacters.innerHTML = "";
	characters.forEach((character) => {
		divCharacters.innerHTML += createCardCharacter(
			character.image,
			character.name,
			character.species,
			character.status,
			character.gender
		);
	});

	let next = data.info.next;
	let prev = data.info.prev;
	const paginator = document.getElementById("paginator");
	if (prev === null && next === null) {
		paginator.style.display = "none";
	} else {
		paginator.style.display = "flex";
		if (prev !== null) {
			const divPrev = document.getElementById("previous");
			divPrev.addEventListener("click", () => {
				takeAllCharacter(prev);
			});
		}
		if (next !== null) {
			const divNext = document.getElementById("next");

			divNext.addEventListener("click", () => {
				takeAllCharacter(next);
			});
		}
	}
}
function displaySearchMode() {
	let params = new URLSearchParams(location.search);
	let p = "<h3>Busqueda</h3>";
	if (params.has("name") ) {
		p += `<p>Nombre: ${params.get("name")}</p>`;
	}
	if (params.has("species")) {
		p += `<p>Especie: ${params.get("species")}</p>`;
	}
	if (params.has("status")) {
		p += `<p>Estado: ${params.get("status")}</p>`;
	}
	if (params.has("type")) {
		p += `<p>Tipo: ${params.get("type")}</p>`;
	}
	if (params.has("gender")) {
		p += `<p>Genero: ${params.get("gender")}</p>`;
	}
	return p;
}

addEventListener("load", () => {
	let params = new URLSearchParams(location.search);
	if (
		params.has("name") ||
		params.has("species") ||
		params.has("status") ||
		params.has("type") ||
		params.has("gender")
	) {
		takeAllCharacter(
			"https://rickandmortyapi.com/api/character?" + params.toString()
		);
		document.getElementById("searchText").innerHTML = displaySearchMode();
	} else {
		document.getElementById("searchText").innerHTML = "";
		takeAllCharacter();
	}
});
