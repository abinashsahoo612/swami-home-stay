export default function PricingTable() {
  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3 border">Room Type</th>
            <th className="p-3 border">Non AC</th>
            <th className="p-3 border">AC</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          <tr>
            <td className="p-3 border">Double Bed</td>
            <td className="p-3 border">₹1200</td>
            <td className="p-3 border">₹1500</td>
          </tr>
          <tr>
            <td className="p-3 border">Three Bed</td>
            <td className="p-3 border">₹1500</td>
            <td className="p-3 border">₹1800</td>
          </tr>
          <tr>
            <td className="p-3 border">Four Bed</td>
            <td className="p-3 border">₹1800</td>
            <td className="p-3 border">₹2100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
