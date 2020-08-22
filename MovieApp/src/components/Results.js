import React from 'react';
import Result from './Result'

function Results(props) {
    return (
        <div>
            <section className="results">
            {props.results.map(result =>(
                <Result key={result.imdbID} result={result} 
                openPopup={props.openPopup}
                />
            ))}
            </section>
        </div>
    );
}

export default Results;