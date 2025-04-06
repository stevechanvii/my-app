'use client';
import Link from 'next/link';
import React from 'react';

const ConfirmPatient = () => {
  return (
    <div className='h-screen w-full flex flex-col gap-3 justify-center items-center bg-blue-100'>
      <div>ConfirmPatient</div>
      <Link
        href='/login/booking'
        className='border rounded-md py-2 px-5 bg-blue-400'
      >
        Book an Appt
      </Link>
    </div>
  );
};

export default ConfirmPatient;
