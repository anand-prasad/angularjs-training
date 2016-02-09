expManager.factory('expManagerService',function(){
	
		 var serviceObj ={};
		 var incArr =[];
		 var expArr =[];
		 var incExpCal ={};
		 serviceObj.addData = function(objType){
		 if(objType.hasOwnProperty('incomeCategory'))
		 {
		 incArr.push(objType);
		 return incArr;
		 }
		 else{
		  expArr.push(objType);
		  return expArr;
 		 }
		 }
		 serviceObj.editData = function(objType){
	     incomeexpCal=angular.copy(objType);
		 return incomeexpCal;
		 }
		 serviceObj.updateData = function(objType){
		 return objType;
		 }
		 serviceObj.deleteData = function(index,objType)
		 {
			if(objType==="income")
		 {
		 incArr.splice(index,1);
		 return incArr;
		 }
		 else{
		 expArr.splice(index,1);
		 return expArr;
 		 } 
		 }
		 return serviceObj;
}); 
