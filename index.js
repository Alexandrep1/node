import PromptSync from 'prompt-sync';
import chalk from "chalk";
const prompt = PromptSync()

let nome = prompt("informe seu nome: ")

console.log(`seja bem vindo:  ${nome}`);
console.log(chalk.bgRgb(255, 0, 0)("teu merda"));

