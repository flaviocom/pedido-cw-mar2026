
// Script injection for +/- buttons
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-plus') || e.target.classList.contains('btn-minus')) {
        const productId = parseInt(e.target.dataset.productId);
        const product = window.orderState.products.find(p => p.id === productId);
        if (product) {
            const isPlus = e.target.classList.contains('btn-plus');

            // Update quantity
            if (isPlus) {
                product.quantity = (product.quantity || 0) + 1;
            } else {
                product.quantity = Math.max(0, (product.quantity || 0) - 1);
            }

            // Find input and update value visually to avoid re-rendering entire grid
            const card = e.target.closest('.product-card');
            const input = card.querySelector('.quantity-input');
            if (input) {
                input.value = product.quantity;
            }

            // Execute same logic as input change
            if (window.updateProductRowCalculations) {
                window.updateProductRowCalculations(card, product);
            }
            if (window.updateSummary) window.updateSummary();
            if (window.updatePaymentDates) window.updatePaymentDates();
            if (window.saveData) window.saveData();
        }
    }
});

// Since orderState might not be globally exposed in some setups, lets ensure it is accessible:
if (typeof window !== 'undefined') {
    window.orderState = typeof orderState !== 'undefined' ? orderState : window.orderState;
}

// Ensure update methods exist on window if they didn't
if (typeof window.updateProductRowCalculations === 'undefined' && typeof updateProductRowCalculations === 'function') {
    window.updateProductRowCalculations = updateProductRowCalculations;
}
