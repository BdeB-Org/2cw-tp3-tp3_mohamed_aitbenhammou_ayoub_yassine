const urlTableProduit = "http://localhost:8080/ords/TP3/produit/";

// Créer un élément html passé en paramètre.
function createNode(element) {
    return document.createElement(element);
}

// 
function append(parent, el) {
    return parent.appendChild(el);
}

/* Afficher tous les produits de la table "produit" dynamiquement dans la page "produit.html". */
const listeProduits = document.getElementById("produit");
fetch(urlTableProduit)
    .then((resp) => resp.json())
    .then(function (data) {
        let produits = data.items;
        return produits.map(function (produit) {
            
            // Ajout d'un élément de type "div" dans la page produits.html.
            let divProduit = createNode("div");
            divProduit.className = "div-produit-afficher";
            append(listeProduits, divProduit);

            // Div image
            let divImageLaptop = createNode("div");
            divImageLaptop.className = "div-image-laptop";
            append(divProduit, divImageLaptop)
            
            // Image
            let imageLaptop = createNode("img");
            imageLaptop.className = "image-laptop";
            imageLaptop.src = "../image/laptop.png";
            append(divImageLaptop, imageLaptop);

            // Div informations du produit
            let divInformationProduit = createNode("div");
            divInformationProduit.className = "div-informations-produit"
            append(divProduit, divInformationProduit);

            // Nom du produit
            let nomProduit = createNode("h3");
            nomProduit.className = "nom-produit";
            nomProduit.innerHTML = produit.nom_produit;
            append(divInformationProduit, nomProduit);

            // Description du produit
            let descriptionProduit = createNode("p");
            descriptionProduit.className = "description-produits"
            descriptionProduit.innerHTML = produit.description;
            append(divInformationProduit, descriptionProduit)

            // Quantité du produit
            let quantiteProduit = createNode("p");
            quantiteProduit.className = "quantite-produit";
            quantiteProduit.innerHTML = `Quantité disponible ${produit.quantite}`;
            append(divInformationProduit, quantiteProduit); 

            // Prix du produit
            let prixProduit = createNode("p");
            prixProduit.className = "prix-produit"
            prixProduit.innerHTML = `Prix: ${produit.prix}`;
            append(divInformationProduit, prixProduit);

            // Bouton ajouter au panier
            let boutonAjouterAuPanier = createNode("button");
            boutonAjouterAuPanier.className = "bouton-ajouter-au-panier"
            boutonAjouterAuPanier.innerHTML = "Ajouter au panier";
            boutonAjouterAuPanier.onclick = function() {
                alert("Le produit a été ajouté au panier.");
            }
            append(divProduit, boutonAjouterAuPanier);

            
        });
    })
    .catch(function (error) {
        console.log((error));
    });
    //console.log(JSON.stringify(error));


function confirmerInscription() {
    

    var nomClient = document.getElementById("nom").value;
    var prenomClient = document.getElementById("prenom").value;
    var nomUtilisateur = document.getElementById("nomUtilisateur").value;
    var motDePasse = document.getElementById("motDePasse").value;
    var motDePasseConfirmation = document.getElementById("motDePasseConfirmation").value;

    let idClient = 1;

    var motDePasseIncorrect = motDePasse != motDePasseConfirmation;

    var informationsManquantes = nomClient == "" || prenomClient == "" || nomUtilisateur == "";

    // Vérifier si des informations sont manquantes.
    if (informationsManquantes) {
        window.alert("Le compe n'a pas été créé. Il manque des informations à inscrire dans le formulaire.");

        // Vérifier si le mot de passe et le mot de passe de confirmation sont identiques.
    } else if (motDePasseIncorrect) {
        window.alert("Le compte n'a pas été créé. Le mot de passe et le mot de passe de confirmation ne sont pas identiques.");
    } else {
        window.alert(`${nomClient} ${prenomClient}, votre compte a été créé. Vous pouvez maintenant vous connecter pour effectuer des achats.`);
    }

}

