import Lottie from 'react-lottie';
import animationData from '../../lotties/alien.json';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
	  preserveAspectRatio: "xMidYMid slice"
	}
  };

const W12MHeader = () => (
	<div>
	<ul>
		<li>Each species may only submit ONE W-12-M form.</li>
		<li>
			Any mistakes will guarantee rejection and your planet will NOT be
			spared.
		</li>
	</ul>
	<Lottie 
			options={defaultOptions}
			height={200}
			width={200}
	/>
	</div>
);

export default W12MHeader;
