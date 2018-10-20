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

var friendlyBank = new Bank("The Friendly Bank")

var client1 = new Client("Hans Miller")
friendlyBank.addClient(client1)
client1.createAccount()
client1.increaseBalance(100.13)
client1.decreaseBalance(200)

console.log(" ")

var client2 = new Client("Anna Smith")
friendlyBank.addClient(client2)
client2.createAccount()
client2.increaseBalance(3000)
client2.decreaseBalance(499.60)

console.log(" ")

var client3 = new Client("Nina Gomez")
friendlyBank.addClient(client3)
client3.createAccount()
client3.increaseBalance(1200)
client3.decreaseBalance(13.99)

console.log(" ")

/*
Saving the instance of class Bank to a JSON file and loading account details from the file.
*/

Database.save(friendlyBank)

const LoadedFile = Database.load()
console.log("Customer details for", LoadedFile.clientList[1].name, "were retrieved from the database. Current balance for this client:", LoadedFile.clientList[1].balance)