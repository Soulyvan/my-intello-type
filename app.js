document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        // Logico-mathématique
        { question: "J’aime résoudre des énigmes et des problèmes complexes.", intelligence: "Logico-mathématique" },
        { question: "J’aime analyser des données, faire des calculs ou des statistiques.", intelligence: "Logico-mathématique" },
        { question: "Je me pose souvent des questions logiques sur le monde qui m’entoure.", intelligence: "Logico-mathématique" },
        { question: "Je cherche toujours à comprendre les causes et les conséquences des phénomènes.", intelligence: "Logico-mathématique" },
        { question: "J’aime les jeux de stratégie comme les échecs.", intelligence: "Logico-mathématique" },
        { question: "Je suis à l’aise pour analyser des données ou des graphiques.", intelligence: "Logico-mathématique" },
        { question: "Je préfère suivre des étapes logiques pour résoudre un problème.", intelligence: "Logico-mathématique" },
        { question: "Je me demande souvent comment les choses fonctionnent techniquement.", intelligence: "Logico-mathématique" },
    
        // Linguistique
        { question: "J’adore lire et jouer avec les mots.", intelligence: "Linguistique" },
        { question: "J’apprends facilement de nouvelles langues.", intelligence: "Linguistique" },
        { question: "J’aime raconter des histoires et m’exprimer par l’écriture.", intelligence: "Linguistique" },
        { question: "Je suis bon(ne) en orthographe et en grammaire.", intelligence: "Linguistique" },
        { question: "J’aime les débats et les discussions argumentées.", intelligence: "Linguistique" },
        { question: "Je retiens facilement des citations ou des phrases d’auteurs.", intelligence: "Linguistique" },
        { question: "J’aime jouer avec les mots dans des jeux comme les mots croisés.", intelligence: "Linguistique" },
        { question: "Je préfère apprendre par la lecture et l’écriture.", intelligence: "Linguistique" },
    
        // Spatiale
        { question: "Je peux imaginer des paysages ou des objets en 3D dans mon esprit.", intelligence: "Spatiale" },
        { question: "J’aime les arts visuels comme le dessin, la peinture ou la photographie.", intelligence: "Spatiale" },
        { question: "Je suis bon pour me repérer sur une carte ou imaginer des itinéraires.", intelligence: "Spatiale" },
        { question: "J’aime les puzzles et les jeux de construction.", intelligence: "Spatiale" },
        { question: "J’ai une bonne mémoire des lieux et des chemins empruntés.", intelligence: "Spatiale" },
        { question: "J’apprécie les films et les images plus que les textes.", intelligence: "Spatiale" },
        { question: "Je remarque facilement les détails dans une image ou une scène.", intelligence: "Spatiale" },
        { question: "J’aime observer l’architecture et les formes autour de moi.", intelligence: "Spatiale" },
    
        // Musicale
        { question: "Je suis sensible aux sons, aux rythmes et aux mélodies.", intelligence: "Musicale" },
        { question: "J’aime jouer d’un instrument ou chanter.", intelligence: "Musicale" },
        { question: "Je retiens facilement les chansons et les mélodies.", intelligence: "Musicale" },
        { question: "J’ai une bonne oreille musicale et je reconnais facilement les notes.", intelligence: "Musicale" },
        { question: "Je ressens des émotions fortes en écoutant de la musique.", intelligence: "Musicale" },
        { question: "J’aime composer ou improviser des morceaux de musique.", intelligence: "Musicale" },
        { question: "Je suis sensible aux bruits et aux sons de mon environnement.", intelligence: "Musicale" },
        { question: "J’aime apprendre en chantant ou en écoutant des podcasts.", intelligence: "Musicale" },
    
        // Corporelle-Kinesthésique
        { question: "J’aime bouger, danser, faire du sport ou travailler avec mes mains.", intelligence: "Corporelle-Kinesthésique" },
        { question: "Je suis habile pour les travaux manuels ou la manipulation d’objets.", intelligence: "Corporelle-Kinesthésique" },
        { question: "J’apprends mieux en faisant des expériences concrètes.", intelligence: "Corporelle-Kinesthésique" },
        { question: "J’aime bricoler, toucher et manipuler les objets.", intelligence: "Corporelle-Kinesthésique" },
        { question: "Je ressens un bien-être en étant actif physiquement.", intelligence: "Corporelle-Kinesthésique" },
        { question: "J’ai un bon équilibre et une bonne coordination.", intelligence: "Corporelle-Kinesthésique" },
        { question: "J’exprime souvent mes émotions par mes gestes et ma posture.", intelligence: "Corporelle-Kinesthésique" },
        { question: "Je suis à l’aise dans les activités qui demandent de la précision physique.", intelligence: "Corporelle-Kinesthésique" },
    
        // Interpersonnelle
        { question: "Je comprends facilement les émotions et les intentions des autres.", intelligence: "Interpersonnelle" },
        { question: "J’aime travailler en équipe et interagir avec différentes personnes.", intelligence: "Interpersonnelle" },
        { question: "Je me sens à l’aise pour donner des conseils ou aider les autres.", intelligence: "Interpersonnelle" },
        { question: "J’aime observer les réactions et comportements des autres.", intelligence: "Interpersonnelle" },
        { question: "J’ai souvent des amis qui viennent me parler de leurs problèmes.", intelligence: "Interpersonnelle" },
        { question: "Je m’adapte facilement à de nouveaux groupes ou environnements sociaux.", intelligence: "Interpersonnelle" },
        { question: "J’aime organiser des événements et gérer des relations sociales.", intelligence: "Interpersonnelle" },
        { question: "J’apprends mieux en échangeant avec les autres.", intelligence: "Interpersonnelle" },
    
        // Intrapersonnelle
        { question: "Je passe beaucoup de temps à réfléchir sur moi-même et mes émotions.", intelligence: "Intrapersonnelle" },
        { question: "J’aime fixer mes propres objectifs et suivre mon évolution personnelle.", intelligence: "Intrapersonnelle" },
        { question: "Je me comprends bien et je sais ce qui me motive profondément.", intelligence: "Intrapersonnelle" },
        { question: "J’aime travailler seul(e) et me concentrer sur mes propres idées.", intelligence: "Intrapersonnelle" },
        { question: "Je médite ou réfléchis souvent à mes expériences passées.", intelligence: "Intrapersonnelle" },
        { question: "J’ai une forte conscience de mes forces et faiblesses.", intelligence: "Intrapersonnelle" },
        { question: "Je ressens souvent le besoin de m’isoler pour réfléchir.", intelligence: "Intrapersonnelle" },
        { question: "Je préfère l’auto-apprentissage et la prise d’initiative individuelle.", intelligence: "Intrapersonnelle" },
    
        // Naturaliste
        { question: "J’adore observer la nature et comprendre comment elle fonctionne.", intelligence: "Naturaliste" },
        { question: "Je peux facilement identifier différentes espèces d’animaux ou de plantes.", intelligence: "Naturaliste" },
        { question: "Je me sens bien quand je suis en pleine nature.", intelligence: "Naturaliste" },
        { question: "J’aime jardiner, randonner ou passer du temps dehors.", intelligence: "Naturaliste" },
        { question: "J’ai un grand respect pour l’environnement et l’écologie.", intelligence: "Naturaliste" },
        { question: "J’aime collectionner des objets naturels (pierres, feuilles, insectes, etc.).", intelligence: "Naturaliste" },
        { question: "J’observe facilement les changements saisonniers et leurs effets.", intelligence: "Naturaliste" },
        { question: "J’aime apprendre sur les sciences naturelles, la biologie et la géologie.", intelligence: "Naturaliste" }
    ];
    
    
    let currentQuestion = 0;
    let scores = {
        "Logico-mathématique": 0,
        "Linguistique": 0,
        "Spatiale": 0,
        "Musicale": 0,
        "Corporelle-Kinesthésique": 0,
        "Interpersonnelle": 0,
        "Intrapersonnelle": 0,
        "Naturaliste": 0
    };
    
    function showQuestion() {
        if (currentQuestion >= questions.length) {
            showResults();
            return;
        }
        document.getElementById("question-container").innerText = questions[currentQuestion].question;
        let options = "";
        ["Pas du tout", "Un peu", "Moyennement", "Beaucoup"].forEach((opt, index) => {
            options += `<label><input type='radio' name='answer' value='${index}'> ${opt}</label>`;
        });
        document.getElementById("options-container").innerHTML = options;
    }
    
    document.getElementById("next-button").addEventListener("click", () => {
        let selectedOption = document.querySelector("input[name='answer']:checked");
        if (selectedOption) {
            scores[questions[currentQuestion].intelligence] += parseInt(selectedOption.value);
            currentQuestion++;
            showQuestion();
        }
    });
    
    function showResults() {
        // Masquer le quiz
        document.getElementById("quiz-container").style.display = "none";
    
        // Trier les intelligences en fonction des scores du plus haut au plus bas
        let sortedScores = Object.entries(scores)
            .sort((a, b) => b[1] - a[1])  // Trier par ordre décroissant
            .map(([intelligence, points]) => ({ intelligence, points }));
    
        // Générer le HTML des intelligences et scores
        let resultHTML = '';
        sortedScores.forEach(item => {
            resultHTML += `
                <div class="intelligence">
                    <h3>${item.intelligence}</h3>
                    <p>${item.points} points</p>
                </div>
            `;
        });
        document.querySelector('.intelligences').innerHTML = resultHTML;
    
        // Suggestions de métiers étendues
        let jobSuggestions = {
            "Logico-mathématique": "Ingénieur, Analyste de données, Scientifique, Mathématicien, Statisticien, Actuaire, Développeur logiciel, Chercheur en IA, Physicien, Comptable, Cryptographe...",
            "Linguistique": "Écrivain, Journaliste, Traducteur, Rédacteur, Scénariste, Professeur de langues, Poète, Avocat, Conférencier, Publicitaire, Spécialiste en communication...",
            "Spatiale": "Architecte, Designer, Cartographe, Urbaniste, Ingénieur en réalité virtuelle, Photographe, Illustrateur, Designer graphique, Pilote, Artiste en effets spéciaux, Géomètre...",
            "Musicale": "Musicien, Compositeur, Producteur de musique, Chef d'orchestre, DJ, Ingénieur du son, Parolier, Professeur de musique, Chanteur, Thérapeute par la musique...",
            "Corporelle-Kinesthésique": "Athlète, Kinésithérapeute, Danseur, Chorégraphe, Ostéopathe, Médecin sportif, Coach sportif, Acteur, Stuntman (cascadeur), Professeur d'éducation physique, Artiste martial...",
            "Interpersonnelle": "Psychologue, Conseiller, Responsable RH, Médiateur, Travailleur social, Coach de vie, Commercial, Professeur, Dirigeant d’entreprise, Diplômate, Manager d’équipe...",
            "Intrapersonnelle": "Coach, Philosophe, Auteur, Thérapeute, Moine, Psychanalyste, Écrivain de développement personnel, Méditant professionnel, Prêtre/Religieux, Consultant en bien-être, Stratège...",
            "Naturaliste": "Biologiste, Écologiste, Agriculteur, Océanographe, Vétérinaire, Zoologiste, Apiculteur, Jardinier paysagiste, Forestier, Responsable d’un parc naturel, Spécialiste en développement durable..."
        };
    
        // Générer le HTML des suggestions de métiers
        let suggestionsHTML = '';
        sortedScores.forEach(item => {
            suggestionsHTML += `
                <div class="suggestion">
                    <h4>${item.intelligence}</h4>
                    <p>${jobSuggestions[item.intelligence]}</p>
                </div>
            `;
        });
        document.querySelector('.suggestions').innerHTML = suggestionsHTML;
    
        // Afficher les résultats et les suggestions
        document.getElementById("result-container").style.display = "block";
    }
    
    document.getElementById("start-button").addEventListener("click", () => {
        document.getElementById("intro-container").style.display = "none";
        document.getElementById("quiz-container").style.display = "block";
        showQuestion();
    });
});
