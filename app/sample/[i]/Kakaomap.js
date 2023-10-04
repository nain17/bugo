'use client'
import Script from 'next/script'
import { useEffect } from 'react'

export default function Kakaomap({KAKAOMAP_API_KEY}) {
    useEffect(()=>{
        let kakaoMapScript = document.createElement('script')
        kakaoMapScript.async = false
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAOMAP_API_KEY}&autoload=false&libraries=services`
        document.head.appendChild(kakaoMapScript)
        
        function onLoadKakaoAPI(){
            window.kakao.maps.load(() => {
                var container = document.getElementById('map')
                var options = {
                    center: new window.kakao.maps.LatLng(37.5804523853297, 126.997196437908),
                    level: 4,
                }
                var map = new window.kakao.maps.Map(container, options)

                var iwContent = '서울대병원 장례식장'

                var infowindow = new window.kakao.maps.InfoWindow({
                    map: map, // 인포윈도우가 표시될 지도
                    //세로좌표 0.0002 올렸음
                    position : new window.kakao.maps.LatLng(37.58065, 126.99719), 
                    content : iwContent,
                });

                var geocoder = new window.kakao.maps.services.Geocoder();
                //마커표시될 위치
                // var markerPosition  = new window.kakao.maps.LatLng(37.5804523853297, 126.997196437908);
                // // 마커를 생성합니다
                // var marker = new window.kakao.maps.Marker({
                //     position: markerPosition,
                //     map: map,
                //     title: '서울대병원',
                // });
                // marker.setMap(map);
                })
        }

        kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
    },[])
    let haha
    function handleClick(){
        new daum.Postcode({
            oncomplete: function(data) {
                var mapContainer = document.getElementById('map')
                var options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                }
                var map = new window.kakao.maps.Map(mapContainer, options)

                var geocoder = new window.kakao.maps.services.Geocoder();
                //마커표시될 위치
                var markerPosition  = new window.kakao.maps.LatLng(33.450701, 126.570667);
                // 마커를 생성합니다
                var marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                    map: map,
                });
                var addr = data.address; // 최종 주소 변수

                // 주소 정보를 해당 필드에 넣는다.
                document.getElementById("sample5_address").value = addr;
                // 주소로 상세 정보를 검색
                geocoder.addressSearch(data.address, function(results, status) {
                    // 정상적으로 검색이 완료됐으면
                    if (status === daum.maps.services.Status.OK) {

                        var result = results[0]; //첫번째 결과의 값을 활용
                        // 해당 주소에 대한 좌표를 받아서
                        var coords = new daum.maps.LatLng(result.y, result.x);
                        haha = coords;
                        // 지도를 보여준다.
                        mapContainer.style.display = "block";
                        map.relayout();
                        // 지도 중심을 변경한다.
                        map.setCenter(coords);
                        // 마커를 결과값으로 받은 위치로 옮긴다.
                        marker.setPosition(coords)
                        console.log(haha)
                    }
                });
            }
        }).open();
    }
    
  return (
    <div>
        <Script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></Script>
        {/* <input type="text" id="sample5_address" placeholder="주소"></input> */}
        {/* <div onClick={handleClick}>주소검색</div> */}
        <div className=' m-auto w-96 h-96' id='map'></div>
    </div>
  )
}