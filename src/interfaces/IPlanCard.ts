import {IPlanState} from './IPlanResponse';

export default interface IPlanCard {
  features: string[];
  monthly: boolean;
  plan: IPlanState;
  loading: boolean;
}
