const urlTableProduit = "http://localhost:8080/ords/TP3/produit/";



/* Afficher tous les produits de la table "produit". */
const listeProduits = document.getElementById("produit");




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

