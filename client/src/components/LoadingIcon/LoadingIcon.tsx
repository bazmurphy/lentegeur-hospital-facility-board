import "./LoadingIcon.css";

const LoadingIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
			className="loading-icon"
		>
			<g transform="rotate(0 50 50)">
				<rect x="46" y="21" rx="4" ry="5" width="8" height="10" fill="#269739">
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1.5151515151515151s"
						begin="-1.3888888888888888s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(30 50 50)">
				<rect x="46" y="21" rx="4" ry="5" width="8" height="10" fill="#f1ed0e">
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1.5151515151515151s"
						begin="-1.2626262626262625s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(60 50 50)">
				<rect x="46" y="21" rx="4" ry="5" width="8" height="10" fill="#b5efb8">
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1.5151515151515151s"
						begin="-1.1363636363636365s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(90 50 50)">
				<rect x="46" y="21" rx="4" ry="5" width="8" height="10" fill="#269739">
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1.5151515151515151s"
						begin="-1.0101010101010102s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(120 50 50)">
				<rect x="46" y="21" rx="4" ry="5" width="8" height="10" fill="#f1ed0e">
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1.5151515151515151s"
						begin="-0.8838383838383839s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(150 50 50)">
				<rect x="46" y="21" rx="4" ry="5" width="8" height="10" fill="#b5efb8">
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1.5151515151515151s"
						begin="-0.7575757575757576s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(180 50 50)">
				<rect x="46" y="21" rx="4" ry="5" width="8" height="10" fill="#269739">
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1.5151515151515151s"
						begin="-0.6313131313131313s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(210 50 50)">
				<rect x="46" y="21" rx="4" ry="5" width="8" height="10" fill="#f1ed0e">
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1.5151515151515151s"
						begin="-0.5050505050505051s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(240 50 50)">
				<rect x="46" y="21" rx="4" ry="5" width="8" height="10" fill="#b5efb8">
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1.5151515151515151s"
						begin="-0.3787878787878788s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(270 50 50)">
				<rect x="46" y="21" rx="4" ry="5" width="8" height="10" fill="#269739">
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1.5151515151515151s"
						begin="-0.25252525252525254s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(300 50 50)">
				<rect x="46" y="21" rx="4" ry="5" width="8" height="10" fill="#f1ed0e">
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1.5151515151515151s"
						begin="-0.12626262626262627s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(330 50 50)">
				<rect x="46" y="21" rx="4" ry="5" width="8" height="10" fill="#b5efb8">
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1.5151515151515151s"
						begin="0s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
		</svg>
	);
};

export default LoadingIcon;
