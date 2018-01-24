var Router = {
    handle: function(route, params) {
        var routeName = route + 'Route';

        if (!Controller.hasOwnProperty(routeName)) {
            throw new Error('Маршрут не найден!');
        }

        Controller[routeName](params);
    }
};

