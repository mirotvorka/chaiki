function generate() {
    const date = document.getElementById("date").value || "ДД.ММ.ГГ";
    const news = document.getElementById("news").value || "Текст новостей.";
    const stream = document.getElementById("stream").value || "Текст трансляции.";

    const template = `[font=cambria][size=13][color=#363636][bgrf=#333333][pad=4 3 4 4][justify][divr=http://d.zaix.ru/M9Pv.png][bgrf=#8B8B8D90][center][font=georgia][b][size=16][color=#2E2E2E][pad=8]СОБРАНИЕ ${date}[/pad][/color][/size][/b][/font][/center][/bgrf][bgrf=#333333][pad=1.5][/pad][/bgrf][pad=20][bgrf=#8B8B8D77][pad=3][font=georgia][b][size=14][color=#2E2E2E] НОВОСТИ[/color][/size][/b][/font][/pad][/bgrf][br]${news}[br][br][bgrf=#8B8B8D44][pad=3][font=georgia][b][size=14][color=#2E2E2E][center][ [header=трансляция1]РАСКРЫТЬ ТРАНСЛЯЦИЮ СОБРАНИЯ[/header] ][/center][/color][/size][/b][/font][/pad][/bgrf][block=трансляция1][br]${stream}[/block][/pad][/divr][/justify][/pad][/bgrf][/color][/size][/font]`;

    document.getElementById("result").value = template;
}

function copyText() {
    const result = document.getElementById("result");
    result.select();
    result.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

