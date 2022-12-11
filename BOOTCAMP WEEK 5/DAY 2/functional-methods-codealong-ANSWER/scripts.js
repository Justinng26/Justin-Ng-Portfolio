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
  // Call the function to check and display the inventory on page load:
  coolStore.inventoryCheck();
  // Call the function to attach our event listeners:
  coolStore.currencyChanger();
}



// STEP TWO: Write a function that will filter the inventory, so that we will display only items which are both in stock and have images.

coolStore.inventoryCheck = () => {
  // We save the current stock as a property on our app object so that it is available to us throughout our app:
  coolStore.currentStock = totalInventory.filter( (item) => {
    return item.stock > 0 && item.url !== undefined;
  });

  // We call the function to display our inventory on the page, passing it USD as the default currency:
  coolStore.displayItems(coolStore.currencies.usd);
}



// STEP THREE: Write a function that displays the available inventory on the page, in the correct currency.
// Hint: Consider what kind of information this function needs (ie. which parameters it should take) to properly display all of our information.
// For now, display items on the page by passing in USD as the default currency.

coolStore.displayItems = (chosenCurrency) => {
  // First we go find the existing .inventory ul in the DOM and empty it of any previous content:
  const inventoryElement = document.querySelector('.inventory');
  inventoryElement.innerHTML = '';

  // Loop through the current stock, creating a list element for each and putting them on the page:
  coolStore.currentStock.forEach( (individualItem) => {
    // Create a new list element and populate it with the inventory item details:
    const newListItem = document.createElement('li');
    newListItem.innerHTML = `
      <h2>${individualItem.title}</h2>
      <img src=${individualItem.url} alt="a model wearing the ${individualItem.title}">
      <p>${(individualItem.price * chosenCurrency.exchange).toFixed(2)}</p>
    `;

    // Append the new list item to the .inventory ul:
    inventoryElement.appendChild(newListItem);
  });
}



// STEP FOUR: Attach an event listener that will notice when a user clicks on a currency button, finds out which currency they have selected, and calls our display items method again. Don't forget to update the flag at the top right, too!

coolStore.currencyChanger = () => {
  // Go find all the button elements on the page, and the flag image and label:
  const buttons = document.querySelectorAll('button');
  const flagImage = document.querySelector('#flag');
  const nameOfCurrency = document.querySelector('#currency');
  
  // querySelectorAll returns a NodeList, which is an array-like object, meaning we can loop through it using .forEach(), and set up event listeners on each of the buttons:
  buttons.forEach( (individualButton) => {
    individualButton.addEventListener('click', function(){
      // We can get the unique id of the button that was specifically clicked using the `this` keyword:
      const selectedCurrency = this.id;
      
      // We call the displayItems method and use that id to pass it the new currency:
      coolStore.displayItems( coolStore.currencies[selectedCurrency] );

      // Similarly, we use the id to change the src and alt text of the flag image, and the text beside it:
      flagImage.src = coolStore.currencies[selectedCurrency].flag;
      flagImage.alt = coolStore.currencies[selectedCurrency].altText;
      nameOfCurrency.textContent = coolStore.currencies[selectedCurrency].displayName;
    });
  });
}



// Calling the init method, which starts everything running:
coolStore.init();