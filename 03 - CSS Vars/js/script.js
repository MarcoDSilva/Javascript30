const controls = document.querySelectorAll('.controls input');

function handleUpdate() {
    const sizing = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sizing);
}

controls.forEach(input => input.addEventListener('change', handleUpdate));
controls.forEach(input => input.addEventListener('mousemove', handleUpdate));