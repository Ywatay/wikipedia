import React, { useState } from "react";
import EventList from "../../components/EventList/EventList";
import { useLazyGetEventsQuery } from "../../services/eventsApi/eventsApi";

interface Event {
  year: number;
  text: string;
  pages: {
    titles: {
      normalized: string;
    };
    content_urls: {
      desktop: {
        page: string;
      };
    };
  }[];
}

const EventLogic: React.FC = () => {
  const [sortAscending, setSortAscending] = useState(true);
  const [trigger, { data, error, isLoading }] = useLazyGetEventsQuery();

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const fetchData = () => {
    trigger({ month, day });
  };

  const sortEvents = () => {
    setSortAscending(!sortAscending);
  };

  const sortedEvents: Event[] = Array.isArray(data?.events) 
    ? [...data?.events].sort((a, b) =>
        sortAscending ? a.year - b.year : b.year - a.year
      )
    : []; 

  const errorMessage = error 
    ? 'Error fetching data'
    : null;

  return (
    <EventList
      events={data?.events}
      sortedEvents={sortedEvents}
      loading={isLoading}
      error={errorMessage}
      sortEvents={sortEvents}
      fetchData={fetchData}
      sortAscending={sortAscending}
    />
  );
};

export default EventLogic;
