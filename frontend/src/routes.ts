import OutfitGeneratorPage from "./pages/OutfitGeneratorPage.vue"
import NotFound from "./pages/NotFound.vue"

export const Routes = [
  {
    path: "/",
    name: "outfitGenerator",
    component: OutfitGeneratorPage,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
]
