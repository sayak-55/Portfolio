document.addEventListener("DOMContentLoaded", () => {
  const certificates = [
    {
      title: "PYTHON BOOTCAMP",
      imageUrl: "./assets/images/certificates/certificate1.jpg",
      link: "#"
    },
    {
      title: "AI WORKSHOP",
      imageUrl: "./assets/images/certificates/certificate2.jpg",
      link: "#"
    },
    {
      title: "DSA WITH JAVA",
      imageUrl: "./assets/images/certificates/certificate3.jpg",
      link: "#"
    },
    {
      title: "POWER BI",
      imageUrl: "./assets/images/certificates/certificate4.jpg",
      link: "#"
    }
  ];

  const container = document.getElementById("certificateContainer");

  // Modal elements
  const modal = document.getElementById("certificateModal");
  const modalImage = document.getElementById("modalImage");
  const closeModalBtn = document.getElementById("closeModal");

  // Function to open modal with image
  function openModal(imageSrc, altText) {
    modal.style.display = "flex";
    modalImage.src = imageSrc;
    modalImage.alt = altText;
  }

  // Function to close modal
  function closeModal() {
    modal.style.display = "none";
    modalImage.src = "";
    modalImage.alt = "";
  }

  // Close modal on close button click
  closeModalBtn.addEventListener("click", closeModal);

  // Close modal on clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Clear container before adding certificates
  container.innerHTML = "";

  // Create certificate boxes inside single container
  certificates.forEach(cert => {
    const box = document.createElement("div");
    box.className = "certificate-box";

    const imageDiv = document.createElement("div");
    imageDiv.className = "image-placeholder";

    if (cert.imageUrl) {
      const img = document.createElement("img");
      img.src = cert.imageUrl;
      img.alt = cert.title;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.borderRadius = "1rem";
      img.style.objectFit = "cover";
      imageDiv.appendChild(img);
    } else {
      imageDiv.textContent = "No Image";
    }

    const titleDiv = document.createElement("div");
    titleDiv.className = "certificate-title";
    titleDiv.textContent = cert.title;

    box.appendChild(imageDiv);
    box.appendChild(titleDiv);

    // Add click event to open modal
    box.addEventListener("click", () => {
      openModal(cert.imageUrl, cert.title);
    });

    container.appendChild(box);
  });
});
