import axios from 'axios'

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
} from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
  try {
    //puts state in loading mode
    dispatch({ type: PRODUCT_LIST_REQUEST })

    //when done loading, dispatch the payload
    const { data } = await axios.get('/api/products')
    //payload is set to data *the response from /api/products over to prodReducer
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    //puts state in loading mode
    dispatch({ type: PRODUCT_DETAILS_REQUEST })

    //when done loading, dispatch the payload
    const { data } = await axios.get(`/api/products/${id}`)
    //payload is set to data *the response from /api/products over to prodReducer
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}