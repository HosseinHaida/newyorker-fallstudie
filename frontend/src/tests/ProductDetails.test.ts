import { beforeEach, expect, it, describe } from "vitest"
import { mount } from "@vue/test-utils"
import ProductDetails from "@/components/ProductDetails.vue"
import { createPinia, setActivePinia } from "pinia"

const testProduct = {
  global_item_id: "GIID009354",
  id: "01.06.355.0880",
  country: "de",
  maintenance_group: "Accessoires Sunglases",
  web_category_id: "WCA01153",
  web_category: "WCA01153",
  brand: "Accessoires",
  sales_unit: 1,
  customer_group: "FEMALE",
  variants: [
    {
      id: "001",
      product_id: "01.06.355.0880",
      publish_date: "2024-03-29T04:19:04.642Z",
      new_in: false,
      coming_soon: false,
      sale: false,
      highlight: false,
      color_name: "CID-12282",
      pantone_color: "Original 014",
      pantone_color_name: "Original Pink",
      red: 239,
      green: 165,
      blue: 170,
      color_group: "Pink",
      basic_color: "Rosa",
      currency: "EUR",
      original_price: 7.99,
      current_price: 7.99,
      red_price_change: false,
      sizes: [
        {
          size_value: "10",
          size_name: "One Size",
          bar_code: "5388087562901013",
        },
      ],
      images: [
        {
          key: "6636ccf4dcc1e3ed489fb7f1333ca7bc.png",
          type: "CUTOUT",
          angle: "FRONT",
          has_thumbnail: true,
          position: 0,
        },
      ],
    },
  ],
  descriptions: [{ language: "EN", description: "Sunglasses" }],
}

describe("test ProductDetails", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("renders ProductDetails(price) correctly", () => {
    const wrapper = mount(ProductDetails, { props: { product: testProduct } })

    const productPrice = wrapper.find('[data-test="product-price"]')
    expect(productPrice.exists()).toBeTruthy()
    expect(productPrice.text()).toEqual(
      String(testProduct.variants[0].current_price)
    )
  })
})
