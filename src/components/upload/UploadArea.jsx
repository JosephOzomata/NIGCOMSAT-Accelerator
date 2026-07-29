import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ImagePlus, UploadCloud } from "lucide-react";
import { motion } from "framer-motion";
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

  const totalSize = images.reduce(
    (sum, img) => sum + img.file.size,
    0
  );

  return (
    <div className="space-y-6">

      <motion.div
        {...getRootProps()}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className={`
        cursor-pointer
        rounded-3xl
        border-2
        border-dashed
        transition-all
        duration-300
        px-8
        py-16
        text-center

        ${
          isDragActive
            ? "border-blue-600 bg-blue-50"
            : "border-gray-300 bg-white hover:border-blue-500 hover:bg-blue-50"
        }
      `}
      >
        <input {...getInputProps()} />

        <motion.div
          animate={{
            y: isDragActive ? -8 : 0,
          }}
        >
          <UploadCloud
            className="mx-auto text-blue-600"
            size={70}
          />

          <h2 className="mt-6 text-3xl font-bold">
            {isDragActive
              ? "Drop your images here"
              : "Drag & Drop Images"}
          </h2>

          <p className="mt-3 text-gray-500">
            or click anywhere to browse
          </p>

          <button
            type="button"
            className="
            mt-8
            rounded-xl
            bg-blue-600
            px-8
            py-3
            text-white
            font-semibold
            hover:bg-blue-700
            transition
            "
          >
            Browse Files
          </button>
        </motion.div>
      </motion.div>

      {images.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
          bg-white
          rounded-2xl
          shadow-md
          p-6
          flex
          justify-between
          items-center
          "
        >
          <div className="flex items-center gap-3">
            <ImagePlus className="text-blue-600" />

            <div>
              <h3 className="font-semibold">
                {images.length} image
                {images.length > 1 ? "s" : ""} selected
              </h3>

              <p className="text-gray-500 text-sm">
                {formatBytes(totalSize)}
              </p>
            </div>
          </div>

          <button
            onClick={() => setImages([])}
            className="
            text-red-600
            hover:text-red-700
            font-medium
            "
          >
            Remove All
          </button>
        </motion.div>
      )}

    </div>
  );
};

export default UploadArea;