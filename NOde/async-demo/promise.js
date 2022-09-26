const p = new Promise((resolve, reject) => {
  //Kick off some async work
  //...
  //
  setTimeout(() => {
    reject(new Error('2'));
  }, 2000);

  //reject(new Error("message"))
});

p.then((result) => console.log('Result', result)).catch((err) =>
  console.log(err)
);
