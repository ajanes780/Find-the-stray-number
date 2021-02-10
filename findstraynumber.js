function stray(numbers) {
  let one = numbers[0];
  let two = numbers[1];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== one || numbers[i] !== two) {
      return numbers[i];
    }
  }
}

//EXAMPLE SOLUTION
//[1, 1, 2] ==> 2
//[17, 17, 3, 17, 17, 17, 17] ==> 3
