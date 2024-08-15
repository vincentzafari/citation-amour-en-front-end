// Attendre que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
    console.log("Script chargé et DOM prêt");

    // Tableau de citations avec texte et auteur
    const quotes = [
        { text: "L'amour est la poésie des sens.", author: "Honoré de Balzac" },
        { text: "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.", author: "Antoine de Saint-Exupéry" },
        { text: "Le plus grand bonheur après que d'aimer, c'est de confesser son amour.", author: "André Gide" },
        { text: "L'amour est l'emblème de l'éternité, il confond toute la notion de temps, efface toute la mémoire d'un commencement, toute la crainte d'une extrémité.", author: "Madame de Staël" },
        { text: "L'amour est une fumée faite de la vapeur des soupirs.", author: "William Shakespeare" },
        { text: "Il n'y a qu'un bonheur dans la vie, c'est d'aimer et d'être aimé.", author: "George Sand" },
        { text: "Aimer, c'est savoir dire je t'aime sans parler.", author: "Victor Hugo" },
        { text: "L'amour ne consiste pas à se regarder l'un l'autre, mais à regarder ensemble dans la même direction.", author: "Antoine de Saint-Exupéry" },
        { text: "Il n'y a pas de remède à l'amour, mais l'amour est le remède à tous les maux.", author: "Madame de Staël" },
        { text: "L'amour est une aventure dans laquelle le cœur est le guide et la raison un compagnon qui suit.", author: "Jean-Paul Sartre" }
    ];

    // Sélectionner les éléments du DOM pour afficher la citation et l'auteur
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');

    // Fonction pour obtenir une citation aléatoire du tableau
    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    // Fonction pour afficher une nouvelle citation
    function displayNewQuote() {
        console.log("Bouton cliqué");

        // Obtenir une citation aléatoire
        const { text, author } = getRandomQuote();
        
        // Mettre à jour le contenu des éléments avec la nouvelle citation
        quoteElement.textContent = text;
        authorElement.textContent = `- ${author}`;
    }

    // Ajouter un gestionnaire d'événements pour le clic du bouton
    if (newQuoteButton) {
        newQuoteButton.addEventListener('click', displayNewQuote);
    } else {
        // Loguer une erreur si le bouton n'est pas trouvé
        console.error("Le bouton 'Nouvelle citation' n'a pas été trouvé.");
    }
});
