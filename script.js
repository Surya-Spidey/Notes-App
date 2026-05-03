let notes = [];

// Fetch notes from backend
async function fetchNotes() {
    const res = await fetch("http://localhost:3000/notes");
    const data = await res.json();
    notes = data;
    renderNotes();
}

// Add note
async function addNote() {
    const input = document.getElementById("intext");
    if (input.value === "") return;

    await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ note: input.value })
    });

    input.value = "";
    fetchNotes();
}

// Delete note
async function deleteNote(index) {
    await fetch(`http://localhost:3000/notes/${index}`, {
        method: "DELETE"
    });

    fetchNotes();
}

// Edit note
async function EditNote(index) {
    const newnote = prompt("Edit your note:", notes[index]);

    if (newnote === null || newnote === "") return;

    await fetch(`http://localhost:3000/notes/${index}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ note: newnote })
    });

    fetchNotes();
}

// Render UI
function renderNotes() {
    const list = document.getElementById("notes-list");
    list.innerHTML = "";

    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.className = "note-item";

        const span = document.createElement("span");
        span.textContent = note;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => EditNote(index));

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", () => deleteNote(index));

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}

// Button click
document.getElementById("inbtn").addEventListener("click", addNote);

// Enter key
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addNote();
    }
});

// Initial load
fetchNotes();

