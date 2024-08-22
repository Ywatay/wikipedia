import { render, screen, fireEvent } from '@testing-library/react';
import EventList from '../EventList';
import React from 'react';

const mockEvents = [
  { year: 2024, text: 'Event', pages: [{ titles: { normalized: 'Event Title' }, content_urls: { desktop: { page: '/event' } } }] },
];

test('sorts events when button is clicked', () => {
  const mockSortEvents = jest.fn();
  render(<EventList events={mockEvents} sortedEvents={mockEvents} loading={false} error={null} sortEvents={mockSortEvents} fetchData={() => {}} sortAscending={true} />);
  
  const sortButton = screen.getByText(/Sort by Year/i);
  fireEvent.click(sortButton);
  
  expect(mockSortEvents).toHaveBeenCalled();
});
