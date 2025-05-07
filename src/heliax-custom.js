setTimeout(() => {
	let $nftButton = $(`<div class="nft-button button-large"><button>Submit as Intent NFT</button></div>`);
	$nftButton.on("click", () => {
		const canvas = window.$canvas[0];
		if (!canvas) return;
		window.systemHooks.onNftSubmit(canvas.toDataURL());
	});
	window.$bottom.append($nftButton);
}, 600);
