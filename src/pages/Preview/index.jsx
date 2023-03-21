import { Header } from '../../components/Header'
import { Container, Content } from './styles'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'
import { Link } from 'react-router-dom'
import { Rating } from '../../components/Rating'

import { RiArrowLeftLine } from 'react-icons/ri'
import { FaRegClock } from 'react-icons/fa'

export function Preview() {
  return (
    <Container>
      <Header />
      <main>
        <Link to="/">
          <ButtonText icon={RiArrowLeftLine} title="Voltar"></ButtonText>
        </Link>
        <Content>
          <div className="title">
            <h1>Nome do Filme</h1>
            <div className="stars-content">
              <Rating></Rating>
            </div>
          </div>
          <div className="autor-container">
            <Link to="/profile">
              <img src="https://github.com/FredRochaa.png" alt="User Image" />
            </Link>
            <p>Fred Rocha</p>
            <FaRegClock />
            <p>21/03/22 ás 2h30</p>
          </div>
          <div className="tags-container">
            <Tag title="teste"></Tag>
            <Tag title="teste"></Tag>
          </div>

          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que o
            "fantasma" é uma inteligência desconhecida que está enviando
            mensagens codificadas através de radiação gravitacional, deixando
            coordenadas em binário que os levam até uma instalação secreta da
            NASA liderada pelo professor John Brand. O cientista revela que um
            buraco de minhoca foi aberto perto de Saturno e que ele leva a
            planetas que podem oferecer condições de sobrevivência para a
            espécie humana. As "missões Lázaro" enviadas anos antes
            identificaram três planetas potencialmente habitáveis orbitando o
            buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em
            homenagem aos astronautas que os pesquisaram. Brand recruta Cooper
            para pilotar a nave espacial Endurance e recuperar os dados dos
            astronautas; se um dos planetas se mostrar habitável, a humanidade
            irá seguir para ele na instalação da NASA, que é na realidade uma
            enorme estação espacial. A partida de Cooper devasta Murphy.
          </p>
        </Content>
      </main>
    </Container>
  )
}
