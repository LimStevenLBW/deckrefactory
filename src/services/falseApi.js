//Based on https://docs.magicthegathering.io/#api_v1cards_get

const cards = {  
    "cards":[  
        {  
        "name":"Archangel Avacyn",
        "names":[  
            "Archangel Avacyn",
            "Avacyn, the Purifier"
        ],
        "manaCost":"{3}{W}{W}",
        "cmc":5,
        "colors":[  
            "White"
        ],
        "colorIdentity":[
            "W"
        ],
        "type":"Legendary Creature — Angel",
        "supertypes":[  
            "Legendary"
        ],
        "types":[  
            "Creature"
        ],
        "subtypes":[  
            "Angel"
        ],
        "rarity":"Mythic Rare",
        "set":"SOI",
        "text":"Flash\nFlying, vigilance\nWhen Archangel Avacyn enters the battlefield, creatures you control gain indestructible until end of turn.\nWhen a non-Angel creature you control dies, transform Archangel Avacyn at the beginning of the next upkeep.",
        "artist":"James Ryman",
        "number":"5a",
        "power":"4",
        "toughness":"4",
        "layout":"double-faced",
        "multiverseid":409741,
        "imageUrl":"images/artwork/avacyn.png",
        "imageUrlOld":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card",
        "rulings":[  
            {  
            "date":"2016-04-08",
            "text":"Archangel Avacyn’s delayed triggered ability triggers at the beginning of the next upkeep regardless of whose turn it is."
            },
            {  
            "date":"2016-04-08",
            "text":"Archangel Avacyn’s delayed triggered ability won’t cause it to transform back into Archangel Avacyn if it has already transformed into Avacyn, the Purifier, perhaps because several creatures died in one turn."
            },
            {  
            "date":"2016-04-08",
            "text":"For more information on double-faced cards, see the Shadows over Innistrad mechanics article (http://magic.wizards.com/en/articles/archive/feature/shadows-over-innistrad-mechanics)."
            }
        ],
        "foreignNames":[  
            {  
            "name":"大天使艾维欣",
            "language":"Chinese Simplified",
            "multiverseid":410071
            },
            {  
            "name":"大天使艾維欣",
            "language":"Chinese Traditional",
            "multiverseid":410401
            },
            {  
            "name":"Archange Avacyn",
            "language":"French",
            "multiverseid":411061
            },
            {  
            "name":"Erzengel Avacyn",
            "language":"German",
            "multiverseid":410731
            },
            {  
            "name":"Arcangelo Avacyn",
            "language":"Italian",
            "multiverseid":411391
            },
            {  
            "name":"大天使アヴァシン",
            "language":"Japanese",
            "multiverseid":411721
            },
            {  
            "name":"대천사 아바신",
            "language":"Korean",
            "multiverseid":412051
            },
            {  
            "name":"Arcanjo Avacyn",
            "language":"Portuguese (Brazil)",
            "multiverseid":412381
            },
            {  
            "name":"Архангел Авацина",
            "language":"Russian",
            "multiverseid":412711
            },
            {  
            "name":"Arcángel Avacyn",
            "language":"Spanish",
            "multiverseid":413041
            }
        ],
        "printings":[  
            "SOI"
        ],
        "originalText":"Flash\nFlying, vigilance\nWhen Archangel Avacyn enters the battlefield, creatures you control gain indestructible until end of turn.\nWhen a non-Angel creature you control dies, transform Archangel Avacyn at the beginning of the next upkeep.",
        "originalType":"Legendary Creature — Angel",
        "id":"02ea5ddc89d7847abc77a0fbcbf2bc74e6456559"
        },

        {  
            "name":"Nicol Bolas, Dragon God",
            "manaCost":"{U}{B}{B}{B}{R}",
            "cmc":5,
            "colors":[  
                "Blue"
            ],
            "imageUrl": "images/artwork/nicol.png",
        },
        {  
            "name":"Cultivate",
            "manaCost":"{2}{G}",
            "cmc":3,
            "colors":[  
                "Green"
            ],
            "imageUrl": "images/artwork/cultivate.jpg",
        },
        {  
            "name":"Arcum's Astrolabe",
            "manaCost":"{S}",
            "cmc":1,
            "colors":[  
                ""
            ],
            "imageUrl": "images/artwork/arcum.jpg",
        },
        {  
            "name":"Rakdos Cackler",
            "manaCost":"{BR}",
            "cmc":1,
            "colors":[  
                "Red", "Black"
            ],
            "imageUrl": "images/artwork/cackler.jpg",
        },
        {  
            "name":"Progenitus",
            "manaCost":"{W}{W}{U}{U}{B}{B}{R}{R}{G}{G}",
            "cmc":8,
            "colors":[  
                "Red", "Black", "Green", "Blue", "White"
            ],
            "imageUrl": "images/artwork/progenitus.jpg",
        },
        {  
            "name":"Esper Stormblade",
            "manaCost":"{WB}{U}",
            "cmc":2,
            "colors":[  
                "Blue", "White", "Black"
            ],
            "imageUrl": "images/artwork/esper.jpg",
        },
        {  
            "name":"Mu Yanling, Sky Dancer",
            "manaCost":"{1}{U}{U}",
            "cmc":3,
            "colors":[  
                "Blue"
            ],
            "imageUrl": "images/artwork/mu.jpg",
        },
        {  
            "name":"Ghalta, Primal Hunger",
            "manaCost":"{10}{G}{G}",
            "cmc": 12,
            "colors":[  
                "Green"
            ],
            "imageUrl": "images/artwork/ghalta.jpg",
        },
        {  
            "name":"Rakdos, Lord of Riots",
            "manaCost":"{B}{B}{R}{R}",
            "cmc": 4,
            "colors":[  
                "Black", "Red"
            ],
            "imageUrl": "images/artwork/rakdos.png",
        },
        {  
            "name":"Thassa, God of the Sea",
            "manaCost":"{2}{U}",
            "cmc": 3,
            "colors":[  
                "Blue"
            ],
            "imageUrl": "images/artwork/thassa.jpg",
        },
     ]
}

export function getCards(){
    return cards;
}

