let profile = {
    name: "summayyah",
    age:10,
    grade: 5 ,
    country: "Canada",
    isAdmin: true,
    sayHello: function() {
        console.log( "i am " + profile.name, "i am " + profile.age );
        
    }
    // items: [ "bag" , "shoes ","thotpaste", 100 ]

}
console.log(profile);
profile.sayHello()

let user = [
    {id: 1, name: "summayyah" , age: 16, country: "Canada" },
    {id: 2, name: "zarah" , age: 12, country: "Northway" },
    {id: 3, name: "sarah" , age: 13, country: "North America" },
    {id: 4, name: "fridaws" , age: 14, country: "Nigeria" }
] 
console.log(user);

/* 
Challenge: Create your first object
1. Create an object that represent an airbnb castle listing.
2. It should contain at least one boolean, one string, one number, and one array
3. Log out at least two of the keys using the dot notaion.
*/
let castle = {
    title: "Cozy Castle",
    isAvailable: true,
    pricePerNight: 150,
    amenities: ["WiFi", "Kitchen", "Parking"]
};
console.log(castle.title);
console.log(castle.isAvailable);