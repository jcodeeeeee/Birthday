document.addEventListener('DOMContentLoaded', () => {
    const giftCardContainer = document.getElementById('gift-card-container');

    function createGiftCard(value, recipient) {
        const card = document.createElement('div');
        card.classList.add('gift-card');
        card.innerHTML = `
            <h2>Gift Card</h2>
            <p>Value: $${value}</p>
            <p>Recipient: ${recipient}</p>
        `;
        giftCardContainer.appendChild(card);
    }

    document.getElementById('add-gift-card').addEventListener('click', () => {
        const value = document.getElementById('gift-card-value').value;
        const recipient = document.getElementById('gift-card-recipient').value;
        createGiftCard(value, recipient);
    });
});