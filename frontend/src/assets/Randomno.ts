function getRandomInt(min: number, max: number): number {
    const range = max - min + 1;
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    const randomValue = randomBuffer[0];
    return min + (randomValue % range);
}

export default getRandomInt