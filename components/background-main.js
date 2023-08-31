import React, { useEffect } from 'react';

const CircuitComponent = () => {
    useEffect(() => {
        const circuit = document.querySelector("#box");

        const position = (e) => {
            circuit.style.setProperty('--xPos', e.clientX + "px");
            circuit.style.setProperty('--yPos', e.clientY + "px");
        };

        circuit.addEventListener("mousemove", position);
        circuit.addEventListener("touchmove", position);

        return () => {
            circuit.removeEventListener("mousemove", position);
            circuit.removeEventListener("touchmove", position);
        };
    }, []);

    return (
        <div className="circuit">
            <div id="box" className="box"></div>
        </div>
    );
};

export default CircuitComponent;
