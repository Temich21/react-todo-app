import { Button } from "@mui/material"
import { PokemonCard } from "../../components/pokemonCard/PokemonCard"
import { usePokemon } from "../../custom hooks/usePokemon"

export const Pokemon: React.FC = () => {
    const {
        onPrevClick,
        onNextClick,
        uploadMoreClick,
        isLoading,
        isNextButtonDisabled,
        isPrevButtonDisabled,
        getVisiblePokemon,
        pokemonList
    } = usePokemon()

    return (
        <main style={{ marginLeft: '20px' }}>
            <h2>Pokemon page</h2>
            <section style={{}}>
                <div style={{ display: 'flex', width: '1100px', justifyContent: 'space-between' }}>
                    {isLoading && <h3>...Loading</h3>}
                    {!!pokemonList.length &&
                        getVisiblePokemon().map(({ id, imgUrl, name, type }) => (
                            <PokemonCard id={id} imgUrl={imgUrl} name={name} type={type} />
                        ))}
                </div>
                <div style={{ display: 'flex', width: '1100px', justifyContent: 'space-between' }}>
                    <Button variant="contained" color="primary" onClick={onPrevClick} disabled={isPrevButtonDisabled}>Previous</Button>
                    <Button variant="contained" color="primary" onClick={uploadMoreClick} >Uplod more</Button>
                    <Button variant="contained" color="primary" onClick={onNextClick} disabled={isNextButtonDisabled}>Next</Button>
                </div>
            </section>
        </main>
    )
}