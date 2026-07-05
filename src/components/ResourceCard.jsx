export default function ResourceCard({ title, type, link }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200">

      <div className="card-body">

        <div className="flex justify-between items-center">
          <h2 className="card-title text-lg">{title}</h2>

          <span className="badge badge-secondary badge-sm">
            {type || "Resource"}
          </span>
        </div>

        <p className="text-sm opacity-70 mt-2">
          External learning resource
        </p>

        <div className="card-actions justify-end mt-4">

          <a
            href={link || "#"}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-sm"
          >
            Open
          </a>

        </div>

      </div>
    </div>
  );
}