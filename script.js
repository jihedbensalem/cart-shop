function changeQuantity(button, amount) {
    var item = button.parentElement;
    var quantityElement = item.querySelector('.quantity');
    var price = parseFloat(item.getAttribute('data-price'));
    var quantity = parseInt(quantityElement.textContent);
  
    quantity += amount;
  
    if (quantity < 0) {
      quantity = 0;
    }
  
    quantityElement.textContent = quantity;
    updateTotal();
  }
  
  function toggleLike(button) {
    button.classList.toggle('liked');
    updateTotal();
  }
  
  function deleteItem(button) {
    var item = button.parentElement;
    item.remove();
    updateTotal();
  }
  
  function updateTotal() {
    var items = document.querySelectorAll('.item');
    var total = 0;
  
    items.forEach(function(item) {
      var quantity = parseInt(item.querySelector('.quantity').textContent);
      var price = parseFloat(item.getAttribute('data-price'));
      total += quantity * price;
    });
  
    document.getElementById('total').textContent = 'Total: $' + total.toFixed(2);
  }