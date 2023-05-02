export const cityViewColaboradores = async (colaborador, cities) => {
    const { city_id, ...resto } = colaborador;
    const ciudad = cities[city_id] || '';
    return {
      ...resto,
      ciudad,
    };
  };