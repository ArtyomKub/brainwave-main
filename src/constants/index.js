import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
} from "../assets";

export const navigation = [
    {
        id: "0",
        title: "Features",
        url: "#features",
    },
    {
        id: "1",
        title: "Pricing",
        url: "#pricing",
    },
    {
        id: "2",
        title: "How to use",
        url: "#how-to-use",
    },
    {
        id: "3",
        title: "Roadmap",
        url: "#roadmap",
    },
    {
        id: "4",
        title: "New account",
        url: "#signup",
        onlyMobile: true,
    },
    {
        id: "5",
        title: "Sign in",
        url: "#login",
        onlyMobile: true,
    },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
];

export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
];

export const roadmap = [
    {
        id: "0",
        title: "User interaction",
        text: "Answers to questions about the property from text not specified in the advertisement. Adding additional ad sources",
        date: "September 2024",
        status: "progress",
        imageUrl: roadmap1,
        colorful: true,
    },
    {
        id: "1",
        title: "Integration of AI",
        text: "Integration of AI models based on the best LLMs.",
        date: "September 2024",
        status: "progress",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "Photo recognition",
        text: "Photo recognition to extract qualitative characteristics of objects.",
        date: "September 2024",
        status: "progress",
        imageUrl: roadmap3,
    },
    {
        id: "3",
        title: "Integration with APIs",
        text: "Development of an API for integration into existing SAP systems.",
        date: "September 2024",
        status: "done",
        imageUrl: roadmap4,
    },
];


export const collabText =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
    {
        id: "0",
        title: "Seamless Integration",
        text: collabText,
    },
    {
        id: "1",
        title: "Smart Automation",
    },
    {
        id: "2",
        title: "Top-notch Security",
    },
];

export const collabApps = [
    {
        id: "0",
        title: "Figma",
        icon: figma,
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "Notion",
        icon: notion,
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "Discord",
        icon: discord,
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "Slack",
        icon: slack,
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "Photoshop",
        icon: photoshop,
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "Protopie",
        icon: protopie,
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: "Framer",
        icon: framer,
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "Raindrop",
        icon: raindrop,
        width: 38,
        height: 32,
    },
];

export const pricing = [
    {
        id: "0",
        title: "BASIC",
        description: "AI web APP, personalized recommendations",
        price: "9.99",
        features: [
            "Current price/rent of the property offered by the supplier",
            "Tracking price changes",
            "Personalized recommendations based on a list of preferences",
            "Recommendations for ROI in percentage",
            "Access for 2 weeks",
            "Telegram application version"
        ],
    },
    {
        id: "1",
        title: "PREMIUM",
        description: "Advanced AI web APP, priority support, analytics dashboard",
        price: "49.99",
        features: [
            "AI assistant answering questions about your data volume",
            "Automatic notification of new and interesting real estate properties",
            "Assessment of investment attractiveness",
            "Priority support",
            "WEB UI"
        ],
    },
    {
        id: "2",
        title: "ENTERPRISE",
        description: "Custom AI chatbot, advanced analytics, dedicated account",
        price: "349.99",
        features: [
            "AI assistant answering questions about your data volume",
            "Automatic notification of new and interesting real estate properties",
            "Assessment of investment attractiveness",
            "Priority support",
            "WEB UI",
            "Modification of functionality for specific business requirements"
        ],
    },
];

export const benefits = [
    {
        id: "0",
        title: "Ask anything.",
        text: "Lets users quickly find answers to their questions for property without having to search through multiple sources.",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "1",
        title: "Enhancing Property Listings",
        text: "Increased conversion to sales and reduced costs of searching for relevant real estate properties.",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "2",
        title: "Connect everywhere",
        text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
        backgroundUrl: "./src/assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: benefitImage2,
    },
    {
        id: "3",
        title: "Predicting Market Trends",
        text: "AI tools analyze heaps of data to predict where the real estate market is heading.",
        backgroundUrl: "./src/assets/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "4",
        title: "Improving Customer Interactions",
        text: "AI - virtual assistants can interact with potential buyers, answering queries and scheduling viewings.",
        backgroundUrl: "./src/assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "5",
        title: "Facilitating Better Decision Making",
        text: "AI provides real estate agents with valuable insights, helping them make informed decisions for their clients.",
        backgroundUrl: "./src/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
    },
];

export const socials = [
    {
        id: "0",
        title: "Discord",
        iconUrl: discordBlack,
        url: "#",
    },
    {
        id: "1",
        title: "Twitter",
        iconUrl: twitter,
        url: "#",
    },
    {
        id: "2",
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        id: "3",
        title: "Telegram",
        iconUrl: telegram,
        url: "#",
    },
    {
        id: "4",
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    },
];
