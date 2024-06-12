function putValues() {
    if (localStorage.getItem("values")) {
        const values = JSON.parse(localStorage.getItem("values"));
        document.getElementById("name").value = values.name;
        document.getElementById("email").value = values.email;
        document.getElementById("age").value = values.age;
        document.getElementById("phone").value = values.phone;
        document.getElementById("address").value = values.address;
        document.getElementById("city").value = values.city;
        document.getElementById("postalCode").value = values.postalCode;
        document.getElementById("dni").value = values.dni;
    }
}

putValues();


// -------------validaciones inputs--------------------

function validateName(value) {
	if (value.length < 6 || !value.includes(" ")) {
		return "El nombre completo debe tener más de 6 letras y al menos un espacio";
	}
	return "";
}
function validateEmail(value) {
	const emaiRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emaiRegex.test(value)) {
		return "El email no es valido";
	}
	return "";
}

function validatePassword(value) {
	const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
	if (!passwordRegex.test(value)) {
		return "La contraseña debe tener al menos 8 caracteres, formados por letras y números";
	}
	return "";
}
function validateConfirmPassword(value) {
	const password = document.getElementById("password").value;

	if (value !== password || value === "") {
		return "Las contraseñas no coinciden";
	}
	return "";
}

function validateAge(value) {
	if (value < 18 || !Number.isInteger(Number(value))) {
		return "La edad debe ser un número entero mayor y igual a 18";
	}
	return "";
}
function validatePhone(value) {
	const phoneRegex = /^\d{7,}$/;
	if (!phoneRegex.test(value)) {
		return "El teléfono debe ser un número de al menos 7 dígitos";
	}
	return "";
}
function validateAddress(value) {
	if (value.length < 5 || !value.includes(" ")) {
		return "La dirección debe tener al menos 5 caracteres, con letras, números y un espacio en el medio";
	}
	return "";
}
function validateCity(value) {
	if (value.length < 3) {
		return "La ciudad debe tener al menos 3 caracteres";
	}
	return "";
}
function validatePC(value) {
	if (value.length < 3) {
		return "El codigo postal debe tener al menos 3 caracteres";
	}
	return "";
}
function validateDNI(value) {
	if (
		!(value.length === 7 || value.length === 8) ||
		!Number.isInteger(Number(value))
	) {
		return "El DNI debe tener entre 7 u 8 numeros";
	}
	return "";
}

function displayError(fieldId, errorMessage) {
	const errorElement = document.getElementById(fieldId + "Error");

	errorElement.textContent = errorMessage;
	if (errorMessage !== "") {
		document.getElementById(fieldId).classList.add("errorInput");
	}
}

function clearError(fieldId) {
	const errorElement = document.getElementById(fieldId + "Error");
	errorElement.textContent = "";
	document.getElementById(fieldId).classList.remove("errorInput");
}

const fields = [
	{ id: "name", validate: validateName },
	{ id: "email", validate: validateEmail },
	{ id: "password", validate: validatePassword },
	{ id: "confirmPassword", validate: validateConfirmPassword },
	{ id: "age", validate: validateAge },
	{ id: "phone", validate: validatePhone },
	{ id: "address", validate: validateAddress },
	{ id: "city", validate: validateCity },
	{ id: "postalCode", validate: validatePC },
	{ id: "dni", validate: validateDNI },
];

// agregar validaciones a todos los campos del formulario
fields.forEach((field) => {
	const input = document.getElementById(field.id);
	input.addEventListener("blur", function () {
		const errorMessage = field.validate(input.value);
		displayError(field.id, errorMessage);
	});
	input.addEventListener("focus", function () {
		clearError(field.id);
	});
});

// Rellenar titulo con input del nombre
const nameTitle = document.getElementById("nameSubs");
document.getElementById("name").addEventListener("input", function () {
	nameTitle.textContent = this.value;
});

async function successForm() {
    let values = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		password: document.getElementById("password").value,
		age: document.getElementById("age").value,
		phone: document.getElementById("phone").value,
		address: document.getElementById("address").value,
		city: document.getElementById("city").value,
		postalCode: document.getElementById("postalCode").value,
		dni: document.getElementById("dni").value,
    };

    let link = "https://jsonplaceholder.typicode.com/users?" + new URLSearchParams(values).toString()  
	try {
		const res=await fetch(link, {
			method: "GET",
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
            
		});
        if (!res.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
	} catch (error) {
		displayModal(
			"Errores en enviar el formulario",
			"Errores:" + error,
			"errorTitle"
		);
		return;
	}
	localStorage.setItem("values", JSON.stringify(values));
	displayModal("Formulario enviado", "Gracias por suscribirte", "successTitle");
}

// envio de formulario
const form = document.getElementById("formSubs");
form.addEventListener("submit", function (e) {
	e.preventDefault();
	let er = "";
	let hasErrors = false;
	fields.forEach((field) => {
		const input = document.getElementById(field.id);
		const errorMessage = field.validate(input.value);
		if (errorMessage) {
			er += "<p class='errorP'>" + errorMessage + "</p>";
			displayError(field.id, errorMessage);
			hasErrors = true;
		}
	});

	if (!hasErrors) {
		successForm();
	} else {
		displayModal(
			"Errores en el formulario",
			"Errores:\n" + er,
			"errorTitle"
		);
	}
});

