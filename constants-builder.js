const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, './src/old/constants/source');
const directoryPath = path.join(__dirname, './dist/old/constants');
// Получить названия файлов
const files = fs.readdirSync(sourcePath).filter(path => /.js$/.test(path));

// Создаем родительскую папку, если ее не существует
if (!fs.existsSync(directoryPath)) {
	fs.mkdirSync(directoryPath, { recursive: true });
}

files.forEach(file => {
	const sourceFilePath = path.resolve(sourcePath, file);
	// получаем объект с константами
	const constantModule = require(sourceFilePath);
	// 'breakpoints.js' -> 'breakpoints.json'
	const jsonName = file.slice(0, -2) + 'json';
	const jsonPath = path.resolve(directoryPath, jsonName);
	// превращаем объект в строку и записываем в файл json
	fs.writeFileSync(jsonPath, JSON.stringify(constantModule, null, 4), 'utf8');
});
