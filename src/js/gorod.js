	var site_list = [{city:'Абакан', site:'abakan'},{city:'Альметьевск', site:'almetevsk'},{city:'Ангарск', site:'angarsk'},{city:'Армавир', site:'armavir'},{city:'Архангельск', site:'arhangelsk'},{city:'Астрахань', site:'astrahan'},{city:'Балаково', site:'balakovo'},{city:'Балашиха', site:'balashiha'},{city:'Барнаул', site:'barnaul'},{city:'Белгород', site:'belgorod'},{city:'Березники', site:'berezniki'},{city:'Бийск', site:'biysk'},{city:'Благовещенск', site:'blagoveschensk'},{city:'Братск', site:'bratsk'},{city:'Брянск', site:'bryansk'},{city:'Великий Новгород', site:'velikiy-novgorod'},{city:'Владивосток', site:'vladivostok'},{city:'Владикавказ', site:'vladikavkaz'},{city:'Владимир', site:'vladimir'},{city:'Волгоград', site:'volgograd'},{city:'Волгодонск', site:'volgodonsk'},{city:'Волжский', site:'volzhskiy'},{city:'Вологда', site:'vologda'},{city:'Воронеж', site:'voronezh'},{city:'Грозный', site:'groznyy'},{city:'Дзержинск', site:'dzerzhinsk'},{city:'Екатеринбург', site:'ekaterinburg'},{city:'Златоуст', site:'zlatoust'},{city:'Иваново', site:'ivanovo'},{city:'Ижевск', site:'izhevsk'},{city:'Йошкар-Ола', site:'yoshkar-ola'},{city:'Иркутск', site:'irkutsk'},{city:'Казань', site:'kazan'},{city:'Калининград', site:'kaliningrad'},{city:'Калуга', site:'kaluga'},{city:'Каменск-Уральский', site:'kamensk-uralskiy'},{city:'Кемерово', site:'kemerovo'},{city:'Керчь', site:'kerch'},{city:'Киров', site:'kirov'},{city:'Комсомольск-на-Амуре', site:'komsomolsk-na-amure'},{city:'Королев', site:'korolev'},{city:'Кострома', site:'kostroma'},{city:'Краснодар', site:'krasnodar'},{city:'Красноярск', site:'krasnoyarsk'},{city:'Курган', site:'kurgan'},{city:'Курск', site:'kursk'},{city:'Липецк', site:'lipetsk'},{city:'Люберцы', site:'lyubertsy'},{city:'Магнитогорск', site:'magnitogorsk'},{city:'Майкоп', site:'maykop'},{city:'Махачкала', site:'mahachkala'},{city:'Миасс', site:'miass'},{city:'Москва', site:'moskva'},{city:'Мурманск', site:'murmansk'},{city:'Мытищи', site:'mytischi'},{city:'Набережные Челны', site:'chelny'},{city:'Нальчик', site:'nalchik'},{city:'Находка', site:'nahodka'},{city:'Нижневартовск', site:'nizhnevartovsk'},{city:'Нижнекамск', site:'nizhnekamsk'},{city:'Нижний Новгород', site:'nizhniy-novgorod'},{city:'Новокузнецк', site:'novokuznetsk'},{city:'Новороссийск', site:'novorossiysk'},{city:'Новосибирск', site:'novosibirsk'},{city:'Новочеркасск', site:'novocherkassk'},{city:'Норильск', site:'norilsk'},{city:'Одинцово', site:'odincovo'},{city:'Омск', site:'omsk'},{city:'Орел', site:'orel'},{city:'Оренбург', site:'orenburg'},{city:'Орск', site:'orsk'},{city:'Пенза', site:'penza'},{city:'Пермь', site:'perm'},{city:'Петрозаводск', site:'petrozavodsk'},{city:'Петропавловск-Камчатский', site:'petropavlovsk-kamchatskiy'},{city:'Подольск', site:'podolsk'},{city:'Прокопьевск', site:'prokopevsk'},{city:'Псков', site:'pskov'},{city:'Пятигорск', site:'pyatigorsk'},{city:'Ростов-на-Дону', site:'rostov'},{city:'Рубцовск', site:'rubtsovsk'},{city:'Рыбинск', site:'rybinsk'},{city:'Рязань', site:'ryazan'},{city:'Салават', site:'salavat'},{city:'Самара', site:'samara'},{city:'Санкт-Петербург', site:'spb'},{city:'Саранск', site:'saransk'},{city:'Саратов', site:'saratov'},{city:'Южно-Сахалинск', site:'yuzhno-sahalinsk'},{city:'Севастополь', site:'sevastopol'},{city:'Северодвинск', site:'severodvinsk'},{city:'Симферополь', site:'simferopol'},{city:'Смоленск', site:'smolensk'},{city:'Сочи', site:'sochi'},{city:'Ставрополь', site:'stavropol'},{city:'Старый Оскол', site:'oskol'},{city:'Стерлитамак', site:'sterlitamak'},{city:'Сургут', site:'surgut'},{city:'Сызрань', site:'syzran'},{city:'Сыктывкар', site:'syktyvkar'},{city:'Таганрог', site:'taganrog'},{city:'Нижний Тагил', site:'tagil'},{city:'Тамбов', site:'tambov'},{city:'Тверь', site:'tver'},{city:'Тольятти', site:'tolyatti'},{city:'Томск', site:'tomsk'},{city:'Тула', site:'tula'},{city:'Тюмень', site:'tyumen'},{city:'Улан-Удэ', site:'ulan-ude'},{city:'Ульяновск', site:'ulyanovsk'},{city:'Уссурийск', site:'ussuriysk'},{city:'Уфа', site:'ufa'},{city:'Хабаровск', site:'habarovsk'},{city:'Химки', site:'himki'},{city:'Чебоксары', site:'cheboksary'},{city:'Челябинск', site:'chelyabinsk'},{city:'Череповец', site:'cherepovec'},{city:'Чита', site:'chita'},{city:'Шахты', site:'shahty'},{city:'Электросталь', site:'elektrostal'},{city:'Энгельс', site:'engels'},{city:'Якутск', site:'yakutsk'},{city:'Ярославль', site:'yaroslavl'},{city:'Красногорск', site:'krasnogorsk'},{city:'Пушкино', site:'pushkino'},{city:'Раменское', site:'ramenskoe'},{city:'Домодедово', site:'domodedovo'},{city:'Видное', site:'vidnoe'},{city:'Лобня', site:'lobnya'},{city:'Орехово-Зуево', site:'orehovo-zuevo'},{city:'Сергиев Посад', site:'sergiev-posad'},{city:'Наро-Фоминск', site:'naro-fominsk'},{city:'Дмитров', site:'dmitrov'},{city:'Ногинск', site:'noginsk'},{city:'Коломна', site:'kolomna'},{city:'Серпухов', site:'serpuhov'},{city:'Чехов', site:'chehov'},{city:'Жуковский', site:'zhukovskiy'},{city:'Ханты-Мансийск', site:'hanty-mansiysk'},{city:'Ухта', site:'uhta'},{city:'Обнинск', site:'obninsk'},{city:'Клин', site:'klin'},{city:'Реутов', site:'reutov'},{city:'Долгопрудный', site:'dolgoprudnyy'},{city:'Воскресенск', site:'voskresensk'},{city:'Первоуральск', site:'pervouralsk'},{city:'Ивантеевка', site:'ivanteevka'},{city:'Арзамас', site:'arzamas'},{city:'Гатчина', site:'gatchina'},{city:'Анапа', site:'anapa'},{city:'Фрязино', site:'fryazino'},{city:'Нефтеюганск', site:'nefteyugansk'},{city:'Элиста', site:'elista'},{city:'Дубна', site:'dubna'},{city:'Нефтекамск', site:'neftekamsk'},{city:'Азов', site:'azov'},{city:'Ковров', site:'kovrov'},{city:'Ейск', site:'eysk'},{city:'Копейск', site:'kopeysk'},{city:'Кисловодск', site:'kislovodsk'},{city:'Новочебоксарск', site:'novocheboksarsk'},{city:'Димитровград', site:'dimitrovgrad'},{city:'Черкесск', site:'cherkessk'},{city:'Дербент', site:'derbent'},{city:'Камышин', site:'kamyshin'},{city:'Невинномысск', site:'nevinnomyssk'},{city:'Муром', site:'murom'},{city:'Ноябрьск', site:'noyabrsk'},{city:'Кызыл', site:'kyzyl'},{city:'Ачинск', site:'achinsk'},{city:'Елец', site:'elecz'},{city:'Новый Уренгой', site:'novyy-urengoy'},{city:'Каспийск', site:'kaspiysk'},{city:'Междуреченск', site:'mezhdurechensk'},{city:'Сарапул', site:'sarapul'},{city:'Ессентуки', site:'essentuki'},{city:'Воткинск', site:'votkinsk'},{city:'Тобольск', site:'tobolsk'},{city:'Серов', site:'serov'},{city:'Бердск', site:'berdsk'},{city:'Великие Луки', site:'velikie-luki'},{city:'Мичуринск', site:'michurinsk'},{city:'Киселёвск', site:'kiselyovsk'},{city:'Новотроицк', site:'novotroiczk'},{city:'Глазов', site:'glazov'},{city:'Каменск-Шахтинский', site:'kamensk-shakhtinskiy'},{city:'Новоуральск', site:'novouralsk'},{city:'Кузнецк', site:'kuzneczk'},{city:'Губкин', site:'gubkin'},{city:'Железногорск', site:'zheleznogorsk'},{city:'Усолье-Сибирское', site:'usole-sibirskoe'},{city:'Чайковский', site:'chaykovskiy'},{city:'Бузулук', site:'buzuluk'},{city:'Озёрск', site:'ozyorsk'},{city:'Юрга', site:'yurga'},{city:'Кропоткин', site:'kropotkin'},{city:'Выборг', site:'vyborg'},{city:'Белово', site:'belovo'},{city:'Минеральные Воды', site:'mineralnye-vody'},{city:'Георгиевск', site:'georgievsk'},{city:'Минусинск', site:'minusinsk'},{city:'Воркута', site:'vorkuta'},{city:'Асбест', site:'asbest'},{city:'Туймазы', site:'tuymazy'},{city:'Кстово', site:'kstovo'},{city:'Ишимбай', site:'ishimbay'},{city:'Туапсе', site:'tuapse'},{city:'Россошь', site:'rossosh'},{city:'Лабинск', site:'labinsk'},{city:'Тихорецк', site:'tikhoreczk'},{city:'Александров', site:'aleksandrov'},{city:'Гусь-Хрустальный', site:'gus-khrustalnyy'},{city:'Котлас', site:'kotlas'},{city:'Искитим', site:'iskitim'},{city:'Всеволожск', site:'vsevolozhsk'},{city:'Тихвин', site:'tikhvin'},{city:'Верхняя Пышма', site:'verkhnyaya-pyshma'},{city:'Когалым', site:'kogalym'},{city:'Вязьма', site:'vyazma'},{city:'Горно-Алтайск', site:'gorno-altaysk'},{city:'Ялта', site:'yalta'},{city:'Алушта', site:'alushta'},{city:'Феодосия', site:'feodosiya'},{city:'Евпатория', site:'evpatoriya'},{city:'Судак', site:'sudak'},{city:'Северск', site:'seversk'},{city:'Котельники', site:'kotelniki'}];

	jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
		return function(elem) {
			return jQuery(elem).text().toLowerCase().indexOf(arg.toLowerCase()) >= 0;
		};
	});

	$(function() {
		var url = "";

		function mycity(e) {
			var city = $.trim($(this).val());
            var ul = $('#ch-cit ul');
			if (city.length > 1)
			{
                ul.find('li').remove();
				findcity(city).forEach(function(element) {
                    var el_li = $('<li>');
				    var el_a = $('<a>')
						.text(element['city'])
						.attr('href', get_full_cite_url(element['site']))
						.on('click', function() {
                            $('#mycity').val($(this).text());
                            return false;
						})
                        .appendTo(el_li);
                    ul.append(el_li);
                });

                ul.show();
			}
			else
			{
				ul.hide();
			}
		}

		function get_full_cite_url(site) {
		    return '//' + site + '.remontgis.ru/';
		}

		function findcity(city) {
			var contains_list = site_list.filter(function(value) {
			    return value['city'].toLowerCase().indexOf(city.toLowerCase())>=0;
			});
			return contains_list;
		}

		$('#mycity').keyup(mycity);
		$('#mycity').focus(mycity);

		$('#mycity').blur(function(e) {
			setTimeout(function() {
				$('#ch-cit ul').hide();
			}, 300);
		});

		$('#ch-bt').click(function() {
		    url = findcity($('#mycity').val())[0];

			if (url != undefined)
			{
				window.location = get_full_cite_url(url['site']) + $('#usl option:selected').val();
			}
		});
	});