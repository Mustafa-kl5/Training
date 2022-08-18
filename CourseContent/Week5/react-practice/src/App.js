import { HookTest } from "./Component/HookTest";
import "./App.css";

function App() {
    const btn = document.getElementById("text");

    function handelClick() {
        if (!btn) {
            return 0;
        }
        if (btn.className === "text") {
            btn.className = btn.className.replace("text", "text-unshow");
        } else {
            btn.className = btn.className.replace("text-unshow", "text");
        }
    }
    return (
        <div>
            <HookTest
                timeType="AM MUSTAF"
                name="mustafa mahmood kamel alowisi"
            />
            <button onClick={handelClick}>Hide</button>
        </div>
    );
}

export default App;
