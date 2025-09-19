class RockPaperScissorsGame {
    constructor() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.isGameActive = true;

        this.choices = {
            rock: { symbol: "✊", beats: "scissors" },
            paper: { symbol: "✋", beats: "rock" },
            scissors: { symbol: "✌️", beats: "paper" }
        };

        this.messages = {
            waiting: "Choose your move!",
            thinking: "Computer is thinking...",
            result_win: "You Win!",
            result_lose: "Computer Wins!",
            result_draw: "It's a Draw!"
        };

        this.initializeElements();
        this.attachEventListeners();
    }

    initializeElements() {
        this.playerScoreEl = document.getElementById('playerScore');
        this.computerScoreEl = document.getElementById('computerScore');
        this.choiceButtons = document.querySelectorAll('.choice-btn');
        this.gameStatusEl = document.getElementById('gameStatus');
        this.playerChoiceDisplayEl = document.getElementById('playerChoiceDisplay');
        this.computerChoiceDisplayEl = document.getElementById('computerChoiceDisplay');
        this.gameResultEl = document.getElementById('gameResult');
        this.resetButtonEl = document.getElementById('resetGame');
    }

    attachEventListeners() {
        this.choiceButtons.forEach(btn => btn.addEventListener('click', e => this.handlePlayerChoice(e)));
        this.resetButtonEl.addEventListener('click', () => this.resetGame());
    }

    handlePlayerChoice(e) {
        if (!this.isGameActive) return;
        this.playRound(e.currentTarget.dataset.choice);
    }

    async playRound(playerChoice) {
        this.isGameActive = false;
        this.displayPlayerChoice(playerChoice);
        this.gameStatusEl.textContent = this.messages.thinking;

        const computerChoice = this.generateComputerChoice();
        await this.delay(10);
        this.displayComputerChoice(computerChoice);

        const result = this.determineWinner(playerChoice, computerChoice);
        this.showResult(result);

        if (result === 'win') { this.playerScore++; this.playerScoreEl.textContent = this.playerScore; }
        if (result === 'lose') { this.computerScore++; this.computerScoreEl.textContent = this.computerScore; }

        setTimeout(() => { this.isGameActive = true; this.resetRoundDisplay(); }, 1000);
    }

    displayPlayerChoice(choice) {
        this.playerChoiceDisplayEl.innerHTML = `<span class="choice-icon">${this.choices[choice].symbol}</span>`;
    }
    displayComputerChoice(choice) {
        this.computerChoiceDisplayEl.innerHTML = `<span class="choice-icon">${this.choices[choice].symbol}</span>`;
    }

    generateComputerChoice() {
        const options = Object.keys(this.choices);
        return options[Math.floor(Math.random() * options.length)];
    }

    determineWinner(player, computer) {
        if (player === computer) return 'draw';
        return this.choices[player].beats === computer ? 'win' : 'lose';
    }

    showResult(result) {
        let msg = '';
        if (result === 'win') msg = this.messages.result_win;
        if (result === 'lose') msg = this.messages.result_lose;
        if (result === 'draw') msg = this.messages.result_draw;

        this.gameStatusEl.textContent = msg;
        this.gameResultEl.textContent = msg;
        this.gameResultEl.className = `result-text show ${result}`;
    }

    resetRoundDisplay() {
        this.gameStatusEl.textContent = this.messages.waiting;
        this.playerChoiceDisplayEl.innerHTML = `<span class="choice-icon">❓</span>`;
        this.computerChoiceDisplayEl.innerHTML = `<span class="choice-icon">❓</span>`;
        this.gameResultEl.textContent = '';
        this.gameResultEl.className = 'result-text';
    }

    resetGame() {
        this.playerScore = 0; this.computerScore = 0;
        this.playerScoreEl.textContent = '0';
        this.computerScoreEl.textContent = '0';
        this.resetRoundDisplay();
    }

    delay(ms) { return new Promise(r => setTimeout(r, ms)); }
}

document.addEventListener('DOMContentLoaded', () => new RockPaperScissorsGame());
