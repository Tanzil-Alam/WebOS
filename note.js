const quickNoteInput = document.getElementById('quickNoteInput');

// Load saved note if available
const savedNote = localStorage.getItem('quick_note_content');
if (savedNote) {
    quickNoteInput.value = savedNote;
}

// Save note on input
quickNoteInput.addEventListener('input', () => {
    localStorage.setItem('quick_note_content', quickNoteInput.value);
});