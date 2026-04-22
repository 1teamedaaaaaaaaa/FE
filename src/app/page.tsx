import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function Home() {
  return (
    <div className="p-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="btnPurple" size="full">
            <span className="p1-semibold">신곡 홍보 링크 만들기</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>발매 정보를 입력하면 팬에게 바로<br />공유할 수 있는 링크가 생겨요</p>
        </TooltipContent>
      </Tooltip>
      <Button variant="btnWhite" size="full">
        <span className="p1-semibold">내 음원 홍보 진단하기</span>
      </Button>
    </div>
  );
}
