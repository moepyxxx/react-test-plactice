"use server";

import * as restc from "typed-rest-client/RestClient";
import { GenderType, StageType } from "../types";

export type SummaryTorisan = {
  id: number;
  stage: StageType;
  basic: {
    nickname: string;
    birth_date: string;
    species_id: number;
    gender_type: GenderType;
  };
};

export async function getSummaryTorisans() {
  const client = new restc.RestClient("vsts-node-api", "http://localhost:3000");
  return (await client.get<SummaryTorisan[]>("/a/torisans")).result;
}
