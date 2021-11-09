import {GraphView} from "./GraphView";
import {useEffect, useState} from "react";
import {getPatientInfo} from "../services/PatientsServices";
import {Title} from "../utils/Title";
import {Unit} from "../utils/Unit";
import Bmi from "../utils/Bmi";


export function GraphsView(props) {
    /**
     * selected: state contain list of patients where selected = true
     * prevProps: contain previous props
     */
    const [selected, setSelected] = useState([])
    const [prevProps, setPrevProps] = useState(props)

    useEffect(() => {
        setPrevProps(props)
        if (prevProps !== props) {
            for (let patient of props.patients) {
                if (patient.selected) {
                    getPatientInfo(patient.id)
                        .then(result => {
                            if (result.success) {
                                setSelected(s => [...s, result.data])
                            }
                        })
                        .catch(reason => {
                            console.log(reason)
                        })
                } else {
                    setSelected(selected.splice(patient, 1))
                }
            }
        }

    }, [prevProps, props, selected])

    function doGraphs() {
        let constante = {}
        let names = []
        let display = []

        selected.forEach((patient) => {
            for (const subCategory in patient) {
                if (!names.includes(patient.admin.lastname + " " + patient.admin.firstname)) {
                    names.push(patient.admin.lastname + " " + patient.admin.firstname)
                }

                /**
                 * Check if subCategory not equals at id or admin
                 * Condition true :
                 * Enter in a switch if data will format with a specific format add case like biometrics subCategory
                 * for patient
                 * Condition false:
                 * Pass
                 */
                if (subCategory !== "id" && subCategory !== "admin") {
                    switch (subCategory) {
                        case "biometrics":
                            const imc = Bmi(patient[subCategory].weight, patient[subCategory].size)
                            if (!(Unit['bmi'] in constante)) {
                                constante[Unit['bmi']] = {
                                    title: Title[subCategory],
                                    values: {}
                                }
                            }
                            if (!('bmi' in constante[Unit['bmi']].values)) {
                                constante[Unit['bmi']].values['bmi'] = []
                            }
                            constante[Unit['bmi']].values['bmi'].push(imc)
                            break
                        default:
                            for (const key in patient[subCategory]) {
                                if (!(Unit[key] in constante)) {
                                    constante[Unit[key]] = {
                                        title: Title[subCategory],
                                        values: {}
                                    }
                                }
                                if (!(key in constante[Unit[key]].values)) {
                                    constante[Unit[key]].values[key] = []
                                }
                                constante[Unit[key]].values[key].push(patient[subCategory][key])
                            }
                            break
                    }

                }
            }
        })

        for (const subCategory in constante) {
            display.push(
                <GraphView key={subCategory} unit={subCategory} elements={constante[subCategory]} names={names}/>
            )
        }
        return (
            display.length > 0? <div className={"float-left p-10 w-4/5 h-auto grid grid-cols-2 gap-10"}>
                {display}
            </div>: <div className={"float-left p-10 w-4/5 h-full text-4xl"}>
                Veuillez sélectionner d'une à quatre personnes
            </div>
        )
    }

    return (
        doGraphs()
    )
}