import { EARHART_MYSTERY } from "./earhart";
import { MH370_MYSTERY } from "./mh370";
import { DBCOOPER_MYSTERY } from "./dbcooper";
import { LOSTZ_MYSTERY } from "./lostz";
import { FLIGHT19_MYSTERY } from "./flight19";
import { OAKISLAND_MYSTERY } from "./oakisland";
import { DYATLOV_MYSTERY } from "./dyatlov";
import { ATLANTIS_MYSTERY } from "./atlantis";
import { AMBERROOM_MYSTERY } from "./amberroom";
import { ROANOKE_MYSTERY } from "./roanoke";
import { YAMASHITA_MYSTERY } from "./yamashita";
import { NAZCA_MYSTERY } from "./nazca";
import { GOBEKLI_MYSTERY } from "./gobekli";
import type { Mystery } from "@/types/mystery";

export const MYSTERIES: Mystery[] = [
  EARHART_MYSTERY,
  MH370_MYSTERY,
  DBCOOPER_MYSTERY,
  FLIGHT19_MYSTERY,
  DYATLOV_MYSTERY,
  ROANOKE_MYSTERY,
  LOSTZ_MYSTERY,
  OAKISLAND_MYSTERY,
  AMBERROOM_MYSTERY,
  YAMASHITA_MYSTERY,
  ATLANTIS_MYSTERY,
  NAZCA_MYSTERY,
  GOBEKLI_MYSTERY,
];

export function getMysteryBySlug(slug: string): Mystery | undefined {
  return MYSTERIES.find((m) => m.slug === slug);
}
