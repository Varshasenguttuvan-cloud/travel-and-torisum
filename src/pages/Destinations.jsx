/*import StateCard from "../components/StateCard";
import { states } from "../data/states";

export default function Destinations() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Explore India – 28 Beautiful States
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {states.map((state) => (
          <StateCard 
            key={state.name} 
            name={state.name} 
            image={state.image} 
          />
        ))}
      </div>
    </div>
  );
}*/
import StateCard from "../components/StateCard";
import { states } from "../data/states";

export default function Destinations() {
  return (
    /*<div className="p-6">
  <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
    Explore Indian States
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {states.map((state) => (
      <StateCard
        key={state.name}
        name={state.name}
        image={state.image}
      />
    ))}
  </div>
</div>*/
<div className="p-6">
  <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
    Explore Indian States
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {states.map((state) => (
      <StateCard
        key={state.name}
        name={state.name}
        image={state.image}
      />
    ))}
  </div>
</div>




  );
}



