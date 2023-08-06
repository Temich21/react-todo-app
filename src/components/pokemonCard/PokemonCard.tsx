import { IPokemon, PokemonColorType } from "../../models/IPokemon"

export const PokemonCard: React.FC<IPokemon> = (pokemon: IPokemon) => {
    const colors: Record<PokemonColorType, string> = {
        grass: '#63BB5B',
        fire: '#FF9C54',
        water: '#4E90D5',
        electric: '#F3D23B',
        ice: '#74CEC0',
        poison: '#AB6AC8',
        ground: '#D97746',
        rock: '#C7B78B',
        bug: '#90C12C',
        dragon: '#0A6DC4',
        normal: '#f9199A1',
        flying: '#8FA8DD',
        fighting: '#D80A49',
        psychic: '#F97176',
        ghost: '#5269AC',
        dark: '#5A5366',
        steel: '#5A8EA1',
        fairy: '#EC8FE6',
    }

    const typeColor: PokemonColorType = pokemon.type

    return (
        <div
            key={pokemon.id}
            style={{
                backgroundColor: colors[typeColor],
                borderRadius: '20px',
                boxShadow: '0 3px 15px rgba(100, 100, 100, 0.5)',
                margin: '10px',
                padding: '20px',
                width: '200px',
                height: '305px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <img src={pokemon.imgUrl} alt={pokemon.name} />
            <p style={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                padding: '5px 10px'
            }}>{`#${String(pokemon.id).padStart(3, '0')}`}</p>
            <p style={{
                margin: '15px 0 7px',
                letterSpacing: '0.5px',
                fontWeight: 'bold',
                fontSize: '20px'
            }}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
            <p style={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                padding: '5px 10px'
            }}>{typeColor}</p>
        </div >
    )
}