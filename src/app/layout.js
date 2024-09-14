import localFont from "next/font/local";
import "./globals.css";
import { Prompt } from '@next/font/google'

const prompt = Prompt({
  subsets: ['latin'], // adjust as per your use case
  weight: ['400', '500', '700','900'], // select specific weights
})

export const metadata = {
  title: "ECP E-SPORT ROV Tournament ชิงเงินรางวัลรวม5000บาท",
  description: "ROV E-SPORT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={prompt.className}>
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
