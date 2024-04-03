import { defineStore } from "pinia"
import { OutfitI } from "@/types/Outfit"
import { OutfitPieceI } from "@/types/OutfitPiece"
import axios from "axios"
import { apiUrl } from "./constants"

const piece: OutfitPieceI = {
  gender: "male",
  category: "accessory",
  images: [],
}

export const useOutfitStore = defineStore("outfit", {
  state: () => ({
    randomOutfit: {
      innerWear: piece,
      outerWear: piece,
      accessory: piece,
    } as OutfitI,
  }),
  actions: {
    async fetchRandomOutfit() {
      await axios.get(apiUrl + "/get-random-outfit")
    },
  },
})
