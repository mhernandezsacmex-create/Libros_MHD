// Función para mostrar u ocultar los libros dentro de cada carpeta
document.querySelectorAll('.folder h2').forEach(function(folderTitle) {
    folderTitle.addEventListener('click', function() {
        const bookList = this.nextElementSibling; // La lista de libros que sigue al título
        
        // Si los libros están ocultos, los mostramos, y si están visibles, los ocultamos
        if (bookList.style.display === 'none') {
            bookList.style.display = 'flex';  // Mostrar libros
        } else {
            bookList.style.display = 'none';  // Ocultar libros
        }
    });
});