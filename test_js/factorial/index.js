const Calculate = {
    factorial(n){
      return (n != 0) ? n * this.factorial(n - 1) : 1;
    }
  }
  
  module.exports = Calculate;  