angular.module('MeanBlogApp')
.service('PostService', ['$http', function($http) {
  this.getAllPosts = function(callback) {
    $http({
      url: '/api/posts',
      method: 'GET'
    }).then(function(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  };

  this.addPost = function(postData, callback) {
    $http.post('/api/posts', postData).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

  this.deletePost = function(post, callback) {
    $http.delete('/api/posts/' + post._id).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  };
}]);
