function tagesVorschlag() {
  const zeit = parseInt(document.getElementById("zeit").value);
  const energie = document.getElementById("energie").value;
  let text = "";

  if (isNaN(zeit)) {
    document.getElementById("vorschlag").innerText =
      "Bitte gib eine Zeit ein.";
    return;
  }

  if (zeit <= 10) text = "Kurz entspannen oder atmen";
  else if (zeit <= 30 && energie === "low") text = "Leichte Aufgabe oder Musik hören";
  else if (zeit <= 60 && energie !== "low") text = "Etwas Sinnvolles lernen";
  else if (energie === "high") text = "Wichtige Aufgabe angehen";
  else text = "Routine-Aufgaben erledigen";

  document.getElementById("vorschlag").innerText =
    "Empfehlung für dich: " + text;
}

function entscheiden() {
  const a = document.getElementById("optA").value.trim();
  const b = document.getElementById("optB").value.trim();

  if (!a || !b) {
    document.getElementById("entscheidung").innerText =
      "Bitte beide Optionen eingeben.";
    return;
  }

  const scoreA = bewerten(a);
  const scoreB = bewerten(b);

  let text = "";
  if (scoreA > scoreB) {
    text = `Empfehlung: ${a} (wirkt sinnvoller & einfacher)`;
  } else if (scoreB > scoreA) {
    text = `Empfehlung: ${b} (wirkt sinnvoller & einfacher)`;
  } else {
    text = "Beide Optionen sind gleich gut – folge deinem Bauchgefühl.";
  }

  document.getElementById("entscheidung").innerText = text;
  localStorage.setItem("letzteEntscheidung", text);
}

function bewerten(text) {
  let score = 0;
  if (text.length < 15) score += 2; // kurze Dinge sind oft einfacher
  if (text.toLowerCase().includes("lernen")) score += 2;
  if (text.toLowerCase().includes("arbeit")) score += 2;
  score += Math.random() * 3; // kleine Varianz
  return score;
}
