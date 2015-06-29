tabris.create("Drawer").append(tabris.create("PageSelector"));

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