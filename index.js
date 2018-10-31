const Client = require('./client.js')
const Bank = require('./bank.js')
const Database = require('./database.js')

/*  
This program creates a simple Banking System from the classes Bank, Client and Account
Relations: 1 bank <-> n clients, 1 bank <-> n accounts, 1 client <-> 1 account
*/

/*
Instantiate class Bank to create 'The Friendly Bank', create customers and their accounts
and increase and decrease their balances.
*/

//Friendly Bank

const friendlyBank = new Bank("The Friendly Bank")

const client1 = new Client("Hans Miller")
friendlyBank.addClient(client1)
client1.createAccount()
client1.accountList[0].increaseBalance(100.13)
client1.accountList[0].decreaseBalance(200)

console.log(" ")

const client2 = new Client("Anna Smith")
friendlyBank.addClient(client2)
client2.createAccount()
client2.accountList[0].increaseBalance(3000)
client2.accountList[0].decreaseBalance(499.60)

console.log(" ")

const client3 = new Client("Nina Gomez")
friendlyBank.addClient(client3)
client3.createAccount()
client3.accountList[0].increaseBalance(1200)
client3.accountList[0].decreaseBalance(13.99)

console.log(" ")

//Happy Bank

const happyBank = new Bank("The Happy Bank")

const client4 = new Client("Li Jin")
happyBank.addClient(client4)
client4.createAccount()
client4.accountList[0].increaseBalance(200.13)
client4.accountList[0].decreaseBalance(400)

console.log(" ")

const client5 = new Client("Aisha Asfahan")
happyBank.addClient(client5)
client5.createAccount()
client5.accountList[0].increaseBalance(3000)
client5.accountList[0].decreaseBalance(499.60)

console.log(" ")

const client6 = new Client("Jelena Sobovic")
happyBank.addClient(client6)
client6.createAccount()
client6.accountList[0].increaseBalance(1200)
client6.accountList[0].decreaseBalance(13.99)

console.log(" ")

/*
Saving the instance of class Bank to a JSON file and loading account details from the file.
*/

const main = async () => {

    await Database.save([friendlyBank])
    const loadedFriendlyBank = await Database.load()
    console.log(loadedFriendlyBank)

    await Database.save([happyBank])
    const loadedHappyBank = await Database.load()
    console.log(loadedHappyBank)

}

(async () => {
    try {
        await main()
    } catch (e) {
        console.log(e)
    }
})()

//Database.save([friendlyBank],[happyBank])

//const LoadedFile = Database.load()
//console.log("Customer details for", LoadedFile.clientList[1].name, "were retrieved from the database. Current balance for this client:", LoadedFile.clientList[1].accountList[0].balance)