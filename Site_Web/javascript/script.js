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
        });
    })
    .catch(function (error) {
        console.log((error));
    });
    
