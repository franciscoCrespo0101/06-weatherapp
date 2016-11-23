(function() {
    'use strict';

    angular
        .module('app')
        .controller('WeatherMapController', WeatherMapController);

    WeatherMapController.$inject = ['$http', 'toastr'];

    /* @ngInject */
    function WeatherMapController($http, toastr) {
        var vm = this;
        vm.callWeatherApi = callWeatherApi;
        vm.results = [];


        ////////////////

        function callWeatherApi(cityName) {

            $http
                .get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&APPID=80a8baac46bccc9edea5af1fba3c0bb9')
                .then(function(response) {
                    toastr.success('Great job','You didnt break it!');
                    vm.data = response.data;
                    
                    document.getElementById('hide').style.visibility = 'visible';


                    vm.nowDate = new Date(new Date().getTime()).toLocaleDateString();
                    vm.nowTime = new Date(new Date().getTime()).toLocaleTimeString();
                    vm.results.push({ name: vm.data.name, date: vm.nowDate, time: vm.nowTime });
                })
                .catch(function(error) {
                    toastr.error('You broke it!');
                });

        }




    }
})();
