import { create } from "zustand";

type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  department: string;
};

type EmployeeState = {
  employees: Employee[];
  addNewEmployee: (employee: Employee) => void;
  removeAllEmployees: () => void;
};

export const useEmployeeStore = create<EmployeeState>((set) => ({
  employees: [],
  addNewEmployee: (employee: Employee) =>
    set((currentState: EmployeeState) => ({
      employees: [...currentState.employees, employee],
    })),
  removeAllEmployees: () => set({ employees: [] }),
}));
