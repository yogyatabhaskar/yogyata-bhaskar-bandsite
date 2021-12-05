
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
        date.innerText = new Date(parseInt(show.date));
        //date.innerText = new Date(parseInt(show.date.getFullYear()+'/'+(show.date.getMonth()+1)+'/'+show.date.getDate()));

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
.catch((err) => console.log(err))




// const concert = [
    
//     { 

//         date: "Mon Sept 06 2021",
//         venue: "Ronald Lane",
//         location: "San Francisco, CA",
//         links: '#'
//     },

//     {
//         date: "Tue Sept 21 2021",
//         venue: "Pier 3 East",
//         location: "San Francisco, CA",
//         links: '#'    
//     },

//     {
//         date: "Fri Oct 15 2021",
//         venue: "View Lounge",
//         location: "San Francisco, CA",
//         links: '#'   
//     },

//     {
//         date: "Sat Nov 06 2021",
//         venue: "Hyatt Agency",
//         location: "San Francisco, CA",
//         links: '#'
//         },

//     {
//         date: "Fri NOV 26 2021",
//         venue: "Moscow Center",
//         location: "San Francisco, CA",
//         links: '#'
//     },

//     {
//         date: "WED DEC 15 2021",
//         venue: "Press Club",
//         location: "San Francisco, CA",
//         links: '#'
//     }

// ];

// function createButton(url) {
//     const link = document.createElement('a');
//     link.classList.add('card__button');
//     link.setAttribute('href', url);
//     link.innerText = 'BUY TICKETS';
//     return link;
// }

//  // Content container
// const cardContent1 = document.createElement('div');
// cardContent1.classList.add('card__content1');

// const datehead1 = document.createElement('p');
// datehead1.classList.add('card__datehead1');
// datehead1.innerText = "DATE";
// cardContent1.appendChild(datehead1);


// const venuehead1 = document.createElement('p')
// venuehead1.classList.add('card__venuehead1');
// venuehead1.innerText = "VENUE";
// cardContent1.appendChild(venuehead1);

// const locationhead1 = document.createElement('p')
// locationhead1.classList.add('card__locationhead1');
// locationhead1.innerText = "LOCATION";
// cardContent1.appendChild(locationhead1);

// const concertEl1 = document.querySelector('.card');
// concertEl1.appendChild(cardContent1);
  

// function createCard(show) {
//     // Content container
//     const cardContent = document.createElement('div');
//     cardContent.classList.add('card__content');

//     // Date
//     const datehead = document.createElement('p')
//     datehead.classList.add('card__datehead');
//     datehead.innerText = "DATE";
//     cardContent.appendChild(datehead);

//     const date = document.createElement('p');
//     date.classList.add('card__date');
//     date.innerText = show.date;
//     cardContent.appendChild(date);

//     //venue
//     const venuehead = document.createElement('p')
//     venuehead.classList.add('card__venuehead');
//     venuehead.innerText = "VENUE";
//     cardContent.appendChild(venuehead);

//     const venue = document.createElement('p');
//     venue.classList.add('card__venue');
//     venue.innerText = show.venue;
//     cardContent.appendChild(venue);
    


//     //location
//     const locationhead = document.createElement('p')
//     locationhead.classList.add('card__locationhead');
//     locationhead.innerText = "LOCATION";
//     cardContent.appendChild(locationhead);

//     const location = document.createElement('p');
//     location.classList.add('card__location');
//     location.innerText = show.location;
//     cardContent.appendChild(location);

//     //BUTTON
//     const ticketLink = createButton(show.links);
//     cardContent.appendChild(ticketLink);

    

//   return cardContent;
// }





// const concertEl = document.querySelector('.card');


// for (let i = 0; i < concert.length; i++){
//     const concertCard = createCard(concert[i]);
//     concertEl.appendChild(concertCard);
// }




   

   


