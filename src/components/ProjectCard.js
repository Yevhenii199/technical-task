import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Typography,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import { RiNotificationFill } from 'react-icons/ri';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ProjectCard() {
  const navigate = useNavigate();
  const [activeProjects, setActiveProjects] = useState([]);
  const [finishedProjects, setFinishedProjects] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];

    const today = new Date();
    const active = [];
    const finished = [];

    storedProjects.forEach((project) => {
      const projectDeadline = new Date(project.deadline);
      if (projectDeadline >= today.setHours(0, 0, 0, 0)) {
        active.push(project);
      } else {
        finished.push(project);
      }
    });

    setActiveProjects(active);
    setFinishedProjects(finished);
  }, []);

  const handleCreateProject = () => {
    navigate('/create-project');
  };

  const renderProjectBox = (project) => (
    <Box
      key={project.name}
      sx={{
        border: '1px solid #E0E0E0',
        borderRadius: '8px',
        p: 2,
        height: '100%',
        position: 'relative'
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Aeroport, sans-serif',
          fontWeight: 700,
          fontSize: '18px',
          mb: '12px'
        }}
      >
        {project.name}
      </Typography>
      <List sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <ListItem disablePadding sx={{ alignItems: 'flex-start' }}>
          <ListItemIcon sx={{ minWidth: '24px' }}>
            <CheckCircleIcon sx={{ color: '#0284C7', fontSize: '12px' }} />
          </ListItemIcon>
          <ListItemText
            primary={project.description || 'No description provided'}
            primaryTypographyProps={{
              fontFamily: 'Aeroport, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              color: '#000000',
              lineHeight: '24px'
            }}
          />
        </ListItem>
      </List>
      <Box sx={{ position: 'absolute', bottom: 16, right: 16, display: 'flex', gap: 1 }}>
        <MessageIcon sx={{ fontSize: 20, color: '#7A7A7A' }} />
        <RiNotificationFill size={20} color="#7A7A7A" />
      </Box>
    </Box>
  );

  return (
    <Card
      sx={{
        width: '1160px',
        backgroundColor: '#F3F4F6',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        borderTopLeftRadius: '16px',
        boxSizing: 'border-box',
        p: '40px 40px 40px 34px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '12px' }}>
        <Typography
          sx={{
            fontFamily: 'Aeroport, sans-serif',
            fontWeight: 500,
            fontSize: '32px',
            color: '#000000'
          }}
        >
          Active projects
        </Typography>
        <Button
          variant="contained"
          onClick={handleCreateProject}
          sx={{
            width: '186px',
            height: '47px',
            fontFamily: 'Aeroport, sans-serif',
            fontWeight: 600,
            fontSize: '16px',
            borderRadius: '24px',
            background: '#D1D2D6',
            color: '#000000',
            '&:hover': { background: '#C0C1C4' }
          }}
        >
          Create project
        </Button>
      </Box>

      {/* Active Projects */}
      <Grid container spacing={4}>
        {activeProjects.length > 0 ? (
          activeProjects.map((project, idx) => (
            <Grid item xs={6} key={idx}>
              {renderProjectBox(project)}
            </Grid>
          ))
        ) : (
          <Typography>No active projects</Typography>
        )}
      </Grid>

      {/* Passed Projects */}
      <Typography
        sx={{
          fontFamily: 'Aeroport, sans-serif',
          fontWeight: 700,
          fontSize: '20px',
          color: '#000000',
          mt: 4,
        }}
      >
        Passed projects
      </Typography>
      <Grid container spacing={4}>
        {finishedProjects.length > 0 ? (
          finishedProjects.map((project, idx) => (
            <Grid item xs={6} key={idx}>
              {renderProjectBox(project)}
            </Grid>
          ))
        ) : (
          <Typography>No passed projects</Typography>
        )}
      </Grid>
    </Card>
  );
}

