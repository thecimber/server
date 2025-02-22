import { DOWNLOAD_TUTORIAL } from "../constants";

export const gamesPs3 =
    [
        {
            id: 1,
            name: 'Sonic the Hedgehog',
            image: 'sonic-the-hedgehog-ps3-300x350.webp',
            format: ['iso', 'pkg'],
            language: ['Español'],
            genre: ['Acción', 'Aventura', 'Plataforma'],
            size: '7.56 GB',
            downloadFormat: ['mediafire', 'Gofile'],
            link: '',
            downloadTutorial: DOWNLOAD_TUTORIAL,
            date: '',
            downloadMethods: [
                {
                    name: "Mediafire",
                    icon: "fa-solid fa-download", 
                    color: "btn-primary",
                    link: "https://www.mediafire.com/example"
                },
                {
                    name: "Terabox",
                    icon: "fas fa-box",
                    color: "btn-warning",
                    link: "https://www.terabox.com/example"
                },
                {
                    name: "Repuesto",
                    icon: "fas fa-file-download",
                    color: "btn-success",
                    link: "https://www.gofile.io/example"
                }
            ]
        },
        

    ]
