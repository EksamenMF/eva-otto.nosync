const minusBtn = document.getElementById('minusBtn');
const plusBtn = document.getElementById('plusBtn');
const countBox = document.getElementById('countBox');

// Opret en variabel til tælleren
let count = 0;

// Funktion til at opdatere boksen
function updateCount() {
    countBox.textContent = count;
}

// Minus-knap event
minusBtn.addEventListener('click', () => {
    count -= 100;
    updateCount();
});

// Plus-knap event
plusBtn.addEventListener('click', () => {
    count += 100;
    updateCount();
});