expManager.factory('expManagerService',function($http,$q){
	
		 var serviceObj ={};
		 var incExp =[];
		 serviceObj.getData = function(objType, type){		  
          return $http({
			  method:'GET',
			  url:'http://localhost:3000/' + type,
		  }).then(function (response){
			  if(!response || !response.data)
			  {
				  return $q.reject('Empty response');
			  }
			  else if(!response.data.length)
			  {
				  return $q.reject('No data error');
		      }
			  else{
			      return response.data;
			  }
		 });
        }	 
		 serviceObj.addData = function(objType, type){
		 return $http({
          method  : 'POST',
          url     : 'http://localhost:3000/' + type,
          data    : objType, 
         })
          .then(function(response) {
            if(!response || !response.data)
			  {
				  return $q.reject('Empty response');
			  }
			else {
                incExp.push(objType);
            }
		 });
		 }
		 serviceObj.editData = function(objType){
	     incomeCal=angular.copy(objType);
		 return incomeCal;
		 }
		 serviceObj.updateData = function(index,type,objType){
		 return $http({
          method  : 'put',
          url     : 'http://localhost:3000/' + type + "/" + index,
          data    : objType, 
         })
          .then(function(response) {
            if(!response || !response.data)
			  {
				  return $q.reject('Empty response');
			  }
			else {
                incExp[index] = objType;
            }
		 });	 
		 }
 		 serviceObj.deleteData = function(index,type,arr){
		  var deleteRecord = confirm('Are you sure you want to delete?');
		  if (deleteRecord){
	     return $http({
          method  : 'delete',
          url     : 'http://localhost:3000/' + type + "/" + index,
         })
          .then(function(response) {
            if (response.status !=200) {
				console.log(error);
            } else {
				console.log(response.status)
			}		 
		 });
		 }
		 }
		 return serviceObj;
}); 
