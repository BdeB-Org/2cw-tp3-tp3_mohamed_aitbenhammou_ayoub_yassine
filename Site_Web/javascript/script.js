const urlTableMagasin = "http://localhost:8080/ords/TP3/magasin/";
const urlTableClient = "http://localhost:8080/ords/TP3/client/";
const urlTableProduit = "http://localhost:8080/ords/TP3/produit/";
const urlTablePanier = "http://localhost:8080/ords/TP3/panier/";
const urlTableFacture = "http://localhost:8080/ords/TP3/facture/";


// Créer un élément html passé en paramètre.
function createNode(element) {
    return document.createElement(element);
}


// Placer un élément dans un élément parent.
function append(parent, el) {
    return parent.appendChild(el);
}


//Afficher tous les produits de la table "produit" dynamiquement dans la page "produit.html".
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
            append(divInformationProduit, descriptionProduit);

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




// Afficher tous les magasins dynamiquement dans la page "magasin.html".
const listeMagasins = document.getElementById("magasin");
fetch(urlTableMagasin)
    .then((resp) => resp.json())
    .then(function (data) {
        let magasin = data.items;
        return magasins.map(function (magasin) {

            // Ajout d'un élément de type "div" dans la page magasin.html.
            let divProduit = createNode("div");
            divProduit.className = "div-magasin-afficher";
            append(listeProduits, divProduit);


        });

    })
    .catch(function (error) {
        console.log((error));
    })
