import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Meme} from './Meme/Meme';

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
  const timePerMeme = videoConfig.durationInFrames / memes.length;

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
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
		</div>
	);
};
