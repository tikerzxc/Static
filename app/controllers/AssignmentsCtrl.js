'use strict';

(function () {

    AssignmentsCtrl.inject = ['$scope'];

    function AssignmentsCtrl($scope) {
        $scope.pageId = 'Opdrachten';

        $scope.dataItems = [
            [
                {
                    shortDesc : '<b>Inleiding</b>',
                    fullDesc: '<br>In dit onderdeel ga je zelf aan de slag. Je gaat 4 opdrachten uitvoeren. Ze hebben betrekking op wat je in deze module hebt kunnen zien en lezen.<br>Bij elke opdracht krijg je een<br>Bij elke opdracht krijg je een paaraanwijzingen.<br><br>Als je klaar bent met de 4 opdrachten maak je een selectie van de beste foto bij elke opdracht. Sla deze op als jpg en geef deze een duidelijke naam:<br><br><ul><li>Voor de foto bij opdracht 1: M1_O1_[jouw afkorting].jpg<br></li></ul><ul><li>Voor de foto bij opdracht 2: M1_O2_[jouw afkorting].jpg <br></li></ul><ul><li>Etc.<br></li></ul><br><span class="accent">Nog een tip voor alle opdrachten:</span><br><br>Probeer bij alle fotos zo dicht mogelijk op je onderwerp te staan.<br><br>Succes!',
                    type: 'image',
                    src:'opdracht.jpg'
                }
            ],
            [
                {
                    shortDesc: '<b>Opdracht 1: Maak een portret van een geliefde. </b><br><b>Thema:</b> scherptediepte',
                    fullDesc: '<br><br>Zorg er voor dat je weinig scherptediepte in de foto hebt. De achtergrond wordt vaag weergegeven. Dat doe je door een klein diafragmagetal te kiezen, bijvoorbeeld <i>f2.8</i>. Als je binnen fotografeert kies dan eerst iso 800. Maak je de foto buiten dan kun je iso 200 of misschien iso 100 gebruiken. Kies voor diafragmavoorkeur-functie  ( <b>A</b> of <b>Av</b> ), zodat je zelf het diafragmagetal bepaalt. De camera zorgt dan voor de goede sluitertijd.',
                    type: 'image',
                    src: 'geliefde.jpg'
                }
            ],
            [
                {
                    shortDesc: '<b>Opdracht 2: Fotografeer een landschap.</b><br><b>Thema:</b> scherptediepte',
                    fullDesc: '<br>Zorg er nu voor dat de foto scherp is van voor- tot achtergrond, veel scherptediepte dus. Je hebt daar een hoog diafragmagetal voor nodig, bijvoorbeeld f16 of hoger. Ook nu maak je gebruik van <b>A </b>of <b>Av</b>  functie. Als de camera een vrij lange sluitertijd aangeeft, bijvoorbeeld langer dan 1/60 seconde dan kun je de iso-waarde verhogen. Je kunt dan weer met een wat kortere sluitertijd werken.',
                    type: 'image',
                    src: 'landschap.jpg'
                }
            ],
            [
                {
                    shortDesc: '<b>Opdracht 3: Fotografeer stromend water</b><br><b>Thema:</b> sluitertijd',
                    fullDesc: '<br>Doe dat zodanig dat het stromende water vervaagd wordt weergegeven. Je hebt een lange sluitertijd nodig, misschien wel van 1 of meer seconden. Om cameraonscherpte te voorkomen moet je de camera heel stil houden of ergens opzetten. Mooier is als je een statief kunt gebruiken.<br><br>Je stelt de camera in op <b>S</b> of <b>Tv , </b>de sluitertijden-voorkeurfunctie.<b> </b>Je kiest een lange sluitertijd. De camera zal zelf voor het juiste diafragmagetal zorgen. Misschien moet je de iso-waarde nog wat verlagen. De sensor is dan minder gevoelig, zodat je bij zon lange sluitertijd toch goed uit de voeten kunt met f22. Je kunt natuurlijk ook wachten tot de schemering of binnenshuis fotograferen, dan heb je sowieso minder licht.',
                    type: 'image',
                    src: 'water.jpg'
                }
            ],
            [
                {
                    shortDesc: '<b>Opdracht 4: Fotografeer een sporter</b><br><b>Thema:</b> sluitertijd',
                    fullDesc: '<br><br>Fotografeer een sporter. Dat kan heel goed een hardloper of wielrenner zijn. Doe het zo dat de sporter haarscherp op de foto staat. Zijn beweging wordt door de snelle sluitertijd van de camera bevroren.<br><br>Stel de camera in op <b>S</b> of <b>Tv </b> en kies een heel korte sluitertijd. De camera stelt zelf het juiste diafragma in. Bijvoorbeeld 1/500 of 1/1000. Omdat de sluitertijd heel kort is kan het zijn dat er toch te weinig licht door de lens komt. Je kunt dan de iso-waarde dan verhogen of zorgen dat je de foto in de volle zon kunt maken.',
                    type: 'image',
                    src: 'sporter.jpg'
                }
            ]
        ];

        $scope.viewedSlides = [];
    }

    angular.module('starter').controller('AssignmentsCtrl', AssignmentsCtrl);
})();

