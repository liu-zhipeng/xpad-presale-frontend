import React from 'react'
import Particles from "react-tsparticles";

const ParticlesBg = () => {
    return (
        <Particles
            options={{
                backgroundMode: {
                    enable: true,
                    zIndex: 0
                },
                particles: {
                    number: {
                        value: 100,
                        limit: 100,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#ffffff"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        // image: {
                        //     src: "images/github.svg",
                        //     width: 100,
                        //     height: 100
                        // }
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.5,
                            sync: false
                        }
                    },
                    size: {
                        value: .5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 10,
                            size_min: 5,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 100,
                        color: "#ffffff",
                        opacity: 1,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        // onHover: {
                        //     enable: false,
                        //     mode: "bubble",
                        //     parallax: {
                        //         enable: false,
                        //         force: 60,
                        //         smooth: 10
                        //     }
                        // },
                        // onClick: {
                        //     enable: false,
                        //     mode: "push"
                        // },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            lineLinked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 100,
                            duration: 2,
                            opacity: 1,
                            //   speed: 2
                        },
                        repulse: {
                            distance: 5
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                // backgroundMask: {
                //     enable: true,
                //     cover: {
                //         color: {
                //             value: {
                //                 r: 0,
                //                 g: 0,
                //                 b: 0
                //             }
                //         },
                //         opacity: 1
                //     }
                // },
                retina_detect: true,
                fps_limit: 60,
                background: {
                    color: {
                        value: {
                            r: 0,
                            g: 0,
                            b: 0
                        }
                    }
                    // image:
                    //     "url('https://cdn.matteobruni.it/images/particles/background3.jpg')"
                }
            }}
        />
    )
}

export default ParticlesBg
