import Header from './components/Header';
import LotteryResultsList from './components/LotteryResultsList';

export default function Home() {
  return (
    <div>
      <Header />
      <div className=" mx-auto px-4 py-8">
        <LotteryResultsList />
      </div>
    </div >
  );
}