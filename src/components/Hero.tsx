import Button from './Button';
import {t} from 'i18next';
import {HeroSvg} from './Svgs';

export default function Hero() {
  return (
    <div className="px-8 lg:px-12">
      <div className="py-8 px-0 lg:px-8 lg:py-16 xl:px-16">
        <div className="rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="pt-8 lg:pt-16 pe-8 lg:pe-16 bg-primaryLight1 p-8 flex justify-center flex-col">
            <p className="text-[24px] md:text-[32px] mb-2 font-semibold text-primary">
              {t('integrated_platform')}
            </p>
            <p className="text-base mb-12 text-grey1">
              {t('holiday_management')}
            </p>
            <div className="flex gap-4 w-full">
              <Button title="free_trial" />
              <Button title="plans" variant="outlined" />
            </div>
          </div>
          <div className="bg-hero bg-no-repeat bg-center bg-cover">
            <HeroSvg />
          </div>
        </div>
      </div>
    </div>
  );
}
