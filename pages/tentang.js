import Head from 'next/head'
import Menu from '../components/menu';

export default function Tentang() {
  return(
    <div>
      <Head> 
        <h1>BanyuwangiKu</h1>
      </Head>
      <Menu/>
      <div>
        <h5>Tentang Kami</h5>
      </div>
    </div> 
  );
}