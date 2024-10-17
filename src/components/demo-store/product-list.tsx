import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProductStore } from "./store";
import type { Product } from "./types";

const products: Product[] = [
  { id: 1, name: "T-Shirt", price: 19.99, image: "/products/tshirt_1.jpg" },
  { id: 2, name: "Jeans", price: 49.99, image: "/products/jeans_1.jpg" },
  { id: 3, name: "Sneakers", price: 79.99, image: "/products/sneakers_1.jpg" },
  { id: 4, name: "Hat", price: 29.99, image: "/products/hat_1.jpg" },
  { id: 5, name: "Socks", price: 9.99, image: "/products/socks_1.jpg" },
  {
    id: 6,
    name: "Sunglasses",
    price: 39.99,
    image: "/products/sunglasses_1.jpg",
  },
  { id: 7, name: "Backpack", price: 99.99, image: "/products/backpack_1.jpg" },
  { id: 8, name: "Watch", price: 149.99, image: "/products/watch_1.jpg" },
];

export function ProductList() {
  const addToCart = useProductStore((state) => state.addToCart);
  const cartMap = useProductStore((state) => state.cartMap);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
      {products.map((product) => (
        <Card key={product.name} className="h-[450px]">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-64"
              style={{ objectFit: "contain" }}
            />
            <p className="mt-2 font-semibold text-lg">
              ${product.price.toFixed(2)}
            </p>
          </CardContent>
          <CardFooter className="justify-between">
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            {cartMap[product.id] > 0 && (
              <span className="text-sm">{cartMap[product.id]} in cart</span>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
