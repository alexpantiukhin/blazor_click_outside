// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API

window.OutClickComponent = {
    setEvent: function (id, dotNet) {
        window.addEventListener("click", (e) => {
            var element = document.getElementById(id);

            if (element && !element.contains(e.target)) {
                dotNet.invokeMethodAsync("ClickOut");
            }
        });
    }
};
