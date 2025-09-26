async function loadGallery() {
    const response = await fetch("tree.json");
    const data = await response.json();
    const carouselInner = document.querySelector(".carousel-inner");

    function extractImages(node, currentPath = "") {
        if (node.type === "file" && /\.(jpg|jpeg|png|gif|webp)$/i.test(node.name)) {
            const img = document.createElement("img");
            img.src = "assets/" + currentPath + node.name;
            carouselInner.appendChild(img);
        } else if (node.type === "directory" && node.children) {
            node.children.forEach(child => extractImages(child, currentPath + node.name + "/"));
        }
    }

    extractImages(data);
}