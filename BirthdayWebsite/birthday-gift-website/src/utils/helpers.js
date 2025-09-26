export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

export const generateUniqueId = () => {
    return 'giftcard-' + Math.random().toString(36).substr(2, 9);
};

export const calculateGiftCardValue = (amount, discount) => {
    return amount - (amount * (discount / 100));
};