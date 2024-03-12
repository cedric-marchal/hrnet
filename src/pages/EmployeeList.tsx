import { useEmployeeStore } from "../store/useEmployeeStore";

export const EmployeeList = () => {
  const { employees } = useEmployeeStore();

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-14">
      <div className="flex flex-col gap-8 p-8 shadow-md">
        <div>
          <h1 className="text-xl">Employee List</h1>
        </div>
        <div>
          <p>There are {employees.length} employees.</p>
        </div>
        <table>
          <thead>
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">First Name</th>
              <th className="p-2 text-left">Last Name</th>
              <th className="p-2 text-left">Date Of Birth</th>
              <th className="p-2 text-left">Start Date</th>
              <th className="p-2 text-left">Department</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="p-2">{employee.id}</td>
                <td className="p-2">{employee.firstName}</td>
                <td className="p-2">{employee.lastName}</td>
                <td className="p-2">{employee.dateOfBirth}</td>
                <td className="p-2">{employee.startDate}</td>
                <td className="p-2">{employee.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
