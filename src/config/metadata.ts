import type { Metadata } from "next";

export const metaData: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_CURRENT_SITE_URL || "https://seeaboutmyself.netlify.app"),
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Kaustubh Portfolio",
        title:
            "Kaustubh Kumbharkar | Full Stack Web Developer | React, Node.js, MongoDB in Pune",
        description:
            "Discover Kaustubh Kumbharkar, a Full Stack Web Developer from Pune, India. Crafting scalable and high-performance websites and applications with React, Node.js, Express.js, and MongoDB. Explore his portfolio showcasing expertise in MERN stack development, leadership skills, and coding achievements.",
        images: [
            {
                url: "/og-image.webp",
                alt: "Kaustubh Kumbharkar | Full Stack Web Developer | React, Node.js, MongoDB",
                height: 630,
                width: 1200,
            },
        ],
    },
    title:
        "Kaustubh Kumbharkar | Full Stack Web Developer | React, Node.js, MongoDB in Pune",
    description:
        "Discover Kaustubh Kumbharkar, a Full Stack Web Developer from Pune, India. Crafting scalable and high-performance websites and applications with React, Node.js, Express.js, and MongoDB. Explore his portfolio showcasing expertise in MERN stack development, leadership skills, and coding achievements.",
    keywords:
        "Kaustubh Kumbharkar, Full Stack Web Developer, React Developer, Node.js Developer, MongoDB Developer, Express.js Developer, MERN Stack Developer, Web Development, Portfolio, JavaScript Developer, Pune, India, HTML5, CSS, Git, GitHub, Tailwind CSS, MySQL, C++, Leadership, Open Source",
    robots:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    authors: {
        name: "Kaustubh Kumbharkar",
        url: "https://github.com/kaustubh0601",
    },
};
