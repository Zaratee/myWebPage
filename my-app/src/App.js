import Technologies from './component/Technologies';
import Navbar from './layout/navbar';
import PersonalInfo from './layout/personal-info';

function App() {

  return (
    <div className='  w-[100vw] h-[100vh] flex  bg-[#931621]'>
      <div className="w-[20%] h-full ">
        <PersonalInfo />
      </div>
      <div className="flex flex-col w-[80%]">
        <div className="p-4 ">
          <Navbar />
        </div>
        <div className='w-full h-full '>
          <Technologies />
        </div>
      </div>
    </div>
  );
}

export default App;
