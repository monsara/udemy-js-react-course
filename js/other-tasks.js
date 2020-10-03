'use strict';

// Извлечь число и единицы измерения из значения
{
    const borderWidth = '2.5px';

    const extractNumberFromValue = value => Number.parseFloat(borderWidth);
    const extractUnitsFromValue = value =>
        [...value].reduce(
            (units, char) =>
                !Number(char) && char !== '.' ? units + char : '',
            '',
        );

    // Проверка:

    // const number = extractNumberFromValue(borderWidth);
    // const units = extractUnitsFromValue(borderWidth);

    // console.log('number:', number);
    // console.log('units:', units);
}

//  Преобразовать первую букву слова в верхний регистр
{
    const ucFirst = string =>
        string ? string[0].toUpperCase() + string.slice(1) : string;

    // Проверка:
    // console.log(ucFirst('петя'));
}

// Прверить строку на спам
{
    const checkSpam = string =>
        string.toLowerCase().includes('viagra') ||
        string.toLowerCase().includes('xxx');

    // Проверка:
    console.log(checkSpam('buy ViAgRA now') == true);
}

// Обрезать строку по условию
{
    const truncate = (string, maxLength) =>
        string.length > maxLength
            ? `${string.slice(0, maxLength - 1)}...`
            : string;

    // Проверка:
    // console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
}

// Есть число1.2345 и мы хотим округлить число до 2-х знаков после запятой, оставить только 1.23.
{
    // console.log(Math.round(1.2345 * 100) / 100);
    // console.log(Number((1.2345).toFixed(2)));
}
