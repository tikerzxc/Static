'use strict';

(function () {
	
	TheoryCtrl.inject = ['$scope'];
	
	function TheoryCtrl($scope) {
        $scope.pageId = 'Theorie';

		$scope.dataItems = [
			[
				{
                    shortDesc : '<b>De belichting van de foto</b>',
                    fullDesc: '<br>De belichting van de beeldsensor wordt bepaald door de combinatie van:<br><ul><li>de hoeveelheid licht<br></li></ul><ul><li>de duur van de belichting<br></li></ul><ul><li>de gevoeligheid voor het licht<br></li></ul>Onthoud dat je daarom altijd begint met het instellen van 3 belangrijke basisfuncties:<br><ul><li>het diafragma <br></li></ul><ul><li>de sluitertijd <br></li></ul><ul><li>de ISO-waarde <br></li></ul>Voor een goed begrip van deze functies, moet je ook weten wat een <span class="accent">stop</span> is. We zullen ook dit begrip nader uitleggen.<br>',
                    type: 'image',
                    src:'sluitertijd.jpg'
                },
				{
                    shortDesc: '<b>Het diafragma</b>',
                    fullDesc: '<br>Het&nbsp;diafragma is een opening in de lichtbaan van een lens (<u><i>objectief</i></u>) die een bepaalde hoeveelheid licht doorlaat of tegenhoudt. Deze <i>lensopening</i> bestaat uit metalen plaatjes (<i>lamellen</i>) die samen een cirkel vormen.<br><br>De grootte van de opening wordt op je camera aangegeven met zogenaamde f-getallen. De grootte van de diafragmaopening kun je zelf wijzigen en is gestandaardiseerd. Het diafragma zit in de lens ingebouwd en niet in de camerabody. Daardoor kan het diafragmabereik (de laagste en de hoogste f-getallen) per lens verschillen. Diafragmagetallen in stops:<br>f/1 - f/1.4 - f/2 - f/2.8 - f/4 - f/5.6 - f/8 - f/11 - f/16 - f/22 - f/32 - f/45 - f/64<br><br>Wanneer je een bepaalde diafragmawaarde kiest, bepaal je dus de hoeveelheid licht die op de beeldsensor valt. Hoe groter dat getal, des te kleiner de lensopening en hoe minder licht de beeldsensor kan bereiken.<br><br><span class="accent">Onthoud:</span><br><ul><li>groot getal = kleine opening = weinig licht<br></li></ul><ul><li>laag getal = grote opening = veel licht.<br></li></ul><br>&lt; foto/tekening van lamellen&gt;<br>',
                    type: 'image',
                    src:'diafragma_16.jpg'
                },
                {
                    shortDesc : '<b>Visueel effect</b>',
                    fullDesc: '<br>Daarnaast kun je het diafragma ook gebruiken om een visueel effect aan je foto te geven, bijvoorbeeld voor het creëren van een onscherpe voor- en achtergrond. Dit effect wordt scherptediepte genoemd. Je bepaalt daarmee welk deel van je foto scherp wordt afgebeeld.<br><br><span class="accent">Onthoud:</span><br>Groot deel van foto scherp = grote scherptediepte = groot getal<br>< foto pier aan zee><br>Klein deel van foto scherp = kleine scherptediepte = klein getal<br>< foto hond><br><br>Kies bijvoorbeeld 11 of hoger als je alles scherp, dus een <i>grote scherptediepte</i>  wilt hebben. Kies 5.6 of lager als je een <i> kleine scherptediepte</i> wilt hebben.<br><br>Bovenop je camera zit een grote ronde knop. Dit is het programma-keuzewiel waarmee je het diafragma als voorkeurstand kunt instellen. Op Canon-camera\"s heet de aanduiding om de diafragmawaarde mee in te stellen <b>Av</b>  (=Aperture value). Wanneer je de camera hebt ingesteld op diafragmavoorkeur ( <b>Av</b> ), zal de camera automatisch een sluitertijd ( <b>Tv</b> <b>Tv</b> ) erbij kiezen.',
                    type:'image',
                    src: 'diafragma_16.jpg'
                },
                {
                    shortDesc : '<b>De Sluitertijd</b>',
                    fullDesc: '<br>Op het moment dat je een foto maakt gaat de sluiter open om licht op de beeldsensor te laten vallen. Na een korte tijd gaat de sluiter weer dicht. De tijd dat de sluiter open staat noemen we sluitertijd.<br>Je stelt de sluitertijd in om te bepalen hoe <i>lang</i>  het licht op de beeldsensor mag vallen, ofwel je stelt de <i>belichtingstijd </i> in.<br><br>Sluitertijden in stops van lang naar kort: <br><br>2" - 1" - 1/2 - 1/4 - 1/8 - 1/15 - 1/30 - 1/60 - 1/125 - 1/250 - 1/500 - 1/1000 - 1/2000 - 1/4000<br><br>Wat betekenen deze getallen?<br><ul><li>2" = 2 seconden<br></li></ul><ul><li>1/2 = halve seconde<br></li></ul><ul><li>1/250 (of 250) = een tweehonderdvijftigste deel van een seconde<br></li></ul><br>Op Canon-cameras gebruik je de aanduiding <b>Tv</b>  (=Time Value) om de sluitertijd mee in te stellen.',
                    type: 'image',
                    src:'molentjes.jpg'
                },
                {
                    shortDesc: '<b>Visueel effect</b>',
                    fullDesc: '<br>Ook met de sluitertijd kun je een visueel effect aan je fotos geven. Met een snelle sluitertijd bevries je een beeld, met een langere sluitertijd creëer je bewegingsonscherpte.<br>Als je een snel bewegend onderwerp heel scherp wilt fotograferen, stel dan je camera in op een heel korte sluitertijd. Door het snel openen en sluiten van de sluiter wordt het object als het ware bevroren.<br>< foto balletdanseres><br><br>Als je de beweging van een snel bewegend object juist wilt vervagen, kies dan voor een langere sluitertijd. Het gebruik van een statief hierbij zorgt ervoor dat alleen het bewegende object wordt vervaagd terwijl de rest scherp blijft.<br>< foto waterval><br><br><span class="accent">Let op.</span> Bewegingsonscherpte is iets anders dan trillingsonscherpte. Trillingsonscherpte ontstaat bij lange sluitertijden omdat je handen gaan trillen. Hoe lang je een camera kunt stil houden verschilt per persoon. Trillingsonscherpte wordt ook wel camera-onscherpte genoemd.',
                    type: 'image',
                    src:'molentjes.jpg'

                },
                {
                    shortDesc : '<b>De ISO-waarde</b>',
                    fullDesc: '<br><br>Naast diafragma en sluitertijd moet ook de ISO-waarde worden ingesteld voordat je begint met fotograferen. Op elke camera is hiervoor of een speciale knop of je kunt de ISO-waarde in het cameramenu instellen.<br><br>De ISO-waarde zegt iets over de lichtgevoeligheid van de beeldsensor. Is er veel licht, dan kun je met een lagere ISO-waarde (bijvoorbeeld 100 of 200) een goed belichte foto maken. Hoe donkerder, des te hoger de ISO-waarde die je nodig hebt.<br>ISO in stops van laag naar hoog:<br><br>100 / 200 / 400 / 800 / 1600 / 3200 / 6400 / 125000<br>',
                    type: 'image',
                    src:'menu.jpg'
                },
                {
                    shortDesc : '<b>ISO-waarde ophogen</b>',
                    fullDesc: '<br>De ISO-waarde ophogen is een ideale manier om bij minder licht toch een foto te kunnen maken. Het nadeel is dat je bij een hoger ISO-getal meer ruis krijgt. Bij een hoger ingestelde gevoeligheid zal er minder licht op de beeldsensor vallen en daardoor een kleiner signaal veroorzaken. Om toch een goed beeld te krijgen, moet dit signaal versterkt worden. De signaal/ruisverhouding wordt dan ongunstiger omdat de beeldsensor een vaste hoeveelheid storende ruis heeft die ook wordt versterkt. Deze ruisgevoeligheid bepaalt mede hoe lang je in slecht-lichtomstandigheden kunt blijven fotograferen en toch acceptabele resultaten kunt krijgen. Dit verschilt per camera.<br><br>Met de ISO-waarde kun je niet direct een speciaal visueel effect creëren, zoals dat wel het geval is met het diafragma en de sluitertijd. Echter, de ISO-waarde heeft wel veel invloed op welk diafragma of welke sluitertijd je kunt gebruiken.',
                    type: 'image',
                    src:'iso_3200.jpg'
                },
                {
                    shortDesc : '<b>Een stop</b>',
                    fullDesc: '<br>Een stop is de verdubbeling of halvering van de hoeveelheid licht die op de beeldsensor valt. Het is een begrip waarmee je een wijziging in diafragma, sluitertijd en ISO-waarde kunt uitdrukken.<br><br>In moderne cameras vind je vaak een schaal met kleinere stappen van een halve stop en soms zelfs van een 1/3 stop. Om een hele stop te springen gaat het diafragma of de sluitertijd dan 3 plekken naar links of rechts.',
                    type: 'image',
                    src:'iso_3200.jpg'
                }
			],
            [
                {
                    shortDesc : '<b>Voorkeurstanden</b>',
                    fullDesc : '<br>Nu je weet welke 3 basisfuncties voor een juiste belichting het belangrijkst zijn, is de volgende stap inzicht te krijgen in de programma-voorkeurstanden van je camera. Met elk van deze instellingen bepaal jij zelf hoeveel controle je over de belichting houdt. Deze voorkeurstanden vind je op de grote ronde knop bovenop je camera, het programmakeuzewiel.<br><br>Op deze knop staan een aantal (deels) voor-gedefinieerde instellingen van combinaties van diafragma en sluitertijd. Met het programma-keuzewiel selecteer je de instelling die het best past bij jouw onderwerp of het doel van de opname. De voorkeurstanden kunnen verschillen per merk maar wij behandelen de meest voorkomende standaardfuncties. Het grote voordeel van deze instellingen is, dat je op een vrij eenvoudige manier in de meeste omstandigheden goed belichte fotos kunt maken.<br><br>',
                    type: 'inner-images-desc',
                    src:'sluitertijd.jpg',
                    linkItems: [
                        {
                            title: '<a class="hottextLink"><b>P</b><span> = Programma</span></a>',
                            text: '<b>P (Programma)</b><br><br>Als je de <b>P</b>-stand kiest, hoef je zelf niet na te denken over je camera-instellingen. De camera meet het aanwezige licht en zoekt er eerst een voldoende snelle sluitertijd bij om een bewogen foto te voorkomen. Vervolgens kiest de camera daar een diafragma bij, dat samen met de sluitertijd een goed belichte foto oplevert. <br>Zowel in lichte als in meer donkere omstandigheden levert de P-stand eenvoudig en snel bijna altijd een goede belichting op. <br><span class="accent">Let op.</span><br>Je moet de ISO-waarde wel zelf instellen.<br><br>&lt; 2 fotos, eentje van een lichte en eentje van een meer donkere omgeving? &gt;<br>'
                        },
                        {
                            title: '<a class="hottextLink"><b>Av</b><span> = Aperture Value = diafragmawaarde</span></a>',
                            text: '<b>Tv (Time Value)</b><br><br>Als je <b>Tv</b> kiest, moet je zelf de sluitertijd instellen. De camera zoekt het juiste diafragma erbij. Deze combinatie levert in de meeste gevallen een goed belichte foto op die past bij de helderheid van het gefotografeerde object. Je gebruikt <b>Tv</b> als je volledige controle over de sluitertijd wilt hebben. <br><br>Je kiest voor een korte sluitertijd om een actie of bewegend onderwerp te bevriezen, ofwel scherp op je foto te krijgen. &lt; foto van auto?&gt; Je kiest voor een lange sluitertijd om het tegenovergestelde, bewegingsonscherpte, te creëren. Het gefotografeerde onderwerp maakt dan de indruk in beweging te zijn. &lt; foto van rijdende auto? &gt;<br><br><span class="accent">Let op.</span><br>Je moet de ISO-waarde wel zelf instellen.'
                        },
                        {
                            title: '<a class="hottextLink"><b>Tv</b><span> = Time Value = tijdwaarde</span></a>',
                            text: '<b>Av (Aperture Value)</b><br><br>Als je <b>Av</b> kiest, moet je zelf het diafragma instellen. De camera zoekt de juiste sluitertijd erbij. Deze combinatie levert in de meeste gevallen een goed belichte foto op. Je gebruikt <b>Av</b> als je volledige controle wilt hebben over de scherptediepte, ofwel de scherpte of onscherpte van je onderwerp ten opzichte van de voor- en achtergrond.<br><br><br><span class="accent">Let op.</span><br>Je moet de ISO-waarde wel zelf instellen.<br><br>&lt; foto van stuk boomschors? &gt;'
                        },
                        {
                            title: '<a class="hottextLink"><b>M </b><span>= Manueel</span></a>',
                            text: '<b>M (Manueel)</b><br><br>Als je zelf volledige controle over de belichting wilt hebben, kies je de M-stand. Je moet dan zelf de sluitertijd, het diafragma en de ISO-waarde instellen. Dit komt van pas in situaties met moeilijke lichtomstandigheden, bijvoorbeeld bij het fotograferen van een object met veel tegenlicht.<br><br>&lt; foto van boom met tegenlicht?&gt;'
                        }
                    ]
                }
            ],












			[
				{
                    shortDesc : '<b>Fotograferen van bewegende onderwerpen</b>',
                    fullDesc: '<br>Het kan voorkomen dat het onderwerp dat je wilt fotograferen in beweging is. Soms wil je die beweging vastleggen, maar soms ook niet.<br><br>Snelheid en scherpstellen zijn twee aspecten die hierbij van belang zijn en dus wil je controle hebben over de sluitertijd. Je zult de instelling van de autofocus, ofwel scherpstelfunctie, moeten aanpassen als je het bewegende onderwerp scherp op de foto wilt krijgen.<br>Dus, je begint met het instellen van de:<br><br><ul><li>Sluitertijd <br></li></ul><ul><li>Autofocus</li></ul>',
                    type: 'image',
                    src:'sluitertijd.jpg'
                },
                {
                    shortDesc: '<b>Sluitertijd</b>',
                    fullDesc: '<br>Voor het fotograferen van een bewegend onderwerp stel je het programma-keuzewiel in op <b>Tv</b>. In de <b>Tv</b>-stand kun je een bewegend onderwerp op 3 manieren fotograferen met elk een ander visueel effect. Je doet dat door te variëren met de sluitertijd en camerabeweging. Je kunt hiermee de volgende visuele effecten creëren:<br><br><ul><li>Beweging bevriezen <br></li></ul><ul><li>Beweging vervagen <br></li></ul><ul><li>Pannen<br></li></ul>In de volgende schermen gaan we nader in op deze effecten.',
                    type: null
                },
                {
                    shortDesc: '<b>Beweging bevriezen</b>',
                    fullDesc: '<br>Als je een bewegend onderwerp scherp wilt vastleggen, moet je een snelle sluitertijd gebruiken, bijvoorbeeld 1/500. Je bevriest dan als het ware de beweging. Echter, bij een snelle sluitertijd kan de foto iets donkerder worden. Immers, er valt maar weinig licht op de beeldsensor doordat de sluiter kort open staat. Dit kun je compenseren met een grotere diafragmaopening waardoor er meer ligt op de beeldsensor kan vallen. Je kiest dan een kleiner diafragmagetal.<br><br>Kun je geen diafragma gebruiken dat klein genoeg is (dit hangt af van de lichtgevoeligheid van je lens) dan kun je de ISO-waarde ophogen. De camerasensor wordt dan gevoeliger voor licht. Je kunt nu met een hoger diafragmagetal werken om toch een goed belichte foto te krijgen.<br><br>< foto skater in de lucht-scherp bij 2 verschillende diafragmas/ISO-waarden? ><br>',
                    type: 'image',
                    src: 'iso_3200.jpg'
                },
                {
                    shortDesc: '<b>Beweging bevriezen</b>',
                    fullDesc: '<br>Misschien wil je soms juist het visuele effect van beweging in je foto zien. Je kunt er dan voor kiezen de beweging van je onderwerp te vervagen, dit wordt bewegingsonscherpte genoemd. Je gebruikt hiervoor een langere sluitertijd. De sluiter staat langer open waardoor het bewegende onderwerp wordt vervaagd. Hiermee krijg je dus het effect van een onderwerp in beweging in je foto.<br><br><span class="accent">Let op.</span> Bij zeer lange sluitertijden kun je ook camera- (of trillings)onscherpte krijgen omdat je handen de camera niet lang genoeg stil kunnen houden. Dit kun je oplossen door een statief te gebruiken of een plek te zoeken waarop je je camera stabiel kunt neerzetten.<br><br>< foto skater in de lucht-onscherp >',
                    type: 'image',
                    src: 'iso_3200.jpg'
                },
                {
                    shortDesc: '<b>Pannen</b>',
                    fullDesc: '<br>Met de pan-techniek wordt<b> </b>het meebewegen van de camera ofwel het volgen van een bewegend onderwerp aangeduid. Je gebruikt een relatief lange sluitertijd en beweegt tegelijkertijd de camera met het onderwerp mee. Je krijgt hiermee het bewegende onderwerp scherp op de foto en bewegingsonscherpte in de achtergrond. <br>Hoe doe je dit precies? <br><ol start="1."><li>Je kiest een sluitertijd lager dan 1/125 seconde.<br></li></ol><ol start="2."><li>Je richt de camera op het bewegende onderwerp.<br></li></ol><ol start="3."><li>Je drukt de ontspanknop in en houdt het onderwerp in de&nbsp;zoeker<u> </u>gedurende de tijd dat de sluiter geopend is. De duur van de opname moet lang genoeg zijn om de achtergrond te vervagen als gevolg van de beweging van de camera. Zolang de sluiter open is, blijf je je onderwerp nauwkeurig volgen.<br></li></ol><br>&lt; foto skater in de lucht-scherp en achtergrond onscherp &gt',
                    type: null
                },
                {
                    shortDesc: '<b>Autofocus</b>',
                    fullDesc: '<br>Je kunt handmatig scherpstellen op je onderwerp, maar dat is bijna niet te doen bij bewegende onderwerpen. Op veel cameras zitten daarom verschillende autofocus (AF) programmas, ofwel scherpstelfuncties. De meest voorkomende functies zijn One-shot en Al Servo.<br><br>De optie \"one shot\" is geschikt voor niet-bewegende onderwerpen. Wanneer je de ontspanknop half indrukt, stelt de camera een keer scherp. Wil je daarna ergens anders op scherpstellen dan moet je de ontspanknop opnieuw half indrukken om scherp te stellen.<br><br>Daarnaast is er de AI Servo-optie. Deze optie is geschikt voor bewegende onderwerpen. Zolang je de ontspanknop half ingedrukt houdt, blijft de camera continu op het bewegende onderwerp scherpstellen.',
                    type: null
                },
                {
                    shortDesc: '<b>Einde module 1 t/m 3</b>',
                    fullDesc: '<br>Je bent aan het einde gekomen van de theorie over de basisfuncties.<br>Je wil vast weten hoe je deze functies in de praktijk toepast.<br><br>Klik op <span class="accent">Toets</span> in de menubalk om je kennis te testen of klik dan op <span class="accent">Opdrachten</span>  in de menu balk en ga aan de slag met een van de opdrachten.',
                    type: 'image',
                    src: 'b01_eind.jpg'
                }

			]
		];
		
		$scope.viewedSlides = [];
	}

	angular.module('starter').controller('TheoryCtrl', TheoryCtrl);
})();

