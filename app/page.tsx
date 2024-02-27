import Image from "next/image";
import './mainpage.css';
export default function Home() {
  return (
    <>
          <div className="main">
          
            <div className="category">
                <Image src="/iphones.png" alt="iPhones" width={300} height={200}/>
                <h1>iPhone</h1>
                <h3>от 47990 Р</h3>
            </div>
            <div className="category">
                <Image src="/ipad.png" alt="iPad" width={300} height={200}/>
                <h1>iPad</h1>
                <h3>от 37990 Р</h3>
            </div>
            <div className="category">
                <Image src="/watches.png" alt="Watch" width={300} height={200}/>
                <h1>Watch</h1>
                <h3>от 31990 Р</h3>
            </div>
            <div className="category">
                <Image src="/acces.png" alt="Accessories" width={250} height={200}/>
                <h1>Аксессуары</h1>
                <h3>от 490 Р</h3>
            </div>  
            <div className="category">
                <Image src="/smart.png" alt="Smart Home" width={300} height={200}/>
                <h1>Умный дом</h1>
                <h3>от 3990 Р</h3>
            </div>
            <div className="category">
                <Image src="/ipad.png" alt="iPad" width={300} height={200}/>
                <h1>iPad</h1>
                <h3>от 37990 Р</h3>
            </div>
            <div className="category">
                <Image src="/watches.png" alt="Watch" width={300} height={200}/>
                <h1>Watch</h1>
                <h3>от 31990 Р</h3>
            </div>
            <div className="category">
                <Image src="/acces.png" alt="Accessories" width={300} height={200}/>
                <h1>Аксессуары</h1>
                <h3>от 490 Р</h3>
            </div>   
          </div>
          <h1 className="notapple">У нас не только Apple</h1>
          <div className="logos">
            <div>
              <Image src="/applelogo.png" alt="Apple Logo" width={150} height={150}/>
            </div>
            <div>
              <Image src="/alisa-logo.png" alt="Yandex Logo" width={300} height={400}/>
            </div>
            <div>
              <Image src="/playstation5.png" alt="PS5" width={300} height={200}/>
            </div>
            <div>
              <Image src="/dyson.png" alt="Dyson" width={300} height={100}/>
            </div>
          </div>
          
      </>
  );
}
