const connectWalletBtn = document.getElementById('connectWalletBtn');

const getProvider = () => {
    if ('phantom' in window) {
        const provider = window.phantom?.solana;

        if (provider?.isPhantom) {
            return provider;
        }
    }

    window.open('https://phantom.app/', '_blank');
};

connectWalletBtn.addEventListener('click', async () => {
    const provider = getProvider();

    if (provider) {
        try {
            const resp = await provider.connect();
            console.log(resp.publicKey.toString());
            connectWalletBtn.textContent = 'Connected';
        } catch (err) {
            console.error(err);
        }
    }
});
