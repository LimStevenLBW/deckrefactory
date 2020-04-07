import { toast } from 'react-toastify';

/**
 * 
 */
function offlineSave(deck) {
    console.log("offline save")
    if(deck.info.name === "") deck.info.name = "Untitled Deck"; //Set default name
    localStorage.setItem("deck", JSON.stringify(deck));
    toast.success("Deck was saved locally");
}

function offlineDelete() {
    console.log("offline delete")
    
    const shouldDelete = window.confirm("This is a destructive action, are you sure you want to delete your deck?");
    if(shouldDelete) {
        localStorage.removeItem('deck');
        toast.warn("Local deck was deleted")
    }
    
}

function onlineSave() {
    console.log("online save")
}

function onlineDelete() {
    console.log("online delete")
}

/**
 * 
 */
function save(deck, user){
    if(user) onlineSave(deck, user);
    else offlineSave(deck);
}

export default {
    offlineSave: offlineSave,
    offlineDelete: offlineDelete,
    onlineSave: onlineSave,
    onlineDelete: onlineDelete,
    save: save,
}
