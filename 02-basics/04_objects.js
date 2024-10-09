//const tinderuser = new Object()// singleton

const tinderuser = {} //non singleton

tinderuser.id = "1234abc"
tinderuser.name = "mishra"
tinderuser.isLoggedIn = false

//console.log(tinderuser);   

const regularUser = {
    email: "mishra@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vikramjii",
            lastname: "mishra"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);


// merge object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1,  obj2} // 
//const obj3 = Object.assign(obj1, obj2)//obj1 target and obj2 source
//const obj3 = Object.assign({}, obj1, obj2) //{} target and obj1 obj2 source

const obj3 = {...obj1, ...obj2}// split operator 90% time yahi use karenge
//console.log(obj3);

// array ke andr bhut saara obj

const users =[
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 1,
        email: "v@gmail.com"
    }
]
users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(typeof (tinderuser));

console.log(Object.entries(tinderuser)); //every keys: "values" ko ek seprate array bna ke output deta hai


console.log(tinderuser.hasOwnProperty('isLoggedIn')); //obj ke andr ye property hai yaa nhi wo cheak krke batata hai


///....desturuture obj..........

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "vikram"

}
//console.log(course.courseInstructor)// syntax1

//const {courseInstructor} = course
//console.log(courseInstructor); //syntax 2
 
const {courseInstructor: instructor} = course
console.log(instructor);//syntax3.. same chij print hoga teeno syntax se

////.......json.....///////
{
    "name": "vikram",
    "coursename": "js"/
    "price": 999,
    "site_admin": false/

}// keys values both are in string in json

//array ke andr bhi json file hoti hai

[
    {},
    {},
    {}
]
