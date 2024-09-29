const { getAIPreferences } = require('../services/aiService');
const { getPlaces, getNearbyPlaces, getDirections } = require('../services/placesService');

async function generateRoute(req, res) {
  const { preferences, location, mode, radius } = req.body;

  try {
    // Step 1: Get AI-suggested attractions
    const aiSuggestions = await getAIPreferences(preferences);

    // Step 2: Use Google Places API to find actual places
    const attractions = await getPlaces(aiSuggestions, location, radius);

    // Step 3: Find nearby cafes, restaurants, and parks
    const nearbyCafes = await getNearbyPlaces('cafe', location, radius);
    const nearbyRestaurants = await getNearbyPlaces('restaurant', location, radius);
    const nearbyParks = await getNearbyPlaces('park', location, radius);

    // Step 4: Provide directions between locations
    if (attractions.length > 1) {
      const directions = await getDirections(attractions[0].geometry.location, attractions[1].geometry.location, mode);
      res.status(200).send({ attractions, nearbyCafes, nearbyRestaurants, nearbyParks, directions });
    } else {
      res.status(200).send({ attractions, nearbyCafes, nearbyRestaurants, nearbyParks });
    }
  } catch (error) {
    res.status(500).send({ error: 'Route generation failed' });
  }
}

module.exports = { generateRoute };
