angular.module("taskmanagerApp",[]);

var taskList = [
	{name:"Sample Task", status:false},	
];

angular.module("taskmanagerApp")
	.controller("taskmanagerCtrl", function($scope){
		$scope.tasks = taskList;

		$scope.addTask = function(taskName){
			$scope.tasks.push({name:taskName,status:false});
		};
	});