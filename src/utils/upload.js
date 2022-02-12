const uploadFile = (data, uploadPreset) => {
    const file = new FormData();
    file.append("file", data);
    file.append("upload_preset", uploadPreset);
    return file;
};
export default uploadFile;