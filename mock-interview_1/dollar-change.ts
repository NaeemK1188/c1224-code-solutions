function change(int: number): void {
  let resultQuarter: number;
  let resultDime: number;
  let resultNickle: number;
  if (int >= 25) {
    resultQuarter = Math.floor(int / 25);
    console.log('resultQuarter:', resultQuarter);

    int = int - resultQuarter * 25;
    console.log('updated int ', int);
  }

  // int has updated value
  if (int >= 10) {
    resultDime = Math.floor(int / 10);
    console.log('result dime:', resultDime);
    int = int - resultDime * 10;
    console.log('updated int', int);
  }

  // int has updated value

  if (int >= 5) {
    resultNickle = Math.floor(int / 5);
    console.log('resultedNickle:', resultNickle);
    int = int - resultNickle * 5;
    console.log('updated int ', int);
  }

  if (int < 5) {
    console.log('cents:', int);
  }
}

change(99);
