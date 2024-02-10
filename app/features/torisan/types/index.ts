/** 性別 */
export const Gender = {
    Unknown: 1,
    Man: 2,
    Woman: 3,
} as const

export type GenderKey = keyof typeof Gender;
export type GenderType =
  (typeof Gender)[keyof typeof Gender];

  /** ステージ */
  export const Stage = {
    Observation: 1,
    MedicalTreatment: 2,
    Hospitalization: 3,
  } as const
export type StageKey = keyof typeof Stage;
export type StageType = (typeof Stage)[keyof typeof Stage]