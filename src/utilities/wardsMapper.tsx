import WardCard from "@/components/wardCard";
import { Ward } from "@/types/ward";

export default function WardsMapper ( wardList: Ward[]) {
    return (
        <div>
            {wardList.length > 0 ? (
                wardList.map((ward) => <WardCard key={ward.id} ward={ward} />) 
            ) : (
                <p>No wards available.</p>
            )}
        </div>
    );
}