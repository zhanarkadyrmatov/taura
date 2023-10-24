import React from "react";
import { Spinner } from "@material-tailwind/react";

function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Spinner color="blue" className="h-16 w-16 text-gray-900/50" />
    </div>
  );
}

export default Loading;
