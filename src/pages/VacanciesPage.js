// src/pages/VacanciesPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Grid,
} from '@mui/material';

export default function VacanciesPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    field: '',
    experience: '',
    country: '',
    description: '',
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const isFormValid = Object.values(formData).every((val) => val.trim() !== '');

  const handleCreateVacancyClick = () => {
    if (!isFormValid) return;
    localStorage.setItem('vacancyData', JSON.stringify(formData));
    navigate('/vacancy/1');
  };

  return (
    <Box sx={{ display: 'flex', width: '1166px', height: '859px' }}>
      <Box
        sx={{
          backgroundColor: '#F6F6F6',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>
            Create vacancy
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: isFormValid ? '#D1D2D6' : '#f0f0f0',
              color: '#000',
              borderRadius: '24px',
              height: '40px',
              px: '20px',
              textTransform: 'none',
              fontWeight: 500,
              cursor: isFormValid ? 'pointer' : 'not-allowed',
              '&:hover': {
                backgroundColor: isFormValid ? '#C0C1C4' : '#f0f0f0',
              },
            }}
            onClick={handleCreateVacancyClick}
            disabled={!isFormValid}
          >
            Create vacancy
          </Button>
        </Box>

        <Box
          sx={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Name"
                fullWidth
                variant="outlined"
                size="small"
                value={formData.name}
                onChange={handleChange('name')}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                label="Field"
                fullWidth
                size="small"
                value={formData.field}
                onChange={handleChange('field')}
              >
                <MenuItem value="">Select field</MenuItem>
                <MenuItem value="Design">Design</MenuItem>
                <MenuItem value="Development">Development</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                label="Experience"
                fullWidth
                size="small"
                value={formData.experience}
                onChange={handleChange('experience')}
              >
                <MenuItem value="">Select experience</MenuItem>
                <MenuItem value="Junior">Junior</MenuItem>
                <MenuItem value="Mid">Mid</MenuItem>
                <MenuItem value="Senior">Senior</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Country"
                fullWidth
                variant="outlined"
                size="small"
                value={formData.country}
                onChange={handleChange('country')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                value={formData.description}
                onChange={handleChange('description')}
              />
            </Grid>
          </Grid>

          <Box
            sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: isFormValid ? '#D1D2D6' : '#f0f0f0',
                color: '#000',
                borderRadius: '24px',
                height: '40px',
                px: '20px',
                textTransform: 'none',
                fontWeight: 500,
                cursor: isFormValid ? 'pointer' : 'not-allowed',
                '&:hover': {
                  backgroundColor: isFormValid ? '#C0C1C4' : '#f0f0f0',
                },
              }}
              onClick={handleCreateVacancyClick}
              disabled={!isFormValid}
            >
              Create vacancy
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
