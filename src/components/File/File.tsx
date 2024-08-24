import { cn } from "@/lib/utils";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { motion } from "framer-motion";
import { IconUpload } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";
import { IoMdClose } from "react-icons/io";

export const FileUpload = ({
  onChange,
  files,
  setFiles,
}: {
  onChange?: (files: File[]) => void;
  files: File[] | any;
  setFiles: SetStateAction<Dispatch<File[] | any>>;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    onChange && onChange([...files, ...newFiles]);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: true,
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: (error) => {
      console.log(error);
    },
  });

  const removeFile = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedFiles = files.filter((_: any, i: any) => i !== index);
    setFiles(updatedFiles);
    onChange && onChange(updatedFiles);
  };

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick} // Selecionar arquivos ao clicar no contêiner
        whileHover="animate"
        className="group/file block rounded-lg cursor-pointer w-full relative overflow-hidden"
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full mx-auto flex flex-col gap-1">
            {files.length > 0 &&
              files.map((file: any, idx: any) => (
                <motion.div
                  key={"file" + idx}
                  layoutId={idx === 0 ? "file-upload" : "file-upload-" + idx}
                  className={cn(
                    "border-b-1 border-gray/20 h-10 relative overflow-hidden z-40 dark:bg-neutral-900 flex flex-col items-start justify-start w-full mx-auto"
                  )}
                >
                  <div className="flex justify-between w-full h-full px-2 items-center">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="text-xs text-neutral-700 dark:text-neutral-300 truncate max-w-xs"
                    >
                      {file.name}
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      onClick={(e) => removeFile(idx, e)} // Impede o clique de propagação
                      className="rounded-lg px-2 py-1 w-fit flex-shrink-0 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-white"
                    >
                      <IoMdClose size={24} />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            <div
              className={cn(
                "z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-14 w-full bg-gray/5 mx-auto rounded-md"
              )}
            >
              {isDragActive ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-neutral-600 flex flex-col items-center"
                >
                  Drop it
                  <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                </motion.p>
              ) : (
                <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
