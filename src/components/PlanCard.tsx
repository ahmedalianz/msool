import {useIsRTL} from '@hooks/useIsRTL';
import {t} from 'i18next';
import {FC} from 'react';
import IPlanCard from '../interfaces/IPlanCard';
import Button from './Button';
import Pill from './Pill';
import {CheckSvg} from './Svgs';
import PlanCardSkeleton from './PlanCardSkeleton';

const PlanCard: FC<IPlanCard> = ({features, monthly, plan, loading}) => {
  const {isRTL} = useIsRTL();
  return loading ? (
    <PlanCardSkeleton />
  ) : (
    <div className="card rounded-2xl flex flex-col h-[540px] lg:h-[440px] px-4 pt-12 pb-6 relative">
      <div className="flex justify-center px-12 absolute top-[-20px] left-0 right-0 w-full">
        <Pill
          title={
            (plan?.[monthly ? 'monthly' : 'yearly']?.numberOfProperties || '') +
            ' ' +
            t('property')
          }
        />
      </div>
      <div className="flex justify-between">
        <p className="rounded-full text-xs px-3 font-bold text-black bg-primaryLight3 pt-[2px]">
          {
            plan?.[monthly ? 'monthly' : 'yearly']?.[
              isRTL ? 'planDescriptionAr' : 'planDescriptionEn'
            ]
          }
        </p>
        {plan?.[monthly ? 'monthly' : 'yearly']?.discount ? (
          <p className="rounded-full text-xs px-3 font-bold text-white bg-warn pt-[2px]">
            {plan?.[monthly ? 'monthly' : 'yearly']?.discount}%
          </p>
        ) : null}
      </div>
      <p className="text-2xl font-bold text-primaryDark3 m-0">
        {plan?.[monthly ? 'monthly' : 'yearly']?.amount} {t('sr_monthly')}
      </p>
      <p className="text-base text-primaryDark4 m-0 mb-8">
        {t('for_each_property')}
      </p>
      {features.map((feature: string) => (
        <p
          key={feature}
          className="flex gap-2 items-center text-primaryDark3 m-0 mb-2">
          <CheckSvg />
          {feature}
        </p>
      ))}

      <div className="flex justify-center mt-auto px-[40px]">
        <Button title="get_started" />
      </div>
    </div>
  );
};
export default PlanCard;
