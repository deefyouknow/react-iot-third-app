import todo from '../assets/todo.png';

export default function PageB() {
  const border_Thread = `border border-sky-800` ;
  return (
    <div className="flex justify-center p-10">
      <div className="bg-white shadow-2xl p-10 rounded-sm">
        <div className='w-full flex justify-center'>
          <img src={todo} alt="Todo" className="size-30" />
        </div>
        <div className='w-full flex flex-col justify-center items-center my-2 text-blue-500 font-bold'>
          <h1>Todo Management V1.0</h1>
          <h1>TEST</h1>
        </div>
        <table className="">
          <thead className="bg-gray-300 border border-slate-950">
            <tr>
              <th className={`${border_Thread}`}>No.</th>
              <th className={`${border_Thread}`}>ชื่องาน</th>
              <th className={`${border_Thread}`}>รายละเอียดงาน</th>
              <th className={`${border_Thread}`}>สถานะงาน</th>
              <th className={`${border_Thread}`}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${border_Thread}`}>Data 1</td>
              <td className={`${border_Thread}`}>Data 2</td>
            </tr>
          </tbody>
        </table>        
      </div>
    </div>
  );
}
