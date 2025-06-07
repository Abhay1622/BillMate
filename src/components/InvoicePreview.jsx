// InvoicePreview.jsx
import { useLocation } from "react-router-dom";

const InvoicePreview = () => {
  const { state } = useLocation();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Invoice Preview</h1>

      <p><b>Invoice ID:</b> {state.invoiceId}</p>
      <p><b>Invoice Date:</b> {state.invoiceDate}</p>
      <p><b>Due Date:</b> {state.dueDate}</p>
      <p><b>Payment Terms:</b> {state.paymentTerms}</p>
      <p><b>Billed To:</b> {state.billedTo}</p>
      <p><b>Pay To:</b> {state.payTo}</p>

      <h2 className="text-xl mt-4 font-semibold">Entries:</h2>
      <table className="w-full border mt-2">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {state.entries.map((entry, index) => (
            <tr key={index}>
              <td className="border p-2">{entry.description}</td>
              <td className="border p-2">{entry.quantity}</td>
              <td className="border p-2">{entry.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl mt-4 font-semibold">Tax Details:</h2>
      <ul className="list-disc ml-6">
        {state.taxDetails.map((tax, index) => (
          <li key={index}>
            {tax.description} — {tax.percentage}%
          </li>
        ))}
      </ul>

      <h2 className="text-xl mt-4 font-semibold">Custom Message:</h2>
      <p>{state.customMessage}</p>
    </div>
  );
};

export default InvoicePreview;
