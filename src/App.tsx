import { useState, useEffect } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("posts");
    if (saved) setPosts(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleSave = (post: Post) => {
    if (editingPost) {
      setPosts(posts.map((p) => (p.id === post.id ? post : p)));
      setEditingPost(null);
    } else {
      setPosts([post, ...posts]);
    }
  };

  const handleDelete = (id: string) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const handleLike = (id: string) => {
    setPosts(posts.map((p) => (p.id === id ? { ...p, likes: (p.likes ?? 0) + 1} : p)));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center px-4">
      <Navbar />
      <div className="w-full max-w-xl mt-6 mb-24">
        <PostForm onSave={handleSave} editingPost={editingPost} />
        <PostList posts={posts} onEdit={setEditingPost} onDelete={handleDelete} onLike={handleLike} />
      </div>
      <Footer />
    </div>
  );
}

export default App;