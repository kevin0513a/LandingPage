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
    }, 3000)

    setTimeout(() => {
        const show = document.createElement('i');
        show.classList = 'show-message';
        show.textContent = `Sus preguntas o peticiones se mostrarán aquí:`;
        questions.appendChild(show);
    }, 4000);

    const lineBreak = document.createElement('br');
    questions.appendChild(lineBreak);

    // Habilitar input y botón
    inputField.disabled = false;
    searchButton.disabled = false;

    let enteredQuestions = 0;

    // Escuchar evento "Enter" en el campo de entrada
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const question = inputField.value.trim();
            if (question) {
                enteredQuestions++;

                // Agregar la pregunta al cuadro de questions con enumeración
                const questionElement = document.createElement('p');
                questionElement.textContent = `Pregunta ${enteredQuestions}: ${question}`;
                questions.appendChild(questionElement);

                inputField.value = ''; // Limpiar el campo de entrada

                // Deshabilitar input si se alcanza el número máximo de preguntas
                if (enteredQuestions >= inputNumber) {
                    inputField.disabled = true;
                    searchButton.disabled = true;
                    inputField.value = `Haz ingresado ${inputNumber} preguntas. ¡Gracias!`;
                }
            }
        }
    });
});


// Obtenemos el valor del switch -->
document.getElementById('switch').addEventListener('change', (e) => {
    if (e.target.checked) {
        console.log('El switch está activado');
    } else console.log('El switch está desactivado');
    const bodyStyle = document.querySelector('body');
    const headerTitle = document.getElementById('headerTitle');
    bodyStyle.style.transition = 'all 0.5s ease';
    headerTitle.style.transition = 'all 0.5s ease';
    bodyStyle.classList.toggle('dark-body');
    headerTitle.classList.toggle('dark-header-title');

    document.querySelectorAll('.button-card').forEach(el => {
        el.classList.toggle('dark-button');
    });
});

