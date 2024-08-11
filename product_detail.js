document.addEventListener('DOMContentLoaded', () => {
    // Get the product ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Fetch product details using the product ID
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(product => {
            // Update the product details section with the fetched product data
            document.querySelector('.title h3').textContent = product.title;
            document.querySelector('.category span a').textContent = product.category;
            document.querySelector('.price span:last-child').textContent = product.price;
            document.querySelector('.desc p').textContent = product.description;

            // Update the product image carousel
            const carouselInner = document.querySelector('.carousel-inner');
            const carouselIndicators = document.querySelector('.carousel-indicators');
            carouselInner.innerHTML = `
                <div class="carousel-item active">
                    <img src="${product.image}" class="d-block w-100 img img-fluid rounded" alt="${product.title}">
                </div>
            `;
            carouselIndicators.innerHTML = `
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
                    <img src="${product.image}" class="d-block w-50 img img-fluid rounded" width="15px" alt="${product.title}">
                </li>
            `;
        });
});
