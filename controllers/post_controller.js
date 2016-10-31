var express = require('express');
var Post = require('../models/post.js');
var router = express.Router();

router.route('/')
.get(function(req, res) {
  Post.find(function(err, posts) {
    if(err) {
      return res.status(500).send(err);
    }

    return res.send(posts);
  });
})
.post(function(req, res) {
  req.body.createdAt = new Date();
  Post.create(req.body, function(err, post) {
    if(err) {
      return res.status(500).send(err);
    }

    res.send(post);
  });
});

router.route('/:id')
.delete(function(req, res) {
  var id = req.params.id;
  console.log("deleting post:", id);
  Post.findByIdAndRemove(id, function(err, post) {
    if (err) {
      return res.status(500).send(err);
    }

    res.send(true);
  });
});

module.exports = router;
