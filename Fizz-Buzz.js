function enterNumber(n) {


    while (isNaN(n))
      n = parseInt(prompt("You did not enter a number. Please enter a number: "));
  
  
    for (var i = 1; i <= n; i++) {
  
      if (i % 15 === 0) {
        document.write("Fizz Buzz" + "<br>");
        continue;
      } else if (i % 3 === 0) {
        document.write("Fizz" + "<br>");
        continue;
      } else if (i % 5 === 0) {
        document.write("Buzz" + "<br>");
        continue;
      }
      document.write(i + "<br>");
    }
  
  
  };
  enterNumber();