import { getRandomItem } from "../../helpers"
import { ProductFiltersRaw } from "./Product"

// Transforms ProductFiltersRaw
// into understandable filter properties
// acceptable by api.newyorker.de
export class ProductFiltersBuilder {
  gender: string
  country: string
  category!: string
  offset: number
  limit: number

  constructor({ gender, category }: ProductFiltersRaw) {
    this.gender = gender.toUpperCase()
    this.country = "de"
    this.offset = Math.floor(Math.random() * 500) + 1
    this.limit = 10
    if (gender === "male")
      switch (category) {
        case "accessory":
          this.category =
            "Accessoires,WCA02305,WCA02306,WCA02304,WCA02303,WCA02308,WCA02309,WCA02307,WCA02301,WCA02302"
          break
        case "innerWear":
          this.category = getRandomItem([
            "T-Shirts,WCA00220,WCA00221,WCA00222,WCA00223",
            "sweatshirts_pullover,WCA02222,WCA02223,WCA02224,WCA02221",
            "Hemden,WCA02211",
          ])
          break
        case "outerWear":
          this.category = getRandomItem([
            "Hosen,WCA02252,WCA02251,WCA02253",
            "denim,WCA02246,WCA02242,WCA02241,WCA02243,WCA02245,WCA02244",
          ])
          break
      }
    else if (gender === "female")
      switch (category) {
        case "accessory":
          this.category =
            "Accessoires,WCA01156,WCA01159,WCA01155,WCA01152,WCA01158,WCA01153,WCA01157,WCA01154"
          break
        case "innerWear":
          this.category = getRandomItem([
            "tops_t-shirts,WCA00111,WCA00112,WCA00110",
            "Sweatshirts,WCA00132,WCA00131",
            "Blusen,WCA00122,WCA00121",
          ])
          break
        case "outerWear":
          this.category = getRandomItem([
            "Hosen,WCA00172,WCA00173,WCA00171",
            "roecke,WCA00161,WCA00162,WCA00163",
          ])
          break
      }
  }
}
