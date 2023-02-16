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
