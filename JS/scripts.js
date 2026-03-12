const searchBar = document.getElementById("search-bar");
const posts = document.querySelectorAll(".post");

searchBar.addEventListener('keyup', function(e)
{
    const term = e.target.value.toLowerCase();
    posts.forEach(function(post) {
        const titleElement = post.querySelector('.post-title');
        const titleText = titleElement.textContent.toLowerCase();
        
        if (titleText.includes(term)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
});