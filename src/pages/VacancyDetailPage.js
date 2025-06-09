import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function VacancyDetailPage() {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: '',
    field: '',
    experience: '',
    deadline: '',
    description: '',
  });

  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const savedForm = JSON.parse(localStorage.getItem('vacancyData'));
    const savedApplicants = JSON.parse(localStorage.getItem('applicants'));
    if (savedForm) setFormData(savedForm);
    if (savedApplicants) setApplicants(savedApplicants);
  }, []);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

const handleSave = () => {
  localStorage.setItem('vacancyData', JSON.stringify(formData));

  const newApplicant = {
    title: formData.field || 'Unknown',
    name: formData.name || 'Unnamed',
    desc: formData.description || 'No description provided',
    score: '9/10',
  };

  const updatedApplicants = [...applicants, newApplicant];
  setApplicants(updatedApplicants);
  localStorage.setItem('applicants', JSON.stringify(updatedApplicants));
};


  const handleClose = () => {
    localStorage.removeItem('vacancyData');
    localStorage.removeItem('applicants');
    setFormData({
      name: '',
      field: '',
      experience: '',
      deadline: '',
      description: '',
    });
    setApplicants([]);
    navigate('/view-project');
  };

  return (
    <Box sx={{ display: 'flex', p: 5 }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h5" fontWeight={600} mb={3}>
          Front-end developer
        </Typography>

        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            p: 3,
            mb: 4,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Grid container spacing={2} mb={2}>
            <Grid item xs={4}>
              <TextField
                select
                label="Field"
                fullWidth
                size="small"
                value={formData.field}
                onChange={handleChange('field')}
              >
                <MenuItem value="Design">Design</MenuItem>
                <MenuItem value="Development">Development</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Experience"
                fullWidth
                size="small"
                value={formData.experience}
                onChange={handleChange('experience')}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Deadline"
                fullWidth
                size="small"
                value={formData.deadline}
                onChange={handleChange('deadline')}
              />
            </Grid>
          </Grid>

          <TextField
            label="Description"
            multiline
            rows={4}
            fullWidth
            value={formData.description}
            onChange={handleChange('description')}
            sx={{ mb: 2 }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            <Button
              variant="contained"
              onClick={handleSave}
              sx={{
                backgroundColor: '#D1D2D6',
                color: '#000',
                borderRadius: '24px',
                textTransform: 'none',
                fontWeight: 500,
                px: 4,
                '&:hover': { backgroundColor: '#C0C1C4' },
              }}
            >
              Save changes
            </Button>

            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                color: '#d32f2f',
                borderColor: '#d32f2f',
                borderRadius: '24px',
                textTransform: 'none',
                fontWeight: 500,
                px: 4,
                '&:hover': {
                  backgroundColor: '#fbe9e7',
                  borderColor: '#d32f2f',
                },
              }}
            >
              Close vacancy
            </Button>
          </Box>
        </Box>

        <Typography fontSize="18px" fontWeight={600} mb={2}>
          Application from people
        </Typography>

        {applicants.map((applicant, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 2,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <Box>
              <Typography fontWeight={600}>{applicant.title}</Typography>
              <Typography variant="body2">{applicant.name}</Typography>
            </Box>
            <Typography variant="body2" sx={{ maxWidth: 300 }}>
              {applicant.desc}
            </Typography>
            <Typography fontWeight={600}>{applicant.score}</Typography>
            <Typography color="primary" fontWeight={500}>
              Hiring →
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}





