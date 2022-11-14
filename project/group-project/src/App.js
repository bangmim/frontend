import React, { useState, useContext, useEffect, useRef, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function fetchData(searchYearCd) {
  const serviceKey=process.env.REACT_APP_SERVICE_KEY;
  // console.log(process.env.REACT_APP_SERVICE_KEY);

  const url = `https://api.odcloud.kr/api/15077586/v1/centers?page=${searchYearCd}&perPage=10&serviceKey=WV%2BGaslOLZJ8Ahm2kJuzpwbLG4izxcgItghQ8%2BvgcZq0YVEyrRvzdfxly8lq1xs%2FP83%2FZlpgpCXFDD2Rjz8Lmw%3D%3D&siDo=11&guGun=110&type=json&numOfRows=10&pageNo=1`;
  
  // const url = `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=WV%2BGaslOLZJ8Ahm2kJuzpwbLG4izxcgItghQ8%2BvgcZq0YVEyrRvzdfxly8lq1xs%2FP83%2FZlpgpCXFDD2Rjz8Lmw%3D%3D&searchYearCd=${searchYearCd}&siDo=11&guGun=110&type=json&numOfRows=10&pageNo=1`;

  const promise = fetch(url)
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })

  return promise;
}

export default App;

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [searchYearCd, setSearchYearCd] = useState(3);

  console.log(data);

  useEffect(() => {
    // setIsLoaded(false);

    fetchData(searchYearCd)
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error(error)
      setError(error)
    })
    .finally(() => setIsLoaded(true))
  }, [searchYearCd])

  if (error) {
    return <p>failed to fetch</p>
  }
  if (!isLoaded) {
    return <p>fetching data...</p>
  }
  return (
    <div style={{ margin: "1rem" }}>
      <h1>코로나19 예방접종센터 조회서비스</h1>

      <div className="foo bar baz">
        {/* Event */}
        <h2>Month</h2>
        <p>{searchYearCd}월</p>
        <button onClick={() => setSearchYearCd(searchYearCd - 1)}>Prev</button>
        <button onClick={() => setSearchYearCd(searchYearCd + 1)}>Next</button>
      </div>

      <div className="">
        <h2>Result</h2>
        <ul>
          {data.data.map((item, index) => (
            <li key={index}>{item.createdAt}, {item.address}, {item.centerName}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Map</h2>
        {/* <KakaoMap /> */}
      </div>

      <div>
        <h2>Chart</h2>
        <div style={{ height: "200px" }}>
          <Rechart />
        </div>
      </div>
    </div>
  )
}

// function KakaoMap({data}) {
//   const positions = [
//     {
//       title: "카카오",
//       latlng: { lat: 33.450705, lng: 126.570677 },
//     },
//     {
//       title: "생태연못",
//       latlng: { lat: 33.450936, lng: 126.569477 },
//     },
//     {
//       title: "텃밭",
//       latlng: { lat: 33.450879, lng: 126.56994 },
//     },
//     {
//       title: "근린공원",
//       latlng: { lat: 33.451393, lng: 126.570738 },
//     },
//   ]

//   return (
//     <Map // 지도를 표시할 Container
//       center={{
//         // 지도의 중심좌표
//         lat: 33.450701,
//         lng: 126.570667,
//       }}
//       style={{
//         // 지도의 크기
//         width: "100%",
//         height: "450px",
//       }}
//       level={3} // 지도의 확대 레벨
//     >
//       {positions.map((position, index) => (
//         <MapMarker
//           key={`${position.title}-${position.latlng}`}
//           position={position.latlng} // 마커를 표시할 위치
//           image={{
//             src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
//             size: {
//               width: 24,
//               height: 35
//             }, // 마커이미지의 크기입니다
//           }}
//           title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//         />
//       ))}
//     </Map>
//   )
// }

function Rechart({data}) {
  const chartData = [
    { name: '서울특별시',value: 400 },
    { name: '충청남도',value: 400 },
    { name: '광주광역시',value: 400 },
    { name: '경상남도',value: 400 },
    { name: '대구',value: 400 },
    { name: '부산',value: 400 },
    { name: '인천광역시',value: 400 },
    { name: '대전광역시',value: 400 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    
  ];
  

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={730} height={250}>
          <Pie data={chartData} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
    </ResponsiveContainer>
  )
}