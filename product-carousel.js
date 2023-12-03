var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleControls'));

carousel._element.addEventListener('slid.bs.carousel', function (event) {
    // Dobij trenutni indeks aktivne stavke u karuselu
    var currentIndex = carousel._activeIndex;

    // Sakrij sve naslove i opise proizvoda
    var allTitles = document.querySelectorAll('.section-title');
    allTitles.forEach(function (element) {
        element.classList.add('d-none');
    });

    var allDescriptions = document.querySelectorAll('[id^="product-description"]');
    allDescriptions.forEach(function (element) {
        element.classList.add('d-none');
    });

    // Prikazi trenutni naslov i opis proizvoda
    var currentTitle = document.getElementById('product-title' + currentIndex);
    currentTitle.classList.remove('d-none');

    var currentDescription = document.getElementById('product-description' + currentIndex);
    currentDescription.classList.remove('d-none');

    // Dodaj posebnu proveru za prikaz naslova i opisa za 2. i 3. stavku
    if (currentIndex === 1 || currentIndex === 2) {
        document.getElementById('product-title0').classList.remove('d-none');
        document.getElementById('product-description0').classList.remove('d-none');
    }

    // Dodaj posebnu proveru kada se karusel vraća na početnu tačku
    if (event.direction === "right" && currentIndex === 0) {
        // Ponovno prikaži naslov i opis za prvu stavku
        document.getElementById('product-title0').classList.remove('d-none');
        document.getElementById('product-description0').classList.remove('d-none');
    }
});
