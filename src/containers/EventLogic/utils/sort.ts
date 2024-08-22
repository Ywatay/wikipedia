export const sortByYear = (events: any[], ascending: boolean) => {
    return [...events].sort((a, b) =>
      ascending ? a.year - b.year : b.year - a.year
    );
  };
  