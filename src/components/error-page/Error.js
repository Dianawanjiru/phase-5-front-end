import './Error.css'

function Error(){
    return(
        <>
            <div className='error-container'>
                <div className="message-box">
                    <h1>..404</h1>
                    <p>Oops! Page Not Found</p>
                    <div className="buttons-con">
                        <div className="action-link-wrap">
                        <a onclick="history.back(-1)" className="link-button link-back-button">Go Back</a>
                        <a href="" className="link-button">Go to Home Page</a>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Error;