import classNames from 'classnames';
import {t} from 'i18next';
import {Solution1Svg, Solution4Svg, Solution3Svg, Solution2Svg} from './Svgs';

export default function Solutions() {
  const solutions = [
    {
      title: 'avoid_double_booking',
      desc: 'enhance_booking',
      svg: <Solution1Svg />,
      isLifted: true,
    },
    {
      title: 'smart_lock',
      desc: 'smart_lock_desc',
      svg: <Solution2Svg />,
      isLifted: false,
    },
    {
      title: 'performance_analytics',
      desc: 'accurate_analytics',
      svg: <Solution3Svg />,
      isLifted: true,
    },
    {
      title: 'financial_management',
      desc: 'record_revenue',
      svg: <Solution4Svg />,
      isLifted: false,
    },
  ];
  return (
    <div className="p-8 lg:py-8 lg:px-12 gap-8 flex flex-col items-center bg-gradient-to-b from-primaryLight2 to-white">
      <p className="text-2xl xl:text-[32px] mt-8 mb-4 mx-0 text-primary font-bold text-center">
        {t('solution_title')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 pb-16 justify-center max-w-[600px] w-full">
        {solutions.map(solution => (
          <div
            key={solution.title}
            className={classNames({
              'p-6 flex rounded-2xl flex-col shadow card': true,
              'mb-8 mt-[-32px]': solution.isLifted,
            })}>
            <p className="text-base mt-0 mb-4 mx-0 text-grey1">
              {t(solution.title)}
            </p>
            <p className="text-base mt-0 mb-4 mx-0 text-primaryDark3">
              {t(solution.desc)}
            </p>
            {solution.svg}
          </div>
        ))}
      </div>
    </div>
  );
}
