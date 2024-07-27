import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import logo from '../images/LOGOKOUME.svg';

import TextPlugin from 'gsap/TextPlugin';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin)
const HomePage = () => {
    const container = useRef();
    const logoRef = useRef(null);
    const titleRef = useRef(null);
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);

    const { contextSafe } = useGSAP({ scope: container });

    const onClickGood = contextSafe(() => {

        gsap.to('.good', { scale: 2, duration: 0.3, delay: 0 });
        gsap.to('.good', { scale: 1, duration: 1, delay: 0 });
    });

    const handleHoverCard = contextSafe((e) => {
        // console.log(gsap.getProperty(e.target, 'backgroundColor'));
        const currentBg = gsap.getProperty(e.target, 'backgroundColor');

        if (currentBg !== 'rgba(0, 0, 0, 0)') {
            gsap.to('.tag', { color: currentBg, duration: .5, delay: 0 });
        }
    });
    const handleMouseLeaveCard = contextSafe((e) => {
        gsap.to('.tag', { color: '#4053FE', duration: 0, delay: 0 });
    });

    useGSAP(() => {
        gsap.from(logoRef.current, { opacity: 0, y: -50, duration: 1 });
        gsap.from(titleRef.current, { opacity: 0, y: 50, duration: 1, delay: 0.5 });
        gsap.from(sectionRef.current, { opacity: 0, duration: 1, delay: 1 });

        cardRefs.current.forEach((card, index) => {
            gsap.from(card, {
                opacity: 0, scale: 1,
                y: -50,
                duration: 1,
                delay: 1.5 + index * 0.2,
            });
        });

    }, { scope: container });




    useEffect(() => {

        const texts = [
            "CAMP DES AGNEAUX",
            "CAMP DE LA FONDATION ",
            "CAMP DES LEADERS"
        ];

        let index = 0;

        const interval = setInterval(() => {
            gsap.to('.tag', {
                duration: 2,
                text: texts[index],
                ease: "none",
            });
            index = (index + 1) % texts.length;
        }, 8000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div ref={container} className='page HomePage'>
            <div className="logo good" onClick={onClickGood} ref={logoRef}>
                <img src={logo} alt="" />
            </div>

            <div className="title" ref={titleRef}>
                <h1>Koumé Bertoua, 2024</h1>
                <h1 className='tag'>Fondation & Révolution</h1>
            </div>

            <div className="section" ref={sectionRef}>
                <div className="left">
                    <p className="text">Inscris-toi aux différents Camps que nous avons pour toi cette année</p>
                    <div className='text2'><span>The place to be !!!</span></div>
                </div>

                <div className="cardgroup">
                    <div className="redcard card" ref={(el) => (cardRefs.current[0] = el)} onMouseEnter={(e) => handleHoverCard(e)} onMouseLeave={(e) => handleMouseLeaveCard(e)} >
                        <div className="cardContainer">
                            <div className="cardtitle">Camp Biblique Des Agneaux</div>
                            <div className="date">Du 21 au 30 juillet 2024 à Koume</div>
                            <Link to={'/'} className="btn">
                                <div className="t">S’INSCRIRE</div>
                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="2" height="2" fill="white" />
                                    <rect y="6" width="2" height="2" fill="white" />
                                    <rect x="4" y="3" width="2" height="2" fill="white" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="card greencard" ref={(el) => (cardRefs.current[1] = el)} onMouseEnter={(e) => handleHoverCard(e)} onMouseLeave={(e) => handleMouseLeaveCard(e)}>
                        <div className="cardContainer">
                            <div className="cardtitle">Camp Biblique De La Fondation</div>
                            <div className="date">Du 21 au 30 juillet 2024 à Koume</div>
                            <Link to={'/'} className="btn">
                                <div className="t">S’INSCRIRE</div>
                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="2" height="2" fill="white" />
                                    <rect y="6" width="2" height="2" fill="white" />
                                    <rect x="4" y="3" width="2" height="2" fill="white" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="card bluecard" ref={(el) => (cardRefs.current[2] = el)} onMouseEnter={(e) => handleHoverCard(e)} onMouseLeave={(e) => handleMouseLeaveCard(e)}>
                        <div className="cardContainer">
                            <div className="cardtitle">Camp Biblique Des Leadeurs</div>
                            <div className="date">Du 01 au 15 août 2024 à Koumé</div>
                            <Link to={'/'} className="btn">
                                <div className="t">S’INSCRIRE</div>
                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="2" height="2" fill="white" />
                                    <rect y="6" width="2" height="2" fill="white" />
                                    <rect x="4" y="3" width="2" height="2" fill="white" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default HomePage;
