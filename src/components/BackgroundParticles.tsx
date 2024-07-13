import { useCallback, useEffect, useState } from "react";
import type { Container, Engine } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import options from '@/assets/particleConfig'

const particleConfig: any = options

const BackgroundParticles = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
        await loadSlim(engine);
        }).then(() => {
        setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };
    
    if (init) {
        return (
            <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particleConfig}
            />
        );
    }
}
export default BackgroundParticles;