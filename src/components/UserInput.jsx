export default function UserInput({inputData, onInputChange}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    {/* Not passing a pointer as it will not pass two arguments and will not have identifier so passing as anonymous for full control */}
                    {/* Value will also be in the event param which is automatically passed as an anonymous function */}
                    <input type="number" required value={inputData.initialInvestment} onChange={(event) => onInputChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={inputData.annualInvestment} required onChange={(event) => onInputChange('annualInvestment', event.target.value)} />
                </p>
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={inputData.expectedReturn} onChange={(event) => onInputChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={inputData.duration} onChange={(event) => onInputChange('duration', event.target.value)} />
                </p>
            </div>
        </section>
    );
}