import BubbleText from '@/components/BubbleText';

export default function Page() {
  return (
    <div className="relative w-full">
      <div className="relative w-full">
        <img
          src="/images/background.png"
          alt="background"
          className="bg-yellow-50"
        />
        <div className="absolute w-[40%] top-[31.8%] left-[15%]">
          <BubbleText text="이제 본격적으로\nOO님의 사주팔자를\n분석해볼 차례네요." />
        </div>
        <div className="absolute w-[50%] top-[49.5%] left-[14%]">
          <BubbleText text="제가 oo님의 사주를\n보기 쉽게 표로 정리했어요" />
        </div>
      </div>
    </div>
  );
}
