import React from "react";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

export default function Particless() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="relative !overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0"
        options={{
          background: {
            color: {
              // value: "#0d47a1",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#FF0000",
            },
            links: {
              color: "#FF0000",
              distance: 150,
              enable: true,
              opacity: 1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 20,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "image",
              images: [
                {
                  src: "/faidenimage/1.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "/faidenimage/2.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "/faidenimage/3.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "/faidenimage/4.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "/faidenimage/5.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "/faidenimage/6.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "/faidenimage/7.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "/faidenimage/8.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "/faidenimage/9.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "/faidenimage/10.png",
                  width: 100,
                  height: 100,
                },
              ],
            },
            size: {
              value: { min: 10, max: 30 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Your content section goes here */}
      </div>
    </div>
  );
}
