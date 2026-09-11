/* ─────────────────────────────────────────────────────────
   FOR YOU — единый каталог сайта.
   Одна позиция — один объект. Чтобы добавить товар,
   допишите строку в PRODUCTS.

   id     — адрес карточки: tovar.html?id=…
   cat    — раздел: buket | sezon | mono | svadba | shar | vaza |
            igrushka | rastenie | svecha | suhocvet
            sezon — сезонные цветы поштучно, меняются каждый сезон
            mono  — моноцветы поштучно (только один вид цветка)
   name   — название
   price  — цена в рублях
   old    — старая цена (перечёркивается, рядом встаёт плашка скидки)
   from   — true: цена «от», точная согласуется в переписке
   unit   — 'шт' если цена за штуку
   ask    — true: цены пока нет, вместо неё кнопка «Узнать цену»
   img    — главное фото
   imgs   — доп. кадры для свайп-галереи
   comp   — состав: что внутри, без количества
   size   — размер (для ваз): диаметр × высота
   season — цветы, которые бывают не всегда
   alcohol— true: в композиции есть место под напитки заказчика
   ───────────────────────────────────────────────────────── */

var PRODUCTS = [

/* ══ АВТОРСКИЙ БУКЕТ — всегда первым ══════════════════ */
{id:'avtorskiy', cat:'buket', name:'Авторский букет', price:2000, from:true,
 img:'img/katalog/vanil.jpg', comp:[],
 lead:'Соберём под ваш бюджет, вкус и повод. Расскажите, для кого и по какому случаю — или пришлите картинку, которая понравилась. Воплотим любую вашу идею.'},

/* ══ БУКЕТЫ И КОМПОЗИЦИИ ══════════════════════════════ */
{id:'belyi-shokolad', cat:'korzina', name:'Белый шоколад', price:2000, img:'img/katalog/sumka-belyi.jpg',
 comp:['Хризантема Алтай','Эвкалипт','Сумочка']},
{id:'koral-sumochka', cat:'korzina', name:'Коралловая сумочка', price:2300, img:'img/katalog/sumka-koral.jpg',
 comp:['Гвоздика одноголовая','Эвкалипт','Сумочка']},
{id:'beze', cat:'korzina', name:'Безе', price:2500, img:'img/katalog/beze.jpg',
 comp:['Эустома Ду Алиса розовая','Шляпная коробка']},
{id:'olivkovyi-sad', cat:'buket', name:'Оливковый сад', price:2600, img:'img/katalog/sad.jpg',
 comp:['Гортензия','Гвоздика','Гиперикум','Роза кустовая']},
{id:'malinovyi-sorbet', cat:'buket', name:'Малиновый сорбет', price:2700, img:'img/katalog/sorbet.jpg',
 comp:['Гортензия голландская','Роза Кантри Блюз','Гвоздика']},
{id:'balerina', cat:'buket', name:'Балерина', price:2700, img:'img/katalog/balerina.jpg',
 comp:['Роза кустовая','Роза Плайя Бланка','Гвоздика']},
{id:'pudrovoe-utro', cat:'buket', name:'Пудровое утро', price:2800, img:'img/katalog/pudra.jpg',
 comp:['Хризантема Алтай','Гортензия']},
{id:'pervyi-sneg', cat:'buket', name:'Первый снег', price:2800, img:'img/katalog/sneg.jpg',
 comp:['Хризантема Алтай','Гортензия']},
{id:'vanilnoe-nebo', cat:'buket', name:'Ванильное небо', price:3000, img:'img/katalog/vanil.jpg',
 comp:['Гортензия','Роза пионовидная']},
{id:'rozovyi-laim', cat:'buket', name:'Розовый лайм', price:3300, img:'img/katalog/rozovyi-laim.jpg',
 comp:['Гортензия','Гвоздика одноголовая','Роза Кантри Блюз','Паникум фоунтан']},
{id:'rozovyi-plombir', cat:'buket', name:'Розовый пломбир', price:3900, img:'img/katalog/rozovyi-plombir.jpg',
 comp:['Гортензия','Роза Кантри Блюз','Роза кустовая','Гвоздика одноголовая']},
{id:'malinovyi-desert', cat:'buket', name:'Малиновый десерт', price:4000, img:'img/katalog/malinovyi-desert.jpg',
 comp:['Гортензия','Роза Кантри Блюз','Роза кустовая','Гвоздика одноголовая']},
{id:'rozovyi-shelk', cat:'buket', name:'Розовый шёлк', price:4200, img:'img/katalog/rozovyi-shelk.jpg',
 comp:['Гортензия','Роза Кантри Блюз']},
{id:'fistashka', cat:'buket', name:'Фисташка и роза', price:4700, img:'img/katalog/fistashka.jpg',
 comp:['Гортензия','Роза кустовая','Гвоздика одноголовая']},
{id:'zelenoe-yabloko', cat:'buket', name:'Зелёное яблоко', price:4900, img:'img/katalog/zelenoe-yabloko.jpg',
 comp:['Гортензия','Роза кустовая','Гвоздика одноголовая','Эустома Ду Алиса розовая']},
{id:'sahar-vata', cat:'buket', name:'Сахарная вата', price:5000, img:'img/katalog/sahar-vata.jpg',
 comp:['Хризантема Алтай']},
{id:'klubnika-slivki', cat:'buket', name:'Клубника со сливками', price:5000, img:'img/katalog/klubnika-slivki.jpg',
 comp:['Гортензия','Роза кустовая','Гвоздика одноголовая']},
{id:'pudrovaya-korobka', cat:'korzina', name:'Пудровая коробка', price:5000, img:'img/katalog/pudrovaya-korobka.jpg',
 comp:['Гербера','Роза кустовая','Роза пионовидная','Гвоздика','Гортензия','Эвкалипт']},
{id:'belyi-len', cat:'buket', name:'Белый лён', price:5200, img:'img/katalog/belyi-len.jpg',
 comp:['Гербера','Гортензия','Хризантема','Эустома','Орнитогалум']},
{id:'tennisnyi-set', cat:'korzina', name:'Теннисный сет', price:5500, img:'img/katalog/tennisnyi-set.jpg',
 comp:['Гладиолус','Эустома','Роза Вендела'],
 lead:'Композиция в корзине с теннисными мячами — подарок для того, кто живёт кортом.'},
{id:'rozovyi-tsitrus', cat:'buket', name:'Розовый цитрус', price:5500, img:'img/katalog/rozovyi-tsitrus.jpg',
 comp:['Роза пионовидная','Гвоздика','Эустома','Львиный зев','Эвкалипт']},
{id:'liliya-myata', cat:'buket', name:'Лилия и мята', price:5700, img:'img/katalog/liliya-myata.jpg',
 comp:['Лилия','Эустома','Хризантема','Гвоздика','Маттиола','Гортензия','Вероника']},
{id:'pudrovoe-oblako', cat:'buket', name:'Пудровое облако', price:5800, img:'img/katalog/pudrovoe-oblako.jpg',
 comp:['Гортензия','Роза пионовидная кустовая']},
{id:'frantsuzskiy-shik', cat:'buket', name:'Французский шик', price:6000, img:'img/katalog/frantsuzskiy-shik.jpg',
 comp:['Роза французская','Роза пионовидная кустовая','Гортензия']},
{id:'kokosovoe-moloko', cat:'buket', name:'Кокосовое молоко', price:6400, img:'img/katalog/kokosovoe-moloko.jpg',
 comp:['Эустома','Хризантема кустовая','Гортензия','Гвоздика','Кокос']},
{id:'kruzhevo', cat:'buket', name:'Кружево', price:6500, img:'img/katalog/kruzhevo.jpg',
 comp:['Гортензия','Гвоздика','Роза пионовидная кустовая','Роза одноголовая']},
{id:'dofaminovyi-miks', cat:'buket', name:'Дофаминовый микс', price:7000, img:'img/katalog/dofaminovyi-miks.jpg',
 comp:[], lead:'Разные цветы в самых ярких оттенках, какие есть в поставке. Собираем на настроение, а не по списку.'},

/* ── партия 20 августа ── */
{id:'pudrovoe-kruzhevo', cat:'buket', name:'Пудровое кружево', price:7500, img:'img/katalog/pudrovoe-kruzhevo.jpg',
 comp:['Гортензия','Роза пионовидная кустовая','Роза одноголовая']},
{id:'rozovyi-teatr', cat:'buket', name:'Розовый театр', price:7700, img:'img/katalog/rozovyi-teatr.jpg',
 comp:['Эустома','Пионы','Розы','Хризантема кустовая'], season:['Гладиолус','Астра']},
{id:'limonnyi-sorbet', cat:'buket', name:'Лимонный сорбет', price:8500, img:'img/katalog/limonnyi-sorbet.jpg',
 comp:['Эустома','Гортензия','Роза Вегги']},
{id:'belyi-sad', cat:'buket', name:'Белый сад', price:9800, img:'img/katalog/belyi-sad.jpg',
 comp:['Гербера','Гвоздика','Гортензия','Роза пионовидная','Листья стрелиции'], season:['Подсолнух','Дельфиниум']},
{id:'zefirnaya-korzina', cat:'korzina', name:'Зефирная корзина', price:10000, img:'img/katalog/zefirnaya-korzina.jpg',
 comp:['Хризантема кустовая']},
{id:'pastelnyi-vals', cat:'buket', name:'Пастельный вальс', price:10000, img:'img/katalog/pastelnyi-vals.jpg',
 comp:['Эустома','Маттиола','Гвоздика','Роза пионовидная']},
{id:'yagodnyi-sirop', cat:'buket', name:'Ягодный сироп', price:10000, img:'img/katalog/yagodnyi-sirop.jpg',
 comp:['Роза пионовидная кустовая','Роза одноголовая','Маттиола'], season:['Пионы']},
{id:'lileinyi-rassvet', cat:'buket', name:'Лилейный рассвет', price:10200, img:'img/katalog/lileinyi-rassvet.jpg',
 comp:['Лилия пионовидная','Роза пионовидная кустовая'], season:['Гладиолус']},
{id:'malinovyi-barhat', cat:'buket', name:'Малиновый бархат', price:10500, img:'img/katalog/malinovyi-barhat.jpg',
 comp:['Роза пионовидная кустовая','Роза одноголовая','Эустома','Гортензия','Гвоздика','Маттиола']},
{id:'malinovyi-shik', cat:'buket', name:'Малиновый шик', price:12000, img:'img/katalog/malinovyi-shik.jpg',
 comp:['Роза пионовидная кустовая']},
{id:'beloe-oblako', cat:'buket', name:'Белое облако', price:12500, img:'img/katalog/beloe-oblako.jpg',
 comp:['Гербера','Гвоздика','Роза одноголовая','Эустома','Гортензия'], season:['Гладиолус','Дельфиниум']},
{id:'rozovyi-barhat', cat:'buket', name:'Розовый бархат', price:12500, img:'img/katalog/rozovyi-barhat.jpg',
 comp:['Гортензия','Роза пионовидная','Маттиола','Эустома','Роза кустовая']},
{id:'101-gvozdika', cat:'buket', name:'101 гвоздика', price:13500, img:'img/katalog/101-gvozdika.jpg',
 comp:['Гвоздика — 101 шт','Эвкалипт']},
{id:'kremovaya-korzina', cat:'korzina', name:'Кремовая корзина', price:13800, img:'img/katalog/kremovaya-korzina.jpg',
 comp:['Роза пионовидная','Роза кустовая'], season:['Молюцелла']},
{id:'persikovoe-oblako', cat:'buket', name:'Персиковое облако', price:15000, img:'img/katalog/persikovoe-oblako.jpg',
 comp:['Эустома','Роза одноголовая','Маттиола']},
{id:'beloe-kruzhevo', cat:'buket', name:'Белое кружево', price:15000, img:'img/katalog/beloe-kruzhevo.jpg',
 comp:['Гербера','Гортензия','Роза пионовидная','Эустома']},
{id:'pudrovaya-korzina', cat:'korzina', name:'Пудровая корзина', price:16500, img:'img/katalog/pudrovaya-korzina.jpg',
 comp:['Эустома','Роза пионовидная','Роза кустовая','Альстромерия']},
{id:'dofaminovaya-korzina', cat:'korzina', name:'Дофаминовая корзина', price:20000, img:'img/katalog/dofaminovaya-korzina.jpg',
 comp:[], lead:'Большая корзина в самых ярких оттенках поставки. Тот случай, когда подарок видно от двери.'},
{id:'alyi-vecher', cat:'korzina', name:'Алый вечер', price:50000, img:'img/katalog/alyi-vecher.jpg',
 imgs:['img/katalog/alyi-vecher-2.jpg'], comp:['Антуриум','Роза французская'],
 lead:'Крупная композиция глубокого красного цвета — для предложения, юбилея или сцены. Собирается под событие целиком.'},

/* ══ ПИОНОВЫЙ СЕЗОН — не в продаже до июня ════════════ */
{id:'piony-red-sharm', cat:'buket', name:'Букет с пионами Ред Шарм', price:3300, img:'img/23310.jpg',
 off:true, comp:['Пион Ред Шарм','Роза пионовидная','Диантус']},
{id:'piony-kustovaya', cat:'buket', name:'Букет с пионами и кустовой розой', price:4300, img:'img/23396.jpg',
 off:true, comp:['Пион','Роза кустовая','Зелень']},
{id:'mono-sara-bernar', cat:'buket', name:'Моно-букет пионов Сара Бернар', price:4500, img:'img/23381.jpg',
 off:true, comp:['Пион Сара Бернар','Ромашка']},
{id:'dofaminovyi', cat:'buket', name:'Дофаминовый букет', price:5300, img:'img/23394.jpg',
 comp:[], lead:'Яркий сборный букет. Состав зависит от поставки: собираем из самых насыщенных оттенков, которые приехали на этой неделе.'},
{id:'bolshoi-piony', cat:'buket', name:'Большой букет пионов', price:6100, img:'img/23389.jpg',
 off:true, comp:['Пион','Эустома','Зелень']},
{id:'orhideya', cat:'buket', name:'Авторский букет с орхидеей', price:7500, img:'img/23385.jpg',
 comp:['Орхидея','Роза','Зелень']},
{id:'korzina-piony', cat:'korzina', name:'Большая корзина пионов', price:13500, img:'img/23368.jpg',
 off:true, comp:['Пион Сара Бернар','Корзина']},


/* ── партия 10 сентября: хиты продаж ── */
{id:'myatnyi-zefir', cat:'buket', name:'Мятный зефир', price:2700, img:'img/katalog/hit-myatnyi-zefir.jpg',
 comp:['Хризантема кустовая']},
{id:'limonnyi-krem', cat:'buket', name:'Лимонный крем', price:2500, img:'img/katalog/hit-limonnyi-krem.jpg',
 comp:['Гортензия','Хризантема кустовая']},
{id:'rozovyi-flamingo', cat:'buket', name:'Розовый фламинго', price:4900, img:'img/katalog/hit-rozovyi-flamingo.jpg',
 comp:['Гортензия','Роза пионовидная кустовая']},
{id:'yagodnoe-beze', cat:'buket', name:'Ягодное безе', price:5000, img:'img/katalog/hit-yagodnoe-beze.jpg',
 comp:['Роза пионовидная кустовая','Гвоздика','Маттиола']},
{id:'utrennii-zefir', cat:'buket', name:'Утренний зефир', price:6500, img:'img/katalog/hit-utrennii-zefir.jpg',
 comp:['Гортензия','Роза пионовидная','Роза кустовая','Гвоздика']},
{id:'persikovyi-krem', cat:'buket', name:'Персиковый крем', price:6800, img:'img/katalog/hit-persikovyi-krem.jpg',
 comp:['Гортензия','Роза пионовидная','Гвоздика','Гиперикум']},
{id:'malinovoe-sufle', cat:'buket', name:'Малиновое суфле', price:7700, img:'img/katalog/hit-malinovoe-sufle.jpg',
 comp:['Роза пионовидная кустовая','Гвоздика','Маттиола']},
{id:'karnaval', cat:'buket', name:'Карнавал', price:8000, img:'img/katalog/hit-karnaval.jpg',
 comp:['Гортензия','Роза пионовидная','Роза кустовая','Гвоздика','Хризантема'],
 lead:'Самый яркий букет витрины: синяя гортензия, жёлтые и малиновые розы в одной охапке. Берут, когда нужен подарок, который видно от двери.'},
{id:'malinovoe-oblako', cat:'buket', name:'Малиновое облако', price:10000, img:'img/katalog/hit-malinovoe-oblako.jpg',
 comp:['Гортензия','Роза пионовидная кустовая','Роза одноголовая']},

/* ── коробки с напитками: алкоголь приносит заказчик ── */
{id:'box-citrus', cat:'korzina', name:'Цитрусовый вечер', price:4000, img:'img/boksy/box-martini.jpg',
 comp:['Дельфиниум','Ромашка','Гортензия','Апельсины и лимоны','Фирменная коробка FOR YOU'],
 alcohol:true,
 lead:'Композиция с цитрусами и полевыми цветами в фирменной коробке. Место под бутылки оставляем — напитки вы приносите свои, мы собираем композицию вокруг них.'},
{id:'box-lime', cat:'korzina', name:'Лайм и лёд', price:3500, img:'img/boksy/box-corona.jpg',
 comp:['Роза кустовая','Молюцелла','Лаймы','Фирменная коробка FOR YOU'],
 alcohol:true,
 lead:'Летняя коробка с лаймами и розами. Место под бутылки оставляем — напитки вы приносите свои, мы собираем композицию вокруг них.'},

/* ══ СЕЗОННЫЕ ЦВЕТЫ — сентябрь: георгины и гладиолусы ══
   Цена за один цветок. Сезон закончится — раздел меняется
   целиком: другие цветы, другие фото.                    */
{id:'sezon-osennyaya', cat:'sezon', name:'Осенний бархат', price:5500,
 img:'img/katalog/sezon-osennyaya.jpg',
 comp:['Хризантема','Роза пионовидная','Гвоздика','Леукадендрон','Фирменное кашпо FOR YOU'],
 lead:'Осенняя композиция в фирменном кашпо: пыльная роза, малиновая хризантема и тёмный леукадендрон. Уже в кашпо — вазу искать не нужно.'},
{id:'sezon-georgin', cat:'sezon', name:'Георгин', price:380, unit:'шт',
 img:'img/katalog/sezon-georgini.jpg',
 imgs:['img/katalog/sezon-georgini-2.jpg'],
 comp:[],
 lead:'Главный цветок сентября — тёплые оттенки от кораллового до тёмно-бордового. Тяжёлая плотная головка, из которой даже пять стеблей собираются в заметный букет.'},
{id:'sezon-georgin-belyi', cat:'sezon', name:'Георгин белый', price:380, unit:'шт',
 img:'img/katalog/sezon-georgin-belyi.jpg',
 imgs:['img/katalog/sezon-georgin-belyi-2.jpg'],
 comp:[],
 lead:'Тот же георгин, только в белом и нежно-розовом. Идеальная форма лепестков — берут на свадьбы и туда, где нужен спокойный светлый букет.'},
{id:'sezon-gladiolus', cat:'sezon', name:'Гладиолус', price:380, unit:'шт',
 img:'img/katalog/sezon-gladiolus.jpg',
 imgs:['img/katalog/sezon-gladiolus-2.jpg'],
 comp:[],
 lead:'Высокий цветок с длинным соцветием — держит форму букета и хорошо смотрится в вазе один. Оттенок зависит от поставки: розовый, жёлтый, белый.'},

/* ══ МОНОБУКЕТЫ — один цветок, цена за штуку ══════════
   Сюда только моноцветы. Сборные букеты — в «Букетах».  */
{id:'mono-hrizantema-santini', cat:'mono', name:'Хризантема сантини', price:200, unit:'шт',
 img:'img/katalog/mono-hrizantema-santini.jpg', comp:[],
 lead:'Мелкоцветковая хризантема: на одной ветке сразу несколько соцветий, поэтому букет получается пышным при небольшом количестве стеблей.'},
{id:'mono-roza-kantri', cat:'mono', name:'Роза Кантри', price:250, unit:'шт',
 img:'img/katalog/mono-roza-kantri.jpg', comp:[],
 lead:'Кустовая пионовидная роза насыщенного розового цвета. Одна из самых стойких — стоит в вазе неделю и дольше.'},
{id:'mono-roza-kremovaya', cat:'mono', name:'Роза кремовая', price:260, unit:'шт',
 img:'img/katalog/mono-roza-kremovaya.jpg', comp:[],
 lead:'Крупная одноголовая роза сливочного оттенка. Классика для круглого монобукета на 25, 35 или 51 цветок.'},
{id:'mono-hrizantema-kustovaya', cat:'mono', name:'Хризантема кустовая', price:330, unit:'ветка',
 img:'img/katalog/mono-hrizantema-kustovaya.jpg', comp:[],
 lead:'Цена за ветку — а на ветке несколько крупных соцветий. Из семи-девяти веток получается большой плотный букет.'},
{id:'mono-hrizantema', cat:'mono', name:'Хризантема одноголовая', price:400, unit:'шт',
 img:'img/katalog/mono-hrizantema.jpg', comp:[],
 lead:'Одно крупное соцветие на стебле. Самый долгий цветок из всех: спокойно стоит две недели.'},
{id:'mono-roza-kustovaya', cat:'mono', name:'Роза кустовая', price:450, unit:'шт',
 img:'img/katalog/mono-roza-kustovaya.jpg', comp:[],
 lead:'На одном стебле — несколько пионовидных бутонов, поэтому объём набирается быстро. Оттенок пудрово-кремовый.'},
{id:'mono-gortenziya', cat:'mono', name:'Гортензия', price:550, unit:'шт',
 img:'img/katalog/mono-gortenziya.jpg', comp:[],
 lead:'Крупная шапка соцветий: три-пять стеблей — уже полноценный букет. Бывает голубой, розовой и кремовой.'},

/* ══ СВАДЕБНЫЕ БУКЕТЫ ═════════════════════════════════ */
{id:'sv-rozovyi-sad', cat:'svadba', name:'Розовый сад', price:2700, img:'img/svadba/b-rozovyi-sad.jpg',
 comp:['Гвоздика','Молюцелла','Маттиола']},
{id:'sv-ornitogalum', cat:'svadba', name:'Утро невесты', price:3500, img:'img/svadba/b-ornitogalum.jpg',
 comp:['Эвкалипт','Эустома','Диантус','Орнитогалум']},
{id:'sv-gladiolus-anturium', cat:'svadba', name:'Белая свеча', price:4000, img:'img/svadba/b-gladiolus-anturium.jpg',
 comp:['Гладиолус','Антуриум']},
{id:'sv-zelenyi-anturium', cat:'svadba', name:'Изумрудный шёлк', price:4200, img:'img/svadba/b-zelenyi-anturium.jpg',
 comp:['Антуриум зелёный','Зелень']},
{id:'sv-kally', cat:'svadba', name:'Лебединый танец', price:4300, img:'img/svadba/b-kally.jpg',
 comp:['Калла','Маттиола','Декоративные бусины']},
{id:'sv-belyi-klassika', cat:'svadba', name:'Белый шёлк', price:4500, img:'img/svadba/b-belyi-klassika.jpg',
 comp:['Эвкалипт','Эустома','Роза','Диантус']},
{id:'sv-vishnevyi', cat:'svadba', name:'Вишнёвый вечер', price:5000, img:'img/svadba/b-vishnevyi.jpg',
 comp:['Георгин','Роза кустовая','Гладиолус','Амарант','Бусины'],
 lead:'Глубокий винный и пыльная роза: георгины, гладиолус и амарант, спадающий вниз вместе с нитью бусин. Для невесты, которой белый букет — не про неё.'},
{id:'sv-serruriya', cat:'svadba', name:'Румяная невеста', price:5000, img:'img/svadba/b-serruriya.jpg',
 comp:['Серрурия','Амарант']},
{id:'sv-romashkovyi', cat:'svadba', name:'Летний луг', price:5000, img:'img/svadba/b-romashkovyi.jpg',
 comp:['Хризантема','Ромашка','Роза']},
{id:'sv-sbornyi-belyi', cat:'svadba', name:'Белый бархат', price:5000, img:'img/svadba/b-sbornyi-belyi.jpg',
 comp:['Эустома','Роза','Гвоздика','Зелень']},
{id:'sv-zelenyi', cat:'svadba', name:'Оливковая роща', price:5000, img:'img/svadba/b-zelenyi.jpg',
 comp:['Роза','Диантус','Львиный зев','Лизиантус','Амарант']},
{id:'sv-kalla-businy', cat:'svadba', name:'Жемчужная нить', price:5700, img:'img/svadba/b-kalla-businy.jpg',
 comp:['Калла','Декоративные бусины']},
{id:'sv-liliya', cat:'svadba', name:'Лунная лилия', price:6000, img:'img/svadba/b-liliya.jpg',
 comp:['Лилия']},
{id:'sv-polevoi-belyi', cat:'svadba', name:'Утро на лугу', price:5000, img:'img/svadba/b-polevoi-belyi.jpg',
 comp:['Ромашка','Эустома','Гвоздика','Полевая зелень'],
 lead:'Собран в полевом стиле — будто нарвали утром на лугу. Только держится он неделю, а не полдня.'},
{id:'sv-polevoi', cat:'svadba', name:'Летний ветер', price:6000, img:'img/svadba/b-polevoi.jpg',
 comp:['Сборный полевой состав']},
{id:'sv-vysokii-belyi', cat:'svadba', name:'Белый водопад', price:6200, img:'img/svadba/b-vysokii-belyi.jpg',
 comp:['Гладиолус','Амарант','Эустома']},
{id:'sv-zhemchuzhnyi', cat:'svadba', name:'Жемчужный', price:7500, img:'img/svadba/b-zhemchuzhnyi.jpg',
 comp:['Роза пионовидная','Эустома','Декоративные бусины']},

/* ── свадебные, партия 10 сентября ── */
{id:'sv-rozovaya-vesna', cat:'svadba', name:'Розовая весна', price:5000, img:'img/svadba/b-rozovaya-vesna.jpg',
 comp:['Роза кустовая','Маттиола','Львиный зев','Орнитогалум','Амарант']},
{id:'sv-belo-zelenyi', cat:'svadba', name:'Мятное утро', price:8000, img:'img/svadba/b-belo-zelenyi.jpg',
 comp:['Гербера','Львиный зев','Эустома','Орнитогалум','Амарант']},
{id:'sv-snezhnyi-shar', cat:'svadba', name:'Снежный шар', ask:true, img:'img/svadba/b-gvozdika-shar.jpg',
 comp:['Гвоздика','Декоративные бусины'],
 lead:'Плотный шар из белой гвоздики на жемчужной нити — форма, которая не растреплется за день и хорошо читается на фото.'},
{id:'sv-dvoinoi', cat:'svadba', name:'Двойное счастье', price:8000, img:'img/svadba/b-dvoinoi.jpg',
 comp:['Роза пионовидная','Калла','Антуриум','Гвоздика'],
 lead:'Два букета в одной цене: основной букет невесты и дублёр, который бросают гостям. Собираем в одной гамме, чтобы на фото они читались как пара.'},

/* ══ ВАЗЫ ═════════════════════════════════════════════ */
{id:'vaza-mramor', cat:'vaza', name:'Ваза «Мрамор»', price:1500, size:'10,5 × 20 см', img:'img/vazy/mramor.jpg',
 comp:['Керамика','Мраморный рисунок']},
{id:'vaza-tsilindr', cat:'vaza', name:'Ваза «Цилиндр»', price:1600, size:'14 × 30 см', img:'img/vazy/tsilindr.jpg',
 imgs:['img/vazy/tsilindr-scena.jpg'], comp:['Прозрачное стекло']},
{id:'vaza-krapchataya', cat:'vaza', name:'Ваза «Крапинка»', price:2300, size:'6,5 × 18 см', img:'img/vazy/krapchataya.jpg',
 comp:['Стекло','Зелёный крап']},
{id:'vaza-relef', cat:'vaza', name:'Ваза «Гербарий»', price:2800, size:'12 × 25 см', img:'img/vazy/relef.jpg',
 comp:['Керамика','Рельеф с цветами']},
{id:'vaza-zhemchug', cat:'vaza', name:'Ваза «Жемчуг»', price:3000, size:'9,5 × 20 см', img:'img/vazy/zhemchug.jpg',
 comp:['Керамика','Объёмные капли']},
{id:'vaza-riflenaya-dym', cat:'vaza', name:'Ваза «Дымка»', price:3000, size:'13,5 × 20 см', img:'img/vazy/riflenaya-dym.jpg',
 comp:['Рифлёное стекло','Дымчатый оттенок']},
{id:'vaza-riflenaya-yantar', cat:'vaza', name:'Ваза «Янтарь»', price:3900, size:'16 × 30 см', img:'img/vazy/riflenaya-yantar.jpg',
 imgs:['img/vazy/riflenaya-scena.jpg'], comp:['Рифлёное стекло','Янтарный оттенок']},

/* ══ МЯГКИЕ ИГРУШКИ — Orange Toys, скидка 20 % ════════ */
{id:'toy-kapibara-malaya', cat:'igrushka', name:'Капибара малая', price:960, old:1200, img:'img/igrushki/kapibara-malaya.jpg',
 imgs:['img/igrushki/kapibary-gruppa.jpg']},
{id:'toy-mishka-korichnevyi', cat:'igrushka', name:'Мишка коричневый', price:2000, old:2500, img:'img/igrushki/mishka-korichnevyi.jpg'},
{id:'toy-slon', cat:'igrushka', name:'Слон', price:2000, old:2500, img:'img/igrushki/slon.jpg',
 imgs:['img/igrushki/slon-2.jpg']},
{id:'toy-kapibara', cat:'igrushka', name:'Капибара', price:2000, old:2500, img:'img/igrushki/kapibara.jpg'},
{id:'toy-mishka-serdce-malyi', cat:'igrushka', name:'Мишка с сердцем, малый', price:2240, old:2800, img:'img/igrushki/mishka-serdce-malyi.jpg'},
{id:'toy-mishka-serdce', cat:'igrushka', name:'Мишка с сердцем', price:2640, old:3300, img:'img/igrushki/mishka-serdce.jpg'},
{id:'toy-kapibara-bolshaya', cat:'igrushka', name:'Капибара большая', price:3040, old:3800, img:'img/igrushki/kapibara-bolshaya.jpg'},
{id:'toy-mishka-futbolka', cat:'igrushka', name:'Мишка в футболке', price:3200, old:4000, img:'img/igrushki/mishka-futbolka.jpg'},
{id:'toy-krokodil', cat:'igrushka', name:'Крокодил', price:3840, old:4800, img:'img/igrushki/krokodil.jpg'},

/* ══ СВЕЧИ И СПРЕИ — своя марка FOR YOU ═══════════════ */
{id:'svecha-shaiba', cat:'svecha', name:'Свеча в шайбе', price:1000, img:'img/svechi/shaiba-venskii.jpg',
 imgs:['img/svechi/shaiba-otkrytaya.jpg','img/svechi/shaiba-aromaty.jpg','img/svechi/shaiba-korzina.jpg'],
 comp:['Соевый воск','Деревянный фитиль'],
 lead:'Плоская жестяная шайба — помещается в сумку и в подарочный бокс к букету. Ароматы: арбуз и сахар, банановый круассан, белый чай и бергамот, бурбон и мёд, венский штрудель, табак и трюфель. Аромат выбираете при заказе — флорист уточнит, когда свяжется.'},
{id:'svecha-steklo', cat:'svecha', name:'Свеча в стекле', price:1100, img:'img/svechi/steklo-tri.jpg',
 comp:['Соевый воск','Стеклянная банка','Пробковая крышка'],
 lead:'Свеча в матовой банке с пробковой крышкой — та, что остаётся на полке и после того, как догорит. Ароматы: арбуз и сахар, банановый круассан, белый чай и бергамот, бурбон и мёд, венский штрудель, табак и трюфель. Аромат выбираете при заказе — флорист уточнит, когда свяжется.'},
{id:'sprei-room', cat:'svecha', name:'Рум-спрей', price:1000, img:'img/svechi/sprei-chetyre.jpg',
 imgs:['img/svechi/sprei-odin.jpg','img/svechi/sprei-ryad.jpg'],
 comp:['Аромат для дома','Флакон с пульверизатором'],
 lead:'Аромат для комнаты, текстиля и штор — два нажатия, и в доме пахнет так, как вы задумали. Ароматы: арбуз и сахар, банановый круассан, белый чай и бергамот, бурбон и мёд, венский штрудель, табак и трюфель. Аромат выбираете при заказе — флорист уточнит, когда свяжется.'},

/* ══ ГОРШЕЧНЫЕ РАСТЕНИЯ ═══════════════════════════════ */
{id:'r-kaktusy-mini', cat:'rastenie', name:'Кактусы мини', price:400, img:'img/rasteniya/kaktusy-mini.jpg',
 comp:['Живые растения в горшках','Упаковка в подарочную бумагу'],
 lead:'Маленькие кактусы в яркой упаковке — недорогой знак внимания, который потом годами стоит на подоконнике.'},
{id:'r-hamedoriya', cat:'rastenie', name:'Хамедорея', price:1300, img:'img/rasteniya/hamedoriya.jpg',
 comp:['Живое растение в горшке','Упаковка в подарочную бумагу']},
{id:'r-flebodium', cat:'rastenie', name:'Флебодиум', price:1400, img:'img/rasteniya/flebodium.jpg',
 imgs:['img/rasteniya/flebodium-2.jpg'], comp:['Живое растение в горшке','Упаковка в подарочную бумагу'],
 lead:'Папоротник с голубоватыми резными листьями. Любит тень — подойдёт туда, где другим растениям темно.'},
{id:'r-singonium', cat:'rastenie', name:'Сингониум', price:1400, img:'img/rasteniya/singonium.jpg',
 comp:['Живое растение в горшке','Упаковка в подарочную бумагу']},
{id:'r-kaktus', cat:'rastenie', name:'Кактус', price:1500, img:'img/rasteniya/kaktus.jpg',
 comp:['Живое растение в горшке','Упаковка в подарочную бумагу']},
{id:'r-dracena', cat:'rastenie', name:'Драцена', price:1500, img:'img/rasteniya/dracena.jpg',
 comp:['Живое растение в горшке','Упаковка в подарочную бумагу']},
{id:'r-aglaonema', cat:'rastenie', name:'Аглаонема', price:2600, img:'img/rasteniya/aglaonema.jpg',
 comp:['Живое растение в горшке','Упаковка в подарочную бумагу']},
{id:'r-anturium', cat:'rastenie', name:'Антуриум', price:3500, img:'img/rasteniya/anturium.jpg',
 imgs:['img/rasteniya/anturium-2.jpg','img/rasteniya/anturium-3.jpg','img/rasteniya/anturium-4.jpg',
       'img/rasteniya/anturium-5.jpg','img/rasteniya/anturium-6.jpg','img/rasteniya/anturium-7.jpg'],
 comp:['Живое растение в горшке','Упаковка в подарочную бумагу'],
 lead:'Красный и розовый антуриум — цветёт почти круглый год. В наличии несколько экземпляров, оттенок и размер немного отличаются: покажем, что есть сейчас.'},
{id:'r-zamiokulkas', cat:'rastenie', name:'Замиокулькас', price:3500, img:'img/rasteniya/zamiokulkas.jpg',
 imgs:['img/rasteniya/zamiokulkas-2.jpg'], comp:['Живое растение в горшке','Упаковка в подарочную бумагу'],
 lead:'Самое неубиваемое растение из всех: переживёт отпуск, забытый полив и тёмный угол.'},
{id:'r-cikas', cat:'rastenie', name:'Цикас', price:3800, img:'img/rasteniya/cikas.jpg',
 comp:['Живое растение в горшке','Упаковка в подарочную бумагу']},
{id:'r-anturium-belyi', cat:'rastenie', name:'Антуриум белый', price:4500, img:'img/rasteniya/anturium-belyi.jpg',
 imgs:['img/rasteniya/anturium-belyi-2.jpg'], comp:['Живое растение в горшке','Упаковка в подарочную бумагу']},
{id:'r-fikus', cat:'rastenie', name:'Фикус эластика', ask:true, out:true, img:'img/rasteniya/fikus-elastika.jpg',
 comp:['Живое растение в горшке','Упаковка в подарочную бумагу'],
 lead:'Сейчас нет в наличии. Напишите — скажем, когда привезём, и придержим для вас.'},
{id:'r-sukkulenty', cat:'rastenie', name:'Суккуленты', price:400, from:true, img:'img/rasteniya/sukkulenty.jpg',
 comp:['Живые растения в горшках','Упаковка в подарочную бумагу'],
 lead:'От 400 до 900 ₽ — цена зависит от размера и вида. Покажем, что есть в наличии сейчас.'},

/* ══ СУХОЦВЕТЫ ════════════════════════════════════════ */
{id:'suh-ryabinovyi-koster', cat:'suhocvet', name:'Рябиновый костёр', price:5000,
 img:'img/suhocvety/osennii.jpg',
 comp:['Сухоцветы','Пампасная трава','Сухая рябина','Кленовый лист','Фирменная коробка FOR YOU'],
 lead:'Осень целиком: рыжий клён, гроздья рябины и пампасная трава в красной фирменной коробке. Не вянет и не осыпается — стоит всю зиму.'},
{id:'suh-moroznaya-yagoda', cat:'suhocvet', name:'Морозная ягода', price:2100, img:'img/suhocvety/goluboi.jpg',
 comp:['Сухоцветы','Шляпная коробка'],
 lead:'Голубая гортензия с красными ягодными акцентами — будто прихваченный морозом сад. Воды не просит, не вянет и стоит годами.'},
{id:'suh-pudrovaya-dyuna', cat:'suhocvet', name:'Пудровая дюна', price:3400, img:'img/suhocvety/rozovyi.jpg',
 comp:['Сухоцветы','Пампасная трава','Шляпная коробка'],
 lead:'Пампасная трава и пудровые оттенки — тёплая, песочная композиция. Не осыпается и не выцветает: просто стоит и держит интерьер.'},
{id:'suh-spelyi-granat', cat:'suhocvet', name:'Спелый гранат', price:3900, img:'img/suhocvety/krasnyi.jpg',
 comp:['Сухоцветы','Фирменная коробка FOR YOU'],
 lead:'Глубокий красный в фирменной коробке. Самая заметная из наших сухих композиций — живёт годами и не требует вообще никакого ухода.'},

/* ══ ШАРЫ ═════════════════════════════════════════════ */
{id:'shar-lateks', cat:'shar', name:'Шар латексный', price:150, unit:'шт', img:'img/shary/lateks.jpg',
 comp:['Матовый или хромированный','Цвет на выбор','Надувается гелием'],
 lead:'Считаем по количеству: скажите, сколько шаров и в каких оттенках — соберём связку под ваш повод. Обрабатываем составом, который держит гелий до трёх недель.'},
{id:'shar-serdce', cat:'shar', name:'Шар-сердце', price:380, unit:'шт', img:'img/shary/serdce.jpg',
 comp:['Фольгированный','Красный или розовый','Надувается гелием'],
 lead:'Считаем по количеству: скажите, сколько шаров и в каких оттенках — соберём связку под ваш повод.'},
{id:'shar-zveryata', cat:'shar', name:'Шар-зверушка', price:450, unit:'шт', img:'img/shary/zveryata.jpg',
 comp:['Фигурный фольгированный','Для детского праздника','Надувается гелием'],
 lead:'Считаем по количеству: скажите, сколько шаров и какие фигуры — соберём связку под ваш повод.'},
{id:'zveryata-kompoziciya', cat:'shar', name:'Детский день рождения', price:3150, img:'img/shary/zveryata-kompoziciya.jpg',
 comp:['Цифра','Фигурные шары','11 гелиевых шаров'],
 lead:'Готовый набор на детский праздник: цифра, фигурные шары со зверятами и одиннадцать гелиевых. Цвета подбираем под ваш повод.'},
{id:'cifra-20', cat:'shar', name:'Пудровая двадцатка', price:2500, img:'img/shary/cifra20.jpg',
 comp:['Цифра','Шары в пудрово-белой гамме'],
 lead:'Готовая связка с цифрой и подобранными по цвету шарами. Цифру собираем любую — от одного знака до трёх.'},
{id:'pastel-21', cat:'shar', name:'Пастельная связка', price:3150, img:'img/shary/pastel-21.jpg',
 comp:['21 шар в пастельной гамме'],
 lead:'Двадцать один шар в приглушённых пастельных оттенках. Обрабатываем составом, который держит гелий до трёх недель.'},
{id:'cifra-25', cat:'shar', name:'Розовый кварц', price:4150, img:'img/shary/cifra25.jpg',
 comp:['Цифра','Шары в розовой гамме','Звезда и сердце'],
 lead:'Готовая связка с цифрой и подобранными по цвету шарами. Цифру собираем любую — от одного знака до трёх.'},
{id:'cifra-35', cat:'shar', name:'Фуксия', price:4150, img:'img/shary/cifra35.jpg',
 comp:['Цифра','Шары малиновых оттенков'],
 lead:'Готовая связка с цифрой и подобранными по цвету шарами. Цифру собираем любую — от одного знака до трёх.'},
{id:'cifra-7', cat:'shar', name:'Чёрный смокинг', price:4200, img:'img/shary/cifra7.jpg',
 comp:['Цифра','Шары в чёрно-белой гамме'],
 lead:'Готовая связка с цифрой и подобранными по цвету шарами. Цифру собираем любую — от одного знака до трёх.'},
{id:'cifra-50', cat:'shar', name:'Шампань', price:4800, img:'img/shary/cifra50.jpg',
 comp:['Крупная цифра','Шары кремово-золотистых тонов'],
 lead:'Готовая связка с цифрой и подобранными по цвету шарами. Цифру собираем любую — от одного знака до трёх.'}
];

/* ── разделы каталога ────────────────────────────────── */
var CATS = {
  buket:    {name:'Букеты и композиции', one:'букет'},
  sezon:    {name:'Сезонные цветы',      one:'сезонный цветок'},
  mono:     {name:'Монобукеты',          one:'монобукет'},
  korzina:  {name:'Корзины и композиции', one:'композиция'},
  svadba:   {name:'Свадебные букеты',    one:'свадебный букет'},
  vaza:     {name:'Вазы',                one:'ваза'},
  igrushka: {name:'Мягкие игрушки',      one:'игрушка'},
  svecha:   {name:'Свечи и спреи',       one:'свеча'},
  rastenie: {name:'Горшечные растения',  one:'растение'},
  suhocvet: {name:'Сухоцветы',           one:'сухоцвет'},
  shar:     {name:'Шары',                one:'шар'}
};

/* ── ценовые ступени ─────────────────────────────────── */
var TIERS = [
  {min:0,     max:3000,  name:'Знак внимания'},
  {min:3000,  max:5000,  name:'Небольшой подарок'},
  {min:5000,  max:7000,  name:'Хороший подарок'},
  {min:7000,  max:12000, name:'Особый повод'},
  {min:12000, max:0,     name:'Премиум'}
];

/* ── помощники ───────────────────────────────────────── */
function money(n){ return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ') + ' ₽'; }
function byId(id){ for(var i=0;i<PRODUCTS.length;i++){ if(PRODUCTS[i].id===id) return PRODUCTS[i]; } return null; }
function inCat(c){ return PRODUCTS.filter(function(p){ return p.cat===c; }); }
function tierOf(p){
  if(!p.price) return null;
  for(var i=0;i<TIERS.length;i++){
    var t=TIERS[i];
    if(p.price>=t.min && (!t.max || p.price<t.max)) return t.name;
  }
  return null;
}

/* ─────────────────────────────────────────────────────────
   КОРЗИНА
   Лежит в браузере покупателя (localStorage), между
   страницами не теряется. Заказ уходит текстом в мессенджер.
   ───────────────────────────────────────────────────────── */

var CART_KEY = 'fy_cart_v1';

/* товары, которые в корзину не кладутся: услуги и позиции без цены */
function cartAllows(p){
  if(!p) return false;
  if(p.ask || p.out) return false;          /* цены нет или нет в наличии */
  if(p.from) return false;                  /* цена «от» — считаем в переписке */
  return !!p.price;
}

function cartRead(){
  try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch(e){ return []; }
}
function cartWrite(list){
  try{ localStorage.setItem(CART_KEY, JSON.stringify(list)); }catch(e){}
  cartPaint();
}
function cartAdd(id, qty){
  var list = cartRead(), found = false;
  qty = qty || 1;
  for(var i=0;i<list.length;i++){
    if(list[i].id === id){ list[i].qty += qty; found = true; break; }
  }
  if(!found) list.push({id:id, qty:qty});
  cartWrite(list);
}
function cartSetQty(id, qty){
  var list = cartRead().map(function(x){ return x.id===id ? {id:id, qty:Math.max(1, qty)} : x; });
  cartWrite(list);
}
function cartRemove(id){
  cartWrite(cartRead().filter(function(x){ return x.id !== id; }));
}
function cartClear(){ cartWrite([]); }

function cartLines(){
  return cartRead().map(function(x){
    var p = byId(x.id);
    return p ? {p:p, qty:x.qty, sum:p.price * x.qty} : null;
  }).filter(Boolean);
}
function cartCount(){
  return cartRead().reduce(function(a,x){ return a + x.qty; }, 0);
}
function cartTotal(){
  return cartLines().reduce(function(a,l){ return a + l.sum; }, 0);
}

/* счётчик в шапке — на каждой странице */
function cartPaint(){
  var n = cartCount();
  [].forEach.call(document.querySelectorAll('.cart b, [data-cart-count]'), function(el){
    el.textContent = n;
  });
  [].forEach.call(document.querySelectorAll('.cart'), function(el){
    el.classList.toggle('has', n > 0);
  });
}
document.addEventListener('DOMContentLoaded', cartPaint);
/* корзину могли поменять в соседней вкладке */
window.addEventListener('storage', function(e){ if(e.key === CART_KEY) cartPaint(); });
