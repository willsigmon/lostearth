import { notFound } from "next/navigation";
import { getMysteryBySlug } from "@/lib/mysteries";
import MysteryWorkspace from "./MysteryWorkspace";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const mystery = getMysteryBySlug(slug);
  if (!mystery) return { title: "Mystery Not Found" };

  return {
    title: `${mystery.title} | LostEarth`,
    description: mystery.description.slice(0, 160),
  };
}

export default async function MysteryPage({ params }: PageProps) {
  const { slug } = await params;
  const mystery = getMysteryBySlug(slug);

  if (!mystery) {
    notFound();
  }

  return <MysteryWorkspace mystery={mystery} />;
}
