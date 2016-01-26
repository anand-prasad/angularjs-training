// JavaScript Document
var expManager=angular.module('expManager',[]);
expManager.controller('expenseManagerCtrl', function($scope){
    $scope.IsIncomeVisible = false;
	$scope.IsExpenseVisible=false;

	$scope.income =[
      {id: '1', name: 'Rent',amount:4000},
      {id: '2', name: 'Salary',amount:5000},
      {id: '3', name: 'OtherSources',amount:8000}
     ];
	 $scope.expense =[
       {id: '1', name: 'Apparels',amount:3000},
       {id: '2', name: 'Travel',amount:4000},
       {id: '3', name: 'Groceries',amount:5000}
     ];
	 
	  $scope.ShowIncome = function () {
      $scope.IsIncomeVisible =  true;
	  $scope.IsExpenseVisible =false;


      }
	  $scope.ShowExpense = function () {
	  $scope.IsExpenseVisible =true;
	  $scope.IsIncomeVisible =  false;

      }
	  
	  $scope.totalIncome= function()
	  {
		  var total = 0;
         for(var i = 0; i < $scope.income.length; i++){
          total = total + $scope.income[0].amount;
      }
      return total; 
	  }

	  $scope.totalExpense= function()
	  {
		  var total = 0;
         for(var i = 0; i < $scope.expense.length; i++){
          total = total + $scope.expense[0].amount;
      }
      return total; 
	  }
});	 

