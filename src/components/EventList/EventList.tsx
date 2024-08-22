import React from "react";
import styles from "./EventList.module.scss";

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

interface EventListProps {
  events: Event[];
  sortedEvents: Event[];
  loading: boolean;
  error: string | null;
  sortEvents: () => void;
  fetchData: () => void;
  sortAscending: boolean;
}

const EventList: React.FC<EventListProps> = ({
  events,
  sortedEvents,
  loading,
  error,
  sortEvents,
  fetchData,
  sortAscending,
}) => {

  return (
    <div style={{ padding: "20px" }}>
      <button className={styles.load} onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Load Today's Events"}
      </button>

      {events?.length > 0 && !loading && (
        <button className={styles.sort} onClick={sortEvents} style={{ marginLeft: '10px' }}>
          Sort by Year ({sortAscending ? "Ascending" : "Descending"})
        </button>
      )}

      {loading && <p>Loading...</p>}

      {error && (
        <div style={{ color: 'red', border: '1px solid red', padding: '10px', marginTop: '10px' }}>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}

      <ul className={styles.root}>
        {sortedEvents.map((event, index) => (
          <li  key={index}>
            <strong>{event.year}</strong>: {event.text}
            <ul className={styles.item}>
              {event.pages.map((page, pageIndex) => (
                <li key={pageIndex}>
                  <a href={page.content_urls.desktop.page} target="_blank" rel="noopener noreferrer">
                    {page.titles.normalized}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
