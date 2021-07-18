// Here I get all the div's tag
let allAudios = document.querySelectorAll("[data-note]");

// Here I create and store the Guitar strings
const notes = {
    "1st_String" : new Audio ("eString.mp3"),
    "2nd_String" : new Audio ("aString.mp3"),
    "3rd_String" : new Audio ("dString.mp3"),
    "4th_String" : new Audio ("gString.mp3"),
    "5th_String" : new Audio ("bString.mp3"),
    "6th_String" : new Audio ("eLastString.mp3")
}
const electronicNotes = {
    "1st_String" : new Audio ("EElectricString.mp3"),
    "2nd_String" : new Audio ("AElectricString.mp3"),
    "3rd_String" : new Audio ("DElectricString.mp3"),
    "4th_String" : new Audio ("GElectricString.mp3"),
    "5th_String" : new Audio ("BElectricString.mp3"),
    "6th_String" : new Audio ("ELastElectricString.mp3")
}

// Here I have the number of the keyCode of the console
// and set it equal to the audio of the string
const keys = {
    81 : "1st_String",
    87 : "2nd_String",
    69 : "3rd_String",
    73 : "4th_String",
    79 : "5th_String",
    80 : "6th_String"
}

// Here we create a addEventListener to each case 
allAudios.forEach(item => {
    item.addEventListener("mousedown", playNote)
})

let button = false;
let btn = document.getElementById("off")
btn.addEventListener("click", changeTune)
console.log(button)

function changeTune(event) {
    button = !button
    if (button == true) {
        btn.style.transform = "rotate(27deg)"
    } else {
        btn.style.transform = "rotate(-17deg)"

    }
}

// Here we have the function either for mousedown or keydown
window.addEventListener("keydown", playNote)
function playNote(event) { 
    if (button == false) {
        if(event.type =="keydown"){
            if(!keys[event.keyCode]){
                return
            }
            play(notes[keys[event.keyCode]])
            return
        }
        play(notes[event.target.dataset.note])
        
    } else  {
        if(event.type =="keydown"){
            if(!keys[event.keyCode]){
                return
            }
            play(electronicNotes[keys[event.keyCode]])
            return
        }
        play(electronicNotes[event.target.dataset.note])
        
    
    }
        
   
}

//Here we have the function that play the audio 
// and if you double click the sound reset and play again
function play(audio) {
    if(!audio.paused){
        audio.pause()
        audio.currentTime = 0;
    }
    audio.play()
}

