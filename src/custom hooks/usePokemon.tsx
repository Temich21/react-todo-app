import { useEffect, useState } from "react"
import { fetchPokemon } from "../utils/fetchPokemon"
import { IPokemon } from "../models/IPokemon"
import { sliderLength } from "../constants/pokemonConstants"

export const usePokemon = () => {
    const [pokemonList, setPokemonList] = useState<IPokemon[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [slideIdx, setSlideIdx] = useState(0)

    const isPrevButtonDisabled = slideIdx === 0
    const isNextButtonDisabled = slideIdx === pokemonList.length - sliderLength

    const getVisiblePokemon = () => {
        if (!!pokemonList.length) {
            return pokemonList.slice(slideIdx, slideIdx + sliderLength)
        }
        return []
    }

    useEffect(() => {
        const getPokemon = async () => {
            setIsLoading(true);
            const { data } = await fetchPokemon();

            if (!!data?.length) {
                setPokemonList(data);
                setIsLoading(false);
            }
        }

        getPokemon()
    }, [])

    const handlePrevClick = () => {
        if (slideIdx > 0) {
            setSlideIdx(slideIdx - 1);
        }
    }

    const handleNextClick = () => {
        if (slideIdx < pokemonList.length - sliderLength) {
            setSlideIdx(slideIdx + 1);
        }
    }

    const handleUploadMore = async () => {
        const { data } = await fetchPokemon(5, pokemonList.length)

        if (!!data?.length) {
            setPokemonList([...pokemonList, ...data])
        }
    }

    return {
        pokemonList,
        slideIdx,
        setSlideIdx,
        isLoading,
        getVisiblePokemon,
        onPrevClick: handlePrevClick,
        onNextClick: handleNextClick,
        uploadMoreClick: handleUploadMore,
        isPrevButtonDisabled,
        isNextButtonDisabled
    }
};