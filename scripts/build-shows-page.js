
function createButton(url) {
    const link = document.createElement('a');
    link.classList.add('card__button');
    link.setAttribute('href', url);
    link.innerText = 'BUY TICKETS';
    return link;
}

const addShows = (responseData) => {
    const usersListEL = document.querySelector(".card");
    usersListEL.innerHTML = ""

    responseData.forEach(show => {

        const showEl = document.createElement('div');
        showEl.classList.add('card__content');
        usersListEL.appendChild(showEl);

        const datehead = document.createElement('p')
        datehead.classList.add('card__datehead');
        datehead.innerText = "DATE";
        showEl.appendChild(datehead);

        const date = document.createElement('p');
        date.classList.add('card__date');
        const date1 = new Date(parseInt(show.date));
        date.innerText = date1.toDateString();
        showEl.appendChild(date);


        const venuehead = document.createElement('p')
        venuehead.classList.add('card__venuehead');
        venuehead.innerText = "VENUE";
        showEl.appendChild(venuehead);

        const venue = document.createElement('p');
        venue.classList.add('card__venue');
        venue.innerText = show.place;
        showEl.appendChild(venue);
        
        const locationhead = document.createElement('p')
        locationhead.classList.add('card__locationhead');
        locationhead.innerText = "LOCATION";
        showEl.appendChild(locationhead);

        const location = document.createElement('p');
        location.classList.add('card__location');
        location.innerText = show.location;
        showEl.appendChild(location);

        const ticketLink = createButton(show.links);
        showEl.appendChild(ticketLink);

    });
}

axios 
.get('https://project-1-api.herokuapp.com/showdates?api_key=d67fc7e7-0b23-4412-b210-2a0744180a')
.then(response => {
    console.log(response.data);
    addShows(response.data);
    return response.data;
})
.catch((err) => console.log(err));
