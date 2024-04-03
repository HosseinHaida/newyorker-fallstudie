import App from "./App.vue"
import OutfitGeneratorPage from "./pages/OutfitGeneratorPage.vue"
import NotFound from "./pages/NotFound.vue"

export const Routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: App,
  // },
  {
    path: "/",
    name: "outfitGenerator",
    component: OutfitGeneratorPage,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
]
