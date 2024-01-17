import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../step1FormSchema";
import styles from "../styles/step1Form.module.css";

interface Step1FormDetails {
  name: string;
  age: number;
  sex: string;
  mobile?: string;
  govt_issued_id?: string;
  aadhar?: string;
  pan?: string;
}

const Step1Form: React.FC = () => {
  //    const [selectedValue, setSelectedValue] = useState('Male');
  const [govtId, setGovtId] = useState("Aadhar");

  const { register, handleSubmit, formState } = useForm<Step1FormDetails>({
    resolver: yupResolver(schema),
  });

  const handleGovtId = (event: any) => {
    setGovtId(event.target.value);
    console.log(event.target.value);
  };

  const onSubmit: SubmitHandler<Step1FormDetails> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5" gutterBottom>
        Personal Details
      </Typography>

      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.labelAndField}>
            <label htmlFor="name">
              Name<span className={styles.mandatory}>*</span>:
            </label>
            <div className={styles.fieldAndError}>
              <TextField
                label="Name"
                id="name"
                {...register("name", { required: "Name is required" })}
                variant="outlined"
                margin="normal"
              />
              <sub className={styles.errorMsg}>
                {formState.errors.name?.message}
              </sub>
            </div>
          </div>

          <div className={styles.labelAndField}>
            <label htmlFor="age">
              Age<span className={styles.mandatory}>*</span>:
            </label>
            <div className={styles.fieldAndError}>
              <TextField
                label="Age"
                id="age"
                {...register("age", {
                  required: "Age is required",
                  valueAsNumber: true,
                })}
                variant="outlined"
                margin="normal"
              />
              <sub className={styles.errorMsg}>
                {formState.errors.age?.message}
              </sub>
            </div>
          </div>

          <div className={styles.labelAndField}>
            <label htmlFor="gender">
              Gender<span className={styles.mandatory}>*</span>:
            </label>
            <div className={styles.fieldAndError}>
              <FormControl className={styles.dropdown}>
                <Select
                  label="Sex"
                  id="gender"
                  defaultValue="default"
                  {...register("sex", { required: "Sex is required" })}
                >
                  <MenuItem value="default" disabled>
                    Select gender
                  </MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
              <sub className={styles.errorMsg}>
                {formState.errors.sex?.message}
              </sub>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.labelAndField}>
            <label htmlFor="mobile">Mobile:</label>
            {/* <TextField label="Sex" {...register('sex', { required: 'Sex is required' })} variant="outlined" margin="normal"  /> */}
            <TextField
              label="Mobile"
              id="mobile"
              {...register("mobile")}
              variant="outlined"
              margin="normal"
            />
          </div>

          <div className={styles.labelAndField}>
            <label htmlFor="govtId">Govt Issued ID:</label>
            <FormControl className={styles.dropdown} id={styles.govtId}>
              <Select
                label="Govt Issued ID"
                id="govtId"
                onChange={handleGovtId}
                value={govtId}
              >
                <MenuItem value="Aadhar">Aadhar</MenuItem>
                <MenuItem value="Pan">Pan</MenuItem>
              </Select>
            </FormControl>

            {/* <TextField label="Govt Issued ID" {...register('govt_issued_id')} variant="outlined" margin="normal"  /> */}
            {govtId == "Aadhar" ? (
              <TextField
                label="Enter Aadhar number"
                {...register("aadhar")}
                variant="outlined"
                margin="normal"
              />
            ) : (
              <TextField
                label="Enter PAN number"
                {...register("pan")}
                variant="outlined"
                margin="normal"
              />
            )}
          </div>
        </div>
        <Button
          className={styles.btn}
          type="submit"
          variant="contained"
          disabled={formState.isSubmitting}
          color="primary"
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default Step1Form;
