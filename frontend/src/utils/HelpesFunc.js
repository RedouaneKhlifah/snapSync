const convertImageToBase64 = (image) => {
    return new Promise((resolve, reject) => {
        const filereader = new FileReader();

        filereader.readAsDataURL(image);

        filereader.onload = () => {
            resolve(filereader.result);
        };

        filereader.onerror = (error) => {
            reject(error);
        };
    });
};
const emptyFileInpute = (elementId) => {
    const inputFile = document.getElementById(elementId);
    if (inputFile) {
        inputFile.value = "";
    }
};

export { convertImageToBase64, emptyFileInpute };
