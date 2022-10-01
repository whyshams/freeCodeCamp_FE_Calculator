import React,{useState} from 'react'


function Calculator() {
    const operators = ["*", "/", "+", "-"];
    const [exp, setExp] = useState("");
    const [io, setIO] = useState("0");
    const [solved, setSolved] = useState(false);

    return (
        <div class=" ">
            <div class="exp d-flex justify-content-center align-items-center m-3"><h1>{exp}</h1></div>
            <div id="display" class="io d-flex justify-content-center align-items-center m-3">
                <h1>{io}</h1>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
            <div class="ac ">
                <button className='p-1 m-1 btn btn-info' id="clear" onClick={clear}>
                    AC
                </button>
            </div>
            <div class="d">
                <button className='p-1 m-1 btn btn-info' id="divide" onClick={() => op("/")}>
                    /
                </button>
            </div>
            <div class="m">
                <button className='p-1 m-1 btn btn-info' id="multiply" onClick={() => op("*")}>
                    X
                </button>
            </div>
            <div class="a">
                <button id="add" className='p-1 m-1 btn btn-info' onClick={() => op("+")}>
                    +
                </button>
            </div>
            <div class="s">
                <button className='p-1 m-1 btn btn-info' id="subtract" onClick={() => op("-")}>
                    -
                </button>
            </div>
            
          
                
            </div>
            <div className="d-flex flex-wrap justify-content-center align-items-center">
            
            <div class="n0">
                <button className='p-1 m-1 btn btn-warning' id="zero" onClick={() => n("0")}>
                    0
                </button>
            </div>
            <div class="n1">
                <button className='p-1 m-1 btn btn-warning' id="one" onClick={() => n("1")}>
                    1
                </button>
            </div>
            <div class="n2">
                <button className='p-1 m-1 btn btn-warning' id="two" onClick={() => n("2")}>
                    2
                </button>
            </div>
            <div class="n3">
                <button className='p-1 m-1 btn btn-warning' id="three" onClick={() => n("3")}>
                    3
                </button>
            </div>
            <div class="n4">
                <button className='p-1 m-1 btn btn-warning' id="four" onClick={() => n("4")}>
                    4
                </button>
            </div>
            <div class="n5">
                <button className='p-1 m-1 btn btn-warning' id="five" onClick={() => n("5")}>
                    5
                </button>
            </div>
            <div class="n6">
                <button className='p-1 m-1 btn btn-warning' id="six" onClick={() => n("6")}>
                    6
                </button>
            </div>
            <div class="n7">
                <button className='p-1 m-1 btn btn-warning' id="seven" onClick={() => n("7")}>
                    7
                </button>
            </div>
            <div class="n8">
                <button className='p-1 m-1 btn btn-warning' id="eight" onClick={() => n("8")}>
                    8
                </button>
            </div>
            <div class="n9">
                <button className='p-1 m-1 btn btn-warning' id="nine" onClick={() => n("9")}>
                    9
                </button>
            </div>
           
            <div class="dec">
                <button className='p-1 m-1 btn btn-warning' id="decimal" onClick={() => n(".")}>
                    .
                </button>
            </div>

            </div>
            <div className='d-flex justify-content-center align-items-center'>
            <div class="eq">
                <button className='p-1 m-1 btn btn-danger' id="equals" onClick={solve}>
                    =
                </button>
            </div>
            </div>
           
        </div>
    );

    function clear() {
        setExp("");
        setIO("0");
    }

    function op(toDo) {
        // working copy
        let wcExp = exp;

        if (solved) {
            wcExp = io;
            setSolved(false);
        }

        if (toDo !== "-") {
            wcExp = wcExp.replace(/[*\/+-]+$/, "");
        } else if (toDo === "-" && wcExp.endsWith("-")) {
            return;
        }

        setExp(wcExp + toDo);
        setIO(toDo);
    }

    function n(digit) {
        // working copy
        let wcExp = exp;
        let wcIO = io;

        if (digit === "0" && wcExp === "0") {
            return;
        }

        if (solved) {
            wcExp = "";
            wcIO = "";
            setSolved(false);
        }

        if (operators.includes(io)) {
            wcIO = "";
        }

        if (wcIO === "0") {
            wcIO = "";
        }

        if (digit === ".") {
            if (wcIO.includes(".")) {
                return;
            }

            if (wcIO === "") {
                wcIO = "0";
            }

            if (wcExp === "" || /[*\/+-]$/.test(wcExp)) {
                wcExp += "0";
            }
        }

        setExp(wcExp + digit);
        setIO(wcIO + digit);
    }

    function solve() {
        // working copy
        let wcExp = exp;

        wcExp = wcExp.replace(/[*\/+-]+$/, "");

        const answer = eval(wcExp).toString();

        setExp(wcExp + "=" + answer);
        setIO(answer);
        setSolved(true);
    }
}


export default Calculator