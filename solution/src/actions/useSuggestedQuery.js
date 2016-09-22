const useSuggestedQuery = (query) => {
  return {
    type: 'USE_SUGGESTED_QUERY',
    query
  };
};

export default useSuggestedQuery;
