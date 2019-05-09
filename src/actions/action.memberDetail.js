import { GET_MEMBER_DETAIL_REQUESTED } from '../constants/constant.action';

export function getMemberDetail(memberID) {
  return {
    type: GET_MEMBER_DETAIL_REQUESTED,
    payload: memberID
  };
}
