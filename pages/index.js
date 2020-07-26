import Head from 'next/head'
import Menu from '../components/menu';

export default function Home() {
  return(
    <div>
      <Head> 
        <title>BanyuwangiKu</title>
      </Head>
      <Menu/>
      <div>
        <h1>Selamat Datang Di Praktikum WEB</h1>
      </div>
    </div> 
  );
}