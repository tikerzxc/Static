'use strict';

(function () {

    LinksCtrl.inject = ['$scope'];

    function LinksCtrl($scope) {
        $scope.pageId = 'Links';

        $scope.dataItems = {
            shortDesc: 'Toelichting',
            fullDesc: 'In deze bibliotheek vind je relevante links naar sites, artikelen en boeken over fotografie.<br><br>Blader door de lijsten met behulp van de scroll-balk<br><br>',
            items: [
                {
                    title: 'Informatieve websites',
                    shortDesc: 'Informatieve websites',
                    items: [
                        {
                            title: 'Canon Nederland', path: 'http://www.canon.nl/'
                        },
                        {
                            title: 'De Nederlandse Fotovakschool', path: 'http://fotovakschool.nl/home'
                        },
                        {
                            title: 'Craft & Vision', path: 'http://craftandvision.com/'
                        }
                    ]
                },
                {
                    title: 'Artikelen',
                    shortDesc: 'Artikelen',
                    infoShortDesc: '(in PDF formaat)',
                    items: [
                        {
                            title: 'Grundlagen der Digitalen Photographie', path: 'http://pvol.nl/canon_0300/content/doc/Aperture_Photography_Fundamentals.pdf'
                        }
                    ]
                },
                {
                    title: 'Boeken',
                    shortDesc: 'Artikelen',
                    infoShortDesc: '(in PDF formaat)',
                    items: [
                        {
                            title: 'Scott Kelbys digitale fotografie boek', path: 'http://www.bol.com/nl/p/scott-kelbys-digitale-fotografie-boek/9200000010833580/'
                        },
                        {
                            title: 'Over fotografie - Susan Sntag', path: 'http://www.bol.com/nl/p/over-fotografie/1001004004808010/'
                        }
                    ]
                }
            ]
        };

        $scope.viewedSlides = [];
    }

    angular.module('starter').controller('LinksCtrl', LinksCtrl);
})();
