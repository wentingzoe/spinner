const R = [
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   '
];
let delay = 200;
for (let x=0; x <10; x++) {
  for (let i = 0; i < R.length; i++) {
  setTimeout(() => {
    return (x === 9 && i === R.length-1?
      process.stdout.write(R[i]+"\n") : process.stdout.write(R[i])
    )}, delay);
    delay += 200;
  }
}

