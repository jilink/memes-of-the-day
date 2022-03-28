import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Meme = ({meme={}}) => {
  console.log("meme, ", meme);
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
  return (
		<h1
			style={{
				fontFamily: 'SF Pro Text, Helvetica, Arial',
				fontWeight: 'bold',
				fontSize: 30,
				textAlign: 'center',
				position: 'absolute',
				top: 50,
				width: '100%',
			}}
		>
    {meme?.data?.author_flair_text}
    </h1>
  )
}