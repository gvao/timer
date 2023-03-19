import styled from "styled-components"
import { useTimerContext } from "../contexts/timer"

export default function Home() {

  const {
    segundos,
    minutos,
  } = useTimerContext()

  return (
    <Container>
      <h1>Timer</h1>

      <Relogio minutos={minutos} segundos={segundos} />

      <Actions />

      <ListadeVoltas />

    </Container>
  )
}

const Relogio = ({ minutos, segundos }) => <ContainerTitule>{minutos} : {segundos}</ContainerTitule>

const Actions = () => {

  const {
    pararTimer,
    iniciarTimer,
    finalizarTimer,
    selectChequed,
    intervalo,
    segundos,

    checkedForStop,
  } = useTimerContext()

  return <>

    <ContainerBts className="bts">
      {
        !!intervalo
          ? <button onClick={pararTimer} >Parar</button>
          : <button onClick={iniciarTimer} >Iniciar</button>
      }
      <label htmlFor="pararTimer">
        <input type="checkbox" name="pararTimer" id="pararTimer" onChange={selectChequed} />
        <span>Parar quando finalizar?</span>
      </label>
      {segundos > 0 && <button onClick={finalizarTimer} >{checkedForStop ? 'Finalizar' : 'Volta'}</button>}
    </ContainerBts>

  </>
}

const ListadeVoltas = () => {

  const { voltas, apagarVolta } = useTimerContext()

  return <>

    <ContainerListadeVoltas >
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
    </ContainerListadeVoltas>

  </>
}


const ContainerTitule = styled.h2`

  width: 100%;
  font-size: 90px;
  text-align: center;

`

const Container = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;

`

const ContainerBts = styled.div`

  display: flex;
  flex-direction: column;
  gap: 8px;

`

const ContainerListadeVoltas = styled.section`

  margin-top: 16px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    border: 0.5px solid;
    padding: 8px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      display: flex;
      gap: 6px;
    }
  }

`