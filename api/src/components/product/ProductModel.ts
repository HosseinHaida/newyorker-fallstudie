import axios from "axios"
import { nYProductsQuery } from "../../variables"
import { ProductFiltersBuilder } from "./ProductFiltersBuilder"
import { Product } from "./Product"

// Fetches a Product based on filters
// returns null if faces an error
export const FetchSingle = async (
  filters: ProductFiltersBuilder
): Promise<Product | null> => {
  let fetchedProduct: Product | null = null
  try {
    await axios
      .get(
        `${nYProductsQuery}/query?filters[country]=${filters.country}&filters[gender]=${filters.gender}&filters[limit]=${filters.limit}&filters[offset]=${filters.offset}&filters[web_category]=${filters.category}`
      )
      .then((res) => {
        let randomIndex = Math.floor(Math.random() * 10) + 1
        fetchedProduct = res.data.items[randomIndex]
      })
  } catch (error) {
    console.log(error)
  }

  return fetchedProduct
}

export default {
  FetchSingle,
}
