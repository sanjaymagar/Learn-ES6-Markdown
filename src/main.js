class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    register(){
        console.log(`${this.username} has been registered.`)
    }

    // static methods
    static countUser(){
        console.log("There are 50 users")
    }
}

// create instance to use class User
//let lafa = new User("lafasanjmgr", "sanjay@gmail.com", "12345");

// console.log(lafa)
// lafa.register()

// in order to call static class instance
// User.countUser()


//  Class inheritance ie. extends method
class Member extends User {
    constructor(username, email, password, membership){
        // super is use to do stuff like `this.username= username`
        // which were already has been done in previous class
        super(username, email, password);
        this.membership = membership;
    }
    getMemberShip(){
        console.log(`Get ${this.membership} membership.`)
        console.log(`Get usename ${this.username}.`)
        console.log(`Get email address ${this.email}.`)
    }
}

let lafa = new Member("@lafasanjmgr", "sanjay@gmail.com", "12345", "Premium");
// lafa.getMemberShip()

// access method of User
// lafa.register()

// template litral

let template = `<div class="row">
                    <div class="col-2">.col-2</div>
                    <div class="col-4">.col-4</div>
                    <div class="col-4">.col-4</div>
                    <div class="col">.col</div>
                </div>`
// use .text-truncate to maintain overflow of text 
let str = `<div class="d-block text-truncate" style="max-width:5em;">
            Go for hard work...
            </div>`

// document.getElementById("root").innerHTML = template;
document.getElementById("root").innerHTML = str;

// string
let language = "JavaScript"
let intro = `This is sanjay gharti magar and i would like to love to wrok on ${language}`
// return true or false
// startWith()
// endWith()
// // includes()
// console.log(intro.startsWith("This"))
// console.log(intro.endsWith("JavaScript"))
// console.log(intro.includes("sanjay"))


// Number
// console.log(0b01010101) //binary and more
// console.log(Number.isFinite(19))

// Set
let arr = [11, 22, 33, 44, 22, 55]
let set = new Set(arr)
let object = new Array(set)
set.add("lafa")
set.add("sanjay")
set.delete(22)
set.add({a:"apple", b:"ball", c:"cat"})
// console.log(typeof set)
// console.log(set.size)
// console.log(object)

// set.forEach((item) => console.log(item))

// Map
// let map = new Map([["a", "apple"], ["b", "ball"], ["c", "cat"]])
// map.set("d", "dog")
// map.set("e", "elephant")
// map.delete("a")

// console.log(map)

let carWeakSet = new WeakSet()
let car1 ={
    brand:"Toyota",
    model:"Camry"
}
let car2 ={
    brand:"Honda",
    model:"Civic"
}
let key1 = {
    id:1
}
let key2 = {
    id:2
}
// carWeakSet.add(car1)
// carWeakSet.add(car2)
// carWeakSet.delete(car2)
// console.log(carWeakSet)

// let carWeakMap = new WeakMap()
// carWeakMap.set(key1, car1)
// carWeakMap.set(key2, car2)
// carWeakMap.delete(key1)
// console.log(carWeakMap)


// arrow function
// let arrowFunction = () => {
//     console.log("hello sanjay")
//     console.log("hello sanjay")
//     console.log("hello sanjay")
// }
// arrowFunction()

// Promise -response is expected in future 
// let promise = Promise.resolve("Foo")    
// promise.then(res => console.log(res))


// let mypromise = new Promise((resolve, rejected) => {
//     setTimeout(() => resolve(4), 2000)
// })
// console.log(mypromise)
// mypromise.then((res) => console.log(res))

// Generator
function *g1() {
    console.log("Hello world");
    yield "yield 1 ran..."
    console.log("World is in wrong hand")
    yield "Yield 2 ran..."
    return "Returned..."
}
let g = g1();
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

// for(let item of g) {
//     console.log(item)
// }


// let names = ["Sanjay",  "Nisan", "Rohit", "Pranil", "Shailesh", "Ajaya"]
// let arrLength = names.length
// console.log({arrLength})
// let it = arr[Symbol.iterator]();
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// for(name of names) {
//     console.log(name)
// }


function *generator(){
    let a = "Apple"
    let b = "Ball"
    yield `Lets have a ${a}`
    yield `Lets play ${b}`
    return "I am returned..."
}

// let gen = generator();
// for(i of gen){
//     console.log(i)
// }

// promise
// async function API(url) {
//     const baseUrl = "https://jsonplaceholder.typicode.com/";
//     const response = await fetch(baseUrl + url);
//     const data = await response.json();
//     return data;
// }

// API('users').then(data => console.log(data));


const api = async (url) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/';
    const response = await fetch(baseUrl + url)
    const data = await response.json();
    return data
}

// api('photos').then((data, i) => console.log(data.map(d => d.url)))