document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.querySelector('.row.bg_cart_1');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        cartContainer.innerHTML = '';
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        cart.forEach((item, index) => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';

            const card = document.createElement('div');
            card.className = 'card';
            card.style.width = '18rem';

            const img = document.createElement('img');
            img.src = item.image;
            img.className = 'card-img-top';
            img.alt = item.title;

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = item.title;

            const price = document.createElement('p');
            price.className = 'card-text';
            price.textContent = `₹${item.price}`;

            const quantity = document.createElement('p');
            quantity.className = 'card-text';
            quantity.textContent = `Quantity: ${item.quantity}`;

            const removeButton = document.createElement('button');
            removeButton.className = 'btn btn-danger';
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => removeFromCart(index));

            cardBody.appendChild(title);
            cardBody.appendChild(price);
            cardBody.appendChild(quantity);
            cardBody.appendChild(removeButton);
            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);
            cartContainer.appendChild(col);
        });

        const checkoutButton = document.createElement('a');
        checkoutButton.href = 'checkout.html';
        checkoutButton.className = 'btn btn-primary btn-sm mt-3';
        checkoutButton.textContent = 'Proceed to Checkout';
        cartContainer.appendChild(checkoutButton);
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    renderCart();
});
