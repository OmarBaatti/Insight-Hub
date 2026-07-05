export default function ArticleCard({ title, description, author }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200">

      <div className="card-body">

        <div className="flex justify-between items-start">
          <h2 className="card-title text-lg">{title}</h2>

          <span className="badge badge-primary badge-sm">
            Article
          </span>
        </div>

        <p className="opacity-80 text-sm mt-2 line-clamp-3">
          {description}
        </p>

        <div className="flex justify-between items-center mt-4">

          <p className="text-xs opacity-60">
            By {author}
          </p>

          <button className="btn btn-primary btn-sm">
            Read
          </button>

        </div>

      </div>
    </div>
  );
}