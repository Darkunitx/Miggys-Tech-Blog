const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('#comment').value.trim();
    const post_id = document.querySelector('#post-id').value.trim();
    if (comment_text && post_id) {

        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content, post_id }),
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
    .querySelector('#postcomment')
    .addEventListener('click', commentFormHandler);