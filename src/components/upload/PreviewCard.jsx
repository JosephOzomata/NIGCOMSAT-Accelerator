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

                <div className="mt-4 flex justify-end">
                    <button
                        onClick={() => remove(image.id)}
                        className="hover:text-red-700 transition cursor-pointer"
                    >
                        <Trash2 size={18}/>
                    
                    </button>
                </div>

            </div>

        </div>
    );
};

export default PreviewCard;