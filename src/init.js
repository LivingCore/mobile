var init = function(){
    return {
        render: function(){
            tabris.create("Drawer");

            tabris.create("PageSelector", {
                layoutData: {left: 0, top: 0, right: 0, bottom: 0}
            }).appendTo(tabris.ui.drawer);
        }
    }
};

module.exports = init();