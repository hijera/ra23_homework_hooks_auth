import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AuthContext from "../contexts/AuthContext";
import NewsItem from "./NewsItem";

NewsList.propTypes = {
    
};

function NewsList(props) {
    const {token,handleLogout} = useContext(AuthContext);
    const [news,setNews] = useState([]);
    const getData = async () => {
        console.log('getdata');
        try {
            const response =await fetch(process.env.REACT_APP_HOST + process.env.REACT_APP_NEWS_LINK, {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token},
            });

            if (response.status===401)
            {
                handleLogout();
            }

            if (!response.ok) {

                throw new Error('News receiving failed');

            }

            const newsData =await response.json();
            setNews(newsData);
        } catch (e) {
            throw new Error(e);
        }
    };
    useEffect(()=>{
        getData();
    },[token])
    return (
        <div className={"news-block"}>
        {token &&
        <div className={"card-deck newslist"}>
            {   news.map(item=><NewsItem key={item.id} {...item} />) }
        </div>
        }
</div>
    );
}

export default NewsList;