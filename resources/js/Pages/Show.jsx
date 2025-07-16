import { Link, useForm } from "@inertiajs/react";

export default function Show({ blog, authUserId }) {
  const { delete: destroy } = useForm();

  function submit(e) {
    e.preventDefault();
    if (confirm("Are you sure you want to delete your blog?")) {
      destroy(`/blogs/${blog.id}`);
    }
  }

  const isOwner = authUserId === blog.user_id;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{blog.title}</h1>
        <p className="text-gray-700">{blog.body}</p>
      </div>

      {isOwner && (
        <div className="flex space-x-4">
          <form onSubmit={submit}>
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200 shadow-sm"
            >
              Delete
            </button>
          </form>

          <Link
            href={`/blogs/${blog.id}/edit`}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200 shadow-sm"
          >
            Update
          </Link>
        </div>
      )}
    </div>
  );
}
