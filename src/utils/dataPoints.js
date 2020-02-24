export function getColumnChartData(deckList) {
    const dataPoints = [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 0 },
        { x: 5, y: 0 },
        { x: 6, y: 0 },
        { x: 7, y: 0 },
        { x: 8, y: 0 },
        { x: 9, y: 0 },
        { x: 10, y: 0 }
    ];

    if(deckList) deckList.forEach(card => {
        if(card.type)
            if(card.type.includes('Land')) return;

        if(card.cmc || card.cmc === 0){
            if(card.cmc <= 0) dataPoints[0].y += card.quantity;
            else if(card.cmc >= 10) dataPoints[10].y += card.quantity;
            else dataPoints[card.cmc].y += card.quantity;
        }
        
    });

    return dataPoints;
}

export function getPieChartData(deckList) {
    const dataPoints = [
        { y: 0, label: "Blue" , color: 'DodgerBlue'},
        { y: 0, label: "Green", color: 'MediumSeaGreen' },
        { y: 0, label: "Red", color: 'Tomato' },
        { y: 0, label: "White" , color: 'LemonChiffon' },
        { y: 0, label: "Black", color: 'Silver'},
        { y: 0, label: "Neutral", color: 'GhostWhite'},
        { y: 0, label: "Multiple", color: 'Plum'},
    ];

    let sum = 1;
    if(deckList) {
        deckList.forEach(card => {
            sum += card.quantity;

            if(card.colorIdentity.length > 1) dataPoints[6].y += card.quantity;
            else if(card.colorIdentity[0] === "U") dataPoints[0].y += card.quantity;
            else if(card.colorIdentity[0] === "G") dataPoints[1].y += card.quantity;
            else if(card.colorIdentity[0] === "R") dataPoints[2].y += card.quantity;
            else if(card.colorIdentity[0] === "W") dataPoints[3].y += card.quantity;
            else if(card.colorIdentity[0] === "B") dataPoints[4].y += card.quantity;
            else dataPoints[5].y += card.quantity;
            
        });
    }

    const filteredPoints = dataPoints.filter(element => element.y !== 0);
    filteredPoints.forEach(point => {
        point.y = Math.round(point.y / sum * 100);
    });
    

    return filteredPoints;
}
