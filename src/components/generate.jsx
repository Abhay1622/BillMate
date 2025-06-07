import { useState } from "react"
import { Link } from "react-router-dom"

const Generate = () => {

  const [coloumn, setColoumn] = useState([])
  const [SecondColoumn, setSecondColoumn] = useState([])
  const [invoiceId, setInvoiceId] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('');
  const [billedTo, setBilledTo] = useState('');
  const [payTo, setPayTo] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [entries, setEntries] = useState([]);
  const [taxDetails, setTaxDetails] = useState([]);

  const SecondgenerateColoumn = () => {
    setSecondColoumn([...SecondColoumn, SecondColoumn.length + 1])
  }
  const generateColoumn = () => {
    setColoumn([...coloumn, coloumn.length + 1])
  }

  const deleteRow = (indextoremove) => {
    const newItem = coloumn.filter((_, index) => index !== indextoremove)
    setColoumn(newItem)
  }

  
  const SecondDeleteRow = (indextoremove) => {
    const newItem = SecondColoumn.filter((_, index) => index !== indextoremove)
    setSecondColoumn(newItem)
  }


  return (
    <div className='flex flex-col gap-5 max-w-[1200px] mx-auto border-1 rounded-xl p-3'>
      <h2 className='text-4xl py-2'> Invoice </h2>
      <div className='flex flex-col w-full sm:flex-row'>
        <div className='w-full sm:w-1/4'><label className='text-2xl' >Invoice Id:</label></div>
        <div><input value={invoiceId} onChange={(e)=>setInvoiceId(e.target.value)} className='border-2 rounded-xl p-2 text-right' placeholder='InvoiceId' type="text" /></div>
      </div>
      <div className='flex flex-col w-full sm:flex-row'>
        <div className='w-full sm:w-1/4'><label className='text-2xl' >Invoice Date:</label></div>
        <div><input value={invoiceDate} onChange={(e)=> setInvoiceDate(e.target.value)} className='border-2 rounded-xl p-2 text-right' placeholder={new Date().toLocaleDateString()} type="text" /></div>
      </div>
      <div className='flex flex-col w-full sm:flex-row'>
        <div className='w-full sm:w-1/4'><label className='text-2xl' >Due Date:</label></div>
        <div><input value={dueDate} onChange={(e)=> setDueDate(e.target.value)} className='border-2 rounded-xl p-2 text-right' placeholder={new Date().toLocaleDateString()} type="text" /></div>
      </div>
      <div className='flex flex-col w-full sm:flex-row'>
        <div className='w-full sm:w-1/4'><label className='text-2xl' >Payments Terms:</label></div>
        <div><input value={paymentTerms} onChange={(e)=> setPaymentTerms(e.target.value)} className='border-2 rounded-xl p-2 text-right' placeholder='Add Payment Terms' type="text" /></div>
      </div>
      <div className='flex w-full'>
        <div className=' flex flex-col w-full sm:flex-row gap-2'>
          <div className='flex flex-col w-full'><label className='text-2xl' >Billed To</label> <textarea  value={billedTo} onChange={(e)=> setBilledTo(e.target.value)} className='resize-none border-2 rounded-xl p-2' placeholder='Address'></textarea>
          </div>
          <div className='flex flex-col w-full'><label className='text-2xl ' >Pay To</label> <textarea className='border-2 rounded-xl p-2 resize-none' value={payTo} onChange={(e)=> setPayTo(e.target.value)} placeholder='Address'></textarea>
          </div>
        </div>
      </div>



      <div className='w-full '>
        <span className='text-4xl py-3'>Entries</span>
        <div>
          <div className="flex flex-col gap-5" >
            {coloumn.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row w-full gap-2">
                <div className="w-full sm:w-1/3">
                  <span>Description</span>
                  <input className="border-1 rounded-xl p-2 w-full" placeholder="Enter Text" type="text" />
                </div>
                <div className="w-full sm:w-1/3">
                  <span>Quantity</span>
                  <input className="border-1 rounded-xl p-2 w-full" placeholder="Enter Text" type="text" />
                </div>
                <div className="w-full sm:w-1/3">
                  <span>Amount</span>
                  <input className="border-1 rounded-xl p-2 w-full" placeholder="Enter Text" type="text" />
                </div>
                <div >
                  <span>Actions</span>
                  <div className="relative cursor-pointer sm:top-3 left-5">
                    <svg
                      onClick={() => deleteRow(index)}
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-red-500 hover:text-red-700 "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" />
                    </svg></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='text-center my-2 p-2 cursor-pointer border-2 rounded-xl' onClick={generateColoumn}>
           <span className=''>Add Another Entry + </span>
        </div>
        <div className="text-right">
          <span className="text-3xl">Subtotal: $0.00</span>
        </div>
      </div>
      <div className='w-full '>
        <span className='text-4xl py-3'>Tax Details</span>
        <div>
          <div className="flex flex-col gap-5" >
            {SecondColoumn.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row w-full gap-2">
                <div className="w-full sm:w-1/3">
                  <span>Description</span>
                  <input className="border-1 rounded-xl p-2 w-full" placeholder="Enter Description" type="text" />
                </div>
                <div className="w-full sm:w-1/3">
                  <span>Percentage (%)</span>
                  <input className="border-1 rounded-xl p-2 w-full" placeholder="%" type="text" />
                </div>
                <div className=" ">
                  <span>Actions</span>
                  <div className="relative cursor-pointer sm:top-3 left-5">
                    <svg
                      onClick={() => SecondDeleteRow(index)}
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-red-500 hover:text-red-700"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" />
                    </svg></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='text-center my-2 p-2 cursor-pointer border-2 rounded-xl' onClick={SecondgenerateColoumn}>
           <span className=''>Add Another Entry + </span>
        </div>
        <div className="text-right">
          <span className="text-3xl">Total: $0.00</span>
        </div>
      </div>

      <hr />

      <div className="w-full">
        <textarea className="resize-none border-1 w-full p-3 rounded-xl" placeholder="Add a Custom Message"></textarea>
      </div>

      <Link 
      to={'/generate/invoicepreview'} 
      state={{
    invoiceId,
    invoiceDate,
    dueDate,
    paymentTerms,
    billedTo,
    payTo,
    entries,
    taxDetails,
    customMessage
  }}
      >
      <div className="text-right w-full">
        <button className="border-1 bg-blue-500 px-4 py-2 rounded-xl text-white cursor-pointer">Generate Inovice</button>
      </div>
      </Link>


    </div>
  )
}

export default Generate