const UploadButton = ({ onClick, disabled }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className="
            w-full
            py-4
            rounded-xl
            bg-blue-500
            hover:bg-blue-800
            text-white
            font-semibold
            transition
            shadow-md
            disabled:cursor-not-allowed
            disabled:bg-gray-400
            "
        >
            Upload Images
        </button>
    );
};

export default UploadButton;