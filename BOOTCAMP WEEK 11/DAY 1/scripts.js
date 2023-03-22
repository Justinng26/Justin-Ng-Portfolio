// const raccoon = {
//     health: 100,
//     location: {
//       x: 0,
//       y: 0
//     },
//     equipment: [],
//     walk: function () {
//         console.log("hey, i'm walkin hea!");
//     },
//     attack: function () {
//         console.log("you wanna piece a me??");
//     }
//   };

// Do we all feel comfy with how classes add our methods to the object PROTOTYPE instead of directly on the object, and comfy with the prototype as a place that all objects have reference to without actually storing that data directly on the object (which is way better for memory etc)


// class Character {
//     // the constructor method, which is called for us when we invoke the class with the 'new' keyword. This method will populate the resultant object with the properties that we set inside the constructor. We can customise our object instances b defininig this method with parameters, which we pass argumants to when we call the class.
//     constructor(startingHealth) {
//         this.health = startingHealth;
//         this.location = {
//             x: 0,
//             y: 0
//         };
//         this.equipment = [];
//     }
//     // instead of writing my class methods in the constructor(to add them as properties), write them here similar to writing the consructor method. Written like a regular function declaration but without the fucntion keyword - which makes sense because im not declaring global functions, I am defining METHODS on the object returned by my class.
//     //  not regular methods though - these methods will be added to the objects prototype instead of directly as properties of the object itself. This means that all objects created using this class will have reference to these methods without needing to store them individually on each object instance. 
//     walk() {
//         console.log("walking");
//     }

//     attack() {
//         console.log("attack")
//     }
// }

// const scratchy = new Character(70);

// console.log(scratchy);

// const jim = new Character(400);
// console.log(jim);


// // 
// class SandwichArtist extends Character {
//     constructor() {
//         // this class is anextension of the character class, so before we execute the things in its own constructor, we must invoke the SUPER CONSTRUCTOR, which calls the parent class (ie. Character's) constructor first, so that we have all those properties to work with here:
//         super(1000);
//         this.equipment.push("oven")
//         this.hat = "chefs";
//     }

//     bake() {
//         console.log("get baked");
//     }
// }

// const remi = new SandwichArtist();

// console.log(remi);

// Regular expression

// translate: "does this string contain 'abc"
// either b or B
const myRegex = /a[bB]c/;


// true
 const isItThere = myRegex.test("safi is learning abc");
 console.log(isItThere);

// false
 const howAboutHere = myRegex.test("sksks")
 console.log(howAboutHere);


// RegExp constructor - can use a variable with the constructor
// const otherRegex = new RegExp("abc");

