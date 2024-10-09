//var c = 300
let a = 300
if(true)
{
    let a= 10
    const b = 20
    var c = 30
    //console.log("INNER: ", a);
    
}

//for (let i = 0; i < array.length; i++) {
    //const element = array[i];
    
//}
//i variable local scope ke under use kra hai to hm nhi chahenge ki same variable ko global scope mai declare kre nhi to wo fir rayta faill jayega

//console.log(a);
//console.log(b);
//console.log(c);

//jb console ke andr global scope cheak krenge to wo alg hai and node ke andr alg hai



function one(){
    const username = "vikram"
console.log(username);
    function two(){
        const website = "youtube"
        console.log(website);

    }
    //console.log(website);
    two()
}
//one()


if(true){
    const username = "vikram"
    if (username === "vikram"){
        const website = " youtube"

        //console.log(username + website);

    }
    //console.log(website);
}
//console.log(username);




//++++++++++intersting++++++++++++++


console.log(addone(5))

function addone(num){
    return num+1
} ///functyion ke upper bhi call krwa sakte hai

const addTwo = function(num){
    return num + 2

}
addTwo(5)

//funtion ke upper call nhi krwa sakte its gives error because yha ek variable ke andr function store hai

