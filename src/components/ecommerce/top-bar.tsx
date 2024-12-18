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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
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

function CartButton() {
  const cart = useProductStore((state) => state.cart);

  if (cart.length === 0) {
    return (
      <Button variant="outline" size="icon">
        <ShoppingCart className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="border-none bg-gradient-to-r from-amber-500 to-pink-500"
          >
            <div className="transitions-colors rounded-md bg-white text-amber-600 dark:bg-neutral-900 dark:text-pink-500 dark:hover:bg-neutral-800 dark:hover:text-amber-200">
              <div className="flex h-8 w-8 items-center justify-center">
                <ShoppingCart className="h-4 w-4" />
              </div>
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent>{cart.length} items in cart</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function TopBar() {
  return (
    <div className="flex items-center justify-between p-4 text-gray-700 dark:text-gray-200">
      <div className="flex items-center space-x-12">
        <div className="flex gap-4">
          <svg
            id="logo-88"
            width="35"
            height="36"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Flower</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.7146 0.516113C11.4582 0.516113 9.2943 1.41245 7.69881 3.00794L0 10.7067V14.2307C0 16.7204 1.06944 18.9603 2.77401 20.5161C1.06944 22.0719 0 24.3118 0 26.8015V30.3255L7.69881 38.0243C9.2943 39.6198 11.4582 40.5161 13.7146 40.5161C16.2043 40.5161 18.4442 39.4467 20 37.7421C21.5558 39.4467 23.7957 40.5161 26.2854 40.5161C28.5418 40.5161 30.7057 39.6198 32.3012 38.0243L40 30.3255V26.8015C40 24.3118 38.9306 22.0719 37.226 20.5161C38.9306 18.9603 40 16.7204 40 14.2307V10.7067L32.3012 3.00794C30.7057 1.41245 28.5418 0.516113 26.2854 0.516113C23.7957 0.516113 21.5558 1.58555 20 3.29012C18.4442 1.58555 16.2043 0.516113 13.7146 0.516113ZM25.7588 20.5161C25.6629 20.4286 25.5688 20.3387 25.4766 20.2465L20 14.7699L14.5234 20.2465C14.4312 20.3387 14.3371 20.4286 14.2412 20.5161C14.3371 20.6036 14.4312 20.6935 14.5234 20.7857L20 26.2623L25.4766 20.7857C25.5688 20.6935 25.6629 20.6036 25.7588 20.5161ZM22.2222 30.3255L22.2222 32.0085C22.2222 34.2525 24.0414 36.0717 26.2854 36.0717C27.363 36.0717 28.3965 35.6436 29.1585 34.8816L35.5556 28.4845V26.8015C35.5556 24.5575 33.7364 22.7383 31.4924 22.7383C30.4148 22.7383 29.3813 23.1664 28.6193 23.9284L22.2222 30.3255ZM17.7778 30.3255L11.3807 23.9284C10.6187 23.1664 9.58524 22.7383 8.50762 22.7383C6.26359 22.7383 4.44444 24.5575 4.44444 26.8015V28.4845L10.8415 34.8816C11.6035 35.6436 12.637 36.0717 13.7146 36.0717C15.9586 36.0717 17.7778 34.2525 17.7778 32.0085V30.3255ZM17.7778 9.02373V10.7067L11.3807 17.1038C10.6187 17.8658 9.58524 18.2939 8.50762 18.2939C6.26359 18.2939 4.44444 16.4747 4.44444 14.2307V12.5477L10.8415 6.15063C11.6035 5.38864 12.637 4.96056 13.7146 4.96056C15.9586 4.96056 17.7778 6.7797 17.7778 9.02373ZM28.6193 17.1038L22.2222 10.7067L22.2222 9.02373C22.2222 6.7797 24.0414 4.96056 26.2854 4.96056C27.363 4.96056 28.3965 5.38864 29.1585 6.15063L35.5556 12.5477V14.2307C35.5556 16.4747 33.7364 18.2939 31.4924 18.2939C30.4148 18.2939 29.3813 17.8658 28.6193 17.1038Z"
              fill="#FF630B"
            />
          </svg>
          <span className="font-bold text-3xl text-gray-900 dark:text-gray-200">
            Acme
          </span>
        </div>
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
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CartButton />
            </motion.div>
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
