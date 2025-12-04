class BankAccount {
#balance = 0;


constructor(initial = 0) {
if (initial < 0) throw new Error('Initial balance cannot be negative');
this.#balance = initial;
}


deposit(amount) {
if (amount <= 0) throw new Error('Deposit amount must be positive');
this.#balance += amount;
return this.getBalance();
}


withdraw(amount) {
if (amount <= 0) throw new Error('Withdraw amount must be positive');
if (amount > this.#balance) throw new Error('Insufficient balance');
this.#balance -= amount;
return this.getBalance();
}


getBalance() {
return this.#balance;
}
}


const acct = new BankAccount(1000);
console.log('\nQ8 — Initial balance:', acct.getBalance());
acct.deposit(500);
console.log('Q8 — After deposit:', acct.getBalance());
try {
acct.withdraw(2000);
} catch (err) {
console.error('Q8 — Withdraw error:', err.message);
}
console.log('Q8 — Final balance:', acct.getBalance());

