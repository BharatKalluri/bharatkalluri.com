import { Stack, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";

const AudioVisualizer = () => {
    const { colorMode } = useColorMode();
    useEffect(() => {
        const audioContext = new AudioContext();
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

                const track = audioContext.createMediaElementSource(
                    audioElement
                );
                track.connect(audioContext.destination);

                // Analyzer node
                const analyser = audioContext.createAnalyser();
                analyser.fftSize = 128;
                analyser.connect(audioContext.destination);
                track.connect(analyser);

                const WIDTH = canvasElement.width;
                const HEIGHT = canvasElement.height;

                const bufferLength = analyser.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);
                const barWidth = (WIDTH / bufferLength) * 2.5;
                let barHeight;
                let x = 0;

                const MATTE_BLACK = "#1A202C";
                const WHITE = "#FFFFFF";

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
                            canvasCtx.fillRect(x, 0, barWidth, barHeight);
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
            <Stack direction="column">
                <Stack direction="row" style={{ width: "100%" }} p={2}>
                    <input
                        type="file"
                        id="audioPicker"
                        accept="audio/*"
                        style={{ width: "30%" }}
                    />
                    <audio style={{ width: "70%" }}>No support for audio</audio>
                </Stack>
                <canvas
                    id="canvas"
                    style={{
                        width: "100%",
                        height: "90vh",
                    }}
                ></canvas>
            </Stack>
        </>
    );
};

export default AudioVisualizer;
