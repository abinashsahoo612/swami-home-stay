export default function LocationTable() {
  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-blue-600 text-black text-sm">
          <tr>
            <th className="py-2 px-3">Place Name</th>
            <th className="py-2 px-3 text-center">KM</th>
            <th className="py-2 px-3 text-center">Time</th>
          </tr>
        </thead>
        <tbody className="text-gray-800 text-sm">
          {[
            { location: "Panhala Fort", distance: "0 KM", time: "0 Min" },
            { location: "Masai pathar", distance: "9.2 KM", time: "23 Min" },
            { location: "Jyotiba Temple", distance: "12 kM", time: "26 Min" },
            {
              location: "Mahalaxmi Temple kolhapur",
              distance: "21 KM",
              time: "43 Min",
            },
            {
              location: "Narasobawadi",
              distance: "70 KM",
              time: "1 Hr 49 Min",
            },
            { location: "Vishalgad", distance: "62 KM", time: "1 Hr 49 Min" },
          ].map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-blue-50 transition`}
            >
              <td className="py-2 px-3">{item.location}</td>
              <td className="py-2 px-3 text-center">{item.distance}</td>
              <td className="py-2 px-3 text-center">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
