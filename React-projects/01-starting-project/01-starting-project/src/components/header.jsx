import logoImg from '../assets/react-core-concepts.png';
const reactDescrpition = ['fundamentals', 'core', 'frontend Master']

function changeDis(max){
  return Math.floor(Math.random() * (max +1));

}


export default function Header(){
  const descrption = reactDescrpition[changeDis(2)];
  return(
     <header>
        <img src={logoImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {descrption} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}