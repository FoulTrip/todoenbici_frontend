

export const GetUbication = async (latitude: number, longitude: number) => {
  const ApiKey = process.env.OPEN_CAGE_API as string;
  const ApiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${ApiKey}`;

  try {
    const response = await fetch(ApiUrl);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const firstResult = data.results[0];
      const components = firstResult.components;

      return {
        country: components.country,
        city: components.city || components.town || components.village,
      };
    } else {
      throw new Error("No se encontraron resultados de geocodificación.");
    }
  } catch (error) {
    throw new Error(
      `Error al obtener información de geolocalización: ${error}`
    );
  }
};
