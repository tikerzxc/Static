'use strict';

(function () {

    TestCtrl.inject = ['$scope'];

    function TestCtrl($scope) {
        $scope.pageId = 'Test';

        $scope.dataItems = [
            [
                {
                    shortDesc : '<b>Kennistoets</b>',
                    fullDesc: '<br><br>Deze toets biedt je de mogelijkheid om zicht te krijgen op je kennis van de basis beginselen van de camera instellingen. De toets bestaat uit 5 vragen. <br><br>Kies het antwoord dat volgens jou het dichtst in de buurt van de waarheid ligt. Na de laatste vraag zie jej je score. Ook kun je feedback op de gegeven antwoord opvragen.<br><br>Neem de feedback goed in je op en blader vervolgens door naar de volgende pagina door op het pijltje midden onder te klikken. <br><br>Dit onderdeel duurt ongeveer 2 minuten.<br>Klik op de bladerknop onderaan de pagina om met de toets te beginnen.<br><br><span class="accent"><b>Veel succes!</b></span>',
                    type: 'image',
                    src:'questionsmarks_00.jpg'
                },
                {
                    shortDesc : '<b>Vraag 1</b>',
                    fullDesc: '<br><br>Het &#39;diafragma&#39; is:<br><br>',
                    type: 'image',
                    src:'questionsmarks_00.jpg',
                    options: [
                        { titleDesc: '<b>A:</b> De lichtgevoeligheid van de sensor in de camera.', id: 'Answer1'},
                        { titleDesc: '<b>B:</b> Een opening in de lichtbaan van een lens.', id: 'Answer2'},
                        { titleDesc: '<b>C:</b> De duur van de belichting.', id: 'Answer3'}
                    ]
                },
                {
                    shortDesc : '<b>Vraag 2</b>',
                    fullDesc: '<br><br>Met het begrip &#39;stop&#39; kun je een wijziging aangeven van:<br><br>',
                    type: 'image',
                    src:'questionsmarks_00.jpg',
                    options: [
                        { titleDesc: '<b>A:</b> ISO.', id: 'Answer4'},
                        { titleDesc: '<b>B:</b> Diafragma en sluitertijd.', id: 'Answer5'},
                        { titleDesc: '<b>C:</b> Diafragma, sluitertijd en ISO.', id: 'Answer6'}
                    ]
                },
                {
                    shortDesc : '<b>Vraag 3</b>',
                    fullDesc: '<br><br>Met welke basisfuncties van een camera kun je ook een direct visueel effect creëren?<br><br>',
                    type: 'image',
                    src:'questionsmarks_00.jpg',
                    options: [
                        { titleDesc: '<b>A:</b> ISO.', id: 'Answer7'},
                        { titleDesc: '<b>B:</b> Diafragma en sluitertijd.', id: 'Answer8'},
                        { titleDesc: '<b>C:</b> Diafragma, sluitertijd en ISO.', id: 'Answer9'}
                    ]
                },
                {
                    shortDesc : '<b>Vraag 4</b>',
                    fullDesc: '<br><br>Met welke basisfuncties van een camera kun je ook een direct visueel effect creëren?<br><br>',
                    type: 'image',
                    src:'questionsmarks_00.jpg',
                    options: [
                        { titleDesc: '<b>A:</b> Diafragma, sluitertijd en stop.', id: 'Answer10'},
                        { titleDesc: '<b>B:</b> Av en Tv', id: 'Answer11'},
                        { titleDesc: '<b>C:</b> M.', id: 'Answer12'}
                    ]
                },
                {
                    shortDesc : '<b>Vraag 5</b>',
                    fullDesc: '<br><br>Welke functies op je camera stel je in voor het scherp in beeld brengen van bewegende onderwerpen?<br><br>',
                    type: 'image',
                    src:'questionsmarks_00.jpg',
                    options: [
                        { titleDesc: '<b>A:</b>  Autofocus en diafragma.', id: 'Answer13'},
                        { titleDesc: '<b>B:</b>  Sluitertijd en autofocus.', id: 'Answer14'},
                        { titleDesc: '<b>C:</b>  Pannen en autofocus.', id: 'Answer15'}
                    ]
                },
                {
                    shortDesc : '<b>Klaar!</b>',
                    fullDesc: 'Dit is het einde van de pretest.<br>Score per onderwerp:<br><table border="0" cellspacing="0" cellpadding="0" class="field_text_standard" style="position:static"><tbody><tr class="mouse_over" onclick="StartFeedback(1)"><td><a class="text-link-result">Alle vragen:&nbsp;</a></td><td>&nbsp;20%</td></tr><tr><td>&nbsp;</td></tr><tr><td>Totaalscore:&nbsp;</td><td>&nbsp;20%</td></tr></tbody></table><br><br>Je hebt 1 van de 5 vragen goed beantwoord.<br>Raadpleeg de <a id="feedback" class="text-link-result">feedback</a> om je antwoorden te controleren.<br><br>Valt de score je tegen?<br>Doorloop de onderwerpen dan nog een keer.<br><br>Veel succes en plezier met het fotograferen!',
                    type: 'image',
                    src:'exclamationmark.jpg'
                }
            ]
        ];

        $scope.viewedSlides = [];
    }

    angular.module('starter').controller('TestCtrl', TestCtrl);
})();

