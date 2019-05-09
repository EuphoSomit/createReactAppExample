import { baseService } from '../services/service';
import { uriConstants } from '../constants/constant.uri';

function authHeader() {
  return {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json'
  };
}

export function getMemberDetailAPI(data) {
  let url = uriConstants.MEMBER_DETAIL_API;
  return baseService.post(url, authHeader, data);
}
