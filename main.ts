import inquirer from "inquirer";

let myBalanceIs = 10000; //dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
[ {
    name: "pin",
    message: "entre your pin",
    type : "number"}
]
);
if(pinAnswer.pin=== myPin){
    console.log("correct pin code");
    let operationAns = await inquirer.prompt(
        [
            {
              name: "operation",
              message: "please select option",
              type: "list",
              choices:["withdraw", "check balance", "fast cash"]
            }
        ]
    ); 
if(operationAns.operation === "withdraw"){
let amountAns = await inquirer.prompt(
    [
        {
         name: "amount",
        message: "entre your amount",
        type: "number"
    } ]);
    if (amountAns.amount> myBalanceIs){
        console.log("insuficient funds for transaction")
    }
    else{
myBalanceIs -= amountAns.amount;
console.log(`your remaining balance is : ${myBalanceIs}`)}
}
else if (operationAns.operation === "check balance"){
console.log(`your balance is: ${myBalanceIs}` )
}
else if(operationAns.operation === "fast cash"){
    let fastCashAns = await inquirer.prompt(
        [
            {
             name: "cash",
             type: "list",
             choices: [1000, 2000, 5000, 8000, 10000] }] );
    if(myBalanceIs <= fastCashAns.cash){
        let balance2 = myBalanceIs - fastCashAns.amount;
    console.log(`your balance is: ${myBalanceIs}`)}
     }   
}
else {
    console.log("incorrect pincode");
    }
    