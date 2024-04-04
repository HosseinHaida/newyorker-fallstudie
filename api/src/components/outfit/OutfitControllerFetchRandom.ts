import { Response, Request } from "express"
import { catchError } from "../../tools/CatchError"
import { GenericError } from "../../types/GenericError"
import { QueryParams } from "../../types/QueryParams"
import { Outfit } from "./Outfit"
import { ProductFiltersBuilder } from "../product/ProductFiltersBuilder"

import ProductModel from "../product/ProductModel"

export default async (req: Request, res: Response) => {
  const { gender }: QueryParams = req.query

  if ((gender && !["male", "female"].includes(gender)) || !gender)
    return catchError({ msg: "no gender specified", code: 400 }, res)

  try {
    const accessory = await ProductModel.FetchSingle(
      new ProductFiltersBuilder({
        gender,
        category: "accessory",
      })
    )
    const innerWear = await ProductModel.FetchSingle(
      new ProductFiltersBuilder({
        gender,
        category: "innerWear",
      })
    )
    const outerWear = await ProductModel.FetchSingle(
      new ProductFiltersBuilder({
        gender,
        category: "outerWear",
      })
    )
    if (!accessory || !innerWear || !outerWear)
      return catchError(
        { msg: "Product-fetch from NewYorker failed", code: 502 },
        res
      )
    const outfit: Outfit = { accessory, innerWear, outerWear }
    const data = { item: outfit }
    res.status(200).send(data)
  } catch (error: unknown) {
    const err = error as GenericError
    return catchError({ msg: err.message, code: 500 }, res)
  }
}
