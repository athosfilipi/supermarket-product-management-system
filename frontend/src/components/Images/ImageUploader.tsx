import { useState } from "react";

interface ImageUploaderProps {
  onImageChange: (image: string) => void;
}

const ImageUploader = ({ onImageChange }: ImageUploaderProps) => {
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
      setPreview(null);
      setError("Formato de imagem inválido. Use JPG, PNG, GIF ou WEBP.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageData = reader.result as string;
      setPreview(imageData);
      onImageChange(imageData);
    };
    reader.onerror = () => {
      setError("Erro ao carregar a imagem.");
      setPreview(null);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {error && <span style={{ color: "red" }}>{error}</span>}
      {preview && (
        <div style={{ marginTop: "10px" }}>
          <img
            src={preview}
            alt="Pré-visualização"
            style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
