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
        // document.getElementById("quiz-container").style.display = "none";
        document.getElementById("quiz-container").classList.add("hidden");
    
        // Trier les intelligences en fonction des scores du plus haut au plus bas
        let sortedScores = Object.entries(scores)
            .sort((a, b) => b[1] - a[1])
            .map(([intelligence, points]) => ({ 
                intelligence, 
                points, 
                percentage: Math.round((points / 24) * 100) 
            }));
        
        // Générer le HTML pour les intelligences dominantes
        const dominantIntelligences = sortedScores.slice(0, 4);
        const otherIntelligences = sortedScores.slice(4);

        // Générer le HTML des intelligences et scores
        let dominantHTML = '';
        dominantIntelligences.forEach(item => {
            dominantHTML += `
                <div class="intelligence">
                    <h3>${item.intelligence}</h3>
                    <div class="score">${item.points}/24</div>
                    <div class="percentage">(${item.percentage}%)</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${item.percentage}%"></div>
                    </div>
                </div>
            `;
        });
        document.getElementById('dominant-intelligences').innerHTML = dominantHTML;

        // Générer le HTML pour les autres intelligences
        let otherHTML = '';
        otherIntelligences.forEach(item => {
            otherHTML += `
                <div class="intelligence">
                    <h3>${item.intelligence}</h3>
                    <div class="score">${item.points}/24</div>
                    <div class="percentage">(${item.percentage}%)</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${item.percentage}%"></div>
                    </div>
                </div>
            `;
        });
        document.getElementById('other-intelligences').innerHTML = otherHTML;
    
        // Suggestions de métiers étendues
        let jobSuggestions = {
            "Logico-mathématique": "Ingénieur, Analyste de données, Scientifique, Mathématicien, Statisticien, Actuaire, Développeur logiciel, Chercheur en IA, Physicien, Comptable, Cryptographe, Analyste cybersécurité, Ingénieur en automatisation, Développeur blockchain, Ingénieur en robotique, Économiste quantitatif, Concepteur d’algorithmes, Analyste financier quantitatif (quants), Chercheur en sciences cognitives, Ingénieur en simulation numérique, Expert en modélisation mathématique...",
            "Linguistique": "Écrivain, Journaliste, Traducteur, Rédacteur, Scénariste, Professeur de langues, Poète, Avocat, Conférencier, Publicitaire, Spécialiste en communication, UX Writer, Spécialiste en SEO, Orthophoniste, Linguistic Data Annotator, Expert en étymologie, Scénariste jeux vidéo, Responsable éditorial, Dialoguiste, Copywriter web, Spécialiste en voix-off...",
            "Spatiale": "Architecte, Designer, Cartographe, Urbaniste, Ingénieur en réalité virtuelle, Photographe, Illustrateur, Designer graphique, Pilote, Artiste en effets spéciaux, Géomètre, Game designer, Scénographe, Designer d’interface utilisateur (UI), Ingénieur en imagerie médicale, Artiste 3D, Paysagiste, Monteur vidéo, Designer de réalité augmentée, Spécialiste en effets visuels (VFX), Architecte naval ou aéronautique...",
            "Musicale": "Musicien, Compositeur, Producteur de musique, Chef d'orchestre, DJ, Ingénieur du son, Parolier, Professeur de musique, Chanteur, Thérapeute par la musique, Sound designer pour jeux vidéo, Réalisateur de clips musicaux, Éthnomusicologue, Professeur d’histoire de la musique, Créateur de jingles, Ingénieur acoustique, Luthier, Thérapeute sonore, Producteur de podcasts musicaux, Designer sonore pour films/VR...",
            "Corporelle-Kinesthésique": "Athlète, Kinésithérapeute, Danseur, Chorégraphe, Ostéopathe, Médecin sportif, Coach sportif, Acteur, Stuntman (cascadeur), Professeur d'éducation physique, Artiste martial, Ergothérapeute, Coach en posture, Instructeur de yoga, Acrobate, Masseur-kinésithérapeute, Ergonomiste industriel, Physiologiste du sport, Guide de haute montagne, Praticien en shiatsu...",
            "Interpersonnelle": "Psychologue, Conseiller, Responsable RH, Médiateur, Travailleur social, Coach de vie, Commercial, Professeur, Dirigeant d’entreprise, Diplômate, Manager d’équipe, Formateur professionnel, Animateur socioculturel, Chef de projet collaboratif, Coach agile/Scrum master, Facilitateur d’ateliers, Responsable de communauté, Éducateur spécialisé, Animateur radio/télé, Consultant en relations interculturelles, Ambassadeur/ONG...",
            "Intrapersonnelle": "Coach, Philosophe, Auteur, Thérapeute, Moine, Psychanalyste, Écrivain de développement personnel, Méditant professionnel, Prêtre/Religieux, Consultant en bien-être, Stratège, Mentor, Coach en intelligence émotionnelle, Journaliste introspectif, Concepteur de programmes de développement personnel, Conseiller en orientation, Philosophe public, Méditant formateur, Écrivain spirituel, Analyste introspectif...",
            "Naturaliste": "Biologiste, Écologiste, Agriculteur, Océanographe, Vétérinaire, Zoologiste, Apiculteur, Jardinier paysagiste, Forestier, Responsable d’un parc naturel, Spécialiste en développement durable, Géologue, Botaniste, Microbiologiste, Ingénieur en agronomie, Climatologue, Gestionnaire de biodiversité, Expert en permaculture, Technicien en énergies renouvelables, Guide écotouristique..."
        };

        // Générer le HTML des suggestions de métiers (pour tous les types d'intelligence)
        let suggestionsHTML = '';
        sortedScores.forEach(item => {
            suggestionsHTML += `
                <div class="suggestion">
                    <h4><i class="fas fa-star"></i> ${item.intelligence}</h4>
                    <p>${jobSuggestions[item.intelligence]}</p>
                </div>
            `;
        });
        document.getElementById('job-suggestions').innerHTML = suggestionsHTML;
        
        // Afficher les résultats
        document.getElementById("result-container").classList.remove("hidden");
    }
    
    document.getElementById("start-button").addEventListener("click", () => {
        // document.getElementById("intro-container").style.display = "none";
        // document.getElementById("quiz-container").style.display = "block";
        document.getElementById("intro-container").classList.add("hidden");
        document.getElementById("quiz-container").classList.remove("hidden");
        showQuestion();
    });

    // Bouton de téléchargement (pour l'instant juste un placeholder)
    document.getElementById("download-button").addEventListener("click", () => {
        const resultContainer = document.getElementById("result-container");

        // Cloner pour PDF
        const clonedContainer = resultContainer.cloneNode(true);
        clonedContainer.style.background = "#ffffff";
        clonedContainer.style.color = "#222";
        clonedContainer.style.padding = "30px";
        clonedContainer.style.fontFamily = "Arial, sans-serif";
        clonedContainer.style.width = "100%";

        // Nettoyer les styles visuels non PDF-friendly
        const elements = clonedContainer.querySelectorAll("*");
        elements.forEach(el => {
            el.classList.remove("hidden");
            el.style.boxShadow = "none";
            el.style.backdropFilter = "none";
            el.style.border = "none";
            el.style.background = "transparent";
            el.style.color = "#222";
            el.style.pageBreakInside = "avoid";
        });

        // Appliquer des couleurs vives aux blocs
        clonedContainer.querySelectorAll('.intelligence').forEach(card => {
            card.style.background = "#e3f2fd"; // Bleu clair
            card.style.border = "1px solid #90caf9";
            card.style.borderLeft = "6px solid #2196f3";
            card.style.padding = "15px";
            card.style.borderRadius = "10px";
            card.style.marginBottom = "15px";
        });

        clonedContainer.querySelectorAll('.suggestion').forEach(card => {
            card.style.background = "#f1f8e9"; // Vert clair
            card.style.border = "1px solid #c5e1a5";
            card.style.borderLeft = "6px solid #8bc34a";
            card.style.padding = "15px";
            card.style.borderRadius = "10px";
            card.style.marginBottom = "15px";
        });

        clonedContainer.querySelectorAll('.contact-info').forEach(card => {
            card.style.background = "#e0f7fa"; // Cyan clair
            card.style.border = "1px solid #4dd0e1";
            card.style.color = "#006064";
            card.style.padding = "15px";
            card.style.borderRadius = "10px";
            card.style.marginBottom = "15px";
            card.style.fontWeight = "bold";
            card.style.textAlign = "center";
        });

        // Progress bars
        clonedContainer.querySelectorAll('.progress-fill').forEach(bar => {
            bar.style.background = "linear-gradient(to right, #1976d2, #42a5f5)";
        });

        // Titres de section bien visibles
        clonedContainer.querySelectorAll('.section-title, .section-title h4').forEach(title => {
            title.style.color = "#6a1b9a"; // Violet soutenu
            title.style.fontSize = "20px";
            title.style.fontWeight = "700";
            title.style.marginTop = "25px";
            title.style.marginBottom = "10px";
            title.style.borderBottom = "2px solid #6a1b9a";
            title.style.paddingBottom = "5px";
        });

        // h2 principal
        const mainTitle = clonedContainer.querySelector("h2");
        if (mainTitle) {
            mainTitle.style.color = "#0d47a1"; // Bleu foncé
            mainTitle.style.fontSize = "26px";
            mainTitle.style.fontWeight = "bold";
            mainTitle.style.textAlign = "center";
            mainTitle.style.marginBottom = "30px";
        }

        // Lien email
        const mailLink = clonedContainer.querySelector(".contact-info a");
        if (mailLink) {
            mailLink.style.color = "#0277bd";
            mailLink.style.fontWeight = "bold";
            mailLink.style.textDecoration = "underline";
        }

        // Supprimer bouton
        const btn = clonedContainer.querySelector('#download-button');
        if (btn) btn.remove();

        // Options PDF
        const opt = {
            margin: 0.1,
            filename: 'resultats_intelligences_multiples.pdf',
            image: { type: 'jpeg', quality: 0.95 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff",
                scrollX: 0,
                scrollY: 0
            },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
            pagebreak: {
                mode: ['avoid-all', 'css', 'legacy']
            }
        };

        html2pdf().set(opt).from(clonedContainer).save()
            .then(() => console.log("PDF téléchargé !"))
            .catch(err => {
                console.error("Erreur PDF :", err);
                alert("Erreur lors de la génération du PDF.");
            });
    });


});
