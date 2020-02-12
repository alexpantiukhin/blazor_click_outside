// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API

window.OutClickComponent = {
    excludedElements: [],
    setExcludedElements: function (elements) {
        var outsideElement = elements[0];

        for (var i = 0; i < this.excludedElements; i++) {
            if (this.excludedElements[i].outsideElement === outsideElement) {

                for (var j = 1; j < elements.length; j++) {
                    if (!this.excludedElements[i].excluded) {
                        this.excludedElements[i].excluded = [];
                    }
                    this.excludedElements[i].excluded.push(elements[j]);
                }
            }
        }

    },
    setEvent: function (dotNet, element) {
        this.excludedElements.push({
            outsideElement: element,
            excluded: [
                element
            ]
        });

        window.addEventListener("click", (e) => {
            for (var i = 0; i < this.excludedElements.length; i++) {
                if (this.excludedElements[i].outsideElement === element) {
                    var excluded = this.excludedElements[i].excluded;

                    for (var j = 0; j < excluded.length; j++) {
                        var currentElement = this.excludedElements[i].excluded[j];

                        if (!currentElement.contains(e.target)) {
                            dotNet.invokeMethodAsync("ClickOut");
                            return;
                        }
                    }
                    break;
                }
            }
        });
    }
};
