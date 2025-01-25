const shipFactory = () => {
  let id = 0;

  const ship = (coordinates: string[]) => {
    const shipId: number = ++id;
    let hits: string[] = [];
    const getHits = () => hits;
    const receiveHit = (value: string) => {
      const hit = coordinates.find((el) => el === value);
      if (hit) {
        hits = [...hits, hit];
        return hit;
      }
    };
    const isDestroyed = () => {
      return coordinates.length === getHits().length;
    };
    return { shipId, getHits, isDestroyed, receiveHit };
  };
  return ship;
};

export default shipFactory;
