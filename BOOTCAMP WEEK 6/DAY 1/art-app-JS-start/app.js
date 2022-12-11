// Phase 1 - displaying monkey art. 
    // make a call to the Rijks museum API 
    // get back art featuring monkeys.
    // display the results on the page including the title and artist.

// Phase 2 - letting the user choose the art to look at. 
    // implement a drop down menu with differenct art topic keywords eg. dragons, centaturs etc. 
    //  call the api to get back art based on the user's choice. 
    // display those results to the page.

  
    //  create a namespace object. 
    const artApp = {};  

    // create a variable for the api key. 
    artApp.key = "dd3r8Wir"
    
    
    // make a call to the API. 
    artApp.getArt = (query) => {

        // what we need for our fetch request

        // url endpoint (new URL)
        const url = new URL('https://www.rijksmuseum.nl/api/en/collection');

        // search parameters
        url.search = new URLSearchParams({
            key: artApp.key,
            imgonly : true, 
            q: query
        })
        // fetch()
        fetch(url)
        .then(res => {
            
            return res.json()
        })
        .then(data => {
            console.log(data.artObjects)
            // pass artObjects to displayArt
            document.querySelector('#artwork').innerHTML = '';
            artApp.displayArt(data.artObjects);
        })
        // .then() x 2
        // .json()
    }

    // make a function to display our art on to the page. This data is originally passed on from data.artObjects, like a relay race
    // data.artObjects === artPieces
    artApp.displayArt = (artPieces) => {
        console.log(artPieces)
        // for each item in the array of ojbects(artPieces), we will create some HTML and append it to the page.
        artPieces.forEach(piece => {
            // 'piece' is the individual object in the artPieces array.
            // console.log(piece)
            // the html structure that we need to create for each indiviudal piece of art and apped it to the page (in the ul).
            // <li>
            // <h2> Title </h2>
            // <p> Artist Name <p/>
            // <li/>

            const artTitle = document.createElement('h2');
            // add the art piece name
            artTitle.innerText = piece.title;
            
            const artistName = document.createElement('p')
            // add the artist's name 
            artistName.innerText = piece.principalOrFirstMaker;

            // create the image element
            const artImage = document.createElement('img')
            console.log(artImage)
            artImage.src = piece.webImage.url;
            artImage.alt = piece.title;

            // create an li container
            const artContainer = document.createElement('li');
            // creating a class on the li element
            artContainer.classList.add('piece');
            // adding the h2, p and img to the li
            artContainer.appendChild(artTitle);
            artContainer.appendChild(artistName);
            artContainer.appendChild(artImage);
            console.log(artContainer)

            // append the li to the ul 
            document.querySelector('#artwork').append(artContainer)
        });
        // we will need a query selector

    }

    // this is the function that will get the user's input
    artApp.getUserInput = () => {
        // listen for when the user makes a change in the drop down
        // get the value of the selected option
        document.querySelector('#animal').addEventListener('change', function() 
         {
            const selection = this.value
            console.log(selection)
            artApp.getArt(selection);
            // selection == query, selection = argument, query = parameter
        })
    }
    // create our init method
    // will store our code/functions that need to run on page load. 
    artApp.init = () => {
        console.log("lets goo")
        // artApp.getArt();
        artApp.getUserInput();
    }

    artApp.init();