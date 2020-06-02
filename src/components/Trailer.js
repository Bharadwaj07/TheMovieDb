import React ,{useState}from 'react'
import Modal from 'react-modal';
import './Trailer.css';
function Trailer(props) {
    const customStyles = {
        content : {
          background: 'transparent',
          border:'none'
        }
      };
    const [openModal,setModal] = useState(false);
    //console.log(props.videos)
    const findKey =(videos)=>{
                if (videos.length === 0) {
                    return;
                }
                const { key } = videos.find(
                    video => video.type === 'Trailer' && video.site === 'YouTube'
                );
                return key
            }
            function closeModal(){
                setModal(false);
              }
              console.log("openmodla",openModal)
    return (
        
            <button onClick={() => setModal(true)}>
                Trailer
                <i className="fa fa-play" aria-hidden="true"></i>
                <Modal 
                  isOpen={openModal} 
                  onRequestClose={closeModal} 
                  style={customStyles} 
                  shouldCloseOnEsc={true}
                  >
                     <button className='trailerClose' onClick={() => setModal(false)}><i className="fa fa-times fa-2x" aria-hidden="true"></i></button>
                     <iframe className='videoModal' width='80%' height="80%" src={`https://www.youtube.com/embed/${findKey(props.videos)}`} title='youtube' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </Modal>
            </button> 
            
      
    )
}

export default  Trailer;

