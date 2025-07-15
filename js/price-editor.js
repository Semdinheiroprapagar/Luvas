// Lista de produtos e seus preços iniciais
const products = [
  { name: 'Luvas de Treino Premium', normal: 89.90, promo: 79.90 },
  { name: 'Cinto de Musculação', normal: 149.90, promo: 139.90 },
  { name: 'Garrafa Esportiva 1L', normal: 59.90, promo: 54.90 },
  { name: 'Kit Faixas Elásticas', normal: 79.90, promo: 72.90 },
  { name: 'Whey Protein Isolado', normal: 189.90, promo: 179.90 },
  { name: 'BCAA 2:1:1', normal: 79.90, promo: 72.90 },
  { name: 'Creatina Monohidratada', normal: 99.90, promo: 89.90 },
  { name: 'Pré-treino Extreme', normal: 119.90, promo: 109.90 },
  { name: 'Camiseta Dry-fit', normal: 69.90, promo: 62.90 },
  { name: 'Regata Performance', normal: 59.90, promo: 54.90 },
  { name: 'Legging Compressão', normal: 109.90, promo: 99.90 },
  { name: 'Tênis Esportivo', normal: 249.90, promo: 229.90 }
];

// Preencher o select com os produtos
const select = document.getElementById('product-select');
products.forEach((p, i) => {
  const opt = document.createElement('option');
  opt.value = i;
  opt.textContent = p.name;
  select.appendChild(opt);
});

// Atualizar inputs ao trocar produto
const normalInput = document.getElementById('normal-price');
const promoInput = document.getElementById('promo-price');
function updateInputs() {
  const idx = select.value;
  if (products[idx]) {
    normalInput.value = products[idx].normal.toFixed(2);
    promoInput.value = products[idx].promo.toFixed(2);
  }
}
select.addEventListener('change', updateInputs);
updateInputs();

// Atualizar preços na página
function updatePricesOnPage(idx) {
  const prod = products[idx];
  // Procurar todos os cards com o nome do produto
  document.querySelectorAll('.product-item').forEach(item => {
    const title = item.querySelector('h3');
    if (title && title.textContent.trim() === prod.name) {
      const price = item.querySelector('.product-price');
      const promo = item.querySelector('.product-price-promo');
      if (price) price.textContent = `R$ ${Number(prod.normal).toFixed(2).replace('.', ',')}`;
      if (promo) promo.textContent = `Acima de 10 peças: R$ ${Number(prod.promo).toFixed(2).replace('.', ',')}`;
    }
  });
}

// Salvar edição
const form = document.getElementById('price-edit-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const idx = select.value;
  products[idx].normal = parseFloat(normalInput.value);
  products[idx].promo = parseFloat(promoInput.value);
  updatePricesOnPage(idx);
  document.getElementById('edit-success').style.display = 'block';
  setTimeout(() => {
    document.getElementById('edit-success').style.display = 'none';
  }, 1200);
}); 