const endDate = "30 August 2025 10:00 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")


function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;
    if(diff<0) return;
    //Convertiing into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    //Converying into hours
    inputs[1].value = Math.floor((diff/3600)% 24);
    //Converting into minutes
    inputs[2].value = Math.floor((diff/60) % 60);
    //Converting into seconds
    inputs[3].value = Math.floor(diff%60);
    
}
// Intitial call
clock()

/**
 * 1 day = 24 hours
 * 1 hour = 60 minutes
 * 60 minutes = 3600 seconds
 */

setInterval (
    () => {
        clock()
    },
    1000
)

