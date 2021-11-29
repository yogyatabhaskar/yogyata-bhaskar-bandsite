const commenttext = [
    {   thumbnail: " ",
        name: "Connor Walton", 
        date: "02/17/2021", 
        remarks: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },

    {
        thumbnail: " ",
        name: "Emilie Beach", 
        date: "01/09/2021", 
        remarks: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },

    {
        thumbnail: " ",
        name: "Miles Acosta", 
        date: "12/20/2020", 
        remarks: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
]

//comment content
function createCommentCard(comment) {
    const commentContent = document.createElement('div');
    commentContent.classList.add('view__content');

    const thumbnail = document.createElement('img');
    thumbnail.classList.add('view__thumbnail');
    thumbnail.setAttribute('src', comment.thumbnail);
    commentContent.appendChild(thumbnail);

    const name = document.createElement('p');
    name.classList.add('view__name');
    name.innerText = comment.name;
    commentContent.appendChild(name);


    const date = document.createElement('p');
    date.classList.add('view__date');
    date.innerText = comment.date;
    commentContent.appendChild(date);

    const remarks = document.createElement('p');
    remarks.innerText = comment.remarks;
    remarks.classList.add('view__remarks');
    commentContent.appendChild(remarks);

    return commentContent;

}

function renderComments() {
    const commentAreaEl = document.getElementById('view__area');
    commentAreaEl.innerHTML = "";
    
    //render all comments
    for (let i = 0; i<commenttext.length; i++) {
        const card = createCommentCard(commenttext[i]);
        commentAreaEl.appendChild(card);
    }
}

const currentDate = new Date();   //rename
    console.log(currentDate);




function handleCommentSubmit (event) {
    event.preventDefault();

    const cardData = {
        
        name: event.target.fullName.value,
        date: currentDate,
        remarks: event.target.commentsec.value
    };

    commenttext.unshift(cardData);
    renderComments();

}

const formEl = document.querySelector('.comment-form');
formEl.addEventListener('submit', handleCommentSubmit);
renderComments();