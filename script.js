let section = document.getElementsByClassName("info-section");
let button = document.getElementById("start-button");

button.addEventListener("click", () => {
    const mainSection = document.getElementById("info-section");

    while (mainSection.firstChild) {
        mainSection.removeChild(mainSection.firstChild);
    }

    let randomNumber = Math.floor(Math.random() * data.length);

    let randomElem = data.at(randomNumber);

    let newImg = document.createElement("img");
    newImg.src = getImageSource(randomElem.name);
    newImg.alt = randomElem.name + " - Image";
    newImg.id = "info-section-image";

    // Name
    let newName = document.createElement("h3");
    newName.textContent = (randomNumber + 1) + ") " + randomElem.name;
    newName.id = "info-section-name";

    // Platfom
    let newPlatform = document.createElement("p");
    newPlatform.id = "info-section-platform";

    let platformSpan = document.createElement("span");
    platformSpan.textContent = "Platform: ";

    newPlatform.append(platformSpan);
    newPlatform.append(" " + randomElem.platform);
    
    // Genres
    let newGenres = document.createElement("p");
    newGenres.id = "info-section-genre";

    let genreSpan = document.createElement("span");
    genreSpan.textContent = "Genres: ";

    newGenres.append(genreSpan);
    newGenres.append(" " + randomElem.genre);

    // Themes
    let newThemes = document.createElement("p");
    newThemes.id = "info-section-theme";
    
    let themeSpan = document.createElement("span");
    themeSpan.textContent = "Themes: ";

    newThemes.append(themeSpan);
    newThemes.append(" " + randomElem.theme);

    // Summary
    let newSummary = document.createElement("p");
    newSummary.id = "info-section-summary";
    
    let summarySpan = document.createElement("span");
    summarySpan.textContent = "Summary: ";

    newSummary.append(summarySpan);
    newSummary.append(" " + randomElem.summary);


    let infoSection = document.createElement("section");
    infoSection.id = "info-section-container";

    infoSection.append(newPlatform);
    infoSection.append(newGenres);
    infoSection.append(newThemes);
    infoSection.append(newSummary);

    mainSection.append(newName);
    mainSection.append(newImg);

    mainSection.append(infoSection);
});

function getImageSource(name) {
    return "img/" + (name || "")
        .toLowerCase()
        .normalize("NFD")              
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[,'!?]/g, "")
        .replace(/\./g, "")
        .replace(/[-:/]/g, "_")
        .replace(/\s+/g, "_") + ".png";
}

function Element(name, platform, genre, theme, summary) {
    this.name = name;
    this.platform = platform;
    this.genre = genre;
    this.theme = theme;
    this.summary = summary;
}

// *****************************************************************
// ******************** Last Update on 08/06/26 ********************
// *****************************************************************

const data = [
    new Element("Terror in Resonance", "Streaming", "Drame - Mystère - Psychologique - Thriller", "Terrorisme - Police - Complot - Jeunesse", "Deux adolescents surnommés Sphinx commettent des attentats à Tokyo tout en laissant des énigmes à la police, révélant peu à peu un passé lié à une expérience gouvernementale secrète."),
    new Element("Noragami", "Streaming", "Action - Comédie - Surnaturel", "Dieux - Esprits - Combat", "Un dieu mineur sans sanctuaire tente de gagner en popularité en aidant les humains, accompagné d’une arme vivante au passé trouble."),
    new Element("Heavenly Delusion", "Disney+", "Aventure - Mystère - Science-fiction", "Post-apocalyptique - Survie - Enfants", "Dans un Japon ravagé, deux adolescents voyagent à la recherche d’un lieu mystérieux appelé 'le paradis'."),
    new Element("The Irregular at Magic High School", "Streaming", "Action - Science-fiction - Fantastique", "Magie - École - Technologie", "Dans une école de magie élitiste, un étudiant apparemment médiocre cache des capacités hors normes."),
    new Element("Black Lagoon", "Streaming", "Action - Thriller", "Crime - Mercenaires - Armes", "Un employé japonais rejoint un groupe de mercenaires dans une ville dominée par la criminalité."),
    new Element("Dorohedoro", "Crunchyroll", "Action - Fantastique - Mystère", "Magie - Violence - Identité", "Un homme à tête de reptile traque les mages responsables de sa transformation dans un monde chaotique."),
    new Element("Nippon Sangoku", "Streaming", "Action - Historique", "Guerre - Politique - Stratégie", "Dans un Japon divisé en royaumes, des factions s’affrontent pour le pouvoir et la domination."),
    new Element("Shangri la frontier", "Netflix & Crunchyroll", "Action - Aventure - Fantasy", "Jeu vidéo - VR - Progression", "Un joueur expert en jeux médiocres se lance dans un MMORPG réputé difficile."),
    new Element("Oshi no ko", "Netflix & Crunchyroll", "Drame - Mystère - Psychologique", "Idoles - Réincarnation - Célébrité", "La réincarnation d’un médecin en enfant d’une idole révèle les coulisses sombres du show-business."),
    new Element("Death Parade", "Streaming", "Drame - Psychologique - Mystère", "Mort - Jugement - Jeux", "Des âmes sont jugées à travers des jeux mortels révélant leur véritable nature."),
    new Element("Witch Watch", "Netflix & Crunchyroll", "Comédie - Fantastique", "Magie - Vie scolaire - Romance", "Une sorcière maladroite vit avec son ami d’enfance chargé de la protéger."),
    new Element("Devil May Cry", "Netflix", "Action - Fantastique", "Démons - Chasse - Combat", "Un chasseur de démons combat des créatures infernales tout en affrontant son propre passé."),
    new Element("Yuri on Ice", "Crunchyroll", "Sport - Drame - Romance", "Patinage - Compétition - Relation", "Un patineur artistique reprend confiance grâce à un entraîneur charismatique."),
    new Element("GANGSTA", "Crunchyroll", "Action - Drame", "Crime - Mafia - Survie", "Deux hommes à tout faire naviguent dans une ville dominée par gangs et trafics."),
    new Element("Ninja Kamui", "Streaming", "Action - Thriller", "Ninjas - Vengeance - Trahison", "Un ancien ninja traqué décide de se venger de son clan."),
    new Element("A Playthrough of a Certain Dude's VRMMO Life", "Crunchyroll", "Fantasy - Slice of Life", "Jeu vidéo - Craft - Exploration", "Un joueur choisit une approche tranquille dans un monde virtuel riche."),
    new Element("Summoned to another world", "Crunchyroll", "Isekai - Fantasy", "Invocation - Magie - Aventure", "Un héros est invoqué dans un autre monde pour accomplir une mission."),
    new Element("Kill Blue", "Netflix & Crunchyroll", "Action - Comédie", "Assassin - École - Double vie", "Un tueur à gages rajeunit et infiltre un lycée pour accomplir une mission."),
    new Element("Durarara", "Streaming", "Mystère - Surnaturel - Action", "Gang - Ville - Légendes urbaines", "Des histoires entremêlées dans Ikebukuro révèlent une réalité surnaturelle."),
    new Element("Mushoku Tensei", "Netflix & Crunchyroll", "Fantasy - Aventure - Drame", "Réincarnation - Magie - Croissance", "Un homme renaît dans un monde magique et tente de réussir sa nouvelle vie."),
    new Element("Ace of diamond", "Crunchyroll", "Sport - Drame", "Baseball - Équipe - Compétition", "Un lanceur talentueux rejoint une école prestigieuse et vise le sommet."),
    new Element("Witch Craft Works", "Streaming", "Action - Fantastique", "Sorcières - Protection - Combat", "Un lycéen est protégé par une puissante sorcière contre des ennemis mystérieux."),
    new Element("Code Geass", "Crunchyroll", "Action - Drame - Science-fiction", "Guerre - Stratégie - Pouvoir", "Un étudiant obtient le pouvoir de contrôler les gens et mène une rébellion."),
    new Element("Blade of the Guardians", "Streaming", "Action - Historique", "Arts martiaux - Protection - Voyage", "Un mercenaire protège un enfant dans un monde dangereux."),
    new Element("The Devil is a Part-Timer", "Streaming", "Comédie - Fantastique", "Démon - Monde réel - Travail", "Un roi démon travaille dans un fast-food après avoir fui son monde."),
    new Element("Aoashi", "Crunchyroll", "Sport - Drame", "Football - Formation - Ambition", "Un jeune joueur rejoint un centre de formation professionnel."),
    new Element("Love Live! School Idol Project", "Streaming", "Musique - Slice of Life", "Idoles - École - Groupe", "Des lycéennes forment un groupe d’idoles pour sauver leur école."),
    new Element("Code:Breaker", "Streaming", "Action - Surnaturel", "Pouvoirs - Justice - Secret", "Un justicier aux pouvoirs mystérieux élimine les criminels dans l’ombre."),
    new Element("Wistoria: Wand and Sword", "Crunchyroll", "Fantasy - Action", "Magie - École - Combat", "Un garçon sans magie combat pour atteindre le sommet d’une académie magique."),
    new Element("New Saga", "Crunchyroll", "Fantasy - Action", "Voyage dans le temps - Guerre - Réécriture", "Un héros retourne dans le passé pour éviter une catastrophe."),
    new Element("Vermeil in Gold: A Desperate Magician Barges Into the Magical World Alongside the Strongest Calamity", "Streaming", "Fantasy - Ecchi - Action", "Démon - Magie - Pacte", "Un étudiant invoque une démone surpuissante qui bouleverse sa vie."),
    new Element("Banana Fish", "Streaming", "Drame - Action - Thriller", "Crime - Drogue - Mafia", "Un jeune chef de gang enquête sur une mystérieuse drogue liée à son passé."),
    new Element("Babylon", "Streaming", "Psychologique - Thriller", "Justice - Suicide - Politique", "Un procureur enquête sur une affaire liée à une loi controversée."),
    new Element("Psycho-Pass", "Netflix", "Science-fiction - Thriller", "Surveillance - Crime - Société", "Dans un futur où les criminels sont détectés, des inspecteurs traquent les menaces."),
    new Element("Sanda", "Streaming", "Action - Mystère", "Identité - Violence - Secret", "Un étudiant découvre une vérité cachée sur le monde et lui-même."),
    new Element("Deca-Dence", "Crunchyroll", "Science-fiction - Action", "Post-apocalyptique - Combat - Système", "L’humanité lutte contre des créatures dans une forteresse mobile."),
    new Element("Deadman Wonderland", "Streaming", "Action - Horreur", "Prison - Survie - Pouvoirs", "Un adolescent est emprisonné dans un parc carcéral mortel."),
    new Element("Summer Time Rendering", "Streaming", "Mystère - Thriller - Surnaturel", "Boucle temporelle - Meurtres - Île", "Un jeune homme enquête sur des morts étranges liées à des entités mystérieuses."),
    new Element("Kemono Incidents", "Crunchyroll", "Action - Surnaturel", "Monstres - Enquête - Enfants", "Un détective enquête sur des incidents liés à des créatures surnaturelles."),
    new Element("Dororo", "Streaming", "Action - Historique - Drame", "Démons - Corps - Quête", "Un jeune homme récupère les parties de son corps volées par des démons."),
    new Element("Madan no O to Vanadis", "Crunchyroll", "Fantasy - Action", "Guerre - Archers - Royaumes", "Un archer devient impliqué dans des conflits entre royaumes."),
    new Element("Run With The Wind", "Crunchyroll", "Sport - Drame", "Course - Université - Équipe", "Des étudiants s’entraînent pour une course de relais marathon."),
    new Element("Failure Frame: I Became the Strongest and Annihilated Everything with Low-Level Spells", "Crunchyroll", "Isekai - Action - Fantasy", "Rejet - Vengeance - Pouvoir caché", "Un héros jugé inutile devient extrêmement puissant et cherche à se venger."),
    new Element("Link Click", "Crunchyroll", "Mystère - Drame - Surnaturel", "Voyage temporel - Photos - Conséquences", "Deux hommes entrent dans des photos pour changer le passé."),
    new Element("KonoSuba", "Crunchyroll", "Comédie - Fantasy", "Isekai - Groupe - Parodie", "Un groupe d’aventuriers incompétents vit des situations absurdes."),
    new Element("I'm Standing on a Million Lives", "Crunchyroll", "Isekai - Action", "Jeu - Missions - Survie", "Des étudiants sont transportés dans un monde où ils doivent accomplir des quêtes."),
    new Element("Black Bullet", "Streaming", "Action - Science-fiction", "Virus - Enfants - Guerre", "Des enfants aux pouvoirs spéciaux combattent des créatures infectées."),
    new Element("How to Become Ordinary", "Crunchyroll", "Slice of Life - Mystère", "Vie quotidienne - Relations - Normalité", "Deux étudiants cherchent une vie normale tout en résolvant de petits mystères."),
    new Element("Call of the night", "Netflix", "Romance - Surnaturel - Slice of Life", "Vampires - Nuit - Liberté", "Un adolescent insomniaque rencontre une vampire et découvre un monde nocturne séduisant et dangereux."),
    new Element("A Galaxy Next Door", "Crunchyroll", "Romance - Slice of Life", "Famille - Travail - Culture manga", "Un mangaka vit avec une assistante mystérieuse qui révèle peu à peu un lien surnaturel avec lui."),
    new Element("White Album", "Streaming", "Drame - Romance - Musique", "Idol - Relation - Sacrifice", "La vie d’un étudiant est bouleversée par sa relation avec une idol montante."),
    new Element("Insomniac after school", "Streaming", "Romance - Slice of Life", "Insomnie - École - Jeunesse", "Deux étudiants insomniaques se rapprochent en partageant un observatoire abandonné."),
    new Element("Tsuredure children", "Crunchyroll", "Romance - Comédie", "Amour adolescent - Relations - Humour", "Des histoires courtes de couples lycéens découvrant l’amour."),
    new Element("Inexpressive Kashiwada and Expressive Oota", "Crunchyroll", "Comédie - Romance - Slice of Life", "Opposés - École - Communication", "Un garçon très expressif tente de faire réagir une fille totalement impassible."),
    new Element("Dealing with Mikadono Sisters Is a Breeze", "Crunchyroll", "Romance - Comédie", "Famille - Harcèlement romantique - École", "Un garçon vit avec trois sœurs très envahissantes qui compliquent sa vie scolaire."),
    new Element("Tune In to the Midnight Heart", "Crunchyroll", "Romance - Slice of Life", "Radio - Jeunesse - Identité", "Des étudiants créent une émission radio nocturne et se rapprochent."),
    new Element("Higehiro", "Crunchyroll", "Drame - Romance", "Fuite - Relation - Protection", "Un salarié héberge une lycéenne fugueuse et tente de l’aider à reconstruire sa vie."),
    new Element("Let's Play", "Crunchyroll", "Romance - Comédie", "Jeux vidéo - Réseaux sociaux - Introversion", "Une développeuse de jeux vidéo voit sa vie bouleversée par un streamer voisin."),
    new Element("Watari-kun's is About to Collapse", "Crunchyroll", "Drame - Romance - Psychologique", "Trauma - Famille - Déséquilibre", "Un étudiant tente de survivre à une vie familiale et émotionnelle instable."),
    new Element("Toradora", "Streaming", "Romance - Comédie - Drame", "École - Amour - Relations", "Deux élèves au caractère opposé s’entraident pour conquérir leurs crushs."),
    new Element("Tomo-chan is a girl", "Crunchyroll", "Romance - Comédie", "Amour - Amitié - Identité", "Une fille garçon manqué tente de faire comprendre ses sentiments à son ami d’enfance."),
    new Element("I Have a Crush at Work", "Streaming", "Romance - Slice of Life", "Travail - Secret - Couple", "Deux collègues cachent leur relation amoureuse au bureau."),
    new Element("Spice and wolf", "Crunchyroll", "Fantasy - Romance - Aventure", "Commerce - Voyage - Divinité", "Un marchand voyage avec une déesse louve et apprend les subtilités du commerce médiéval."),
    new Element("A day before us", "Streaming", "Romance - Slice of Life", "Jeunesse - Relations - Quotidien", "Une chronique douce de relations amoureuses adolescentes."),
    new Element("Please put them on, Takamine-san", "Crunchyroll", "Romance - Comédie", "ECCHI - École - Pouvoir surnaturel", "Une élève peut remonter le temps en retirant ses vêtements, ce qui crée des situations absurdes et suggestives.", "ECCHI"),
    new Element("Toilet-Bound Hanako-Kun", "Crunchyroll", "Surnaturel - Mystère - Comédie", "Esprits - École - Légendes urbaines", "Une élève collabore avec un esprit pour résoudre des mystères scolaires."),
    new Element("Botan Kamiina Fully Blossoms When Drunk", "Crunchyroll", "Comédie - Slice of Life", "Alcool - Vie adulte - Transformation", "Une femme timide change complètement de personnalité lorsqu’elle boit."),
    new Element("DanMachi", "Streaming", "Fantasy - Action - Romance", "Donjon - Dieux - Progression", "Un aventurier progresse dans un donjon avec l’aide d’une déesse."),
    new Element("In/Spectre", "Crunchyroll", "Mystère - Surnaturel - Romance", "Esprits - Légendes - Enquête", "Une fille négocie avec des esprits pour résoudre des phénomènes surnaturels."),
    new Element("The Kawai Complex Guide to Manors and Hostel Behavior", "Streaming", "Comédie - Romance - Slice of Life", "Colocation - École - Relations", "Un lycéen vit dans une résidence remplie de personnages excentriques."),
    new Element("OreShura", "Streaming", "Romance - Comédie", "Faux couple - École - Harem", "Un élève simule une relation pour éviter les problèmes mais attire plusieurs filles.", "ECCHI"),
    new Element("Wotakoi", "Streaming", "Romance - Comédie - Slice of Life", "Otaku - Travail - Couple", "Deux couples d’otaku essaient de gérer amour et vie professionnelle."),
    new Element("Kubo Won't Let Me Be Invisible", "Streaming", "Romance - Slice of Life", "Invisibilité sociale - École - Douceur", "Une fille adorable ne cesse de remarquer un garçon totalement ignoré par les autres."),
    new Element("Tada Never Falls in Love", "Streaming", "Romance - Comédie", "Photographie - Étranger - École", "Un étudiant photographe rencontre une mystérieuse jeune fille étrangère."),
    new Element("Kokoro Connect", "Streaming", "Psychologique - Romance - Surnaturel", "Échange de corps - Amitié - Trauma", "Des étudiants échangent leurs corps et révèlent leurs secrets intimes."),
    new Element("Kono Oto Tomare", "Streaming", "Drame - Musique - Slice of Life", "Koto - Réhabilitation - Groupe", "Un club de musique traditionnelle renaît grâce à des élèves marginalisés."),
    new Element("3D Kanojo", "Streaming", "Romance - Comédie - Drame", "Otaku - Relation - Socialisation", "Un otaku introverti tombe amoureux d’une fille populaire et complexe."),
    new Element("Clannad", "Streaming", "Drame - Romance - Slice of Life", "Famille - École - Destin", "Un lycéen aide différentes personnes à résoudre leurs problèmes émotionnels."),
    new Element("Cupid's Chocolate", "Streaming", "Romance - Comédie", "Harem - Dieux - École", "Un étudiant reçoit des pouvoirs de Cupidon provoquant des situations amoureuses chaotiques.", "ECCHI"),
    new Element("Fruits Basket", "Crunchyroll", "Drame - Romance - Surnaturel", "Zodiaque - Famille - Trauma", "Une fille découvre une famille maudite se transformant en animaux du zodiaque."),
    new Element("Makeine: Too Many Losing Heroines!", "Crunchyroll", "Comédie - Romance", "Harem inversé - École - Échecs amoureux", "Un garçon se retrouve entouré de filles qui ont toutes perdu leurs histoires d’amour."),
    new Element("The Shiunji Family Children", "Crunchyroll", "Romance - Slice of Life", "Famille - Relations - Secrets", "Une famille de frères et sœurs voit ses relations évoluer de manière complexe."),
    new Element("Renai Flops", "Streaming", "Romance - Comédie - Science-fiction", "Simulation - IA - Amour", "Un étudiant vit des rencontres amoureuses qui cachent une réalité simulée."),
    new Element("An Observation Log of My Fiancée Who Calls Herself a Villainess", "Crunchyroll", "Comédie - Fantasy - Romance", "Isekai - Villainess - Réincarnation", "Un homme observe sa fiancée réincarnée qui croit être une méchante de jeu.", "ECCHI"),
    new Element("Wandance", "Disney+", "Drame - Musique - Romance", "Danse - Jeunesse - Passion", "Une fille introvertie découvre la danse grâce à un garçon passionné."),
    new Element("And You Thought There Is Never a Girl Online?", "Crunchyroll", "Comédie - Romance", "MMO - Internet - Réalité", "Un joueur découvre que sa guilde est composée de camarades de classe féminines."),
    new Element("Monthly Girls' Nozaki-kun", "Streaming", "Comédie - Romance", "Manga - École - Malentendus", "Une lycéenne aide un mangaka sans savoir qu’il dessine des shojos romantiques."),
    new Element("Girls beyond the Youth Koya", "Streaming", "Romance - Slice of Life", "Jeunesse - Amitié - Nostalgie", "Un groupe de jeunes explore leurs relations et leurs rêves."),
    new Element("Yakuza Fiancé: Raise wa Tanin ga Ii", "Crunchyroll", "Romance - Drame - Thriller", "Yakuza - Mariage arrangé - Violence", "Une fille se retrouve fiancée à un héritier de clan yakuza violent et imprévisible."),
    new Element("Skilled Teaser Takagi-san", "Crunchyroll", "Comédie - Romance - Slice of Life", "École - Taquinerie - Amour", "Une fille passe son temps à taquiner un garçon qu’elle aime secrètement."),
    new Element("Astro Note", "Crunchyroll", "Romance - Science-fiction - Comédie", "Extraterrestres - Pension - Mystère", "Un homme découvre que sa colocataire cache un secret extraterrestre."),
    new Element("Maid Sama", "Streaming", "Romance - Comédie", "Serveuse - École - Secret", "Une présidente d’école travaille secrètement dans un maid café."),
    new Element("My Tiny Senpai", "Crunchyroll", "Romance - Comédie - Slice of Life", "Travail - Bureau - Couple", "Une collègue petite et attentionnée développe une relation avec son junior."),
    new Element("Orange", "Crunchyroll", "Drame - Romance - Surnaturel", "Voyage temporel - Regrets - Amitié", "Une lycéenne reçoit des lettres du futur pour sauver un camarade."),
    new Element("The Duke of Death and His Maid", "Crunchyroll", "Romance - Comédie - Surnaturel", "Malédiction - Amour interdit - Manoir", "Un duc maudit tue tout ce qu’il touche, sauf sa fidèle maid."),
    new Element("Soredemo Ayumu wa Yosetekuru", "Streaming", "Romance - Comédie", "Shogi - Rivalité - Amour", "Un garçon tente de battre une fille au shogi pour lui avouer ses sentiments."),
    new Element("Love After World Domination", "Crunchyroll", "Romance - Action - Comédie", "Super-héros - Organisation secrète - Amour interdit", "Un héros et une méchante ennemis vivent une relation secrète.", "ECCHI léger"),
    new Element("Urusei Yatsura", "Netflix", "Comédie - Romance - Science-fiction", "Aliens - Chaos - Amour", "Un garçon est poursuivi par une alien excentrique après une malédiction."),
    new Element("Engage Kiss", "Crunchyroll", "Action - Romance - Surnaturel", "Démons - Contrats - Amour toxique", "Un homme gère une relation compliquée avec une ex et une chasseuse de démons."),
    new Element("Chivalry of a Failed Knight", "Streaming", "Action - Romance - Fantasy", "Magie - École - Duel", "Un élève considéré comme faible prouve sa valeur dans des duels magiques.", "ECCHI"),
    new Element("The Girl I Like Forgot Her Glasses", "Crunchyroll", "Romance - Slice of Life", "École - Maladresse - Douceur", "Un garçon aide une fille distraite qui oublie constamment ses lunettes."),
    new Element("The Moon is Beautiful", "Crunchyroll", "Romance - Drame", "Premiers amours - Adolescence - École", "Deux adolescents découvrent leur premier amour timide et sincère."),
    new Element("You Are Ms. Servant", "Crunchyroll", "Comédie - Romance", "Assassin - Domesticité - Identité", "Une ancienne tueuse devient femme de ménage chez un adolescent."),
    new Element("Gods' Game We Play", "Crunchyroll", "Fantasy - Thriller - Jeux", "Dieux - Jeux mortels - Stratégie", "Des humains jouent à des jeux imposés par des dieux avec leur vie en jeu."),
    new Element("Welcome to Japan, Ms. Elf!", "Crunchyroll", "Fantasy - Slice of Life - Romance", "Isekai - Vie quotidienne - Elfes", "Une elfe découvre le Japon moderne avec son compagnon humain."),
    new Element("How I Married an Amagami Sister", "Crunchyroll", "Romance - Comédie", "Harem - Famille - Mariage arrangé", "Un étudiant doit choisir parmi trois sœurs dans un temple traditionnel.", "ECCHI léger"),
    new Element("Oreimo", "Streaming", "Comédie - Romance", "Otaku - Fratrie - Secret", "Un frère découvre que sa sœur est otaku de jeux érotiques.", "ECCHI"),
    new Element("The World God Only Knows", "Streaming", "Comédie - Romance - Surnaturel", "Jeux de séduction - Démons - Conquête", "Un joueur doit conquérir des filles réelles comme dans un jeu vidéo.", "ECCHI"),
    new Element("2.5 Dimensional Seduction", "Streaming", "Romance - Comédie", "Cosplay - Otaku - Amour", "Un garçon otaku se retrouve impliqué avec une cosplayeuse passionnée.", "ECCHI"),
    new Element("Macross Delta", "Streaming", "Action - Romance - Science-fiction", "Idols - Guerre - Musique", "Des chanteuses utilisent la musique pour combattre une guerre interstellaire."),
    new Element("Studio Apartment, Good Lighting, Angel Included.", "Crunchyroll", "Romance - Slice of Life - Fantasy", "Anges - Vie quotidienne - Douceur", "Un étudiant vit avec une mystérieuse fille angélique."),
    new Element("Valkyrie Romanze", "Crunchyroll", "Romance - Fantasy", "Chevaliers - École - Duel", "Une école de chevaliers forme des combattants dans un monde fantasy.", "ECCHI"),
    new Element("The Magical Girl and The Evil Lieutenant Used to Be Archenemies", "Crunchyroll", "Romance - Comédie", "Magical girls - Rivalité - Amour", "Une magical girl tombe amoureuse de son ennemi juré."),
    new Element("Classroom Crisis", "Streaming", "Science-fiction - Drame", "Espace - Industrie - École", "Des étudiants travaillent sur un projet spatial pour sauver leur classe."),
    new Element("Murai in Love", "Disney+", "Romance - Comédie", "Professeur - Étudiant - Déguisement", "Un élève tombe amoureux de son professeur qui cache un secret.", "ECCHI léger"),
    new Element("Anonymous Noise", "Streaming", "Musique - Romance - Drame", "Chant - Amour - Rivalité", "Une chanteuse cherche à retrouver un amour perdu à travers la musique."),
    new Element("Saint Cecilia and Pastor Lawrence", "Crunchyroll", "Slice of Life - Romance - Fantasy", "Sainte - Église - Douceur", "Un pasteur vit avec une sainte très paresseuse mais bienveillante."),
    new Element("Trapped in a Dating Sim : The World of Otome Games is Tough for Mobs", "Crunchyroll", "Isekai - Comédie - Action", "Otome game - Noblesse - Rébellion", "Un homme réincarné dans un jeu otome refuse de suivre le scénario.", "ECCHI"),
    new Element("Saekano - How to Raise a Boring Girlfriend", "Crunchyroll", "Romance - Comédie", "Otaku - Création - Harem", "Un étudiant crée un jeu de dating avec plusieurs filles inspirantes.", "ECCHI"),
    new Element("After the Rain", "Streaming", "Drame - Romance", "Différence d’âge - Travail - Mélancolie", "Une lycéenne développe des sentiments pour son manager plus âgé."),
    new Element("365 Days To The Wedding", "Crunchyroll", "Romance - Slice of Life", "Mariage arrangé - Travail - Mensonge", "Deux collègues simulent un mariage pour éviter une mutation."),
    new Element("Bottom-Tier Character Tomozaki", "Crunchyroll", "Romance - Slice of Life", "Jeux vidéo - Socialisation - Évolution", "Un gamer apprend à améliorer ses compétences sociales dans la vie réelle."),
    new Element("Wolf Girl & Black Prince", "Streaming", "Romance - Comédie", "Relation toxique - École - Manipulation", "Une fille ment sur une relation et devient l’esclave d’un garçon sadique."),
    new Element("Amagami SS", "Streaming", "Romance - Slice of Life", "Routes alternatives - École - Amour", "Chaque arc explore une relation différente avec une fille."),
    new Element("Lovely Complex", "Streaming", "Romance - Comédie", "Différence de taille - École - Humour", "Deux élèves complexés par leur taille développent une relation unique."),
    new Element("Taisho Otome Fairy Tale", "Crunchyroll", "Romance - Drame", "Époque historique - Mariage arrangé - Douceur", "Un homme handicapé découvre l’amour avec une jeune femme arrangée."),
    new Element("Kiznaiver", "Streaming", "Science-fiction - Drame - Romance", "Expérimentation - Douleur - Lien social", "Des étudiants partagent leurs douleurs physiques et émotionnelles."),
    new Element("Scum's Wish", "Streaming", "Drame - Psychologique - Romance", "Relations toxiques - Désir - Adultère", "Des adolescents vivent des relations amoureuses non réciproques et complexes."),
    new Element("Kowloon Generic Romance", "Crunchyroll", "Romance - Mystère - Science-fiction", "Ville - Mémoire - Identité", "Une histoire d’amour dans une ville étrange où la réalité semble instable."),
    new Element("My Gift Lvl 9999 Unlimited Gacha: Backstabbed in a Backwater Dungeon, I'm Out for Revenge!", "Streaming", "Isekai - Action - Fantasy", "Trahison - Vengeance - Gacha", "Un héros trahi devient extrêmement puissant et cherche à se venger."),
    new Element("Haganai: I Don't Have Many Friends", "Streaming", "Comédie - Romance", "Club - Isolement - Amitié", "Des étudiants socialement maladroits créent un club pour se faire des amis."),
    new Element("Uzaki-chan Wants to Hang Out!", "Crunchyroll", "Comédie - Romance", "Université - Taquinerie - Couple", "Une étudiante énergique harcèle gentiment son senpai pour passer du temps avec lui.")
]