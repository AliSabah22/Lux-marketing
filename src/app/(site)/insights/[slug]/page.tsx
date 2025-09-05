import { notFound } from "next/navigation";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { images } from "@/lib/images";

const POSTS: Record<string, { title: string; body: string }> = {
  "luxury-positioning": {
    title: "Luxury Positioning: Price Follows Perception",
    body:
      "In luxury, value is signaled before it is proven. Design, language, and experience frame the buyer’s expectations and willingness to pay.",
  },
  "creative-systems": {
    title: "Creative Systems that Compound Performance",
    body:
      "Treat content as a system, not assets. Iteration velocity and signal feedback loops create enduring performance advantages.",
  },
  "site-that-sells": {
    title: "Design a Site that Sells on Sight",
    body:
      "Above-the-fold clarity. Cinematic visuals. Frictionless paths. The highest-performing sites remove hesitation and heighten desire.",
  },
};

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return notFound();
  return (
    <main className="px-6 py-20 mx-auto max-w-3xl">
      <div className="relative rounded-lg overflow-hidden">
        <div className="relative aspect-[16/9]">
          <ImageWithFallback
            src={images.insights[slug as keyof typeof images.insights]}
            alt={post.title}
            fill
            sizes="(min-width: 768px) 80vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <h1 className="mt-8 font-serif text-4xl md:text-6xl">{post.title}</h1>
      <div className="mt-8 prose prose-invert max-w-none">
        <p>{post.body}</p>
      </div>
    </main>
  );
}


