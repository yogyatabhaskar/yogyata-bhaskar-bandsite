const addComments = (responseData) => {
    const usersListEL = document.querySelector("#view__area");
    usersListEL.innerHTML = ""

   responseData.forEach(comment2 => {
        const commentContent = document.createElement('div');
        commentContent.classList.add('view__content');
        usersListEL.appendChild(commentContent);

        const thumbnail = document.createElement('img');
        thumbnail.classList.add('view__thumbnail');
        thumbnail.setAttribute('src', comment2.thumbnail);
        commentContent.appendChild(thumbnail);

        const name = document.createElement('p');
        name.classList.add('view__name');
        name.innerText = comment2.name;
        commentContent.appendChild(name);


        const date = document.createElement('p');
        date.classList.add('view__date');
        const date1 = new Date(parseInt(comment2.timestamp));
        date.innerText = date1.toLocaleDateString();
        
        commentContent.appendChild(date);

        const remarks = document.createElement('p');
        remarks.innerText = comment2.comment;
        remarks.classList.add('view__remarks');
        commentContent.appendChild(remarks);
    });
}

const today = new Date();   
const date12 =today.toLocaleDateString();
console.log(date12);

const form = document.querySelector('.comment-form');

const formEvent = form.addEventListener('submit', event => {
    event.preventDefault();
    
    const name = event.target.fullName.value,
    timestamp = date12
    const comment = event.target.commentsec.value

    const user = { name, timestamp, comment };
    //createUser(user);
    console.log(user);
    
    axios
    .post('https://project-1-api.herokuapp.com/comments?api_key=d67fc7e7-0b23-4412-b210-2a0744180a', user, {
    headers: {
        'Content-Type': 'application/json'
}})

.then(responseData => {
    const addedUser = responseData.data;
    console.log(`POST: user is added`, addedUser);
})
.catch((err) => console.log(err));

})


const createUser = (user) => {
    axios.post('https://reqres.in/api/users', user, {
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(response => {
            const addedUser = response.data;
            console.log(`POST: user is added`, addedUser);
            
        })
        .catch(error => console.error(error));
};
axios
.get('https://project-1-api.herokuapp.com/comments?api_key=d67fc7e7-0b23-4412-b210-2a0744180a')
.then(response => {
    console.log(response.data);
    addComments(response.data);

return addComments;
})
.catch((err) => console.log(err));





// function compare(a, b) {
//     return b.timestamp - a.timestamp;
// }


// return axios.post('https://project-1-api.herokuapp.com/comments?api_key=d67fc7e7-0b23-4412-b210-2a0744180a', formEvent, {
//     headers: {
//         'Content-Type': 'application/json'
// }});
// })
// .then(responseData => {
//     const addedUser = responseData.data;
//     console.log(`POST: user is added`, addedUser);
    

// })