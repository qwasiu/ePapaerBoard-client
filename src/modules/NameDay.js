
const names = [
	[
		"Mieszka, Mieczysława, Marii",
		"Izydora, Bazylego, Grzegorza",
		"Arlety, Genowefy, Danuty",
		"Tytusa, Anieli, Eugeniusza",
		"Hanny, Szymona, Edwarda",
		"Kacpra, Melchiora, Baltazara",
		"Juliana, Lucjana, Rajmunda",
		"Seweryna, Mścisława, Juliusza",
		"Marceliny, Marianny, Juliana",
		"Wilhelma, Dobrosława, Danuty",
		"Honoraty, Teodozjusza, Matyldy",
		"Grety, Arkadiusza, Rajmunda",
		"Bogumiły, Weroniki, Hilarego",
		"Feliksa, Domosława, Niny",
		"Pawła, Arnolda, Izydora",
		"Marcelego, Włodzimierza, Waldemara",
		"Antoniego, Rościsława, Jana",
		"Piotra, Małgorzaty",
		"Henryka, Mariusza, Marty",
		"Fabiana, Sebastiana",
		"Agnieszki, Jarosława",
		"Anastazego, Wincentego",
		"Ildefonsa, Rajmunda",
		"Felicji, Franciszka, Rafała",
		"Pawła, Miłosza, Elwiry",
		"Tymoteusza, Michała, Tytusa",
		"Przybysława, Anieli, Jerzego",
		"Walerego, Radomira, Tomasza",
		"Zdzisława, Franciszka, Józefa",
		"Macieja, Martyny, Teofila",
		"Marceli, Ludwiki, Jana"
	],

	[
		"Brygidy, Ignacego, Seweryna",
		"Marii, Miłosława",
		"Błażeja, Oskara",
		"Andrzeja, Weroniki, Joanny",
		"Agaty, Adelajdy",
		"Doroty, Bogdana, Pawła",
		"Ryszarda, Teodora, Romana",
		"Hieronima, Sebastiana, Ireny",
		"Apolonii, Eryki, Cyryla",
		"Elwiry, Jacka, Scholastyki",
		"Lucjana, Olgierda",
		"Eulalii, Radosława, Modesta",
		"Grzegorza, Katarzyny",
		"Cyryla, Metodego, Walentego",
		"Jowity, Faustyna, Zygfryda",
		"Danuty, Julianny, Daniela",
		"Aleksego, Zbigniewa, Lukasza",
		"Szymona, Konstancji, Flawiana",
		"Arnolda, Konrada, Marcelego",
		"Leona, Ludomira, Zenobiusza",
		"Eleonory, Fortunata, Roberta",
		"Marty, Małgorzaty, Piotra",
		"Romany, Damiana, Polikarpa",
		"Macieja, Bogusza, Sergiusza",
		"Wiktora, Cezarego",
		"Mirosława, Aleksandra",
		"Gabriela, Anastazji",
		"Romana, Ludomira, Lecha",
		"Lecha, Lutosława"
	],

	[
		"Antoniny, Radosława, Dawida",
		"Heleny, Halszki, Pawła",
		"Maryny, Kunegundy, Tycjana",
		"Lucji, Kazimierza, Eugeniusza",
		"Adriana, Fryderyka, Teofila",
		"Róży, Jordana, Agnieszki",
		"Tomasza, Perpetuy, Felicyty",
		"Beaty, Wincentego, Jana",
		"Franciszki, Brunona",
		"Cypriana, Marcela, Aleksandra",
		"Ludosława, Konstantyna, Benedykta",
		"Grzegorza, Justyna, Alojzego",
		"Bożeny, Krystyny",
		"Leona, Matyldy, Łazarza",
		"Longina, Klemensa, Ludwiki",
		"Izabeli, Oktawii, Hilarego",
		"Patryka, Zbigniewa, Gertrudy",
		"Cyryla, Edwarda, Boguchwały",
		"Józefa, Bogdana",
		"Klaudii, Eufemii, Maurycego",
		"Lubomira, Benedykta",
		"Katarzyny, Bogusława",
		"Pelagii, Oktawiana, Feliksa",
		"Marka, Gabriela, Katarzyny",
		"Marioli, Wieczysława, Ireneusza",
		"Larysy, Emanyela, Teodora",
		"Lidii, Ernesta",
		"Anieli, Sykstusa, Jana",
		"Wiktoryna, Helmuta, Eustachego",
		"Anieli, Kwiryna, Leonarda",
		"Beniamina, Dobromierza, Leonarda"
	],

	[
		"Teodory, Grażyny, Ireny",
		"Władysława, Franciszka, Teodozji",
		"Ryszarda, Pankracego, Ingi",
		"Izydora, Wacława",
		"Ireny, Wincentego",
		"Izoldy, Celestyna, Wilhelma",
		"Rufina, Celestyna, Jana",
		"Cezaryny, Dionizego, Julii",
		"Marii, Dymitra, Heliodora",
		"Michała, Makarego",
		"Filipa, Leona",
		"Juliusza, Lubosława, Zenona",
		"Przemysława, Hermenegildy, Marcina",
		"Bereniki, Waleriana, Justyny",
		"Ludwiny, Wacławy, Anastazji",
		"Kseni, Cecylii, Bernardety",
		"Rudolfa, Roberta",
		"Bogusławy, Apoloniusza",
		"Adolfa, Tymona, Leona",
		"Czesława, Agnieszki, Mariana",
		"Anzelma, Bartosza, Feliksa",
		"Kai, Leonii, Sotera",
		"Jerzego, Wojciecha",
		"Horacego, Feliksa, Grzegorza",
		"Marka, Jarosława, Wasyla",
		"Marzeny, Klaudiusza, Marii",
		"Zyty, Teofila, Felicji",
		"Piotra, Walerii, Witalisa",
		"Rity, Katarzyny, Bogusława",
		"Mariana, Donaty, Tamary"
	],

	[
		"Józefa, Jeremiasza, Filipa",
		"Zygmunta, Atanazego, Anatola",
		"Marii, Antoniny",
		"Moniki, Floriana, Władysława",
		"Ireny, Waldemara",
		"Judyty, Jakuba, Filipa",
		"Gizeli, Ludmiły, Benedykta",
		"Stanisława, Lizy, Wiktora",
		"Bożydara, Grzegorza, Karoliny",
		"Izydora, Antoniny, Symeona",
		"Igi, Miry, Władysławy",
		"Pankracego, Dominika, Achillesa",
		"Serwacego, Roberta, Glorii",
		"Bonifacego, Dobiesława, Macieja",
		"Zofii, Nadziei, Izydora",
		"Andrzeja, Jedrzeja, Szymona",
		"Paschalisa, Sławomira, Weroniki",
		"Eryka, Feliksa, Jana",
		"Iwa, Piotra, Celestyna",
		"Bazylego, Bernardyna, Aleksandra",
		"Wiktora, Kryspina, Tymoteusza",
		"Heleny, Wiesławy, Ryty",
		"Iwony, Dezyderego, Kryspina",
		"Joanny, Zuzanny",
		"Grzegorza, Urbana, Magdaleny",
		"Filipa, Pauliny",
		"Augustyna, Juliana, Magdaleny",
		"Jaromira, Justa, Justyny",
		"Magdaleny, Bogumiły, Urszuli",
		"Ferdynanda, Karola, Jana",
		"Anieli, Petroneli"
	],

	[
		"Justyna, Anieli, Konrada",
		"Marianny, Marcelina, Piotra",
		"Leszka, Tamary, Karola",
		"Kwiryny, Franciszka",
		"Waltera, Bonifacego, Walerii",
		"Norberta, Laurentego, Bogumiła",
		"Roberta, Wiesława",
		"Medarda, Maksyma, Seweryna",
		"Pelagii, Dominika, Efrema",
		"Bogumiła, Małgorzaty, Diany",
		"Barnaby, Radomiła, Feliksa",
		"Janiny, Onufrego, Leona",
		"Lucjana, Antoniego",
		"Bazylego, Elwiry, Michała",
		"Wita, Jolanty",
		"Aliny, Benona, Anety",
		"Laury, Marcjana, Alberta",
		"Marka, Elżbiety",
		"Gerwazego, Protazego",
		"Diny, Bogny, Florentyny",
		"Alicji, Alojzego",
		"Pauliny, Tomasza, Jana",
		"Wandy, Zenona",
		"Jana, Danuty",
		"Lucji, Wilhelma, Doroty",
		"Jana, Pawła",
		"Maryli, Władysława, Cyryla",
		"Leona, Ireneusza",
		"Piotra, Pawła",
		"Emilii, Lucyny"
	],

	[
		"Haliny, Mariana, Marcina",
		"Jagody, Urbana, Marii",
		"Jacka, Anatola, Tomasza",
		"Odona, Malwiny, Elżbiety",
		"Marii, Antoniego",
		"Gotarda, Dominiki, Lucji",
		"Cyryla, Estery, Metodego",
		"Edgara, Elżbiety, Eugeniusza",
		"Lukrecji, Weroniki, Zenona",
		"Sylwany, Witalisa, Antoniego",
		"Olgi, Kaliny, Benedykta",
		"Jana, Brunona, Bonifacego",
		"Henryka, Kingi, Andrzeja",
		"Ulryka, Bonawentury, Kamila",
		"Henryka, Włodzimierza, Dawida",
		"Mariki, Benity, Eustachego",
		"Anety, Bogdana, Jadwigi",
		"Erwina, Kamila, Szymona",
		"Wincentego, Wodzisława, Marcina",
		"Czesława, Hieronima, Małgorzaty",
		"Daniela, Dalidy, Wawrzyńca",
		"Marii, Magdaleny",
		"Stwosza, Bogny, Brygidy",
		"Kingi, Krystyny",
		"Walentyny, Krzysztofa, Jakuba",
		"Anny, Mirosławy, Grażyny",
		"Lilii, Julii, Natalii",
		"Aidy, Marceli, Wiktora",
		"Olafa, Marty, Ludmiły",
		"Julity, Piotra, Aldony",
		"Ignacego, Lubomira, Heleny"
	],

	[
		"Nadii, Justyna, Juliana",
		"Kariny, Gustawa, Euzebiusza",
		"Lidii, Augusta, Nikodema",
		"Dominika, Protazego, Jana",
		"Oswalda, Marii, Mariana",
		"Sławy, Jakuba, Oktawiana",
		"Kajetana, Doroty, Sykstusa",
		"Cypriana, Emiliana, Dominika",
		"Romana, Ryszarda, Edyty",
		"Borysa, Filomeny, Wawrzyńca",
		"Klary, Zuzanny, Lecha",
		"Innocentego, Lecha, Euzebii",
		"Diany, Hipolita, Poncjana",
		"Alfreda, Euzebiusza, Maksymiliana",
		"Napoleona, Stelii",
		"Rocha, Stefana, Joachima",
		"Żanny, Mirona, Jacka",
		"Ilony, Bronisława, Heleny",
		"Bolesława, Juliana",
		"Bernarda, Samuela, Sobiesława",
		"Joanny, Kazimiery, Piusa",
		"Cezarego, Tymoteusza",
		"Apolinarego, Filipa",
		"Jerzego, Bartosza, Haliny",
		"Luizy, Ludwika, Józefa",
		"Marii, Aleksandra",
		"Cezarego, Józefa, Moniki",
		"Patrycji, Wyszomira, Augustyna",
		"Beaty, Jana, Sabiny, Racibora",
		"Róży, Szczęsnego, Feliksa",
		"Bogdana, Ramony, Rajmunda"
	],

	[
		"Idziego, Bronisława",
		"Juliana, Stefana, Wilhelma",
		"Grzegorza, Izabeli, Szymona",
		"Idy, Julianny, Rozalii, Róży",
		"Doroty, Teodora, Wawrzyńca",
		"Beaty, Eugeniusza",
		"Domosławy, Melchiora, Reginy",
		"Marii, Adrianny, Serafiny",
		"Ścibora, Sergiusza, Piotra",
		"Lukasza, Aldony, Mścisława",
		"Jacka, Prota, Dagny, Hiacynta",
		"Gwidona, Radzimira, Marii",
		"Eugenii, Aureliusza, Jana",
		"Roksany, Bernarda, Cypriana",
		"Albina, Nikodema, Marii",
		"Edyty, Korneliusza, Cypriana",
		"Franciszka, Roberta, Justyna",
		"Irmy, Stanisława, Ireny",
		"Januarego, Konstancji, Teodora",
		"Filipiny, Eustachego, Euzebii",
		"Jonasza, Mateusza, Hipolita",
		"Tomasza, Maurycego, Joachima",
		"Tekli, Bogusława, Linusa",
		"Gerarda, Ruperta, Tomiry",
		"Aurelii, Władysława, Kleofasa",
		"Wawrzyńca, Kosmy, Damiana",
		"Wincentego, Mirabeli, Justyny",
		"Wacława, Tymona, Marka",
		"Michała, Gabriela, Rafała",
		"Wery, Honoriusza, Hieronima"
	],

	[
		"Danuty, Remigiusza, Teresy",
		"Teofila, Dionizego, Sławomira",
		"Teresy, Heliodora, Jana",
		"Rozalii, Edwina, Franciszka",
		"Placyda, Apolinarego",
		"Artura, Brunona",
		"Marii, Marka, Mirelli",
		"Pelagii, Brygidy, Walerii",
		"Amolda, Dionizego, Wincentego",
		"Pauliny, Danieli, Leona",
		"Aldony, Aleksandra, Dobromiry",
		"Eustachego, Maksymiliana, Edwina",
		"Geralda, Edwarda, Honorata",
		"Liwii, Kaliksta, Bernarda",
		"Jadwigi, Teresy, Florentyny",
		"Gawła, Ambrożego",
		"Wiktora, Marity, Ignacego",
		"Juliana, Łukasza",
		"Ziemowita, Jana, Pawła",
		"Ireny, Kleopatry, Jana",
		"Urszuli, Hilarego, Jakuba",
		"Halki, Filipa, Salomei",
		"Marleny, Seweryna, Igi",
		"Rafała, Marcina, Antoniego",
		"Darii, Wilhelminy, Bonifacego",
		"Lucjana, Ewarysta, Damiana",
		"Iwony, Sabiny",
		"Szymona, Tadeusza",
		"Euzebii, Wioletty, Felicjana",
		"Zenobii, Przemysława, Edmunda",
		"Urbana, Saturnina, Krzysztofa"
	],

	[
		"WSZYSTKICH ŚWIĘTYCH",
		"Bohdany, Bożydara",
		"Sylwii, Marcina, Huberta",
		"Karola, Olgierda",
		"Elżbiety, Sławomira, Dominika",
		"Feliksa, Leonarda, Ziemowita",
		"Antoniego, Żytomira, Ernesta",
		"Seweryna, Bogdana, Klaudiusza",
		"Aleksandra, Ludwika, Teodora",
		"Leny, Ludomira, Leona",
		"Marcina, Batłomieja, Teodora",
		"Renaty, Witolda, Jozafata",
		"Mateusza, Izaaka, Stanisława",
		"Rogera, Serafina, Wawrzyńca",
		"Alberta, Leopolda",
		"Gertrudy, Edmunda, Marii",
		"Salomei, Grzegorza, Elżbiety",
		"Romana, Klaudyny, Karoliny",
		"Seweryny, Maksyma, Salomei",
		"Anatola, Sedzimira, Rafała",
		"Alberta, Janusza, Konrada",
		"Cecylii, Wszemiły, Stefana",
		"Adelii, Klemensa, Felicyty",
		"Flory, Emmy, Chryzogona",
		"Erazma, Katarzyny",
		"Delfiny, Sylwestra, Konrada",
		"Waleriana, Wirgiliusza, Maksyma",
		"Lesława, Zdzisława, Stefana",
		"Błażeja, Saturnina",
		"Andrzeja, Maury, Konstantego"
	],

	[
		"Natalii, Eligiusza, Edmunda",
		"Balbiny, Bibianny, Pauliny",
		"Franciszka, Ksawerego, Kasjana",
		"Barbary, Krystiana, Jana",
		"Sabiny, Krystyny, Edyty",
		"Mikołaja, Jaremy, Emiliana",
		"Marcina, Ambrożego, Teodora",
		"Marii, Światozara, Makarego",
		"Wiesława Leokadii Joanny",
		"Julii, Danieli, Bogdana",
		"Damazego, Waldemara, Daniela",
		"Dagmary, Aleksandra, Ady",
		"Lucji, Otylii",
		"Alfreda, Izydora, Jana",
		"Niny, Celiny, Waleriana",
		"Albiny, Zdzisławy, Alicji",
		"Olimpii, Lazarza, Floriana",
		"Gracjana, Bogusława, Laurencji",
		"Gabrieli, Dariusza, Eleonory",
		"Bogumiły, Dominika",
		"Tomisława, Seweryna, Piotra",
		"Zenona, Honoraty, Franciszki",
		"Wiktorii, Sławomiry, Jana",
		"Adama, Ewy, Eweliny",
		"Anastazji, Eugenii",
		"Dionizego, Szczepana",
		"Jana, Żanety, Maksyma",
		"Teofilii, Godzisława, Cezarego",
		"Dawida, Tomasza, Dominika",
		"Rainera, Eugeniusza, Irmy",
		"Sylwestra, Melanii, Mariusza"
	]
	];

function getNameDay(date,Sep, lastSep, method) {
	switch (arguments.length) {
		case 0: Sep=null;
		break;
		case 1: lastSep=null;
		break;
		case 2: method=0;
		break;
		default: ;
	}
	if (Sep==null) Sep=", "; if (lastSep==null) lastSep=Sep;

	;
	var tab=names[date.getMonth()][date.getDate()-1].split(", ");



	var str=tab[0];
	for (var i=1; i<tab.length-1; i++) str+=Sep+tab[i];
	if (tab.length!==1) str+=lastSep+tab[tab.length-1];

	return str;
}



export default getNameDay
