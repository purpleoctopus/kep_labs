let imagesArray = [
    { path: 'images/1.jpg', title: 'Кайфічний светрик', description: 'Теплий і прикольний светр' },
    { path: 'images/2.jpg', title: 'Крутецька сукня', description: 'Потужна сукня, яка доповнить ваш образ' },
    { path: 'images/3.jpg', title: 'Червоні каблуки', description: 'Класні каблуки, гострі як ніж' }
];

function initPhotoRotator(rotatorId, imagesArray) {
    const rotator = document.getElementById(rotatorId);
    let currentIndex = 0;

    const backButton = document.createElement('a');
    backButton.href = "javascript:void(0)"

    const container = document.createElement('div')
    const imageElement = document.createElement('img');
    const titleElement = document.createElement('h2');
    const descriptionElement = document.createElement('p');
    const counterElement = document.createElement('p');

    const nextButton = document.createElement('a');
    nextButton.href = "javascript:void(0)"
    
    backButton.innerText = 'Назад';
    nextButton.innerText = 'Вперед';

    function updateContent() {
        const currentImage = imagesArray[currentIndex];

        imageElement.src = currentImage.path;
        titleElement.innerText = currentImage.title;
        descriptionElement.innerText = currentImage.description;
        counterElement.innerText = `Зображення ${currentIndex + 1} з ${imagesArray.length}`;

        backButton.style.display = currentIndex === 0 ? 'hidden' : 'visible';
        nextButton.style.visibility = currentIndex === imagesArray.length - 1 ? 'hidden' : 'visible';
    }

    backButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateContent();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentIndex < imagesArray.length - 1) {
            currentIndex++;
            updateContent();
        }
    });

    rotator.appendChild(backButton);
    rotator.appendChild(container);
    rotator.appendChild(nextButton);
    container.appendChild(counterElement);
    container.appendChild(imageElement);
    container.appendChild(titleElement);
    container.appendChild(descriptionElement);

    updateContent();
}

initPhotoRotator('rotator', imagesArray);