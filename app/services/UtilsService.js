angular.module('IndiaEats').service('UtilsService',
        function() {
            var service = this;

            service.objectToArray = function(content) {

                if (content.data instanceof Object && !Array.isArray(content.data)) {
                    var newArray = [];

                    for (var key in content.data) {
                        var item = content.data[key];
                        item.id = key;
                        newArray.push(item);
                    }
                    console.log('data is intance of object and array');
                    return newArray;

                
                } else {
                    console.log('data is not an intance of object and array');
                    return content.data;
                }
            };
        }
    );
