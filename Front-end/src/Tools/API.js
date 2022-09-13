import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
} from '../__mocks__/MockedDatas';

import axios from "axios"


const apiBaseUrl = axios.create({
    baseURL: 'http://localhost:3000/user',
    method: 'GET',
});

let mockedDatas = false;
/**
 * retrieve user general information
 * @param {String} id user identifier
 * @returns {Object} user general information
 */
export const getUserInfo = async (id) => {
    try {
        if (mockedDatas) {
            const mockedResponse = await USER_MAIN_DATA.filter((x) => x.id === +id);
            console.log('Mocked data');
            return {
                data: mockedResponse[0],
                error: 'Erreur serveur 404 les données sont affichées via le mock',
            };
        } else {
            const response = await apiBaseUrl.get(`/${id}`);
            console.log('API working');
            return response.data;
        }
    } catch (error) {
        console.log(error.message);
        return error.message
    }
};

/**
 * retrieve user activity information
 * @param {String} id 
 * @returns {Object} user activity information
 */

export const getUserActivity = async (id) => {
    try {
        if (mockedDatas) {
            const mockedResponse = await USER_ACTIVITY.filter((x) => x.userId === +id);
            console.log('Mocked data');

            return {
                data: mockedResponse[0],
            };
        } else {
            const response = await apiBaseUrl.get(`/${id}/activity`);
            return response.data;
        }
    } catch (error) {
        return error.message
    }
};

/**
 * retrieve user average sessions information
 * @param {String} id 
 * @returns {Object} user average sessions information
 */


export const getUserAverageSessions = async (id) => {
    try {
        if (mockedDatas) {
            const response = await USER_AVERAGE_SESSIONS.filter(
                (x) => x.userId === +id
            );
            console.log('Mocked data');
            return {
                data: response[0],
            };
        } else {
            const response = await apiBaseUrl.get(`/${id}/average-sessions`);
            return response.data;
        }
    } catch (error) {
        return error.message
    }
};

/**
 * retrieve user performance information
 * @param {String} id 
 * @returns {Object} user performance information
 */

export const getUserPerformance = async (id) => {
    try {
        if (mockedDatas) {
            const response = await USER_PERFORMANCE.filter((x) => x.userId === +id);
            return {
                data: response[0],
            };
        } else {
            const response = await apiBaseUrl.get(`/${id}/performance`);
            return response.data;
        }
    } catch (error) {
        return error.message
    }
};
