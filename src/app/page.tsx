import BubbleText from '@/components/BubbleText';
import Saju from '@/components/Saju';

export default function Page() {
  const userData = {
    name: '김로켓',
    birthDate: '1980년 8월 27일',
    birthTime: '08:10',
  };

  return (
    <div className="relative w-full bg-yellow-50 overflow-auto">
      <img src="/images/background.png" alt="background" />
      <div className="absolute top-[31.6%] left-[16%]">
        <BubbleText text="이제 본격적으로\nOO님의 사주팔자를\n분석해볼 차례네요." />
      </div>
      <div className="absolute top-[49.3%] left-[14%]">
        <BubbleText text="제가 oo님의 사주를\n보기 쉽게 표로 정리했어요" />
      </div>

      <div className="absolute w-full top-[67%] px-3">
        <div className="w-full h-full bg-yellow-100 border-3 border-blue-950">
          <div className="relative w-full h-full">
            <div className="absolute inset-y-0 left-2 w-px bg-blue-900"></div>
            <div className="absolute inset-y-0 right-2 w-px bg-blue-900"></div>
            <div className="absolute inset-x-0 top-2 h-px bg-blue-900"></div>
            <div className="absolute inset-x-0 bottom-2 h-px bg-blue-900"></div>

            <div className="absolute flex justify-between items-center w-full px-2 top-[4%]">
              <img src="/images/cloud1.svg" alt="left cloud" className="mt-6" />
              <img src="/images/cloud2.svg" alt="right cloud" />
            </div>
            <div className="relative w-full">
              <div className="flex flex-col items-center justify-center w-full text-neutral-800 pt-10">
                <p className="text-[4vw] md:text-base sm:text-sm xs:text-xs font-semibold mb-1">
                  {userData.name}님의 사주
                </p>
                <p className="text-[5vw] md:text-xl sm:text-base xs:text-sm font-bold">
                  {userData.birthDate} {userData.birthTime}
                </p>
              </div>
              <Saju />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
