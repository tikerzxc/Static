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
                    src:'questionsmarks_00.jpg',
                    options: true
                },
                {
                    shortDesc : '<b>Vraag 1</b>',
                    fullDesc: '<br><br>Het &#39;diafragma&#39; is:<br><br>',
                    type: 'image',
                    src:'questionsmarks_00.jpg',
                    feedback: '<div class="inside_border_graphic BGRight BGWidth50" id="GraphicFrame"><div id="FBBackdrop" class="feedback50" style="visibility: inherit;"><div id="FBField" class="field_text_feedback fbfield"><br>B is het juiste antwoord.<br><br><p>Het diafragma is de lensopening in het objectief en bepaalt samen met de sluitertijd hoeveel licht er op de sensor van je camera komt.</p></div></div></div>',
                    options: [
                        {
                            titleDesc: '<b>A:</b> De lichtgevoeligheid van de sensor in de camera.',
                            group: 1,
                            validAnswer: 1
                        },
                        {
                            titleDesc: '<b>B:</b> Een opening in de lichtbaan van een lens.',
                            group: 1,
                            validAnswer: 1
                        },
                        {
                            titleDesc: '<b>C:</b> De duur van de belichting.',
                            group: 1,
                            validAnswer: 1
                        }
                    ]
                },
                {
                    shortDesc : '<b>Vraag 2</b>',
                    fullDesc: '<br><br>Met het begrip &#39;stop&#39; kun je een wijziging aangeven van:<br><br>',
                    type: 'image',
                    src:'questionsmarks_00.jpg',
                    feedback: '<div class="inside_border_graphic BGRight BGWidth50" id="GraphicFrame"><div id="FBBackdrop" class="feedback50" style="visibility: inherit;"><div id="FBField" class="field_text_feedback fbfield"><br>C is het juiste antwoord.<br><br><p>Met het begrip stop kun je een wijziging in diafragma, sluitertijd en ISO-waarde uitdrukken en hiermee een wijziging aangeven van de hoeveelheid licht die op de sensor valt.</p><br></div></div></div>',
                    options: [
                        {
                            titleDesc: '<b>A:</b> ISO.',
                            group: 2,
                            validAnswer: 2
                        },
                        {
                            titleDesc: '<b>B:</b> Diafragma en sluitertijd.',
                            group: 2,
                            validAnswer: 2
                        },
                        {
                            titleDesc: '<b>C:</b> Diafragma, sluitertijd en ISO.',
                            group: 2,
                            validAnswer: 2
                        }
                    ]
                },
                {
                    shortDesc : '<b>Vraag 3</b>',
                    fullDesc: '<br><br>Met welke basisfuncties van een camera kun je ook een direct visueel effect creëren?<br><br>',
                    type: 'image',
                    src:'questionsmarks_00.jpg',
                    feedback: '<div class="inside_border_graphic BGRight BGWidth50" id="GraphicFrame"><div id="FBBackdrop" class="feedback50" style="visibility: inherit;"><div id="FBField" class="field_text_feedback fbfield"><br>C is het juiste antwoord.<br><br><p>Met het instellen van het diafragma en de sluitertijd kun je bepaalde onderwerpen de aandacht laten trekken in je foto en daarmee bepalen naar welk deel van de foto de aandacht van de kijker het eerst wordt getrokken.</p><br> </div></div></div>',
                    options: [
                        {
                            titleDesc: '<b>A:</b> Diafragma, sluitertijd en stop.',
                            group: 3,
                            validAnswer: 1
                        },
                        {
                            titleDesc: '<b>B:</b> Diafragma en ISO.',
                            group: 3,
                            validAnswer: 1
                        },
                        {
                            titleDesc: '<b>C:</b> Diafragma en sluitertijd.',
                            group: 3,
                            validAnswer: 1
                        }
                    ]
                },
                {
                    shortDesc : '<b>Vraag 4</b>',
                    fullDesc: '<br><br>Met welke basisfuncties van een camera kun je ook een direct visueel effect creëren?<br><br>',
                    type: 'image',
                    src:'questionsmarks_00.jpg',
                    feedback: '<div class="inside_border_graphic BGRight BGWidth50" id="GraphicFrame"><div id="FBBackdrop" class="feedback50" style="visibility: inherit;"><div id="FBField" class="field_text_feedback fbfield"><br>C  is het juiste antwoord.<br><br><p>Met M moet je zelf de waarden voor diafragma, sluitertijd en ISO instellen en heb je dus zelf de meeste controle over de belichting.</p><br> </div></div></div>',
                    options: [
                        {
                            titleDesc: '<b>A:</b>  P en M.',
                            group: 4,
                            validAnswer: 1
                        },
                        {
                            titleDesc: '<b>B:</b> Av en Tv',
                            group: 4,
                            validAnswer: 1
                        },
                        {
                            titleDesc: '<b>C:</b> M.',
                            group: 4,
                            validAnswer: 1
                        }
                    ]
                },
                {
                    shortDesc : '<b>Vraag 5</b>',
                    fullDesc: '<br><br>Welke functies op je camera stel je in voor het scherp in beeld brengen van bewegende onderwerpen?<br><br>',
                    type: 'image',
                    src:'questionsmarks_00.jpg',
                    feedback: '<div class="inside_border_graphic BGRight BGWidth50" id="GraphicFrame"><div id="FBBackdrop" class="feedback50" style="visibility: inherit;"> <div id="FBField" class="field_text_feedback fbfield"><br><p>B is het juiste antwoord.<br><br>Snelheid en tijd zijn van belang bij bewegende onderwerpen dus moet je de sluitertijd <br>instellen. Wil je het bewegende onderwerp ook scherp in beeld krijgen, dan moet je de<br>autofocus instellen.</p><br></div></div></div>',
                    options: [
                        {
                            titleDesc: '<b>A:</b>  Autofocus en diafragma.',
                            group: 5,
                            validAnswer: 1
                        },
                        {
                            titleDesc: '<b>B:</b>  Sluitertijd en autofocus.',
                            group: 5,
                            validAnswer: 1
                        },
                        {
                            titleDesc: '<b>C:</b>  Pannen en autofocus.',
                            group: 5,
                            validAnswer: 1
                        }
                    ]
                },
                {
                    shortDesc : '<b class="test-results-heading">Klaar!</b>',
                    fullDesc: 'Dit is het einde van de pretest.<br>Score per onderwerp:<br><table border="0" cellspacing="0" cellpadding="0" class="field_text_standard" style="position:static"><tbody><tr><td><a class="action-btn show-results">Alle vragen:&nbsp;</a></td><td class="test-results"></td></tr><tr><td>&nbsp;</td></tr><tr><td>Totaalscore:&nbsp;</td><td class="total-score"></td></tr></tbody></table><br><br>Je hebt 1 van de 5 vragen goed beantwoord.<br>Raadpleeg de <a id="feedback" class="action-btn show-results">feedback</a> om je antwoorden te controleren.<br><br>Valt de score je tegen?<br>Doorloop de onderwerpen dan nog een keer.<br><br>Veel succes en plezier met het fotograferen!',
                    type: 'image',
                    src:'exclamationmark.jpg'
                }
            ]
        ];

        $scope.viewedSlides = [];
    }

    angular.module('starter').controller('TestCtrl', TestCtrl);
})();

