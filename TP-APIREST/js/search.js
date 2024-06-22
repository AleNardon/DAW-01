function search() {
	let form = document.getElementById("searchCharacter");
    
            // name : form.name.value,
            // species : form.species.value,
            // status : form.status.value,
            // type : form.type.value,
            // gender : form.gender.value

	let data ={}
    if(form.name.value !== ""){
        data.name = form.name.value;
    }
    if(form.species.value !== ""){
        data.species = form.species.value;
    }   
    if(form.status.value !== ""){
        data.status = form.status.value;
    }
    if(form.type.value !== ""){
        data.type = form.type.value;
    }
    if(form.gender.value !== ""){
        data.gender = form.gender.value;
    }

	let paramas = new URLSearchParams(data);
	location.href = "characters.html?"+paramas.toString();
}

document.getElementById("searchCharacter").addEventListener("submit", (e) => {
    e.preventDefault();
    search();
});
