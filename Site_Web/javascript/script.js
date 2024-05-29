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
function afficherProduits() {
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
                imageLaptop.src = "../image/" + produit.chemin_image;
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
                quantiteProduit.innerHTML = `Quantité disponible: ${produit.quantite}`;
                append(divInformationProduit, quantiteProduit);

                // Prix du produit
                let prixProduit = createNode("p");
                prixProduit.className = "prix-produit"
                prixProduit.innerHTML = `Prix: ${produit.prix}`;
                append(divInformationProduit, prixProduit);

                // Magasin où le produit est disponible
                let magasinVendu = createNode("p");
                magasinVendu.className = "magasin-vendu";

                if (parseInt(produit.magasin_id_magasin) == 1) {
                    magasinVendu.innerHTML = `Vendu par: Ludo Montréal<br><br>Numéro du magasin: ${produit.magasin_id_magasin}`;
                } else if (parseInt(produit.magasin_id_magasin == 2)) {
                    magasinVendu.innerHTML = `Vendu par: Ludo Laval<br><br>Numéro du magasin: ${produit.magasin_id_magasin}`;
                } else {
                    magasinVendu.innerHTML = `Vendu par: Ludo Toronto<br><br>Numéro du magasin: ${produit.magasin_id_magasin}`;
                }
                append(divInformationProduit, magasinVendu);

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
}


    

// Afficher tous les magasins dynamiquement dans la page "magasin.html".
function afficherMagasins() {
    const listeMagasins = document.getElementById("magasin");
    fetch(urlTableMagasin)
        .then((resp) => resp.json())
        .then(function (data) {
            let magasins = data.items;
            return magasins.map(function (magasin) {
                
                // Ajout d'un élément de type "div" dans la page magasin.html.
                let divMagasin = createNode("div");
                divMagasin.className = "div-magasin-afficher";
                append(listeMagasins, divMagasin);
                
                // Nom du magasin
                let nomMagasin = createNode("h3");
                nomMagasin.className = "nom-magasin";
                nomMagasin.innerHTML = magasin.nom_magasin;
                append(divMagasin, nomMagasin);

                // Numéro du magasin
                let numeroMagasin = createNode("p");
                numeroMagasin.className = "numero-magasin";
                numeroMagasin.innerHTML = `Numéro du magasin: ${magasin.id_magasin}`;
                append(divMagasin, numeroMagasin);

                // Adresse du magasin
                let adresseMagasin = createNode("p");
                adresseMagasin.className = "adresse-magasin";
                adresseMagasin.innerHTML = `Adresse: ${magasin.adresse}`;
                append(divMagasin, adresseMagasin);

                // Numéro de téléphone
                let numeroTelephoneMagasin = createNode("p");
                numeroTelephoneMagasin.className = "numero-telephone-magasin";
                numeroTelephoneMagasin.innerHTML = `Numéro de téléphone: ${magasin.numero_telephone}`;
                append(divMagasin, numeroTelephoneMagasin);

                // Horaire d'ouverture
                let horarireOuvertureMagasin = createNode("p");
                horarireOuvertureMagasin.className = "horaire-ouverture-magasin";
                horarireOuvertureMagasin.innerHTML = `Horaire d'ouverture: ${magasin.horaire_ouverture}`;
                append(divMagasin, horarireOuvertureMagasin);


                

            });

        })
        .catch(function (error) {
            console.log((error));
        })
}


// Demander le numéro du client et afficher dynamiquement son panier.
function demanderNumeroClientEtAfficherPanier() {
    const nombrePanier = 10;
    let numeroClientPanier;
    do {
        numeroClientPanier = window.prompt("Veuillez saisir le numéro du client dont vous voulez voir le panier: ");
        if (numeroClientPanier < 1 || numeroClientPanier > nombrePanier) {
            window.alert(`Le numéro de client est invalide, il doit être entre 1 et ${nombrePanier}.`);
        }
    } while (numeroClientPanier < 1 || numeroClientPanier > nombrePanier);
    const urlTablePanierClient = urlTablePanier + numeroClientPanier;
    console.log(urlTablePanierClient);

    // Fonction fetch afin d'obtenir le numéro de panier du client.
    let idPanierClient;
    fetch(urlTablePanierClient)
    .then((resp) => resp.json())
    .then(function (data) {
        let panier = data;
        idPanierClient = panier.id_panier;
        alert(idPanierClient);
    })
    .catch(function (error) {
        console.log((error));
    })

    // Fonction fetch afin d'obtenir les informations du porduit dans le panier en fonction du numéro de panier.
    let panier = document.getElementById("panier");
    fetch(urlTableProduit)
    .then((resp) => resp.json())
    .then(function (data) {
        let produits = data.items;

        return produits.map(function (produit) {
            // Vérifier si le produit appartient au panier du client.
            if (produit.panier_id_panier == idPanierClient) {

                // Ajout d'un élément de type "div" dans la page magasin.html.
                let divProduitPanier = createNode("div");
                divProduit.className = "div-panier-produit-afficher";
                append(panier, divProduitPanier);

                // Création d'un élément div qui contiendra l'image du produit dans le panier.  
                let divImageProduitPanier = createNode("div");
                divImageProduitPanier.className = "div-image-produit-panier";
                append(divProduitPanier, divImageProduitPanier);

                // Image
                let imageProduitPanier = createNode("img");
                imageProduitPanier.className = "image-laptop";
                imageProduitPanier.src = "../image/" + produit.chemin_image;
                append(divImageProduitPanier, imageProduitPanier);
                
                
                
            }
        })
    })
    .catch(function (error) {
        console.log((error));
    })
}