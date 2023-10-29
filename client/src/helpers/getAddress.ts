

const getAddress = async (lat: number, lng: number) => {
  // Make a request to the Google Maps API to get the address
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
  );

  // Check if the request was successful
  if (response.status === 200) {
    // Parse the response
    const data = await response.json();

    // Return the address
    return data.results[0].formatted_address;
  } else {
    // Return an empty string
    return '';
  }
};

export default getAddress;
