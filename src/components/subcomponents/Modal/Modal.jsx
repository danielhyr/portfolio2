import Close from '../../../data/images/close-24px.svg'
import './Modal.scss'
import youtube from '../../../data/images/youtube.png'
import github from '../../../data/images/GitHub-Mark-32px.png'

const Modal = props => {

    if (!props.show) {
        return null
    }

    console.log(props.pictures)

    return (
        <div className="modal-del">
            <div className="modal-del-content">
                <img className="modal-del__close" src={Close} alt="x mark to close" onClick={() => props.setShow(false)}
                />

                <div className="modal-del__content">

                    <h4 className="modal-del__title">
                        {props.name}
                    </h4>
                    <p className="modal-del__para">{props.description}</p>
                    <div className="modal-del__pictures">
                        {props.pictures.map(image => {
                            return <div className="modal-del__pics" ><img src={image} className="modal-del__picsIn" /></div>
                        })}
                    </div>
                    <h3 > {props.name} was built with...</h3>
                    <div className="modal-del__techstack">
                        {props.tech.map(tech => {
                            return <div className="modal-del__tech" ><img src={tech} className="modal-del__techIn" /></div>
                        })}
                    </div>
                    <h3>Explore "{props.name}" on...</h3>
                    <div className="modal-del-footer">
                        <a href = {props.link[0]}><img className="modal-del-footer__icons1" src={youtube} /></a>
                        <a href = {props.link[1]}><img className="modal-del-footer__icons" src={github} /></a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Modal