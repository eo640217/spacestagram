import React from "react";
import Particles from "react-tsparticles";

function Particle({ value, type, value_area, color }) {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: value,
              density: {
                enable: true,
                value_area: value_area,
              },
            },
            color: {
              value: color,
            },
            shape: {
              type: type,
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4.16725702807898,
              random: true,
              anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "bounce",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          // interactivity: {
          //   detect_on: "canvas",
          //   events: {
          //     onhover: {
          //       enable: true,
          //       mode: "grab",
          //     },
          //     resize: true,
          //   },
          //   modes: {
          //     grab: {
          //       distance: 200,
          //       line_linked: {
          //         opacity: 0.1,
          //       },
          //     },
          //     bubble: {
          //       distance: 400,
          //       size: 40,
          //       duration: 2,
          //       opacity: 8,
          //       speed: 1,
          //     },
          //     repulse: {
          //       distance: 200,
          //       duration: 0.4,
          //     },
          //     push: {
          //       particles_nb: 2,
          //     },
          //   },
          // },
          retina_detect: true,
        }}
      />
    </>
  );
}

export default Particle;
