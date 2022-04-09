interface ReasonForSparingProps { 
	reasonForSparing: string;
	onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ reasonForSparing, onChangeReasonForSparing }) =>  {

  return (
    <div className="container">
        <label>
        Reason for Sparing
        <textarea
          value={reasonForSparing}
          onChange={onChangeReasonForSparing}
          placeholder="Enter a reason for sparing"
          className="input"
        />
        </label>
    </div>
  );
};

export default ReasonForSparing;