import React from "react";
import { DialogBody, DialogFooter } from "@material-tailwind/react";
import Form from "../utils/Form";
import { Dialog } from "@headlessui/react";
import { Button } from "@material-tailwind/react";

export function Modal({ handleOpen, open }) {
  return (
    <div className="flex justify-center items-center">
      {open ? (
        <>
          <div
            onClick={handleOpen}
            className={
              "fixed w-full h-full z-[1] bg-opacity-90 xl:bg-opacity-50 bg-black top-[0] left-[0]"
            }
          ></div>
          <div className="fixed top-[15%] z-50">
            <Form
              onClick={handleOpen}
              style={{
                boxShadow: "0px 0px 10px 0px #fff",
              }}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}
