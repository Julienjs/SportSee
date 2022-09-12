import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import SideBar from '../../Components/SideBar/SideBar';
import { getUserInfo } from '../../Tools/API'
import Activity from '../../Components/Activity/Activity';
import AverageSessions from '../../Components/Average-Sessions/AverageSessions';
import Performance from '../../Components/Performance/Performance';
import Error from '../Error/Error';
import Score from '../../Components/Score/Score';
import CardInfo from '../../Components/CardInfo/CardInfo';
import Calories from '../../assets/fire.png'
import Protein from '../../assets/chicken.png'
import Glucides from '../../assets/apple.svg'
import Lipides from '../../assets/cheeseburger.svg'
import Loader from '../../Components/Loader/Loader';
import './Dashboard.css'
import PropTypes from "prop-types";


/**
 * Dashboard page that displays all components (header, activity, averageSession, performance, score, cardInfo, sideBar)
 * @returns  all components (header, activity, averageSession, performance, score, cardInfo, sideBar)
 */

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [score, setScore] = useState(null)
    const [key, setKey] = useState(null);
    const [loading, setLoading] = useState(true);

    const urlParams = useParams()
    const { id } = urlParams

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await getUserInfo(id);
                setData(response.data)
                setFirstName(response.data.userInfos.firstName);
                setScore(response.data.todayScore || response.data.score)
                setKey(response.data.keyData)
            } catch (err) {
                console.log(err.response.data);
            } finally {
                setLoading(false);
            }
        };
        getUserData(id);
    }, [id]);


    return (
        loading ? <Loader />
            :
            data ?
                <div className='container'>
                    <main>
                        <SideBar />
                        <div className='chart-container'>
                            <Header firstName={firstName} />
                            <Activity id={id} />
                            <div className='performance-container'>
                                <AverageSessions id={id} />
                                <Performance id={id} />
                                <Score score={score} />
                            </div>
                        </div>
                        <section id="cardInfo-section">
                            <CardInfo image={Calories} type={"Calories"} value={key.calorieCount} />
                            <CardInfo image={Protein} type={"Proteines"} value={key.proteinCount} />
                            <CardInfo image={Glucides} type={"Glucides"} value={key.carbohydrateCount} />
                            <CardInfo image={Lipides} type={"Lipides"} value={key.lipidCount} />
                        </section>

                    </main>
                </div>
                :
                <Error />
    )
};

//proptypes for Dashboard
Dashboard.propTypes = {
    firstName: PropTypes.string,
    score: PropTypes.number,
    type: PropTypes.string,
    key: PropTypes.number,
    data: PropTypes.object
};

export default Dashboard;