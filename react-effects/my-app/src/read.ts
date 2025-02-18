// its ts file not jsx, so we can still create ts file
export type Item = {
  id: number;
  name: string;
};

export function readItems(): Promise<Item[]> {
  return new Promise((resolve, reject) => {
    console.log('Reading items; this should only be called once!');
    setTimeout(() => {
      // if number generating is greater than 0.2, add the array of item objects below
      // else reject and throw an error
      Math.random() >= 0.2
        ? resolve([
            { id: 8, name: 'Harry Houdini' },
            { id: 12, name: 'Dorothy Dietrich' },
            { id: 3, name: 'Criss Angel' },
            { id: 42, name: 'Dean Gunnarson' },
            { id: 95, name: 'Robert Gallup' },
          ])
        : reject(new Error('What bad luck!'));
    }, 1000);
  });
}
