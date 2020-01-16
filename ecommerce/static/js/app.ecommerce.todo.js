app.controller('businessManagement.ecommerce.todo' , function($scope , $http , $aside , $state, Flash , $users , $filter , $permissions , $sce){
  $scope.edittodo = function() {
    console.log("kkkk");
    $scope.$emit('edittodo' , {data : $scope.data})
  }

    $scope.data = {
      tableData: [ ]
    };

    views = [{
      name: 'list',
      icon: 'fa-th-large',
      template: '/static/ngTemplates/genericTable/genericSearchList.html',
      itemTemplate: '/static/ngTemplates/app.ecommerce.todo.item.html',
    },
   ];


    $scope.config = {
      views: views,
      url: '/api/ecommerce/todo/',
      searchField: 'name',
      deletable: true,
      itemsNumPerView: [8,16, 32, 48],
    }


    $scope.tableAction = function(target, action, mode) {
      console.log(target, action, mode,"le");
      console.log($scope.data.tableData,"le2");

      for (var i = 0; i < $scope.data.tableData.length; i++) {
        if ($scope.data.tableData[i].pk == parseInt(target)) {
          if (action == 'edit') {
            var title = 'Edit Todo :';
            var appType = 'todoEditor';
          } else if (action == 'details') {
            var title = 'Details :';
            var appType = 'todoExplorer';
          }


          console.log({
            title: title + $scope.data.tableData[i].name,
            cancel: true,
            app: appType,
            data: {
              pk: target,
              index: i
            },
            active: true
          });


          $scope.addTab({
            title: title + $scope.data.tableData[i].name,
            cancel: true,
            app: appType,
            data: {
              pk: target,
              index: i
            },
            active: true
          })
        }
      }

    }


    $scope.tabs = [];
    $scope.searchTabActive = true;

    $scope.closeTab = function(index) {
      $scope.tabs.splice(index, 1)
    }

    $scope.addTab = function(input) {
      console.log(JSON.stringify(input));
      $scope.searchTabActive = false;
      alreadyOpen = false;
      for (var i = 0; i < $scope.tabs.length; i++) {
        if ($scope.tabs[i].data.pk == input.data.pk && $scope.tabs[i].app == input.app) {
          $scope.tabs[i].active = true;
          alreadyOpen = true;
        } else {
          $scope.tabs[i].active = false;
        }
      }
      if (!alreadyOpen) {
        $scope.tabs.push(input)
      }
    }

    // $scope.addTab({
    //   "title": "Details :with DP5",s
    //   "cancel": true,
    //   "app": "contactExplorer",
    //   "data": {
    //     "pk": 10,
    //     "index": 9
    //   },
    //   "active": true
    // })

    $scope.$on('exploretodo', function(event, input) {
      console.log("recieved");
      console.log(input,"lesaale");
      $scope.addTab({
      "title": "Details :" + input.todo.title,
        "cancel": true,
        "app": "todoExplorer",
        "data": {
          "pk": input.todo.pk
        },
        "active": true
      })
    });


    $scope.$on('edittodo', function(event, input) {
      console.log("recieved");
      console.log(input,"lesaale");
      $scope.addTab({
        "title": "Edit :" + input.todo.name,
        "cancel": true,
        "app": "todoEditor",
        "data": {
          "pk": input.todo.pk,
          data : input.data
        },
        "active": true
      })
    });


$scope.data = {
  title:'',
  name:'',
  details : ''
}

$scope.mainHeading = "Create a custom Card"
$scope.submit = function(){
  $http({
    method : 'POST',
    url : '/api/ecommerce/todo/',
    data : $scope.data,
  }).
  then(function(response){
    $scope.data.name = " ";
    $scope.data.title = " " ;
    $scope.data.details = "";
    console.log($scope.data.details)
    console.log(response.data);
  })

}


$scope.remove = function(){
  console.log("remove")
}

});

//-----------------------------------  Item Controller ------------------------------//


app.controller('businessManagement.ecommerce.todo.item' , function($scope , $http , $aside , $state, Flash , $users , $filter , $permissions , $sce){



  $http({method : 'GET' , url : '/api/ecommerce/todo/'+ $scope.data.pk }).
  then(function(response) {
    $scope.insight = response.data;
  })

  $scope.count = 0;
  $scope.addMenu = function(){
    $scope.count++
  }


  $scope.deleteCard = function(){
    $http({method : 'DELETE' , url : '/api/ecommerce/todo/'+ $scope.data.pk + '/' }).
  then(function(response) {
    $scope.insight = response.data;
  })
  }

  $scope.config = JSON.parse($scope.configObj);
  $scope.options = $scope.config.options;
  $scope.selectable = angular.isDefined($scope.config.multiselectOptions) ? true:false;
  $scope.deletable = angular.isDefined($scope.config.deletable) ? $scope.config.deletable:false;
  $scope.editorTemplate = angular.isDefined($scope.config.editorTemplate) ? $scope.config.editorTemplate:'';
  $scope.fields = angular.isDefined($scope.config.fields) ? $scope.config.fields: false;

  $scope.getTarget = function(){
    if (typeof $scope.data.url == 'undefined') {
      if (typeof $scope.data.pk == 'undefined') {
        $scope.target = $scope.data.id;
      } else {
        $scope.target = $scope.data.pk;
      }
    } else {
      $scope.target = $scope.data.url;
      $scope.data.pk = getPK($scope.data.url);
    }
  }

  $scope.getTarget()

  $scope.editRow = function(option){
    $scope.mainHeading = "edit this card" ;
    $scope.getTarget();
    $scope.rowAction( $scope.target ,  option)
  }

  if (angular.isDefined($scope.rowScope)) {
    $scope.rowScope = angular.copy($scope.rowScope) // i noticed that it was binding this to the root rowScope outside the table directive
    // basically when we want to edit the data and pass some functions or variables from outside of the generic table directive down to the modal controller
  }

  $scope.submitForm = function(){
    $scope.rowAction( $scope.target , 'submitForm' , $scope.data);
    // $scope.target is the pk or the url of the object
  }

  $scope.editable = angular.isDefined($scope.editorTemplate) && $scope.editorTemplate.length!=0? true : false;
  // the parent scope on successful posting the data sends this signal with a input
  $scope.$on('forceGenericTableRowRefresh', function(event, input) {
    if ($scope.pk == input.pk || input.pk == -1) { // -1 when we want all of them to update certain property but i dont think there is a use case for this
      for (key in input){
        $scope.data[key] = input[key];
      }
    }
  });

  // anything passed in the rowScope variable in the generic-table directive is available (without binding) to the modal's controller (in the $scope variable)
  // as well as the table row scope (in $scope.rowScope variable)
  $scope.edit = function(){
    $uibModal.open({
      templateUrl: $scope.editorTemplate,
      size: 'lg',
      resolve: {
       submitFormFn : function(){
         return $scope.submitForm;
       },
       data : function(){
         return $scope.data;
       },
       config : function(){
         return $scope.config;
       },
      },
      controller: function($scope , submitFormFn , data , config , $uibModalInstance){
        $scope.submitForm = submitFormFn;
        $scope.data = data;
        $scope.data.formData = [];
        $scope.mode = 'edit';
        $scope.config = config;

        $scope.$on('closeEditModalWindow', function(event, input) {
          $uibModalInstance.dismiss();
        });
      },
    });
  }


  if (angular.isDefined($scope.options )) {
    $scope.optionsShow = true;
    $scope.otherOptions = angular.isDefined($scope.options.others)// show apart from main functions
  }else{
    $scope.optionsShow = false;
  }







});