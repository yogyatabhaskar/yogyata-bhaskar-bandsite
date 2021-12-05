const form = document.querySelector('.comment-form');

// const today = new Date();   
// const date1 =today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
// console.log(date);

const formEvent = form.addEventListener('submit', event => {
    event.preventDefault();

    const fullname = document.querySelector('#fullName').value;
    //const postedDate: date1,
    const commentSec = document.querySelector('#commentsec').value;

    const user = { fullname, commentSec };
    createUser(user);

    // const cardData = {
    // onename: event.target.fullname.value,
    // twoname: event.target.commentSec.value,
    // };

    // console.log(cardData);
   
});

const createUser = (user) => {
    axios.post('https://reqres.in/api/users', user)
        .then(response => {
            const addedUser = response.data;
            console.log(`POST: user is added`, addedUser);
            // append to DOM
            // appendChild([addedUser]);
        })
        .catch(error => console.error(error));
};





// // const  BANDSITE_API_URL = () => `https://project-1-api.herokuapp.com/?api_key=api_key=${API_KEY}`;
// // const API_KEY = "d67fc7e7-0b23-4412-b210-2a0744180a84";

// // let comment_id = '';

// const commenttext = [
//     {   thumbnail: " ",
//         name: "Connor Walton", 
//         date: "02/17/2021", 
//         remarks: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
//     },

//     {
//         thumbnail: " ",
//         name: "Emilie Beach", 
//         date: "01/09/2021", 
//         remarks: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
//     },

//     {
//         thumbnail: " ",
//         name: "Miles Acosta", 
//         date: "12/20/2020", 
//         remarks: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
//     }
// ]

// //comment content
// function createCommentCard(comment) {
//     const commentContent = document.createElement('div');
//     commentContent.classList.add('view__content');

//     const thumbnail = document.createElement('img');
//     thumbnail.classList.add('view__thumbnail');
//     thumbnail.setAttribute('src', comment.thumbnail);
//     commentContent.appendChild(thumbnail);

//     const name = document.createElement('p');
//     name.classList.add('view__name');
//     name.innerText = comment.name;
//     commentContent.appendChild(name);


//     const date = document.createElement('p');
//     date.classList.add('view__date');
//     date.innerText = comment.date;
//     commentContent.appendChild(date);

//     const remarks = document.createElement('p');
//     remarks.innerText = comment.remarks;
//     remarks.classList.add('view__remarks');
//     commentContent.appendChild(remarks);

//     return commentContent;

// }

// function renderComments() {
//     const commentAreaEl = document.getElementById('view__area');
//     commentAreaEl.innerHTML = "";
    
//     //render all comments
//     for (let i = 0; i<commenttext.length; i++) {
//         const card = createCommentCard(commenttext[i]);
//         commentAreaEl.appendChild(card);
//     }
// }

// const today = new Date();   
// const date =today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
// console.log(date);




// function handleCommentSubmit (event) {
//     event.preventDefault();

//     const cardData = {
//     name: event.target.fullName.value,
//     date: date,
//     remarks: event.target.commentsec.value
//     };

//     commenttext.unshift(cardData);
//     renderComments();

// }

// const formEl = document.querySelector('.comment-form');
// formEl.addEventListener('submit', handleCommentSubmit);
// renderComments();