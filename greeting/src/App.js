
import './App.css';

function App() {
  let curDate=new Date();
  curDate=curDate.getHours();
  let greeting="";

  if(curDate>=1 && curDate<12){
    greeting="Good Morning";
  }
   else if(curDate>12 && curDate<19){
    greeting="Good Afternoon";
  }
  else{
    greeting="Good Night";
  }
 

  return (
    <div className="App">
      <h1>Hello {greeting}</h1>
    </div>
  );
}

export default App;
