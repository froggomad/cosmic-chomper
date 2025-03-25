/**
 * Cosmic Chomper - A Space-themed Pac-Man Game
 * Core gameplay mechanics and rendering
 */

// Game Canvas Setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const scoreElement = document.getElementById('score');
const livesElement = document.getElementById('lives');

// Game settings
const CELL_SIZE = 20;
const ROWS = 25;
const COLS = 40;
let score = 0;
let lives = 3;
let gameRunning = false;
let gamePaused = false;
let level = 1;

// Set canvas dimensions
function setupCanvas() {
    canvas.width = COLS * CELL_SIZE;
    canvas.height = ROWS * CELL_SIZE;
    
    // Adjust canvas size based on window size
    if (window.innerWidth < canvas.width) {
        const scale = window.innerWidth / canvas.width * 0.9;
        canvas.style.width = `${canvas.width * scale}px`;
        canvas.style.height = `${canvas.height * scale}px`;
    }
}

// Game assets