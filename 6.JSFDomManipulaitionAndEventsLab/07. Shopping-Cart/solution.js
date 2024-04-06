function solve() {
   
   const addBtnElements = document.querySelectorAll('.add-product');
   const textAreaElemenet = document.querySelector('textarea');
   const checkOutBtnElemenet = document.querySelector('.checkout');
   let totalPrice = 0;
   let boughtProducts = [];
   

   Array.from(addBtnElements)
      .forEach(el => el.addEventListener('click', (e) => {
         const productNameElemenet = e.target.parentElement.parentElement.querySelector('.product-title');
         const productTitle = productNameElemenet.textContent;
         const productPriceElement = e.target.parentElement.parentElement.querySelector('.product-line-price');
         const price = Number(productPriceElement.textContent)
         
         textAreaElemenet.value += `Added ${productTitle} for ${price.toFixed(2)} to the cart.\n`

         boughtProducts.push([productTitle, price])
         totalPrice += price;
      }))

   checkOutBtnElemenet.addEventListener('click', () => {
      const list = boughtProducts.map(el => el[0]).reduce((newList, el) => {
         if (!newList.includes(el)) {
            newList.push(el)
         }
         return newList
      }, [])
      textAreaElemenet.value += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`;
      Array.from(addBtnElements)
         .forEach(el => el.disabled = true)
         checkOutBtnElemenet.disabled = true;
   })
}