import FileInput from "@/components/FileInput";
import FormField from "@/components/FormField";

const UploadPage = () => {
  return (
    <div className="wrapper-md upload-page">
      <h1>Upload a video</h1>
      <FormField />
      <FileInput />
    </div>
  );
};
export default UploadPage;
