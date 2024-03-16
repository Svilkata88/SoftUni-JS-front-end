function pointsValidation(points) {
    const [x1, y1, x2, y2] = points
   
    function distanceToZeroPoint(num1, num2) {
        return Math.sqrt(Math.pow((0 - num1), 2) + Math.pow((0 - num2), 2))
    }

    function distanceToTwoPoints(num1, num2, num3, num4) {
        return Math.sqrt(Math.pow((num3 - num1), 2) + Math.pow((num4 - num2), 2))
    }

    function isInt(n) {
        return n % 1 === 0 ? 'is valid' : 'is invalid'
    }
   
   const result1 = distanceToZeroPoint(x1, y1)
   const result2 = distanceToZeroPoint(x2, y2)
   const result3 = distanceToTwoPoints(x1, y1, x2, y2)

   console.log(`{${x1}, ${y1}} to {0, 0} ${isInt(result1)}`)
   console.log(`{${x2}, ${y2}} to {0, 0} ${isInt(result2)}`)
   console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} ${isInt(result3)}`)
}

pointsValidation([3, 0, 0, 4])
pointsValidation([2, 1, 1, 1])
pointsValidation([0, 0, 0, 0])