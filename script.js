function openModal(imageId, title, description) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    modalImage.src = `images/${imageId}.jpg`; // Update image path based on ID
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
