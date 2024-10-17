import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { MyAvatar } from "../my-avatar";
import { ThemeToggle } from "../theme-toggle";
import { useProductStore } from "./store";

function ShoppingCartContent() {
  const cart = useProductStore((state) => state.cart);
  const cartMap = useProductStore((state) => state.cartMap);
  const removeFromCart = useProductStore((state) => state.removeFromCart);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-64">
      <h3 className="mb-2 font-semibold">Shopping Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <AnimatePresence>
            {Object.entries(cartMap).map(([id, count]) => {
              if (count < 1) return null;
              const item = cart.find((item) => item.id === Number(id));
              if (!item) return null;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-2 flex items-center justify-between"
                >
                  <span>
                    {item.name} - ${item.price.toFixed(2)}
                  </span>
                  <div className="flex items-center gap-2">
                    <span>{count}x</span>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          <div className="mt-4 font-semibold text-lg">
            Total: ${total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}

export function TopBar() {
  return (
    <div className="flex items-center justify-between p-4 text-gray-700 dark:text-gray-200">
      <div className="flex items-center space-x-12">
        <span className="font-bold text-3xl text-gray-900 dark:text-gray-200">
          Acme
        </span>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <a href="#intro">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mt-4 mb-2 font-medium text-lg">
                          Featured
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Check out our latest products and deals
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="font-medium text-sm leading-none">
                          New Arrivals
                        </div>
                        <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
                          See what's new in our store
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="font-medium text-sm leading-none">
                          Categories
                        </div>
                        <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
                          Browse our product categories
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {["Our Story", "Team", "Careers", "Contact"].map((item) => (
                    <li key={item}>
                      <NavigationMenuLink asChild>
                        <a
                          href="#intro"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="font-medium text-sm leading-none">
                            {item}
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center space-x-4">
        <Button size="icon" variant="outline">
          <ThemeToggle />
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="mr-4 w-80">
            <ShoppingCartContent />
          </PopoverContent>
        </Popover>
        <MyAvatar />
      </div>
    </div>
  );
}
