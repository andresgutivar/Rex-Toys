import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ItemScreen() {
  function StarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-10 items-start">
        <img
          src="/placeholder.svg"
          alt="Product Image"
          width={600}
          height={900}
          className="aspect-[2/3] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
        />
        <div className="grid gap-4 text-sm leading-loose">
          <h1 className="font-bold text-3xl">Acme Prism T-Shirt</h1>
          <p>
            Introducing the Acme Prism T-Shirt, a perfect blend of style and
            comfort for the modern individual. This tee is crafted with a
            meticulous composition of 60% combed ringspun cotton and 40%
            polyester jersey, ensuring a soft and breathable fabric that feels
            gentle against the skin.
          </p>
          <p>
            The design of the Acme Prism T-Shirt is as striking as it is
            comfortable. The shirt features a unique prism-inspired pattern that
            adds a modern and eye-catching touch to your ensemble.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-0.5">
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
          </div>
          <div className="text-4xl font-bold">$99</div>
        </div>
        <Button size="lg">Add to cart</Button>
      </div>
      <div className="grid gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <div className="flex gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-4">
              <div className="flex gap-4 items-start">
                <div className="grid gap-0.5 text-sm">
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    2 days ago
                  </time>
                </div>
                <div className="flex items-center gap-0.5 ml-auto">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
              </div>
              <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                <p>
                  I've been experimenting with my LuminaCook Multi-Function Air
                  Fryer for a few weeks now, and it's been a versatile addition
                  to my kitchen. It's great for making crispy fries, chicken
                  wings, and even some healthier options.
                </p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-4">
              <div className="flex gap-4 items-start">
                <div className="grid gap-0.5 text-sm">
                  <h3 className="font-semibold">Alex Smith</h3>
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    3 weeks ago
                  </time>
                </div>
                <div className="flex items-center gap-0.5 ml-auto">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
              </div>
              <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                <p>
                  I recently purchased the SparkleShine Home Cleaning Robot, and
                  it has been a game-changer in my life. I used to spend hours
                  every weekend cleaning my house, but now I can simply turn on
                  this little robot and let it do the work. It's incredibly
                  efficient, navigating around obstacles with ease. The only
                  reason I didn't give it a perfect 5-star rating is that it
                  occasionally gets stuck under low furniture. Overall, it's
                  been a great addition to my home, saving me time and effort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
