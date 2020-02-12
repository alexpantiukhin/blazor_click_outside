// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API

window.OutClickComponent = {
    excludedElements: [],
    setExcludedElements: function (elements) {
        for (var i = 0; i < elements.length; i++) {
            this.excludedElements.push(elements[i]);
        }
    },
    setEvent: function (dotNet, element) {
        this.excludedElements.push(element);

        window.addEventListener("click", (e) => {
            var out = true;

            for (var i = 0; i < this.excludedElements.length; i++) {
                var currentElement = this.excludedElements[i];

                if (currentElement.contains(e.target)) {
                    out = false;
                    break;
                }
            }

            if (out) {
                dotNet.invokeMethodAsync("ClickOut");
            }
        });
    }
};
