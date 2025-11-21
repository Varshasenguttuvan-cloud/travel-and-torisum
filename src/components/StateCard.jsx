/*export default function StateCard({ name, image }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer bg-white">
      <img src={image} alt={name} className="w-full h-40 object-cover" />

      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold">{name}</h2>
      </div>
    </div>
  );
}*/
export default function StateCard({ name, image }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden transform hover:-translate-y-2 duration-300">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-all">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          Explore the beauty of {name}.
        </p>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Explore Now
        </button>
      </div>
    </div>
  );
}

