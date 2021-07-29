const image_to_base64 = (image) => {
    let imageParsed;
    const unicode = Buffer.from(image.data, "base64");
    const imagebase64 = unicode.toString("base64");
    imageParsed = "data:image/jpeg;base64," + imagebase64;
    image = imageParsed;
    return image;
};

export default image_to_base64;
