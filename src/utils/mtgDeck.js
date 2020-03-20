/**
 * Calculates and returns the average mana cost of the main deck list
 * Each CMC is totaled with consideration to quantities and divided by the mainCnt property
 * CMCs that are zero or less don't need to be considered in totaling
 */
export function calcManaAvg(deck) {
    const { main } = deck.list;
    const { mainCnt } = deck.info;
    let avg = 0;
 
    main.forEach(card => {
        try{
            if(card.cmc && card.cmc > 0) {
                avg += (card.cmc * card.quantity);
            }
        }
        catch(ex) {}//Ignore
    });

    avg = avg / mainCnt;
    return avg;
}

/**
 * Estimates the color identity of the main deck list and returns an array containing the 
 * colors. Each color is given a totaled value based on each occurrance of it in the deck list.
 * Colors that account for 20% or more of the deck are included in the returned array
 */
export function calcDeckColors(deck) {
    let black = 0, green = 0, blue = 0, white = 0, red = 0;
    const { main } = deck.list;
    const { mainCnt } = deck.info;
    const colorsList = [];

    main.forEach(card => { //Iterate through decklist, for each card, check its colors
        try{
            if(card.colors.length > 0) { //Iterate through colors array
                card.colors.forEach(color => {
                    if(color === 'Black') black += card.quantity;
                    else if(color === 'Red') red += card.quantity;
                    else if(color === 'Blue') blue += card.quantity;
                    else if(color === 'White') white += card.quantity;
                    else if(color === 'Green') green += card.quantity;
                })
            }
        }
        catch(ex) {}//Ignore this card
    });

    if(black >= mainCnt * .15) colorsList.push("Black");
    if(red >= mainCnt * .15) colorsList.push("Red");
    if(green >= mainCnt * .15) colorsList.push("Green");
    if(white >= mainCnt * .15) colorsList.push("White");
    if(blue >= mainCnt * .15) colorsList.push("Blue");
    
    return {
        colorIdentity: getColorIdentity(colorsList),
        colors: colorsList
    }
}

/**
 * Determines what to categorize a deck's color is, based on the result of the calculated colors list
 * Returns a string naming the deck's color identity
 */
export function getColorIdentity(colorsList){
    if(colorsList.length === 0) return "Colorless";
    else if(colorsList.length === 1) return ("Mono-" + colorsList[0]);
    else if(colorsList.length === 2) return (colorsList[0] + ", " + colorsList[1]);
    else if(colorsList.length === 3) return (colorsList[0] + ", " + colorsList[1] + ", " + colorsList[2]);
    else if(colorsList.length >= 4) return "Rainbow";
    else{
        console.error("Could not discern deck color identity");
    }
}
