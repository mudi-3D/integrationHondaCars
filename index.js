"use-strict";

let currentCar = null;

const cars = {

    city_hatchback: {
        imgBanner: "https://mudi.com.co/Assets/Imagenes/banner3dHondaTest.webp",
        linkExperience: "https://mudi.com.co/experiences/HondaAutos/?car=cityHatchback"
    },
    city_sedan: {
        imgBanner: "https://mudi.com.co/Assets/Imagenes/banner3dHondaTest.webp",
        linkExperience: "https://mudi.com.co/experiences/HondaAutos/?car=citySedan"
    },
    civic: {
        imgBanner: "https://mudi.com.co/Assets/Imagenes/banner3dHondaTest.webp",
        linkExperience: "https://mudi.com.co/experiences/HondaAutos/?car=civic"
    },
    wrv: {
        imgBanner: "https://mudi.com.co/Assets/Imagenes/banner3dHondaTest.webp",
        linkExperience: "https://mudi.com.co/experiences/HondaAutos/?car=wrv"
    },
    hrv: {
        imgBanner: "https://mudi.com.co/Assets/Imagenes/banner3dHondaTest.webp",
        linkExperience: "https://mudi.com.co/experiences/HondaAutos/?car=hrv"
    },
    zrv: {
        imgBanner: "https://mudi.com.co/Assets/Imagenes/banner3dHondaTest.webp",
        linkExperience: "https://mudi.com.co/experiences/HondaAutos/?car=zrv"
    },
    crv: {
        imgBanner: "https://mudi.com.co/Assets/Imagenes/banner3dHondaTest.webp",
        linkExperience: "https://mudi.com.co/experiences/HondaAutos/?car=crv"
    },
    pilot: {
        imgBanner: "https://mudi.com.co/Assets/Imagenes/banner3dHondaTest.webp",
        linkExperience: "https://mudi.com.co/experiences/HondaAutos/?car=pilot"
    }

};

/** Partición de URL actual para identifcar en que carro PDP  estoy */
const currentURL = location.href.split('/');

/** Asignación de información  */
switch (currentURL.length - 1) {
    case "city-hatchback":
        currentCar = cars.city_hatchback
        break;
    case "city-lx-sedan":
        currentCar = cars.city_sedan
        break;
    case "civic-ehev":
        currentCar = cars.civic
        break;
    case "wr-v":
        currentCar = cars.wrv
        break;
    case "hr-v":
        currentCar = cars.hrv
        break;
    case "zr-v":
        currentCar = cars.zrv
        break;
    case "nueva-cr-v":
        currentCar = cars.crv
        break;
    case "pilot":
        currentCar = cars.pilot
        break;
    default: currentCar = null;
};

/** Función inciializadora de la experiencia */
function main() {

    /* creación de estilos Para el modal y esxpereiencia 3D  interactiva */
    const styles = document.createElement('LINK')
    styles.type = "text/css";
    styles.rel = "stylesheet"
    styles.href = "https://cdn.jsdelivr.net/gh/mudi-3D/integrationHondaCars@latest/index.css"
    styles.id = "stylesMudiExperience3DInteractive";

    document.head.appendChild(styles);


    /** Declaración y limpieza del contenedor padre. */
    const father = document.querySelector('[src = "https://autos.honda.com.co/themes/honda/assets/img/banner3dweb.jpg"]').parentElement.parentElement;
    father.innerHTML = ``;

    const banner = document.createElement('IMG');
    banner.src = currentURL.imgBanner;
    banner.classList.add('BannerCarMudi3DInteractive');

    /** Función para crear el modal que contiene la experiencia 3D interactiva  */
    const createModal = () => {
        const modal = document.createElement('DIV');
        modal.classList.add('ModalMudi3D');
        modal.innerHTML = `
            <div class="modalContainerMudi3D">
                <h2 class="modalMudiClose">X<h2>
                <iframe src="${currentCar.linkExperience}" class="iframeModalMudi3D" ></iframe> 
            <div>
        `;

        modal.querySelector('.modalMudiClose').addEventListener('click', () => {
            const currentModal = document.querySelector('.ModalMudi3D')
            currentModal && currentModal.remove();
        });

        document.appendChild(modal);
    };

    banner.addEventListener('click', () => {
        createModal();
    });

    father.appendChild(banner);

};

currentCar !== null && main();

