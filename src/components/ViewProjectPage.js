import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function ViewProjectPage() {
  const location = useLocation();
  const locationState = location.state;

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('projectData');
    return saved ? JSON.parse(saved) : locationState || {
      name: '',
      field: '',
      experience: '',
      deadline: '',
      description: ''
    };
  });

  const [vacancies, setVacancies] = useState(() => {
    const saved = localStorage.getItem('vacancies');
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem('projectData', JSON.stringify(data));
  }, [data]);


  useEffect(() => {
    localStorage.setItem('vacancies', JSON.stringify(vacancies));
  }, [vacancies]);

  const handleInputChange = (field) => (e) => {
    setData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleDeleteProject = () => {
    setData({
      name: '',
      field: '',
      experience: '',
      deadline: '',
      description: ''
    });
    setVacancies([]);
    localStorage.removeItem('projectData');
    localStorage.removeItem('vacancies');
  };

  const handleAddVacancy = () => {
    const newVacancy = {
      role: data.field || 'Unknown Role',
      name: data.name || 'Unnamed Applicant',
      description: data.description || 'No description provided.',
      rating: '—',
    };

    const updatedVacancies = [...vacancies, newVacancy];
    setVacancies(updatedVacancies);
  };

  return (
    <Box
      sx={{
        width: '1166px',
        backgroundColor: '#F7F7F8',
        padding: '40px',
        borderRadius: '16px',
        position: 'relative',
      }}
    >
      {/* Delete Button */}
      <Button
        onClick={handleDeleteProject}
        variant="contained"
        sx={{
          width: '183px',
          height: '47px',
          position: 'absolute',
          right: '40px',
          backgroundColor: '#E0E0E0',
          color: '#000',
          textTransform: 'none',
          borderRadius: '12px',
          '&:hover': { backgroundColor: '#d5d5d5' },
        }}
      >
        Delete project
      </Button>

      {/* Project Title */}
      <Typography
        sx={{
          fontSize: '24px',
          fontWeight: 600,
          mb: '32px',
          fontFamily: 'Aeroport, sans-serif',
        }}
      >
        Creating visual materials for social media
      </Typography>

      {/* Main Card */}
      <Box
        sx={{
          width: '1040px',
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '24px',
          boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        {/* Editable Inputs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '24px', mb: '24px' }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ mb: 1, fontSize: 18 }}>Field</Typography>
            <TextField
              fullWidth
              value={data.field}
              onChange={handleInputChange('field')}
              variant="outlined"
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ mb: 1, fontSize: 18 }}>Experience</Typography>
            <TextField
              fullWidth
              value={data.experience}
              onChange={handleInputChange('experience')}
              variant="outlined"
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ mb: 1, fontSize: 18 }}>Deadline</Typography>
            <TextField
              fullWidth
              value={data.deadline}
              onChange={handleInputChange('deadline')}
              variant="outlined"
            />
          </Box>
        </Box>

        {/* Description */}
        <Box>
          <Typography sx={{ mb: 1, fontSize: 18 }}>Description</Typography>
          <TextField
            multiline
            rows={4}
            fullWidth
            value={data.description}
            onChange={handleInputChange('description')}
            variant="outlined"
          />
        </Box>

        {/* Add Vacancy Button */}
        <Button
          onClick={handleAddVacancy}
          variant="contained"
          sx={{
            mt: '32px',
            backgroundColor: '#D1D2D6',
            color: '#000',
            borderRadius: '24px',
            width: '180px',
            height: '48px',
            fontWeight: 600,
            textTransform: 'none',
            '&:hover': { backgroundColor: '#C0C1C4' },
          }}
        >
          Add vacancy
        </Button>

        {/* Hired People Section */}
        {vacancies.length > 0 && (
          <Box sx={{ mt: 5 }}>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                mb: 2,
                fontFamily: 'Aeroport, sans-serif',
              }}
            >
              Hired people
            </Typography>

            {/* Vacancy Cards */}
            {vacancies.map((vacancy, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 0',
                  borderBottom: '1px solid #E0E0E0',
                }}
              >
                <Typography sx={{ width: '159px', fontSize: '24px', fontWeight: 500 }}>
                  {vacancy.role}
                                  <Typography sx={{ width: '180px', fontSize: '14px', color: '#6F6F6F' }}>
                  {vacancy.name}
                </Typography>
                </Typography>

                <Typography sx={{ width: '400px', fontSize: '14px', color: '#333' }}>
                  {vacancy.description}
                </Typography>

                <Typography sx={{ width: '60px', fontSize: '14px' }}>
                  {vacancy.rating}

                </Typography>

                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#3B3B3B',
                    cursor: 'pointer',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  More →
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}



