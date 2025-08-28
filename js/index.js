
function getElement(id) {
    return document.getElementById(id);
}

getElement('call-box').addEventListener('click', function (e) {
    if (e.target.className.includes('cart-btn')) {
        const cartButton = e.target;

        const callTitle = cartButton.parentNode.parentNode.children[1].children[0].innerText
        const callNumber = cartButton.parentNode.parentNode.children[1].children[2].innerText


        let allCoin = getElement('all-coin').innerText;
        if (allCoin < 20) {
            alert("❌ You don't have enough coins. You need at least 20 coins to make a call.!");
            return;
        }
        let currentTotal = allCoin - 20;
        getElement('all-coin').innerText = currentTotal;

        alert(`📞 Calling ${callTitle} at ${callNumber}...`);

        const history = getElement('cart-container');
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="bg-gray-100 p-3 rounded-xl mt-2 md:flex justify-between items-center">
               <div>
                <p class="font-bold">${callTitle}</p>
                <p class="text-gray-500">${callNumber}</p>
               </div>
                <p class=" text-sm font-semibold"> ${timeString}</p>
            </div>
        `;
        history.append(div);
    }
})

document.getElementById('btn-clear').addEventListener('click', function () {
    const history = getElement('cart-container');
    history.innerHTML = '';
})

getElement('call-box').addEventListener('click', function (e) {
    if (e.target.closest('.love-button')) {
        let loveCount = parseInt(getElement('love-number').innerText);
        getElement('love-number').innerText = loveCount + 1;

        const btn = e.target.closest('.love-button');
    }
});

getElement('call-box').addEventListener('click', function (e) {
    if (e.target.closest('.copy-btn')) {

        let copyCount = parseInt(getElement('copy-number').innerText);
        getElement('copy-number').innerText = copyCount + 1;
        const btn = e.target.closest('.copy-btn');

        const callNumber = btn.parentNode.parentNode.children[1].children[2].innerText;

        navigator.clipboard.writeText(callNumber).then(() => {
            alert(`Number copied: ${callNumber}`);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
});
