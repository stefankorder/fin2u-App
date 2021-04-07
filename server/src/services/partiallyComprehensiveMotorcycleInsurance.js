export default function partiallyComprehensiveMotorcycleInsurance(
  user,
  insurances
) {
  const partiallyComprehensiveMotorcycleInsurance = insurances.find(
    (insurance) =>
      insurance.value === "partiallyComprehensiveMotorcycleInsurance"
  );
  if (
    user.motorcycle &&
    !user.insurancesAlreadyHave.includes(
      "partiallyComprehensiveMotorcycleInsurance"
    )
  ) {
    if (
      user.insurancesAlreadyHave.includes(
        "fullyComprehensiveMotorcycleInsurance"
      )
    ) {
      partiallyComprehensiveMotorcycleInsurance.status = 0;
      partiallyComprehensiveMotorcycleInsurance.text = `
      
<p>${user.name}, du hast angegeben, dass du ein Motorrad besitzt und bereits eine Vollkaskoversicherung abgeschlossen hast. Die Teilkaskoversicherung ist in der Vollkaksoversicherung bereits enthalten und ein separater Abschluss daher nicht nötig. Näheres zur Teilkasko- und Vollkaskoversicherung erfährst du in den nachfolgenden Zeilen.</p>
      
      `;
    } else if (user.motorcycleValue > 2999 && user.motorcycleValue < 12000) {
      partiallyComprehensiveMotorcycleInsurance.status = 3;
      partiallyComprehensiveMotorcycleInsurance.text = `
      
<p>${user.name}, du hast angegeben, dass du ein Motorrad besitzt, welches zwischen 3.000 EUR und 11.999 EUR wert ist und keine Teilkaskoversicherung oder Vollkaskoversicherung abgeschlossen hast. Bei deinem Fahrzeugwert könnte eine Teilkaskoversicherung für dich auf jeden Fall Sinn machen. Daher solltest du über den Abschluss einer Teilkaskoversicherung nachdenken. Wieso eine Teilkaskoversicherung wichtig sein kann, erfährst du in den nachfolgenden Zeilen.</p>
      
      `;
    } else if (user.motorcycleValue < 3000) {
      partiallyComprehensiveMotorcycleInsurance.status = 1;
      partiallyComprehensiveMotorcycleInsurance.text = `
      
<p>${user.name}, du hast angegeben, dass du ein Motorrad besitzt, welches weniger 3.000 EUR wert ist und keine Teilkaskoversicherung besitzt. Du könntest dir überlegen, ob der Abschluss einer Teilkaskoversicherung für dich Sinn macht. Wieso eine Teilkaskoversicherung wichtig sein kann, erfährst du in den nachfolgenden Zeilen.</p>
      
      `;
    } else {
      partiallyComprehensiveMotorcycleInsurance.status = 0;
      partiallyComprehensiveMotorcycleInsurance.text = `
      
<p>${user.name}, du hast angegeben, dass du ein Motorrad besitzt, welches mehr als 11.999 EUR wert ist und keine Teilkaskoversicherung besitzt. Bei deinem Fahrzeugwert macht eher der Abschluss einer Vollkaskoversicherung sinn. Schließe daher eher eine Vollkaskoversicherung für dein Motorrad ab, bevor du darüber nachdenkst eine Teilkaskoversicherung abzuschließen. Näheres zur Teilkasko- und Vollkaskoversicherung erfährst du in den nachfolgenden Zeilen.</p>
      
      `;
    }
  } else {
    partiallyComprehensiveMotorcycleInsurance.status = 0;
    partiallyComprehensiveMotorcycleInsurance.text = `
    
<p>${user.name}, du hast angegeben, dass du ${
      user.motorcycle
        ? "bereits eine Teilkaskoversicherung für dein Auto besitzt. Glückwunsch, damit ist dein Motorrad nicht nur bei unverschuldeten Unfällen abgesichert, sondern z. B. auch vor Diebstahl geschützt.</p> <p><strong>Bitte denke daran deinen Versicherungschutz regelmäßig überprüfen zu lassen!</strong></p>"
        : "kein Motorrad besitzt und daher keine Teilkaskoversicherung benötigst."
    } Näheres zur Teilkasko- und Vollkaskoversicherung erfährst du in den nachfolgenden Zeilen.</p>
    
    `;
  }
  partiallyComprehensiveMotorcycleInsurance.text += `

<h2>Auf einen Blick</h2>

<img src="/images/kfz-versicherung-infografik-produktseite-data.jpg">
  
<h2>Was sind Kaskoversicherungen?</h2>

<p>Mit einer Kaskoversicherung kann man sich vor den finanziellen Folgen eines Schadens an seinem eigenen Motorrad versichern. Pflicht ist sie nicht.</p>
  
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
  
<p>Die Vollkaskoversicherung ersetzt – zusätzlich zu den Leistungen der Teilkaskoversicherung – weitere Schäden am eigenen Motorrad, zum Beispiel die Schäden nach einem selbst verursachten Unfall. Sie übernimmt auch die Kosten für Vandalismusschäden wie zum Beispiel zerkratzten Lack oder eine zerbeulte Tür.</p>
  
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
  return partiallyComprehensiveMotorcycleInsurance;
}
