import Footer from '../components/Footeriot';
import todo from '../assets/todo.png';
export default function PageC() {
  return (
    <div className="w-full flex justify-center">
      <div className='flex flex-col items-center p-10'>
        <div className="bg-white shadow rounded-2xl p-15 flex-col justify-center items-center">
          <div className='w-full flex justify-center'>
            <img src={todo} alt="Todo" className="size-30" />
          </div>
          <h1 className="flex justify-center">Todo Management v1.0</h1>
          <input className="w-full border border-gray-400 rounded-sm mb-6 mt-5 h-10 px-2" type="text" placeholder="Add Todo" />
          <button className="w-full h-10 px-2 bg-blue-500 text-white hover:bg-amber-300 active:bg-amber-200 rounded-sm">Add</button>
          
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
