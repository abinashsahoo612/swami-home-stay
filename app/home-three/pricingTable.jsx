export default function PricingTable() {
  return (
    <div className="overflow-x-auto ">
      
      <table className="min-w-full rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-blue-600 text-black text-sm">
            <tr>
            <th className="py-2 px-3">Room Type</th>
            <th className="py-2 px-3 text-center">AC</th>
            <th className="py-2 px-3 text-center">Non AC</th>
            </tr>
        </thead>
        <tbody className="text-gray-800 text-sm">
            {[
            { room_type: "Double Bed", ac: "1200", non_ac: "1500" },
            { room_type: "Three Bed", ac: "1500", non_ac: "1800" },
            { room_type: "Four Bed", ac: "1800", non_ac: "2100" },
            ].map((item, index) => (
            <tr
                key={index}
                className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-50 transition`}
            >
                <td className="py-2 px-3">{item.room_type}</td>
                <td className="py-2 px-3 text-center">₹{item.ac}</td>
                <td className="py-2 px-3 text-center">₹{item.non_ac}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
