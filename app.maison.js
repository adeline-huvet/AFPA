var btnAdd = document.getElementById('submit');
var formTitre = document.getElementById('addtitre');
var formAnnee = document.getElementById('addannee');
var formAuteur = document.getElementById('addauteur');
var btnSubMovie = document.getElementById('submitmovie');

var formulaire = document.getElementById('formulaire');

btnAdd.addEventListener('click', function () {
	formulaire.style.visibility = 'visible';
})

var films = [{
		name: "Deadpool",
		years: 2016,
		author: "Tim Miller"
	},
	{
		name: "Spiderman",
		years: 2002,
		author: "Sam Raimi"
	},
	{
		name: "Scream",
		years: 1996,
		author: "Wes Craven"
	},
	{
		name: "It: chapter 1",
		years: 2019,
		author: "Andy Muschietti"
	},

];

// ajout titre 
// var name = document.getElementById('addtitre');
// var year = document.getElementById('addannee');
// var author = document.getElementById('addauteur');
// var objet = "";

btnSubMovie.addEventListener('click', (e) => {
	e.preventDefault();
	objet = {
		name: formTitre.value,
		years: parseInt(formAnnee.value),
		author: formAuteur.value
	};

	//control des saisies
	let controlAnnee = new Date().getFullYear();
	if ((formTitre.value.length >= 2) &&
		((parseInt(formAnnee.value) >= 1900) && (parseInt(formAnnee.value) <= controlAnnee)) &&
		((formAuteur.value.length) >= 5)) {
		//todo contrôle ok
		films.push(objet);
		alert("film enregistré");

		return view(films);
	} else {
		alert('Champs incorrect')
	}
})



var titre = document.getElementById('titre');
var annee = document.getElementById('annee');
var auteur = document.getElementById('auteur');
var supprimez = document.getElementById('supprimez');

function view(films) {
	titre.innerHTML = "";
	annee.innerHTML = "";
	auteur.innerHTML = "";
	supprimez.innerHTML = "";

	for (let index = 0; index < films.length; index++) {
		titre.innerHTML += `<hr><li>${films[index].name}</li>`
		annee.innerHTML += `<hr><li>${films[index].years}</li>`
		auteur.innerHTML += `<hr><li>${films[index].author}</li>`
		supprimez.innerHTML += `<hr><li><button class="delete" value="${index}">Supprimez</button></li>`;
	}

	//Recherche du bouton supprimez//
	document.querySelectorAll('button.delete').forEach(btn => {
		btn.addEventListener('click', function (e) {
			return suppfilm(this.value);
		})
	})

	//supprime le film
	function suppfilm(i) {
		if (confirm("confirmez vous la suppression ?")) {
			films.splice(i, 1);
			view(films);
		}
	}
}

view(films);

//* Tri films
var filtre = document.getElementById('selectorFiltre');
filtre.addEventListener('change', (e) => {
	e.preventDefault();
	let indexSeclector = filtre.selectedIndex;
	//todo compaison valeur( titre ect. classement)
	if (indexSeclector == 1) {
		function compare(a, b) {
			var nameA = a.name.toUpperCase(); // ignore upper and lowercase
			var nameB = b.name.toUpperCase(); // ignore upper and lowercase
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}

			// names must be equal
			return 0;
		}
		view(films.sort(compare));


	} else if (indexSeclector == 2) {
		view(films.sort((a, b) => {
			return b.years - a.years;
		}));

	}
})






// récupérer données des input , les ranger dans un objet, mettre objet dans tableau (méthode push)