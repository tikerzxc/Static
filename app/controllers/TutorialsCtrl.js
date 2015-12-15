'use strict';

(function () {

    TutorialsCtrl.inject = ['$scope', 'getData'];

    function TutorialsCtrl($scope, getData) {
        $scope.pageId = 'Home';

        //$scope.dataItems = [
        //    [
        //        {
        //            shortDesc : '<b>Tutorials</b>',
        //            fullDesc: '<br>Je hebt een nieuwe camera gekocht en staat te popelen om veel mooie fotos te gaan maken. Je kijkt naar je camera en ziet allerlei knoppen en menus. Waar moet je beginnen? En wat gebeurt er eigenlijk binnen in de camera en waarom?<br>Wanneer jij de ontspanknop indrukt, vangt de camera licht en legt dit vast op de beeldsensor. Je wilt uiteraard een kwalitatief goede foto, eentje die juist is belicht, dat wil zeggen, niet te licht (overbelicht) en niet te donker (onderbelicht).<br><br>We gaan je uitleggen hoe dit werkt en hoe jij kunt bepalen hoe jouw fotos er uiteindelijk uitzien. We beginnen daarom bij het begin: de belichting.<br><img class="inlineimage" src="../assets/img/elem/programma.jpg"><br><br><br><a class="text-link">Klik hier</a> om met meteen met de theorie te beginnen of klik op <b>Theorie</b>  in de balk hierboven en maak een keuze uit een van de onderwerpen.',
        //            type: null
        //        }
        //    ]
        //];

        $scope.viewedSlides = $scope.dataItems = [];

        // -- Get items
        getData.fetchItems('/api/chapters/tutorials/tutorials-short-desc/list.json').then(function(data) {
                              $scope.dataItems = getData.concatItems($scope.dataItems, data);
            console.log($scope.dataItems)
                              return $scope.dataItems;
                          })


    }

    angular.module('starter').controller('TutorialsCtrl', TutorialsCtrl);
})();

