import React from "react";
import { DialogBody, DialogFooter } from "@material-tailwind/react";
import Form from "../utils/Form";
import { Dialog } from "@headlessui/react";
import { Button } from "@material-tailwind/react";

export function Modal({ handleOpen, open }) {
  return (
    <div className="  ">
      <Dialog
        className={
          "fixed w-full h-full z-20 bg-opacity-90 xl:bg-opacity-50 bg-black top-[0] left-[0] flex  flex-col justify-center items-center"
        }
        open={open}
        onClose={handleOpen}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody>
          <Form
            style={{
              boxShadow: "0px 0px 10px 0px #fff",
            }}
          />
        </DialogBody>
      </Dialog>
    </div>
  );
}
