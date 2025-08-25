import {dummySaju} from '@/data/saju';

const colorMap = {
  임: 'text-white bg-neutral-900',
  계: 'text-white bg-neutral-900',
  해: 'text-white bg-neutral-900',
  정: 'text-white bg-red-800',
  사: 'text-white bg-red-800',
  인: 'text-white bg-teal-600',
  유: 'border-2',
};

function SajuRow({titleCn, titleKr, data, isColored = false}) {
  return (
    <div className="grid grid-cols-5 border-b-2 border-r-2 w-full text-center text-black text-md">
      <div className="border-r-2 flex flex-col items-center justify-center text-xs">
        <p className="text-[4vw] md:text-xs">{titleCn}</p>
        <p className="text-[8px]">({titleKr})</p>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className={`${index < 3 && 'border-r border-neutral-300 '} p-1 bg-white`}
        >
          {item.sub ? (
            <>
              <div
                className={`flex flex-col items-center rounded-xl p-1 ${
                  isColored ? colorMap[item.kor] || '' : ''
                }`}
              >
                <p className="text-[8px] font-normal">{item.kor}</p>
                <p className="text-base md:text-2xl sm:text-lg xs:text-base">
                  {item.cn}
                </p>
                <p className="text-[8px] font-normal">{item.sub}</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center p-1">
                <p className="text-[4vw] md:text-sm sm:text-xs">{item.cn}</p>
                <p className="text-[10px] font-normal">({item.kor})</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

function NestedSajuRow({titleCn, titleKr, data}) {
  return (
    <div className="grid grid-cols-5 border-b-2 border-r-2 w-full text-center text-black text-md">
      <div className="border-r-2 flex flex-col items-center justify-center text-xs">
        <p className="text-xs">{titleCn}</p>
        <p className="text-[8px]">({titleKr})</p>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className={`${index < 3 && 'border-r border-neutral-300 '} flex items-center justify-center p-1 bg-white`}
        >
          {item.length === 0 ? (
            <p className="text-[10px]">(없음)</p>
          ) : (
            <div className="flex flex-col items-center">
              {item.map((subItem, subIndex) => (
                <div key={subIndex} className="flex flex-col items-center">
                  <p className="text-[4vw] md:text-sm sm:text-xs">
                    {subItem.cn}
                  </p>
                  <p className="text-[10px]">({subItem.kor})</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Saju() {
  return (
    <div className="w-full inset-0 top-[18%] px-5 py-5 flex flex-col font-bold">
      <div className="grid grid-cols-5 border-b-2 border-r-2 w-full text-center text-black md:text-xl sm:text-lg xs:text-base">
        <div className="border-r-2"></div>
        <div className="border-r border-neutral-300 py-2.5">時</div>
        <div className="border-r border-neutral-300 py-2.5">日</div>
        <div className="border-r border-neutral-300 py-2.5">月</div>
        <div className="py-2.5">年</div>
      </div>

      <SajuRow titleCn="十星" titleKr="십성" data={dummySaju.십성1} />
      <SajuRow titleCn="天干" titleKr="천간" data={dummySaju.천간} isColored />
      <SajuRow titleCn="地支" titleKr="지지" data={dummySaju.지지} isColored />
      <SajuRow titleCn="十星" titleKr="십성" data={dummySaju.십성2} />
      <SajuRow
        titleCn="十二運星"
        titleKr="십이운성"
        data={dummySaju.십이운성}
      />
      <SajuRow
        titleCn="十二神殺"
        titleKr="십이신살"
        data={dummySaju.십이신살}
      />
      <NestedSajuRow titleCn="貴人" titleKr="귀인" data={dummySaju.귀인} />
    </div>
  );
}

export default Saju;
