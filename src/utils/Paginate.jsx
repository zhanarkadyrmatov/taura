import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Button, IconButton } from "@material-tailwind/react";

export function Paginate({
  isLoading,
  currentPage,
  newsPerPage,
  totalNews,
  paginate,
}) {
  const [active, setActive] = useState(currentPage);
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: active === index ? "gray" : "#000",

    onClick: () => {
      isLoading = true;
      setActive(index);
      paginate(index);
    },
  });
  const next = () => {
    isLoading = true;
    if (active === Math.ceil(totalNews / newsPerPage)) return;
    setActive(active + 1);
    paginate(active + 1);
  };

  const prev = () => {
    isLoading = true;
    if (active === 1) return;
    setActive(active - 1);
    paginate(active - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <GrFormPrevious strokeWidth={2} className="h-6 w-6" />
      </Button>
      <div className="flex items-center gap-2">
        {Array.from({ length: Math.ceil(totalNews / newsPerPage) }).map(
          (_, index) => (
            <IconButton className="" key={index} {...getItemProps(index + 1)}>
              <span className="">{index + 1}</span>
            </IconButton>
          )
        )}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === Math.ceil(totalNews / newsPerPage)}
      >
        <GrFormNext strokeWidth={2} className="h-6 w-6" />
      </Button>
    </div>
  );
}
