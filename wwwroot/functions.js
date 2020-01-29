// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API

window.OutClickComponent = {
    setEvent: function (element, dotNet) {
        window.addEventListener("click", (e) => {
            if (!element.contains(e.target)) {
                dotNet.invokeMethodAsync("ClickOut");
            }
        });
    }
};
