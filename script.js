function updateModeUI() {
    const toggle = document.getElementById("newsMode");
    const streamBlock = document.getElementById("streamBlock");
    const dateInput = document.getElementById("date");
    const dateLabel = document.querySelector('label[for="date"]'); 

    if (!toggle || !dateInput || !dateLabel) return;

    if (toggle.checked) {
        if (streamBlock) streamBlock.style.display = "none";
        dateLabel.textContent = "Заголовок";
        dateInput.placeholder = "ЗАГОЛОВОК";
    } else {
        if (streamBlock) streamBlock.style.display = "block";
        dateLabel.textContent = "Дата";
        dateInput.placeholder = "ДД.ММ.ГГ";
    }
}

function generate() {
    const newsMode = document.getElementById("newsMode").checked;

    const dateInput = document.getElementById("date");
    const date = dateInput.value || "ДД.ММ.ГГ";
    const topic = dateInput.value || "ТЕМА НОВОСТИ";

    let news = document.getElementById("news").value || "Текст.";
    const stream = document.getElementById("stream").value || "Текст.";

    // обработка только для новостей
    const linkRegex = /(https?:\/\/\S+|vk\.com\/\S+|www\.vk\.com\/\S+)/g;
    news = news.replace(linkRegex, (url) => {
        const fullUrl = url.startsWith("http") ? url : "https://" + url;
        return `[url=${fullUrl}]перейти по ссылке[/url]`;
    });

    news = news.replace(/\[(\d+)\]/g, (match, id) => `${match} ([link${id}]) `);

    let template;

    if (!newsMode) {
        template = `[font=cambria][size=13][color=#604a2e][bgrf=#83643f][pad=4 3 4 4][justify][divr=https://sun9-87.userapi.com/s/v1/ig2/tOsNZHat5ghBMLYe-vNRJ__70U1T-2KM1-i4inSw5g_G9jDSDN3Pr_UeG4bbDdz1pTeV58a7ybegJZ38piEKBTmV.jpg?quality=95&as=32x20,48x30,72x45,108x67,160x100,240x150,360x225,480x300,540x337,640x400,720x450,1080x675,1280x800,1440x900,1680x1050&from=bu&cs=1680x0][bgrf=#b08e6dBB][center][font=georgia][b][size=16][color=#4a3c2b][pad=8]СОБРАНИЕ ${date}[/pad][/color][/size][/b][/font][/center][/bgrf][bgrf=#83643f][pad=1.5][/pad][/bgrf][pad=20][bgrf=#c7a67f77][pad=3][font=georgia][b][size=14][color=#4a3c2b] НОВОСТИ[/color][/size][/b][/font][/pad][/bgrf][br]${news}[br][br][bgrf=#c7a67f44][pad=3][font=georgia][b][size=14][color=#4a3c2b][center][ [header=блок1]РАСКРЫТЬ ТРАНСЛЯЦИЮ СОБРАНИЯ[/header] ][/center][/color][/size][/b][/font][/pad][/bgrf][block=блок1][br]${stream}[/block][/pad][/divr][/justify][/pad][/bgrf][/color][/size][/font]`;
    } else {
        template = `[font=cambria][size=13][color=#604a2e][bgrf=#83643f][pad=4 3 4 4][justify][divr=https://sun9-87.userapi.com/s/v1/ig2/tOsNZHat5ghBMLYe-vNRJ__70U1T-2KM1-i4inSw5g_G9jDSDN3Pr_UeG4bbDdz1pTeV58a7ybegJZ38piEKBTmV.jpg?quality=95&as=32x20,48x30,72x45,108x67,160x100,240x150,360x225,480x300,540x337,640x400,720x450,1080x675,1280x800,1440x900,1680x1050&from=bu&cs=1680x0][bgrf=#b08e6dBB][center][font=georgia][b][size=16][color=#4a3c2b][pad=8]${topic}[/pad][/color][/size][/b][/font][/center][/bgrf][bgrf=#83643f][pad=1.5][/pad][/bgrf][pad=20][bgrf=#c7a67f77][pad=3][font=georgia][b][size=14][color=#4a3c2b] НОВОСТИ[/color][/size][/b][/font][/pad][/bgrf][br]${news}[br][/pad][/divr][/justify][/pad][/bgrf][/color][/size][/font]`;
    }

    document.getElementById("result").value = template;
}

function copyText() {
    const result = document.getElementById("result");
    result.select();
    result.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("newsMode");
    if (toggle) toggle.addEventListener("change", updateModeUI);
    updateModeUI();
});
