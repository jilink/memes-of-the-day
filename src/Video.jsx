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
	const getMemes = async (sub) => {
		const res = await fetch(`https://www.reddit.com/r/${sub}/top.json?t=day&limit=6`)
		if (res.status !== 200) {
			console.log("error")
			return [];
		}
		const data = await res.json();
		return data.data.children
	}

	const filterMemes = async () => {
		let tmpMemes = []
		for (const sub of subbreddits) {
			const fetchedMemes = await getMemes(sub);
			tmpMemes = tmpMemes.concat(fetchedMemes);
			console.log(tmpMemes);
		}
		const onlyImages = tmpMemes.filter(child => child.data.post_hint==="image")
		console.log("onlyImages", onlyImages)
		setBestMemes(onlyImages)
	}
	filterMemes();
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
				durationInFrames={4000}
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
