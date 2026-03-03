import sys
import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace row creation with div creation in renderProductsTable
old_row = """    const addRow = document.createElement('tr');
    const colSpan = 7; // Agora são 7 colunas incluindo a coluna Lote
    addRow.innerHTML = `
        <td colspan="${colSpan}" style="text-align: right;">
            <button id="add-new-product-btn" class="btn btn-secondary">+ Adicionar outro item</button>
        </td>
    `;
    tbody.appendChild(addRow);\"\"\""""

# Let's use re.sub with normalized white spaces
content = re.sub(
    r"const addRow = document\.createElement\('tr'\);\s*const colSpan = 7;.*?tbody\.appendChild\(addRow\);",
    r"""const addRow = document.createElement('div');
    addRow.className = 'add-product-container';
    addRow.style.gridColumn = '1 / -1';
    addRow.style.textAlign = 'center';
    addRow.style.marginTop = '16px';
    addRow.innerHTML = `<button id="add-new-product-btn" class="btn btn-secondary" style="width: 100%; border-radius: 12px; height: 48px; background: #e8f5e9; color: #2e7d32; border: 1px dashed #4caf50;">+ Adicionar Produto Extra</button>`;
    tbody.appendChild(addRow);""",
    content, flags=re.DOTALL
)

# Replace updateTableHeader
content = re.sub(
    r"function updateTableHeader\(hasAnyDiscount\) \{.*?\n\}",
    "function updateTableHeader(hasAnyDiscount) {\n    const thead = document.querySelector('.products-table thead tr');\n    if (thead) thead.innerHTML = '';\n}",
    content, flags=re.DOTALL
)

# Extract and replace createProductRow
new_createProductRow = """function createProductRow(product, index, isCustom = false, hasAnyDiscount = true) {
    const row = document.createElement("div");
    row.className = `product-card ${product.quantity > 0 ? "has-quantity" : ""}`;
    
    let effectiveDiscount = product.individualDiscount !== null ? product.individualDiscount : orderState.generalDiscount;
    if (product.applyGeneralDiscount === false) {
        effectiveDiscount = product.individualDiscount !== null ? product.individualDiscount : 0;
    }

    const discountedPrice = calculateDiscountedPrice(product.catalogPrice, effectiveDiscount);
    const totalPrice = calculateTotalPrice(product.quantity, discountedPrice);
    const imgUrl = product.imageUrl || 'LogotipoCW.jpg';

    const discountColumn = hasAnyDiscount ? `
        <div class="card-field-group">
            <label>Desc. (%)</label>
            <input type="number" 
                   value="${product.individualDiscount !== null ? product.individualDiscount : (product.applyGeneralDiscount !== false ? orderState.generalDiscount : '')}" 
                   min="0" 
                   max="100"
                   step="0.1"
                   placeholder="${product.applyGeneralDiscount === false ? "0.0" : orderState.generalDiscount.toFixed(1)}"
                   data-product-id="${product.id}"
                   class="discount-input modern-input ${product.individualDiscount !== null ? "highlight-discount" : ""}">
        </div>
    ` : '';
    
    row.innerHTML = `
        <div class="product-card-body">
            <div class="product-image-container">
                <img src="${imgUrl}" alt="${product.name}" title="${product.name}" class="product-image">
            </div>
            
            <div class="product-info-block">
                <h4 class="product-name">${product.name}</h4>
                
                <div class="product-metrics-row">
                    <span class="catalog-price">Preço: ${formatCurrency(product.catalogPrice)}</span>
                    <span class="discounted-price-label">Liq.: <span class="discounted-price">${formatCurrency(discountedPrice)}</span></span>
                </div>
                
                <div class="product-controls-row">
                    <div class="qty-control-group">
                        <label>Qtd</label>
                        <div class="qty-stepper">
                            <button type="button" class="btn-qty btn-minus" data-product-id="${product.id}">-</button>
                            <input type="number" 
                                   value="${product.quantity}" 
                                   min="0" 
                                   step="1" 
                                   data-product-id="${product.id}"
                                   class="quantity-input modern-input"
                                   style="text-align: center;">
                            <button type="button" class="btn-qty btn-plus" data-product-id="${product.id}">+</button>
                        </div>
                    </div>
                    ${discountColumn}
                </div>
                
                <div class="product-footer-row">
                    <div class="card-field-group lot-group">
                        <label>Lote</label>
                        <input type="text" 
                               value="${product.lot || ''}" 
                               maxlength="6" 
                               data-product-index="${index}" 
                               class="lot-input modern-input"
                               placeholder="123456">
                    </div>
                    <div class="total-group">
                        <span class="total-label">Total:</span>
                        <span class="price total-price">${formatCurrency(totalPrice)}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    return row;
}"""

# Extract and replace createAdditionalProductRow
new_createAdditionalProductRow = """function createAdditionalProductRow(product, index, hasAnyDiscount = true) {
    const row = document.createElement('div');
    row.className = `product-card additional-product-row ${product.quantity > 0 ? 'has-quantity' : ''}`;
    
    let effectiveDiscount = product.individualDiscount !== null ? product.individualDiscount : 0;
    const discountedPrice = calculateDiscountedPrice(product.catalogPrice, effectiveDiscount);
    const totalPrice = calculateTotalPrice(product.quantity, discountedPrice);

    const discountColumn = hasAnyDiscount ? `
        <div class="card-field-group">
            <label>Desc. (%)</label>
            <input type="number" class="additional-product-discount-input modern-input ${product.individualDiscount !== null ? 'highlight-discount' : ''}" 
                   data-index="${index}" 
                   value="${product.individualDiscount !== null ? product.individualDiscount : ''}" 
                   min="0" max="100" step="0.1" placeholder="0.0">
        </div>
    ` : '';

    row.innerHTML = `
        <div class="product-card-body">
            <div class="product-image-container">
                <div class="new-product-badge">Novo</div>
            </div>
            
            <div class="product-info-block">
                <input type="text" class="additional-product-name-input modern-input" data-index="${index}" value="${product.name}" placeholder="Nome do Produto">
                
                <div class="product-metrics-row">
                    <div style="display:flex;align-items:center;">
                        <span class="catalog-price">Preço:</span>
                        <input type="number" class="additional-product-price-input modern-input" data-index="${index}" value="${product.catalogPrice}" min="0" step="0.01" style="width:70px;height:24px;margin-left:4px;">
                    </div>
                    <span class="discounted-price-label">Liq.: <span class="discounted-price">${formatCurrency(discountedPrice)}</span></span>
                </div>
                
                <div class="product-controls-row">
                    <div class="qty-control-group">
                        <label>Qtd</label>
                        <input type="number" class="additional-product-quantity-input modern-input" data-index="${index}" value="${product.quantity}" min="0" step="1" placeholder="0">
                    </div>
                    ${discountColumn}
                </div>
                
                <div class="product-footer-row">
                    <div class="card-field-group lot-group">
                        <label>Lote</label>
                        <input type="text" 
                               value="${product.lot || ''}" 
                               maxlength="6" 
                               data-additional-index="${index}" 
                               class="lot-input modern-input"
                               placeholder="123456">
                    </div>
                    <div class="total-group">
                        <span class="total-label">Subtotal:</span>
                        <span class="price total-price">${formatCurrency(totalPrice)}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    return row;
}"""

content = re.sub(r'function createProductRow\(product, index, isCustom = false, hasAnyDiscount = true\) \{.*?\r?\n\}\r?\n', new_createProductRow + "\n", content, flags=re.DOTALL)
content = re.sub(r'function createAdditionalProductRow\(product, index, hasAnyDiscount = true\) \{.*?\r?\n\}\r?\n', new_createAdditionalProductRow + "\n", content, flags=re.DOTALL)

# Fix e.target.closest('tr') issue
content = content.replace("e.target.closest('tr')", "(e.target.closest('.product-card') || e.target.closest('tr'))")

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Transformation successful.")
