window.onload = () => {
  const marketplaceData = [
    {
      sellerId: "s001",
      sellerName: "TechZone",
      orders: [
        {
          orderId: "o1001",
          customer: { id: "c001", name: "Alice" },
          items: [
            {
              productId: "p100",
              title: "Laptop Pro",
              variant: { sku: "LP-13-8GB", price: 1500 },
              quantity: 1
            },
            {
              productId: "p101",
              title: "Mouse Pad",
              variant: { sku: "MP-XL", price: 20 },
              quantity: 2
            }
          ]
        }
      ]
    }
  ];

  // Mostrar dataset original
  document.getElementById("dataset").textContent = JSON.stringify(marketplaceData, null, 2);

  // Ejercicio pendiente por resolver: resultado vacío
  const result = marketplaceData.map(seller => ({
    //...seller
    sellerId: seller.sellerId,
    sellerName: seller.sellerName,
    orders: seller.orders.map(order => ({
      orderId: order.orderId,
      customer: order.customer,
      items: order.items.map(item => ({
        productId: item.productId,
        title: item.title,
        variant: item.variant.sku,
        price: "$"+ item.variant.price,
        quantity: item.quantity,
        subtotal:"$"+ item.variant.price * item.quantity
      }))
    }))
  }));

  // Mostrar resultado
  document.getElementById("output").textContent = JSON.stringify(result, null, 2);
};