/**
 * @author Lothaire Guée
 * @description
 *      Contains the function linked to the database.
 */


/* ----------------------------------------------- */
/* DATABASES INITILIZATION                         */
/* ----------------------------------------------- */
const Enmap = require("enmap");

// PRESENCE AND MEMES DATABASE INIT
const presence = new Enmap({name: "presence"});

// Un-comment to set memes and presences into the database
const { STATES } = require("../files/states");
setStates();

/* ----------------------------------------------- */
/* FUNCTIONS                                       */
/* ----------------------------------------------- */

async function setStates(){
    // PRESENCE
    presence.clear();
    for(let i=0; i < STATES.length; i++){
        presence.set(STATES[i])
    }
    console.log("Toutes les données memes / presence ont été chargé !")
}



/* ----------------------------------------------- */
/* MODULE EXPORTS                                  */
/* ----------------------------------------------- */
module.exports = {
    presence,
}