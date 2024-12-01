class HFilter {
  static byState<T>(data: T[], filterStates: Record<string, string[]>): T[] {
    let filtered = data;

    if (Object.keys(filterStates).length > 0) {
      filtered = data.filter((item) => {
        return Object.keys(filterStates).every((key) => {
          const filterValues = filterStates[key].map((value) =>
            value.toLowerCase(),
          );

          const itemValue = (item as Record<string, unknown>)[key];
          return (
            filterValues.length === 0 ||
            ((typeof itemValue === "string" || typeof itemValue === "number") &&
              filterValues.includes(itemValue.toString().toLowerCase()))
          );
        });
      });
    }

    return filtered;
  }

  static byQuery<T>(data: T[], searchQuery: string): T[] {
    let filtered = data;
    if (searchQuery) {
      filtered = filtered.filter((item) => {
        const values = Object.values(item as Record<string, unknown>)
          .map((v) =>
            typeof v === "string" || typeof v === "number" ? v.toString() : "",
          )
          .join(" ")
          .toLowerCase();

        return values.includes(searchQuery.toLowerCase());
      });
    }
    return filtered;
  }
}

export default HFilter;
