/*  
Class to create accounts for clients.
*/

module.exports = class Account {
    constructor(){
        this.accountNumber = Math.floor(Math.random() * 9999) + 1000  
        this.balance = 0 
    } 
    getBalance(){
        return this.balance
    }
    setBalance(newBalance){
        this.balance = newBalance
    }
    increaseBalance(amount){
        let currentBalance = this.getBalance()
        this.setBalance(currentBalance += amount)
        console.log("Account balance of", this.name, "increased by", amount,". New Balance:", this.balance)
    }
    decreaseBalance(amount){
        let currentBalance = this.getBalance()
        this.setBalance(currentBalance -= amount)
        console.log("Account balance of", this.name, "decreased by", amount,". New Balance:", this.balance)
    }
}