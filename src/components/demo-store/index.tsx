import { ProductList } from "./product-list";
import { TopBar } from "./top-bar";

export function DemoStore() {
  return (
    <div className="container mx-auto">
      <TopBar />
      <div className="flex flex-grow flex-col items-center justify-center gap-8 p-4 md:flex-row">
        <ProductList />
      </div>
    </div>
  );
}
