// productapi.js
document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.querySelector('.row.mb-5');
    const categoriesContainer = document.querySelector('.list-group');
    
    // Fetch products and categories from the API
    async function fetchData() {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();

            // Extract categories from products
            const categories = [...new Set(data.map(product => product.category))];
            renderCategories(categories);
            
            // Render products
            renderProducts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function renderCategories(categories) {
        categoriesContainer.innerHTML = '';
        categories.forEach(category => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = category;
            categoriesContainer.appendChild(listItem);
        });
    }

    function renderProducts(products) {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';
            
            const card = document.createElement('div');
            card.className = 'card';
            card.style.width = '18rem';

            const img = document.createElement('img');
            img.src = product.image;
            img.className = 'card-img-top';
            img.alt = product.name;

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = product.title;

            const price = document.createElement('p');
            price.className = 'card-text';
            price.textContent = `₹${product.price}`;

            const button = document.createElement('a');
            button.href = '#';
            button.className = 'btn btn-primary';
            button.textContent = 'Add to Cart';
            button.addEventListener('click', () => addToCart(product));

            cardBody.appendChild(title);
            cardBody.appendChild(price);
            cardBody.appendChild(button);
            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);
            productsContainer.appendChild(col);
        });
    }

    function addToCart(product) {
        // Handle adding product to cart
        console.log('Adding to cart:', product);
        // Example: Add product to localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    fetchData();
    function renderProducts(products) {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';
            
            const card = document.createElement('div');
            card.className = 'card';
            card.style.width = '18rem';
    
            const link = document.createElement('a');
            link.href = `product_details.html?id=${product.id}`;
            link.style.textDecoration = 'none';
            link.style.color = 'inherit';
    
            const img = document.createElement('img');
            img.src = product.image;
            img.className = 'card-img-top';
            img.alt = product.title;
    
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
    
            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = product.title;
    
            const price = document.createElement('p');
            price.className = 'card-text';
            price.textContent = `₹${product.price}`;
    
            cardBody.appendChild(title);
            cardBody.appendChild(price);
            card.appendChild(img);
            card.appendChild(cardBody);
            link.appendChild(card);
            col.appendChild(link);
            productsContainer.appendChild(col);
        });
    }
    
});

