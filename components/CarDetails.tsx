"use client"

import { CarProps } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

interface CarDetailsProps {
    isOpen: boolean
    closeModal: ()=>void
    car: CarProps
}

const CarDetails = ({ isOpen, closeModal, car}: CarDetailsProps) => {
  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opcaity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opcaity-25" />
                </Transition.Child>
            </Dialog>
        </Transition>
    </>
  )
}

export default CarDetails