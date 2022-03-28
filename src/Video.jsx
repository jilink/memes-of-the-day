import {useEffect, useState} from 'react';
import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {Memes} from './Memes';
import {Meme} from './Meme/Meme';

const subbreddits = ["memes", "dankmemes", "funny"]

export const RemotionVideo = () => {
	const [bestMemes, setBestMemes] = useState([]);
	useEffect(() => {
		fetch("https://www.reddit.com/r/memes/top.json?t=day&limit=10")
		.then(res => {
			if (res.status !== 200) {
				console.log("error")
				return
			}
			return res.json()
		})
		.then(data => {
			console.log(data.data.children)
			setBestMemes(data.data.children)
		})
	}, []);

	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion guys',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
				component={Subtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="memes"
				component={Memes}
				durationInFrames={1000}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					memes: bestMemes,
				}}
			/>
			<Composition
				id="meme"
				component={Meme}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
