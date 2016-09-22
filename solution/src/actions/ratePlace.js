const ratePlace = (placeId) => {
  return {
    type: 'RATE_PLACE',
    placeId
  };
};

export default ratePlace;