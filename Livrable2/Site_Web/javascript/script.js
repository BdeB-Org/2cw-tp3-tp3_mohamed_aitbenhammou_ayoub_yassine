// Les constantes pour l'url de l'API.
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


// Afficher tous les produits de la table "produit" dynamiquement dans la page "produit.html".
function afficherProduits() {
    const listeProduits = document.getElementById("produit");
    fetch(urlTableProduit)
        .then((resp) => resp.json())
        .then(function (data) {
            let produits = data.items;
            return produits.map(function (produit) {

                // Création d'un élément de type "div" dans la page produits.html.
                let divProduit = createNode("div");
                divProduit.className = "div-produit-afficher";
                append(listeProduits, divProduit);

                // Création d'un élément de type "div" pour l'affichage de l'image du produit.
                let divImageLaptop = createNode("div");
                divImageLaptop.className = "div-image-laptop";
                append(divProduit, divImageLaptop)

                // Affichage de l'image du produit dans l'élément "div" dans la page "produits.html".
                let imageLaptop = createNode("img");
                imageLaptop.className = "image-laptop";
                imageLaptop.src = "../image/" + produit.chemin_image;
                append(divImageLaptop, imageLaptop);

                // Affichage d'un l'élément "div" qui conitendra les informations du produit.
                let divInformationProduit = createNode("div");
                divInformationProduit.className = "div-informations-produit"
                append(divProduit, divInformationProduit);

                // Affichage du nom du produit.
                let nomProduit = createNode("h3");
                nomProduit.className = "nom-produit";
                nomProduit.innerHTML = produit.nom_produit;
                append(divInformationProduit, nomProduit);

                // Affichage de la description du produit
                let descriptionProduit = createNode("p");
                descriptionProduit.className = "description-produits"
                descriptionProduit.innerHTML = produit.description;
                append(divInformationProduit, descriptionProduit);

                // Quantité du produit
                let quantiteProduit = createNode("p");
                quantiteProduit.className = "quantite-produit";
                quantiteProduit.innerHTML = `Quantité disponible: ${produit.quantite}`;
                append(divInformationProduit, quantiteProduit);

                // Affichage du prix du produit.
                let prixProduit = createNode("p");
                prixProduit.className = "prix-produit"
                prixProduit.innerHTML = `Prix: ${produit.prix} $`;
                append(divInformationProduit, prixProduit);

                // Affichage du magasin où le produit est disponible.
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

                // Création d'un bouton pour ajouter le produit au panier.
                let boutonAjouterAuPanier = createNode("button");
                boutonAjouterAuPanier.className = "bouton-ajouter-au-panier"
                boutonAjouterAuPanier.innerHTML = "Ajouter au panier";
                boutonAjouterAuPanier.onclick = function() {
                    alert("Le produit a été ajouté au panier.");
                }
                append(divProduit, boutonAjouterAuPanier);

            });
        })
        // Gérer les erreurs.
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
                
                // Création d'un élément de type "div" qui contiendra toutes les informations du magasin dans la page magasin.html.
                let divMagasin = createNode("div");
                divMagasin.className = "div-magasin-afficher";
                append(listeMagasins, divMagasin);
                
                // Affichage du nom du magasin.
                let nomMagasin = createNode("h3");
                nomMagasin.className = "nom-magasin";
                nomMagasin.innerHTML = magasin.nom_magasin;
                append(divMagasin, nomMagasin);

                // Affichage du numéro du magasin.
                let numeroMagasin = createNode("p");
                numeroMagasin.className = "numero-magasin";
                numeroMagasin.innerHTML = `Numéro du magasin: ${magasin.id_magasin}`;
                append(divMagasin, numeroMagasin);

                // Affichage de l'adresse du magasin.
                let adresseMagasin = createNode("p");
                adresseMagasin.className = "adresse-magasin";
                adresseMagasin.innerHTML = `Adresse: ${magasin.adresse}`;
                append(divMagasin, adresseMagasin);

                // Affichage du numéro de téléphone du magasin.
                let numeroTelephoneMagasin = createNode("p");
                numeroTelephoneMagasin.className = "numero-telephone-magasin";
                numeroTelephoneMagasin.innerHTML = `Numéro de téléphone: ${magasin.numero_telephone}`;
                append(divMagasin, numeroTelephoneMagasin);

                // Affichage des heures d'ouvertures du magasin.
                let horarireOuvertureMagasin = createNode("p");
                horarireOuvertureMagasin.className = "horaire-ouverture-magasin";
                horarireOuvertureMagasin.innerHTML = `Horaire d'ouverture: ${magasin.horaire_ouverture}`;
                append(divMagasin, horarireOuvertureMagasin);
            });

        })
        // Gérer les erreurs.
        .catch(function (error) {
            console.log((error));
        })
}



// Demander le numéro du client et afficher dynamiquement son panier dans la page "panier.html".
function demanderNumeroClientEtAfficherPanier() {
    // Le numéro du client;
    let numeroClient;
    // Le nombre de paniers existants dans la base de données.
    const nombrePanier = 10;

    // Boucle afin de demander le numéro du client tant qu'il est invalide.
    do {
        numeroClient = window.prompt("Veuillez saisir le numéro du client dont vous voulez voir le panier: ");

        // Message d'erreur si le numéro de client entré par l'utilisateur est invalide.
        if (numeroClient < 1 || numeroClient > nombrePanier) {
            window.alert(`Le numéro de client est invalide, il doit être entre 1 et ${nombrePanier}.`);
        }
    } while (numeroClient < 1 || numeroClient > nombrePanier);
    
    // Le url afin d'obtenir le panier du client en fonction de son numéro de client.
    const urlTablePanierClient = urlTablePanier + numeroClient;


    // Fonction fetch afin d'obtenir le numéro de panier du client.
    let idPanierClient;
    fetch(urlTablePanierClient)
    .then((resp) => resp.json())
    .then(function (data) {
        let panier = data;

        // Obtenir le numéro de panier du client.
        idPanierClient = panier.id_panier;
        alert(idPanierClient);
    })
    // Gérer les erreurs.
    .catch(function (error) {
        console.log((error));
    })

    // Fonction fetch afin d'obtenir les informations du porduit dans le panier en fonction du numéro de panier.
    let panier = document.getElementById("panier");
    
    // Cette variable va contenir le coût total avant les taxes des produits dans le panier.
    let coutTotal = 0;

    // Cette variable va contenir le nombre de produits dans le panier.
    let nombreProduitsDansPanier = 0;
    
    // Afficher dynamiquement les produits dans le panier du client.
    fetch(urlTableProduit)
    .then((resp) => resp.json())
    .then(function (data) {

        let produits = data.items;

        return produits.map(function (produit) {

            // Vérifier si le produit appartient au panier du client.
            if (produit.panier_id_panier == idPanierClient) {

                // Création d'un élément de type "div" qui contiendra d'image et les informations du produit dans la page magasin.html.
                let divProduitPanier = createNode("div");
                divProduitPanier.className = "div-panier-produit-afficher";
                append(panier, divProduitPanier);

                // Création d'un élément de type "div" qui contiendra l'image du produit dans le panier.  
                let divImageProduitPanier = createNode("div");
                divImageProduitPanier.className = "div-image-produit-panier";
                append(divProduitPanier, divImageProduitPanier);

                // Affichage de l'image du produit dans le panier.
                let imageProduitPanier = createNode("img");
                imageProduitPanier.className = "image-laptop-panier";
                imageProduitPanier.src = "../image/" + produit.chemin_image;
                append(divImageProduitPanier, imageProduitPanier);
                
                // Création d'un élément de type "div" qui contiendra les informations du produit dans le panier.
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

                // Affichage du magasin qui livrera le produit dans le panier.
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
    // Gérer les erreurs.
    .catch(function (error) {
        console.log((error));
    })
    // Code a exécuter après l'exécution du code de la méthode "fetch". Ce code est utilisé afin d'afficher un résumé du panier.
    .finally(function() {

    
        // Constante pour l'élément de type "div" qui contiendra le résumé du panier.
        const resumePanier = document.getElementById("resume-panier");

        // Création d'un élément de type "div" pour afficher les informations résumées du panier du client.
        let divInformationsPanier = createNode("div");
        divInformationsPanier.className = "div-informations-panier";
        append(resumePanier, divInformationsPanier);

        // Affichage d'un titre pour le résumé du panier.
        let titreResumePanier = createNode("h2");
        titreResumePanier.className = "titre-resume-panier";
        titreResumePanier.innerHTML = "Résumé de votre panier";
        append(divInformationsPanier, titreResumePanier);

        // Affichage du nombre de produits dans le panier pour le résumé du panier.
        let affichageNombreProduitsPanier = createNode("p");
        affichageNombreProduitsPanier.className = "affichage-nombre-produits-panier";
        affichageNombreProduitsPanier.innerHTML = `Nombre de produits dans le panier: ${nombreProduitsDansPanier}`;
        append(divInformationsPanier, affichageNombreProduitsPanier);

        // Affichage du coût total des produits avant les taxes le résumé du panier.
        let affichageCoutTotalPanierAvantTaxes = createNode("p");
        affichageCoutTotalPanierAvantTaxes.className = "affichage-cout-total-panier-avant-taxes";
        affichageCoutTotalPanierAvantTaxes.innerHTML = `Coût total avant taxes: ${coutTotal} $`;
        append(divInformationsPanier, affichageCoutTotalPanierAvantTaxes);

        // Affichage de la taxe sur les produits et les services (TPS) dans le résumé du panier.
        let affichageTaxeProduitsEtServices = createNode("p");
        affichageTaxeProduitsEtServices.className = "affichage-taxe-produits-services";
        affichageTaxeProduitsEtServices.innerHTML = `Taxe sur les produits et les services (TPS): ${coutTotal * 0.05} $`;
        append(divInformationsPanier, affichageTaxeProduitsEtServices);

        // Affichage de la taxe de vente du Québec (TVQ) dans la résumé du panier.
        let affichageTaxeVenteQuebec = createNode("p");
        affichageTaxeVenteQuebec.className = "affichage-taxe-vente-Quebec";
        affichageTaxeVenteQuebec.innerHTML = `Taxe de vente du Québec (TVQ): ${coutTotal * 0.0997} $`;
        append(divInformationsPanier, affichageTaxeVenteQuebec);

        // Affichage du coût total des produits après taxes dans le résumé du panier.
        let affichageCoutTotalPanierApresTaxes = createNode("p");
        affichageCoutTotalPanierApresTaxes.className ="affichage-cout-total-panier-apres-taxes";
        affichageCoutTotalPanierApresTaxes.innerHTML = `Coût total après taxes: ${coutTotal * 1.14997} $`;
        append(divInformationsPanier, affichageCoutTotalPanierApresTaxes);
        
    })
    
}


// Fonction qui permet d'afficher la facture du client dans la page "facture.html".
function afficherFacture() {

    // Cette variable contiendra le numéro de client entré par l'utilisateur.
    let numeroClient;

    // Le nombre de facture existantes.
    const nombreFacture = 10;

    // Boucle afin de demander le numéro du client tant qu'il est invaide.
    do {
        numeroClient = window.prompt("Veuillez saisir le numéro du client dont vous voulez voir la facture: ");
        if (numeroClient < 1 || numeroClient > nombreFacture) {
            window.alert(`Le numéro de client est invalide, il doit être entre 1 et ${nombreFacture}.`);
        }
    } while (numeroClient < 1 || numeroClient > nombreFacture);


    // Afficher les informations de la facture.
    fetch(urlTableFacture)
    .then((resp) => resp.json())
    .then(function (data) {
        let factures = data.items;

        // Création d'un élément de type "div" où toutes les informations de la facture seront affichées.
        let divFacture = document.getElementById("facture");

        alert(numeroClient);
        return factures.map(function (facture) {
            if (facture.panier_id_panier == numeroClient) {

                // Affichage du nom du magasin.
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
                coutTotalAchatAvantTaxes.className = "cout-total-avant-taxes-facture";
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
                affichageTaxeVenteQuebecFacture.innerHTML = `Taxe de vente du Québec (TVQ): ${facture.prix_total * 0.0997} $`;
                append(divFacture, affichageTaxeVenteQuebecFacture);

                // Affichage du coût total des produits après taxes dans la facture.
                let affichageCoutTotalApresTaxesFacture = createNode("p");
                affichageCoutTotalApresTaxesFacture.className ="affichage-cout-total-facture-apres-taxes";
                affichageCoutTotalApresTaxesFacture.innerHTML = `Coût total après taxes: ${facture.prix_total * 1.14997} $`;
                append(divFacture, affichageCoutTotalApresTaxesFacture);

                // Affichage de la date d'achat dans la facture.
                let affichageDateAchat = createNode("p");
                affichageDateAchat.className = "affichage-date-achat";
                affichageDateAchat.innerHTML = `Date d'achat: ${facture.date_achat}`;
                append(divFacture, affichageDateAchat);

                // Affichage d'un message de remerciement pour le client dans sa facture.
                let messageFacuture = createNode("p");
                messageFacuture.className = "message-facture";
                messageFacuture.innerHTML = "Merci d'avoir magasiné chez Ludo<br>Bonne journée";
                append(divFacture, messageFacuture);
                
            }
        })
    })
    .catch(function (error) {
        console.log(error);
    })

}   