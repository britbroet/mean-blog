angular.module('MeanBlogApp')
.controller('HomeCtrl', ['$scope', 'PostService', function($scope, PostService) {
  $scope.posts = [];
  $scope.newPost = {
    title: '',
    content: ''
  }

  // Load all of the posts when the page first loads.
  getAllPosts();

  $scope.submitPost = function() {
    PostService.addPost($scope.newPost, function(res) {
      PostService.getAllPosts(function(data) {
        $scope.posts = data.data;
      });
    });
  }

  $scope.deletePost = function(post) {
    PostService.deletePost(post, function(res) {
      getAllPosts();
    });
  };

  function getAllPosts() {
    PostService.getAllPosts(function success(res) {
      $scope.posts = res.data;
    }, function error(res) {
      console.log(res);
    });
  }

}]);
