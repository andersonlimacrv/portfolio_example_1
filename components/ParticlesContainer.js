import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';


const ParticlesContainer = () => {
    //init
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => { }, []);

    return (
        <Particles
            className='w-full h-full absolute translate-z-0'
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                background: { color: { value: "" } },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push',
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 10,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    }
                },
                particles: {
                    color: {
                        value: "#e0e0e0",

                    },
                    links: {
                        color: "#f5f5f5",
                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: .5,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.1,

                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesContainer;
