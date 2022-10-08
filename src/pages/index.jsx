import { useTimerContext } from "../contexts/timer"

export default function Home() {
  
  const {
    segundos,
    minutos,
    intervalo,
    voltas,

    iniciarTimer,
    pararTimer,
    finalizarTimer,
    apagarVolta,
    selectChequed,
  } = useTimerContext()

  return (
    <>
      <h1>Timer</h1>

      <h2>{minutos} : {segundos}</h2>

      <div className="bts">
        {
          !!intervalo
            ? <button onClick={pararTimer} >Parar</button>
            : <button onClick={iniciarTimer} >Iniciar</button>
        }
        <label htmlFor="pararTimer">
        <input type="checkbox" name="pararTimer" id="pararTimer" onChange={selectChequed} />
        Parar quando finalizar?
        </label>
        {segundos > 0 && <button onClick={finalizarTimer} >Finalizar</button>}
      </div>

      <section className="lista-de-voltas">
        <ul>
          {
            voltas.map(({ minuto, segundo }, i) => (
              <li key={`volta-${i}`} >
                {`Volta ${i+1}: `}<span>{minuto} : {segundo}</span>
                <button className="apagar_volta" onClick={apagarVolta(i)} >Apagar</button>
              </li>
            ))
          }
        </ul>
      </section>

    </>
  )
}
