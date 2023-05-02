const create = async (req, res) => {
    const {
        db: { Posts },
        body: { content, title, userId },
    } = req;
    const postData = {  content, title, userId }

    const posts = await Posts.create(postData);
    
    res.send(posts);
};

module.exports = create;
