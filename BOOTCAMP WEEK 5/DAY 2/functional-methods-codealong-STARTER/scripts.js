// We've written some code you'll need for this app. Read through to understand what you're starting with, then work through the commented steps!

// This is the store's inventory data. Normally we would be grabbing data from elsewhere (ie. an external api), but here we will skip that step and assume this is data we've fetched:
const totalInventory = [
  {
    title: 'Bowie Tee',
    url: 'images/bowie.jpg',
    price: 19.99,
    stock: 4,
  },
  {
    title: 'Don\'t Know Tee',
    url: 'images/dontevenknow.jpg',
    price: 22.50,
    stock: 8,
  },
  {
    title: 'Doughnut Jean Jacket',
    url: 'images/doughnut.jpg',
    price: 59.00,
    stock: 5,
  },
  {
    title: 'Journey Tee',
    url: 'images/journey.jpg',
    price: 22.99,
    stock: 6,
  },
  {
    title: 'Skeleton Jean Jacket',
    url: 'images/someurl.jpg',
    price: 30.00,
    stock: 0,
  },
  {
    title: 'Skeleton Hand Tee',
    url: 'images/skeleton.jpg',
    price: 30.00,
    stock: 10,
  },
  {
    title: 'Juno Hoodie',
    price: 50.00,
    stock: 4,
  }
]


// We create a namespace object to hold our app:
const coolStore = {};

// An object that allows us to organize information that will be displayed conditionally depending on what currency the user selects:
coolStore.currencies = {
  usd: {
    exchange: 1,
    symbol: `$`,
    displayName: `USD`,
    altText: `the US flag`,
    flag: `images/USD-flag.png`
  },
  cad: {
    exchange: 1.28,
    symbol: `$`,
    displayName: `CAD`,
    altText: `the Canadian flag`,
    flag: `images/CAD-flag.png`
  },
  gbp: {
    exchange: 0.76,
    symbol: `£`,
    displayName: `GBP`,
    altText: `the UK flag`,
    flag: `images/GBP-flag.png`
  }
}


// STEP ONE: Create an init method that will run when our app first loads. This is where all of our first functions will be called.
// Remember to also call the init method at the bottom of this file!

coolStore.init = () => {
  // Call the function that will check our inventory for items that have images and are in stock:
  coolStore.checkInventory();

  // Also call the function to attach event listeners to our buttons to change currencies:
  coolStore.changeCurrency();
}


// STEP TWO: Write a function that will filter the inventory, so that we will display only items which are both in stock and have images.

coolStore.checkInventory = () => {
  coolStore.inStockNow = totalInventory.filter( (clothingObject) => {
      // Inside filter we check for 2 conditions, and if they both are true, the callback returns true, and filter will put the current clothingObject into our new inStockNow array:
      return clothingObject.stock > 0 && clothingObject.url !== undefined;
  });

  coolStore.displayItems(coolStore.currencies.usd);
}


// STEP THREE: Write a function that displays the available inventory on the page, in the correct currency.
// Hint: Consider what kind of information this function needs (ie. which parameters it should take) to properly display all of our information.
// For now, display items on the page by passing in USD as the default currency.

coolStore.displayItems = (chosenCurrency) => {
  // Go get the inventory ul from the page
  const inventoryUl = document.querySelector('.inventory');

  // Next, we want to loop(!) through our current stock (our inStockNow array) and for every item in there, make a new li and put that shit on the paaaaaaaage:
  coolStore.inStockNow.forEach( (fashionPiece) => {
      // Create a new li element and populate it with the info from our clothing object:
      const newLiElement = document.createElement('li');

      newLiElement.innerHTML = `
          <h2>${fashionPiece.title}</h2>
          <img src=${fashionPiece.url} alt=${fashionPiece.title} />
          <p>${ (fashionPiece.price * chosenCurrency.exchange).toFixed(2) }</p>
      `;

      // Take our new li and append it inside the ul element we grabbed above:
      inventoryUl.append(newLiElement);
  });
}



// STEP FOUR: Attach an event listener that will notice when a user clicks on a currency button, finds out which currency they have selected, and calls our display items method again. Don't forget to update the flag at the top right, too!

coolStore.changeCurrency = () => {
  // First, let's go get our buttons from the page!
  const buttons = document.querySelectorAll('button');

  // querySelectorAll returns a NodeList, which is an array-like object, meaning we can loop through it with our friend, .forEach(). We will do that! we will loop through our button list, attaching an event listener to each.
  
}



// Call the init method that will kick off everything in our app:
coolStore.init();