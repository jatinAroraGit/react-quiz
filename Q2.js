function numbers(num) {
  if (num % 2 == 0)
    console.log('foo');
  else
    if (num % 7 == 0) {
      console.log('bar');
    }
    else if (num % 14 == 0)
      console.log('foobar');
    else
      console.log(num);
}

numbers(141);