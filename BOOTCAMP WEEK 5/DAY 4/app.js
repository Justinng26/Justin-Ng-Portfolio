//  Namespace object for out app:
const picsApp = {};

// API KEY - Allows us to retrieve the data from the endpoint.
// ENDPOINT - URL that holds data that we can retrieve using an API Key.
// Access key that we will use later. Save the endpoint we want to hit our properties on our namespace object, so that we have easily available to reference throughout our code:
picsApp.apiKey =`umteXz05fepLWaDMu_Yu1DojetM-vqfROB2kZ2JmJq4`;

picsApp.endPoint =  `https://api.unsplash.com/photos`

// init method will be the firt thing called in our app and will kick off everything else. 
picsApp.init = () => {
    // call the function that will get the photos:
    picsApp.getPhotos()

}

// METHOD to go get a set of photos from the unsplash API
picsApp.getPhotos = () => {
    // We use the ()URL constructor to get a new object back with out enpoint url in it, that will make it easy for us to add things like queryparameters. 
    const myUrl = new URL(picsApp.endPoint);
    
    // We want to add query parameters to the end of our URL, so to make that easier we use the URLSearchParams constructor. This function takes an object as an argument, and any key-value properties in that object will be concatenated together into strings (like "?client_id=FHY874897GHJU340G4GNJ0U48GJ0").
     // We take this string and assign it to the .search property of our new url object, since any string assigned to that value is automatically appended to the end of the url string we passed to the object originally (above), meaning in the end, we get the string we want, like:
    // ("https://api.unsplash.com/photos?client_id=FHY874897GHJU340G4GNJ0U48GJ0")


    myUrl.search = new URLSearchParams({
        client_id: picsApp.apiKey,

    });

    // now we take out URL object with its full URL, inluding params and use it to make a call to the api.
    fetch(myUrl)
    .then( (response) => {
        // once we get our response back from the api, a response object is passed to .then callback function. we need to parse this object for our JSON data, so to do that we call the .json() method built into the response object, and return the result out of our callback:
        return response.json();
    })
    .then((jsonResponse) => {
        // this callback recieves the parsed JSON data from the previous .then as an argument, so now we can use it in this callback like any other object. 

        picsApp.displayPhotos(jsonResponse);
    });
}

// Put our photos on the page. 
picsApp.displayPhotos = (myDataArray) => {
    

    // go get the ul from the page:
    const ulElement = document.querySelector('.gallery');

    // loop through our array of objects to put them each on the page:
    myDataArray.forEach( (picObject) => {
        // we create a new li element:
        const newLi = document.createElement('li');
        const newImage = document.createElement('img');

        // we populate our img attributes with info from our object.

        newImage.src = picObject.urls.regular;
        newImage.alt = picObject.alt_description;

        newLi.append(newImage);
        ulElement.append(newLi);
    });

}

// call the init method to start
picsApp.init();