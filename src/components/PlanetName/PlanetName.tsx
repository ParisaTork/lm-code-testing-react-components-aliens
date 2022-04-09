interface PlanetNameProps { 
	planetName: string;
	onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({ planetName, onChangePlanetName }) =>  {

  return (
    <>
        <label htmlFor='planetName'>Planet Name</label>
        <input id='planetName' type='text' placeholder="Enter a planet name" value={planetName} onChange={onChangePlanetName} />
    </> );
};

export default PlanetName;