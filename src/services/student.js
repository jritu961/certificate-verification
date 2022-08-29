import axios from 'axios';
import config from '@/config';
import { successHandler, errorHandler } from './helper';

export const fetchCetificate = () => {
    return axios.get( `${config.apiBaseUrl}/student` )
                .then( successHandler )
                .catch( errorHandler );
}

export const fetchCertificateById = ( id ) => {
    return axios.get( `${config.apiBaseUrl}/student/${id}` )
                .then( successHandler )
                .catch( errorHandler );
}