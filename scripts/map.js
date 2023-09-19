let center = [55.7504235689928, 37.595356999999964];

let flag = 0;

window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;

    let mapOffset = document.querySelector("#map").offsetTop;
    console.log(mapOffset)

    if ((scrollY >= mapOffset - 500) && (flag == 0)) {
        // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);

        function init() {
            let map = new ymaps.Map('map', {
                center: center,
                zoom: 17
            });
        
            let placemark = new ymaps.Placemark(center, {}, {
                iconLayout: 'default#image',
                iconImageHref: '../images/icons/map.svg',
                iconImageSize: [40, 40],
                iconImageOffset: [-15, -60]
            });
        
            map.controls.remove('geolocationControl'); // удаляем геолокацию
            map.controls.remove('searchControl'); // удаляем поиск
            map.controls.remove('trafficControl'); // удаляем контроль трафика
            map.controls.remove('typeSelector'); // удаляем тип
            map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
            map.controls.remove('zoomControl'); // удаляем контрол зуммирования
            map.controls.remove('rulerControl'); // удаляем контрол правил
            map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
        
            map.geoObjects.add(placemark);
        }

        flag = 1;
    }
});