export const applyFilterByStateAndQuery = (
  data: any[],
  filterStates: Record<string, string[]>,
  searchQuery: string,
) => {
  let filtered = data;

  // SEARCH BY STATUSES
  if (Object.keys(filterStates).length > 0) {
    filtered = data.filter((item) => {
      return Object.keys(filterStates).every((key) => {
        const filterValues = filterStates[key].map((value) =>
          value.toLowerCase(),
        );
        return (
          filterValues.length === 0 ||
          filterValues.includes(item[key]?.toLowerCase())
        );
      });
    });
  }

  // SEARCH BY QUERY
  if (searchQuery) {
    filtered = filtered.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase()),
    );
  }
  return filtered;
};
