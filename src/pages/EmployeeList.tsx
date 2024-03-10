import { useBearStore } from "../store/useBearStore";

export const EmployeeList = () => {
  const { bears, increasePopulation } = useBearStore();

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-14">
      <p>Il y a {bears} ours.</p>
    </main>
  );
};
