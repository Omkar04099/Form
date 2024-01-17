import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('Name is required').min(3, 'Name should be at least 3 characters'),
  age: yup.number().typeError('Please enter a valid age').required('Age is required').positive('Age cannot be negative or zero'),
  sex: yup.string().required('Sex is required').oneOf(['Male', 'Female'], 'Please select a gender'),
  mobile: yup.string().matches(/^[6-9]\d{9}$/, 'Invalid Mobile Number'),
  govt_issued_id: yup.string().oneOf(['Aadhar', 'PAN'], 'Invalid ID Type'),
  aadhar:yup.string().matches(/^[2-9]\d{11}$/, 'Aadhar should have 12 numeric digits and should not start with 0 and 1'),
  pan:yup.string().matches(/^[A-Za-z0-9]{10}$/, 'Invalid PAN format')
});
