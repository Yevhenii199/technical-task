import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CreateProjectPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    field: '',
    experience: '',
    deadline: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.field.trim()) newErrors.field = 'Field is required';
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
    if (!formData.deadline.trim()) newErrors.deadline = 'Deadline is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Сохраняем данные проекта в localStorage
      localStorage.setItem('projectData', JSON.stringify(formData));
      navigate('/view-project');
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#F7F7F8',
        padding: '40px',
        boxSizing: 'border-box',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Aeroport, sans-serif',
          fontWeight: 600,
          fontSize: '32px',
          color: '#000000',
          marginBottom: '40px',
        }}
      >
        Creating Project
      </Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: '1160px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
          borderRadius: '24px',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <Box sx={{ display: 'flex', gap: '24px' }}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              select
              label="Field"
              name="field"
              value={formData.field}
              onChange={handleChange}
              error={!!errors.field}
              helperText={errors.field}
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            >
              <MenuItem value="Design">Design</MenuItem>
              <MenuItem value="Development">Development</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
            </TextField>
          </Box>

          <Box sx={{ display: 'flex', gap: '24px' }}>
            <TextField
              label="Experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              error={!!errors.experience}
              helperText={errors.experience}
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              error={!!errors.deadline}
              helperText={errors.deadline}
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Box>

          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              mt: '16px',
              borderRadius: '24px',
              backgroundColor: '#D1D2D6',
              color: '#000000',
              height: '48px',
              width: '186px',
              fontFamily: 'Aeroport, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              alignSelf: 'flex-start',
              '&:hover': { backgroundColor: '#C0C1C4' }
            }}
          >
            Create project
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

