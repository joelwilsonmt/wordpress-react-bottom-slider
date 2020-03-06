export default {
    debug: "border: 1px solid red;",
    colors: {
        // primary is orange, secondary is blue, tertiary is yellow
        brand: {
            main: "#fc5b30", // Submittable orange
            contrastText: '#fff'
        },
        primary: {
            main: "#fd8464", // lighter orange
            dark: "#c93007",
            light: "#fdad97",
            lighter: "#feded6",
            lightest: "#feeeea",
            contrastText: '#fff'
        },
        secondary: {
            main: "#0fb8c6", // blue / aqua
            dark: "#007682",
            light: "#6fd4dd",
            lighter: "#b7e9ed",
            lightest: "#e7f7f9",
            contrastText: '#fff'
        },
        tertiary: {
            main: "#ffc421", // yellow
            dark: "#e78f06",
            light: "#ffdc7a",
            lighter: "#ffedbc",
            lightest: "#fff9e8",
            contrastText: '#fff'
        },
        grayscale: {
            white: "#fff",
            black: "#000",
            charcoal: "#333333",
            gray: "#9b9b9b",
            stone: "#f6f6f6",
            main: "#333",
            light: "#f6f6f6",
            dark: "#707070"
        },
        error: "#CF000F",
        blue: "#1E506A",
        white: "#ffffff",
        offWhite: "#f6f6f6",
        orange: "#FC5B30",
        lightGray: "#f6f6f6",
        darkGray: "#707070",
        black: "#333333",
        darkBlue: "#34344A",
        blueBlack: "#383C4B",
        salmon: '#FF9477',
        pink: "#F7A893",
        lightPink: "#FBE1DA"
    },
    accents: ['#3AB8C6', '#FFC421', '#FD8464'], // blue, yellow, orange
    button: {
        text: "#fff",
        primary: "#FC5B30", // orange
        primaryShadow: "#fd8464", // light orange
        secondary: "#f6f6f6", // offwhite
        borderRadius: "0px",
        pillRadius: "20px"
    },
    footer: {
        background: "#333", // black
        categoryTitle: "#fff"
    },
    section: {
        topBottomSpace: "100px",
        backgroundPrimary: "#fff",
        backgroundSecondary: "#f6f6f6"
    },
    forms: {
        background: "#fff", // blue
        textColor: "#333",
        borderRadius: "0px",
        inputs: {
            innerPadding: 10,
            labelHeight: 22.5,
            height: 44,
            boxShadow: "inset -1px 1px 2px 1px rgba(31,28,78,0.2)",
            backgroundColor: "#F6F6F6"
        },
        formIds: {
            footer: "c2432c63-3208-4551-9688-5f39531c3d9b",
            customerStory: "a2252379-6c76-4d37-afe9-ec795ce35a66",
            featuresPage: "610e2e7f-2400-4565-a9b1-8ca0556bfa92",
            solutions: "1476479b-6549-4a50-abbb-ce90d80a1c65",
            contactSales: "262af6e2-043a-4eb7-a45a-2cb419cc736b",
            onDemandWebinar: "fd9d5a09-34d4-4e67-bec8-f5878e64a4d2",
            notOnDemandWebinar: "7135b6c6-91e7-4b12-8fd0-3be48ed90be6",
            demoVideoSuccessFooter: "9ef2b4fe-f8bf-4fe1-a314-0447de4d532a",
            demoVideoPopup: "2d7dd0c3-83a9-42fa-81b2-f1f9471f9f41",
            demoVideoPage: "ecb3f7ca-2d5a-4e37-bf88-ac1e50e81da2",
            howItWorks: "7756d762-2844-4249-8f51-81155c116a12",
            newsletterSubscription: "c2432c63-3208-4551-9688-5f39531c3d9b",
            pricingPopup: "26b643d1-12e1-4862-8f25-f43101338939",
            partnersPage: "322fd143-57b3-4b93-adaf-9a1986fd103f",
            referralPage: "a89ec510-a5bd-4dcf-83ae-0929a607190a",
            invitePage: 'c3f2bacf-8a3b-4c30-884e-03c02c8142a3'
        }
    },
    link: {
        secondary: '#868686', // gray
        primary: '#3367D6' // blue
    },
    font: {
        regular: "ProximaNova-Regular",
        semiBold: "ProximaNova-Semibold",
        bold: "ProximaNova-Bold",
        avenir: "nunitoregular",
        size: {
            small: "20px",
            medium: "28px",
            large: "34px"
        }
    },
    transitionDuration: "0.25s",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
    cardBoxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.25)",
    hoverBoxShadow: "0 2px 29px 0px rgba(0, 0, 0, 0.3)",
    imageBoxShadow: "0 2px 14px 0 rgba(0,0,0,0.25)",
    borderRadius: "5px",
    spacingUnit: 8,
    breakPoints: {
        mobile: "425px",
        small: "576px",
        medium: "768px",
        large: "992px",
        extraLarge: "1200px",
        screenQuery: {
            mobile: "@media screen and (max-width: 425px)",
            small: "@media screen and (max-width: 576px)",
            medium: "@media screen and (max-width: 768px)",
            large: "@media screen and (max-width: 992px)",
            extraLarge: "@media screen and (max-width: 1200px)",
        }
    },
    wistiaIds: {
        demoVideo: 'kectnmi4i6', // demo-video-success state: all
        grantsDemo: '85b8sn6uj3', // demo-video-success state: grants
        contestsDemo: '9pfzazcsar',
        meetSubmittable: 'kahcffdfte', // on: submission-management-software and CLPs
        submitterDemo: '8215u12shf', //nowhere yet
        coldLandingPage: 'if77oirl9h', // OLD
    }
}