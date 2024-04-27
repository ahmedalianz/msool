export interface IPlanResponse {
  planDescriptionAr?: string;
  planDescriptionEn?: string;
  amount?: number;
  discount?: number;
  numberOfProperties?: string;
}
export interface IPlanState {
  monthly?: IPlanResponse;
  yearly?: IPlanResponse;
}
