import Script from "next/script";

export default function Layout({children}){
    const KAKAOMAP_API_KEY = '91e8dea0bcf9e8b2ede7a67b30b73d3a'
    return(
        <div>
            <Script src ={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAOMAP_API_KEY}&autoload=false&libraries=services`} strategy="beforeInteractive"></Script>
            {children}
        </div>
    )
}