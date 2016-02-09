// JavaScript Document
var expManager=angular.module('expManager',[]);
expManager.controller('expenseManagerCtrl', function($scope,expManagerService){
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
		 if($scope.userIncForm.$valid)
		 {
		 $scope.submitted=false;
		 $scope.incomeArr=expManagerService.addData($scope.incomeCal);
		 $scope.incomeCal={};
		 }
		 else{
			 $scope.submitted=true;
		 }

	  }
	  $scope.editInc= function(index){
		 $scope.newIncomeCal=$scope.incomeArr[index];
		 $scope.incomeCal=expManagerService.editData($scope.newIncomeCal);
		 $scope.isAddVisible=true; 
		 $scope.isUpdateVisible=true; 
		 $scope.currentIndex=index;
		 
	  };
	  $scope.updateInc=function()
	  {
		 $scope.incomeArr[$scope.currentIndex]=expManagerService.updateData($scope.incomeCal);
		 $scope.isAddVisible=false; 
		 $scope.isUpdateVisible=false;
		 $scope.incomeCal={};
	  }
	  
	   $scope.deleteInc = function(index){
       $scope.incomeArr=expManagerService.deleteData(index,"income");

     };
	  $scope.AddExpense=function()
	  {
		 if($scope.userExpForm.$valid)
		 {
		 $scope.submitted=false;
		 $scope.expenseArr=expManagerService.addData($scope.expenseCal);
		 $scope.expenseCal={};
		 }
		 else{
			 $scope.submitted=true;
		 }

	  }
	  $scope.editExp= function(index){
		 $scope.newExpenseCal=$scope.expenseArr[index];
		 $scope.expenseCal=expManagerService.editData($scope.newExpenseCal);
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
       $scope.expenseArr=expManagerService.deleteData(index,"expense");
     };

});	

 
 


 