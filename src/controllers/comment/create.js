const create = async (req, res) => {
    console.log(req.body)
    const {
        db: { Comment },
        body: { user_id, post_id, comment_body },
    } = req;
    
    const commentData = { user_id, post_id, comment_body }

    const comment = await Comment.create(commentData);
    
    res.send(comment);
};

module.exports = create;
