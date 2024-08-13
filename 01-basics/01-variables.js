const accountId = 16440
let accountEmail = "mishravikram012@gmail.com"
var accountPassword = "822793"
accountCity = "noida"
/* we can define variable name without using 
variable keyword in js but this is not good way of writting a code*/

let accountState; // we can also define variable without storing values but it's undefined

// accountId = 234   //not allowed
//  because accountId is constant that means it's can't changed

accountEmail = "abc@gmail.com"
accountPassword = "932782"
accountCity = "delhi"

/* prefer not to use var
because of issue in block scope and functional scope */


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])