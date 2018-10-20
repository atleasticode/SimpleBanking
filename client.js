const Account = require('./account.js')

/*  
Class to create clients for the bank.
*/

module.exports = class Client {
    constructor(clientName){
        this.name = clientName
        console.log("New Client created:", clientName)
    }
    createAccount(){
        var account = new Account()
        this.balance = 0
        console.log("New account created with account number", account.accountNumber, "for", this.name)
    }
    getBalance(){
        return this.balance
    }
    setBalance(newBalance){
        this.balance = newBalance
    }
    increaseBalance(amount){
        var currentBalance = this.getBalance()
        this.setBalance(currentBalance += amount)
        console.log("Account balance of", this.name, "increased by", amount,". New Balance:", this.balance)
    }
    decreaseBalance(amount){
        var currentBalance = this.getBalance()
        this.setBalance(currentBalance -= amount)
        console.log("Account balance of", this.name, "decreased by", amount,". New Balance:", this.balance)
    }
}