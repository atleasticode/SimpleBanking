/*  
Class to create a bank.
*/

module.exports = class Bank {
    constructor(instituteName){
        this.instituteName=instituteName
        this.clientList = []
        console.log("New Bank created: " + instituteName)
    }
    addClient(newClient){
        this.clientList.push(newClient)
        console.log("New Client added to", this.instituteName, ":", newClient.name)
    }
    static create(){
        const bank = new Bank(instituteName)
        bank.clientList = clientList.map(Client.create)
        return bank
    }
}