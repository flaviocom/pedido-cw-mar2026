import sys

css_to_append = """
/* --- NOVO ESTILO: MOBILE-FIRST ELEGANTE --- */
:root {
    --brand-pink: #fce4e4;
    --brand-pink-dark: #f0a8b4;
    --brand-sage: #e8f5e9;
    --card-bg: #ffffff;
    --card-shadow: 0 4px 12px rgba(0,0,0,0.06);
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    padding: 8px 0;
}

.product-card {
    background: var(--card-bg);
    border: 1px solid var(--border-gray);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--card-shadow);
    transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
    position: relative;
}

.product-card.has-quantity {
    background-color: var(--brand-sage);
    border-color: #81c784;
}

.product-card-body {
    display: flex;
    padding: 12px;
    gap: 12px;
}

.product-image-container {
    flex: 0 0 80px;
    height: 80px;
    border-radius: 8px;
    overflow: hidden;
    background: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #eee;
}

.product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.product-img-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--brand-pink);
    color: #d81b60;
    font-size: 11px;
    font-weight: bold;
}

.new-product-badge {
    width: 100%;
    text-align: center;
    color: var(--primary-green);
    font-size: 11px;
    font-weight: bold;
}

.product-info-block {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 0; /* Prevents overflow */
}

.product-name {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.2;
    color: var(--text-dark);
}

.product-metrics-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: var(--text-muted);
}

.discounted-price-label {
    font-weight: 600;
}

.discounted-price {
    color: var(--primary-green);
    font-size: 14px;
}

.product-controls-row {
    display: flex;
    gap: 12px;
    align-items: flex-end;
}

.qty-control-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.qty-control-group label {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--text-muted);
}

.qty-stepper {
    display: flex;
    align-items: center;
    border: 1px solid var(--border-gray);
    border-radius: 8px;
    overflow: hidden;
    height: 32px;
    background: #fff;
}

.btn-qty {
    background: #f1f3f5;
    border: none;
    width: 32px;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    color: #495057;
    transition: background 0.15s;
}

.btn-qty:hover {
    background: #e9ecef;
}

.btn-qty:active {
    background: #dee2e6;
}

.qty-stepper input {
    width: 40px;
    height: 100%;
    border: none;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    padding: 0;
    /* remove arrows */
    -moz-appearance: textfield;
}
.qty-stepper input::-webkit-outer-spin-button,
.qty-stepper input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.card-field-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.card-field-group label {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--text-muted);
}
.card-field-group input {
    height: 32px;
    width: 60px;
    padding: 0 4px;
    text-align: center;
}

.product-footer-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px dashed var(--border-gray);
    padding-top: 8px;
    margin-top: 4px;
}

.lot-group input {
    width: 70px;
}

.total-group {
    text-align: right;
}

.total-label {
    font-size: 11px;
    color: var(--text-muted);
}

.total-price {
    display: block;
    font-size: 16px;
    font-weight: 700;
    color: var(--text-dark);
}

/* Hide table elements since we replaced them */
.products-table, .products-table-container {
    display: none !important;
}

@media (max-width: 768px) {
    .products-grid {
        grid-template-columns: 1fr;
    }
}
"""

with open('style.css', 'a', encoding='utf-8') as f:
    f.write("\n" + css_to_append)

print("CSS appended.")
