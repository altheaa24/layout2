import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TopLeft() {
  return <div className="top-left"></div>
}

function TopRight() {
  return <div className="top-right"></div>
}

function TopCenter() {
  return <div className="top-center">
    <TopCenterBox name="Althea" />
    <TopCenterBox name="Luriz" />
  </div>
}

function TopCenterBox(props) {
  return <div className="top-center-box">{props.name}</div>;
}

function TopRow() {
  return <div className="top-row">
    <TopLeft />
    <TopCenter />
    <TopRight />
  </div>;
}

function BottomLeft () {
  return <div className="bottom-left"></div>
}

function BottomRight () {
  return <div className="bottom-right"></div>
}

function BottomCenter() {
  return <div className="bottom-center">
    <BottomCenterBox name="C-PCIT9" />
    <BottomCenterBox name="IT3A" />
  </div>
}

function BottomCenterBox(props) {
  return <div className="bottom-center-box">{props.name}</div>;
}

function BottomRow() {
  return <div className="bottom-row">
    <BottomLeft />
    <BottomCenter />
    <BottomRight />
  </div>;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="main-container">

      <TopRow />

      <div class="middle-row">
        <div class="middle-left"></div>
        <div class="middle-right">
          <div class="middle-right-box-up"></div>
          <div class="middle-right-box-down"></div>
        </div>
      </div>

      <BottomRow />

    </div>
  )
}

export default App