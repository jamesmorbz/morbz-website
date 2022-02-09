import React, { useEffect, useRef } from 'react';
import '../../App.css'

function MatrixBackground({ timeout = 50 }) {
    const canvas = useRef();

    useEffect(() => {
        const context = canvas.current.getContext('2d');

        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.current.width = window.innerWidth;
        canvas.current.height = window.innerHeight;

        context.fillStyle = '#000000';
        context.fillRect(0, 0, width, height);

        const columns = Math.floor(width / 20) + 1;
        const yPositions = Array.from({ length: columns }).fill(0);

        context.fillStyle = '#c73f4a';
        context.fillRect(0, 0, width, height);

        const matrixEffect = () => {
            context.fillStyle = '#0001';
            context.fillRect(0, 0, width, height);
            
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0
            context.shadowBlur = 0;
            context.fillStyle = '#c73f4a';
            context.font = '15pt monospace';
            
            yPositions.forEach((y, index) => {
                const text = String.fromCharCode(Math.random() * 128);
                const x = index * 20;
                context.fillText(text, x, y);

                if (y > 100 + Math.random() * 10000) {
                    yPositions[index] = 0;
                } else {
                    yPositions[index] = y + 20;
                }
            });
            
            context.font = "30px Tahoma";
            var gradient = context.createLinearGradient(0, 0, 1000, 1000);
            gradient.addColorStop(0, "#AE67FA");
            gradient.addColorStop(1, "#F49867");
            context.fillStyle = gradient;
            context.textAlign = "center";
            context.fillText("Error 404: Page Not Found", width/2, height/3);
        };

        const interval = setInterval(matrixEffect, timeout);
        return () => {
            clearInterval(interval);
        };
    }, [canvas, timeout]);

    return (
        <div>
            <canvas ref={canvas} />
        </div>
    );
}

export default MatrixBackground;