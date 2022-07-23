// 1) Show rating
/* 
function showRating(rating) {
    let ratings = "";
for (let i = 0; i  < rating; i++) {
    ratings = ratings + "*"
  if (i !== rating - 1) {
      ratings = ratings + " "
  }
}
   return ratings;

}

console.log(showRating(4));
 // how to put half star
function showRating(rating) {
    let ratings = "";
for (let i = 0; i  < Math.floor(rating); i++) { // round up the number
    ratings += "*"
  if (i !== Math.floor(rating) - 1) {
      ratings += " "
  }
}
if (!Number.isInteger(rating)) {
    ratings += " .";
}
   return ratings;

}

console.log(showRating(4.5));

// 2) Sort by lowest to highest price

 function sortLowToHigh(numbers) {
   return numbers.sort((a, b) => a - b) // sort go in alphabetic order so for numbers we need to use this method
 }

 console.log(sortLowToHigh([1, 5, 0, 10, 4]));

// 3)sort by high to low

function sortHighToLow(numbers) {
  return numbers.sort((a, b) => b.price - a.price);
}

console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 0 },
    { id: 3, price: 500 },
  ])
);
 
// 4) promises

 let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a === 2) {
     resolve('Success')
  }
  else {
    reject('Failed')
  }
 })

 p.then((message) => {
  console.log('This is in the then ' + message)
 }).catch((message) => {
  console.log('This is in the catch ' + message)
 }) 
 
// callback
let userLeft = true;
let userWatchingCatMeme = false;

 function watchTutorialCallback(callback, errorCallback) {
   if (userLeft) {
     errorCallback({
       name: "User Left",
       message: ":(",
     });
   } else if (userWatchingCatMeme) {
     errorCallback({
       name: "User Watching Cat Meme ",
       message: "Diancinio simplified < Cats",
     });
   } else {
     callback(" Thumbs up and Subscribe");
   }
 }

 watchTutorialCallback(
   (message) => {
     console.log("Success: " + message);
   },
   (error) => {
     console.log(error.name + "" + error.message);
   }
 );

// promises
function watchTutorialPromise () {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat memes',
        message: 'Diancinio simplified < Cat'
      })
    } else {
      resolve('Thumbs up and subscribe')
    }
    })
  }

  watchTutorialPromise().then((message) => {
     console.log('Success: ' + message)

  }).catch((error) => {
    console.log(error.name + ' ' + error.message)
 });
*/

// Async

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`makeRequest to ${location}`);
    if (location === "Google") {
      resolve("Google says hi")
    } else {
      reject("We can only talk to Google")
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra information + ${response}`)
  })
}

// makeRequest("Google")
//   .then((response) => {
//     console.log("Response Received")
//     processRequest(response)
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse)
//   }).catch(err => {
//     console.log(err)
//   });

// await
  async function doWork() {
    try {    
    const response = await makeRequest('Google')
    console.log("Response Received")
    const processedResponse = await processRequest (response)
    console.log(processedResponse)
    } catch (err) {
      console.log(err)
    }
  }
  doWork()
