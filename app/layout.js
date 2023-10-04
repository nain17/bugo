import Link from 'next/link';
import './globals.css'
import { Roboto, Noto_Sans_KR } from "next/font/google"

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

export const metadata = {
  title: '부고장 만들기',
  description: '무료 부고장 만들기',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <nav className='flex justify-around'>
          <ul className='flex text-4xl space-x-3'>
            <li className=' text-blue-700'><Link href='/'>부고장</Link></li>
          </ul>
          <ul className='flex text-xl space-x-3'>
            <li><Link href='/newpost'>부고만들기</Link></li>
            <li><Link href='/list'>부고조회</Link></li>
            <li><Link href='/info'>상장례정보</Link></li>
            <li><Link href='/faq'>자주묻는질문</Link></li>
            </ul>
        </nav>
        {children}</body>
    </html>
  )
}
