const commentFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the comment form
    const comment_text = document.querySelector('#comment-text').value.trim();
    const post_id = document.querySelector('#post-id').value.trim();
    if (comment_text && post_id) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_text, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);