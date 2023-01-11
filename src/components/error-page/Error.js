import './Error.css';
import { useNavigate } from 'react-router-dom';

function Error(){
    const navigate = useNavigate();
    return(
        <>
            <div className='error-container'>
                <div className="message-box">
                    <h1>..404</h1>
                    <p>Oops! Page Not Found</p>
                    <div className="buttons-con">
                        <div className="action-link-wrap">
                        <button onClick={() => navigate(-1)} className="link-button link-back-button">Go Back</button>
                        <a href="#" className="link-button">Go to Home Page</a>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Error;