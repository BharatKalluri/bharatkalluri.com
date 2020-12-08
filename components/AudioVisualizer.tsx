import { Stack, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";

const AudioVisualizer = () => {
    const { colorMode } = useColorMode();
    useEffect(() => {
        const audioContext = new (window.AudioContext ||
            // @ts-ignore
            window.webkitAudioContext)();
        const audioElement = document.querySelector("audio");
        const audioPickerElement = document.getElementById("audioPicker");
        const canvasElement = document.getElementById(
            "canvas"
        ) as HTMLCanvasElement;
        canvasElement.width = window.innerWidth;
        canvasElement.height = window.innerHeight;
        const canvasCtx = canvasElement.getContext("2d");
        if (
            audioElement !== null &&
            canvasElement !== null &&
            canvasCtx !== null &&
            audioPickerElement !== null
        ) {
            audioPickerElement.onchange = function () {
                // @ts-ignore
                const files = this.files;
                audioElement.src = URL.createObjectURL(files[0]);
                audioElement.load();
                audioElement.play();

                // Root node
                const track = audioContext.createMediaElementSource(
                    audioElement
                );
                // Audio out
                track.connect(audioContext.destination);

                // Analyzer node
                const analyser = audioContext.createAnalyser();
                analyser.fftSize = 128;
                track.connect(analyser);

                // Creating the array to store the frequency data
                const bufferLength = analyser.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);

                // Some useful constants
                const WIDTH = canvasElement.width;
                const HEIGHT = canvasElement.height;
                const barWidth = (WIDTH / bufferLength) * 2.5;
                let barHeight;
                let x = 0;

                // Colors used for plotting
                const MATTE_BLACK = "#1A202C";
                const WHITE = "#FFFFFF";

                // The function which will get called on each repaint
                function draw() {
                    requestAnimationFrame(draw);
                    if (canvasCtx !== null) {
                        x = 0;
                        analyser.getByteFrequencyData(dataArray);
                        canvasCtx.fillStyle =
                            colorMode === "light" ? WHITE : MATTE_BLACK;
                        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
                        for (let i = 0; i < bufferLength; i++) {
                            barHeight = dataArray[i];
                            canvasCtx.fillStyle =
                                colorMode === "light" ? MATTE_BLACK : WHITE;
                            canvasCtx.fillRect(x, 0, barWidth, barHeight * 3);
                            x += barWidth + 3;
                        }
                    }
                }
                draw();
            };
        }
    }, [colorMode]);

    return (
        <>
            <Stack direction="column" style={{ width: "100%" }} >
                <Stack direction="row" style={{ width: "100%" }} p={2}>
                    <input
                        type="file"
                        id="audioPicker"
                        accept="audio/*"
                    />
                    <audio>No support for audio</audio>
                </Stack>
                <canvas
                    id="canvas"
                    style={{
                        width: "100%",
                        maxHeight: "250px",
                    }}
                ></canvas>
            </Stack>
        </>
    );
};

export default AudioVisualizer;
