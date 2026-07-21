export type ConveyorModel = "117" | "717";
export type ConveyorType = "EP 4L" | "EP 6L";
export type StrandType = "1R" | "2R" | "3R";

export interface ConveyorChainSpec {
  model: ConveyorModel;
  pitch: string;
  type: ConveyorType;
  strength: string;
  label: string;
}

export interface ConveyorConnectingLink {
  pitch: string;
  spec: string;
  compatibleModels: ConveyorModel[];
}

export interface ConveyorSprocket {
  model: ConveyorModel;
  teeth: number;
  material: string;
  type: string;
  label: string;
}

export interface RollerChainItem {
  rsModel: string;
  clModel: string;
  pitch: string;
  strand: StrandType;
}

export interface TransmissionPitch {
  id: string;
  label: string;
  rsNumber: number;
}

export const CONVEYOR_CHAIN_SPECS: ConveyorChainSpec[] = [
  {
    model: "117",
    pitch: '4"',
    type: "EP 4L",
    strength: "32.000 LBF",
    label: '117 Conveyor Chain 4" EP 4L',
  },
  {
    model: "117",
    pitch: '4"',
    type: "EP 6L",
    strength: "32.000 LBF",
    label: '117 Conveyor Chain 4" EP 6L',
  },
  {
    model: "717",
    pitch: '6"',
    type: "EP 4L",
    strength: "60.000 LBF",
    label: '717 Conveyor Chain 6" EP 4L',
  },
  {
    model: "717",
    pitch: '6"',
    type: "EP 6L",
    strength: "60.000 LBF",
    label: '717 Conveyor Chain 6" EP 6L',
  },
];

export const CONVEYOR_CONNECTING_LINKS: ConveyorConnectingLink[] = [
  {
    pitch: '4"',
    spec: 'Connecting Link 4" Type Solid Extended Pin',
    compatibleModels: ["117"],
  },
  {
    pitch: '6"',
    spec: 'Connecting Link 6" Type Solid Extended Pin',
    compatibleModels: ["717"],
  },
];

export const CONVEYOR_SPROCKETS: ConveyorSprocket[] = [
  {
    model: "117",
    teeth: 8,
    material: "Cast Steel",
    type: "padu",
    label: 'Sprocket 117 - 4" 8T (Cast Steel) padu',
  },
  {
    model: "117",
    teeth: 10,
    material: "Cast Steel",
    type: "padu",
    label: 'Sprocket 117 - 4" 10T (Cast Steel) padu',
  },
  {
    model: "117",
    teeth: 12,
    material: "Cast Steel",
    type: "padu",
    label: 'Sprocket 117 - 4" 12T (Cast Steel) padu',
  },
  {
    model: "717",
    teeth: 8,
    material: "Cast Steel",
    type: "padu",
    label: 'Sprocket 717 - 6" 8T (Cast Steel) padu',
  },
  {
    model: "717",
    teeth: 10,
    material: "Cast Steel",
    type: "padu",
    label: 'Sprocket 717 - 6" 10T (Cast Steel) padu',
  },
  {
    model: "717",
    teeth: 12,
    material: "Cast Steel",
    type: "padu",
    label: 'Sprocket 717 - 6" 12T (Cast Steel) padu',
  },
  {
    model: "717",
    teeth: 16,
    material: "Cast Steel",
    type: "",
    label: 'Sprocket 717 - 6" 16T (Cast Steel)',
  },
  {
    model: "717",
    teeth: 21,
    material: "Cast Steel",
    type: "",
    label: 'Sprocket 717 - 6" 21T (Cast Steel)',
  },
];

export const CONVEYOR_IMAGES = [
  "/products/conveyor-1.png",
  "/products/conveyor-2.png",
  "/products/conveyor-3.png",
];

export const ROLLER_IMAGES = [
  "/products/roller-1.png",
  "/products/roller-2.png",
  "/products/roller-3.png",
];

export const RS_NUMBERS = [60, 80, 100, 120, 140, 160] as const;

export const TRANSMISSION_PITCHES: TransmissionPitch[] = [
  { id: "rs60", label: '3/4" - RS 60', rsNumber: 60 },
  { id: "rs80", label: '1" - RS 80', rsNumber: 80 },
  { id: "rs100", label: '1 1/4" - RS 100', rsNumber: 100 },
  { id: "rs120", label: '1 1/2" - RS 120', rsNumber: 120 },
  { id: "rs140", label: '1 3/4" - RS 140', rsNumber: 140 },
  { id: "rs160", label: '2" - RS 160', rsNumber: 160 },
];

export const STRAND_LABELS: Record<StrandType, string> = {
  "1R": "Simplex (1R)",
  "2R": "Duplex (2R)",
  "3R": "Triplex (3R)",
};

const STRAND_SUFFIX: Record<StrandType, string> = {
  "1R": "1",
  "2R": "2",
  "3R": "3",
};

export function getRollerChainItems(strand: StrandType): RollerChainItem[] {
  const suffix = STRAND_SUFFIX[strand];
  return RS_NUMBERS.map((num) => ({
    rsModel: `RS ${num}-${suffix}`,
    clModel: `CL ${num}-${suffix}`,
    pitch: TRANSMISSION_PITCHES.find((p) => p.rsNumber === num)?.label ?? `RS ${num}`,
    strand,
  }));
}

export function getTeethRange(strand: StrandType): { min: number; max: number } {
  switch (strand) {
    case "1R":
      return { min: 9, max: 57 };
    case "2R":
      return { min: 9, max: 60 };
    case "3R":
      return { min: 9, max: 57 };
  }
}

export function getTeethList(strand: StrandType): number[] {
  const { min, max } = getTeethRange(strand);
  return Array.from({ length: max - min + 1 }, (_, i) => min + i);
}

export function getConveyorModelLabel(model: ConveyorModel): string {
  return model === "117" ? '117 - 4"' : '717 - 6"';
}

export function getCompatibleSprockets(model: ConveyorModel): ConveyorSprocket[] {
  return CONVEYOR_SPROCKETS.filter((s) => s.model === model);
}

export function getCompatibleConnectingLink(
  model: ConveyorModel,
): ConveyorConnectingLink | undefined {
  return CONVEYOR_CONNECTING_LINKS.find((l) =>
    l.compatibleModels.includes(model),
  );
}

export function getConveyorSpecKey(model: ConveyorModel, type: ConveyorType): string {
  return `${model}__${type}`;
}

export function parseConveyorSpecKey(key: string): {
  model: ConveyorModel;
  type: ConveyorType;
} {
  const [model, type] = key.split("__");
  return {
    model: model as ConveyorModel,
    type: type as ConveyorType,
  };
}
