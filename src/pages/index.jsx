import styled from "styled-components"
import { useTimerContext } from "../contexts/timer"

export default function Timer() {

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
    <Container>
      <h1>Timer</h1>

      <h2>{minutos} : {segundos}</h2>

      <ContainerActions>
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
      </ContainerActions>

      <section className="lista-de-voltas">
        <ul>
          {
            voltas.map(({ minuto, segundo }, i) => (
              <li key={`volta-${i}`} >
                {`Volta ${i + 1}: `}<span>{minuto} : {segundo}</span>
                <button className="apagar_volta" onClick={apagarVolta(i)} >Apagar</button>
              </li>
            ))
          }
        </ul>
      </section>

    </Container>
  )
}

const Container = styled.main`
  height: 100vh;
  border: 2px solid white;

  ul { list-style: none; margin: 0; padding: 0; }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

`

const ContainerActions = styled.div`
  background-color: rgba(255,255,255,0.3);
  padding: 16px;
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

`
