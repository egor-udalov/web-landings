let center = [56.325683147221085,44.01685312556403];

let flag = 0;

window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;

    let mapOffset = document.querySelector("#map").offsetTop;
    console.log(mapOffset)

    if ((scrollY >= mapOffset - 1000) && (flag == 0)) {
        ymaps.ready(init);

        function init() {
            let map = new ymaps.Map('map', {
                center: center,
                zoom: 19
            });
        
            map.controls.remove('geolocationControl'); // удаляем геолокацию
            map.controls.remove('searchControl'); // удаляем поиск
            map.controls.remove('trafficControl'); // удаляем контроль трафика
            map.controls.remove('typeSelector'); // удаляем тип
            map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
            map.controls.remove('zoomControl'); // удаляем контрол зуммирования
            map.controls.remove('rulerControl'); // удаляем контрол правил
            map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
        }

        flag = 1;
    }
});