// JavaScript Document
var expManager=angular.module('expManager',[]);
expManager.controller('expenseManagerCtrl', function($scope){
    $scope.IsIncomeVisible = false;
	$scope.IsExpenseVisible=false;
    $scope.incomeCal={};
	$scope.expenseCal={};
	$scope.incomeArr=[];
	$scope.expenseArr=[];

	$scope.income =[
      {id: '1', name: 'Rent'},
      {id: '2', name: 'Salary'},
      {id: '3', name: 'OtherSources'}
     ];
	 $scope.expense =[
       {id: '1', name: 'Apparels'},
       {id: '2', name: 'Travel'},
       {id: '3', name: 'Groceries'}
     ];
	 
	  $scope.ShowIncome = function () {
      $scope.IsIncomeVisible =  true;
	  $scope.IsExpenseVisible = false;


      }
	  $scope.ShowExpense = function () {
	  $scope.IsExpenseVisible = true;
	  $scope.IsIncomeVisible = false;

      }
	  
	  $scope.totalIncome= function()
	  {
		  var total = 0;
         for(var i = 0; i < $scope.incomeArr.length; i++){
          total = total + parseInt($scope.incomeArr[i].incomeAmount);
      }
      return total; 
	  }

	  $scope.totalExpense= function()
	  {
		  var total = 0;
         for(var i = 0; i < $scope.expenseArr.length; i++){
          total = total + parseInt($scope.expenseArr[i].expenseAmount);
      }
      return total; 
	  }
	  $scope.AddIncome=function()
	  {
		  $scope.submitted=true;  
		  if($scope.userIncForm.$valid)
		  {
		  $scope.incomeArr.push($scope.incomeCal);
		  $scope.incomeCal={};
		  $scope.submitted=false;  

		  }
	  }
	  $scope.editInc= function(index){
		 $scope.newIncomeCal=$scope.incomeArr[index];
		 $scope.incomeCal=angular.copy($scope.newIncomeCal);
		 $scope.isAddVisible=true;
		 $scope.isUpdateVisible=true;
		 $scope.currentIndex=index;
	  };
	  $scope.updateInc=function()
	  {
		 $scope.incomeArr[$scope.currentIndex]=$scope.incomeCal;
		 $scope.isAddVisible=false;
		 $scope.isUpdateVisible=false;
		 $scope.incomeCal={};
	  }
	  
	   $scope.deleteInc = function(index){
	   $scope.incomeArr.splice(index,1);		

     };
	  $scope.AddExpense=function()
	  {
		  $scope.submitted=true;  
		  if($scope.userExpForm.$valid)
		  {
		  $scope.expenseArr.push($scope.expenseCal);
		  $scope.expenseCal={};
		  $scope.submitted=false;  
		  }

	  }
	  $scope.editExp= function(index){
		 $scope.newExpenseCal=$scope.expenseArr[index];
		 $scope.expenseCal=angular.copy($scope.newExpenseCal);
		 $scope.isAddVisible=true;
		 $scope.isUpdateVisible=true;
		 $scope.currentIndex=index;
	  };
	   $scope.updateExp=function()
	  {
		 $scope.expenseArr[$scope.currentIndex]=$scope.expenseCal;
		 $scope.isAddVisible=false; 
		 $scope.isUpdateVisible=false;
		 $scope.expenseCal={};
	  }
	   $scope.deleteExp = function(index){
	   $scope.expenseArr.splice(index,1);		

     };
});	 

