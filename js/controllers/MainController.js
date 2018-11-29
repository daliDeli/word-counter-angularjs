app.controller('MainController', function($scope){
  $scope.sentence = '';
  $scope.word = '';
  $scope.repeats = 0;
  $scope.wordIsSubmited = false;
  $scope.sentenceIsSubmited = false;
  $scope.result = '';
  $scope.submitSentence = () => { $scope.sentenceIsSubmited = true};
  $scope.calculate = () => { 
    $scope.repeats = $scope.sentence.split(' ').filter( word => word === $scope.word).length;
    $scope.result = $scope.repeats ? `Da nalazi se rec u textu ${$scope.repeats} puta.` : 'Ne nalazi se rec u textu.'
    $scope.wordIsSubmited = true;
  };
  $scope.restart = () => {
    $scope.sentence = '';
    $scope.word = '';
    $scope.sentenceIsSubmited = false;
    $scope.wordIsSubmited = false;
  }
});