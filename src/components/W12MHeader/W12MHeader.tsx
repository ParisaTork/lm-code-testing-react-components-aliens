const W12MHeader: React.FC = () => {
	let audio = new Audio("./vogon.m4a")

	const start = () => {
	  audio.play()
	}

	const pause = () => {
	  audio.pause()
	}

	return (
		<div>
			<button id="play" onClick={start}>Play</button>
			<button id="pause" onClick={pause}>Pause</button>
		<ul>
			<li>Each species may only submit ONE W-12-M form.</li>
			<li>
				Any mistakes will guarantee rejection and your planet will NOT be
				spared.
			</li>
		</ul>
		</div>
	);
};

export default W12MHeader;
