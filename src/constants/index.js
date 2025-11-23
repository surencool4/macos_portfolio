const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navDropdownLinks = [
    {
        id: 1,
        name: "About Surendra",
        icon: "/macbook.png",
        type: "resume",
    },
    {
        id: 3,
        name: "Contact",
        icon: "/icons/info.svg",
        type: "contact",
    },
    {
        id: 4,
        name: "Skills",
        icon: "/icons/search.svg",
        type: "terminal",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Sep 2, 2025",
        title:
            "Benefits of Responsive Web Design ",
        image: "/images/blog1.png",
        link: "https://ourwebcreation.com/posts/benefits-of-responsive-web-design-LWSH6w3cai",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "eCommerce Web Design & Website Development",
        image: "/images/blog2.png",
        link: "https://ourwebcreation.com/posts/ecommerce-web-design-website-development-ZrMVjQ63XM",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "Domain name Vs Web Hosting Services",
        image: "/images/blog3.png",
        link: "https://ourwebcreation.com/posts/domain-name-vs-web-hosting-services-HITTaTgYoN",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Flutter"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS", "Bootstrap"],
    },
    {
        category: "Backend",
        items: ["Node.js", "C# (.NET)", "NestJS", "PHP", "Laravel" ],
    },
    {
        category: "Database",
        items: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
    {
        category: "Hosting/Server",
        items: ["Kubernetes", "Openstack", "WHMCS"],
    }
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/surencool4",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://zero.app/",
    },
    {
        id: 3,
        text: "Facebook",
        icon: "/icons/facebook.svg",
        bg: "#ff866b",
        link: "https://facebook.com/dev.srk",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/surendra-budhathoki-a1157888/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.jpg",
    },
    {
        id: 2,
        img: "/images/gal2.jpg",
    },
    {
        id: 3,
        img: "/images/gal3.jpg",
    },
    {
        id: 4,
        img: "/images/gal4.jpg",
    },
];

export {
    navDropdownLinks,
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Digital Rupaiya",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] right-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Dital Rupaiya.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Digital Rupaiya is a modern crypto-based payment and wallet system designed to simplify digital transactions.",
                        "It provides secure wallet management, instant peer-to-peer transfers, and real-time asset tracking.",
                        "The system focuses on transparency and smooth user experience, similar to leading crypto wallets like MetaMask or Coinbase Wallet.",
                        "The project is built using Laravel and Flutter, ensuring strong backend reliability and a clean, responsive mobile app experience.",
                    ],
                },
                {
                    id: 2,
                    name: "digitalrupaiya.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://digitalrupaiya.com",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "design.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "Banksnepal",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] right-7",
            children: [
                {
                    id: 1,
                    name: "Banksnepal Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Banksnepal is a comprehensive financial information platform built for users looking to explore Nepal's banking ecosystem.",
                        "It provides bank job listings, branch locations, contact numbers, and all major banking details in one place.",
                        "The platform also delivers updated banking news, NEPSE market data, and insights to help users stay informed about financial trends.",
                        "It is designed to be fast, clean, and easy to navigate, helping users quickly find the banking information they need.",
                    ],
                },
                {
                    id: 2,
                    name: "banksnepal.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://banksnepal.com",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "banksnepal-preview.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Silverline Hospital",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] right-7",
            children: [
                {
                    id: 1,
                    name: "Silverline Hospital.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Find a Doctor feature at Silverline Hospital helps patients easily search for qualified specialists.",
                        "Users can filter doctors by department, expertise, symptoms, or name.",
                        "Each doctor profile includes experience, qualifications, schedules, and consultation availability.",
                        "This makes selecting the right healthcare provider quick, reliable, and stress-free."
                    ]
                },
                {
                    id: 2,
                    name: "silverlinehospital.com.np",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://silverlinehospital.com.np",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "silverline full page.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },
        {
            "id": 20,
            "name": "Nagarik Post",
            "icon": "/images/folder.png",
            "kind": "folder",
            "position": "top-20 left-96",
            "windowPosition": "top-[48vh] right-12",
            "children": [
                {
                    "id": 1,
                    "name": "Nagarikpost News.txt",
                    "icon": "/images/txt.png",
                    "kind": "file",
                    "fileType": "txt",
                    "position": "top-5 left-10",
                    "description": [
                        "The Head News section highlights the top and most impactful stories of the day across Nepal and the world.",
                        "It displays breaking headlines, major political updates, government announcements, economic changes, and national incidents.",
                        "Head News also includes important international events that affect Nepali readers.",
                        "Stories are automatically sorted based on relevance, urgency, and trending metrics.",
                        "A real-time update system ensures users always see the latest and most accurate headlines.",
                        "The section features concise summaries so readers can quickly understand key points without opening full articles.",
                        "Users can browse headlines by category such as Politics, Society, Economy, Sports, and Breaking News.",
                        "A highlight banner showcases the top 3–5 stories of the day for fast access.",
                        "Multimedia support allows head news to include images, short videos, and infographics.",
                        "Each headline links to a full article with detailed reporting, photos, and related stories.",
                    ]
                },
                {
                    id: 2,
                    name: "nagarikpost.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://nagarikpost.com",
                    position: "top-10 right-20",
                },
                {
                    "id": 4,
                    "name": "Nagarikpost Page.png",
                    icon: "/images/image.png",
                    "kind": "file",
                    "fileType": "img",
                    "position": "top-30 right-80",
                    imageUrl: "/images/project-4.png",
                },
                {
                    "id": 5,
                    "name": "Admin Dashboard.txt",
                    "icon": "/images/txt.png",
                    "kind": "file",
                    "fileType": "txt",
                    "position": "top-65 left-10",
                    "description": [
                        "The Admin Dashboard is designed for easy management of news and content.",
                        "Admins can create, edit, publish, and schedule articles directly from the dashboard.",
                        "It includes user management, category control, analytics, and media uploads.",
                        "The interface ensures efficient workflow for reporters, editors, and administrators."
                    ]
                }
            ]
        },

    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/suren.png",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/gal2.jpg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/gal3.jpg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/suren.png",
            description: [
                "Hey! I’m Surendra 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
                "I specialize in JavaScript, React, Flutter, Laravel, C# (.NET) and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
                "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
                "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };