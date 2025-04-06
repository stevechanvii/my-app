import React from 'react';
import ConfirmPatient from './_components/confirm-patient';
import PatientDetails from './_components/patient-details';
import Facilitator from './_components/facilitator';
import { redirect } from 'next/navigation';

type Props = {
  params: { path: string };
};

export type PatientTypes = {
  flag_a?: boolean;
  flag_b?: boolean;
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const page = async ({ params }: Props) => {
  const pathName = params.path;

  // mock api call to get patient, no cache required
  await sleep(1000);
  const patient: PatientTypes = {
    // patientID: 'mock_id',
    // insurance: 'medupa_racv',
    // ...others
  };

  const { flag_a, flag_b } = patient;

  if (flag_a && flag_b) {
    if (pathName !== 'confirm-patient') {
      redirect('/login/confirm-patient');
    }
    return <ConfirmPatient />;
  }

  if (flag_a) {
    if (pathName !== 'patient-details') {
      redirect('/login/patient-details');
    }
    return <PatientDetails />;
  }

  if (pathName !== 'facilitator') {
    redirect('/login/facilitator');
  }
  return <Facilitator />;
};

export default page;
