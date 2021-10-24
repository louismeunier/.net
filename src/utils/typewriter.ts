export default function typewriter(node, { delay = 0, speed = 1}) {
    const text = node.textContent;
	const duration = text.length / (speed * 0.01);

	return {
        delay,
		duration,
		tick: t => {
			const i = ~~(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
}