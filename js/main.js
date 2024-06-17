// Seleziona l'elemento della griglia di gioco
let gameGrid = document.getElementById('game-grid');

// Crea 100 box utilizzando un ciclo for
for (let i = 1; i <= 100; i++) {
    // Crea un nuovo elemento div
    let newBox = document.createElement('div');

    // Assegna la classe 'cell' al nuovo div
    newBox.className = 'cell';

    // Aggiunge l'evento mouseover al box
    newBox.addEventListener('mouseover', function() {
        // Cambia il colore del box da grigio a rosso quando il mouse passa sopra
        this.style.backgroundColor = '#80FFD4';
    });

    // Aggiunge il box alla griglia di gioco
    gameGrid.appendChild(newBox);
}

// Seleziona il pulsante di riavvio
let restartButton = document.getElementById('restart-button');

// Aggiungi un evento click al pulsante di riavvio
restartButton.addEventListener('click', function() {
    // Ricarica la pagina quando il pulsante viene cliccato
    location.reload();
});
