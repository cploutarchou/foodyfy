{
    document.querySelector('#divid').classList.add('overlay');
    // OR Using Jquery
    // $("#divid").addClass("overlay");
    let styleSwitch = "null", refElement = "null";

    function loader(shown) {
        if (shown) {
            showElement("divProcessing");
            $("#divID").addClass("overlay");
        } else {
            $("#divID").removeClass("overlay");
            hideElement("divProcessing");
        }
    }

    function showElement(elementName) {
        eval(refElement + '"' + elementName + '"' + styleSwitch + '.visibility="visible"');
    }

    function hideElement(elementName) {
        eval(refElement + '"' + elementName + '"' + styleSwitch + '.visibility="hidden"');
    }
}
