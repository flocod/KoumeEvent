import * as React from "react";
import OutlineBtn from '../components/OutlineBtn'
import Lightbox from "yet-another-react-lightbox";
import { Link } from "react-router-dom";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import slides from "../slide";

export default function Galery() {
    const [index, setIndex] = React.useState(-1);


    React.useEffect(() => {

        const scrollToTop = () => {
            document.querySelector(".App-container").scrollTo({ top: 0, behavior: 'smooth' });
        };

        scrollToTop();

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

            <Container maxWidth="100%" sx={{ textAlign: "center" }}>

                <Box component="main" sx={{ mb: 3 }}>
                    <RowsPhotoAlbum
                        photos={slides}
                        targetRowHeight={150}
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
