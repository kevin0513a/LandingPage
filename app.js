function mostrarValores() {
    const valorInput = document.getElementById('valor').value;
    console.log(valorInput)
}


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
})