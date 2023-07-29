class BankAccount{
    accountName;
    accountNumber;
    balance
    constructor(accountName,balance=0){
        this.accountName = accountName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    depositAccount(accountNumber,amount){
        if(this.accountNumber === accountNumber){
            this.balance += amount;
            console.log("Amount Deposited Successfully");
        }else{
            console.log("Invalid Account Number");
        }

        withAccount(accountNumber,amount)
        {
            if(this.accountNumber === accountNumber){
                if(this.balance >= amount){
                    this.balance -= amount;
                    console.log("Amount Withdrawn Successfully");
                }else{
                    console.log("Insufficient Balance");
                }
            }
        }
    }
}

let ram = new BankAccount("Ram",5000);
let shyam = new BankAccount("Shyam",10000);

console.log(ram);
console.log(shyam);
