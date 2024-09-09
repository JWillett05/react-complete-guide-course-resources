export default function UserInput({ onChange, valueInput }) {

    const handleInputChange = (inputIdentifier) => (event) => {
        onChange(inputIdentifier, event.target.value);
    };

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">Initial Investment</label>
                    <input 
                        type="number" 
                        id="initialInvestment" 
                        required 
                        value={valueInput.initialInvestment}
                        onChange={handleInputChange('initialInvestment')}
                    />
                </p>
                <p>
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input 
                        type="number" 
                        id="annualInvestment" 
                        required 
                        value={valueInput.annualInvestment}
                        onChange={handleInputChange('annualInvestment')}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expectedReturn">Expected Return</label>
                    <input 
                        type="number" 
                        id="expectedReturn" 
                        required 
                        value={valueInput.expectedReturn}
                        onChange={handleInputChange('expectedReturn')}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input 
                        type="number" 
                        id="duration" 
                        required 
                        value={valueInput.duration}
                        onChange={handleInputChange('duration')}
                    />
                </p>
            </div>
        </section>
    );
}
