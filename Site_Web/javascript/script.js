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
                prixProduit.innerHTML = `Prix: ${produit.prix} $`;
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
    let numeroClient;
    const nombrePanier = 10;
    do {
        numeroClient = window.prompt("Veuillez saisir le numéro du client dont vous voulez voir le panier: ");
        if (numeroClient < 1 || numeroClient > nombrePanier) {
            window.alert(`Le numéro de client est invalide, il doit être entre 1 et ${nombrePanier}.`);
        }
    } while (numeroClient < 1 || numeroClient > nombrePanier);
    
    // Le lien afin d'obtenir le panier du client en fonction de son numéro de client.
    const urlTablePanierClient = urlTablePanier + numeroClient;


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

    let coutTotal = 0;
    let nombreProduitsDansPanier = 0;
    
    fetch(urlTableProduit)
    .then((resp) => resp.json())
    .then(function (data) {
        let produits = data.items;

        
        
        
        return produits.map(function (produit) {
            // Vérifier si le produit appartient au panier du client.
            if (produit.panier_id_panier == idPanierClient) {

                // Ajout d'un élément de type "div" dans la page magasin.html.
                let divProduitPanier = createNode("div");
                divProduitPanier.className = "div-panier-produit-afficher";
                append(panier, divProduitPanier);

                // Création d'un élément div qui contiendra l'image du produit dans le panier.  
                let divImageProduitPanier = createNode("div");
                divImageProduitPanier.className = "div-image-produit-panier";
                append(divProduitPanier, divImageProduitPanier);

                // Affichage de l'image du produit dans le panier.
                let imageProduitPanier = createNode("img");
                imageProduitPanier.className = "image-laptop-panier";
                imageProduitPanier.src = "../image/" + produit.chemin_image;
                append(divImageProduitPanier, imageProduitPanier);
                
                // Div pour l'affichage des informations du produit dans le panier.
                let divInformationProduitPanier = createNode("div");
                divInformationProduitPanier.className = "div-informations-produit-panier"
                append(divProduitPanier, divInformationProduitPanier);

                // Affichage du nom du produit dans le panier.
                let nomProduitPanier = createNode("h4");
                nomProduitPanier.className = "nom-produit-panier";
                nomProduitPanier.innerHTML = produit.nom_produit;
                append(divInformationProduitPanier, nomProduitPanier);

                
                // Affichage du prix du produit dans le panier
                let prixProduitPanier = createNode("p");
                prixProduitPanier.className = "prix-produit-panier"
                prixProduitPanier.innerHTML = `Prix: ${produit.prix} $`;
                append(divInformationProduitPanier, prixProduitPanier);

                // Affichage du magasin qui livrera le produit.
                let magasinLivrerProduit = createNode("p");
                magasinLivrerProduit.className = "magasin-livrer-produit";
                if (parseInt(produit.magasin_id_magasin) == 1) {
                    magasinLivrerProduit.innerHTML = "Le produit sera livré par: Ludo Montréal";
                } else if (parseInt(produit.magasin_id_magasin == 2)) {
                    magasinLivrerProduit.innerHTML = "Le produit sera livré par: Ludo Laval";
                } else {
                    magasinLivrerProduit.innerHTML = "Le produit sera livré par: Ludo Toronto";
                }
                append(divInformationProduitPanier, magasinLivrerProduit);

                // Calculer le coût total des produits dans le panier.
                coutTotal += produit.prix;

                // Calculer le nombre de produits dans le panier.
                nombreProduitsDansPanier++;
            }
        })         
    })
    .catch(function (error) {
        console.log((error));
    })
    .finally(function() {

    
        // Constante pour l'élément "div" qui contiendra le résumé du panier.
        const resumePanier = document.getElementById("resume-panier");

        // Création d'un div pour afficher les informations résumées du panier du client.
        let divInformationsPanier = createNode("div");
        divInformationsPanier.className = "div-informations-panier";
        append(resumePanier, divInformationsPanier);

        // Affichage d'un titre pour le résumé du panier.
        let titreResumePanier = createNode("h2");
        titreResumePanier.className = "titre-resume-panier";
        titreResumePanier.innerHTML = "Résumé de votre panier";
        append(divInformationsPanier, titreResumePanier);

        // Affichage du nombre de produits dans le panier.
        let affichageNombreProduitsPanier = createNode("p");
        affichageNombreProduitsPanier.className = "affichage-nombre-produits-panier";
        affichageNombreProduitsPanier.innerHTML = `Nombre de produits dans le panier: ${nombreProduitsDansPanier}`;
        append(divInformationsPanier, affichageNombreProduitsPanier);

        // Affichage du coût total des produits avant les taxes dans le panier.
        let affichageCoutTotalPanierAvantTaxes = createNode("p");
        affichageCoutTotalPanierAvantTaxes.className = "affichage-cout-total-panier-avant-taxes";
        affichageCoutTotalPanierAvantTaxes.innerHTML = `Coût total avant taxes: ${coutTotal} $`;
        append(divInformationsPanier, affichageCoutTotalPanierAvantTaxes);

        // Affichage de la taxe sur les produits et les services (TPS).
        let affichageTaxeProduitsEtServices = createNode("p");
        affichageTaxeProduitsEtServices.className = "affichage-taxe-produits-services";
        affichageTaxeProduitsEtServices.innerHTML = `Taxe sur les produits et les services (TPS): ${coutTotal * 0.05} $`;
        append(divInformationsPanier, affichageTaxeProduitsEtServices);

        // Affichage de la taxe de vente du Québec (TVQ).
        let affichageTaxeVenteQuebec = createNode("p");
        affichageTaxeVenteQuebec.className = "affichage-taxe-vente-Quebec";
        affichageTaxeVenteQuebec.innerHTML = `Taxe de vente du Québec (TVQ): ${coutTotal * 0.0997} $`
        append(divInformationsPanier, affichageTaxeVenteQuebec);

        // Affichage du coût total des produits après taxes dans le panier.
        let affichageCoutTotalPanierApresTaxes = createNode("p");
        affichageCoutTotalPanierApresTaxes.className ="affichage-cout-total-panier-apres-taxes";
        affichageCoutTotalPanierApresTaxes.innerHTML = `Coût total après taxes: ${coutTotal * 1.14997} $`
        append(divInformationsPanier, affichageCoutTotalPanierApresTaxes);
        
    })

    
}



function afficherFacture() {
    let numeroClient;
    const nombreFacture = 10;

    // Demander le numéro du client afin d'afficher sa facture.
    do {
        numeroClient = window.prompt("Veuillez saisir le numéro du client dont vous voulez voir la facture: ");
        if (numeroClient < 1 || numeroClient > nombreFacture) {
            window.alert(`Le numéro de client est invalide, il doit être entre 1 et ${nombreFacture}.`);
        }
    } while (numeroClient < 1 || numeroClient > nombreFacture);


    fetch(urlTableFacture)
    .then((resp) => resp.json())
    .then(function (data) {
        let factures = data.items;

        // L'élément "div" où toutes les informations de la facture seront affichées.
        let divFacture = document.getElementById("facture");

        alert(numeroClient);
        return factures.map(function (facture) {
            if (facture.panier_id_panier == numeroClient) {

                // Affichage du nom du magasin
                let affichageNomMagasin = createNode("h2");
                affichageNomMagasin.className = "affichage-nom-magasin-facture";
                affichageNomMagasin.innerHTML = "Ludo";
                append(divFacture, affichageNomMagasin);

                // Affichage du id de la facture.
                let idFacture = createNode("h4");
                idFacture.className = "id-facture";
                idFacture.innerHTML = `Facture: id ${facture.id_achat}`;
                append(divFacture, idFacture);

                // Affichage du coût total de l'achat avant taxes.
                let coutTotalAchatAvantTaxes = createNode("p");
                coutTotalAchatAvantTaxes.innerHTML = "cout-total-avant-taxes-facture";
                coutTotalAchatAvantTaxes.innerHTML = `Coût total avant taxes: ${facture.prix_total} $`;
                append(divFacture, coutTotalAchatAvantTaxes);

                // Affichage de la taxe sur les produits et les services (TPS).
                let affichageTaxeProduitsEtServicesFacutre = createNode("p");
                affichageTaxeProduitsEtServicesFacutre.className = "affichage-taxe-produits-services-facture";
                affichageTaxeProduitsEtServicesFacutre.innerHTML = `Taxe sur les produits et les services (TPS): ${facture.prix_total * 0.05} $`;
                append(divFacture, affichageTaxeProduitsEtServicesFacutre);

                // Affichage de la taxe de vente du Québec (TVQ).
                let affichageTaxeVenteQuebecFacture = createNode("p");
                affichageTaxeVenteQuebecFacture.className = "affichage-taxe-vente-Quebec-facture";
                affichageTaxeVenteQuebecFacture.innerHTML = `Taxe de vente du Québec (TVQ): ${facture.prix_total * 0.0997} $`
                append(divFacture, affichageTaxeVenteQuebecFacture);

                
            }
        })
    })
    .catch(function (error) {
        console.log(error);
    })

}   