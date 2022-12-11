// import our database reference object from our firebaseConfig.js file

import database from './firebaseConfig.js';

import { ref, push, set, update, remove, get, onValue } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

// create a reference ie an address that points to our database:
const dbRef = ref(database);

// create another reference object, but have it point to a node nested mroe deeply in our database, buy passing it both the database object and a path that we want to creat in our firebase. 
// 'ref' is a function given to us to give us access to different locations in the database.

const childNodeRef = ref(database,"/people");

const newUser = {
    name: "justin",
    awesome: true
}

// push(childNodeRef, newUser);

// create a new ref object that points to an admins node to our database
const adminNode = ref(database, "/admins")

const whoIsTheAdmin= {
    primaryAdmin: "Joe",
    permissions: "all",
    hair: "N/A"
}

// set(adminNode,whoIsTheAdmin);


const updatedInfo = {
    hair: "available"
}

// update(adminNode, updatedInfo);

// removing a NODE

// const thingToDelete = ref(database, "/people/-NGrAucpmZLKuKuZnrps");

// remove(thingToDelete);
// push (adminNode, whoIsTheAdmin)

// get(dbRef)
//     .then( (snapshot) => {
//         const ourData = snapshot.val();
//         console.log(ourData);
//     });


// 'push/set' takes two arguments, where we are pushing to (our database) and what are we pushing. push always creates a hexadecimal code. 

// 'set' will directly put the value directly under the nodes.
// set will always OVERWRITE the value in the node if you add a new property. 

// 'update' works like set, but instead of replacing the value, it will add to the data that is already there or just update the value.

// 'remove' doesn't need a second argument

// 'get' function allows us to retrieve the info from our realTime database,(like a fetch request), reads the database 1 time

// .val parses our data for us

// the onValue function is like an event listener for our database. it will listen for and detect any change to the values in our database, and when it hears a change it will send us a new snapshot of the data.
// its like 'get', but a live listener that will fire again and again instead of only when we call it manually ourselves.

onValue(dbRef, (snapshot) => {
    const ourData = snapshot.val();
    console.log(ourData);
});

