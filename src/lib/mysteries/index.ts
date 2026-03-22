import { EARHART_MYSTERY } from "./earhart";
import type { Mystery } from "@/types/mystery";

export const MYSTERIES: Mystery[] = [EARHART_MYSTERY];

export function getMysteryBySlug(slug: string): Mystery | undefined {
  return MYSTERIES.find((m) => m.slug === slug);
}
