(function() {
"use strict";

// var menu = [
// 	{
// 	image: "docutheque",
// 	texte: "Tous les documents" 
// 	},
// 	{
// 	image: "depeche",
// 	texte: "Toutes les dépêches"
// 	},
// 	{
// 	image: "video",
// 	texte: "Toutes les vidéos"
// 	},
// 	{
// 	image: "info",
// 	texte: "Mode d'emploi"
// 	},
// 	{
// 	image: "contact",
// 	texte: "Contacter la rédaction"
// 	}	
// ]; 

var candidats = [
	{
	prenom: "François",
	nom: "Fillon",
	parti: "Les Républicains",
	image: "fillon",
	documents: ""
	},	
	{
	prenom: "Manuel",
	nom: "Valls",
	parti: "Parti Socialiste",	
	image: "hollande",
	documents: ""
	},
	{
	prenom: "Marine",
	nom: "Le Pen",
	parti: "Front National",
	image: "lepen",
	documents: ""	
	},
	{
	prenom: "Yannick",
	nom: "Jadot",
	parti: "EELV",
	image: "jadot",
	documents: ""
	},
	{
	prenom: "Jean-Luc",
	nom: "Mélenchon",
	parti: "Parti de Gauche",
	image: "melenchon",
	documents: ""	
	},
	{
	prenom: "Emmanuel",
	nom: "Macron",
	parti: "La primaire.org",
	image: "machin",
	documents:""	
	}
];

var documents = [
	{
	titre: "",
	type: "",
	candidat: "",
	lien : "",
	}
];

var themes = [
	{
	titre: "Energies, agriculture et transports",
	sousThemes :[
		{
		titre: "Gaz de schiste",
		contenus: [
			{
			candidat: candidats[0],
			texte: "Plutôt  favorable à l'exploitation même sous condition : loin des habitations et dans des conditions sécurisées pour l'environnement. Source : programme du parti."
			},
			{
			candidat: candidats[1],
			texte: "Pour une évaluation des ressources car il est 'criminel d'interdire les recherches sur le gaz de schiste'. Source : meeting du 03/01/17"
			},
			{
			candidat: candidats[2],
			texte: "Pour la création d'un 'pôle d'expérimentation' relatif à l'exploitation du gaz de schiste."
			},
			{
			candidat: candidats[3],
			texte: "Contre l'exploitation du gaz de schiste. Source : cérémonie des voeux du 04/01/17. Mise à jour du 20 avril 2016 : Favorable à l'évaluation des ressources mais contre l'exploitation par fracturation hydraulique (recherche de techniques alternatives). Source : interview sur France 2 du 20/04/16"
			},
			{
			candidat: candidats[4],
			texte: "Favorable à une évaluation des réserves. Source : discours du 02/01/17. Mise à jour du 21 mars 2016 : L'exploitation des gaz de schiste ne représente pas une voie d'avenir. Source : allocution sur RTL du 21/03/16."
			},
			{
			candidat: candidats[5],
			texte: ""
			}
		]
		},
		{
		titre: "Nucléaire",
		contenus: [
			{
			candidat: candidats[0],
			texte: "Maintenir en fonction les centrales nucléaires certifiées par l ANS, et jugées rentables par leur propriétaire. Construire en permanence un, puis deux réacteurs nucléaire en France - soit quatre d ici à 2030. Moduler le prix de l électricité en fonction de son coût (saisonnier, journalier, horaire). Supprimer les subventions et obligations d achat aux technologies actuellement non compétitives. Doubler les crédits consacrés à la recherche sur les énergies propres. Source : programme du parti."
			},
			{
			candidat: candidats[1],
			texte: "Pas de fermeture de Fessenheim car 'tant qu'elle est autorisée à fonctionner, c'est un investissement du peuple français'. Source : meeting du 03/01/17"
			},
			{
			candidat: candidats[2],
			texte: "Le nucléaire est un atout climatique. Source : programme du parti. "
			},
			{
			candidat: candidats[3],
			texte: "Revoir la place de l'énergie dans les participations de l'Etat. Source : cérémonie des voeux du 04/01/17"
			},
			{
			candidat: candidats[4],
			texte: "Développer l'autoproduction d'énergie. Source : discours du 02/01/17"
			},
			{
			candidat: candidats[5],
			texte: "Trouver une solution à la question des déchets radioactifs. Source : programme du parti."
			}
		]
		},
		{
		titre: "Transport",
		contenus: [
			{
			candidat: candidats[0],
			texte: ""
			},
			{
			candidat: candidats[1],
			texte: "Remettre le réseau ferroviaire francilien au niveau de celui des grandes agglomérations européennes et rendre plus efficace la gouvernance des transports en Ile de France. Source : meeting du 03/01/17"
			},
			{
			candidat: candidats[2],
			texte: ""
			},
			{
			candidat: candidats[3],
			texte: "Réhabiliter la route au niveau de la politique nationale d'infrastructures en accélérant la modernisation du réseau routier dans le cadre des Contrats de Plan Etat-Région. Source : cérémonie des voeux du 04/01/17"
			},
			{
			candidat: candidats[4],
			texte: "Instaurer, au niveau européen, une obligation d'affichage des polluants autres quelles émissions de CO2 sur les véhicules neufs. Source : discours du 02/01/17"
			},
			{
			candidat: candidats[5],
			texte: ""
			}
		]
		},
		{
		titre: "Agriculture",
		contenus: [
			{
			candidat: candidats[0],
			texte: "Créer un mécanisme de 'garantie des prix éleveurs' au niveau européen qui se déclenche lorsque le marché est menacé par une crise. Source : discours du 20/12/16"
			},
			{
			candidat: candidats[1],
			texte: "Refonte du régime de la déduction pour aléa, pour poursuivre un objectif de débureaucratisation. Source : meeting du 03/01/17"
			},
			{
			candidat: candidats[2],
			texte: ""
			},
			{
			candidat: candidats[3],
			texte: ""
			},
			{
			candidat: candidats[4],
			texte: "Politique de préservation des fonciers agricoles. l'urbanisation des campagnes doit être raisonnée et raisonnable."
			},
			{
			candidat: candidats[5],
			texte: ""
			}
		]
		}
	]
	},
	
	{
	titre: "Transparence",
	sousThemes : [
		{
		titre: "Lois et normes",
		contenus: [
			{
			candidat: candidats[0],
			texte: "Alléger l'ensemble des normes que le législateur a imposées, dans le plus grand désordre, aux collectivités depuis plus de 20 ans. Source : discours du 20/12/16"
			},
			{
			candidat: candidats[1],
			texte: "Baisser de 10% le stock de lois et de normes, réduire de 25% les coûts administratifs des collectivités, entreprises, caisses sociales. Source : meeting du 03/01/17"
			},
			{
			candidat: candidats[2],
			texte: "Ne pas surtransposer les directives européennes. Source : programme du parti. "
			},
			{
			candidat: candidats[3],
			texte: "Expérimenter une politique de 'sunset clause' : chaque fois qu'une nouvelle réglementation est adoptée, le gouvernement y appliquerait une date d'expiration. Source : cérémonie des voeux du 04/01/17"
			},
			{
			candidat: candidats[4],
			texte: "Constituer une 'task force simplification'. Source : discours du 02/01/17"
			},
			{
			candidat: candidats[5],
			texte: "Renforcer les études d'impact. Source : programme du parti."
			}
		]
		},
		
		{
		titre: "Open data",
		contenus: [
			{
			candidat: candidats[0],
			texte: "Création d'un droit à l'information sur les décisions publiques. Source : discours du 20/12/16"
			},
			{
			candidat: candidats[1],
			texte: "Améliorer la transparence des données publiques. Source : meeting du 03/01/17"
			},
			{
			candidat: candidats[2],
			texte: "Avoir une véritable politique d'open data. Source : programme du parti. "
			},
			{
			candidat: candidats[3],
			texte: "Expérimenter des statistiques et méthodes de calcul s'agissant de l'activité normative, de son coût budgétaire et économique associé, et de la charge administrative induite. Source : cérémonie des voeux du 04/01/17"
			},
			{
			candidat: candidats[4],
			texte: "Rendre publics les rapports d'évaluation des politiques nationales. Source : discours du 02/01/17"
			},
			{
			candidat: candidats[5],
			texte: "Créer un droit d'accès numérique aux décisions. Source : programme du parti."
			}
		]
		}
	]
	},
];

var contenu = [
	{
	theme: "",
	candidat: "",
	source: "",
	texte: ""
	}
]

angular.module("Comparateur", [])
//.controller("MenuController", MenuController)
.controller("CandidatsController", CandidatsController)
.controller("ContenusController", ContenusController)
.controller("ImgBlcController", ImgBlcController)
.controller("ImgGriseController", ImgGriseController)
.controller("ImgPlusController", ImgPlusController);


CandidatsController.$inject = ["$scope"]
function CandidatsController ($scope) {
	$scope.candidats = candidats;
};

ContenusController.$inject = ["$scope"]
function ContenusController ($scope) {
	$scope.themes = themes;
	$scope.imageBlc = "fleche_bas_blc.svg"	;
	$scope.imageGrise = "fleche_bas_grise.svg";
	
	// fonction pour ajouter un thème
	$scope.addNewTheme = function () {
		var newTheme = {
			titre: $scope.newT,
			sousThemes: []
		};
		$scope.themes.push(newTheme);
	};
	
	// fonction pour ajouter un sous-thème
	$scope.addNewSousTheme = function (themeIndex) {
		var newSousTheme = {
			titre: $scope.themes[themeIndex].newST,
			contenus: []
		};	
		// boucle pour qu'à chaque fois qu'un sous-thème est créé, autant de contenus que de de candidats soient créés automatiquement
		for (var i=0; i<candidats.length; i++) {
			var newContenu = {
				candidat: candidats[i],
				texte: "Pas d'annonce recensée en la matière."
			};
			newSousTheme.contenus.push(newContenu) ;
 		};
		// window.alert(newSousTheme.contenus.length);
		//window.alert(newSousTheme.contenus[0].candidat.prenom);
		$scope.themes[themeIndex].sousThemes.push(newSousTheme);
	};
	
	// fonction pour ajouter un contenu
	// to do : faire un controller propre au contenu, comme ça on peut pré-écrire le contenu de façon locale
	$scope.ModifieTxt = function (themeIndex, sousThemeIndex, contenuIndex) {
		var newTxt = $scope.themes[themeIndex].sousThemes[sousThemeIndex].contenus[contenuIndex].modifiedTxt ;
		// newTxt est une variable locale, modifiedTxt correspond au ng-model
		// themeIndex, sousThemeIndex, contenuIndex sont aussi des variables locales, qui correspondent à $parent.$parent.$index, $parent.$index, et $index
		$scope.themes[themeIndex].sousThemes[sousThemeIndex].contenus[contenuIndex].texte = newTxt
	};
	
	// fonctions pour supprimer un thème
	$scope.ouvrePopupSuppressionTheme = function (themeIndex) {
		$scope.themes[themeIndex].popupSuppression=true;
	};
	$scope.supprimeTheme=function(themeIndex){
        $scope.themes[themeIndex].popupSuppression=false;
		$scope.themes.splice(themeIndex,1);
	};
	$scope.fermePopupSuppressionTheme = function(themeIndex){
         $scope.themes[themeIndex].popupSuppression=false;
	};
	
	// fonctions pour modifier un thème
	$scope.ouvrePopupModifierTheme = function (themeIndex) {
		$scope.themes[themeIndex].popupModifier=true;
	};
	$scope.modifieTheme = function(themeIndex) {
		$scope.themes[themeIndex].popupModifier = false;
		$scope.themes[themeIndex].titre = $scope.themes[themeIndex].modifiedT;
	};
	$scope.fermePopupModifierTheme = function (themeIndex) {
		$scope.themes[themeIndex].popupModifier = false;
	};
	
	// fonctions pour supprimer un sous-thème
	$scope.ouvrePopupSuppressionSousTheme = function (themeIndex, sousThemeIndex) {
		$scope.themes[themeIndex].sousThemes[sousThemeIndex].popupSuppression=true;
	};
	$scope.supprimeSousTheme=function(themeIndex, sousThemeIndex){
        $scope.themes[themeIndex].sousThemes[sousThemeIndex].popupSuppression=false;
		$scope.themes[themeIndex].sousThemes.splice(sousThemeIndex,1);
	};
	$scope.fermePopupSuppressionSousTheme = function(themeIndex, sousThemeIndex){
         $scope.themes[themeIndex].sousThemes[sousThemeIndex].popupSuppression=false;
	};
	
	// fonctions pour modifier un sous-thème
	$scope.ouvrePopupModifierSousTheme = function (themeIndex, sousThemeIndex) {
		$scope.themes[themeIndex].sousThemes[sousThemeIndex].popupModifier=true;
	};
	$scope.modifieSousTheme = function(themeIndex, sousThemeIndex) {
		$scope.themes[themeIndex].sousThemes[sousThemeIndex].popupModifier = false;
		$scope.themes[themeIndex].sousThemes[sousThemeIndex].titre = $scope.themes[themeIndex].sousThemes[sousThemeIndex].modifiedST;
	};
	$scope.fermePopupModifierSousTheme = function (themeIndex, sousThemeIndex) {
		$scope.themes[themeIndex].sousThemes[sousThemeIndex].popupModifier = false;
	};

};

// fonction pour dérouler un thème et changer le sens de la flèche blanche
ImgBlcController.$inject = ["$scope"]
function ImgBlcController ($scope) {
	$scope.derouleTheme = function () {
		$scope.$parent.derouleT = ! $scope.$parent.derouleT;
		if ($scope.imageBlc == "fleche_bas_blc.svg") {
		$scope.imageBlc = "fleche_haut_blc.svg";
		} else {
		$scope.imageBlc = "fleche_bas_blc.svg";
		};			
	};	
};

// fonction pour dérouler un sous-thème et changer le sens de la flèche grise
ImgGriseController.$inject = ["$scope"]
function ImgGriseController ($scope) {
	$scope.derouleSousTheme = function () {
		$scope.$parent.derouleST = ! $scope.$parent.derouleST;
		if ($scope.imageGrise == "fleche_bas_grise.svg") {
		$scope.imageGrise = "fleche_haut_grise.svg";
		} else {
		$scope.imageGrise = "fleche_bas_grise.svg";
		};			
	};	
};

// fonction pour dérouler le "plus" du menu
ImgPlusController.$inject = ["$scope"]
function ImgPlusController ($scope) {
	$scope.signe = "plus";
	$scope.derouleMenu = function () {
		$scope.$parent.deroulePlus = ! $scope.$parent.deroulePlus;
		if ($scope.signe == "plus") {
		$scope.signe = "moins";
		} else {
		$scope.signe = "plus";
		};			
	};	
};

})();




