function isPrime(num) {
  if (typeof(num) !== 'number') {
      return 'Introduce un número'
  } else{
      if (num%2=== 0 || num%3===0 || num === 1){
          return false
      }else{
          return true
      }
  }
}
