
export default function ClassHour() {
    return (
        <>
            <h2 className="text-lg text-center mt-5 font-bold relative after:content-[''] after:block after:w-50 after:h-[2px]
               after:bg-black after:mx-auto after:mt-1">Class Hour</h2>
            <div className="w-full overflow-auto">
                <table className="mx-auto border-2 border-black mt-2 min-w-[600px]">
                    <thead className="bg-gray-400">
                        <tr>
                            <th className="border px-4 py-2">Monday</th>
                            <th className="border px-4 py-2">Tuesday</th>
                            <th className="border px-4 py-2">Wednesday</th>
                            <th className="border px-4 py-2">Thursday</th>
                            <th className="border px-4 py-2">Friday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">5 PM to 6 PM</td>
                            <td className="border px-4 py-2">5 PM to 6 PM</td>
                            <td className="border px-4 py-2">5 PM to 6 PM</td>
                            <td className="border px-4 py-2">5 PM to 6 PM</td>
                            <td className="border px-4 py-2">5 PM to 6 PM</td>
                        </tr>
                        <tr className="bg-gray-400">
                            <td className="border px-4 py-2">6:15 PM to 7:15 PM</td>
                            <td className="border px-4 py-2">6:15 PM to 7:15 PM</td>
                            <td className="border px-4 py-2">6:15 PM to 7:15 PM</td>
                            <td className="border px-4 py-2">6:15 PM to 7:15 PM</td>
                            <td className="border px-4 py-2">6:15 PM to 7:15 PM</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">7:30 PM to 8:30 PM</td>
                            <td className="border px-4 py-2">7:30 PM to 8:30 PM</td>
                            <td className="border px-4 py-2">7:30 PM to 8:30 PM</td>
                            <td className="border px-4 py-2">7:30 PM to 8:30 PM</td>
                            <td className="border px-4 py-2">7:30 PM to 8:30 PM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
