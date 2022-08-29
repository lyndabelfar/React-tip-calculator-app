import {useState} from 'react'
import BillForm from './components/BillForm'
import PersonsForm from './components/PersonsForm'
import ResetButton from './components/ResetButton'
import TipButton from './components/TipButton'
import TipForm from './components/TipForm'

function App() {
  const [billValue, setBillValue] = useState(0)
  const [persons, setPersons] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [tipAmount, setTipAmount] = useState(0)
  const [customTip, setCustomTip] = useState(0)


  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  const amount = billValue/persons;

  return (
    <div className="App">
      <div className="title">SPLI<br/>TTER</div>
      <div className="container">
        <div className="left-part">
    
          <BillForm
          billValue={billValue}
          setBillValue={setBillValue}
          />
          <div className="tip-btns-div">
            <TipButton buttonValue={5} amount={amount} setTipAmount={setTipAmount} setTotalAmount={setTotalAmount} />
            <TipButton buttonValue={10} amount={amount} setTipAmount={setTipAmount} setTotalAmount={setTotalAmount}/>
            <TipButton buttonValue={15} amount={amount} setTipAmount={setTipAmount} setTotalAmount={setTotalAmount}/>
            <TipButton buttonValue={25} amount={amount} setTipAmount={setTipAmount} setTotalAmount={setTotalAmount}/>
            <TipButton buttonValue={50} amount={amount} setTipAmount={setTipAmount} setTotalAmount={setTotalAmount}/>
            <TipForm setTipAmount={setTipAmount} setTotalAmount={setTotalAmount} amount={amount}  customTip={customTip} setCustomTip={setCustomTip} />
          </div>
          
          

          <PersonsForm 
          persons={persons}
          setPersons={setPersons}
          />
          
        </div>

        <div className="right-part">
          <div className='tip-div'>
            <p>Tip Amount <br/> <span>/person</span></p>
            <h1>{tipAmount}</h1>
          </div>
          <div className='amount-div'>
            <p>Total Amount <br/> <span>/person</span></p>
            <h1>{totalAmount}</h1>
          </div>
          <ResetButton setTipAmount={setTipAmount} setTotalAmount={setTotalAmount} />

        </div>


      </div>
    </div>
  );
}

export default App;
