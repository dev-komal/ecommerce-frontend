import * as actionTypes from '../../../../core/constant/actionTypes';
export function requestCollectionType(payload) {
  return {
    type: actionTypes.COLLECTION_TYPE_REQUEST,
    payload
  };
}
