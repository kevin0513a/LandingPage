document.getElementById('button-validate').addEventListener('click', () => {
    const inputNumber = parseInt(document.getElementById('input-number').value);
    const questions = document.getElementById('questions');

    // Validar que sea un número entre 1 y 4
    if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 4) {
        questions.innerHTML = "Por favor, ingrese un número entre 1 y 4.";
        return;
    }
    questions.innerHTML = `<i>Ingrese sus ${inputNumber} preguntas o peticiones en el cuadro de texto en la parte inferior.</i>`;

    setTimeout(() => {
        questions.innerHTML = '';
    }, 6000);
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

