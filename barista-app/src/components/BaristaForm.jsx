import RecipeChoices from "./RecipeChoices";
import { useState } from "react";
import drinksJson from "./drinks.json";

function BaristaForm () {
    const [currentDrink, setCurrentDrink] = useState('');
    const [trueRecipe, setTrueRecipe] = useState({});

    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');

    const [inputs, setInputs] = useState({
    'temperature': '',
    'milk': '',
    'syrup': '',
    'blended': ''
    });

    const ingredients = {
        "temperature": ["hot", "lukewarm", "cold"],
        "syrup": ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
        "milk": ["cow", "oat", "goat", "almond", "none"],
        "blended": ["yes", "turbo", "no"],
    };

    const getNextDrink = () => {
        let random = Math.floor(Math.random() * drinksJson.drinks.length);

        setCurrentDrink(drinksJson.drinks[random].name);
        setTrueRecipe(drinksJson.drinks[random].ingredients);
    };

    const onCheckAnswer = () => {
        if (trueRecipe.temp != inputs['temperature']){
            setCheckedTemperature('wrong');
        }
        else {
            setCheckedTemperature("correct");
        }

    };

    const onNewDrink = () => {
        setCheckedTemperature('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');

        setInputs({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': '' });
        
        getNextDrink();
    };

    return (
        <div>
            <h1>Hi, I'd like to order a:</h1>
            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button className="button newdrink" onClick={onNewDrink}>🔄</button>
            </div>

            <form></form>
            <div>
                <h3>Temperature</h3>
                <div className="answer-space">
                    {inputs["temperature"]}
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                        }))}
                        label="temperature"
                        choices={ingredients["temperature"]}
                        checked={inputs["temperature"]}
                    />
                </div>

                <h3>Milk</h3>
                <div className="answer-space">
                    {inputs["milk"]}
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                        }))}
                        label="milk"
                        choices={ingredients["milk"]}
                        checked={inputs["milk"]}
                    />
                </div>

                <h3>Syrup</h3>
                <div className="answer-space">
                    {inputs["syrup"]}
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                        }))}
                        label="syrup"
                        choices={ingredients["syrup"]}
                        checked={inputs["syrup"]}
                    />
                </div>

                <h3>Blended</h3>
                <div className="answer-space">
                    {inputs["blended"]}
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                        }))}
                        label="blended"
                        choices={ingredients["blended"]}
                        checked={inputs["blended"]}
                    />
                </div>
            </div>
            <button className="button submit" onClick={onCheckAnswer}>Check Answer</button> 
            <button className="button submit" onClick={onNewDrink}>New Drink</button>
        </div>
    );
}

export default BaristaForm;