export default function toggleListener(sb, show, hide, grid, none, block): any {
	return addEventListener("click", () => {
		sb.style.display = grid;
		show.style.display = none;
		hide.style.display = block;
	});
}
