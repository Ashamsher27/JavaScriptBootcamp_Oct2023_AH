document.getElementById('fetchButton').addEventListener('click', () => {
    let subreddit = document.getElementById('subredditInput').value || 'aww';
    fetchPosts(subreddit);
});
function fetchPosts(subreddit) {
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(data => displayPosts(data.data.children.slice(0, 10)))
        .catch(error => console.error('Error:', error));
}
function displayPosts(posts) {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = "";
    posts.forEach(post => {
        const { title, thumbnail, permalink } = post.data;
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h2 id="title">${title}</h2>
            <img src="${thumbnail}" alt="${title}">
            <a href="https://www.reddit.com${permalink}" target="_blank">Read more</a>
        `;
        postsContainer.appendChild(postElement);
    });
}
// Initial fetch for 'aww' subreddit
fetchPosts('aww');