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
      var incomePromise = expManagerService.getData($scope.incomeCal, 'income');
	  incomePromise.then(function (data) {
		 $scope.incomeArr = data; 
	  }, function(error) {
         alert(error); 
	  });      
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
	  
	  $scope.ShowExpense = function () {
	  $scope.IsExpenseVisible = true;
	  $scope.IsIncomeVisible = false;
	  var expensePromise = expManagerService.getData($scope.expenseCal, 'expense');
	  expensePromise.then(function (data) {
		 $scope.expenseArr = data; 
      }, function(error) {
	      alert(error);
	  });
      }
	  $scope.AddIncome=function()
	  {
		 if($scope.userIncForm.$valid)
		 {
		 $scope.submitted=false;
		 var addIncomePromise=expManagerService.addData($scope.incomeCal,'income');
		 addIncomePromise.then(function () {
		 alert("data added sucessfully");
		 $scope.incomeCal={};
		 $scope.ShowIncome();
		 
         }, function(error) {
	      console.log('error',error);
	    });
		 }
		 else{
			 $scope.submitted=true;
		 }

	  }
	  $scope.editInc= function(index){
		 $scope.newIncomeCal=$scope.incomeArr[index];
		 $scope.incomeCal=expManagerService.editData($scope.newIncomeCal);
		 $scope.incomeCal.date = new Date($scope.incomeCal.date);
		 $scope.isAddVisible=true; 
		 $scope.isUpdateVisible=true; 
		 $scope.currentIndex=$scope.incomeCal.id;
		 
	  };
	  $scope.updateInc=function()
	  {
		 var updateIncomePromise=expManagerService.updateData($scope.currentIndex,"income",$scope.incomeCal);
		 updateIncomePromise.then(function () {
			 alert("data updated successfully");
			$scope.ShowIncome();

	     }, function(error) {
         alert('error',error); 
	     }); 		 
		 $scope.isAddVisible=false; 
		 $scope.isUpdateVisible=false;
		 $scope.incomeCal={};
	  }
	  
	   $scope.deleteInc = function(index ,arrIndex){
       var deleteIncomePromise=expManagerService.deleteData(index,'income',$scope.incomeArr);
	   deleteIncomePromise.then(function () {
		   $scope.incomeArr.splice(arrIndex,1);
	    }, function(error) {
         console.log('error',error); 
	    }); 	   

     };
	  $scope.AddExpense=function()
	  {
		 if($scope.userExpForm.$valid)
		 {
		 $scope.submitted=false;
		 var addExpensePromise=expManagerService.addData($scope.expenseCal,'expense');
		 addExpensePromise.then(function () {
		 alert("data added sucessfully");
		 $scope.expenseCal={};
		 $scope.ShowExpense();
         }, function(error) {
	      alert(error);
	    });
		 }
		 else{
		 $scope.submitted=true;
		 }

	  }
	  $scope.editExp= function(index){
		 $scope.newExpenseCal=$scope.expenseArr[index];
		 $scope.expenseCal=expManagerService.editData($scope.newExpenseCal);
		 $scope.expenseCal.date = new Date($scope.expenseCal.date);
		 $scope.isAddVisible=true; 
		 $scope.isUpdateVisible=true; 
		 $scope.currentIndex=$scope.expenseCal.id;
	  };
	   $scope.updateExp=function()
	  {
		var updateExpensePromise=expManagerService.updateData($scope.currentIndex,"expense",$scope.expenseCal);
		updateExpensePromise.then(function () {
	    alert("data updated successfully");
	    $scope.ShowExpense();
	    }, function(error) {
         alert(error); 
	    }); 
		 $scope.isAddVisible=false; 
		 $scope.isUpdateVisible=false;
		 $scope.expenseCal={};
	  }
	   $scope.deleteExp = function(index,arrIndex){
		   
       var deleteExpensePromise=expManagerService.deleteData(index,'expense',$scope.expenseArr);
	   deleteExpensePromise.then(function () {
	   $scope.expenseArr.splice(arrIndex,1);
	   alert("data deleted successfully")
	    }, function(error) {
         console.log(error); 
	    });    

     };

});	

 
 

