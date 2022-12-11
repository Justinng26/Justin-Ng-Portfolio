const drinks = {
  coffee: [
    {
      title: 'Early Bird',
      price: '$$',
    },
    {
      title: 'Strange Love',
      price: '$$',
    },
    {
      title: 'Fahrenheit',
      price: '$$',
    },
    {
      title: 'Voodoo Child',
      price: '$$',
    },
    {
      title: 'Dark Horse',
      price: '$',
    },
    {
      title: 'Cops',
      price: '$',
    },
    {
      title: 'ideal',
      price: '$',
    },
    {
      title: 'Jimmy\'s',
      price: '$',
    }
  ],
  tea: [
    {
      title: 'Icha',
      price: '$$',
    },
    {
      title: 'Ten Ren\'s',
      price: '$$',
    },
    {
      title: "David's Tea",
      price: '$$',
    },
    {
      title: 'Bubble Lee',
      price: '$$',
    },
    {
      title: 'Chattime',
      price: '$',
    },
    {
      title: 'Tealish',
      price: '$',
    },
    {
      title: 'Kung Fu',
      price: '$',
    },
    {
      title: 'Gong Cha',
      price: '$',
    }
  ]
};


// Our code goes here:
// Create a variable to store our form in - query selector
// Create a listener so we know when the user has submitted their choices
// preventDefault()
// store users choices in 2 variables (one for drinks and one for price)
// use our drink choice variable to access the corresponding array

// step 4 - creating a randomizer function for our options array, but also for ANY array we may need to randomize at a later date. 

function randomItem(randomArray){
 const randomIndexNumber = Math.floor(Math.random()  * randomArray.length );

 return randomArray[randomIndexNumber]


}

// step 1a: target the form itself and pop it into a variable so that we can easily attach an eventListener to it. 

const formEl = document.querySelector('form');
// console.log(formEl);

// step 1b: lets add an eventListener so that we can access the users input once they submit

formEl.addEventListener('submit', function(event){
  // console.log(event);
  event.preventDefault();

  // Step 1c: Lets target the individual inputs and pull the values forom them
  const type = document.querySelector('input[name=beverage]:checked').value;
  const price = document.querySelector('input[name=price]:checked').value;

  console.log(type);
  console.log(price);

  // step 2: now that we've got our users selection in the form of a string, let's use it to target the appropriate array within the drinks object.

  const choice = drinks[type];
  // hey, why can't i use dot notation above? because the type variable returns a string, which is in quotes, so, your dot notation would produce drinks."coffee" or drinks."tea" which won't work! square brackets are required.

  // console.log(choice)

  // step 3b - we need to create an empty array that will hold all the Stores that meet our User's Price Preference

  const options = [];

  // step 3a - now that we've used the users selection to target and isolate a specific drink array, we can loop through said array and also use a condictinal/if statement to compare the USER'S price choice against the price value in each store in the array.

  for (let i = 0; i < choice.length; i++ ){
    // console.log(choice[i].price);
    
    const store = choice [i];

    if (store.price === price) {
      options.push(store);
      // console.log(options);
    }

  }

  
// take this NEW array of cafes that meet our users selections exactly and randomly pick one using
// MATH.RANDOMIZER
// take the TITLE from this randomly picked CAFE and insert it into our HTML.

// step 4b: lets CALL the randomItem randomizer function and PASS our options array as an argument and STORE it in a variable for later use (when we put our data ON the page in our HTML)
// console.log (randomItem(options).title);

const optionsToDisplay = randomItem(options);

// console.log(optionsToDisplay);

// step 5: now lets inject this result into our HTML, all we really need is the store name or 'title' property from our object. 

const results = document.querySelector('.results');
console.log(results);
results.innerHTML = `<h2>${optionsToDisplay.title}</h2>`;


});