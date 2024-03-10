import { useEmployeeStore } from "../store/useEmployeeStore";

export const EmployeeList = () => {
  const { employees } = useEmployeeStore();

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-14">
      <div>
        <h1 className="text-xl">Employee List</h1>
      </div>
      <div>
        <p>There are {employees.length} employees.</p>
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          {employees.map((employee) => (
            <li key={employee.id}>
              <div>
                <p>
                  {employee.firstName} {employee.lastName}
                </p>
                <p>{employee.department}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
