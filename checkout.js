document.addEventListener('DOMContentLoaded', function() {
    const orderSummaryContainer = document.querySelector('.order-summary .list-group');

    function renderOrderSummary() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            orderSummaryContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        let totalAmount = 0;
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2';
            listItem.innerHTML = `
                <span>${item.title}</span>
                <span>x${item.quantity}</span>
                <span>₹${item.price * item.quantity}</span>
            `;
            orderSummaryContainer.appendChild(listItem);
            totalAmount += item.price * item.quantity;
        });

        const totalItem = document.createElement('li');
        totalItem.className = 'list-group-item d-flex justify-content-between align-items-center border-top px-0 mb-3';
        totalItem.innerHTML = `
            <div>
                <strong>Total amount</strong>
                <strong>
                    <p class="mb-0">(including VAT)</p>
                </strong>
            </div>
            <span><strong>₹${totalAmount.toFixed(2)}</strong></span>
        `;
        orderSummaryContainer.appendChild(totalItem);
    }

    renderOrderSummary();
});
