import { createContext, useContext, useState } from "react";

const TimerContext = createContext()
export const useTimerContext = () => useContext(TimerContext)

export default function ProviderTimerContext({ children }) {

    const [contador, setContador] = useState(0)

    const [intervalo, setIntervalo] = useState(null)
    const [voltas, setVoltas] = useState([])
    const [checkedForStop, setcheckedForStop] = useState(false)

    const minutos = (Math.floor(contador / 60)).toString().padStart(2, 0)
    const segundos = (contador - (minutos * 60)).toString().padStart(2, 0)

    const adicionarUmSegundo = () => setContador(state => state + 1)
    const selectChequed = ({ currentTarget: { checked } }) => setcheckedForStop(checked)
    const iniciarTimer = event => {
        const inter = setInterval(adicionarUmSegundo, 1000)

        setIntervalo(inter)

        console.log("Iniciar timer")
    }
    const pararTimer = event => {
        setIntervalo(state => {
            clearInterval(state)
            return null
        })
        console.log("parar timer")
    }
    const finalizarTimer = event => {
        const timer = TimerModel(contador)

        setVoltas(state => ([...state, timer]))

        if (checkedForStop) {
            pararTimer()
            setContador(0)
        }
    }
    const apagarVolta = indice => event => setVoltas(state => state.filter((_, i) => i !== indice))


    return (
        <TimerContext.Provider value={{
            segundos,
            minutos,

            intervalo,
            voltas,

            checkedForStop,

            iniciarTimer,
            pararTimer,
            finalizarTimer,
            apagarVolta,
            selectChequed,
        }}>
            {children}
        </TimerContext.Provider>
    )
}

const TimerModel = (seg) => {

    const minutes = Math.floor(seg / 60)
    const segundo = (seg - minutes * 60)

    return {
        segundo: segundo.toString().padStart(2, 0),
        minuto: minutes.toString().padStart(2, 0),
    }
}
