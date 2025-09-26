class GiftCard {
    constructor(value, recipient) {
        this.value = value;
        this.recipient = recipient;
    }

    render() {
        return `
            <div class="gift-card">
                <h2>Gift Card</h2>
                <p>Value: $${this.value}</p>
                <p>Recipient: ${this.recipient}</p>
            </div>
        `;
    }
}

export default GiftCard;