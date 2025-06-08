import Image from "next/image";

const FileInput = ({ id, label, accept, file, previewUrl, inputRef, onChange, onReset, type }: FileInputProps) => {
  return (
    <section className="file-input">
      <label htmlFor={id}>{label}</label>
      <input type="file" accept={accept} ref={inputRef} onChange={onChange} hidden />

      {!previewUrl ? (
        <figure onClick={() => inputRef.current?.click()}>
          <Image alt="upload icon" src={"/assets/icons/upload.svg"} width={24} height={24} />
          <p>Click to upload your {id}</p>
        </figure>
      ) : (
        <div>
          {type === "video" ? (
            <video controls>
              <source src={previewUrl} type="video/mp4" />
            </video>
          ) : (
            <Image src={previewUrl} alt="thumbnail img" fill />
          )}
          <button type="button" onClick={onReset}>
            <Image src={"/assets/icons/close.svg"} alt="reset" width={16} height={16} />
            <p>{file?.name}</p>
          </button>
        </div>
      )}
    </section>
  );
};
export default FileInput;
