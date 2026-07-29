const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const uploadImage = async (file) => {
    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", UPLOAD_PRESET);
    data.append("folder", "Nigcomsat_Accelerator");

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
            method: "POST",
            body: data,
        }
    );

    if (!response.ok) {
        throw new Error("Upload failed");
    }

    return response.json();
};