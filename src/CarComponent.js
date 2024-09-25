import React, { useEffect, useState } from 'react';
import { carsData } from './cars'; 
import './App.css';

const CarComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await carsData(1, 10, 'json'); // Fetching data
        console.log('API Response:', result); // Log for debugging

        if (result && result.data) {
          setData(result.data); // Set data if available
        } else {
          setData([]); // Set empty array if no data
        }
      } catch (err) {
        console.error('Error fetching data:', err); // Log error
        setError('데이터를 가져오는 중 오류가 발생했습니다.'); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div className="loading">로딩 중...</div>; // Loading message
  }

  if (error) {
    return <div className="error">{error}</div>; // Display error message if any
  }

  if (!data.length) {
    return <div className="no-data">데이터가 없습니다.</div>; // No data message
  }

  return (
    <div className="car-component">
      <h1 className="title">2017 자동차 부적합 검사</h1>
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

export default CarComponent;