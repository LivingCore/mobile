tabris.create("Drawer");

tabris.create("ImageView", {
    image: "images/my-logo.png",
    scaleMode: "fill",
    layoutData: {left: 0, right: 0, top: 0, height: 200}
}).appendTo(tabris.ui.drawer);

tabris.create("PageSelector", {
    layoutData: {left: 0, top: 200, right: 0, bottom: 0}
}).appendTo(tabris.ui.drawer);

var page = tabris.create("Page", {
    title: "Hello, World!",
    topLevel: true
});

var button = tabris.create("Button", {
    text: "Native Widgets",
    layoutData: {centerX: 0, top: 100}
}).appendTo(page);

var label = tabris.create("TextView", {
    font: "24px",
    layoutData: {centerX: 0, top: [button, 50]}
}).appendTo(page);

button.on("select", function() {
    label.set("text", "Totally Rock!");
});

page.open();

tabris.create("Page", {
    title: '123',
    topLevel: true
}).append(button);