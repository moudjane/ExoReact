import {useState} from 'react';
import './ShowResult.css' 

export function ShowResult({BotPick, PlayerPick}) {
    const [arr, setArr] = useState(["Pierre", "Feuille", "Ciseau"]);
    const [BotPickString, setBotPickString] = useState(null)
    setBotPickString(arr[BotPick])
    function Result(){
        if(PlayerPick === BotPick) return 'Egalitax';
        if(PlayerPick === 'Pierre' && BotPick === 'Feuille') return 'Défaire';
        if(PlayerPick === 'Pierre' && BotPick === 'Ciseau') return 'Victoire';
        if(PlayerPick === 'Feuille' && BotPick === 'Piere') return 'Victoire';
        if(PlayerPick === 'Feuille' && BotPick === 'Ciseau') return 'Défaite';
        if(PlayerPick === 'Ciseau' && BotPick === 'Pierre') return 'Défaite';
        if(PlayerPick === 'Ciseau' && BotPick === 'Feuille') return 'Victoire';
    }
return(
    <p>{Result}</p>
)
}

export default ShowResult;