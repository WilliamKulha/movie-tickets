# _Movie Tickets_

#### _A webpage that acts as a mockup of a cinema's ticket selling page, 10-13-2018_

#### By _**William Kulha**_

## Description

_This is a webpage that I made to practice BDD and object-oriented Javascript with learnhowtoprogram.com. It allows users to select a movie, showtime, their age group, and the number of tickets they'd like to by and returns an individual ticket price as well as a total amount due._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
**Program Gathers User Input, creating a new ticket object** | User input: 'Colette 10:00 SENIOR 2 tickets' | Output: ticket {first: movie: Colette, time: 10, age: senior} numberoftickets = 2 |
**Program calculates ticket prices based off showtime, agegroup, and which movie was selected** | Input: ticket {first: movie: Colette, time: 10, age: senior} numberoftickets = 2| Output: basePrice = 12 -2(time) - 5(age) = 5 |
**Program calculates for the number of tickets** | ticketPrice: 5, numberoftickets = 2| Output: 10  |
**Program displays all information to the user** | User input: 'Colette 10:00 SENIOR 2 tickets' | Output:
MOVIE.................. Tea With the Dames<br/>

SHOWING................ 16:00<br/>

AGE GROUP.............. SENIOR<br/>

TICKET PRICE........... $10<br/>

NUMBER OF TICKETS...... 5<br/>

TOTAL DUE.............. $50.00 <br/>|

## Setup/Installation Requirements

* _Download or clone this repo <code>$git clone https://github.com/zangiboy/movie-tickets.git</code>_
* _Navigate to the folder where you saved the directory._
* _Open with the browser of your choice and enjoy_


## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_If you have any questions or advice, please email me at kulha.william@gmail.com_

## Technologies Used

_javascript_\
_jQuery_\
_Bootstrap 3_

### License

*This Movie Ticket sales page mockup is licensed under the MIT License*

Copyright (c) 2018 **_William Kulha_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
