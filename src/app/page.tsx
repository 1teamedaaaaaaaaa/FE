import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

export default function Home() {
  return (
    <div className="p-8">
      <Button variant="btnPurple" size="full">
        <Info />
        <span className="p1-semibold">신곡 홍보 링크 만들기</span>
      </Button>
      <Button variant="btnWhite" size="full">
        <Info />
        <span className="p1-semibold">내 음원 홍보 진단하기</span>
      </Button>
    </div>
  );
}
