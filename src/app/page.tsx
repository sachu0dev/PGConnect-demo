import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex mb-2">
        <h1 className="text-3xl font-extrabold text-primary1 text-[#60C3AD]">
          PG
        </h1>
        <span className="text-primary1 text-3xl">.</span>
        <h1 className="  transform -translate-x-1 text-slate-700 dark:text-slate-400">
          CONNECT
        </h1>
      </div>
      <h3 className="text-[#60C3AD] text-3xl md:text-6xl font-bold">
        Cooming Soon...
      </h3>
    </div>
  );
};

export default page;
