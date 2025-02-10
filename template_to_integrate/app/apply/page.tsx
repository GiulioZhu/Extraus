import Apply from "@/app/components/ui/application";


export default function Page() {
  return (
    <>
      <header className="z-30 mt-2 w-full md:mt-5">
      </header>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
          <Apply />
        </div>
      </div>
    </>
  );
}