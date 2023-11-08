
import { Helmet } from 'react-helmet';
import '../index.css';

const ErrorPage = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Helmet>
                <title>Page - not find</title>
            </Helmet>
            <div className='area mx-auto'>
                <img className='mx-auto' src="https://i.ibb.co/cyN8ZNd/HTML-404-Error-Page.gif" alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;