// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API

window.OutClickComponent = {
    elements: [],
    setEvent: function (element, dotNet, excludedIDs) {

        var findElement = this.elements.find(x => x.element === element);

        if (!findElement) {
            findElement = {
                element: element,
                excluded: []
            };

            if (excludedIDs) {
                for (var i = 0; i < excludedIDs.length; i++) {
                    var domElement = document.getElementById(excludedIDs[i]);
                    if (domElement) {
                        findElement.excluded.push(domElement);
                    }
                }
            }

            this.elements.push(findElement);
        }

        window.addEventListener("click", (e) => {
            if (!element.contains(e.target)) {
                for (var i = 0; i < this.elements.length; i++) {
                    var findElement = this.elements[i];
                    if (findElement.element === element) {
                        var isOut = true;
                        for (var j = 0; j < findElement.excluded.length; j++) {
                            var excludedElement = findElement.excluded[j];

                            if (excludedElement.contains(e.target)) {
                                isOut = false;
                                break;
                            }
                        }

                        if (isOut) {
                            dotNet.invokeMethodAsync("ClickOut");
                        }
                    }
                }
            }
        });
    },
    Onclick: function (e) {

    }
};
