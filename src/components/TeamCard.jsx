export default function TeamCard({ name, role, bio }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200">

      <div className="card-body items-center text-center">

        <div className="avatar placeholder mb-3">
          <div className="bg-primary text-primary-content rounded-full w-14">
            <span className="text-lg">
              {name?.charAt(0)}
            </span>
          </div>
        </div>

        <h2 className="card-title">{name}</h2>

        <span className="badge badge-outline badge-sm mt-1">
          {role}
        </span>

        <p className="text-sm opacity-70 mt-3">
          {bio}
        </p>

        <button className="btn btn-outline btn-sm mt-4">
          Contact
        </button>

      </div>
    </div>
  );
}