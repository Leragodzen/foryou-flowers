/* ─────────────────────────────────────────────────────────
   Яндекс.Метрика — статистика посещений.

   ЧТОБЫ ВКЛЮЧИТЬ: вставьте номер счётчика в строку ниже
   вместо нуля и сохраните файл. Больше ничего править не нужно —
   код подключён на всех страницах сайта.

   Где взять номер: metrika.yandex.ru → «Добавить счётчик» →
   адрес сайта → после создания номер будет в списке счётчиков
   (8 цифр, например 87654321).
   ───────────────────────────────────────────────────────── */

var METRIKA_ID = 0;

/* ───────── дальше менять ничего не нужно ───────── */
(function(){
  if(!METRIKA_ID) return;   // номера нет — счётчик не грузится

  (function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for(var j=0;j<e.scripts.length;j++){ if(e.scripts[j].src===r) return; }
    k=e.createElement(t); a=e.getElementsByTagName(t)[0];
    k.async=1; k.src=r; a.parentNode.insertBefore(k,a);
  })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

  ym(METRIKA_ID, 'init', {
    ssr:true,
    webvisor:true,          /* запись действий посетителя */
    clickmap:true,          /* карта кликов */
    trackLinks:true,
    accurateTrackBounce:true
  });

  /* цели: чтобы было видно, откуда приходят заказы */
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a, button');
    if(!a) return;
    var href = a.getAttribute('href') || '';
    if(/t\.me\//.test(href))            ym(METRIKA_ID,'reachGoal','telegram');
    else if(/max\.ru\//.test(href))     ym(METRIKA_ID,'reachGoal','max');
    else if(/^tel:/.test(href))         ym(METRIKA_ID,'reachGoal','zvonok');
    else if(a.id === 'ctaCart')         ym(METRIKA_ID,'reachGoal','v_korzinu');
  }, true);

  document.addEventListener('submit', function(e){
    if(e.target && e.target.id === 'orderForm') ym(METRIKA_ID,'reachGoal','zakaz');
  }, true);
})();
