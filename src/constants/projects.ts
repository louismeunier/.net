interface Project {
    name: string
    description: string
    source: string
    live?: string
    technologies: string[]
}

export const projects:Project[] = [
    {
        name: "what's my rank",
        description: "A Rubik's Cube competition utility for determining potential ranks for results if done in official competition.",
        source: "https://github.com/louismeunier/whatsmyrank",
        live: "https://whatsmyrank.netlify.app",
        technologies: [
            "svelte",
            "mysql",
            "bash"
        ]
    },
    {
        name: "college email statistics",
        description: "Automatically generated statistics about emails colleges have sent to me.",
        source: "https://github.com/louismeunier/college-emails",
        live: "college-emails.louismeunier.net",
        technologies: [
            "svelte",
            "nodejs",
            "googlecloud"
        ]
    },
    {
        name: "BottingAtHome",
        description: "Discord bot created for the CubingAtHome Rubik's Cube Competition Discord server.",
        source: "https://github.com/Cubing-at-Home/cubingathome-bot",
        technologies: [
            "nodejs",
            "firebase"
        ]
    },
    {
        name: "CubingAtHome",
        description: "Website for the virtual Rubik's Cube competition series organied by CubingUSA.",
        source: "https://github.com/Cubing-at-Home/cubing-at-home",
        live: "https://cubingathome.com",
        technologies: [
            "react",
            "firebase",
            "materialui"
        ]
    }
]