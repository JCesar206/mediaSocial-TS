import React, { useState } from "react";

interface Props {
  onSave: (post: Post) => void;
  editingPost?: Post | null;
}

const PostForm = ({ onSave, editingPost }: Props) => {
  const [text, setText] = useState(editingPost?.text || "");
  const [image, setImage] = useState<string | undefined>(editingPost?.image);

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onloadend = () => setImage(reader.result as string);
  reader.readAsDataURL(file);
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!text.trim()) return;
  onSave({ id: editingPost?.id || crypto.randomUUID(), text, image, likes: 0 });
  setText("");
  setImage(undefined);
};

const handleClear = () => {
  setText("");
  setImage(undefined);
};

return (
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-4 mb-4 flex flex-col gap-3">
    <textarea
      className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      placeholder="¿Qué estas pensando"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <input type="file" accept="image/*" onChange={handleImageChange} />
    {image && <img src={image} alt="preview" className="w-32 h-32 object-contain rounded-md" />}
    <div className="flex gap-3">
      <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600">
        {editingPost ? "Actualizar Post" : "Publicar"}
      </button>
      <button type="button" onClick={handleClear} className="bg-gray-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-500">
        Limpiar
      </button>
    </div>
    <p className="text-xs font-semibold">Selector de Emojis en Windos: win + . , Mac: Ctrl + Cmd + Espacio</p>
  </form>
  );
};

export default PostForm;