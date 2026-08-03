const form = document.getElementById('flashcard-form');
const cameraBtn = document.getElementById('camera-trigger-btn');
const fileBtn = document.getElementById('file-trigger-btn');
const cameraInput = document.getElementById('camera-input');
const fileInput = document.getElementById('file-input');
const fileStatus = document.getElementById('selected-file-name');
const wordInput = document.getElementById('card-word');
const cardsContainer = document.getElementById('cards-container');

let flashcards = JSON.parse(localStorage.getItem('myVisualFlashcards')) || [];
let selectedFile = null;

// Trigger hidden camera input
cameraBtn.addEventListener('click', () => {
    cameraInput.click();
});

// Trigger hidden file input
fileBtn.addEventListener('click', () => {
    fileInput.click();
});

// Handle Camera Image selection
cameraInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
        selectedFile = e.target.files[0];
        fileStatus.textContent = `Captured: ${selectedFile.name || 'Photo'}`;
        fileStatus.style.color = '#27ae60';
        cameraBtn.classList.add('active');
        fileBtn.classList.remove('active');
    }
});

// Handle File/Gallery Image selection
fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
        selectedFile = e.target.files[0];
        fileStatus.textContent = `Selected: ${selectedFile.name}`;
        fileStatus.style.color = '#27ae60';
        fileBtn.classList.add('active');
        cameraBtn.classList.remove('active');
    }
});

function saveToLocalStorage() {
    try {
        localStorage.setItem('myVisualFlashcards', JSON.stringify(flashcards));
    } catch (e) {
        alert("Storage limit reached! Please delete some old cards before adding new ones.");
    }
}

function renderCards() {
    cardsContainer.innerHTML = '';
    
    flashcards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('flashcard');

        cardElement.innerHTML = `
            <button class="delete-btn" onclick="deleteCard(${index}, event)" title="Delete Card">×</button>
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <img src="${card.image}" alt="Flashcard image">
                </div>
                <div class="flashcard-back">
                    <span>${card.word}</span>
                </div>
            </div>
        `;

        cardElement.addEventListener('click', () => {
            cardElement.classList.toggle('is-flipped');
        });

        cardsContainer.appendChild(cardElement);
    });
}

// Handle Form Submission
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const word = wordInput.value.trim();

    if (!selectedFile) {
        alert("Please take a photo or select an image file first.");
        return;
    }

    if (selectedFile && word) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const base64Image = event.target.result;
            
            flashcards.push({
                image: base64Image,
                word: word
            });

            saveToLocalStorage();
            renderCards();
            
            // Reset form
            form.reset();
            selectedFile = null;
            fileStatus.textContent = "No image selected";
            fileStatus.style.color = "#7f8c8d";
            cameraBtn.classList.remove('active');
            fileBtn.classList.remove('active');
        };

        reader.readAsDataURL(selectedFile);
    }
});

// Delete a card function
window.deleteCard = function(index, event) {
    event.stopPropagation();
    flashcards.splice(index, 1);
    saveToLocalStorage();
    renderCards();
}

renderCards();
