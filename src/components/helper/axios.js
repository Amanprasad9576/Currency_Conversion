import axios from 'axios';
import {  CURRENCY_URL_SYMBOL ,BASE_CONVERSION_URL } from './constant'

export const axiosSymbols = axios.create({ baseURL: CURRENCY_URL_SYMBOL });
export const axiosConversion = axios.create({ baseURL: BASE_CONVERSION_URL });


