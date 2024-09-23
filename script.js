// Function to open the modal with the clicked image and its description
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

    modal.style.display = "block"; // Show the modal
}

// Function to close the modal when the close button is clicked
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Hide the modal
}

// Optional: Close modal if user clicks anywhere outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none"; // Close the modal if clicking outside
    }
};
