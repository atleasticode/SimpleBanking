/*  
Class to create accounts for clients.
*/

module.exports = class Account {
    constructor(){
        this.accountNumber = Math.floor(Math.random() * 9999) + 1000   
    } 
}