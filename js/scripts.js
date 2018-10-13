//Business Logic

//Ticket constructor
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

//Ticket method to calculate price.
Ticket.prototype.getPrice = function() {
  let basePrice = 0
  if (this.movie === `Colette` || this.movie === `The Wife`) {
    basePrice += 12;
  } else if (this.movie === `Museo`) {
    basePrice += 10;
  } else if (this.movie === `Tea With the Dames`) {
    basePrice += 15;
  }

  if (this.age === `YOUTH`) {
    basePrice -= 2
  } else if (this.age === `SENIOR` ) {
    basePrice -= 5;
  } else {
    return basePrice;
  }
  if (this.time <= 13) {
    basePrice -= 2
  } else {
    return basePrice;
  }
  return basePrice;
}





//User Logic
$(document).ready(function() {
  $('.poster').click(function() {
    let mainDiv = $(this).parent();
    mainDiv.find('.info').toggle();
  });
  $('#ticket_form').submit(function(event) {
    event.preventDefault();
    let movie = $('#movie_name').val();
    let time = parseInt($('#time').val());
    let age = $('#age').val();
    let numberOfTickets = parseInt($('#number_of_tickets').val());
    let newTicket = new Ticket(movie, time, age);
    let singlePrice = newTicket.getPrice();
    let totalDue = singlePrice * numberOfTickets;
    $('.bottom-return').slideDown();
    $('.movie_title').text(movie);
    $('.movie_time').text(`${time}:00`);
    $('.purchaser_age').text(age);
    $('.ticket_price').text(`$${singlePrice}`);
    $('.ticket_number').text(numberOfTickets)
    $('.total_due').text(`$${totalDue}.00`)
  });
});
