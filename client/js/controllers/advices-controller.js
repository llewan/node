
app.controller('advicesController', ['$scope', '$resource', function($scope, $resource){
  
  var Advice = $resource('/api/advices');

  Advice.query(function (results){
  	$scope.advices = results;
  });

  /*$scope.advices = [
  	{	title: 'Culo', description: 'lorem itsum loret itsum' },
  	{   title: 'Pito', description: 'lorem itsum loret itsum' }
  ];*/

  $scope.createAdvice = function(){
  	//$scope.advices.push({ title: $scope.adviceForm.title, description: $scope.adviceForm.description });
  	//$scope.adviceForm = {};
  	var advice = new Advice();
  	advice.title = $scope.adviceForm.title;
  	advice.description = $scope.adviceForm.description;
  	advice.$save( function(result){
  		$scope.advices.push(result);
  		$scope.adviceForm = {};
  	});
  }

}]);

