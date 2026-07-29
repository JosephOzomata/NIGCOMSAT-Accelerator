const UploadButton = ({ onClick, disabled }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className="
            w-full
            py-4
            rounded-xl
            bg-blue-700
            hover:bg-blue-800
            text-white
            font-semibold
            transition
            disabled:bg-gray-400
            "
        >
            Upload Images
        </button>
    );
};

export default UploadButton;