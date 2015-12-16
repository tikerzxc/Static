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
        //        },
        //        {
        //            shortDesc: '<div class="short-desc"><br><br><br>Klik op de links hierboven of een<br>van de items in de  menubalk<br>om naar en ander onderdeel te gaan.</div>',
        //            items: [
        //                {
        //                    shortDesc: '<div class="text-standard">Week 1: diafragma, sluitertijd en ISO<br><br></div>',
        //                    linkItems: [
        //                        { text: 'Instructie', src:"http://videogular.com/assets/videos/videogular.mp4", id: 'id_1'},
        //                        { text: 'Toepassing', src:'/assets/videos/IV_02_0100.mp4', id: 'id_2'}
        //                    ]
        //                },
        //                {
        //                    shortDesc: '<div class="text-standard">Week 2: De juiste belichting<br><br></div>',
        //                    linkItems: [
        //                        { text: 'Instructie', src:'/assets/videos/IV_02_0100.mp4', id: 'id_3'},
        //                        { text: 'Toepassing', src:'/assets/videos/IV_03_0100.mp4', id: 'id_4'}
        //                    ]
        //                },
        //                {
        //                    shortDesc: '<div class="text-standard">Week 3: Beweging<br><br></div>',
        //                    linkItems: [
        //                        { text: 'Instructie', src:'/assets/videos/IV_01_0101.mp4', id: 'id_5'},
        //                        { text: 'Toepassing', src:'/assets/videos/IV_03_0100.mp4', id: 'id_6'}
        //                    ]
        //                }
        //            ],
        //            type: 'inner-slides'
        //        }
        //    ],
        //
        //];

        $scope.viewedSlides = $scope.dataItems = [];

        // -- Get items
        getData.fetchItems('/api/chapters/tutorials/tutorials-greeting/list.json').then(function(data) {
                               $scope.dataItems.push([data]);
                               return $scope.dataItems[0];
                           })
                           .then(function(dataArr) {
                               getData.fetchItems('/api/chapters/tutorials/tutorials-videos/list.json').then(function(data) {
                                   dataArr.push(data);
                               });

                                console.log('dataItems', $scope.dataItems);

                               return $scope.dataItems;
                           });





    }

    angular.module('starter').controller('TutorialsCtrl', TutorialsCtrl);
})();

