import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import CreateProjectPage from './components/CreateProjectPage';
import ViewProjectPage from './components/ViewProjectPage';
import VacanciesPage from './pages/VacanciesPage';
import VacancyDetailPage from './pages/VacancyDetailPage';

function App() {
  return (
    <Box
      sx={{
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '34px',
        }}
      >
        <Sidebar />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/projects" element={<ProjectCard />} />
            <Route path="/create-project" element={<CreateProjectPage />} />
            <Route path="/view-project" element={<ViewProjectPage />} />
            <Route path="/vacancies" element={<VacanciesPage />} />
            <Route path="/vacancy/:id" element={<VacancyDetailPage />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
