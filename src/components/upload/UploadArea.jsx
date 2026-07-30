import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ImagePlus, UploadCloud, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import formatBytes from "../../utils/formatBytes";

const UploadArea = ({ images, setImages }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const mappedFiles = acceptedFiles.map((file) => ({
        id: crypto.randomUUID(),
        file,
        preview: URL.createObjectURL(file),
      }));

      setImages((prev) => {
        const existingNames = new Set(prev.map((img) => img.file.name));
        const uniqueFiles = mappedFiles.filter(
          (img) => !existingNames.has(img.file.name)
        );
        return [...prev, ...uniqueFiles];
      });
    },
    [setImages]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      "image/*": [],
    },
  });

  const totalSize = images.reduce((sum, img) => sum + img.file.size, 0);

  const removeImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={`
          relative
          cursor-pointer
          rounded-2xl
          border-2
          border-dashed
          transition-colors
          duration-200
          px-6
          py-12
          text-center
          bg-gray-50/50

          ${
            isDragActive
              ? "border-blue-500 bg-blue-50/50"
              : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
          }
        `}
      >
        <input {...getInputProps()} />

        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-gray-100">
              <UploadCloud
                className={`transition-colors duration-200 ${
                  isDragActive ? "text-blue-600" : "text-gray-600"
                }`}
                size={48}
              />
            </div>
          </div>

          <div>
            <p className="text-lg font-medium text-gray-800">
              {isDragActive ? "Drop 'em right here" : "Drop your images"}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              or click to browse
            </p>
          </div>

          <button
            type="button"
            className="
              inline-block
              rounded-full
              bg-gray-900
              px-6
              py-2.5
              text-sm
              text-white
              font-medium
              hover:bg-gray-800
              transition-colors
              duration-200
            "
          >
            Choose files
          </button>

          <p className="text-xs text-gray-400 mt-2">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </div>

      <AnimatePresence>
        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="bg-white rounded-xl border border-gray-200 p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ImagePlus size={20} className="text-gray-600" />
                <span className="font-medium text-gray-800">
                  {images.length} file{images.length > 1 ? "s" : ""}
                </span>
                <span className="text-sm text-gray-400">
                  ({formatBytes(totalSize)})
                </span>
              </div>

              <button
                onClick={() => setImages([])}
                className="text-sm text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                Clear all
              </button>
            </div>

            {/* <div className="flex flex-wrap gap-2">
              {images.map((img) => (
                <div
                  key={img.id}
                  className="relative group flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-gray-200"
                >
                  <img
                    src={img.preview}
                    alt={img.file.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(img.id);
                    }}
                    className="
                      absolute
                      -top-1
                      -right-1
                      bg-gray-900/80
                      hover:bg-gray-900
                      rounded-full
                      p-0.5
                      transition-colors
                      duration-200
                      opacity-0
                      group-hover:opacity-100
                    "
                  >
                    <X size={14} className="text-white" />
                  </button>
                </div>
              ))}
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UploadArea;