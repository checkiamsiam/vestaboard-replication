import { Button } from "@/components/ui/button";

export default function InvestmentPage() {
  return (
    <div className="min-h-screen bg-primary text-white md:py-36 py-20">
      <div className="space-y-8 container px-5">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold">Invest in Vestaboard</h1>

        {/* Video Section */}
        <div className="relative aspect-video w-full bg-zinc-900 rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black transition-colors"
          >
            Register as an Investor
          </Button>
        </div>

        {/* Description */}
        <div className="space-y-6 ">
          <p className="text-lg">
            Vestaboard is a beautiful messaging display used by over 10,000
            customers to inspire loved ones, share emotions and goals.
            Participate in our future growth by becoming an investor.
          </p>

          <p>We need a three-part plan to build an extraordinary company:</p>

          {/* Bullet Points */}
          <ul className="space-y-2 list-disc pl-6">
            <li>
              Launch three additional products to solve our customer base and
              our recurring revenue for our subscription software platform
            </li>
            <li>
              Grow our recurring revenue by continuing to build valuable and
              inspiring content on Vestaboard
            </li>
            <li>
              Launch three additional products to solve our customer base and
              our recurring revenue for our subscription software platform
            </li>
          </ul>

          <p>
            We began shipping Vestaboard in 2020 and have grown our revenue from
            just under $2 million in 2020 to over $10 million thanks to our
            champions. We invite you to learn more about our plans to scale our
            flagship product, expand our offering into a subscription model at
            the enterprise level.
          </p>

          <p >
            Vestaboard is seeking a Reg CF offering and people interest by
            regulation CF offering its equity or any other form of compensation
            is being solicited. It will be accepted if it is part. There will be
            no acceptance of any offers provided securities. There are no
            obligations or commitments provided with any expression of interest.
          </p>

          {/* Dates */}
          <div className="space-y-1 pt-4">
            <p className="font-semibold text-lg">
              Forms required to be filed by the SEC:
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Form C-AR 2023</li>
              <li>Form C-AR 2022</li>
              <li>Form C-AR 2021</li>
              <li>Form C-AR 2020</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
