const accountId  = 144553   //constant value cannot be changed in future for example account id
let accountEmail = "darksole858@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState ; 

// accountId = 2 //WILL RESULT IN AN ERROR BECAUSE VALUE OF CONSATNT KEY WORD CANNOT BE CHANGED

accountEmail = 'hc@hc.com'
accountPassword = '21212121'
accountCity = "Pune" //this is possible but declaring without let is not considered to be good

console.log(accountId) ;//as  it will result in undefined because we have not assigned any value to it

/*
Never use var inside your code to declare variable because of issue in block and fucntional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
