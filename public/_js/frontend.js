document.addEventListener('DOMContentLoaded', function () {
	const breakpoint =
		window.effiRelatedPages && window.effiRelatedPages.breakpoint
			? parseInt(window.effiRelatedPages.breakpoint, 10)
			: 768;

	const relatedBlocks = document.querySelectorAll(
		'.wp-block-effi-related-pages-related-pages'
	);

	if (!relatedBlocks.length) {
		return;
	}

	const handleResize = () => {
		const isMobile = window.innerWidth < breakpoint;

		relatedBlocks.forEach((block) => {
			const wrapper = block.querySelector('.effi-related-pages-wrapper');
			if (!wrapper) return;

			// We only target grid layouts for the switch
			if (wrapper.classList.contains('is-grid')) {
				if (isMobile) {
					wrapper.style.gridTemplateColumns = '1fr';
				} else {
					// Find the number of columns from the block's attributes in the editor,
					// or extract it from an inline style if set, otherwise reset.
					// This is a simplification; a more robust way would be passing attributes via wp_localize_script for each block.
					// For now, we reset to default behavior.
					wrapper.style.gridTemplateColumns = '';
				}
			}
		});
	};

	window.addEventListener('resize', handleResize);
	handleResize(); // Initial check
});