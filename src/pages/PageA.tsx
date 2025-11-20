import Headeriot from '../components/Headeriot';
import money from '../assets/money.png';
import { useState } from 'react';
import Footeriot from '../components/Footeriot';

export default function PageA() {
  const [moneyInput, setMoneyInput] = useState('');
  const [personInput, setPersonInput] = useState('');
  const [result, setresult] = useState(0.00);

  const calculate = () => {
    const moneyValue = parseFloat(moneyInput);
    const personValue = parseFloat(personInput);

    if (!isNaN(moneyValue) && !isNaN(personValue) && personValue > 0) {
      setresult((moneyValue / personValue).toFixed(2));
    } else {
      setresult(0.00);
    }
  };
  const clearInput = () => {
    setMoneyInput('');
    setPersonInput('');
    setresult(0.00);
  }
  return (
    <div className='w-dvw h-dvh fixed'>
      <div className='mb-1 mt-5'>
        <Headeriot />
      </div>
      <hr />
      <div className='flex justify-center mt-5'>
        <div className='w-133  bg-white rounded-2xl p-5 shadow'>
          <div className='flex justify-center flex-col items-center'>
            <h1 className='flex justify-center text-2xl font-bold text-green-400'>Money Shared</h1>
            <img className='flex justify-center size-30' src={money} alt="Money" />

          </div>
          <div className='space-y-2'>
            <h1>ป้อนเงิน (บาท)</h1>
            <input className='w-full h-10 p-4 border border-gray-300 rounded-md' value={moneyInput} onChange={(e) => {
              const value = e.target.value;
              if (value === '' || /^[0-9\b]+$/.test(value)) {
                setMoneyInput(value);
              } else {
                setMoneyInput(value.slice(0, -1));
              }
            }}
              type='text' placeholder='Input money'></input>
            <h1>ป้อนคน (คน)</h1>
            <input className='w-full h-10 p-4 border border-gray-300 rounded-md' value={personInput} onChange={(e) => {
              const value = e.target.value;
              if (value === '' || /^[0-9\b]+$/.test(value)) {
                setPersonInput(value);
              } else {
                setPersonInput(value.slice(0, -1));
              }
            }}
              type='text' placeholder='Input person ...'></input>
          </div>
          <div className='w-full h-10 mt-5 flex justify-center'>
            <button className='bg-green-400 text-white px-4 py-2 h-12 rounded-md w-full mr-2 hover:bg-green-700 active:bg-green-400 duration-75' onClick={calculate}>คำนวณ</button>
            <button className='bg-red-400 text-white px-4 py-2 h-12 rounded-md w-full ml-2 hover:bg-red-700 active:bg-red-400 duration-75' onClick={clearInput}>ยกเลิก</button>
          </div>
          <div className='mt-10 space-x-3 flex justify-center'>
            <h1>หารกันคนละ</h1>
            <h1 className='font-bold'>{result}</h1>
            <h1>บาท</h1>
          </div>
        </div>
      </div>
      <Footeriot />
    </div>
  );
}
