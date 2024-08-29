import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';

type TaxPayerFormData = {
  firstName: string;
  lastName: string;
  address: string;
};

type TaxPayerFormProps = {
  onSubmit: (data: TaxPayerFormData) => void;
};

const TaxPayerForm: React.FC<TaxPayerFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit, reset } = useForm<TaxPayerFormData>();

  const onSubmitForm = (data: TaxPayerFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px' }}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{ required: 'First name is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="First Name"
              variant="outlined"
              error={!!error}
              helperText={error?.message}
              className="retro-input"
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          rules={{ required: 'Last name is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Last Name"
              variant="outlined"
              error={!!error}
              helperText={error?.message}
              className="retro-input"
            />
          )}
        />
        <Controller
          name="address"
          control={control}
          defaultValue=""
          rules={{ required: 'Address is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Address"
              variant="outlined"
              error={!!error}
              helperText={error?.message}
              className="retro-input"
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary" className="retro-button">
          Add TaxPayer
        </Button>
      </Box>
    </form>
  );
};

export default TaxPayerForm;
