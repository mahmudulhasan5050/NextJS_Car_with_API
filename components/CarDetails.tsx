'use client';

import { CarProps } from '@/types';
import Image from 'next/image';
import { Fragment } from 'react';

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { generateCarImageURL } from '@/utils';

interface carDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: carDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </TransitionChild>
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <TransitionChild
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel
                  className='relative w-full max-w-lg max-h-[90vh] 
                overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl 
                transition-all flex flex-col gap-5'
                >
                  <button
                    type='button'
                    className='absolute top-2 right-2 
                    z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                    onClick={closeModal}
                  >
                    <Image
                      src='/close.svg'
                      alt='close'
                      width={20}
                      height={20}
                      className='object-contain'
                    />
                  </button>
                  <div className='flex-1 flex flex-col gap-3'>
                    {/* ##Big image display */}
                    <div
                      className='relative w-full h-40 bg-pattern bg-cover
                       bg-center rounded-lg'
                    >
                      <Image
                        src={generateCarImageURL(car)}
                        alt='car model'
                        className='object-contain'
                        fill
                        priority
                      />
                    </div>
                    {/* ----------------- */}
                    {/* ##Three small image display */}
                    <div className='flex gap-3'>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src={generateCarImageURL(car, '29')}
                          alt='car model'
                          className='object-contain'
                          fill
                          priority
                        />
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src={generateCarImageURL(car, '33')}
                          alt='car model'
                          className='object-contain'
                          fill
                          priority
                        />
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src={generateCarImageURL(car, '13')}
                          alt='car model'
                          className='object-contain'
                          fill
                          priority
                        />
                      </div>
                    </div>
                    {/* ------------------------ */}
                  </div>
                  {/* ##Car details div */}
                  <div className='flex-1 flex flex-col gap-2'>
                    <h2 className='font-semibold text-xl capitalize'>
                      {car.make} {car.model}
                    </h2>
                    <div className='mt-3 flex flex-wrap gap-4'>
                      {/* (i)Object.entries is used for using key and value both from car object */}
                      {Object.entries(car).map(([key, value]) => (
                        <div className='flex justify-between gap-5 w-full text-right' key={key}>
                          <h4 className='text-gray capitalize'>{key.split('_').join(' ')}</h4>
                          <p className='text-black-100 font-semibold'>{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* ----------------------------- */}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;