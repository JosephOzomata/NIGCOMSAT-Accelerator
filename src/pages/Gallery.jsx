import { useEffect, useMemo, useState } from "react";
import {
  Loader2,
  RefreshCcw,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchGallery = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/gallery");

      if (!res.ok) {
        throw new Error("Failed to fetch gallery");
      }

      const data = await res.json();

      setImages(data.resources || []);
    } catch (err) { 
      console.error(err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const openImage = (image) => {
    setSelected(image);
  };

  const closeImage = () => {
    setSelected(null);
  };

  const currentIndex = useMemo(() => {
    return images.findIndex((img) => img.public_id === selected?.public_id);
  }, [images, selected]);

  const nextImage = () => {
    if (currentIndex === -1) return;

    const next = (currentIndex + 1) % images.length;

    setSelected(images[next]);
  };

  const previousImage = () => {
    if (currentIndex === -1) return;

    const prev = (currentIndex - 1 + images.length) % images.length;

    setSelected(images[prev]);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!selected) return;

      if (e.key === "Escape") closeImage();

      if (e.key === "ArrowRight") nextImage();

      if (e.key === "ArrowLeft") previousImage();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [selected, currentIndex]);

  return (
    <>
      <div className="min-h-screen bg-slate-100 pt-30 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-12">
            <div>
              <h1 className="text-5xl font-bold text-slate-800">Gallery</h1>

              
            </div>

            <button
              onClick={() => {
                setRefreshing(true);
                fetchGallery();
              }}
              className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-blue-600
              px-5
              py-3
              text-white
              hover:bg-blue-700
              transition
              "
            >
              <RefreshCcw
                size={18}
                className={refreshing ? "animate-spin" : ""}
              />
              Refresh
            </button>
          </div>


          {/* <div className="mb-8">
            <span className="text-gray-600">{images.length} Images</span>
          </div> */}


          {loading ? (
            <div
              className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-3
              gap-6
              "
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="
                  h-72
                  rounded-3xl
                  bg-gray-200
                  animate-pulse
                  "
                />
              ))}
            </div>
          ) : images.length === 0 ? (
            <div
              className="
              flex
              flex-col
              items-center
              justify-center
              py-32
              "
            >
              <h2 className="text-2xl font-semibold">No Images Found</h2>

              {/* <p className="text-gray-500 mt-3">
                Upload some images to Cloudinary.
              </p> */}
            </div>
          ) : (
            <motion.div
              layout
              className="
              columns-1
              sm:columns-2
              lg:columns-3
              xl:columns-3
              gap-5
              space-y-5
              "
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.public_id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  className="
                  break-inside-avoid
                  overflow-hidden
                  rounded-3xl
                  shadow-xl
                  cursor-pointer
                  bg-white
                  group
                  "
                  onClick={() => openImage(image)}
                >
                  <img
                    src={image.secure_url}
                    alt=""
                    loading="lazy"
                    className="
                    w-full
                    object-cover
                    transition
                    duration-500
                    
                    "
                  />

                  {/* <div
                    className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    bg-gradient-to-t
                    from-black/50
                    to-transparent
                    "
                  /> */}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="
              fixed
              inset-0
              z-50
              bg-black/90
              backdrop-blur-sm
              flex
              items-center
              justify-center
              p-4
              "
              onClick={closeImage}
            >


              <button
                onClick={closeImage}
                className="
                absolute
                top-6
                right-6
                text-white
                bg-white/10
                hover:bg-white/20
                p-3
                rounded-full
                transition
                z-50
                "
              >
                <X size={28} />
              </button>



              {images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    previousImage();
                  }}
                  className="
                  absolute
                  left-6
                  text-white
                  bg-white/10
                  hover:bg-white/20
                  p-3
                  rounded-full
                  transition
                  z-50
                  "
                >
                  <ChevronLeft size={30} />
                </button>
              )}


              {images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="
                  absolute
                  right-6
                  text-white
                  bg-white/10
                  hover:bg-white/20
                  p-3
                  rounded-full
                  transition
                  z-50
                  "
                >
                  <ChevronRight size={30} />
                </button>
              )}



              <a
                href={selected.secure_url}
                download
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="
                absolute
                top-6
                left-6
                text-white
                bg-white/10
                hover:bg-white/20
                p-3
                rounded-full
                transition
                z-50
                "
              >
                <Download size={24} />
              </a>



              <motion.img
                key={selected.public_id}
                initial={{
                  scale: 0.9,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.9,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                }}
                src={selected.secure_url}
                alt=""
                onClick={(e) => e.stopPropagation()}
                className="
                max-h-[90vh]
                max-w-[95vw]
                rounded-2xl
                object-contain
                shadow-2xl
                "
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Gallery;
