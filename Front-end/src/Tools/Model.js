/**
 * @description Create a class model to user information to call API
 * @param {Object} data
 *@returns {Object}
 */

export class userDataModel {
    constructor(response) {
        this.data = response.data;
        this.userInfos = response.data.userInfos;
        this.firstName = response.data.userInfos.firstName
        if (response.data.score) {
            this.todayScore = response.data.score;
        } else if (response.data.todayScore) {
            this.todayScore = response.data.todayScore;
        }
        this.keyData = response.data.keyData;
        if (response.error) this.error = response.error;
    }
}

/**
 * @description Create a class model to user activity to call API
 * @param {Object} data
 *@returns {Object}
 */

export class userActivity {
    constructor(data) {
        this.sessions = data.sessions;
    }
}

/**
 * @description Create a class model to user average sessions to call API
 * @param {Object} data
 *@returns {Object}
 */

export class userAverageSessions {
    constructor(data) {
        this.sessions = data.sessions;
    }
}

/**
 * @description Create a class model to user performance to call API
 * @param {Object} data
 *@returns {Object}
 */

export class userPerformance {
    constructor(data) {
        this.performance = data.data;
    }
}