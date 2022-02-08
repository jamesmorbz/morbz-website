import useScript from '../../hooks/useScript';

export default function Matrix() {
    return (
        <canvas width="800" height="800" id="canvas">
            {useScript('./matrix')}
        </canvas>
    );
}