setTimeout(() => {
	let $nftButton = $(`<div class="nft-button button-large"><button>Submit as Intent NFT</button></div>`);
	$nftButton.on("click", () => {
		const canvas = window.$canvas[0];
		if (!canvas) return;
		canvas.toBlob((blob) => {
			window.systemHooks.onNftSubmit(blob);
		});
	});
	window.$bottom.append($nftButton);
}, 600);
