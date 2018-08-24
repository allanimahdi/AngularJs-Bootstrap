var app = angular.module('projet',['ngMaterial', 'jkAngularRatingStars','rzTable']);
app.controller('MainCtrl', function ($scope) {
    $scope.isEdit = false;
    $scope.table = buildTable();

    $scope.cancel = function () {
        $scope.table = buildTable();
        $scope.isEdit = false;
    };

    // Couleurs des Catégories

    $scope.colors = [
        {name:'pas de catégorie',value:'white', shade:'light', notAnOption: true},
        {name:'catégorie1',value:'red', shade:'dark'},
        {name:'catégorie2',value:'blue', shade:'dark'},
        {name:'catégorie3',value:'brown', shade:'dark', notAnOption: true},
        {name:'catégorie4',value:'yellow', shade:'light', notAnOption: false}
    ];

    // Suppression d'une Colonne


    $scope.removeCol = function($index) {
        if ($index > -1 && $scope.table.columns.length > 1) {
            $scope.table.columns.splice($index, 1);
            for (var i = 0, len = $scope.table.rows.length; i < len; i++) {
                $scope.table.rows[i].cells.splice($index, 1);
            }
        }
    };

    // Suppression d'une Ligne

    $scope.removeRow = function($index) {
        if ($index > -1 && $scope.table.rows.length > 1) {
            $scope.table.rows.splice($index, 1);
        }
    };

    // Ajout d'une Colonne

    $scope.addCol = function (){
        var len = $scope.table.columns.length,
            rowLen = $scope.table.rows.length;
        $scope.table.columns.push({ value: 'Col ' + len });
        for (var i = 0; i < rowLen; i++){
            $scope.table.rows[i].cells.push({ value: 'Tâche ' + i + ',' + len });
        }
    };

    // Ajout d'une Ligne de Tableau

    $scope.addRow = function (){
        var row = { cells: [] },
            rowLen = $scope.table.rows.length,
            colLen = $scope.table.columns.length;

        for (var i = 0; i < colLen; i ++) {
            row.cells.push({ value: 'Tâche ' + rowLen + ',' + i });

        }
        $scope.table.rows.push(row);
    };

    // priorité en Etoiles
    $scope.rating = function (){
        $scope.firstRate = 3;

    };

    // Contenu du tableau Par defaut

    function buildTable() {
        return {
            columns: [{
                value: 'mois'
            }, {
                value: 'trimestres'
            }, {
                value: 'année'
            },{
                value: '3 ans '
            },{
                value: '5 ans'
            }],
            rows: [ {
                cells: [{
                    value: 'Je vous propose '
                }, {
                    value: 'de rectrutter Mahdi '
                }, {
                    value: 'car cest un bon '
                }, {
                    value: 'developpeur qui '
                },{
                    value: 'maitrise AngularJs'
                }]
            }, {
                cells: [{
                    value: 'la cellule suivante'
                }, {
                    value: 'a été définie null'
                }, {
                    value: null
                }, {
                    value: 'car ne contient'
                }, {
                    value: 'pas de contenu'
                }]
            }]
        };
    }
});