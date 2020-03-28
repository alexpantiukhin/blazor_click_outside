// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API

window.OutClickComponent = {
    excludedElements: [],
    setExcludedElements: function (elements) {
        var outsideElement = elements[0];

        var hasOutside = false;
        for (var x = 0; x < length; x++) {
            if (this.excludedElements[i].outsideElement === outsideElement) {
                hasOutside = true;
                break;
            }
        }

        if (!hasOutside) {
            this.excludedElements.push({
                outsideElement: outsideElement,
                excluded: elements
            });
        }
        else {
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
        }
    },

    setEvent: function (dotNet, element) {
        var hasOutside = false;
        for (var x = 0; x < this.excludedElements.length; x++) {
            if (this.excludedElements[x].outsideElement === element) {
                hasOutside = true;
                break;
            }
        }

        if (!hasOutside) {
            this.excludedElements.push({
                outsideElement: element,
                excluded: [element]
            });
        }

        window.addEventListener("click", (e) => {
            for (var i = 0; i < this.excludedElements.length; i++) {
                if (this.excludedElements[i].outsideElement === element) {
                    var excluded = this.excludedElements[i].excluded;

                    var out = true;
                    for (var j = 0; j < excluded.length; j++) {
                        var currentElement = this.excludedElements[i].excluded[j];

                        if (currentElement.contains(e.target)) {
                            out = false;
                            break;
                        }
                    }
                    if (out) {
                        dotNet.invokeMethodAsync("ClickOut", element.id);
                    }
                    break;
                }
            }
        });
    }
};
