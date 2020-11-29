
let counter = 2; //how many notes already in array

var notesArray = [];
var noteOne = {title: "note one", body: "some text 1"};
var noteTwo = {title: "note two", body: "some text 2"};
notesArray.push(noteOne);
notesArray.push(noteTwo);

// Event Listeners

document.querySelector("#dark-theme-button").addEventListener("click", function () {
    if(document.querySelector("#dark-theme-button").innerText == "Dark Theme") {
        toggleDarkTheme();
    }else {
        toggleLightTheme();
    }

})

document.querySelector("#cancel-button").addEventListener("click", hideItems);

document.querySelector("#new-note-button").addEventListener("click", newNote);

document.querySelector("#save-button").addEventListener("click", saveNote);

document.querySelector("#note1").addEventListener("click", function () { displayBody(this, notesArray);});
document.querySelector("#note2").addEventListener("click", function () { displayBody(this, notesArray);});

// document.querySelector("#save-button").addEventListener("click", saveNote);





//Functions called by event listeners

function toggleDarkTheme () {
    //Actived by Dark Theme button 
    //This func adds dark theme css classes and remove light ones
    //Changes button to Light theme

    document.getElementById("nav").classList.add("dark-nav");
    document.getElementById("nav").classList.remove("navc");
    

    document.getElementById("container").classList.add("dark-container");
    document.getElementById("container").classList.remove("containerc");

    document.getElementById("dark-theme-button").classList.add("dark-mode-engaged-button");
    document.getElementById("dark-theme-button").classList.remove("dark-button-class")

    document.getElementById("new-note-button").classList.add("dark-mode-engaged-button");
    document.getElementById("new-note-button").classList.remove("new-note-button-class");

    document.getElementById("header").classList.add("dark-header");
    document.getElementById("header").classList.remove("headerc");

    document.getElementById("footer").classList.add("dark-footer");
    document.getElementById("footer").classList.remove("footerc");

    document.getElementById("dark-theme-button").innerText = "Light Theme";



}

function toggleLightTheme () {
    //Activated by Light theme button
    //This func adds light theme css classes and removes the dark theme ones
    //Changes button to Dark theme

    document.getElementById("nav").classList.add("navc");
    document.getElementById("nav").classList.remove("dark-nav");
    

    document.getElementById("container").classList.add("containerc");
    document.getElementById("container").classList.remove("dark-container");
    

    document.getElementById("dark-theme-button").classList.add("dark-button-class");
    document.getElementById("dark-theme-button").classList.remove("dark-mode-engaged-button");

    document.getElementById("new-note-button").classList.add("new-note-button-class");
    document.getElementById("new-note-button").classList.remove("dark-mode-engaged-button");

    document.getElementById("dark-theme-button").innerText = "Dark Theme";
    console.log("success");

}

function hideItems () {
    //Activated by Cancel button
    //This func hides text area, cancel button, save button

    let testArea = document.getElementById("text-area");
    let saveButton = document.getElementById("save-button");
    let cancelButton = document.getElementById("cancel-button");
    testArea.style.display = "none";
    saveButton.style.display = "none";
    cancelButton.style.display = "none";
}

function newNote () {
    //Activated by New Note button
    //This func makes text area, cancel + save buttons visible after they are hidden
    //IF they are not hidden, this func will clear any input in the text book

    let testArea = document.getElementById("text-area");
    let saveButton = document.getElementById("save-button");
    let cancelButton = document.getElementById("cancel-button");

    if(testArea.style.display == "none") {
        testArea.style.display = "block";
    }else{
        document.getElementById("text-area").value = "";
    }

    if(saveButton.style.display == "none") {
        saveButton.style.display = "block";
    }else {
        document.getElementById("text-area").value = "";
    }

    if(cancelButton.style.display == "none") {
        cancelButton.style.display = "block";
    }else{
        document.getElementById("text-area").value = "";
    }
}



function saveNote () {
    //Activated by Save button
    //This func takes the input and splits the first item and the rest into two pieces to be added to an array
    //which will add new notes to the Notes list on the left of the grid
    //Returns the count of saved notes for other functions to use

    
    

    if(document.getElementById("text-area").value != "") {

        
        let firstSpaceIndex = document.getElementById("text-area").value.indexOf(" ");

        //split input into title and body 
        let title = document.getElementById("text-area").value.slice(0, firstSpaceIndex);
        let body = document.getElementById("text-area").value.slice(firstSpaceIndex + 1);

        //create object and append pieces to array
        var newNote = {title: title, body: body};
        notesArray.push(newNote);
        var ul = document.getElementById("list");
        var li = document.createElement("li");

        //create list item with value of title from the user input
        li.appendChild(document.createTextNode(title));
        counter ++;
        li.setAttribute("id", ("note" + counter));

        ul.appendChild(li);
        //adds event listener to new list items
        document.querySelector("#note" + counter).addEventListener("click", function () { displayBody(this, notesArray);});
        
    }
    return notesArray, counter;

}

function displayBody (event, notesArray) {
    //Activated by clicking a list item on the left side of the grid
    //This func will take the title clicked into account and display the matching body stored in the array
    let arr = document.getElementById("list");
    let titleText = event.innerText;
    let arrLength = notesArray.length;
    let notesBody;
    
    for (i = 0; i <= (arrLength - 1); i++) {
        boolCheck = false;
        let notesTitle = notesArray[i].title;

        if (notesTitle == titleText) {
            notesBody = notesArray[i].body;
            console.log(notesBody);
        }else{
            boolCheck = true;
        }
    document.getElementById("text-area").value = notesBody;


}
}


