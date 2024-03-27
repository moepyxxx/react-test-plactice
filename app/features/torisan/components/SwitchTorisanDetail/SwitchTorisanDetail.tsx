import { SelectTorisans } from "@/components/molecules/SelectTorisans";
import { SUMMARY_TORISAN } from "@/gql/queries";
import { StageType } from "@ito/common";
import { useRouter } from "next/navigation";

type Props = {
  torisans: SUMMARY_TORISAN[];
};
export const SwitchTorisanDetail: React.FC<Props> = ({ torisans }) => {
  const router = useRouter();
  return (
    <div>
      {torisans && (
        <SelectTorisans
          onSubmit={(torisanId: string) => {
            router.push(`/p/torisan/${torisanId}`);
          }}
          torisans={torisans.map((torisan) => ({
            id: torisan.id,
            nickname: torisan.nickname,
            stage: torisan.stage_type as StageType,
            src: "/mascot/ito.png",
          }))}
        />
      )}
    </div>
  );
};
