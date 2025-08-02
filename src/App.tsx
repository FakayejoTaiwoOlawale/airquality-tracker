
import Maps from "./pages/Maps";

const App: React.FC = () => {



  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Real-Time Air Quality Tracker Map
      </h1>

      <Maps/>
     
    </div>
  );
};

export default App;
