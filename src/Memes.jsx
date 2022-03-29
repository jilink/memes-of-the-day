import {interpolate, Sequence, useCurrentFrame, useVideoConfig, Audio} from 'remotion';
import {Meme} from './Meme/Meme';
import falling from "./audio/falling.mp3";

export const Memes = ({memes=[]}) => {
  console.log("bestMemes, ", memes);
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 25;
  const timePerMeme = parseInt(videoConfig.durationInFrames / memes.length);

	return (
		<div style={{flex: 1, backgroundColor: 'black'}}>
			<div style={{opacity}}>
				{memes.map((meme, index) => (
					<Sequence
						key={index}
						from={index * timePerMeme}
						durationInFrames={timePerMeme}
					>
						<Meme meme={meme} />
					</Sequence>
				))}
			</div>
			<Audio src={falling} />
		</div>
	);
};
