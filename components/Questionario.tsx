import QuestaoModel from "../model/questao"
import styles from '../styles/Questionario.module.css'
import Botao from "./Botao"
import Questao from "./Questao"

interface QuestionarioProps {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irPraProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

    function respostaFornecida(indice: number) {
        if (props.questao.naoRespondida) {
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }
    return (
        <div className={styles.questionario}>
            {props.questao ?
                <Questao
                    valor={props.questao}
                    tempoPraReposta={6}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.irPraProximoPasso} />
                : false
            }

            <Botao
                texto={props.ultima ? 'Finalizar' : 'Próxima'}
                onClick={props.irPraProximoPasso}
            />
        </div>
    )
}