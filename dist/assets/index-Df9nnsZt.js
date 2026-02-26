(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const s of d.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerPolicy&&(d.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?d.credentials="include":i.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(i){if(i.ep)return;i.ep=!0;const d=n(i);fetch(i.href,d)}})();console.log("script.js carregado!");const it=[{id:0,name:"Complement hidratante para cabelos",catalogPrice:57.9,weight:.17},{id:1,name:"Condicionador completive especial",catalogPrice:57.9,weight:.31},{id:2,name:"Óleo de tratamento para cabelos",catalogPrice:64.9,weight:.15},{id:3,name:"Shampoo especial aditivado",catalogPrice:58.9,weight:.34},{id:4,name:"Shampoo para cabelos normais",catalogPrice:57.9,weight:.35},{id:5,name:"Shampoo para cabelos oleosos",catalogPrice:58.9,weight:.335},{id:6,name:"Shampoo para cabelos secos e danificados",catalogPrice:57.9,weight:.325},{id:7,name:"Creme colágeno",catalogPrice:74.9,weight:.075},{id:8,name:"Creme hidratante facial",catalogPrice:58.9,weight:.075},{id:9,name:"Creme para limpeza facial",catalogPrice:51.9,weight:.075},{id:10,name:"Gel facial esfoliante",catalogPrice:51.9,weight:.08},{id:11,name:"Loção tônica facial",catalogPrice:55.9,weight:.175},{id:12,name:"Óleo vitaminado para a pele facial",catalogPrice:51.9,weight:.026},{id:13,name:"Máscara facial SPArgila amarela peel off",catalogPrice:74.9,weight:.095},{id:14,name:"Creme para mãos e unhas",catalogPrice:55.9,weight:.07},{id:15,name:"Creme para massagem corporal",catalogPrice:74.9,weight:.176},{id:16,name:"Creme para os pés",catalogPrice:55.9,weight:.075},{id:17,name:"Creme para os seios",catalogPrice:55.9,weight:.076},{id:18,name:"Creme peeling",catalogPrice:56.9,weight:.07},{id:19,name:"Lipo gel - Redutor de medidas",catalogPrice:85.9,weight:.28},{id:20,name:"Loção cremosa camomila",catalogPrice:62.9,weight:.282},{id:21,name:"Loção cremosa pepino",catalogPrice:62.9,weight:.283},{id:22,name:"Óleo de tratamento cosmético para o corpo",catalogPrice:74.9,weight:.152},{id:23,name:"Vela vegetal para massagem",catalogPrice:70.9,weight:.109},{id:24,name:"Banho de ervas",catalogPrice:62.9,weight:.18},{id:25,name:"Sabonete íntimo natural",catalogPrice:74.9,weight:.228},{id:26,name:"Desodorante antiperspirante",catalogPrice:55.9,weight:.075},{id:27,name:"Desodorante I",catalogPrice:90.9,weight:.251},{id:28,name:"Desodorante II",catalogPrice:90.9,weight:.249},{id:29,name:"Desodorante III",catalogPrice:90.9,weight:.251},{id:30,name:"Desodorante IV",catalogPrice:90.9,weight:.252},{id:31,name:"Desodorante V",catalogPrice:90.9,weight:.247},{id:32,name:"Gel refrescante pós Barba",catalogPrice:79.9,weight:.15},{id:33,name:"Catálogo",catalogPrice:23.9,applyGeneralDiscount:!1,weight:.094},{id:34,name:"Talão de consumidor",catalogPrice:5.9,applyGeneralDiscount:!1,weight:.07}],dt="pedido-vendas-data";let a={resellerName:"",address:"",phone:"",attendanceBy:"",orderDate:"",creditPaid:0,freight:0,transportOption:"",installments:1,generalDiscount:0,generalDeadlineDays:2,paymentDays:[],notes:"",paymentMethods:{pix:{enabled:!1,details:""},transfer:{enabled:!1,details:""},boleto:{enabled:!1},credit:{enabled:!1,installments:1}},products:it.map(e=>({...e,quantity:0,individualDiscount:null,lot:""})),additionalProducts:[],packaging:[]};document.addEventListener("DOMContentLoaded",function(){yt()});function yt(){console.log("initializeApp: Iniciando..."),ht(),lt(),L(),T(),xt(),b(),h(),G(),A();const e=document.getElementById("payment-credit");e&&st(e.checked),console.log("initializeApp: Finalizado.")}function st(e){const t=document.querySelector(".credit-card-details");t&&(t.style.display=e?"flex":"none")}function lt(){const e=document.getElementById("order-date");if(e&&!e.value){const t=new Date,n=-180,o=t.getTime()+t.getTimezoneOffset()*6e4,i=new Date(o+n*6e4),d=i.getFullYear(),s=String(i.getMonth()+1).padStart(2,"0"),c=String(i.getDate()).padStart(2,"0"),r=`${d}-${s}-${c}`;e.value=r,a.orderDate=r}h()}function rt(){const e=document.getElementById("order-date"),t=document.getElementById("general-deadline-date"),n=document.getElementById("general-deadline-days");if(!e||!t)return;if(!n||!n.value){t.textContent="";return}n&&n.value&&(a.generalDeadlineDays=parseInt(n.value)||0);const o=e.value?new Date(e.value+"T00:00:00"):new Date,i=a.generalDeadlineDays||0,d=new Date(o.getTime()+i*24*60*60*1e3);t.textContent=d.toLocaleDateString("pt-BR"),n&&!n.value&&(n.value=a.generalDeadlineDays)}function G(){const e=document.getElementById("payment-days-container");if(e){e.innerHTML="";for(let t=0;t<a.installments;t++){const n=document.createElement("div");n.className="payment-day-item";const o=document.getElementById("order-date"),i=o?new Date(o.value):new Date,d=a.paymentDays[t]||0,s=new Date(i.getTime()+(d+1)*24*60*60*1e3),c=d>0?s.toLocaleDateString("pt-BR"):"(definir prazo)";n.innerHTML=`
            <label class="payment-day-label">Prazo ${t+1}ª Parcela</label>
            <div style="display: flex; align-items: center; gap: 8px;">
                <input type="number" 
                       id="payment-days-${t}" 
                       value="${a.paymentDays[t]||""}" 
                       min="1" 
                       max="999"
                       step="1" 
                       data-installment-index="${t}" 
                       class="payment-day-input payment-days-input"
                       placeholder="dias"
                       style="width: 60px;">
                <span class="payment-date-display" id="payment-date-${t}" style="font-size: 12px; color: #666;">${c}</span>
            </div>
        `,e.appendChild(n)}}}function A(){const e=document.getElementById("boleto-installments-label"),t=document.getElementById("installments");if(e&&t){const i=parseInt(t.value)||1;e.textContent=i===1?"Parcela":"Parcelas"}const n=document.getElementById("payment-installments-label"),o=document.getElementById("payment-credit-installments");if(n&&o){const i=parseInt(o.value)||1;n.textContent=i===1?"Parcela":"Parcelas"}}function h(){const e=document.getElementById("order-date");let t;if(e&&e.value){const s=e.value;s.includes("-")&&s.length>10?t=new Date:t=new Date(s+"T00:00:00")}else t=new Date;const n=document.getElementById("installments-details");if(!n)return;n.innerHTML="";const o=C(),i=o/a.installments;if(a.paymentMethods.credit.enabled){const s=a.paymentMethods.credit.installments||1,c=o/s,r=document.createElement("div");r.className="installment-item",r.innerHTML=`<strong class="highlight-settlement-date">Cartao de Credito:</strong> <span class="highlight-settlement-date">${s} Parcela${s>1?"s":""} de ${p(c)}</span>`,n.appendChild(r)}if(a.paymentMethods.boleto.enabled)for(let s=0;s<a.installments;s++){const c=a.paymentDays[s]||0,r=new Date(t.getTime()+c*24*60*60*1e3),l=document.createElement("div");l.className="installment-item",a.installments===1?l.innerHTML=`<strong class="highlight-settlement-date">Acerto até dia:</strong> <span class="highlight-settlement-date">${r.toLocaleDateString("pt-BR")}</span>`:l.innerHTML=`<strong>${s+1}ª Parcela ${p(i)} - <span class="highlight-settlement-date">(Acerto até dia):</span></strong> <span class="highlight-settlement-date">${r.toLocaleDateString("pt-BR")}</span>`,n.appendChild(l)}else{const s=a.generalDeadlineDays||0,c=new Date(t.getTime()+s*24*60*60*1e3),r=document.createElement("div");r.className="installment-item",r.innerHTML=`<strong class="highlight-settlement-date">Acerto até dia:</strong> <span class="highlight-settlement-date">${c.toLocaleDateString("pt-BR")}</span>`,n.appendChild(r)}}function ht(){const e=localStorage.getItem(dt);if(e)try{const t=JSON.parse(e);a={...a,...t,products:a.products.map((i,d)=>({...i,...t.products&&t.products[d]?t.products[d]:{},individualDiscount:t.products&&t.products[d]&&t.products[d].individualDiscount!==void 0?t.products[d].individualDiscount:null})),additionalProducts:t.additionalProducts||[],packaging:t.packaging||[]},document.getElementById("reseller-name").value=a.resellerName||"",document.getElementById("address").value=a.address||"",document.getElementById("phone").value=a.phone||"",document.getElementById("attendance-by").value=a.attendanceBy||"";const n=document.getElementById("order-date");n&&!n.value&&a.orderDate&&(n.value=a.orderDate),document.getElementById("credit-paid").value=a.creditPaid||0,document.getElementById("general-discount").value=a.generalDiscount||0,document.getElementById("freight").value=a.freight||0,document.getElementById("transport-select").value=a.transportOption||"",document.getElementById("installments").value=a.installments||1,document.getElementById("notes").value=a.notes||"";const o=document.getElementById("general-deadline-days");o&&(o.value=a.generalDeadlineDays||""),a.paymentMethods&&(document.getElementById("payment-pix").checked=a.paymentMethods.pix.enabled,document.getElementById("payment-pix-details").value=a.paymentMethods.pix.details,document.getElementById("payment-transfer").checked=a.paymentMethods.transfer.enabled,document.getElementById("payment-transfer-details").value=a.paymentMethods.transfer.details,document.getElementById("payment-boleto").checked=a.paymentMethods.boleto.enabled,document.getElementById("payment-credit").checked=a.paymentMethods.credit.enabled,document.getElementById("payment-credit-installments").value=a.paymentMethods.credit.installments)}catch(t){console.error("Erro ao carregar dados salvos:",t)}}function m(){try{localStorage.setItem(dt,JSON.stringify(a))}catch(e){console.error("Erro ao salvar dados:",e)}}function L(e=a.products){const t=document.getElementById("products-tbody");if(!t){console.error("renderProductsTable: Elemento products-tbody não encontrado");return}t.innerHTML="";const n=!0;e.forEach((d,s)=>{const c=Dt(d,s,!1,n);t.appendChild(c)}),a.additionalProducts.forEach((d,s)=>{const c=bt(d,s,n);t.appendChild(c)});const o=document.createElement("tr"),i=7;o.innerHTML=`
        <td colspan="${i}" style="text-align: right;">
            <button id="add-new-product-btn" class="btn btn-secondary">+ Adicionar outro item</button>
        </td>
    `,t.appendChild(o),vt()}function H(){if(a.generalDiscount>0)return!0;for(let e of a.products)if(e.individualDiscount!==null&&e.individualDiscount>0)return!0;for(let e of a.additionalProducts)if(e.individualDiscount!==null&&e.individualDiscount>0)return!0;return!1}function vt(e){const t=document.querySelector(".products-table thead tr");t&&(t.innerHTML=`
        <th>Produto</th>
        <th>Quantidade</th>
        <th>Preço<br>Catálogo</th>
        <th>Desconto<br>(%)</th>
        <th>Preço c/<br>Desconto</th>
        <th>Total<br>Item</th>
        <th>Lote</th>
    `)}function Dt(e,t,n=!1,o=!0){const i=document.createElement("tr");i.className=e.quantity>0?"has-quantity":"";let d=e.individualDiscount!==null?e.individualDiscount:a.generalDiscount;e.applyGeneralDiscount===!1&&(d=e.individualDiscount!==null?e.individualDiscount:0);const s=$(e.catalogPrice,d),c=S(e.quantity,s),r=o?`
        <td>
            <input type="number" 
                   value="${e.individualDiscount!==null?e.individualDiscount:e.applyGeneralDiscount!==!1?a.generalDiscount:""}" 
                   min="0" 
                   max="100"
                   step="0.1"
                   placeholder="${e.applyGeneralDiscount===!1?"0.0":a.generalDiscount.toFixed(1)}"
                   data-product-id="${e.id}"
                   class="discount-input ${e.individualDiscount!==null?"highlight-discount":""}">
        </td>
        <td class="price discounted-price">${p(s)}</td>
    `:"";return i.innerHTML=`
        <td class="product-name">${e.name}</td>
        <td>
            <input type="number" 
                   value="${e.quantity}" 
                   min="0" 
                   step="1" 
                   data-product-id="${e.id}"
                   class="quantity-input">
        </td>
        <td class="price">${p(e.catalogPrice)}</td>
        ${r}
        <td class="price total-price">${p(c)}</td>
        <td>
            <input type="text" 
                   value="${e.lot||""}" 
                   maxlength="6" 
                   data-product-index="${t}" 
                   class="lot-input">
        </td>
    `,i}function bt(e,t,n=!0){const o=document.createElement("tr");o.className=`additional-product-row ${e.quantity>0?"has-quantity":""}`;let i=e.individualDiscount!==null?e.individualDiscount:0;const d=$(e.catalogPrice,i),s=S(e.quantity,d),c=n?`
        <td>
            <input type="number" class="additional-product-discount-input ${e.individualDiscount!==null?"highlight-discount":""}" 
                   data-index="${t}" 
                   value="${e.individualDiscount!==null?e.individualDiscount:""}" 
                   min="0" max="100" step="0.1" placeholder="0.0">
        </td>
        <td class="price discounted-price">${p(d)}</td>
    `:"";return o.innerHTML=`
        <td><input type="text" class="additional-product-name-input" data-index="${t}" value="${e.name}" placeholder="Nome do Produto"></td>
        <td><input type="number" class="additional-product-quantity-input" data-index="${t}" value="${e.quantity}" min="0" step="1" placeholder="0"></td>
        <td><input type="number" class="additional-product-price-input" data-index="${t}" value="${e.catalogPrice}" min="0" step="0.01" placeholder="0.00"></td>
        ${c}
        <td class="price total-price">${p(s)}</td>
        <td>
            <input type="text" 
                   value="${e.lot||""}" 
                   maxlength="6" 
                   data-additional-index="${t}" 
                   class="lot-input">
        </td>
    `,o}function xt(){document.getElementById("order-date").addEventListener("change",function(n){a.orderDate=n.target.value,h(),m()}),document.addEventListener("input",function(n){if(n.target.classList.contains("quantity-input")){const o=parseInt(n.target.dataset.productId),i=parseInt(n.target.value)||0,d=a.products.find(s=>s.id===o);d&&(d.quantity=i,nt(n.target.closest("tr"),d),b(),h(),m())}if(n.target.classList.contains("discount-input")){const o=parseInt(n.target.dataset.productId),i=n.target.value===""?null:parseFloat(n.target.value),d=a.products.find(s=>s.id===o);d&&(d.individualDiscount=i,nt(n.target.closest("tr"),d),i!==null&&i>0?n.target.classList.add("highlight-discount"):n.target.classList.remove("highlight-discount"),b(),h(),m())}if(n.target.classList.contains("additional-product-quantity-input")){const o=parseInt(n.target.dataset.index),i=parseInt(n.target.value)||0;a.additionalProducts[o].quantity=i,J(n.target.closest("tr"),a.additionalProducts[o]),b(),h(),m()}if(n.target.classList.contains("additional-product-price-input")){const o=parseInt(n.target.dataset.index),i=parseFloat(n.target.value)||0;a.additionalProducts[o].catalogPrice=i,J(n.target.closest("tr"),a.additionalProducts[o]),b(),h(),m()}if(n.target.classList.contains("additional-product-discount-input")){const o=parseInt(n.target.dataset.index),i=n.target.value===""?null:parseFloat(n.target.value);a.additionalProducts[o].individualDiscount=i,J(n.target.closest("tr"),a.additionalProducts[o]),b(),h(),m()}if(n.target.classList.contains("lot-input")){const o=parseInt(n.target.dataset.productIndex),i=parseInt(n.target.dataset.additionalIndex);!isNaN(o)&&o>=0&&o<a.products.length?(a.products[o].lot=n.target.value,m()):!isNaN(i)&&i>=0&&i<a.additionalProducts.length&&(a.additionalProducts[i].lot=n.target.value,m())}if(n.target.classList.contains("payment-days-input")){const o=parseInt(n.target.dataset.installmentIndex),i=parseInt(n.target.value)||0;i>999?(n.target.value=999,a.paymentDays[o]=999):a.paymentDays[o]=i;const d=document.getElementById("order-date"),s=d?new Date(d.value):new Date,c=a.paymentDays[o]||0,r=new Date(s.getTime()+(c+1)*24*60*60*1e3),l=c>0?r.toLocaleDateString("pt-BR"):"(definir prazo)",y=document.getElementById(`payment-date-${o}`);y&&(y.textContent=l),h(),m()}if(n.target.classList.contains("additional-product-name-input")){const o=parseInt(n.target.dataset.index);a.additionalProducts[o].name=n.target.value,m()}if(n.target.id==="reseller-name"&&(a.resellerName=n.target.value,m()),n.target.id==="address"&&(a.address=n.target.value,m()),n.target.id==="phone"&&(a.phone=n.target.value,m()),n.target.id==="attendance-by"&&(a.attendanceBy=n.target.value,m()),n.target.id==="credit-paid"&&(a.creditPaid=parseFloat(n.target.value)||0,b(),h(),m()),n.target.id==="general-discount"&&(a.generalDiscount=parseFloat(n.target.value)||0,L(),b(),h(),m()),n.target.id==="freight"&&(a.freight=parseFloat(n.target.value)||0,b(),h(),m()),n.target.id==="transport-select"&&(a.transportOption=n.target.value,V(),m()),n.target.id==="general-deadline-days"&&(a.generalDeadlineDays=parseInt(n.target.value)||0,rt(),h(),m()),n.target.id==="installments"){const o=parseInt(n.target.value)||1;for(a.installments=Math.max(1,Math.min(12,o));a.paymentDays.length<a.installments;)a.paymentDays.push(0);a.paymentDays=a.paymentDays.slice(0,a.installments),G(),h(),A(),b(),m()}if(n.target.id==="payment-credit-installments"){const o=parseInt(n.target.value)||1;a.paymentMethods.credit.installments=Math.max(1,Math.min(12,o)),A(),b(),m()}n.target.id==="notes"&&(a.notes=n.target.value,m()),n.target.id==="payment-pix-details"&&(a.paymentMethods.pix.details=n.target.value,m()),n.target.id==="payment-transfer-details"&&(a.paymentMethods.transfer.details=n.target.value,m()),n.target.id==="product-search"&&(ut(n.target.value),gt(n.target.value))}),document.addEventListener("change",function(n){n.target.id==="payment-pix"&&(a.paymentMethods.pix.enabled=n.target.checked,h(),m()),n.target.id==="payment-transfer"&&(a.paymentMethods.transfer.enabled=n.target.checked,h(),m()),n.target.id==="payment-boleto"&&(a.paymentMethods.boleto.enabled=n.target.checked,h(),m()),n.target.id==="payment-credit"&&(a.paymentMethods.credit.enabled=n.target.checked,st(n.target.checked),h(),m()),n.target.id==="hide-empty-lines"&&Tt(n.target.checked)}),document.addEventListener("focus",function(n){(n.target.classList.contains("quantity-input")||n.target.classList.contains("discount-input")||n.target.classList.contains("additional-product-quantity-input")||n.target.classList.contains("additional-product-discount-input")||n.target.id==="freight"||n.target.id==="general-discount")&&n.target.select()},!0),document.addEventListener("click",function(n){n.target.id==="clear-order-btn"&&confirm("Tem certeza que deseja limpar todos os dados do pedido?")&&Et(),n.target.id==="clear-quantities-btn"&&Pt(),n.target.id==="copy-settlement-btn"&&It(),n.target.id==="save-order-btn"&&ft(),n.target.id==="print-order-btn"&&(a.resellerName.trim()&&j(a),wt()),n.target.id==="add-new-product-btn"&&St(),n.target.id==="clear-search-btn"&&Lt(),n.target.id==="clear-quantities-btn"&&Ct(),n.target.id==="export-excel-btn"&&(a.resellerName.trim()&&j(a),$t()),n.target.id==="expedition-btn"&&(a.resellerName.trim()&&j(a),qt()),n.target.id==="add-transport-btn"&&Vt(),n.target.id==="scroll-to-top"&&(n.preventDefault(),n.stopPropagation(),U()),n.target.id==="scroll-to-bottom"&&(n.preventDefault(),n.stopPropagation(),at())});const e=document.getElementById("scroll-to-top"),t=document.getElementById("scroll-to-bottom");e&&e.addEventListener("touchstart",function(n){n.preventDefault(),U()},{passive:!1}),t&&t.addEventListener("touchstart",function(n){n.preventDefault(),at()},{passive:!1})}function nt(e,t){if(!e)return;let n=t.individualDiscount!==null?t.individualDiscount:a.generalDiscount;t.applyGeneralDiscount===!1&&(n=t.individualDiscount!==null?t.individualDiscount:0);const o=$(t.catalogPrice,n),i=S(t.quantity,o),d=e.querySelector(".discounted-price"),s=e.querySelector(".total-price");d&&(d.textContent=p(o)),s&&(s.textContent=p(i)),t.quantity>0?e.classList.add("has-quantity"):e.classList.remove("has-quantity")}function J(e,t){if(!e)return;let n=t.individualDiscount!==null?t.individualDiscount:0;const o=$(t.catalogPrice,n),i=S(t.quantity,o),d=e.querySelector(".discounted-price"),s=e.querySelector(".total-price");d&&(d.textContent=p(o)),s&&(s.textContent=p(i)),t.quantity>0?e.classList.add("has-quantity"):e.classList.remove("has-quantity")}function b(){const e=F(),t=Q(),n=N(),o=kt(),i=W(),d=X(),s=C(),c=Y(),r=document.getElementById("total-quantity");r&&(r.textContent=e);const l=document.getElementById("total-weight");l&&(l.textContent=`${t.toFixed(2)} kg (${(t*1e3).toFixed(0)} g)`);const y=document.getElementById("gross-value");y&&(y.textContent=p(n));const f=document.getElementById("general-discount-value");f&&(f.textContent=p(o));const g=document.getElementById("freight-value");g&&(g.textContent=p(a.freight));const v=document.getElementById("settlement-value");v&&(v.textContent=p(s));const w=document.getElementById("final-value");w&&(w.textContent=p(d));const B=document.getElementById("profit-value"),k=document.getElementById("profit-item");B&&(B.textContent=p(c)),k&&(k.style.display=c>0?"flex":"none");const u=document.getElementById("credit-paid-value");u&&(u.textContent=p(a.creditPaid));const x=document.getElementById("discounted-value");x&&(x.textContent=p(i));const D=document.getElementById("credit-installment-value");if(D){const I=a.paymentMethods.credit.installments||1,q=s/I;D.textContent=`de ${p(q)}`}const P=document.getElementById("boleto-installment-value");if(P){const I=a.installments||1,q=s/I;P.textContent=`${p(q)}`}}function p(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e).replace(/\s/g,"")}document.addEventListener("click",function(e){if(e.target.id==="copy-settlement-value"){const t=document.getElementById("settlement-value");if(t){const n="Valor do Acerto: "+t.textContent;navigator.clipboard.writeText(n).then(()=>{}).catch(o=>{console.error("Erro ao copiar: ",o),alert("Erro ao copiar o valor.")})}}});function Et(){a={resellerName:"",address:"",phone:"",attendanceBy:a.attendanceBy,orderDate:"",creditPaid:0,freight:0,transportOption:"",installments:1,generalDiscount:0,generalDeadlineDays:0,paymentDays:[],notes:"",packaging:a.packaging.map(t=>({...t,quantity:0})),paymentMethods:{pix:{enabled:!1,details:a.paymentMethods.pix.details},transfer:{enabled:!1,details:a.paymentMethods.transfer.details},boleto:{enabled:!1},credit:{enabled:!1,installments:1}},products:it.map(t=>({...t,quantity:0,individualDiscount:null,lot:a.products.find(n=>n.id===t.id)?.lot||""})),additionalProducts:[]},document.getElementById("reseller-name").value="",document.getElementById("address").value="",document.getElementById("phone").value="",document.getElementById("order-date").value="",document.getElementById("credit-paid").value=0,document.getElementById("general-discount").value=0,document.getElementById("general-deadline-days").value="",document.getElementById("general-deadline-date").textContent="(definir prazo)",document.getElementById("freight").value=0,document.getElementById("transport-select").value="",document.getElementById("installments").value=1,document.getElementById("notes").value="",document.getElementById("product-search").value="",document.getElementById("payment-pix").checked=!1,document.getElementById("payment-transfer").checked=!1,document.getElementById("payment-boleto").checked=!1,document.getElementById("payment-credit").checked=!1,document.getElementById("payment-credit-installments").value=1,L(),T(),G(),b(),h(),A(),V(),lt(),m()}function O(){if(!a.resellerName.trim())return alert("Por favor, informe o nome completo antes de salvar."),null;if(!a.attendanceBy.trim())return alert("Por favor, informe o nome do atendente antes de salvar."),null;const e=document.getElementById("order-date");let t;if(e&&e.value){const d=e.value;t=new Date(d+"T00:00:00")}else t=new Date;const n=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${n}${o}${i}_${a.attendanceBy.trim()}_${a.resellerName.trim()}`}function Pt(){a.products.forEach(e=>{e.quantity=0}),a.additionalProducts.forEach(e=>{e.quantity=0}),L(),b(),h(),m()}function It(){const e=document.getElementById("settlement-value");if(e){const t=e.textContent.trim(),n=document.getElementById("order-date"),o=document.getElementById("general-deadline-days");let i="";if(n&&n.value&&o&&o.value){const s=new Date(n.value+"T00:00:00"),c=parseInt(o.value)||0;i=`
Acerto até dia: ${new Date(s.getTime()+c*24*60*60*1e3).toLocaleDateString("pt-BR")}`}const d=`Valor do acerto: ${t}${i}`;navigator.clipboard.writeText(d).then(()=>{console.log(`Texto copiado: ${d}`)}).catch(s=>{console.error("Erro ao copiar valor: ",s),alert("Erro ao copiar valor. Tente novamente.")})}}function ct(){const e=O();if(!e)return;const t=Z();html2canvas(t,{scale:2,useCORS:!0,allowTaint:!0,backgroundColor:"#ffffff"}).then(n=>{const o=document.createElement("a");o.download=`${e}.jpg`,o.href=n.toDataURL("image/jpeg",.9),o.click(),document.body.removeChild(t),console.log("Imagem salva com sucesso!")}).catch(n=>{console.error("Erro ao gerar imagem:",n),document.body.removeChild(t),alert("Erro ao gerar imagem. Verifique se todas as bibliotecas estão carregadas.")})}function wt(){console.log("Botão Expedição/Imprimir clicado. Iniciando geração de PDF...");const e=O();if(!e)return;if(console.log("Iniciando geração de PDF..."),typeof html2canvas>"u"){alert("Erro: Biblioteca html2canvas não carregada. Recarregue a página e tente novamente.");return}let t;if(typeof window.jsPDF<"u")t=window.jsPDF;else if(typeof window.jspdf<"u"&&window.jspdf.jsPDF)t=window.jspdf.jsPDF;else if(typeof jsPDF<"u")t=jsPDF;else{alert("Erro: Biblioteca jsPDF não carregada. Recarregue a página e tente novamente.");return}const n=Z();html2canvas(n,{scale:2,useCORS:!0,allowTaint:!0,backgroundColor:"#ffffff",logging:!1,width:n.scrollWidth,height:n.scrollHeight}).then(o=>{const i=o.toDataURL("image/png"),d=new t("p","mm","a4"),s=210,c=295,r=o.height*s/o.width;let l=r,y=0;for(d.addImage(i,"PNG",0,y,s,r),l-=c;l>=0;)y=l-r,d.addPage(),d.addImage(i,"PNG",0,y,s,r),l-=c;d.save(`${e}.pdf`),document.body.removeChild(n),console.log("PDF gerado com sucesso!")}).catch(o=>{console.error("Erro ao gerar PDF:",o),document.body.removeChild(n),alert("Erro ao gerar PDF: "+o.message+". Recarregue a página e tente novamente.")})}function Z(){const e=document.createElement("div");e.style.cssText=`
        position: absolute;
        top: -9999px;
        left: -9999px;
        width: 800px;
        background: white;
        padding: 20px;
        font-family: Arial, sans-serif;
        font-size: 12px;
        line-height: 1.4;
        color: black;
    `;const t=document.getElementById("order-date");let n;if(t&&t.value){const g=t.value;n=new Date(g+"T00:00:00")}else n=new Date;const o=n.toLocaleDateString("pt-BR");let i="";const d=F(),s=Q();a.products.forEach(g=>{if(g.quantity>0){let v=g.individualDiscount!==null?g.individualDiscount:a.generalDiscount;g.applyGeneralDiscount===!1&&(v=g.individualDiscount!==null?g.individualDiscount:0);const w=$(g.catalogPrice,v),B=S(g.quantity,w);H()?i+=`
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">${g.name}</td>
                        <td style="text-align: center; border: 1px solid #ddd; padding: 8px;">${g.quantity}</td>
                        <td style="text-align: right; border: 1px solid #ddd; padding: 8px;">${p(g.catalogPrice)}</td>
                        <td style="text-align: center; border: 1px solid #ddd; padding: 8px;">${v.toFixed(1)}%</td>
                        <td style="text-align: right; border: 1px solid #ddd; padding: 8px;">${p(w)}</td>
                        <td style="text-align: right; border: 1px solid #ddd; padding: 8px;">${p(B)}</td>
                    </tr>
                `:i+=`
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">${g.name}</td>
                        <td style="text-align: center; border: 1px solid #ddd; padding: 8px;">${g.quantity}</td>
                        <td style="text-align: right; border: 1px solid #ddd; padding: 8px;">${p(g.catalogPrice)}</td>
                        <td style="text-align: right; border: 1px solid #ddd; padding: 8px;">${p(B)}</td>
                    </tr>
                `}}),a.additionalProducts.forEach(g=>{if(g.quantity>0){let v=g.individualDiscount!==null?g.individualDiscount:0;const w=$(g.catalogPrice,v),B=S(g.quantity,w);H()?i+=`
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">${g.name}</td>
                        <td style="text-align: center; border: 1px solid #ddd; padding: 8px;">${g.quantity}</td>
                        <td style="text-align: right; border: 1px solid #ddd; padding: 8px;">${p(g.catalogPrice)}</td>
                        <td style="text-align: center; border: 1px solid #ddd; padding: 8px;">${v.toFixed(1)}%</td>
                        <td style="text-align: right; border: 1px solid #ddd; padding: 8px;">${p(w)}</td>
                        <td style="text-align: right; border: 1px solid #ddd; padding: 8px;">${p(B)}</td>
                    </tr>
                `:i+=`
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">${g.name}</td>
                        <td style="text-align: center; border: 1px solid #ddd; padding: 8px;">${g.quantity}</td>
                        <td style="text-align: right; border: 1px solid #ddd; padding: 8px;">${p(g.catalogPrice)}</td>
                        <td style="text-align: right; border: 1px solid #ddd; padding: 8px;">${p(B)}</td>
                    </tr>
                `}});const r=H()?`
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Produto</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Quantidade</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Preço Catálogo</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Desconto (%)</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Preço c/ Desconto</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Total Item</th>
        </tr>
    `:`
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Produto</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Quantidade</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Preço Catálogo</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Total Item</th>
        </tr>
    `,l=N();W(),X();const y=C(),f=Y();return e.innerHTML=`
        <div style="position: relative; height: 80px; margin-bottom: 20px;">
            <img src="LogotipoCW.jpg" alt="Logo" style="position: absolute; top: 0; left: 0; max-height: 80px;">
            <h2 style="margin: 0; color: #333; text-align: center; line-height: 80px;">PEDIDO DE VENDAS</h2>
        </div>

        <div style="margin-bottom: 20px;">
            <p><strong>NOME:</strong> ${a.resellerName}</p>
            <p><strong>Data do Pedido:</strong> ${o}</p>
            ${a.address?`<p><strong>Endereço:</strong> ${a.address}</p>`:""}
            ${a.phone?`<p><strong>Telefone:</strong> ${a.phone}</p>`:""}
            ${a.attendanceBy?`<p><strong>Atendimento por:</strong> ${a.attendanceBy}</p>`:""}
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            ${r}
            ${i}
        </table>

        <div style="margin-bottom: 20px;">
            <p><strong>Quantidade Total:</strong> ${d}</p>
            <p><strong>Peso Total:</strong> ${s.toFixed(2)} kg (${(s*1e3).toFixed(0)} g)</p>
        </div>

        <div style="margin-bottom: 20px;">
            <h3 style="margin-bottom: 10px;">RESUMO DO PEDIDO</h3>
            <p><strong>Valor Bruto:</strong> ${p(l)}</p>
            ${a.freight>0?`<p><strong>Frete:</strong> ${p(a.freight)}${a.transportOption?` - ${a.transportOption}`:""}</p>`:""}
            ${a.creditPaid>0?`<p><strong>Crédito/Pago:</strong> ${p(a.creditPaid)}</p>`:""}
            <p><strong style="font-size: 18px; font-weight: 700; color: #dc3545;">Valor do Acerto:</strong> <span style="font-size: 18px; font-weight: 700; color: #dc3545;">${p(y)}</span></p>
            ${f>0?`<p><strong>Lucro:</strong> ${p(f)}</p>`:""}
        </div>

        <div style="margin-bottom: 20px;">
            <h3 style="margin-bottom: 10px;">Forma de Pagamento</h3>
            ${Bt()}
        </div>

        ${a.notes?`
        <div style="margin-bottom: 20px;">
            <h3 style="margin-bottom: 10px;">ANOTAÇÕES</h3>
            <p>${a.notes}</p>
        </div>
        `:""}
    `,document.body.appendChild(e),e}function Bt(){const e=document.getElementById("order-date");let t;if(e&&e.value){const l=e.value;l.includes("-")&&l.length>10?t=new Date:t=new Date(l+"T00:00:00")}else t=new Date;let n="";const o=[],i=document.querySelector('input[type="checkbox"][id*="pix"]')||document.querySelector('input[type="checkbox"]');if(i&&i.checked){const l=document.querySelector('input[placeholder*="PIX"]');l&&l.value.trim()?o.push(`PIX: ${l.value.trim()}`):o.push("PIX")}const d=document.getElementById("payment-credit");if(d&&d.checked){const l=a.paymentMethods.credit.installments,f=C()/l;o.push(`Cartão de Crédito: ${l} Parcela${l>1?"s":""} de ${p(f)}`)}const s=document.querySelectorAll('input[type="checkbox"]')[3];if(s&&s.checked){const l=document.querySelector('textarea[placeholder*="bancários"]');l&&l.value.trim()?o.push(`Transferência Bancária: ${l.value.trim()}`):o.push("Transferência Bancária")}const c=document.querySelectorAll('input[type="checkbox"]')[2];if(c&&c.checked){const l=a.installments;l===1?o.push("Boleto: 1 Parcela"):o.push(`Boleto: ${l} Parcelas`)}if(o.length>0&&(n+='<div style="margin-bottom: 5px;">',o.forEach(l=>{n+=`<p><strong>✅ ${l}</strong></p>`}),n+="</div>"),c&&c.checked)for(let l=0;l<a.installments;l++){const y=a.paymentDays[l]||0,f=new Date(t.getTime()+y*24*60*60*1e3),g=C()/a.installments;a.installments===1?n+=`<p><strong style="font-size: 16px; font-weight: 700; color: #dc3545;">Acerto até dia:</strong> <span style="font-size: 16px; font-weight: 700; color: #dc3545;">${f.toLocaleDateString("pt-BR")}</span></p>`:n+=`<p><strong>${l+1}ª Parcela ${p(g)} - <span style="font-size: 16px; font-weight: 700; color: #dc3545;">(Acerto até dia):</span></strong> <span style="font-size: 16px; font-weight: 700; color: #dc3545;">${f.toLocaleDateString("pt-BR")}</span></p>`}else{const l=a.generalDeadlineDays||0,y=new Date(t.getTime()+l*24*60*60*1e3);n+=`<p><strong style="font-size: 16px; font-weight: 700; color: #dc3545;">Acerto até dia:</strong> <span style="font-size: 16px; font-weight: 700; color: #dc3545;">${y.toLocaleDateString("pt-BR")}</span></p>`}return n}function E(e){return typeof e=="number"?e.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2}).replace(/\s/g,""):e}function $t(){const e=O();if(e)try{const t=[];t.push(["PEDIDO DE VENDAS"]),t.push([]),t.push(["NOME:",a.resellerName]);const n=document.getElementById("order-date");let o;if(n&&n.value){const u=n.value;o=new Date(u+"T00:00:00")}else o=new Date;t.push(["Data do Pedido:",o.toLocaleDateString("pt-BR")]),a.address&&t.push(["Endereço:",a.address]),a.phone&&t.push(["Telefone:",a.phone]),a.attendanceBy&&t.push(["Atendimento por:",a.attendanceBy]),t.push([]);const i=H(),d=i?["Produto","Quantidade","Preço Catálogo","Desconto (%)","Preço c/ Desconto","Total Item"]:["Produto","Quantidade","Preço Catálogo","Total Item"];t.push(d);const s=F(),c=Q();a.products.forEach(u=>{if(u.quantity>0){let x=u.individualDiscount!==null?u.individualDiscount:a.generalDiscount;u.applyGeneralDiscount===!1&&(x=u.individualDiscount!==null?u.individualDiscount:0);const D=$(u.catalogPrice,x),P=S(u.quantity,D),I=i?[u.name,u.quantity,E(u.catalogPrice),x+"%",E(D),E(P)]:[u.name,u.quantity,E(u.catalogPrice),E(P)];t.push(I)}}),a.additionalProducts.forEach(u=>{if(u.quantity>0){let x=u.individualDiscount!==null?u.individualDiscount:0;const D=$(u.catalogPrice,x),P=S(u.quantity,D),I=i?[u.name,u.quantity,E(u.catalogPrice),x+"%",E(D),E(P)]:[u.name,u.quantity,E(u.catalogPrice),E(P)];t.push(I)}}),t.push([]),t.push(["Quantidade Total:",s]),t.push([`Peso Total: ${c.toFixed(2)} kg (${(c*1e3).toFixed(0)} g)`]),t.push([]),t.push(["RESUMO DO PEDIDO"]),t.push(["Valor Bruto:",E(N())]),t.push(["Frete:",E(a.freight)]),t.push(["Transporte:",a.transportOption||""]),a.creditPaid>0&&t.push(["Crédito/Pago:",E(a.creditPaid)]),t.push(["Valor do Acerto:",E(C())]);const r=Y();r>0&&t.push(["Lucro:",E(r)]),t.push([]),t.push(["Forma de Pagamento"]);const l=[],y=document.querySelector('input[type="checkbox"][id*="pix"]')||document.querySelector('input[type="checkbox"]');if(y&&y.checked){const u=document.querySelector('input[placeholder*="PIX"]');u&&u.value.trim()?l.push(`✅ PIX: ${u.value.trim()}`):l.push("✅ PIX")}const f=document.getElementById("payment-credit");if(f&&f.checked){const u=a.paymentMethods.credit.installments;l.push(`✅ Cartão de Crédito: ${u} Parcela${u>1?"s":""}`)}const g=document.getElementById("payment-transfer");if(g&&g.checked){const u=document.querySelector('textarea[placeholder*="bancários"]');u&&u.value.trim()?l.push(`✅ Transferência Bancária: ${u.value.trim()}`):l.push("✅ Transferência Bancária")}const v=document.getElementById("payment-boleto");if(v&&v.checked){const u=a.installments;u===1?l.push("✅ Boleto: 1 Parcela"):l.push(`✅ Boleto: ${u} Parcelas`)}if(l.forEach(u=>{t.push([u])}),v&&v.checked)for(let u=0;u<a.installments;u++){const x=a.paymentDays[u]||0,D=document.getElementById("order-date");let P;if(D&&D.value){const _=D.value;_.includes("-")&&_.length>10?P=new Date:P=new Date(_+"T00:00:00")}else P=new Date;const I=new Date(P.getTime()+x*24*60*60*1e3),q=C()/a.installments;a.installments===1?t.push(["Acerto até dia:",I.toLocaleDateString("pt-BR"),`Prazo: ${generalDeadlineDays} dias`]):t.push([`${u+1}ª Parcela:`,E(q),`Prazo: ${x} dias`,"Acerto até dia:",I.toLocaleDateString("pt-BR")])}else{const u=a.generalDeadlineDays||0,x=document.getElementById("order-date");let D;if(x&&x.value){const I=x.value;I.includes("-")&&I.length>10?D=new Date:D=new Date(I+"T00:00:00")}else D=new Date;const P=new Date(D.getTime()+u*24*60*60*1e3);t.push(["Acerto até dia:",P.toLocaleDateString("pt-BR"),`Prazo: ${u} dias`])}a.notes&&(t.push([]),t.push(["ANOTAÇÕES"]),t.push([a.notes]));const B=XLSX.utils.book_new(),k=XLSX.utils.aoa_to_sheet(t);XLSX.utils.book_append_sheet(B,k,"Pedido"),XLSX.writeFile(B,`${e}.xlsx`),console.log("Excel exportado com sucesso!")}catch(t){console.error("Erro ao exportar Excel:",t),alert("Erro ao exportar para Excel. Verifique se todas as bibliotecas estão carregadas.")}}function St(){const e={name:"",catalogPrice:0,weight:.1,quantity:0,individualDiscount:null,lot:""};a.additionalProducts.push(e),L(),m()}function M(e){return typeof e!="string"?"":e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function ut(e){if(!e.trim()){L();return}const t=M(e),n=a.products.filter(o=>M(o.name).includes(t));L(n)}function gt(e){const t=document.getElementById("clear-search-btn");t&&(e.trim()?t.classList.add("visible"):t.classList.remove("visible"))}function Lt(){const e=document.getElementById("product-search");e&&(e.value="",ut(""),gt(""),e.focus())}function Ct(){a.products.forEach(e=>{e.quantity=0}),a.additionalProducts.forEach(e=>{e.quantity=0}),a.packaging.forEach(e=>{e.quantity=0}),L(),T(),b(),h(),m()}function $(e,t){return e*(1-t/100)}function S(e,t){return e*t}function F(){let e=0;return a.products.forEach(t=>{e+=t.quantity}),a.additionalProducts.forEach(t=>{e+=t.quantity}),e}function Q(){let e=0;return a.products.forEach(t=>{e+=t.quantity*(t.weight||0)}),a.additionalProducts.forEach(t=>{e+=t.quantity*(t.weight||.1)}),a.packaging.forEach(t=>{e+=t.quantity*(t.weight||0)/1e3}),e}function N(){let e=0;return a.products.forEach(t=>{e+=t.quantity*t.catalogPrice}),a.additionalProducts.forEach(t=>{e+=t.quantity*t.catalogPrice}),e}function kt(){return N()*(a.generalDiscount/100)}function W(){let e=0;return a.products.forEach(t=>{let n=t.individualDiscount!==null?t.individualDiscount:a.generalDiscount;t.applyGeneralDiscount===!1&&(n=t.individualDiscount!==null?t.individualDiscount:0);const o=$(t.catalogPrice,n);e+=S(t.quantity,o)}),a.additionalProducts.forEach(t=>{let n=t.individualDiscount!==null?t.individualDiscount:0;const o=$(t.catalogPrice,n);e+=S(t.quantity,o)}),e+a.freight}function X(){return W()}function C(){return X()-a.creditPaid}function Y(){const e=N(),t=W();return e-t}function Tt(e){const t=document.getElementById("products-tbody");if(!t)return;t.querySelectorAll("tr").forEach(o=>{if(o.querySelector("#add-new-product-btn"))return;const i=o.querySelector(".quantity-input, .additional-product-quantity-input");if(i){const d=parseFloat(i.value)||0;e&&d===0?o.style.display="none":o.style.display=""}})}function U(){window.scrollTo({top:0,behavior:"smooth"})}function at(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}function qt(){console.log("Botão Expedição clicado. Iniciando geração de PDF com colunas ocultas...");const e=O();if(!e)return;if(console.log("Iniciando geração de PDF para expedição..."),typeof html2canvas>"u"){alert("Erro: Biblioteca html2canvas não carregada. Recarregue a página e tente novamente.");return}let t;if(typeof window.jsPDF<"u")t=window.jsPDF;else if(typeof window.jspdf<"u"&&window.jspdf.jsPDF)t=window.jspdf.jsPDF;else if(typeof jsPDF<"u")t=jsPDF;else{alert("Erro: Biblioteca jsPDF não carregada. Recarregue a página e tente novamente.");return}const n=At();html2canvas(n,{scale:2,useCORS:!0,allowTaint:!0,backgroundColor:"#ffffff",logging:!1,width:n.scrollWidth,height:n.scrollHeight}).then(o=>{const i=o.toDataURL("image/png"),d=new t("p","mm","a4"),s=210,c=297,r=10,l=s-2*r,y=o.height*l/o.width;let f=y,g=r;for(d.addImage(i,"PNG",r,g,l,y),f-=c-2*r;f>=0;)g=f-y+r,d.addPage(),d.addImage(i,"PNG",r,g,l,y),f-=c-2*r;d.save(`${e}.pdf`),document.body.removeChild(n),console.log("PDF de expedição gerado com sucesso!")}).catch(o=>{console.error("Erro ao gerar PDF de expedição:",o),document.body.removeChild(n),alert("Erro ao gerar PDF: "+o.message+". Recarregue a página e tente novamente.")})}function Mt(){let e="";const t=[];if(a.paymentMethods.pix.enabled&&t.push(`✅ PIX${a.paymentMethods.pix.details?": "+a.paymentMethods.pix.details:""}`),a.paymentMethods.credit.enabled){const n=a.paymentMethods.credit.installments;t.push(`✅ Cartão de Crédito: ${n} Parcela${n>1?"s":""}`)}if(a.paymentMethods.transfer.enabled&&t.push(`✅ Transferência Bancária${a.paymentMethods.transfer.details?": "+a.paymentMethods.transfer.details:""}`),a.paymentMethods.boleto.enabled){const n=a.installments;n===1?t.push("✅ Boleto: 1 Parcela"):t.push(`✅ Boleto: ${n} Parcelas`)}return t.length>0&&(e+='<div style="margin-bottom: 10px;">',t.forEach(n=>{e+=`<p>${n}</p>`}),e+="</div>"),e}function At(){const e=document.createElement("div");e.style.cssText=`
        position: absolute;
        top: -9999px;
        left: -9999px;
        width: 800px;
        background: white;
        padding: 20px;
        font-family: Arial, sans-serif;
        font-size: 12px;
        line-height: 1.4;
        color: black;
    `;const t=document.getElementById("order-date");let n;if(t&&t.value){const r=t.value;n=new Date(r+"T00:00:00")}else n=new Date;const o=n.toLocaleDateString("pt-BR");let i="";const d=F(),s=Q();a.products.forEach(r=>{r.quantity>0&&(i+=`
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">${r.name}</td>
                    <td style="text-align: center; border: 1px solid #ddd; padding: 8px;">${r.quantity}</td>
                    <td style="text-align: center; border: 1px solid #ddd; padding: 8px;">${r.lot||""}</td>
                </tr>
            `)}),a.additionalProducts.forEach(r=>{r.quantity>0&&(i+=`
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">${r.name}</td>
                    <td style="text-align: center; border: 1px solid #ddd; padding: 8px;">${r.quantity}</td>
                    <td style="text-align: center; border: 1px solid #ddd; padding: 8px;">${r.lot||""}</td>
                </tr>
            `)});const c=`
        <tr>
            <th style="width: 50%; border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Produto</th>
            <th style="width: 15%; text-align: center; border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Quantidade</th>
            <th style="width: 35%; border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Lote</th>
        </tr>
    `;return e.innerHTML=`
        <div style="position: relative; height: 80px; margin-bottom: 20px;">
            <img src="LogotipoCW.jpg" alt="Logo" style="position: absolute; top: 0; left: 0; max-height: 80px;">
            <h2 style="margin: 0; color: #333; text-align: center; line-height: 80px;">EXPEDIÇÃO</h2>
        </div>

        <div style="margin-bottom: 20px;">
            <p><strong>NOME:</strong> ${a.resellerName}</p>
            <p><strong>Data do Pedido:</strong> ${o}</p>
            ${a.address?`<p><strong>Endereço:</strong> ${a.address}</p>`:""}
            ${a.phone?`<p><strong>Telefone:</strong> ${a.phone}</p>`:""}
            ${a.attendanceBy?`<p><strong>Atendimento por:</strong> ${a.attendanceBy}</p>`:""}
            ${a.transportOption?`<p><strong>Transporte:</strong> ${a.transportOption}</p>`:""}
        </div>

        <div style="margin-bottom: 20px;">
            <h3 style="margin-bottom: 10px;">PRODUTOS</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <thead>
                    ${c}
                </thead>
                <tbody>
                    ${i}
                    </tbody>
                </table>

        <div style="margin-bottom: 20px;">
            <h3 style="margin-bottom: 10px;">EMBALAGENS DO PEDIDO</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <thead>
                    <tr>
                        <th style="width: 40%; border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Caixa</th>
                        <th style="width: 20%; text-align: center; border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Qtde</th>
                        <th style="width: 20%; text-align: center; border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Peso (g)</th>
                        <th style="width: 20%; text-align: center; border: 1px solid #ddd; padding: 8px; background-color: #f5f5f5;">Peso Total (g)</th>
                    </tr>
                </thead>
                  <tbody>
                    ${a.packaging.filter(r=>r.quantity>0).map(r=>`
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">${r.name}</td>
                            <td style="text-align: center; border: 1px solid #ddd; padding: 8px;">${r.quantity}</td>
                            <td style="text-align: center; border: 1px solid #ddd; padding: 8px;">${r.weight}</td>
                            <td style="text-align: center; border: 1px solid #ddd; padding: 8px;">${r.quantity*r.weight}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>

        <div style="margin-bottom: 20px;">
            <p><strong>Quantidade Total:</strong> ${d}</p>
            <p><strong>Peso Total:</strong> ${s.toFixed(2)} kg (${(s*1e3).toFixed(0)} g)</p>
        </div>

        ${a.notes?`     <div style="margin-bottom: 20px;">
            <h3 style="margin-bottom: 10px;">ANOTAÇÕES</h3>
            <p>${a.notes}</p>
        </div>
        `:""}

        <div style="margin-bottom: 20px;">
            <h3 style="margin-bottom: 10px;">FORMA DE PAGAMENTO</h3>
            ${Mt()}
        </div>
    `,document.body.appendChild(e),e}function T(){const e=document.getElementById("packaging-tbody");if(!e){console.error("renderPackagingTable: Elemento packaging-tbody não encontrado");return}e.innerHTML="",a.packaging.forEach((t,n)=>{const o=Ot(t,n);e.appendChild(o)}),a.packaging.length===0&&pt()}function Ot(e,t){const n=document.createElement("tr"),o=e.quantity*(e.weight||0);return n.innerHTML=`
        <td>
            <input type="text" 
                   value="${e.name||""}" 
                   data-packaging-index="${t}" 
                   data-field="name" 
                   class="packaging-name-input" 
                   placeholder="Nome da caixa">
        </td>
        <td>
            <input type="number" 
                   value="${e.quantity||""}" 
                   data-packaging-index="${t}" 
                   data-field="quantity" 
                   class="packaging-quantity-input" 
                   min="0" 
                   step="1" 
                   placeholder="0">
        </td>
        <td>
            <input type="number" 
                   value="${e.weight||""}" 
                   data-packaging-index="${t}" 
                   data-field="weight" 
                   class="packaging-weight-input" 
                   min="0" 
                   step="1" 
                   placeholder="0">
        </td>
        <td>
            <span class="packaging-weight-total">${o.toFixed(0)}</span>
            <button class="remove-packaging-btn" data-packaging-index="${t}">×</button>
        </td>
    `,n}function pt(){a.packaging.push({name:"",quantity:0,weight:0}),T(),m()}function Ft(e){a.packaging.splice(e,1),T(),b(),m()}function Nt(e,t,n){if(a.packaging[e]){t==="quantity"||t==="weight"?a.packaging[e][t]=parseFloat(n)||0:a.packaging[e][t]=n;const o=a.packaging[e].quantity*(a.packaging[e].weight||0),i=document.querySelector(`[data-packaging-index="${e}"]`).closest("tr").querySelector(".packaging-weight-total");i&&(i.textContent=o.toFixed(0)),b(),m()}}document.addEventListener("input",function(e){if(e.target.classList.contains("packaging-name-input")||e.target.classList.contains("packaging-quantity-input")||e.target.classList.contains("packaging-weight-input")){const t=parseInt(e.target.dataset.packagingIndex),n=e.target.dataset.field;Nt(t,n,e.target.value)}});document.addEventListener("click",function(e){if(e.target.id==="add-new-packaging-btn"&&pt(),e.target.classList.contains("remove-packaging-btn")){const t=parseInt(e.target.dataset.packagingIndex);Ft(t)}});function V(){const e=document.getElementById("transport-display");e&&(e.textContent=a.transportOption||"")}function Vt(){const e=document.createElement("div");e.className="transport-modal",e.innerHTML=`
        <div class="transport-modal-content">
            <h3>Adicionar Nova Opção de Transporte</h3>
            <input type="text" id="new-transport-input" class="modern-input" placeholder="Digite a nova opção de transporte" maxlength="50">
            <div class="transport-modal-buttons">
                <button class="btn btn-secondary" onclick="closeTransportModal()">Cancelar</button>
                <button class="btn btn-primary" onclick="addNewTransportOption()">Adicionar</button>
            </div>
        </div>
    `,document.body.appendChild(e);const t=document.getElementById("new-transport-input");t&&(t.focus(),t.addEventListener("keypress",function(n){n.key==="Enter"&&Rt()})),e.addEventListener("click",function(n){n.target===e&&mt()})}function mt(){const e=document.querySelector(".transport-modal");e&&document.body.removeChild(e)}function Rt(){const e=document.getElementById("new-transport-input");if(!e)return;const t=e.value.trim();if(!t){alert("Por favor, digite uma opção de transporte válida.");return}const n=document.getElementById("transport-select");if(Array.from(n.options).map(d=>d.value.toLowerCase()).includes(t.toLowerCase())){alert("Esta opção de transporte já existe.");return}const i=document.createElement("option");i.value=t,i.textContent=t,n.appendChild(i),n.value=t,a.transportOption=t,V(),m(),mt()}document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){V()},100)});const tt="pedidos-historico";function R(){const e=localStorage.getItem(tt);return e?JSON.parse(e):[]}function j(e){const t=R(),n=new Date().toISOString(),o={id:n,timestamp:n,date:e.orderDate||new Date().toISOString().split("T")[0],resellerName:e.resellerName,attendanceBy:e.attendanceBy,finalValue:X(),profit:Y(),settlementValue:C(),totalQuantity:F(),orderData:JSON.parse(JSON.stringify(e))};return t.unshift(o),localStorage.setItem(tt,JSON.stringify(t)),o}function Ht(e){const n=R().filter(o=>o.id!==e);localStorage.setItem(tt,JSON.stringify(n))}function jt(e){const n=R().find(o=>o.id===e);n&&(a=JSON.parse(JSON.stringify(n.orderData)),L(),T(),b(),h(),G(),A(),document.getElementById("reseller-name").value=a.resellerName,document.getElementById("address").value=a.address,document.getElementById("phone").value=a.phone,document.getElementById("attendance-by").value=a.attendanceBy,document.getElementById("order-date").value=a.orderDate,document.getElementById("freight").value=a.freight,document.getElementById("general-discount").value=a.generalDiscount,document.getElementById("credit-paid").value=a.creditPaid,document.getElementById("notes").value=a.notes,document.getElementById("transport-select").value=a.transportOption,document.getElementById("general-deadline-days").value=a.generalDeadlineDays,document.getElementById("installments").value=a.installments,document.getElementById("payment-credit-installments").value=a.paymentMethods.credit.installments,document.getElementById("payment-pix").checked=a.paymentMethods.pix.enabled,document.getElementById("payment-credit").checked=a.paymentMethods.credit.enabled,document.getElementById("payment-boleto").checked=a.paymentMethods.boleto.enabled,document.getElementById("payment-transfer").checked=a.paymentMethods.transfer.enabled,document.getElementById("payment-pix-details").value=a.paymentMethods.pix.details,document.getElementById("payment-transfer-details").value=a.paymentMethods.transfer.details,rt(),V(),m(),K(),U())}function ft(){if(!a.resellerName.trim()){alert("Por favor, preencha o nome do cliente antes de salvar."),document.getElementById("reseller-name").focus();return}j(a),ct(),alert("Pedido salvo no histórico e exportado como imagem com sucesso!")}function zt(){document.addEventListener("keydown",function(e){if((e.ctrlKey||e.metaKey)&&e.key==="s"&&(e.preventDefault(),ft()),e.key==="Delete"){const t=document.activeElement;t&&(t.classList.contains("quantity-input")||t.classList.contains("discount-input")||t.classList.contains("additional-product-quantity-input")||t.classList.contains("additional-product-discount-input"))&&(t.value="",t.dispatchEvent(new Event("input",{bubbles:!0})))}if(e.key==="Enter"){const t=document.activeElement;if(t&&(t.classList.contains("quantity-input")||t.classList.contains("discount-input")||t.classList.contains("additional-product-quantity-input")||t.classList.contains("additional-product-discount-input"))){const n=Array.from(document.querySelectorAll(".quantity-input, .discount-input, .additional-product-quantity-input, .additional-product-discount-input")),o=n.indexOf(t);o<n.length-1&&(n[o+1].focus(),n[o+1].select())}}})}function Gt(){const e=document.getElementById("products-tbody");e&&(e.addEventListener("focus",function(t){if(t.target.tagName==="INPUT"||t.target.tagName==="SELECT"){const n=t.target.closest("tr");n&&(document.querySelectorAll(".products-table tbody tr.active-row").forEach(o=>{o.classList.remove("active-row")}),n.classList.add("active-row"))}},!0),e.addEventListener("blur",function(t){if(t.target.tagName==="INPUT"||t.target.tagName==="SELECT"){const n=t.target.closest("tr");n&&n.classList.remove("active-row")}},!0))}function Qt(){const e=document.getElementById("history-modal");e&&(e.classList.add("show"),z())}function K(){const e=document.getElementById("history-modal");e&&e.classList.remove("show")}function z(e="",t=""){const n=document.getElementById("history-list");if(!n)return;let o=R();if(t){const i=new Date,d=i.getFullYear()+"-"+String(i.getMonth()+1).padStart(2,"0")+"-"+String(i.getDate()).padStart(2,"0");o=o.filter(s=>{let c=s.date;if(!c&&s.timestamp){const l=new Date(s.timestamp);c=l.getFullYear()+"-"+String(l.getMonth()+1).padStart(2,"0")+"-"+String(l.getDate()).padStart(2,"0")}if(!c)return!1;const r=c.split("T")[0];switch(t){case"today":return r===d;case"week":const l=new Date(i);l.setDate(l.getDate()-7);const y=l.getFullYear()+"-"+String(l.getMonth()+1).padStart(2,"0")+"-"+String(l.getDate()).padStart(2,"0");return r>=y;case"month":const f=new Date(i);f.setMonth(f.getMonth()-1);const g=f.getFullYear()+"-"+String(f.getMonth()+1).padStart(2,"0")+"-"+String(f.getDate()).padStart(2,"0");return r>=g;default:return!0}})}if(e){const i=M(e);o=o.filter(d=>M(d.resellerName).includes(i)||M(d.attendanceBy).includes(i)||d.date.includes(e))}if(o.length===0){n.innerHTML='<div class="history-empty">Nenhum pedido encontrado</div>';return}n.innerHTML=o.map(i=>`
        <div class="history-item" data-history-id="${i.id}">
            <div class="history-item-header">
                <span class="history-item-title">${i.resellerName}</span>
                <span class="history-item-date">${new Date(i.timestamp).toLocaleString("pt-BR")}</span>
            </div>
            <div class="history-item-details">
                <div><strong>Atendente:</strong> ${i.attendanceBy}</div>
                <div><strong>Data:</strong> ${new Date(i.date).toLocaleDateString("pt-BR")}</div>
                <div><strong>Valor:</strong> ${p(i.finalValue)}</div>
            </div>
            <div class="history-item-actions">
                <button class="btn btn-primary history-load-btn" data-id="${i.id}">📂 Carregar</button>
                <button class="btn btn-danger history-delete-btn" data-id="${i.id}">🗑️ Deletar</button>
            </div>
        </div>
    `).join(""),document.querySelectorAll(".history-load-btn").forEach(i=>{i.addEventListener("click",function(){jt(this.dataset.id)})}),document.querySelectorAll(".history-delete-btn").forEach(i=>{i.addEventListener("click",function(){Wt(this.dataset.id)})})}function Wt(e){if(confirm("Tem certeza que deseja deletar este pedido do histórico?")){Ht(e),z();const t=document.getElementById("dashboard-modal");t&&t.classList.contains("show")&&et("all")}}function Xt(){const e=document.getElementById("dashboard-modal");e&&(e.classList.add("show"),et("all"))}function ot(){const e=document.getElementById("dashboard-modal");e&&e.classList.remove("show")}function et(e="all"){let t=R();if(e!=="all"){const s=new Date,c=s.getFullYear()+"-"+String(s.getMonth()+1).padStart(2,"0")+"-"+String(s.getDate()).padStart(2,"0");t=t.filter(r=>{let l=r.date;if(!l&&r.timestamp){const f=new Date(r.timestamp);l=f.getFullYear()+"-"+String(f.getMonth()+1).padStart(2,"0")+"-"+String(f.getDate()).padStart(2,"0")}if(!l)return!1;const y=l.split("T")[0];switch(e){case"today":return y===c;case"week":const f=new Date(s);f.setDate(f.getDate()-7);const g=f.getFullYear()+"-"+String(f.getMonth()+1).padStart(2,"0")+"-"+String(f.getDate()).padStart(2,"0");return y>=g;case"month":const v=new Date(s);v.setMonth(v.getMonth()-1);const w=v.getFullYear()+"-"+String(v.getMonth()+1).padStart(2,"0")+"-"+String(v.getDate()).padStart(2,"0");return y>=w;default:return!0}})}const n=t.reduce((s,c)=>s+c.finalValue,0),o=t.reduce((s,c)=>s+c.profit,0),i=t.length,d=i>0?n/i:0;document.getElementById("dashboard-total-sales").textContent=p(n),document.getElementById("dashboard-order-count").textContent=i,document.getElementById("dashboard-avg-ticket").textContent=p(d),document.getElementById("dashboard-total-profit").textContent=p(o),Yt(t),_t(t)}function Yt(e){const t=document.getElementById("sales-chart");if(!t)return;const n={};e.forEach(d=>{const s=new Date(d.date).toLocaleDateString("pt-BR");n[s]=(n[s]||0)+d.finalValue});const o=Object.keys(n).reverse(),i=o.map(d=>n[d]);window.salesChart&&window.salesChart.destroy(),window.salesChart=new Chart(t,{type:"line",data:{labels:o,datasets:[{label:"Vendas (R$)",data:i,borderColor:"#28a745",backgroundColor:"rgba(40, 167, 69, 0.1)",tension:.4,fill:!0}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{display:!0,position:"top"}},scales:{y:{beginAtZero:!0,ticks:{callback:function(d){return"R$ "+d.toFixed(2)}}}}}})}function _t(e){const t=document.getElementById("products-chart");if(!t)return;const n={};e.forEach(s=>{s.orderData.products.forEach(c=>{c.quantity>0&&(n[c.name]=(n[c.name]||0)+c.quantity)}),s.orderData.additionalProducts.forEach(c=>{c.quantity>0&&(n[c.name]=(n[c.name]||0)+c.quantity)})});const o=Object.entries(n).sort((s,c)=>c[1]-s[1]).slice(0,10),i=o.map(s=>s[0].substring(0,20)+(s[0].length>20?"...":"")),d=o.map(s=>s[1]);window.productsChart&&window.productsChart.destroy(),window.productsChart=new Chart(t,{type:"bar",data:{labels:i,datasets:[{label:"Quantidade Vendida",data:d,backgroundColor:"#28a745",borderColor:"#218838",borderWidth:1}]},options:{indexAxis:"y",responsive:!0,maintainAspectRatio:!0,plugins:{legend:{display:!0,position:"top"}},scales:{x:{beginAtZero:!0,ticks:{stepSize:1}}}}})}ct=function(){const e=O();if(!e)return;const t=Z();html2canvas(t,{scale:2,useCORS:!0,allowTaint:!0,backgroundColor:"#ffffff"}).then(n=>{const o=document.createElement("a");o.download=`${e}.jpg`,o.href=n.toDataURL("image/jpeg",.9),o.click(),document.body.removeChild(t),console.log("Imagem salva com sucesso!")}).catch(n=>{console.error("Erro ao gerar imagem:",n),document.body.removeChild(t),alert("Erro ao gerar imagem. Verifique se todas as bibliotecas estão carregadas.")})};document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("history-btn"),t=document.getElementById("dashboard-btn"),n=document.getElementById("history-modal-close"),o=document.getElementById("dashboard-modal-close"),i=document.getElementById("history-search"),d=document.getElementById("history-filter"),s=document.getElementById("dashboard-period");e&&e.addEventListener("click",Qt),t&&t.addEventListener("click",Xt),n&&n.addEventListener("click",K),o&&o.addEventListener("click",ot),i&&i.addEventListener("input",function(){z(this.value,document.getElementById("history-filter").value)}),d&&d.addEventListener("change",function(){z(document.getElementById("history-search").value,this.value)}),s&&s.addEventListener("change",function(){et(this.value)});const c=document.getElementById("history-modal"),r=document.getElementById("dashboard-modal");c&&c.addEventListener("click",function(l){l.target===this&&K()}),r&&r.addEventListener("click",function(l){l.target===this&&ot()}),zt(),Gt()});
//# sourceMappingURL=index-Df9nnsZt.js.map
