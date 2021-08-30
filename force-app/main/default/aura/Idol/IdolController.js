({
	createIdol : function(component, event, helper) {
		let displayBoolean = component.get("v.truthy")
          component.set("v.truthy", !displayBoolean)
	}
})