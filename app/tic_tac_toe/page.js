'use client'
import MyHeader from '@/app/components/myHeader/myHeader';
import styles from './tic_tac_toe.module.css'
import {useState} from 'react'
import next from 'next';
import { create } from 'domain';


function Square({value, onSquareClick, classname}){
    return(
        <button className={styles[classname]} onClick={onSquareClick}>{value}</button>
    );
}

function Board({xIsNext, squares, onPlay}){
    const winner = calculateWinner(squares);
    let status;
    let winningSquares;
    if (winner) {
        status = "Winner: " + winner[0];
        winningSquares = winner.slice(1);

    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }


    function handleClick(i){
        if(squares[i] || calculateWinner(squares)){
            return;
        }
        const nextSquares = squares.slice();

        if(xIsNext){
            nextSquares[i] = 'X';
        }else{
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const createBoard = () =>{
        let boardArray = [];
        for(let i = 0; i<9; i++){
                boardArray.push(
                    <Square classname='square' key = {i} value={squares[i]} onSquareClick={() => handleClick(i)}/>
                )

        }
        return(boardArray);
    }

    const winningBoard = (winningSquares = []) => {
        let boardArray = [];
        console.log(winningSquares);
        for(let i = 0; i<9; i++){
            const isWinning = winningSquares.includes(i);
            if(isWinning){
                boardArray.push(
                    <Square classname='winningsquare' key = {i} value={squares[i]} onSquareClick={() => handleClick(i)}/>
                )
            }
            else{
                boardArray.push(
                    <Square classname='square' key = {i} value={squares[i]} onSquareClick={() => handleClick(i)}/>
                )
            }
        }
        return(boardArray);
    }

    const chooseBoard = (winner) =>{
        if(winner){
            console.log("Im A Winner!");
            return(winningBoard(winningSquares));

        }else{
            return(createBoard());
        }
    }

    return(
        <>
        <div className="status">{status}</div>

        <div className={styles.board}>
            {chooseBoard(winner)}
        </div>
        </>

    )
}


export default function Game(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 == 0;



    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove){
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;

        if(move > 0){
            description = 'Go to move #' + move;
            if(move == currentMove){
                description = 'You are at move #' + move
            }
        }else{
            description = 'Go to game start';
        }
        return (
        <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
        );
    });

    return(
        <>

    <MyHeader></MyHeader>
    <div className={styles.game}>
      <div className={styles.game_board}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className={styles.game_info}>
        <ol>{moves}</ol>
      </div>
    </div>
    </>
  );
};




function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], a, b, c];
    }
  }
  return null;
}



