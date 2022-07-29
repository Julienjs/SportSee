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

let mockedDatas = null;
/**
 * retrieve user general information
 * @param {Number} id user identifier
 * @returns {Object} user general information
 */
export const getUserInfo = async (id) => {
    try {
        const response = await apiBaseUrl.get(`/${id}`);
        if (response.status === 200) {
            console.log('API working');
            mockedDatas = false;
            return response.data;
        } else {
            mockedDatas = true;
        }
    } catch (error) {
        console.log('API unavailable. Datas coming from mock.');
        mockedDatas = true;
        const mockedResponse = await USER_MAIN_DATA.filter((x) => x.id === +id);
        return {
            data: mockedResponse[0],
        };
    }
};

/**
 * retrieve user activity information
 * @param {Number} id 
 * @returns {Object} user activity information
 */

export const getUserActivity = async (id) => {
    try {
        if (mockedDatas) {
            const mockedResponse = await USER_ACTIVITY.filter((x) => x.userId === +id);
            return {
                data: mockedResponse[0],
            };
        } else {
            const response = await apiBaseUrl.get(`/${id}/activity`);
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};

/**
 * retrieve user average sessions information
 * @param {Number} id 
 * @returns {Object} user average sessions information
 */


export const getUserAverageSessions = async (id) => {
    try {
        if (mockedDatas) {
            const response = await USER_AVERAGE_SESSIONS.filter(
                (x) => x.userId === +id
            );
            return {
                data: response[0],
            };
        } else {
            const response = await apiBaseUrl.get(`/${id}/average-sessions`);
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};

/**
 * retrieve user performance information
 * @param {Number} id 
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
        console.log(error);
    }
};
