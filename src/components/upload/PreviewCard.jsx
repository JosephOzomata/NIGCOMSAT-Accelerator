import { Trash2 } from "lucide-react";
import formatBytes from "../../utils/formatBytes";

const PreviewCard = ({ image, remove }) => {
    return (
        <div
            className="
            bg-white
            rounded-2xl
            shadow-lg
            overflow-hidden
            border
            "
        >
            <img
                src={image.preview}
                alt=""
                className="h-48 w-full object-cover"
            />

            <div className="p-4">

                <h3 className="font-semibold truncate">
                    {image.file.name}
                </h3>

                <p className="text-sm text-gray-500">
                    {formatBytes(image.file.size)}
                </p>

                <button
                    onClick={() => remove(image.id)}
                    className="
                    mt-4
                    w-full
                    flex
                    justify-center
                    items-center
                    gap-2
                    py-2
                    rounded-lg
                    bg-red-50
                    hover:bg-red-100
                    text-red-600
                    "
                >
                    <Trash2 size={18}/>
                    Remove
                </button>

            </div>

        </div>
    );
};

export default PreviewCard;