require('dotenv').config();
const axios = require('axios');

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

async function getPlaces(query, location, radius) {
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&location=${location}&radius=${radius}&key=${GOOGLE_API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching places:', error);
    throw new Error('Places search failed.');
  }
}

async function getNearbyPlaces(type, location, radius) {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?type=${type}&location=${location}&radius=${radius}&key=${GOOGLE_API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching nearby places:', error);
    throw new Error('Nearby search failed.');
  }
}

async function getDirections(origin, destination, mode) {
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=${mode}&key=${GOOGLE_API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.routes;
  } catch (error) {
    console.error('Error fetching directions:', error);
    throw new Error('Directions request failed.');
  }
}

module.exports = { getPlaces, getNearbyPlaces, getDirections };
