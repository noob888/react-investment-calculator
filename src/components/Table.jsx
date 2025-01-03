import { calculateInvestmentResults, formatter } from "../util/investment.js"

export default function Table({ onInputChange }) {

    function deriveAnnualResult(userInput) {
        const results = calculateInvestmentResults(userInput);

        return results;
    };

    const finalTable = deriveAnnualResult(onInputChange);

    const initialInvestment = finalTable[0].valueEndOfYear - finalTable[0].interest - finalTable[0].annualInvestment;

    return (
        <table id="result">
            <thead id="thead">
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody id="tbody">
                {/* When passing a list of objects to map function, we will get each object(data) and its index  */}
                {/* If using () braces after =>, automatically returns, if using {}, need return statement to execute */}
                {finalTable.map((data, index) => {
                    const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;

                    return <tr key={index}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}