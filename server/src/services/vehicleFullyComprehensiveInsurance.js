export default function vehicleFullyComprehensiveInsurance(user, insurances) {
  const vehicleFullyComprehensiveInsurance = insurances.find(
    (insurance) => insurance.value === "vehicleFullyComprehensive"
  );
  if (
    user.car &&
    !user.insurancesAlreadyHave.includes("vehicleFullyComprehensive")
  ) {
    if (user.carAge < 5 || user.carValue > 9999) {
      vehicleFullyComprehensiveInsurance.status = 3;
      vehicleFullyComprehensiveInsurance.text = `
      
<p>${
        user.name
      }, du hast angegeben, dass du ein Auto besitzt, welches jünger als 5 Jahre alt oder mindestens 10.000 EUR wert ist und keine Vollkaskoversicherung besitzt. Bei deinem Fahrzeugwert könnte eine Vollkaskoversicherung für dich auf jeden Fall Sinn machen. ${
        user.insurancesAlreadyHave.includes("partialCarInsurance")
          ? "Durch deine abgeschlossene Teilkaskoversicherung bist du zumindest bereits vor den finanziellen Folgen einer Vielzahl von Ereignissen abgesichert."
          : "Sofern eine Vollkaskoversicherung für dich nicht in Frage kommt, solltest du zumindest eine Teilkaskoversicherung abschließen!"
      } Genaueres zur Vollkasko- und Teilkaskoversicherung erfährst du in den nachfolgenden Zeilen.</p>

      `;
    } else if (
      ((user.carAge > 4 && user.carAge < 10) ||
        (user.carValue > 2999 && user.carValue < 10000)) &&
      user.insurancesAlreadyHave.includes("partialCarInsurance")
    ) {
      vehicleFullyComprehensiveInsurance.status = 1;
      vehicleFullyComprehensiveInsurance.text = `
      
<p>${user.name}, du hast angegeben, dass du ein Auto besitzt, welches zwischen 5 und 9 Jahre alt oder zwischen 3.000 EUR und 9.999 EUR wert ist und bereits eine Teilkaskoversicherung, jedoch keine Vollkaskoversicherung, abgeschlossen hast. Bei deinem Fahrzeugwert könnte eine Vollkaskoversicherung für dich dennoch Sinn machen. Durch die Teilkaskoversicherung bist du zumindest bereits vor den finanziellen Folgen einer Vielzahl von Ereignissen abgesichert. Genaueres zur Vollkasko- und Teilkaskoversicherung erfährst du in den nachfolgenden Zeilen.</p>

      `;
    } else if (
      ((user.carAge > 4 && user.carAge < 10) ||
        (user.carValue > 2999 && user.carValue < 10000)) &&
      !user.insurancesAlreadyHave.includes("partialCarInsurance")
    ) {
      vehicleFullyComprehensiveInsurance.status = 2;
      vehicleFullyComprehensiveInsurance.text = `
      
<p>${user.name}, du hast angegeben, dass du ein Auto besitzt, welches zwischen 5 und 9 Jahre alt oder zwischen 3.000 EUR und 9.999 EUR wert ist und keine Teilkaskoversicherung oder Vollkaskoversicherung abgeschlossen hast. Bei deinem Fahrzeugwert könnte eine Vollkaskoversicherung für dich Sinn machen. Auf jeden Fall solltest du über den Abschluss einer Teilkaskoversicherung nachdenken. Wieso eine Vollkaskoversicherung wichtig sein kann, erfährst du in den nachfolgenden Zeilen.</p>

      `;
    } else {
      vehicleFullyComprehensiveInsurance.status = 1;
      vehicleFullyComprehensiveInsurance.text = `
      
<p>${user.name}, du hast angegeben, dass du ein Auto besitzt, welches älter als 9 Jahre und weniger 3.000 EUR wert ist und keine Vollkaskoversicherung besitzt. Da eine Vollkaskoversicherung im Verhältnis zu deinem Fahrzeugwert relativ teuer ist, solltest du dir überlegen, ob der Abschluss einer Vollkaskoversicherung für dich Sinn macht. Wieso eine Vollkaskoversicherung wichtig sein kann, erfährst du in den nachfolgenden Zeilen.</p>

      `;
    }
  } else {
    vehicleFullyComprehensiveInsurance.status = 0;
    vehicleFullyComprehensiveInsurance.text = `
    
<p>${user.name}, du hast angegeben, dass du ${
      user.car
        ? "bereits eine Vollkaskoversicherung für dein Auto besitzt. Glückwunsch, damit bist du vor den finanziellen Folgen eines selbstverschuldeten Unfalles bestens geschützt.</p> <p><strong>Bitte denke daran deinen Versicherungschutz regelmäßig überprüfen zu lassen!</strong></p>"
        : "kein Auto besitzt und benötigst daher keine Vollkaskoversicherung."
    } Wieso eine Vollkaskoversicherung wichtig sein kann, erfährst du in den nachfolgenden Zeilen.</p>
    
    `;
  }
  vehicleFullyComprehensiveInsurance.text += `

<h2>Auf einen Blick</h2>

<img src="/images/kfz-versicherung-infografik-produktseite-data.jpg">
  
<h2>Was sind Kaskoversicherungen?</h2>
    
<p>Mit einer Kaskoversicherung kann man sich vor den finanziellen Folgen eines Schadens an seinem eigenen Fahrzeug versichern. Pflicht ist sie nicht, dennoch besitzen ca. 85 Prozent aller Pkw-Fahrer eine Kaskoversicherung.</p>
    
<h2>Das sind die Leistungen</h2>
    
<p>Die Teilkaskoversicherung übernimmt die Kosten für Schäden am eigenen Fahrzeug. Dabei ist genau festgelegt, welche Schäden versichert sind. Dies sind zum Beispiel Schäden durch</p>
    
  <ul>
    <li>Kollisionen mit Haarwild</li>
    <li>Glasbruch</li>
    <li>Fahrzeugdiebstahl/Einbruchsversuch</li>
    <li>Diebstahl/Beschädigung von Zubehör</li>
    <li>Hagel/Sturm</li>
    <li>Überschwemmung</li>
    <li>Brand</li>
    </ul>
    
<p>Die Vollkaskoversicherung ersetzt – zusätzlich zu den Leistungen der Teilkaskoversicherung – weitere Schäden am eigenen Auto, zum Beispiel die Schäden nach einem selbst verursachten Unfall. Sie übernimmt auch die Kosten für Vandalismusschäden wie zum Beispiel zerkratzten Lack oder eine zerbeulte Tür.</p>
    
<h2>Selbstbeteiligung</h2>
    
<p>Versicherungskunden können darüber hinaus bei der Kaskoversicherung eine Selbstbeteiligung vereinbaren. Der Kunde übernimmt dann im Schadenfall einen Teil der Kosten selbst, zum Beispiel 150 Euro oder 300 Euro – auch dadurch lässt sich die Höhe des Beitrags beeinflussen.</p>
    
<h2>Schadenfreiheitsrabatt</h2>
    
<p>Wenn der Versicherungskunde über viele Jahre keine Unfälle oder Schäden hat, können dadurch die Beiträge sinken. Die Versicherer sprechen hier vom Schadenfreiheitsrabatt. Das heißt, sie gewähren dem Kunden – je nach Anzahl der schadenfreien Jahre – einen finanziellen Nachlass.</p>
    
<p>Ein Beispiel: Schließt ein Fahranfänger erstmalig einen Vertrag ab, zahlt er in der Kfz-Haftpflicht und in der Vollkaskoversicherung in der Regel mehr Beiträge als für einen Vertrag, der bereits viele Jahre unfallfrei läuft. Der Einfluss einer bestimmten Schadenfreiheitsklasse auf den Beitrag ist dabei von Versicherer zu Versicherer verschieden. Auch Sondereinstufungen eines Versicherers, zum Beispiel durch einen sogenannten „Rabattschutz“, werden nur unternehmensindividuell berücksichtigt und können nicht auf einen anderen Versicherer übertragen werden.</p>
    
<h2>Alkohol und Folgen für die Versicherung?</h2>
    
<p>Wer mehr als 0,3 Promille Alkohol im Blut hat, gilt als relativ fahrunfähig. Einzige Ausnahme: Für unter 21-Jährige und für Fahranfänger in der Probezeit gilt ein absolutes Alkoholverbot, also 0,0 Promille. Die relative Fahrunfähigkeit gilt allerdings nur, wenn noch weitere Indizien wie alkoholtypische Fahrfehler, Sprachschwierigkeiten oder ein beeinträchtigter Gang hinzukommen.</p>
    
<h2>Folgen für die Kfz-Haftpflichtversicherung:</h2>
    
<p>Die Kfz-Haftpflichtversicherung des alkoholisierten Versicherungskunden übernimmt immer den Schaden des Verkehrsopfers. Das Verkehrsopfer geht auch dann nicht leer aus, wenn der Fahrer alkoholisiert gefahren ist.</p>
    
<p>Wer unter Alkoholeinfluss einen Unfall verursacht, kann von seiner Kfz-Haftpflichtversicherung in Regress genommen werden, und zwar grundsätzlich bis zu einer Grenze von 5.000 Euro. Die Regress-Grenzen sind in der Kfz-Pflichtversicherungsverordnung geregelt.</p>
    
<h2>Folgen für die Kaskoversicherung:</h2>
    
<p>Der Kaskoversicherer kann bereits bei relativer Fahrunfähigkeit die Leistungen kürzen.​​​​​​​</p>
    
<p>Übrigens: Es gibt Anbieter am Markt, die auf den Einwand der groben Fahrlässigkeit verzichten. Das gilt allerdings nicht für Schäden, die unter Alkohol- oder Drogeneinfluss verursacht wurden oder beim Diebstahl des Fahrzeuges.</p>
    
      `;
  return vehicleFullyComprehensiveInsurance;
}
