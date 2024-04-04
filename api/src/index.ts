import express, { Request, Response } from "express"

import outfitRouter from "./components/outfit/OutfitRoute"
import cors from "cors"

const app = express()

app.use(cors())
app.use("/api/outfit", outfitRouter)

const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
