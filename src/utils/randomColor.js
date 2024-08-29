const getRandomNumber = () => {
    return Math.floor(Math.random() * 15);
};

export const getRandomColor = () => {
    let color = '#';
    const random = '0123456789abcdef';
    for (let i = 0; i < 6; i++) {
        color += random[getRandomNumber()];
    }
    return color;
};