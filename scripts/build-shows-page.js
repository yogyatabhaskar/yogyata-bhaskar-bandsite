const concert = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
        button: "BUY TICKETS"
    },

    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
        button: "BUY TICKETS"
    },

    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
        button: "BUY TICKETS"
    },

    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
        button: "BUY TICKETS"
    },

    {
        date: "Fri NOV 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
        button: "BUY TICKETS"
    },

    {
        date: "WED DEC 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
        button: "BUY TICKETS",
    }

];


function createCard(show) {

    // Content container
    const cardContent = document.createElement('div');
    cardContent.classList.add('card__content');

    // Date
    const datehead = document.createElement('p')
    datehead.classList.add('card__datehead');
    datehead.innerText = "DATE";
    cardContent.appendChild(datehead);

    const date = document.createElement('p');
    date.classList.add('card__date');
    date.innerText = show.date;
    cardContent.appendChild(date);

    //venue
    const venuehead = document.createElement('p')
    venuehead.classList.add('card__venuehead');
    venuehead.innerText = "VENUE";
    cardContent.appendChild(venuehead);

    const venue = document.createElement('p');
    venue.classList.add('card__venue');
    venue.innerText = show.venue;
    cardContent.appendChild(venue);
    


    //location
    const locationhead = document.createElement('p')
    locationhead.classList.add('card__locationhead');
    locationhead.innerText = "LOCATION";
    cardContent.appendChild(locationhead);

    const location = document.createElement('p');
    location.classList.add('card__location');
    location.innerText = show.location;
    cardContent.appendChild(location);

    //BUTTON
    const button = document.createElement('button')
    button.classList.add('card__button');
    button.innerHTML = "Submit";
    button.innerText = show.button;
    cardContent.appendChild(button)

    return cardContent;
}



const concertEl = document.querySelector('.card');
for (let i = 0; i < concert.length; i++){
    const concertCard = createCard(concert[i]);
    concertEl.appendChild(concertCard);
}
