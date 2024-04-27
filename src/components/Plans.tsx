import {useIsRTL} from '@hooks/useIsRTL';
import {useApi} from '@services';
import {t} from 'i18next';
import {ChangeEvent, useEffect, useState} from 'react';
import {IPlanResponse, IPlanState} from 'src/interfaces/IPlanResponse';
import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react';
import Pill from './Pill';
import PlanCard from './PlanCard';
import PlusMinus from './PlusMinus';
import ToggleSwitch from './ToggleSwitch';

export default function Plans() {
  const {apiPublic} = useApi();
  const {isRTL} = useIsRTL();
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const [subscriptionFeatures, setSubscriptionFeatures] = useState([]);
  const [plan1, setPlan1] = useState<IPlanState>({});
  const [plan2, setPlan2] = useState<IPlanState>({});
  const [plan3, setPlan3] = useState<IPlanState>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [monthly, setMonthly] = useState<boolean>(true);
  const [propertyCount, setPropertyCount] = useState<number>(0);
  const getSubscriptionPlans = async () => {
    Promise.all([
      apiPublic('get-subscription-features'),
      apiPublic<{result: Array<IPlanResponse>}>(
        'get-subscriptions-plans?subscriptionPlanNameId=1',
      ),
      apiPublic('get-subscriptions-plans?subscriptionPlanNameId=2'),
      apiPublic('get-subscriptions-plans?subscriptionPlanNameId=3'),
    ])
      .then(res => {
        setSubscriptionFeatures(
          res?.[0]?.data?.result?.map(
            (result: {features: string}) => result.features,
          ) || [],
        );
        const plan1 = res[1].data?.result;
        setPlan1({
          monthly: plan1[0],
          yearly: plan1[1],
        });
        const plan2 = res[2].data?.result;
        setPlan2({
          monthly: plan2[0],
          yearly: plan2[1],
        });
        const plan3 = res[3].data?.result;
        setPlan3({
          monthly: plan3[0],
          yearly: plan3[1],
        });
      })
      .catch(err => {
        console.log('Error Getting Plans ====>', err);
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getSubscriptionPlans();
  }, []);
  const toggleMonthly = () => setMonthly(prev => !prev);
  const increaseCount = () => {
    setPropertyCount(prev => prev + 1);
  };
  const decreaseCount = () => {
    setPropertyCount(prev => prev - 1);
  };
  const changeCount = (count: number) => {
    if (count < 0) {
      setPropertyCount(0);
    } else {
      setPropertyCount(count);
    }
  };
  useEffect(() => {
    switch (true) {
      case propertyCount > 20:
        swiper?.slideTo(2);
        break;
      case propertyCount > 3:
        swiper?.slideTo(1);
        break;
      default:
        swiper?.slideTo(0);
        break;
    }
  }, [propertyCount]);
  return (
    <div className="pt-14 pb-6">
      <div className="px-8">
        <div className="flex items-center justify-center">
          <p className="mb-8 mt-0 text-primaryDark3 text-center font-bold text-3xl">
            {t('register_now')}
          </p>
          <p className="text-primaryDark5 font-bold text-3xl relative inline-block mx-2 m-0 mb-8">
            <span
              style={{
                borderRadius: '70% / 18px 16px 0px 0px',
                borderBlockStartWidth: '6px',
              }}
              className="w-full absolute bottom-[-8px] border-0 border-solid h-[11px] border-primaryDark5 -rotate-12"
            />
            {t('14d')}
          </p>
          {!isRTL && (
            <p className="mb-8 mt-0 text-primaryDark3 text-center font-bold text-3xl">
              {'free trail'}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4 mb-6 items-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Pill
              title="discount11"
              className="text-[10px] px-2 pb-[18px] h-6"
            />
            <p className="m-0 text-primaryDark3">{t('yearly')}</p>
            <ToggleSwitch isOn={monthly} onToggle={toggleMonthly} />
            <p className="m-0 text-primaryDark3">{t('monthly')}</p>
          </div>
          <p className="m-0 text-primaryDark3">{t('properties_number')}</p>
          <div className="flex gap-8 justify-center items-center mb-6">
            <PlusMinus
              icon="minus"
              disabled={propertyCount === 0}
              onClick={decreaseCount}
            />
            <input
              type="number"
              value={propertyCount}
              className="text-primary text-[32px] text-center border-0 w-24 outline-none"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                changeCount(Number(e.target.value))
              }
            />
            <PlusMinus icon="plus" onClick={increaseCount} />
          </div>
        </div>
      </div>
      <div className="w-full px-8 md:px-6 lg:px-12 lg:max-w-[900px] mx-auto">
        <div className="hidden lg:grid grid-cols-3 gap-8 ">
          <PlanCard
            features={subscriptionFeatures}
            monthly={monthly}
            plan={plan1}
            loading={loading}
          />
          <PlanCard
            features={subscriptionFeatures}
            monthly={monthly}
            plan={plan2}
            loading={loading}
          />
          <PlanCard
            features={subscriptionFeatures}
            monthly={monthly}
            plan={plan3}
            loading={loading}
          />
        </div>
        <div className="lg:hidden max-w-[444px] px-6 mx-auto">
          <Swiper
            dir={isRTL ? 'rtl' : 'ltr'}
            navigation
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper: SwiperClass) => setSwiper(swiper)}>
            <SwiperSlide className="p-6">
              <PlanCard
                features={subscriptionFeatures}
                monthly={monthly}
                plan={plan1}
                loading={loading}
              />
            </SwiperSlide>
            <SwiperSlide className="p-6">
              <PlanCard
                features={subscriptionFeatures}
                monthly={monthly}
                plan={plan2}
                loading={loading}
              />
            </SwiperSlide>
            <SwiperSlide className="p-6">
              <PlanCard
                features={subscriptionFeatures}
                monthly={monthly}
                plan={plan3}
                loading={loading}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
