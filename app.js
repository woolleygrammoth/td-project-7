// Close alert notification 
const xButton = document.querySelector('.alert-close');
xButton.addEventListener('click', () => {
    const div = document.querySelector('.alert-bar');
        div.classList.add('removed');

        setTimeout(() => {div.parentNode.removeChild(div)}, 750);
})