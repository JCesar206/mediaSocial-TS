interface Props {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
}

const PostList = ({ posts, onEdit, onDelete, onLike }: Props) => {
  return (
    <div className="flex flex-col gap-4 mb-20">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow rounded-xl p-4 flex flex-col gap-2"
        >
          {post.image && (
            <img
              src={post.image}
              alt="post"
              className="w-full max-h-60 object-contain rounded-lg"
            />
          )}
          <p className="text-gray-800 dark:text-gray-100 text-lg">{post.text}</p>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => onLike(post.id)}
              className="flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:scale-110 transition"
            >
              👍 <span>{post.likes}</span>
            </button>
            <button
              onClick={() => onEdit(post)}
              className="text-sm bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
            >
              ✏️ Editar
            </button>
            <button
              onClick={() => onDelete(post.id)}
              className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              🗑️ Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
