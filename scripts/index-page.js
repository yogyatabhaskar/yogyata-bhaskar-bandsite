let panel = document.querySelector('.panel');
let comments = document.createElement('section');
comments.classList.add('comments');

panel.insertAdjacentElement('afterend', comments);

let form = document.querySelector('.commentpost');
comments.appendChild(form);

let interactiveForm = document.querySelector('form');
console.log(interactiveForm);

interactiveForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
let newComment = {
    'name': event.target.name.value,
    'comment': event.target.comment.value
}
  
function displayComment(comment) {

    let commentBox = document.createElement('div');
    commentBox.classList.add('comments__content');
    form.insertAdjacentElement('afterend', commentBox);

   

    let userInfo = document.createElement('div');
    userInfo.classList.add('comments__post');
    commentBox.appendChild(userInfo);

    let headingBox = document.createElement('div');
    headingBox.classList.add('comments__heading');
    userInfo.appendChild(headingBox);

    let image = document.createElement('img');
    image.classList.add('comments__thumbnail');
    image.setAttribute('src', '#');
    headingBox.appendChild(image);

    let userName = document.createElement('p');
    userName.classList.add('comments__name');
    userName.innerText = newComment.name;
    headingBox.appendChild(userName);

    const today = new Date();   
    const date123 =today.toLocaleDateString();
    console.log(date123);

    let commentDate = document.createElement('p');
    commentDate.classList.add('comments__date');
    commentDate.innerText = date123;
    headingBox.appendChild(commentDate);

    let newestComment = document.createElement('p');
    newestComment.classList.add('comments__remarks');
    newestComment.innerText = newComment.comment;
    commentBox.appendChild(newestComment);

    return commentBox;
};
displayComment();
interactiveForm.reset();

axios 
.post('https://project-1-api.herokuapp.com/comments?api_key=nicky', newComment)
.then (response => {
    console.log(response);
})
.catch((error) => console.log(error));  
});

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

const formEl = document.querySelector('.comment-form');
    
axios
.get('https://project-1-api.herokuapp.com/comments?api_key=d67fc7e7-0b23-4412-b210-2a0744180a')
.then(response => {
    console.log(response.data);
    addComments(response.data);

return addComments;
})
.catch((err) => console.log(err));


