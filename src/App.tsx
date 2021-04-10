import React from "react";

export function App() {
    return (
        <div className="main">
            <h1>Typescript/React Template Project</h1>
            This project takes advantage of the Typescript compiler's built-in ability to convert JSX syntax to React
            calls and <a href="https://www.typescriptlang.org/tsconfig/#outFile">bundle modules into a single file</a>,
            eliminating the need for tools such as Webpack or Babel.
        </div>
    );
}
