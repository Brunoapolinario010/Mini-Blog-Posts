
const posts = () => fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((data) => {
    data.forEach(e => {
        const newPost = document.createElement('div');
        const newTitle = document.createElement('h2');
        newTitle.classList.add('title');
        const newBody = document.createElement('p');
        newBody.classList.add('body');
        const newAuthor = document.createElement('p');
        newAuthor.classList.add('author');

        newPost.classList.add('post');
        newPost.appendChild(newTitle);
        newPost.appendChild(newBody);
        newPost.appendChild(newAuthor);
        newPost.querySelector('.title').innerText = e.title;
        newPost.querySelector('.body').innerText = e.body;

        fetch(`https://jsonplaceholder.typicode.com/users/${e.userId}`)
        .then((response) => response.json())
        .then((data) => newPost.querySelector('.author').innerText = data.username);

        document.querySelector('.container').appendChild(newPost);
        newPost.append(document.createElement('hr'));
    });
});

posts();