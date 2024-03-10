import { useEmployeeStore } from "../store/useEmployeeStore";

export const EmployeeList = () => {
  const { employees } = useEmployeeStore();

  console.log(employees);

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-14">
      <div>
        <h1 className="text-xl">Employee List</h1>
      </div>
      <div>
        <p>There are {employees.length} employees.</p>
      </div>
    </main>
  );
};
