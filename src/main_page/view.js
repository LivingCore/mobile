var mainView = function(){
    return {
        render: function(){
            var mainPage = tabris.create('Page', {
                title: 'Сводная информация',
                topLevel: true
            });

            mainPage.open();
        }
    }
};

module.exports = mainView();