var request = function(){
    return {
        prepareParams: function(url, data){
            var _url = url;

            if (!_.isEmpty(data)){

                _url += '?';

                for (var key in data){
                    _url += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&';
                }

                _url = _url.substr(0, _url.length - 1);
            }

            return _url;
        },
        fetch: function(config){
            var url = config.url;

            if (config.id){
                url += '/'+ config.id;
            }

            var xhr = new tabris.XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (xhr.readyState === xhr.DONE) {
                    if (xhr.status === 200) {
                        if (_.isFunction(config.success)){
                            config.success(xhr.responseText);
                        }
                    } else {
                        if (_.isFunction(config.error)){
                            config.error(xhr.status);
                        }
                    }
                }
            };

            switch (config.method){
                case 'GET':
                    url = this.prepareParams(url, config.params);
                    xhr.open(config.method, url);
                    xhr.send();
                break;
                case 'POST':
                case 'PUT':
                    xhr.open(config.method, url, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');

                    if (!_.isEmpty(config.params)){
                        xhr.send(JSON.stringify(config.params));
                    } else {
                        xhr.send();
                    }
                break;
            }
        },
        "do": function(config){
            this.fetch(config);
        }
    }
};

module.exports = request();