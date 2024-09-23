function openModal(imageId, title, description) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    // Check if the image is in the "portrait" folder
    if (imageId.includes("portrait")) {
        modalImage.src = `portrait/${imageId}.jpg`;  // For portraits
    } else {
        modalImage.src = `images/${imageId}.jpg`;    // For watercolor and calligraphy images
    }
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.style.display = "block";
}
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // This hides the modal
}
