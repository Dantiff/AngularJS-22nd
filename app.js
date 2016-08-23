angular.module('danTest', []);
angular.module('danTest').controller('articleCtrl', function($scope, pageSize) {
  $scope.articles = [
    { title: "Arduino Tutorial" },
    { title: "After Effects Tutorial" },
    { title: "Django Tutorial" },
    { title: "Angular Tutorial" },
    { title: "Laravel Tutorial" }


  ];

  $scope.numArticles = pageSize;
});  
angular.module('danTest').value('pageSize', 4);  
angular.module('danTest').controller('formCtrl', function($scope) {
  $scope.master = {};

  $scope.update = function(user) {
  $scope.master = angular.copy(user);
                        };
$scope.reset = function() {
$scope.user = angular.copy($scope.master);
};
$scope.reset();
});