import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCard from '../ProjectCard';
import { BrowserRouter } from 'react-router-dom';

// Utility to wrap component in Router context
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('ProjectCard Component', () => {
  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  test('renders Active Projects heading', () => {
    renderWithRouter(<ProjectCard />);
    expect(screen.getByText(/Active projects/i)).toBeInTheDocument();
  });

  test('renders Passed Projects heading', () => {
    renderWithRouter(<ProjectCard />);
    expect(screen.getByText(/Passed projects/i)).toBeInTheDocument();
  });

  test('renders default active project tasks', () => {
    renderWithRouter(<ProjectCard />);
    const taskItem = screen.getAllByText(/Finished creating visual for Facebook/i);
    expect(taskItem.length).toBeGreaterThan(0);
  });

  test('renders passed task block', () => {
    renderWithRouter(<ProjectCard />);
    expect(
      screen.getByText(/Analyzing research and providing ideas for improving product/i)
    ).toBeInTheDocument();
  });

  test('Create project button exists and is styled correctly', () => {
    renderWithRouter(<ProjectCard />);
    const button = screen.getByRole('button', { name: /Create project/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle('border-radius: 24px');
  });

  test('message and notification icons are present', () => {
    renderWithRouter(<ProjectCard />);
    const messageIcons = screen.getAllByTestId('MessageIcon');
    expect(messageIcons.length).toBeGreaterThan(0);
  });

  test('should not crash with empty localStorage projects', () => {
    localStorage.setItem('projects', JSON.stringify([]));
    expect(() => renderWithRouter(<ProjectCard />)).not.toThrow();
  });

  test('should render projects from localStorage', () => {
    const mockProjects = [
      {
        name: 'Test Project',
        description: 'A project for testing',
        deadline: '2999-12-31', // Future date
        field: 'Development',
        experience: '3 years'
      }
    ];
    localStorage.setItem('projects', JSON.stringify(mockProjects));
    renderWithRouter(<ProjectCard />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });
});
