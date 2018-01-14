function generateProductsMap(products){

  return products.reduce(function(productsMap, product){
    productsMap[product.id] = product;
    return productsMap;
  }, {});

}

//returns an object
//keys are the ids of products
//value is the total revenue for that product
function salesByProduct(products, lineItems){

  return lineItems.reduce(function(totals, item){
    
    if(totals[item.productId]){
      
      totals[item.productId] += generateProductsMap(products)[item.productId].price * item.quantity;
    }else{
      totals[item.productId] = generateProductsMap(products)[item.productId].price * item.quantity;
    }
    
    return totals;
  }, {});
  
}

//return the total revenue for all products
function totalSales(products, lineItems){
  //TODO
  var sales = salesByProduct(products, lineItems);
  return products.reduce(function(total, item){
    return total + sales[item.id];
  }, 0);
}

//return the product responsible for the most revenue
function topSellerByRevenue(products, lineItems){
  //TODO
  var sales = salesByProduct(products, lineItems);
  return products.reduce(function(greatest, item){
    if(sales[item.id] > greatest){
      item["sales"] = sales[item.id]
      greatest = item;
    }
    return greatest
    
  }, 0)
  
}
