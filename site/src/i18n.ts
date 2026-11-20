// French text of the page. English is the text of index.html itself: change the two together.
// A key missing here leaves the English text in place.
//
// Figures, and where each one is owned:
// - 48,955 of 48,955 reference values: caladrius, docs/conformance.md
// - the same digits on four targets, the SHA-256 seal, replay: caladrius, docs/reproducibility.md
// - the gate's behaviour (flag, one regeneration, badge): apothicaire, README.md and docs/gates.md
// - H3 does not hold: ols-prime, docs/reports/report-2.md
// - the roadmap phases: the Caladrius feature inventory and roadmap of 2026-11-17
export const fr: Record<string, string> = {
  'nav.arch': 'Architecture',
  'nav.research': 'Recherche',
  'nav.roadmap': 'Feuille de route',
  'nav.pubs': 'Publications',
  'nav.team': 'Équipe',

  'hero.eyebrow': 'Laboratoire de Recherche Indépendant',
  'hero.title': "Calcul scientifique, santé et architectures d'IA locales.",
  'hero.sub':
    'Officina développe des logiciels scientifiques déterministes en Rust, étudie les modèles de langage locaux outillés et explore des architectures statistiques et neuronales alternatives.',
  'hero.cta1': 'Architecture Principale',
  'hero.cta2': 'Publications & Présentations',

  's1.index': '01 / Architecture Principale',
  's1.title': 'Pharmacométrie & Agents Locaux Vérifiables',
  's1.desc':
    "Un pipeline modulaire séparant l'exécution numérique du raisonnement linguistique, afin que chaque valeur rapportée reste traçable et reproductible.",

  'lanes.title': 'Qui fait quoi, dans l’ordre',
  'lanes.desc':
    'Six étapes sur quatre couloirs. Vous posez une question. Apothicaire planifie. Caladrius calcule chaque nombre et le scelle. Apothicaire explique. The Gate vérifie que chaque nombre a une source ; s\'il en manque une, Apothicaire réécrit sa réponse une fois, et ce qui reste s\'affiche dans un badge. Vous lisez la réponse.',
  'st1.a': '1. Demander',
  'st1.b': 'une question sur',
  'st1.c': 'vos données',
  'st2.a': '2. Planifier',
  'st2.b': 'choisir la',
  'st2.c': 'commande',
  'st3.a': '3. Calculer',
  'st3.b': 'chaque nombre,',
  'st3.c': 'puis le sceller',
  'st4.a': '4. Expliquer',
  'st4.b': 'le résultat,',
  'st4.c': 'en clair',
  'st5.a': '5. Vérifier',
  'st5.b': 'chaque nombre',
  'st5.c': 'a une source',
  'st6.a': '6. Lire',
  'st6.b': 'une réponse',
  'st6.c': 're-dérivable',
  'ln.you': 'Vous',
  'lr.you': 'sur votre PC',
  'lr.apo': 'mots · 27B local',
  'lr.cal': 'nombres · moteur Rust',
  'lr.gate': 'contrôle · sans modèle',
  'll.mcp': 'appel MCP',
  'll.sealed': 'résultat scellé',
  'll.retry1': 'Un nombre sans source :',
  'll.retry2': 'un nouvel essai, puis un badge visible.',

  'tag.opensource': 'Open Source',
  'tag.research': 'Recherche',
  'tag.airesearch': 'Recherche IA',
  'tag.internal': 'Infrastructure Interne',

  'cal.sub': 'Rust · Pharmacocinétique (PK)',
  'cal.desc':
    'Moteur pharmacocinétique écrit en Rust : analyse non compartimentale, modèles compartimentaux et ajustement pondéré, conçu pour une reproductibilité stricte entre plateformes.',
  'cal.f1':
    'Chaque réponse porte un sceau <code>SHA-256</code>, et un projet enregistré peut être rejoué étape par étape.',
  'cal.f2': 'Les mêmes chiffres sur Linux, Windows, macOS et WebAssembly, comparés en CI à chaque build.',
  'cal.f3':
    '<code>48 955 sur 48 955</code> valeurs de référence reproduites face à PKNCA, à des formes closes en 256 bits et à des ajustements R.',

  'apo.sub': 'LLM local 27B · Agent',
  'apo.desc':
    'Agent IA local basé sur un modèle 27B, interfacé avec Caladrius via le Model Context Protocol (MCP) pour les tâches pharmacocinétiques.',
  'apo.f1': 'Fonctionne intégralement en local, sans dépendance à des API externes.',
  'apo.f2':
    "Évalue l'équivalence de performance entre un modèle local 27B outillé et les grands modèles frontières sur des tâches PK structurées.",
  'apo.f3':
    'Un prototype testé sur des exercices synthétiques. Pas pour un vrai patient ni pour une décision réglementaire.',

  'link.docs': 'Documentation →',
  'link.app': 'Application web →',
  'link.download': 'Application de bureau (Windows, Linux) →',
  'link.arch': 'Architecture & Benchmarks →',
  'link.report': 'Rapport n°2 →',

  'gate.title': 'Couche de vérification : The Gate',
  'gate.desc':
    "Contrôle déterministe, sans modèle, appliqué à chaque réponse d'Apothicaire. Un nombre qui ne vient ni d'un résultat de Caladrius ni du message de l'utilisateur est signalé : le modèle régénère une fois, et ce qui reste est listé dans un badge visible.",
  'gate.badge': 'Contrôle de sortie',

  's2.index': '02 / Recherches en cours & Stack interne',
  's2.title': 'Recherche Fondamentale en IA & Infrastructure',
  's2.desc':
    "Architectures de décision expérimentales et systèmes internes de recherche documentaire et d'orchestration d'Officina.",

  'ols.sub': 'Modèle de décision · Mémoire statistique',
  'ols.desc':
    "Modèle de décision explorant un mécanisme d'attention sans Softmax, formulé via les Moindres Carrés Ordinaires (MCO / OLS).",
  'ols.f1':
    "Remplace la pondération d'attention Softmax classique par des projections par moindres carrés.",
  'ols.f2':
    'Associé à <code>Matrix</code>, une architecture de mémoire arborescente basée sur des statistiques.',
  'ols.f3':
    "Les hypothèses sont enregistrées avant d'être testées. Dans le rapport n°2, <code>H3</code> ne tient pas et est publiée telle quelle.",

  'kit.sub': "Système RAG & Harnais d'agents",
  'kit.desc':
    "Infrastructure RAG (Retrieval-Augmented Generation) propriétaire et harnais d'agents développés en interne pour les travaux d'Officina.",
  'kit.f1': "Soutient l'indexation, la recherche documentaire et les boucles d'évaluation internes d'Officina.",
  'kit.f2': 'Code fermé, actuellement en phase active de R&D interne.',
  'kit.status': 'Statut : Développement interne actif · Non commercialisé',

  's3.index': '03 / Feuille de route',
  's3.title': 'Caladrius : les fondations, puis les fonctionnalités',
  's3.desc':
    "Finir ce qui est sur les branches, puis poser trois fondations avant tout nouveau modèle ou estimateur. Il n'y a pas de dates. Une phase se termine sur une vérification face à un outil indépendant, pas sur une échéance.",
  'rm.p0': 'Phase 0',
  'rm.p1': 'Phase 1',
  'rm.p2': 'Phase 2',
  'rm.p3': 'Phase 3',
  'rm.current': 'En cours',
  'rm.ends': 'Se termine quand',
  'rm.t0': "Clore l'itération 3",
  'rm.d0':
    'Trois compartiments, ajustement par maximum de vraisemblance, FOCEI avec diagnostics et simulation de population, fusionnés sur main.',
  'rm.e0': 'La table de conformité de main les couvre et le digest est identique sur les quatre cibles.',
  'rm.t1': 'Noyau numérique',
  'rm.d1':
    'Rien de visible. Fonctions mathématiques, algèbre linéaire, quadrature et flux aléatoires réunis dans une couche numérique que toutes les phases suivantes appellent, en commençant par la crate <code>caladrius-math</code>.',
  'rm.e1': 'Chaque fonction donne le même digest sur les quatre cibles.',
  'rm.t2': 'Événements, sorties, groupes',
  'rm.d2':
    "Schémas posologiques personnalisés et plusieurs doses par sujet. NCA à doses multiples, à l'état d'équilibre et sur données urinaires. Ratios et tableaux de synthèse.",
  'rm.e2': 'Chaque nouveau paramètre a un cas oracle PKNCA et les schémas concordent avec rxode2.',
  'rm.t3': 'Interface de modèle et vraisemblance',
  'rm.d3':
    'Modèles à covariables, vraisemblance censurée, estimations post hoc, VPC et NPDE, et évaluation de protocole.',
  'rm.e3': 'Les ajustements concordent avec nlmixr2, les statistiques de VPC avec le package vpc, la FIM avec PFIM.',
  'rm.tracks': 'Après la phase 3, deux pistes sont indépendantes et peuvent avancer en parallèle.',
  'rm.trackA': 'Piste · Phases 4 et 5',
  'rm.trackB': 'Piste · Phases 6 et 7',
  'rm.models': 'Modèles',
  'rm.estimators': 'Estimateurs',
  'rm.p4':
    "<strong>Solveur d'EDO.</strong> Élimination de Michaelis-Menten et modèles de turnover. Se termine sur des vérifications croisées avec deSolve et diffsol.",
  'rm.p5':
    "<strong>Langage de modèles.</strong> Modèles EDO écrits par l'utilisateur et disposition médiée par la cible. Se termine quand chaque modèle intégré, réécrit dans le langage, reproduit ses valeurs de conformité.",
  'rm.p6':
    "<strong>Autres estimateurs.</strong> Deux étapes itératif, SAEM, échantillonnage d'importance, Laplace et quadrature. Se termine sur un accord avec saemix à l'erreur de Monte-Carlo près.",
  'rm.p7':
    '<strong>Rééchantillonnage et recherche.</strong> Bootstrap, profil de vraisemblance, recherche de covariables et de structure. Se termine sur des comparaisons avec Pharmpy et saemix sur des jeux de données publics.',
  'rm.alongside':
    "En parallèle, à tout moment : fichiers XPT, jeux de résultats CDISC, rapport avec le journal d'exécution · Hors périmètre : bioéquivalence, IVIVC",

  's4.index': '04 / Publications & Présentations',
  's4.title': 'Articles, Prépublications & Conférences',
  's4.desc': "Manuscrits en cours, notes techniques et présentations réalisés par les membres d'Officina.",
  'pub.inprogress': 'En cours',
  'pub.poster': 'Poster',
  'pub.note': 'Note',
  'pub.read': 'Lire →',
  'pub1.title': 'Évaluation des modèles locaux 27B outillés via MCP sur des workflows pharmacocinétiques',
  'pub1.venue': 'Manuscrit en préparation · Caladrius & Apothicaire',
  'pub2.date': 'Déc. 2026',
  'pub2.venue': 'ELLIS UnConference, Paris · Session : Next Generation of Discovery Loops',
  'pub3.title': 'Reproductibilité multiplateforme en virgule flottante et vérification SHA-256 en Rust',
  'pub3.venue': 'Note technique · Caladrius',

  's5.index': '05 / Chercheurs',
  's5.title': 'Équipe & Collaborateurs',
  's5.desc':
    "Officina réunit des chercheurs indépendants autour de la santé, des mathématiques appliquées et des systèmes d'IA.",
  't1.role': 'Fondateur · Chercheur principal',
  't1.focus':
    'Pharmacométrie (DMPK), calcul déterministe en Rust, agents LLM locaux et architectures de décision alternatives.',
  't2.role': 'Chercheur collaborateur',
  't2.focus':
    'Mathématiques appliquées et problèmes inverses, avec un axe sur la super-résolution en imagerie médicale IRM.',
  'team.note':
    "D'autres contributeurs et axes de recherche interdisciplinaires seront ajoutés à mesure de l'avancement des travaux.",

  'footer.desc': 'Laboratoire de Recherche Indépendant — Santé, Mathématiques & IA Locale',
  'footer.status': 'Prototypes de recherche. Aucun statut réglementaire.',
  'footer.credits': "L'oiseau et le mortier ont été dessinés par Amina."
};
