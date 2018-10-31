const Account = require('./account.js')

/*  
Class to create clients for the bank.
*/

module.exports = class Client {
    constructor(clientName){
        this.name = clientName
        this.accountList = []
        console.log("New Client created:", clientName)
    }
    createAccount(){
        let account = new Account()
        this.accountList.push(account)
        console.log("New account created with account number", account.accountNumber, "for", this.name)
    }
    static create ({clientName}){
        const client = new Client(clientName)
        client.accountList = accountList.map(Account.create)
        return client
    }
}