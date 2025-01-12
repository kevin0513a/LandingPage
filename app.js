document.getElementById('button-validate').addEventListener('click', () => {
    const inputNumber = parseInt(document.getElementById('input-number').value);
    const questions = document.getElementById('questions');
    const inputField = document.getElementById('input');
    const searchButton = document.getElementById('button-search');

    // Validar que sea un número entre 1 y 4
    if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 4) {
        questions.classList = 'show-message';
        questions.innerHTML = "Por favor, ingrese un número entre 1 y 4.";
        inputField.disabled = true; // Deshabilitar input si no es válido
        searchButton.disabled = true; // Deshabilitar botón también
        return;
    }

    // Mostrar mensaje inicial
    questions.innerHTML = `<i class="show-message">Ingrese sus ${inputNumber} preguntas o peticiones en el cuadro de texto en la parte inferior.</i>`;
    setTimeout(() => {
        questions.innerHTML = '';
    }, 2000)

    setTimeout(() => {
        const show = document.createElement('i');
        show.classList = 'show-message';
        show.textContent = `Sus preguntas o peticiones se mostrarán aquí:`;
        questions.appendChild(show);
    }, 2000);

    // Habilitar input y botón
    inputField.disabled = false;
    searchButton.disabled = false;

    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleQuestions();
        }
    });

    searchButton.addEventListener('click', () => {
        handleQuestions();
    });

    let enteredQuestions = 0;

    function handleQuestions() {
        const question = inputField.value.trim();
        if (question) {
            enteredQuestions++;

            // Agregar la pregunta al box de questions -->
            const questionElement = document.createElement('i');
            questionElement.style.color = 'black'
            questionElement.textContent = `Pregunta ${enteredQuestions}: ${question}`;
            questions.appendChild(questionElement);

            inputField.value = ''; // Limpiar el campo de entrada <--

            // Deshabilitar input si se alcanza el número máximo de preguntas -->
            if (enteredQuestions >= inputNumber) {
                inputField.disabled = true;
                searchButton.disabled = true;
                inputField.value = `Haz ingresado ${inputNumber} preguntas. ¡Gracias!`;
                inputField.style.color = 'gray';
            }
        }
    };
});

// Obtenemos el valor del switch -->
document.getElementById('switch').addEventListener('change', (e) => {
    if (e.target.checked) {
        console.log('El switch está activado');
    } else {
        console.log('El switch está desactivado');
    }
    const bodyStyle = document.querySelector('body');
    const headerTitle = document.getElementById('headerTitle');
    bodyStyle.style.transition = 'all 0.5s ease';
    headerTitle.style.transition = 'all 0.5s ease';
    bodyStyle.classList.toggle('dark-body');
    headerTitle.classList.toggle('dark-header-title');

    document.querySelectorAll('.button-card').forEach(el => {
        el.classList.toggle('dark-button');
    });

    // Añadimos la lógica para container-card
    document.querySelectorAll('.container-card').forEach(el => {
        el.classList.toggle('dark-container-card');
    });
});


