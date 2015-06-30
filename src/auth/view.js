var request = require('../../src/helpers/request');

var authView = function(){
    return {
        render: function(){
            var authPage = tabris.create('Page', {
                title: 'Вход в систему myObject',
                style: ['FULLSCREEN'],
                background: '#36b199'
            });

            var logo = tabris.create("ImageView", {
                image: "theme/images/mo_logo.png",
                scaleMode: "fit",
                layoutData: {left: 0, right: 0, top: 50, height: 200}
            }).appendTo(authPage);

            var loginInput = tabris.create('TextInput', {
                message: 'E-mail',
                keyboard: 'email',
                background: 'white',
                textColor: 'white',
                text: 'test_company_admin@admin.ru',
                layoutData: {left: 25, right: 25, top: [logo, 50]}
            }).appendTo(authPage);

            var passInput = tabris.create('TextInput', {
                message: 'Пароль',
                type: 'password',
                background: 'white',
                textColor: 'white',
                text: '123123',
                layoutData: {left: 25, right: 25, top: [loginInput, 25]}
            }).appendTo(authPage);

            var submitButton = tabris.create('Button', {
                text: 'Войти в систему',
                layoutData: {left: 25, right: 25, top: [passInput, 25]}
            }).on('select', function(){
                request.do({
                    method: 'POST',
                    url: 'https://myobject.ru/user/login',
                    params: {
                        username: loginInput.get('text'),
                        password: passInput.get('text'),
                        remember: true
                    },
                    success: function(resp){
                        var init = require('../../src/init'),
                            mainPage = require('../../src/main_page/view');

                        mainPage.render();
                        init.render();

                    },
                    error: function(status){
                        switch (status){
                            case 403:

                            break;
                            default:

                            break;
                        }
                    }
                });
            }).appendTo(authPage);

            authPage.open();
        }
    }
};

module.exports = authView();