if (province == 'ONTARIO') {
  rate = ONTARIO_RATE;
  amt = base * rate;
  calc = 2 * basis(amt) + extra(amt) * 1.05;
} else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {
  if (province == 'QUEBEC') {
    rate = QUEBEC_RATE;
    points = 2;
  }
  else
    rate = ALBERTA_RATE;

  amt = base * rate;
  calc = 2 * basis(amt) + extra(amt) * 1.05;

} else {
  rate = 1;
  amt = base;
  calc = 2 * basis(amt) + extra(amt) * 1.05;
}
