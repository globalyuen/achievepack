import json
import os

def deep_merge(dict1, dict2):
    for key, value in dict2.items():
        if isinstance(value, dict) and key in dict1 and isinstance(dict1[key], dict):
            deep_merge(dict1[key], value)
        else:
            dict1[key] = value

translations = {
    'seoPages': {
        'pages': {
            'monoMaterialFoundation': {
                'title': 'Conception Monomatériau : La Base des Sachets 100% Recyclables | Achieve Pack',
                'description': 'Découvrez pourquoi la conception monomatériau est cruciale pour les emballages flexibles recyclables. Les sachets Eco Digital mono-PE offrent aux PME une voie pratique.',
                'keywords': 'emballage monomatériau, sachets mono-PE, emballage flexible recyclable, polymère unique, recyclage PE, Eco Digital, complexage monomatériau',
                'ogTitle': 'Conception Monomatériau : La Base des Sachets 100% Recyclables',
                'ogDescription': 'Pourquoi la conception monomatériau est essentielle pour le recyclage et comment les sachets Eco Digital mono-PE la rendent accessible aux PME.',
                'schemaArticleHeadline': 'Conception Monomatériau : La Base des Sachets 100% Recyclables',
                'schemaArticleDescription': 'Pourquoi la conception monomatériau est essentielle pour les emballages flexibles recyclables et comment l\'implémenter.',
                'hero': {
                    'tag': 'Principes de Conception',
                    'title': 'Conception Monomatériau : La Base des Sachets 100% Recyclables',
                    'subtitle': 'Pourquoi les distributeurs et les régulateurs utilisent le terme "monomatériau" comme synonyme de "recyclable" — et comment l\'appliquer à vos emballages.',
                    'btnConsultation': 'Réserver une Consultation Gratuite',
                    'btnStore': 'Voir les Produits Mono-PE',
                    'badgeSingle': 'Polymère Unique',
                    'badgePEStream': 'Compatible Filière PE',
                    'badgeRetailer': 'Approuvé Distributeurs'
                },
                'takeaways': {
                    'title': 'Points Clés',
                    'items': [
                        'Monomatériau = recyclable : Toutes les couches principales sont de la même famille de polymères (comme le PE)',
                        'Tri et recyclage optimisés : Les flux de polymère unique produisent un recyclat de qualité constante',
                        'Chaque choix compte : La stratégie de barrière, les fermetures et l\'impression influencent la recyclabilité',
                        'Base pour aller plus loin : Intégrez du PCR et du bio-PE sans nuire à la recyclabilité'
                    ]
                },
                'intro': {
                    'title': 'Pourquoi le "Monomatériau" s\'impose dans les cahiers des charges des distributeurs',
                    'p1': 'Les distributeurs et les organismes de réglementation utilisent de plus en plus le mot "monomatériau" pour désigner un emballage conçu pour être recyclable. Pour les emballages flexibles, cela signifie des sachets élaborés autour d\'une seule famille de polymères, comme le PE ou le PP, plutôt que les complexes multicouches traditionnels.',
                    'p2': {
                        'part1': 'Cet article explique ce qu\'est le monomatériau en pratique, pourquoi il est crucial pour le recyclage, et comment les sachets Eco Digital mono-PE d\'Achieve Pack ',
                        'link': 'Eco Digital mono-PE sachets',
                        'part2': ' permettent aux PME de l\'adopter facilement.'
                    }
                },
                'workingDef': {
                    'title': 'Le Monomatériau en Flexible : Une Définition Pratique',
                    'imageCaption': 'Comparaison des structures PE monomatériau et des complexes multicouches traditionnels',
                    'p1': 'Dans l\'emballage rigide, le monomatériau est simple : un flacon et son bouchon de la même famille. Le flexible est plus complexe car il superpose plusieurs films.',
                    'highlightTitle': 'Définition pratique du monomatériau pour les emballages flexibles :',
                    'highlightItems': [
                        'Toutes les couches principales du film (externe, barrière, scellage) sont issues de la même famille de polymères',
                        'Les couches aditionnelles sont de la même famille ou présentes en quantités si faibles qu\'elles ne perturbent pas le recyclage'
                    ],
                    'p2': 'Plus vous respectez cette définition, plus votre sachet sera accepté et traité avec succès dans la filière de recyclage de ce polymère.'
                },
                'whyCritical': {
                    'title': 'Pourquoi la Conception Monomatériau est Cruciale pour le Recyclage',
                    'imageCaption': 'Tri par infrarouge proche (NIR) et filière de recyclage pour emballages monomatériaux',
                    'p1': 'Le recyclage mécanique est optimal lorsque les flux entrants sont simples et homogènes. Le monomatériau y contribue en :',
                    'boxes': [
                        {
                            'title': 'Simplifiant le Tri',
                            'desc': 'Les systèmes de tri optique par infrarouge proche (NIR) et par densité sont plus précis lorsque les emballages contiennent un seul polymère dominant.'
                        },
                        {
                            'title': 'Améliorant la Fusion et la Régénération',
                            'desc': 'Les mélanges de plastiques peuvent se séparer lors de la fusion, affaiblissant le recyclat. Les flux monomatériaux produisent une résine recyclée de qualité constante.'
                        },
                        {
                            'title': 'Valorisant le Marché du Recyclé',
                            'desc': 'Une meilleure qualité de résine assure des débouchés stables pour la fabrication de nouveaux films ou objets, soutenant l\'économie du tri.'
                        }
                    ]
                },
                'designChoices': {
                    'title': 'Les Choix de Conception qui Rendent les Sachets Monomatériaux Possibles',
                    'imageCaption': 'Stratégie de barrière pour sachets monomatériaux',
                    'p1': 'L\'adoption du monomatériau nécessite des choix techniques conscients et des ajustements de structure :',
                    'box1Title': '1. Stratégie de Barrière',
                    'box1Items': [
                        'Utilisez des grades de PE barrière et des conceptions structurelles adaptées pour assurer la conservation sans recourir au PET/ALU/PE',
                        'Pour les produits très sensibles, étudiez des options hybrides si le monomatériau pur s\'avère insuffisant'
                    ],
                    'box2Title': '2. Fermetures et Accessoires',
                    'box2Items': [
                        'Privilégiez les zips, becs verseurs et valves en PE pour conserver l\'homogénéité',
                        'Limitez le poids des composants hors-PE au strict minimum par rapport au sachet'
                    ]
                },
                'decoration': {
                    'title': '3. Considérations d\'Impression et de Décoration',
                    'imageCaption': 'Impression Eco Digital sur sachets monomatériaux',
                    'items': [
                        'Respectez les recommandations de recyclabilité en évitant les aplats opaques sombres au profit de designs facilitant la reconnaissance optique',
                        'Sélectionnez des encres et vernis compatibles avec les procédés de recyclage'
                    ],
                    'highlight': 'Achieve Pack intègre ces contraintes dans la structure de ses complexes Eco Digital mono-PE dès la phase de conception.'
                },
                'ecoDigital': {
                    'title': 'Sachets Eco Digital Mono-PE : Monomatériaux par Nature',
                    'imageCaption': 'Performances d\'Eco Digital mono-PE sur différentes catégories',
                    'p1': 'Les sachets Eco Digital mono-PE d\'Achieve Pack sont spécifiquement développés pour respecter les règles du monomatériau :',
                    'box1Title': 'Tous les Films Principaux sont en PE',
                    'box1Desc': 'Le support d\'impression extérieur, la barrière et le scellant interne appartiennent à un système PE unifié.',
                    'box2Title': 'Des Performances Adaptées aux Catégories Clés',
                    'box2Items': [
                        'Café en grains : Structures PE avec barrière optimisée pour conserver les arômes',
                        'Snacks et produits secs : Formats mono-PE robustes avec excellente étanchéité de soudure',
                        'Aliments pour animaux et compléments : Stabilité verticale et résistance à la perforation'
                    ]
                },
                'combining': {
                    'title': 'Associer le Monomatériau avec le PCR et le Bio-PE',
                    'imageCaption': 'Superposition de PCR et de bio-PE sur la base monomatériau',
                    'p1': 'Le monomatériau est la fondation ; vous pouvez y ajouter d\'autres leviers environnementaux sans altérer la recyclabilité :',
                    'box1Title': 'Le PCR dans le Mono-PE',
                    'box1Desc': {
                        'part1': 'L\'intégration de ',
                        'link': 'PE recyclé post-consommation (PCR)',
                        'part2': ' réduit l\'usage de matière vierge tout en maintenant le sachet dans la filière PE.'
                    },
                    'box2Title': 'Le Bio-PE dans le Mono-PE',
                    'box2Desc': {
                        'part1': 'Remplacer le PE fossile par du ',
                        'link': 'bio-PE de canne à sucre',
                        'part2': ' améliore le bilan carbone.'
                    },
                    'highlight': 'La fin de vie reste inchangée : le sachet est recyclé dans le flux PE. La gamme Eco Digital d\'Achieve Pack permet de piloter ces choix simplement.'
                },
                'faqs': [
                    {
                        'question': 'Que signifie monomatériau pour les emballages flexibles ?',
                        'answer': 'Cela signifie que tous les films principaux du sachet (externe, barrière et interne) sont issus de la même famille de polymères, comme le polyéthylène (PE). Les adhésifs et vernis sont compatibles ou présents en si faibles proportions qu\'ils ne nuisent pas au recyclage.'
                    },
                    {
                        'question': 'Pourquoi le monomatériau est-il important pour le recyclage ?',
                        'answer': 'Le recyclage mécanique requiert des flux propres et homogènes. Le monomatériau simplifie le tri optique, évite les incompatibilités lors de la fusion et améliore la qualité de la matière recyclée obtenue.'
                    },
                    {
                        'question': 'Les sachets mono-PE offrent-ils une barrière suffisante pour mes produits ?',
                        'answer': 'Oui. Les grades de PE barrière associés à une conception moderne permettent de répondre aux exigences de conservation de la plupart des aliments sans utiliser de PET/ALU/PE. Achieve Pack adapte les structures selon vos besoins.'
                    },
                    {
                        'question': 'Les zips et valves nuisent-ils au monomatériau ?',
                        'answer': 'Il est conseillé de choisir des accessoires en PE pour préserver l\'homogénéité. Si des accessoires d\'autres polymères sont requis, ils doivent être minimisés en poids par rapport au sachet.'
                    },
                    {
                        'question': 'Puis-je intégrer du PCR ou du bio-PE dans mes sachets monomatériaux ?',
                        'answer': 'Oui. La structure monomatériau sert de base ; le PE recyclé (PCR) et le bio-PE végétale se superposent dans les couches sans impacter la recyclabilité globale dans la filière PE.'
                    },
                    {
                        'question': 'Comment lancer la transition vers le monomatériau ?',
                        'answer': 'Analysez vos emballages actuels pour identifier la viabilité de la transition vers le mono-PE. Achieve Pack conçoit la structure Eco Digital adaptée et permet de lancer des tests grâce à l\'impression numérique sans frais de clichés.'
                    }
                ],
                'cta': {
                    'title': 'Prêt à Passer au Monomatériau ?',
                    'imageCaption': 'Mise en valeur de la qualité et des certifications',
                    'p1': 'Le monomatériau s\'impose comme le standard minimum exigé par les distributeurs et la réglementation pour les emballages souples. La gamme Eco Digital d\'Achieve Pack permet aux PME de s\'y conformer sans sacrifier la conservation ni l\'image de marque.',
                    'p2': 'Si vous planifiez cette transition, Achieve Pack vous propose de :',
                    'items': [
                        'Analyser vos structures actuelles pour étudier la faisabilité du mono-PE',
                        'Proposer des complexes mono-PE répondant précisément à vos besoins de conservation',
                        'Valider le comportement sur vos lignes avec des tirages de test en impression numérique'
                    ],
                    'btnConsultation': 'Réserver une Consultation Gratuite',
                    'btnSamples': 'Demander des Échantillons',
                    'btnStore': 'Voir la Boutique'
                },
                'aiFaq': [
                    {
                        'q': 'Qu\'est-ce que l\'emballage monomatériau et pourquoi est-il important ?',
                        'a': 'Un emballage monomatériau est composé d\'une seule famille de polymères (comme le PE). Il est essentiel car le recyclage mécanique nécessite des flux homogènes. Les sachets traditionnels complexent PET, nylon et aluminium, impossibles à trier. Les solutions mono-PE facilitent le tri optique et assurent des recyclats de qualité. Contactez ryan@achievepack.com pour des échantillons.'
                    }
                ]
            },
            'recyclableRoadmap': {
                'title': 'Feuille de Route en 3 Étapes vers des Sachets 100% Recyclables | Achieve Pack',
                'description': 'Une feuille de route pratique en 3 étapes pour aider les PME à passer à des emballages flexibles 100% recyclables. Audit, conception et déploiement.',
                'keywords': 'feuille de route emballage recyclable, sachets 100% recyclables, transition mono-PE, emballage durable PME, emballage flexible recyclable, audit emballage',
                'ogTitle': 'Feuille de Route en 3 Étapes vers des Sachets 100% Recyclables',
                'ogDescription': 'Concrétisez votre engagement écologique avec cette feuille de route pratique par étapes.',
                'schemaArticleHeadline': 'Feuille de Route en 3 Étapes vers des Sachets 100% Recyclables',
                'schemaArticleDescription': 'Une feuille de route pratique pour accompagner les marques PME vers des emballages recyclables.',
                'hero': {
                    'tag': 'Feuille de Route de Déploiement',
                    'title': 'Feuille de Route en 3 Étapes vers des Sachets 100% Recyclables pour les PME',
                    'subtitle': 'Concrétisez vos objectifs écologiques avec une démarche progressive et pragmatique, adaptée aux marques disposant de ressources limitées.',
                    'btnConsultation': 'Réserver une Consultation Gratuite',
                    'btnStore': 'Voir les Produits Recyclables',
                    'badgeStepGuide': 'Guide Étape par Étape',
                    'badgeMonoPE': 'Priorité Mono-PE',
                    'badgeSmeTailored': 'Adapté aux PME'
                },
                'takeaways': {
                    'title': 'Points Clés',
                    'items': [
                        'Étape 1 – Audit : Cartographiez vos formats actuels et repérez les structures complexes',
                        'Étape 2 – Conception : Convertissez vos SKU prioritaires en sachets Eco Digital mono-PE',
                        'Étape 3 – Déploiement : Étendez la démarche à toute la gamme et intégrez le PCR et le bio-PE',
                        'Démarche progressive : Évitez de saturer vos équipes en réalisant la transition de manière incrémentale'
                    ]
                },
                'intro': {
                    'title': 'De l\'Ambition à la Réalité Opérationnelle',
                    'p1': '"D\'ici 20XX, 100% de nos emballages seront recyclables" est une déclaration courante. Le défi est de la transcrire sur le plan opérationnel, en particulier pour les PME devant concilier coûts, croissance et contraintes écologiques.',
                    'p2': {
                        'part1': 'Cet article détaille une feuille de route en trois étapes pour faciliter la transition vers des emballages 100% recyclables via la technologie ',
                        'link': 'Eco Digital mono-matière d\'Achieve Pack',
                        'part2': ', en limitant les risques.'
                    }
                },
                'step1': {
                    'title': 'Étape 1 : Audisez vos Emballages Flexibles Actuels',
                    'imageCaption': 'Cartographiez vos emballages pour définir votre point de départ',
                    'p1': 'On ne peut optimiser ce que l\'on ne connaît pas. La première étape consiste à documenter l\'état réel de vos emballages.',
                    'boxTitle': 'Mission Clé : Inventaire des SKU',
                    'boxIntro': 'Listez vos emballages (sachets stand-up, sachets plats, soufflets) en précisant :',
                    'boxItems': [
                        'Les structures de couches (ex. PET/ALU/PE, PET/PE, mono-PE)',
                        'Le type de produit (café, snacks, aliments pour animaux, compléments)',
                        'Les volumes annuels et les marchés cibles'
                    ]
                },
                'step1Risk': {
                    'title': 'Identifiez les Emballages Complexes',
                    'imageCaption': 'Identifiez les complexes difficiles à recycler pour prioriser les changements',
                    'p1': 'Repérez les matériaux posant problème dans les centres de tri municipaux actuels :',
                    'items': [
                        'Complexes intégrant une feuille d\'aluminium (ALU)',
                        'Films associant plusieurs polymères différents (ex. PET et PE collés)',
                        'Produits pour lesquels les clients ou distributeurs exigent déjà des alternatives'
                    ],
                    'highlight': 'Cet audit mettra en évidence un premier groupe de produits pour lesquels la transition vers un matériau recyclable aura le plus d\'impact.'
                },
                'step2': {
                    'title': 'Étape 2 : Concevez des Sachets Monomatériaux Eco Digital pour vos SKU Prioritaires',
                    'imageCaption': 'Convertissez les SKU stratégiques en structures Eco Digital mono-PE',
                    'p1': 'À l\'aide des données d\'audit, redéfinissez les emballages des produits clés pour les rendre 100% recyclables.',
                    'boxTitle': 'Sélectionnez les Produits Candidats',
                    'boxItems': [
                        'Ciblez vos produits phares, les lignes à fort volume ou les formats soumis à des échéances distributeurs',
                        'Commencez par les structures les plus simples (ex. PET/PE) pour lesquelles la transition vers le mono-PE is directe'
                    ]
                },
                'step2Redesign': {
                    'title': 'Colabore avec Achieve Pack pour le Redéveloppement Technique',
                    'imageCaption': 'L\'impression numérique permet de tester des prototypes sans frais de clichés',
                    'items': [
                        'Reconfigurez vos emballages vers des sachets Eco Digital mono-PE, associant conservation et recyclabilité',
                        'Utilisez des polymères PE haute barrière pour remplacer l\'aluminium traditionnel',
                        'Procédez à des tests de validation : étanchéité des soudures, chute, perforation et barrière'
                    ],
                    'highlight': 'Puisque la technologie Eco Digital repose sur l\'impression numérique, vous pouvez réaliser des tirages d\'essais sans investissement initial dans des cylindres ou clichés d\'impression.'
                },
                'step3': {
                    'title': 'Étape 3 : Déployez, Optimisez et Ajoutez du PCR et du Bio-PE',
                    'imageCaption': 'Étendez le monomatériau à toute la gamme et intégrez des options écologiques',
                    'p1': 'Après le succès des premiers produits, entamez le déploiement généralisé et l\'optimisation.',
                    'boxTitle': 'Généralisation de l\'Emballage Recyclable',
                    'boxItems': [
                        'Remplacez progressivement vos anciens complexes par des options Eco Digital mono-PE',
                        'Définissez les priorités selon vos volumes, marges et contraintes logistiques',
                        'Harmonisez les emballages autour de quelques références de films mono-PE'
                    ]
                },
                'step3Optimize': {
                    'title': 'Optimisation des Matériaux et Options Écologiques',
                    'imageCaption': 'Opportunités de réduction d\'épaisseur et d\'optimisation de matière',
                    'boxes': [
                        {
                            'title': 'Optimisation des Épaisseurs',
                            'desc': 'Réduisez l\'épaisseur des films en vous basant sur les tests pour diminuer la masse globale de plastique.'
                        },
                        {
                            'title': 'Intégration de Matière PCR',
                            'desc': {
                                'part1': 'Ajoutez du ',
                                'link': 'PE recyclé PCR',
                                'part2': ' dans les couches internes pour économiser le plastique vierge.'
                            }
                        },
                        {
                            'title': 'Intégration de Bio-PE',
                            'desc': {
                                'part1': 'Remplacez le PE fossile par du ',
                                'link': 'bio-PE végétale',
                                'part2': ' dans les couches pour valoriser votre démarche.'
                            }
                        }
                    ],
                    'footer': 'La recyclabilité 100% demeure le socle, le PCR et le bio-PE agissant comme des optimisations écologiques additionnelles.'
                },
                'pitfalls': {
                    'title': 'Les Pièges Courants et Comment les Éviter',
                    'intro': 'Les PME peuvent accélérer la transition en évitant des erreurs fréquentes :',
                    'items': [
                        {
                            'title': 'Modifier toute la gamme simultanément',
                            'desc': 'Vouloir tout redessiner en parallèle sature les ressources. Une transition progressive est plus sûre et maîtrisée.'
                        },
                        {
                            'title': 'Ignorer les filières de tri locales',
                            'desc': 'Un emballage recyclable en théorie doit correspondre aux capacités réelles de collecte des pays de vente.'
                        },
                        {
                            'title': 'Négliger les tests de conditionnement',
                            'desc': 'Les nouveaux films réagissent différemment sur machine. Réalisez des essais physiques pour valider le scellage.'
                        }
                    ],
                    'footer': 'Une approche méthodique et l\'accompagnement par un partenaire expert comme Achieve Pack minimisent grandement ces risques.'
                },
                'support': {
                    'title': 'Comment Achieve Pack Vous Accompagne',
                    'intro': 'Durant toutes les étapes de la transition, Achieve Pack vous fournit :',
                    'cards': [
                        {
                            'title': 'Expertise Structurelle',
                            'desc': 'Conseils techniques pour simplifier vos complexes vers le mono-PE et étude d\'alternatives comme le compostable.'
                        },
                        {
                            'title': 'Flexibilité Eco Digital',
                            'desc': 'Quantités minimales de commande réduites et impression numérique pour valider des prototypes sans investissement lourd.'
                        },
                        {
                            'title': 'Documentation Technique',
                            'desc': 'Fiches techniques et certificats de recyclabilité, PCR ou origine végétale pour crédibiliser vos déclarations.'
                        }
                    ]
                },
                'faqs': [
                    {
                        'question': 'Combien de temps prend la transition vers des sachets recyclables ?',
                        'answer': 'La plupart des PME réalisent ce projet en 12-24 mois. L\'audit prend 2-4 semaines, la conception et la validation des produits clés 3-6 mois, le reste étant un processus continu. L\'impression numérique accélère notablement ces plazos.'
                    }
                ],
                'cta': {
                    'title': 'Prêt à Lancer Votre Transition vers le Recyclable ?',
                    'p1': 'Disposer d\'une gamme d\'emballages 100% recyclables est accessible lorsque le projet est mené par étapes et avec l\'accompagnement technique adapté.',
                    'p2': 'Pour passer du projet à l\'action, Achieve Pack vous accompagne pour :',
                    'items': [
                        'Réaliser l\'audit technique de vos emballages actuels',
                        'Développer vos SKU prioritaires avec des films Eco Digital mono-PE',
                        'Planifier le déploiement généralisé en intégrant le PCR ou le bio-PE'
                    ],
                    'btnConsultation': 'Réserver une Consultation Gratuite',
                    'btnSamples': 'Demander des Échantillons',
                    'btnStore': 'Voir la Boutique'
                }
            },
            'whatIsRecyclable': {
                'title': 'Que Signifie "100% Recyclable" pour des Sachets Souples ? | Achieve Pack',
                'description': 'Le guide complet des emballages flexibles recyclables : comprenez la différence entre théorie et réalité, pourquoi le Mono-PE est le standard et comment les PME peuvent l\'adopter.',
                'keywords': 'emballage recyclable, mono-PE, sachets recyclables, 100% recyclable, recyclage flexibles, recyclage PE, emballages durables, greenwashing, sachets monomatériaux',
                'ogTitle': 'Que Signifie "100% Recyclable" pour des Sachets Souples ?',
                'ogDescription': 'Guide technique pour les marques sur la réalité du recyclage des emballages flexibles.',
                'schemaArticleHeadline': 'Que Signifie "100% Recyclable" pour des Sachets Souples ?',
                'schemaArticleDescription': 'Guide technique pour les PME sur la réalité du recyclage des emballages flexibles.',
                'hero': {
                    'tag': 'Guide des Emballages Recyclables',
                    'title': 'Que Signifie "100% Recyclable" pour des Sachets Souples ?',
                    'subtitle': 'Un guide pour les professionnels afin d\'éviter les affirmations vagues : découvrez la différence entre la théorie et la réalité du recyclage, pourquoi le Mono-PE s\'impose et comment votre marque peut l\'adopter sans compromettre la conservation.',
                    'btnConsultation': 'Réserver une Consultation Gratuite',
                    'btnStore': 'Voir les Sachets Recyclables'
                },
                'intro': {
                    'p1': 'Si vous lisez cet article, vous gérez probablement l\'équilibre permanent propre aux marques en croissance. D\'un côté, les impératifs opérationnels : l\'emballage doit conserver le produit, résister au transport et ressortir en rayon. De l\'autre, la demande de durabilité exigée par les distributeurs, les réglementations et les consommateurs.',
                    'p2': 'Il est fréquent de rencontrer des termes vagues comme "écologique", "vert" ou "recyclable". Pourtant, dans l\'univers des emballages flexibles, le mot "recyclable" recouvre des réalités techniques très précises et suscite parfois des confusions.',
                    'p3': 'En tant que conseillers techniques, nous privilégions les données objectives face au marketing superficiel. Analysons ce que signifie réellement "100% recyclable" pour un sachet souple et comment votre marque peut s\'adapter en toute sécurité.'
                },
                'section1': {
                    'title': '1. L\'Illusion de la Recyclabilité et les Déclarations Trompeuses',
                    'imageCaption': 'Différences entre les arguments marketing et la réalité du tri',
                    'p1': 'De nombreux emballages flexibles traditionnels affichent des logos de recyclage. Pourtant, historiquement, les sachets souples sont des complexes associant des films de matières différentes soudées entre elles, impossibles à séparer mécaniquement.',
                    'p2': 'Pour obtenir la barrière indispensable contre l\'oxygène et l\'humidité, les fabricants complexaient du PET, du nylon ou du PP avec de l\'aluminium. Bien que chaque matériau soit recyclable séparément, le complexe assemblé avec des adhésifs devient un déchet que les usines classiques ne peuvent trier.',
                    'highlight': 'La Réalité Technique : Qualifier ces emballages multicouches de "recyclables" sous prétexte qu\'ils contiennent des polymères recyclables est inexact. Dans les filières de tri classiques, ils agissent comme des polluants.'
                },
                'section2': {
                    'title': '2. L\'Écart entre Recyclabilité Théorique et Réelle',
                    'imageCaption': 'Comment les centres de tri (MRF) orientent les emballages flexibles',
                    'p1': 'Il est crucial de saisir la différence entre la recyclabilité théorique en laboratoire et celle constatée dans le système industriel réel.',
                    'p2': 'La recyclabilité technique est un concept de recherche. Elle indique qu\'il est chimiquement possible de séparer les films. Mais la gestion publique des déchets fonctionne sous des contraintes d\'échelle et de rentabilité économique.',
                    'p3': 'Le recyclage réel dépend des infrastructures. La plupart des centres de tri utilisent des lecteurs optiques infrarouge (NIR) et des bassins de flottation pour séparer les plastiques automatiquement.',
                    'items': [
                        'L\'Échec du Tri des Complexes : Si un trieur optique identifie la couche externe en PET alors que l\'intérieur est en PE, le sachet est rejeté avec les déchets ménagers non recyclés.',
                        'Impact des Encres et Adhésifs : L\'usage de colles ou d\'encres non compatibles dégrade la qualité de la résine recyclée finale, empêchant sa réutilisation dans la fabrication de nouveaux films.'
                    ]
                },
                'section3': {
                    'title': '3. Définition de "100% Recyclable" pour les Sachets Souples',
                    'imageCaption': 'Mono-PE : La référence en matière d\'emballage flexible recyclable',
                    'p1': 'Pour résoudre le problème des mélanges de plastique, les organisations du secteur (comme CEFLEX en Europe ou l\'APR aux États-Unis) préconisent une solution : le monomatériau.',
                    'p2': 'Pour être compatible avec les centres de tri actuels, un sachet souple doit appartenir à une seule famille de polymères. Le polyéthylène homogène, ou Mono-PE, s\'impose comme la référence.',
                    'listTitle': 'Un emballage 100% recyclable réel doit respecter trois conditions :',
                    'listItems': [
                        'Pureté : Le sachet doit être composé de PE à plus de 90-95% de sa masse totale',
                        'Barrières Compatibles : Les vernis barrières (comme l\'EVOH) doivent être limités aux seuils autorisés (max. 5%)',
                        'Accessoires Homogènes : Les zips, valves et becs verseurs doivent également être fabriqués en PE'
                    ]
                },
                'section4': {
                    'title': '4. La Réponse Pratique : Eco Digital Mono-PE d\'Achieve Pack',
                    'imageCaption': 'Eco Digital Mono-PE : Préservation des propriétés et conformité au tri',
                    'p1': 'Knowing the theory is one thing; finding a supplier who can execute it for a 5,000-unit run is another. This is where many SMEs hit a wall. Big converters often demand MOQs of 50,000 or 100,000 units.',
                    'p2': 'Achieve Pack a conçu sa gamme Eco Digital pour répondre à cette attente, en rendant les emballages durables accessibles dès des volumes réduits.',
                    'items': [
                        {
                            'title': 'Préservation des Saveurs :',
                            'desc': 'La technologie barrière intégrée (avec de l\'EVOH contrôlé sous les 5%) préserve les arômes et l\'étanchéité des produits sans altérer le recyclage.'
                        },
                        {
                            'title': 'Impression Directe de Qualité sans Étiquette :',
                            'desc': 'L\'impression numérique directe HP Indigo sur le PE élimine le besoin d\'étiquettes adhésives, réduisant les polluants chimiques lors du recyclage.'
                        },
                        {
                            'title': 'Pas de Frais de Clichés :',
                            'desc': 'Permet de lancer des tirages de test pour valider de nouveaux designs sans investissement initial lourd.'
                        }
                    ]
                },
                'advanced': {
                    'title': 'Matières Innovantes : Bio-PE et PCR',
                    'imageCaption': 'PE recyclage infrastructure couverture par zones',
                    'p1': 'Pour les marques engagées, la structure Mono-PE sert de base à l\'intégration de technologies vertes complémentaires :',
                    'cards': [
                        {
                            'title': 'Bio-PE (Polyéthylène Végétal)',
                            'desc': 'Polyéthylène issu d\'éthanol de canne à sucre plutôt que du pétrole. Son comportement de recyclage est identique au PE fossile.'
                        },
                        {
                            'title': 'PCR (Recyclé Post-Consommation)',
                            'desc': 'Nous intégrons du PE recyclé PCR dans les couches intermédiaires pour stimuler le tri et la régénération plastique.'
                        }
                    ]
                },
                'labeling': {
                    'title': '5. Marquage : Clarté et Transparence de la Communication',
                    'imageCaption': 'Une communication transparente renforce le lien avec le consommateur',
                    'p1': 'Nous recommandons d\'éviter les termes écologiques flous. L\'honnêteté sur le sachet est le meilleur argument de vente.',
                    'avoidTitle': 'Ce qu\'il faut éviter :',
                    'avoidItems': [
                        'Les allégations vagues type "100% Éco" sans données factuelles pour les soutenir',
                        'Des consignes de tri ambiguës qui perturbent le consommateur',
                        'Des promesses déconnectées des capacités de traitement locales'
                    ],
                    'recommendTitle': 'Mention Recommandée sur l\'Emballage :',
                    'recommendText': '"Cet emballage a été conçu avec un seul matériau (Mono-PE) pour faciliter son recyclage. Veuillez le déposer dans les points de collecte de plastiques souples locaux."'
                },
                'pathForward': {
                    'title': '6. Aller de l\'Avant : Transition Progressive des Emballages',
                    'imageCaption': 'Pilotez votre transition écologique de manière sécurisée',
                    'p1': 'La réglementation internationale (telle que la future directive européenne sur les emballages) fixe des échéances strictes. Les emballages non recyclables seront soumis à des taxes accrues dans un avenir proche.',
                    'p2': 'Il est normal que les marques s\'interrogent sur la qualité des soudures ou de la conservation lors du changement de structure. Notre service technique sécurise ces étapes.',
                    'approachTitle': 'Notre Méthodologie Recommandée :',
                    'approachItems': [
                        {
                            'title': 'Débutez par un seul SKU',
                            'desc': 'Menez la transition sur un produit pilote pour évaluer le comportement sur le terrain.'
                        },
                        {
                            'title': 'Profitez des Petits Volumes',
                            'desc': 'Utilisez nos seuils de commande réduits pour tester les nouveaux sachets dans vos conditions réelles de logistique.'
                        },
                        {
                            'title': 'Demandez une Analyse Technique',
                            'desc': 'Envoyez-nous les spécifications de votre emballage actuel, nous vous proposerons sa correspondance en Mono-PE aux performances équivalentes.'
                        }
                    ]
                },
                'faqs': [
                    {
                        'question': 'Qu\'est-ce que le Mono-PE et pourquoi est-il le standard ?',
                        'answer': 'C\'est un emballage fabriqué uniquement avec des polyéthylènes. Il s\'agit du standard de recyclabilité car le PE souple est l\'un des plastiques les plus couramment recyclés dans le monde.'
                    },
                    {
                        'question': 'Pourquoi les sachets multicouches classiques ne se recyclent-ils pas ?',
                        'answer': 'Parce qu\'ils associent des plastiques de points de fusion différents et des métaux avec des colles. Lors du recyclage, ils se séparent et polluent la matière.'
                    }
                ],
                'cta': {
                    'title': 'Souhaitez-vous Étudier des Emballages Souples Réellement Recyclables ?',
                    'p1': 'La transition est simple lorsqu\'elle est accompagnée par nos techniciens. Faisons le point sur vos emballages actuels.',
                    'btnConsultation': 'Réserver une Consultation Gratuite',
                    'btnSamples': 'Demander des Échantillons',
                    'btnStore': 'Voir la Boutique'
                }
            }
        }
    }
}

file_path = 'src/locales/fr.json'
if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    deep_merge(data, translations)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Successfully merged translations into {file_path}")
else:
    print(f"Error: {file_path} not found")
