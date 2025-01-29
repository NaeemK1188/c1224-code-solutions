export function takeAChance(name: string): Promise<string> {
  // returning promise object
  return new Promise((resolve, reject) => {
    // returning new object Promise with two parameters
    // delay 2 seconds
    setTimeout(() => {
      // acting like a function
      Math.random() <= 0.5 // condition if less than with random  it could be less or greater in order to get reject or resolve like real server
        ? // if promise fulfill                           :                 else promise reject
          resolve(`Hooray! You're so lucky, ${name}!`)
        : reject(new Error(`It's just bad luck, ${name}.`));
    }, 2000); // delay 2 seconds
  });
}
