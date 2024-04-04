export interface ProductFiltersRaw {
  gender: "male" | "female"
  category: "accessory" | "innerWear" | "outerWear"
}

// From NY Endpoint
export interface Product {
  global_item_id: string
  id: string
  country: string
  maintenance_group: string
  web_category_id: string
  web_category: string
  brand: string
  sales_unit: number
  customer_group: string
  variants: ProductVariant[]
  descriptions: ProductDescripiton[]
}

// From NY Endpoint
export interface ProductDescripiton {
  language: string
  description: string
}

// From NY Endpoint
export interface ProductVariant {
  id: string
  product_id: string
  publish_date: string
  new_in: boolean
  coming_soon: boolean
  sale: boolean
  highlight: boolean
  color_name: string
  pantone_color: string
  pantone_color_name: string
  red: number
  green: number
  blue: number
  color_group: string
  basic_color: string
  currency: string
  original_price: number
  current_price: number
  red_price_change: boolean
  sizes: ProductSize[]
  images: ProductImage[]
}

// From NY Endpoint
export interface ProductSize {
  size_value: string
  size_name: string
  bar_code: string
}

// From NY Endpoint
export interface ProductImage {
  key: string
  type: string
  angle: string
  has_thumbnail: boolean
  position: number
}
