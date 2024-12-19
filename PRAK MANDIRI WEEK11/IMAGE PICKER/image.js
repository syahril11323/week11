function displayImage() {
    // Ambil elemen dropdown dan elemen gambar
    const imageSelector = document.getElementById('imageSelector');
    const displayedImage = document.getElementById('displayedImage');

    // Ambil nilai yang dipilih
    const selectedImage = imageSelector.value;

    if (selectedImage) {
        // Tampilkan gambar di bawah dropdown
        displayedImage.src = selectedImage;
        displayedImage.style.display = 'block';

        // Tampilkan alert dengan nama file
        alert(`Ini gambar ${selectedImage}`);
    } else {
        // Sembunyikan gambar jika tidak ada pilihan
        displayedImage.style.display = 'none';
    }
}
