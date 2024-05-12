import { AccountPayable } from "./account-payable";

export interface AccountPayablePageable {
  first: number;
  items: number;
  last: number;
  next: number;
  pages: number;
  prev: number;
  data: AccountPayable[];
}
