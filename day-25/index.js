fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comment => {
        console.log(comment);

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(post => {
                console.log(post);

                let config = [];
                for (let i = 0; i < post.length; i++) {
                    for (let j = 0; j < comment.length; j++) {
                        if (post[i].id === comment[j].postId) {
                            config.push(post[i], comment[j]);
                        }
                    }
                }
                console.log(config);
                // if (post[0] === comment[0]){
                //         config.post = post;
                //         config.comment = comment;
                // }
                //console.log(config);

            });
    });

// for (let i = 0; i < posts.length; i++) {
//     console.log(posts[i]);
// }
//
// console.log(posts.filter((id) => id));