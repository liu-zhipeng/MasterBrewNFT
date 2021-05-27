/* This example requires Tailwind CSS v2.0+ */
import { Transition } from "@headlessui/react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid"
import { classNames } from "@util"
import React, { Fragment, useRef, useState } from "react"
import "./Filter.scss"
import { useClickAway } from "react-use"

export default function Filter({
  value = [],
  onChange,
  options = [],
  placeholder = "",
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useClickAway(ref, () => {
    setOpen(false)
  })

  return (
    <div
      ref={ref}
      className="mt-1 relative SelectInput"
      style={{ minWidth: 200 }}
    >
      <div
        onClick={() => setOpen(bool => !bool)}
        className="relative border-2 border-primary  w-full bg-secondary  rounded-sm  shadow-sm pl-3.5 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm"
      >
        <span className="flex items-center justify-between">
          <span className="block text-primary font-semibold truncate">
            {placeholder}
          </span>
        </span>
        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronDownIcon
            className={`h-5 transition-all w-5 text-primary transform ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </span>
      </div>

      <Transition
        show={open}
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          static
          className="absolute optionsContainer z-10 border-2 border-t-0 -mt-1 border-primary w-full bg-secondary shadow-lg max-h-56 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          {options.map(dt => {
            const selected = value.find(v => v.value === dt.value)

            return (
              <div
                key={dt.value}
                className={classNames(
                  "text-primary",
                  "cursor-default select-none relative py-2.5 pl-3.5 pr-3"
                )}
                onClick={() => {
                  if (selected) {
                    onChange(value.filter(v => v.value !== dt.value))
                  } else {
                    onChange(value.concat([{ ...dt }]))
                  }
                }}
              >
                <>
                  <div className="flex items-center">
                    <div className="flex items-center flex-grow truncate mr-2">
                      {dt.icon}
                      <span
                        className={classNames("font-semibold block truncate")}
                      >
                        {dt.label}
                      </span>
                    </div>
                    <div
                      style={{
                        minWidth: "1.25rem",
                        minHeight: "1.25rem",
                      }}
                      className={classNames(
                        selected ? "bg-primary" : "border border-primary",
                        "text-black ml-1 flex items-center inset-y-0 w-5 h-5 rounded-full"
                      )}
                    >
                      {selected && (
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </div>
                  </div>
                </>
              </div>
            )
          })}
        </div>
      </Transition>
    </div>
  )
}
