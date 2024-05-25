const urlTableProduit = "http://localhost:8080/ords/TP3/produit/";

// Créer un élément html passé en paramètre.
function createNode(element) {
    return document.createElement(element);
}


// Placer un élément dans un élément parent.
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

        });
    })
    .catch(function (error) {
        console.log((error));
    });
    
