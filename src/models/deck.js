const deck = {
    info: {
        name: "",
        format: "",
        playstyle: "",
        description: "",
        author: "",
        lastUpdated: "",
        updated: "",
        colors: "",
        cmc: 0,
        mainCnt: 0,
        sideCnt: 0,
        miscCnt: 0,
    },
    list: {
        main: [],
        side: [],
        misc: [],
    }
};

export default function newDeckObj(){
    return deck;
}
