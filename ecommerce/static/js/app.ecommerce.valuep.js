var app = angular.module("value" , [ ]).
        controller("myctrl" , function($scope){
            $scope.open = false;
            $scope.data = {
                navList:[{name:"SERVICE" , },
                {name:"ABOUT US" , },
                {name:"IN THE MEDIA" , },
                {name:"CASE STUDIES" , },
                {name:"CAREERS" , },
                {name:"SERVICE" , },
                {name:"CONTACT US" , }
            ],
            cards:[{
                icon:"fa fa-shield" , heading:"Risk Advisory and Consulting" , pk:1 , createdOn : " ", type: " "
            },{
                icon:"fa fa-shield" , heading:"Security OPerations" , pk:1 , createdOn : " ", type: " "
            },{
                icon:"fa fa-shield" , heading:"Data Center Modernizations" , pk:1 , createdOn : " ", type: " "
            },{
                icon:"fa fa-shield" , heading:"CLoud Services" , pk:1 , createdOn : " ", type: " "
            },{
                icon:"fa fa-shield" , heading:"Network Transformation" , pk:1 , createdOn : " ", type: " "
            },{
                icon:"fa fa-shield" , heading:"Digital Workspace" , pk:1 , createdOn : " ", type: " "
            },{
                icon:"fa fa-shield" , heading:"BI & Analytics" , pk:1 , createdOn : " ", type: " "
            },{
                icon:"fa fa-shield" , heading:"Infrastructre Management" , pk:1 , createdOn : " ", type: " "
            },]

        }})