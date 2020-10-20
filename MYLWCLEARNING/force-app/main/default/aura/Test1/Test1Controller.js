({
doInit: function(component, event, helper) {

},
handleClick : function(component, event, helper) {
    alert("Hi");
    var navService = component.find("navService");
    console.log(navService);
    var pageReference = {
        "type": "standard__component",
        "attributes": {
            "componentName": "c__Test2"
        }
    }

    navService.navigate(pageReference);
    console.log("The End");
}
})