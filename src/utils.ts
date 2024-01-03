let idCounter = 0;

export const generateBookId = () => {
    idCounter++;
    return idCounter;

}