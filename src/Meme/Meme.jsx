import {interpolate, spring, useCurrentFrame, useVideoConfig, Img, Video} from 'remotion';

export const Meme = ({meme={}}) => {
  console.log("meme, ", meme);
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
  return (
		<div style={{display: "flex", flexDirection:"column", width:"100%"}}>
			<h1
				style={{
					fontFamily: 'SF Pro Text, Helvetica, Arial',
					fontWeight: 'bold',
					fontSize: 20,
					textAlign: 'center',
					top: 50,
					width: '100%',
          color: 'white',
				}}
			>
				Made by {meme?.data?.author}
			</h1>
			<h1
				style={{
					fontFamily: 'SF Pro Text, Helvetica, Arial',
					fontWeight: 'bold',
					fontSize: 30,
					textAlign: 'center',
					top: 50,
					width: '100%',
          color: 'white',
				}}
			>
				{meme?.data?.title}
			</h1>
      {(meme?.data?.post_hint ==="image") ?
			<Img style={{height:"100vh", width:"fitContent", alignSelf:"center"}} src={meme?.data?.url} />
      : null
      }
		</div>
	);
}