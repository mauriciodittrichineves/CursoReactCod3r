import React from "react";

export default args => {
    var int = Math.floor(Math.random() * (args.max - args.min) + args.min);

    return (
        <div>
            <h4>
             Meu número Aleatório é:    {int}
            </h4>
        </div>)
}