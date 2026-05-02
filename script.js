let notes = [];
function addNote(){
    const input = document.getElementById("intext");
    if(input.value == "") return;
    notes.push(input.value);
    input.value = "";
    console.log(notes);
    renderNotes();
}
function renderNotes(){
    const list = document.getElementById("notes-list");
    list.innerHTML = "";
    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${note}<button onclick="deleteNote(${index})">X</button>`;
        li.className = "note-item";
        list.appendChild(li);
    });
}
function deleteNote(index){
    notes.splice(index, 1);
    renderNotes();
}