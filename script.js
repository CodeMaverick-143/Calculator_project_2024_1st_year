body {
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: radial-gradient(circle, #0f0f0f, #1b1b1b, #2e2e2e);
    overflow: hidden;
}

.calculator {
    background: linear-gradient(145deg, #1a1a1a, #2b2b2b);
    border-radius: 25px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), inset 0 5px 15px rgba(255, 255, 255, 0.1);
    width: 100%;
    max-width: 500px;
    animation: slideIn 1s ease-out;
}

.display-container {
    margin-bottom: 20px;
    background: linear-gradient(145deg, #232323, #2d2d2d);
    border-radius: 15px;
    box-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.5);
    padding: 10px;
}

.display {
    width: 100%;
    height: 50px;
    background: none;
    border: none;
    border-radius: 15px;
    color: #00f9ff;
    font-size: 2rem;
    padding: 10px 15px;
    text-align: right;
    box-shadow: inset 0 3px 6px rgba(255, 255, 255, 0.1);
}

.secondary-display {
    width: 100%;
    height: 20px;
    background: none;
    border: none;
    color: #aaaaaa;
    font-size: 1rem;
    text-align: right;
}

.button {
    background: linear-gradient(145deg, #3b3b3b, #4e4e4e);
    border: none;
    border-radius: 15px;
    color: white;
    font-size: 1.2rem;
    padding: 20px;
    margin: 5px;
    flex: 1;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
    background: linear-gradient(145deg, #3b3b3b, #575757);
}

.button:hover {
    transform: scale(1.1);
    background: linear-gradient(145deg, #575757, #717171);
    color: #00f9ff;
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.8);
}

.row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.operator {
    background: linear-gradient(145deg, #ff0080, #ff4d94);
    box-shadow: 0 5px 15px rgba(255, 0, 128, 0.6);
}

.equal {
    background: linear-gradient(145deg, #00bcd4, #0099ff);
    box-shadow: 0 5px 15px rgba(0, 188, 212, 0.6);
}

@media (max-width: 600px) {
    .button {
        font-size: 1rem;
        padding: 12px;
    }

    .display {
        font-size: 1.6rem;
    }
}
