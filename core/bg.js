chrome['browserAction']['onClicked'].addListener(
    function (activeTab) {
        var newURL = "https://ok.ru/";
        chrome['tabs']['create']({url: newURL});
    }
);