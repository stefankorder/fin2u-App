export default function fullyComprehensiveMotorcycleInsurance(
  user,
  insurances
) {
  const fullyComprehensiveMotorcycleInsurance = insurances.find(
    (insurance) => insurance.value === "fullyComprehensiveMotorcycleInsurance"
  );
  if (
    user.motorcycle &&
    !user.insurancesAlreadyHave.includes(
      "fullyComprehensiveMotorcycleInsurance"
    )
  ) {
    if (user.motorcycleValue > 11999) {
      fullyComprehensiveMotorcycleInsurance.status = 3;
      fullyComprehensiveMotorcycleInsurance.text = `
      
<p>${user.name}, du hast angegeben, dass du ein Motorrad besitzt, welches mindestens 12.000 EUR wert ist. Vollkaskoversicherungen für Motorräder sind zwar verhältnismäßig teuer, aufgrund des hohen Wertes deines Motorrads solltest du dir dennoch überlegen eine Vollkaskoversicherung abzuschließen. Wieso eine Vollkaskoversicherung wichtig sein kann, erfährst du in den nachfolgenden Zeilen.</p>
      
      `;
    } else {
      fullyComprehensiveMotorcycleInsurance.status = 1;
      fullyComprehensiveMotorcycleInsurance.text = `
      
<p>${user.name}, du hast angegeben, dass du ein Motorrad besitzt, dein Motorrad jedoch unter 12.000 EUR wert ist. Da eine Vollkaskoversicherung für Motorräder verhältnismäßig teuer ist, solltest du dir überlegen, ob der Abschluss einer Vollkaskoversicherung für dich Sinn macht, oder du lieber "nur" eine Teilkaskoversicherung abschließt. Wieso die Vollkaskoversicherung dennoch ihr Geld wert sein kann, erfährst du in den nachfolgenden Zeilen.</p>
      
      `;
    }
  } else {
    fullyComprehensiveMotorcycleInsurance.status = 0;
    fullyComprehensiveMotorcycleInsurance.text = `
    
<p>${user.name}, du hast angegeben, dass du ${
      user.motorcycle
        ? "bereits eine Vollkaskoversicherung für dein Motorrad besitzt. Glückwunsch, damit bist du vor den finaziellen Folgen eines selbstverschuldeten Unfall bestens geschützt.</p> <p><strong>Bitte denke daran deinen Versicherungschutz regelmäßig überprüfen zu lassen!</strong></p>"
        : "kein Motorrad besitzt und benötigst daher keine Vollkaskoversicherung für ein Motorrad."
    } Für was eine Vollkaskoversicherung leistet, erfährst du in den nachfolgenden Zeilen.</p>
    
    `;
  }
  fullyComprehensiveMotorcycleInsurance.text += `
  
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
  return fullyComprehensiveMotorcycleInsurance;
}
