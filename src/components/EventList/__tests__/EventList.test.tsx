import { render, screen } from '@testing-library/react';
import EventList from '../EventList';
import React from 'react';

const mockEvents = [
  {
    year: 2024,
    text: 'Event',
    pages: [
      {
        titles: { normalized: 'Event Title' },
        content_urls: { desktop: { page: '/event' } },
      },
    ],
  },
];

test('renders event list with events', () => {
  render(
    <EventList
      events={mockEvents}
      sortedEvents={mockEvents}
      loading={false}
      error={null}
      sortEvents={() => {}}
      fetchData={() => {}}
      sortAscending={true}
    />
  );

  const eventItems = screen.getAllByText(/Event/);

  expect(eventItems.length).toBeGreaterThan(0);

});
