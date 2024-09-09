import{calculateInvestmentResults, formatter} from '../util/investment'

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = input.initialInvestment; // Directly use initial investment from input

    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(yearData => {
                    const totalInterest = 
                    yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;

                    const totalAmountInvested = initialInvestment + yearData.annualInvestment * yearData.year;

                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}