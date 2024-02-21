function calculateDiscountedPrice (price,discountPercentage){
    const discount= (price * discountPercentage)/100
    const priceDiscount = price - discount 

    return priceDiscount
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountedPrice(originalPrice,discountPercentage)

console.log('Original Price: $'+ originalPrice)
console.log('Discount: '+discountPercentage +'%')
console.log('Price with discount: $'+finalPrice)