import {mdiChevronDown, mdiChevronUp} from "@mdi/js";
import Icon from "@mdi/react";
import {useState} from "react";
import {Title} from "../utils/Title";
import {Age} from "../utils/Date";
import {Unit} from "../utils/Unit";

export function DropDown(props) {
    const [open, isOpen] = useState(false)
    let content = []

    for (let constante in props.content) {
        if (constante === "birth") {
            let birth = new Date(props.content[constante])
            let age = Age(props.content[constante])

            content.push(
                <div className={"pl-3 select-none " + (open ? "" : "hidden")} key={birth}>
                    {Title[constante]}
                    <span className={"float-right"}>
                        {birth.toISOString().split("T")[0]}
                    </span>
                </div>
            )
            content.push(
                <div className={"pl-3 select-none " + (open ? "" : "hidden")} key={constante}>
                    Age
                    <span className={"float-right"}>
                        {age} ans
                    </span>
                </div>
            )
        } else {
            content.push(
                <div className={"pl-3 select-none " + (open ? "" : "hidden")} key={constante}>
                    {Title[constante]}
                    <span className={"float-right"}>
                    {props.content[constante]} {Unit[constante]}
                    </span>
                </div>
            )
        }

    }

    return (
        <div className={"pl-3 select-none " + (props.open ? "" : "hidden")}>
            <div onClick={() => isOpen(!open)}>
                {props.title}
                <Icon path={open? mdiChevronUp: mdiChevronDown} size={1} className={"float-right"}/>
            </div>
            {content}
        </div>
    )
}