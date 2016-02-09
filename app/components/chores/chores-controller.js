app.controller('choresController',function($scope){
    $scope.test = "This is a test";
    
    $scope.chores = [{
        task:'walk dog',
        dueDate: Date.now(),
        responsibleParty:'Scott',
        estTime: 15
    },
    {
        task:'Run dog',
        dueDate: Date.now(),
        responsibleParty:'Dave',
        estTime: 45
    },
    {
        task:'Wash Dishes',
        dueDate: Date.now(),
        responsibleParty:'Kelly',
        estTime: 15
    },
    {
        task:'Buy Groceries',
        dueDate: Date.now(),
        responsibleParty:'Paul',
        estTime: 15
    },
    ]
    
    $scope.addNewChore = function(){
        $scope.chores.push($scope.newTask);
        $scope.newTask = "";
    }
    $scope.deleteChore = function (i){
        $scope.chores.splice(i,1)
    }
})