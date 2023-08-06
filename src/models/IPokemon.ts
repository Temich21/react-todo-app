export type IPokemon = {
    id: number
    name: string
    imgUrl: string
    type: PokemonColorType
}

export type PokemonColorType = 'grass' | 'fire' | 'water' | 'electric' | 'ice' | 'poison' | 'ground' | 'rock' | 'bug' | 'dragon' | 'normal' | 'flying' | 'fighting' | 'psychic' | 'fairy' | 'ghost' | 'dark' | 'steel' | 'fairy'
