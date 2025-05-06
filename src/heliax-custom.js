setTimeout(() => {
	let $nftButton = $(`<div class="nft-button button-large"><button>Submit as Intent NFT</button></div>`);
	$nftButton.on("click", () => {
		window.systemHooks.onNftSubmit(window.$canvas);
	});
	window.$bottom.append($nftButton);
}, 600);
