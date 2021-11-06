import { Heading } from "@chakra-ui/react";
import AudioVisualizer from "../../components/AudioVisualizer";
import Layout from "../../components/Layout";

const AudioVisualizerPage = () => {
	return (
		<Layout title="Audio Visualizer" relativeCanonicalURL="/playground/audio-visualizer">
			<Heading>Audio Visualizer</Heading>
			<AudioVisualizer />
		</Layout>
	);
};
export default AudioVisualizerPage;
