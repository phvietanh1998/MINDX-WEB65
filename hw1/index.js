import * as fs from "fs";
import * as http from "http";
import products from "./data.mjs";
import { findMax, findMinWomen } from "./productService.mjs";
fs.writeFileSync("./products.json", JSON.stringify(products), "utf-8");
const data = JSON.parse(fs.readFileSync("./products.json", "utf-8"));
const serverListener = (req, res) => {
  switch (req.url) {
    case "/api/products": {
      res.end(JSON.stringify(data));
      break;
    }
    case "/api/products/getMaxPrice": {
      res.end(JSON.stringify(findMax(data)));
      break;
    }
    case "/api/products/getMinPriceWomen": {
      res.end(JSON.stringify(findMinWomen(data)));
      break;
    }
    default:
      break;
  }
};

const server = http.createServer(serverListener);

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
