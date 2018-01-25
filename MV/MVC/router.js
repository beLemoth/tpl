let Router = {
    handle: function(route, params) {
        let routeName = route + 'Route';

        if (!Controller.hasOwnProperty(routeName)) {
            throw new Error('Маршрут не найден!');
        }

        Controller[routeName](params);
    }
};

