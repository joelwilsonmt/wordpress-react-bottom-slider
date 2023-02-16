import React, { useEffect } from "react";

export default React.memo((props) => {
	// React useEffect hook to create the hubspot form scripts necessary to embed the form on the page.
	// The elements are created and then appended to the body (as well as an optional thumbnail script if passed through props)
	// The return() of the useEffect hook removes the scripts from the body of the html once the page/video component is unloaded.

	useEffect(() => {
		// Create the Hubspot Scripts
		const hubspotMainScript = document.createElement("script");

		hubspotMainScript.src = `https://js.hsforms.net/forms/embed/v2.js`;
		hubspotMainScript.id = `hubspot-embed-script`;

		document.body.appendChild(hubspotMainScript);

		hubspotMainScript.addEventListener("load", () => {
			if (window.hbspt) {
				window.hbspt.forms.create({
					region: "na1",
					portalId: "23126439",
					formId: props.formId,
					target: `#hubspotForm${props.id ? props.id : ""}`,
					cssClass: "hubspot-class",
				});
			}
		});
		let lead = {};

		if (props.cpTenantDomain) {
			window.addEventListener("message", function (event) {
				if (event.data.type === "hsFormCallback") {
					console.log(event.data);
					if (event.data.eventName === "onFormSubmit") {
						console.log("onFormSubmit");
						window.lead = {};
						for (var key in event.data.data) {
							if (Array.isArray(event.data.data[key].value)) {
								event.data.data[key].value = event.data.data[key].value.toString();
							}
							lead[event.data.data[key].name] = event.data.data[key].value;
						}
						if (Object.keys(lead).length <= 1) {
							lead = event.data.data;
						}
					} else if (event.data.eventName === "onFormSubmitted") {
						console.log("onFormSubmitted");
						console.log(lead);
						ChiliPiper.submit(props.cpTenantDomain, props.cpRouterName, {
							title: "Thanks! What time works best for a quick call?",
							map: true,
							lead: lead,
						});
					}
				}
			});
		}
		// must remove these children else becomes unwieldy:
		return () => {
			document.querySelectorAll("[id^=hubspot-embed]").forEach((e) => e.parentNode.removeChild(e));
		};
	}, []);

	return (
		<div {...props} key={`hubspot-embed-form-${props.formId}`} className={props.className}>
			<div id={`hubspotForm${props.id ? props.id : ""}`}></div>
		</div>
	);
});
