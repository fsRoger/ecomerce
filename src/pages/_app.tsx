import R_Layout from '@/components/R_Layout';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='font-bodyFont bg-gray-300'>
      <R_Layout>
        <Component {...pageProps} />
      </R_Layout>
    </div>
  );
}
