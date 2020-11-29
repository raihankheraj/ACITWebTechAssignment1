
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

    var notesArray = [];
    var noteOne = {title: "note one", body: "some text 1"};
    var noteTwo = {title: "note two", body: "some text 2"};
    notesArray.push(noteOne);
    notesArray.push(noteTwo);

    if(document.getElementById("text-area").value != "") {

        let firstSpaceIndex = document.getElementById("text-area").value.indexOf(" ");
        let title = document.getElementById("text-area").value.slice(0, firstSpaceIndex);
        let body = document.getElementById("text-area").value.slice(firstSpaceIndex + 1);
        var newNote = {title: title, body: body};
        notesArray.push(newNote);

        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(title));
        ul.appendChild(li);

        console.log(notesArray);


        
    }

}

// function createCourseArray() {
//     var arrClassInfo = document.getElementsByClassName("left-area");

//     var newArray = [];
//     var courseLength = arrClassInfo.length;

//     var date = document.querySelectorAll(".left-area p");
//     var code = document.querySelectorAll(".left-area a");


//     for (j = 0; j <= (courseLength - 1); j++) {
//         var course = { code: code[j], date: date[j] };
//         newArray.push(course);


//     }
//     return newArray
// }
