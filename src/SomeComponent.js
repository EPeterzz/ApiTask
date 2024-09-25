import React, { useEffect, useState } from 'react';
import { requestsData } from './requests';
import './App.css';

const SomeComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const result = await requestsData(1, 10);
      console.log('API Response:', result); // Log the full response
      if (result && result.data) {
        setData(result.data); // Extracting the 'data' array from the response
      } else {
        setData([]); // Set empty array if no data
      }
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <div className="loading">로딩 중...</div>;
  }

  if (!data.length) {
    return <div className="no-data">데이터가 없습니다.</div>;
  }

  return (
    <div className="car-component">
      <h1 className="title">2015 자동차 부적합 검사</h1>
      <ul className="car-list">
        {data.map((item, index) => (
          <li key={index} className="car-item">
            검사소: {item.검사소}, 경보: {item.경보}, 경적음: {item.경적음}, 계기: {item.계기}, 공기: {item.공기}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SomeComponent;