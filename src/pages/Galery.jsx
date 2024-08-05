import * as React from "react";
import OutlineBtn from '../components/OutlineBtn'
import Lightbox from "yet-another-react-lightbox";
import { Link } from "react-router-dom";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Loader from "react-js-loader";

const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];

export default function Galery() {
    const [index, setIndex] = React.useState(-1);
    const [slides, setSlides] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');

    const color = '#4053FE';

    function assetLink(asset) {
        return `https://cmfidouala.com/Koume2024/${encodeURIComponent(asset)}`;
    }

    // Fonction pour obtenir les images de l'API
    async function fetchImages() {
        const response = await fetch('https://cmfidouala.com/Koume2024/index.php');
        if (!response.ok) {
            setError('Failed to fetch images')
            throw new Error('Failed to fetch images');
        }
        return response.json();
    }

    React.useEffect(() => {
        // Fonction pour construire les slides
        async function buildSlides() {
            const images = await fetchImages();
            const slides = images.map((asset) => {
                // Ici, vous devez connaître ou estimer la largeur et la hauteur des images.
                // Vous pouvez remplacer ces valeurs par des valeurs dynamiques si vous avez accès à ces informations.
                // const width = 3840; // Valeur par défaut, remplacez-la si nécessaire
                // const height = 2160; // Valeur par défaut, remplacez-la si nécessaire
                const width = 1080; // Valeur par défaut, remplacez-la si nécessaire
                const height = 720; // Valeur par défaut, remplacez-la si nécessaire

                return {
                    src: assetLink(asset),
                    width,
                    height,
                    srcSet: breakpoints.map((breakpoint) => ({
                        src: assetLink(asset, breakpoint),
                        width: breakpoint,
                        height: Math.round((height / width) * breakpoint),
                    })),
                };
            });

            return slides;
        }

        const scrollToTop = () => {
            document.querySelector(".App-container").scrollTo({ top: 0, behavior: 'smooth' });
        };
        scrollToTop();

        buildSlides().then((slides) => {
            console.log(slides);
            setSlides(slides);
            setLoading(false);
        }).catch((error) => {
            console.error('Error building slides:', error);
            setLoading(false);
        });


    }, []);

    return (
        <div className="page CAMPS Leadercamp">
            <div className="header">
                <div className="left">
                    <Link to={'/leader'} className="titlegp">
                        <div className="place tint">KOUME 2024</div>
                        <div className="place">CB. Leadeurs</div>
                    </Link>

                    <div className="dateplace">
                        <div >Aout 01 - 15 <span>/</span> 2024</div>
                        <div>Koumé, Bertoua</div>
                    </div>

                </div>

                <div className="right">
                    <OutlineBtn title="GET TICKETS"></OutlineBtn>
                </div>

            </div>
            <br />
            <br />
            <br />
            <br />
            <h2 className="sectionTitle" style={{ textAlign: 'center' }}>  Parcourez notre galerie & revivez les moments forts.</h2>
            <br />
            <br />
            <br />
            {isLoading ? <Loader type="spinner-circle" bgColor={color} color={color} title={"Chargement..."} size={100} /> : error !== '' ? error : ''}


            <Container maxWidth="100%" sx={{ textAlign: "center" }}>

                <Box component="main" sx={{ mb: 3 }}>
                    <RowsPhotoAlbum
                        photos={slides}
                        onClick={({ index: current }) => setIndex(current)}
                    />
                    <Lightbox
                        index={index}
                        slides={slides}
                        open={index >= 0}
                        close={() => setIndex(-1)}
                    />
                </Box>
            </Container>

        </div>
    );
}
