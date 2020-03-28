
function offlineSave() {
    console.log("offline save")
    /*
    const deck = this.state.deck;
    deck.info.lastUpdated = getDate(); //Get date of update
    localStorage.setItem("deck", JSON.stringify(deck));
    toast.success("Deck Successfully Saved");
    */
}

function offlineDelete() {
    console.log("online delete")
    /*
    const shouldDelete = window.confirm("This is a destructive action, are you sure you want to delete your deck?");
    if(shouldDelete) {
        localStorage.removeItem('deck');
        toast.warn("Deck Was Deleted")
    }
    */
}

function onlineSave() {
    console.log("online save")
}

function onlineDelete() {
    console.log("online delete")
}

export default {
    offlineSave: offlineSave,
    offlineDelete: offlineDelete,
    onlineSave, onlineSave,
    onlineDelete, onlineDelete
}
