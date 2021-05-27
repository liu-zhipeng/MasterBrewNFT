import { Dialog, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/solid"
import React, { Fragment, useRef } from "react"
import ImageGallery from "react-image-gallery"
import "./ImageGallary.scss"

export default function ImageGallary({
  images = [],
  open,
  setOpen,
  startIndex = 0,
}) {
  const cancelButtonRef = useRef()

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-50 inset-0 overflow-y-auto ImageGallary"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <XIcon
            className="fixed top-5 right-5 text-primary z-50 cursor-pointer"
            width={30}
            onClick={() => setOpen(false)}
          />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-secondary bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              ref={cancelButtonRef}
              className="inline-block h-screen overflow-hidden transition-all sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div className="h-full">
                <ImageGallery
                  startIndex={startIndex}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  items={images}
                />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
