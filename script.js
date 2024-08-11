document.addEventListener('DOMContentLoaded', () => {
    // Populate carousel
    const carouselInner = document.getElementById('carousel-inner');
    carouselData.forEach((item, index) => {
        const isActive = index === 0 ? 'active' : '';
        const carouselItem = `
            <div class="carousel-item ${isActive}">
                <img class="d-block w-100" src="${item.src}" alt="${item.alt}">
            </div>
        `;
        carouselInner.innerHTML += carouselItem;
    });

    // Populate categories
    const categoryRow = document.getElementById('category-row');
    categoryData.forEach(item => {
        const categoryCard = `
            <div class="col-md-4 col-12">
                <div class="card bg-dark text-white">
                    <a href="${item.link}">
                        <img class="card-img img img-fluid" src="${item.src}" alt="${item.alt}">
                    </a>
                </div>
            </div>
        `;
        categoryRow.innerHTML += categoryCard;
    });

    // Populate products
    const productsRow = document.getElementById('products-row');
    productData.forEach(item => {
        const productCard = `
            <div class="col-md-4 col-12">
                <div class="single_product shadow text-center p-1">
                    <div class="product_img">
                        <a href="${item.link}"><img src="${item.src}" class="img img-fluid" alt="${item.alt}"></a>
                        <div class="new_product">
                            <span class="badge py-2 px-3 badge-pill badge-danger">New</span>
                        </div>
                    </div>
                    <div class="product-caption my-3">
                        <div class="product-ratting">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star low-star"></i>
                            <i class="far fa-star low-star"></i>
                        </div>
                        <h4><a href="${item.link}">${item.name}</a></h4>
                        <div class="price">
                            <b><span class="mr-1">₹</span><span>${item.price}</span></b>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productsRow.innerHTML += productCard;
    });
});
