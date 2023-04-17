
import { useTimerContext } from "../contexts/timer"
import { Container, ContainerBts, ContainerListadeVoltas, Title, Subtitle, Button, } from "../layout/styles.jsx"

export default function Home() {

  const {
    segundos,
    minutos,
  } = useTimerContext()

  return (
    <Container>

      <Title>Timer</Title>

      <Relogio minutos={minutos} segundos={segundos} />

      <Actions />

      <ListadeVoltas />

    </Container>
  )
}

const Relogio = ({ minutos, segundos }) =>
  <Subtitle>{minutos} : {segundos}</Subtitle>

const Actions = () => {

  const {
    pararTimer,
    iniciarTimer,
    finalizarTimer,
    selectChequed,
    intervalo,
    segundos,

    isRunning,

    checkedForStop,
  } = useTimerContext()

  return <>

    <ContainerBts className="bts">
      {
        isRunning
          ? <Button onClick={pararTimer} >Parar</Button>
          : <Button onClick={iniciarTimer} >Iniciar</Button>
      }

      {
        isRunning && (
          <>

            <label htmlFor="pararTimer" class={checkedForStop && `checked`}>

              <input
                type="checkbox"
                name="pararTimer"
                id="pararTimer"
                onChange={selectChequed}
              />

              <span>Parar quando finalizar?</span>

            </label>

            <Button onClick={finalizarTimer} >
              {checkedForStop ? 'Finalizar' : 'Volta'}
            </Button>
          </>
        )
      }

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
              <p><span>{minuto} : {segundo}</span>{` | Volta ${i + 1}`}</p>
              <Button className="apagar_volta" onClick={apagarVolta(i)} >Apagar</Button>
            </li>
          ))
        }
      </ul>
    </ContainerListadeVoltas>

  </>
}