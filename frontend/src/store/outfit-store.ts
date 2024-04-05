import { defineStore } from "pinia"
import { Outfit } from "@/types/Outfit"
import axios, { AxiosError, isAxiosError } from "axios"

export const useOutfitStore = defineStore("outfit", {
  state: () => ({
    fetchingOutfit: false,
    randomOutfit: {} as Outfit,
    fetchError: "",
  }),
  actions: {
    async fetchRandomOutfit(gender: string) {
      this.fetchingOutfit = true
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/outfit/random?gender=${gender}`
        )
        const outfit: Outfit = response.data.item
        this.randomOutfit = outfit
        this.fetchError = ""
      } catch (error: AxiosError | unknown) {
        if (isAxiosError(error) && error.response) {
          this.fetchError = error.response.statusText
        } else {
          console.log(error)
        }
      }
      this.fetchingOutfit = false
    },
  },
})
