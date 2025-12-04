class MovieTicket {
constructor(movieName, seatNo, price) {
this.movieName = movieName;
this.seatNo = seatNo;
this.price = price;
}
}


MovieTicket.prototype.printTicket = function() {
return `Ticket - ${this.movieName} | Seat: ${this.seatNo} | Price: ${this.price}`;
};


class OnlineTicket extends MovieTicket {
constructor(movieName, seatNo, price, convenienceFee = 30) {
super(movieName, seatNo, price);
this.convenienceFee = convenienceFee;
}


getTotalAmount() {
return this.price + this.convenienceFee;
}
}


const t = new OnlineTicket('Interstellar', 'A10', 300, 50);
console.log('\nQ9 — printTicket via prototype:', t.printTicket());
console.log('Q9 — Total amount:', t.getTotalAmount());

