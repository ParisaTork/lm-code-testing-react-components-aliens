interface ErrorMessageProps { 
	errorMessage: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) =>  {

  return (
    <>
        <label htmlFor='errorMessage' className='error'>{ errorMessage }</label>
    </> );
};

export default ErrorMessage;