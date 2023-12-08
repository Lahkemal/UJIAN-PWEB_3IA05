let stocks = [];
let editIndex = -1;

function addStock() {
  const productName = document.getElementById("productName").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const price = parseFloat(document.getElementById("price").value);

  if (!productName || isNaN(quantity) || isNaN(price) || quantity < 0 || price < 0) {
    alert("Silakan isi semua kolom dengan benar");
    return;
  }

  const totalValue = quantity * price;
  const newStock = { productName, quantity, price, totalValue };

  if (editIndex === -1) {
    stocks.push(newStock);
  } else {
    stocks[editIndex] = newStock;
    editIndex = -1;
    document.getElementById("addBtn").style.display = "block";
    document.getElementById("updateBtn").style.display = "none";
  }

  updateStockTable();
  clearForm();
}

function editStock(index) {
  const stock = stocks[index];
  document.getElementById("productName").value = stock.productName;
  document.getElementById("quantity").value = stock.quantity;
  document.getElementById("price").value = stock.price;
  editIndex = index;

  document.getElementById("addBtn").style.display = "none";
  document.getElementById("updateBtn").style.display = "block";
}

function updateStock() {
  addStock(); // untuk update stok
}

function deleteStock(index) {
  stocks.splice(index, 1);
  updateStockTable();
  clearForm();
}

function updateStockTable() {
  const stockList = document.getElementById("stockList");
  stockList.innerHTML = "";

  stocks.forEach((stock, index) => {
    const row = stockList.insertRow();
    row.innerHTML = `
      <td>${stock.productName}</td>
      <td>${stock.quantity}</td>
      <td>${stock.price}</td>
      <td>${stock.totalValue}</td>
      <td>
        <button onclick="editStock(${index})">Edit</button>
        <button onclick="deleteStock(${index})">Hapus</button>
      </td>
    `;
  });
}

function clearForm() {
  document.getElementById("productName").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("price").value = "";
}

// Memperbarui tampilan awal
updateStockTable();
