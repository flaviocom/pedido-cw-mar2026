import os

css_to_append = """
/* --- OVERHAUL: MOBILE-FIRST ELEGANTE --- */
body {
    background-color: #fcfcfc;
    color: #3e4c59;
}

/* Modern Header */
.modern-header {
    background: linear-gradient(135deg, white, var(--brand-pink));
    border-bottom: none;
    box-shadow: 0 2px 10px rgba(0,0,0,0.03);
}

.main-title {
    color: #d1115b;
}

/* Base Cards (for all existing .field-card, .packaging-card, .summary-card, etc) */
.field-card,
.packaging-card,
.summary-card,
.dashboard-card,
.container {
    background: var(--card-bg);
    border: 1px solid #f1f3f5;
    border-radius: 20px;
    box-shadow: var(--card-shadow);
    transition: transform 0.2s, box-shadow 0.2s;
    overflow: hidden;
}

.field-card:hover, .summary-card:hover {
    box-shadow: 0 8px 16px rgba(0,0,0,0.08);
}

/* Inputs and interactive elements */
.modern-input, .modern-textarea, select, .attendance-input, .date-card {
    border-radius: 12px !important;
    border: 1px solid #e2e8f0 !important;
    background-color: #f8fafc !important;
    padding: 10px 14px !important;
    color: #334155;
    transition: all 0.2s ease;
}

/* Hover/focus effect for inputs */
.modern-input:focus, .modern-textarea:focus, select:focus, .attendance-input:focus {
    outline: none !important;
    border-color: #a7f3d0 !important;
    box-shadow: 0 0 0 3px rgba(167, 243, 208, 0.4) !important;
    background-color: white !important;
}

/* Labels and text */
.field-label, .attendance-label, .date-label {
    color: #64748b;
    font-weight: 600;
    letter-spacing: 0.5px;
    font-size: 11px;
}

/* Payment Items */
.payment-method-item {
    background: var(--brand-sage);
    border: 1px dashed #a3e635;
    border-radius: 16px;
    padding: 16px;
    box-shadow: var(--card-shadow);
    transition: transform 0.2s ease;
}

.payment-method-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(163, 230, 53, 0.15);
}

/* Section Titles */
h1, h2, h3, h4 {
    color: #1e293b;
    font-weight: 700;
}

/* Buttons */
.btn-primary {
    background: linear-gradient(135deg, #10b981, #059669);
    border-radius: 14px;
    box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}
.btn-primary:hover {
    background: linear-gradient(135deg, #059669, #047857);
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(16, 185, 129, 0.4);
}

.btn-secondary {
    border-radius: 14px;
    font-weight: 600;
    background-color: #f1f5f9;
    color: #475569;
    border: 1px solid #cbd5e1;
}

.btn-secondary:hover {
    background-color: #e2e8f0;
    color: #1e293b;
}

/* Embalagens Table */
.packaging-table th {
    background-color: var(--brand-pink);
    color: #d81b60;
    border-color: var(--brand-pink-dark);
}

.packaging-table td {
    background: white;
    border-color: #f1f5f9;
}

/* Sticky Bottom Buttons Area */
.action-buttons {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    padding: 16px;
    border-radius: 20px;
    box-shadow: 0 -4px 16px rgba(0,0,0,0.05);
    margin-top: 32px;
}
"""

with open('style.css', 'a', encoding='utf-8') as f:
    f.write(css_to_append)
print("CSS overwrites appended successfully.")
